import path from 'path';
import serve from '@nebula.js/cli-serve';
import { test, expect, chromium } from '@playwright/test';
import createNebulaRoutes from '../utils/routes';
import getTooltipContent from '../utils/shared';

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
