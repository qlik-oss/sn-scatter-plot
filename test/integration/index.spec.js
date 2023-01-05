import path from 'path';
import serve from '@nebula.js/cli-serve';
import { test, expect, chromium } from '@playwright/test';
import createNebulaRoutes from '../utils/routes';
import { getTooltipContent, checkScreenshotBrushing, drag } from '../utils/shared';

test.describe('sn scatter plot: ui integration tests to test visual bugs', () => {
  let s;
  let route;

  test.beforeAll(async () => {
    s = await serve({
      entry: path.resolve(__dirname, '../../'),
      type: 'sn-scatter-plot',
      open: false,
      build: false,
      themes: [],
      flags: {
        BEST_FIT_LINE: true,
      },
      fixturePath: 'test/integration/__fixtures__',
    });

    route = createNebulaRoutes(s.url);
  });

  test.afterAll(async () => {
    s.close();
  });

  test.describe('Interaction', () => {
    test.describe('Tooltip', () => {
      test('Point data in scatter ', async () => {
        const renderUrl = await route.renderFixture('scatter_render_tooltip.fix.js');
        // Open page in Nebula which renders fixture
        // render svg added to the fix.js
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(renderUrl, { waitUntil: 'networkidle' });
        page.locator('[data-key="point-component"] g circle[data-label="Karl Anderson"]');
        await page.hover('[data-key="point-component"] g circle[data-label="Karl Anderson"]');
        expect(await getTooltipContent(page)).toEqual(
          'Karl Anderson Sales Rep Name: Karl Anderson Expense Amount: $11,735,257.41 # of Customers: 2 Budget: 12.91k'
        );
      });
      test('Binned data in scatter ', async () => {
        const renderUrl = await route.renderFixture('scatter_render_binned_snapshot_tooltip.fix.js');
        // Open page in Nebula which renders fixture
        // render svg added to the fix.js
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(renderUrl, { waitUntil: 'networkidle' });
        page.locator('[data-key="heat-map"] g rect[data-value="436904"]');
        await page.hover('[data-key="heat-map"] g rect[data-value="436904"]');
        expect(await getTooltipContent(page)).toEqual('Density: 3805');
      });
    });
    test.describe.only('Brush', () => {
      test('Select by point ', async () => {
        const renderUrl = await route.renderFixture('scatter_render_tooltip.fix.js');
        // Open page in Nebula which renders fixture
        // render svg added to the fix.js
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(renderUrl, { waitUntil: 'networkidle' });
        await page.click('[data-key="point-component"] g circle[data-label="Karl Anderson"]');
        await checkScreenshotBrushing('[data-key="point-component"]', page, 'brush_point_selection.png');
      });
      test('Select by categorical legend ', async () => {
        const renderUrl = await route.renderFixture('scatter_render_tooltip.fix.js');
        // Open page in Nebula which renders fixture
        // render svg added to the fix.js
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(renderUrl, { waitUntil: 'networkidle' });

        const source = await page.waitForSelector('[data-key="legend-color-cat"] g g[data-label="Craig Lary"]');
        const sourceRect = await source.boundingBox();
        const clickArea = {
          x: Math.ceil(sourceRect.x + sourceRect.width / 2),
          y: Math.ceil(sourceRect.y + sourceRect.height / 2),
        };
        await page.mouse.click(clickArea.x, clickArea.y);
        await checkScreenshotBrushing('[data-key="point-component"]', page, 'brush_legend_selection.png');
      });
      test('Select by Y-axis range ', async () => {
        const renderUrl = await route.renderFixture('scatter_render_tooltip.fix.js');
        // Open page in Nebula which renders fixture
        // render svg added to the fix.js
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(renderUrl, { waitUntil: 'networkidle' });

        await page.waitForSelector('svg[data-key="y-axis"]', { visible: true });
        const yAxisLabels = await page.$$('svg[data-key="y-axis"] text');
        const labelsMap = await page.$$eval('svg[data-key="y-axis"] text', (ticks) =>
          ticks.map((tick) => tick.textContent === '2' || tick.textContent === '6')
        );
        const range = yAxisLabels.filter((label, j) => labelsMap[j]);
        const lowerRect = await range[0].boundingBox();
        const upperRect = await range[1].boundingBox();

        const from = {
          x: lowerRect.x,
          y: lowerRect.y + lowerRect.height / 2,
        };

        const to = {
          x: upperRect.x,
          y: upperRect.y + upperRect.height / 2,
        };
        await drag(page, from, to, { steps: 20 });
        await checkScreenshotBrushing('[data-key="point-component"]', page, 'brush_y_axis_range_selection.png');
      });
      test('Select by X-axis range ', async () => {
        const renderUrl = await route.renderFixture('scatter_render_tooltip.fix.js');
        // Open page in Nebula which renders fixture
        // render svg added to the fix.js
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(renderUrl, { waitUntil: 'networkidle' });

        await page.waitForSelector('svg[data-key="x-axis"]', { visible: true });
        const yAxisLabels = await page.$$('svg[data-key="x-axis"] text');
        const labelsMap = await page.$$eval('svg[data-key="x-axis"] text', (ticks) =>
          ticks.map((tick) => tick.textContent === '$2,000,000.00' || tick.textContent === '$8,000,000.00')
        );
        const range = yAxisLabels.filter((label, j) => labelsMap[j]);
        const lowerRect = await range[0].boundingBox();
        const upperRect = await range[1].boundingBox();

        const from = {
          x: lowerRect.x,
          y: lowerRect.y + lowerRect.height / 2,
        };

        const to = {
          x: upperRect.x,
          y: upperRect.y + upperRect.height / 2,
        };
        await drag(page, from, to, { steps: 20 });
        await checkScreenshotBrushing('[data-key="point-component"]', page, 'brush_x_axis_range_selection.png');
      });
      test('Select bin ', async () => {
        const renderUrl = await route.renderFixture('scatter_render_binned_snapshot_tooltip.fix.js');
        // Open page in Nebula which renders fixture
        // render svg added to the fix.js
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(renderUrl, { waitUntil: 'networkidle' });
        await page.click('[data-key="heat-map"] g rect[data-value="436904"]');
        await checkScreenshotBrushing('[data-key="heat-map"]', page, 'brush_bin_selection.png');
      });
    });
    test.describe('Zoom', () => {
      test('Zoom data in scatter ', async () => {
        const renderUrl = await route.renderFixture('scatter_render_zoom.fix.js');
        // Open page in Nebula which renders fixture
        // render svg added to the fix.js
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(renderUrl, { waitUntil: 'networkidle' });

        expect(
          page.locator('[data-key="point-component"] g circle[data-label="Karl Anderson"]', {
            visible: true,
          })
        );
        expect(
          page.locator('[data-key="out-of-bounds"] g circle[data-label="Karl Anderson"]', {
            hidden: true,
          })
        );

        const zoomIn = page.locator('[title="Zoom in"]');
        zoomIn.click({ clickCount: 5 });

        expect(
          page.locator('[data-key="out-of-bounds"] g circle[data-label="Karl Anderson"]', {
            visible: true,
          })
        );
        expect(
          page.locator('[data-key="point-component"] g circle[data-label="Karl Anderson"]', {
            hidden: true,
          })
        );
        const resetZoom = page.locator('[title="Reset zoom"]');
        await resetZoom.click();
        expect(
          page.locator('[data-key="point-component"] g circle[data-label="Karl Anderson"]', {
            visible: true,
          })
        );
        expect(
          page.locator('[data-key="out-of-bounds"] g circle[data-label="Karl Anderson"]', {
            hidden: true,
          })
        );
      });
    });
  });
});
