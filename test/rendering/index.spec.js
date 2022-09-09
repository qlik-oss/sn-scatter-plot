import fs from 'fs';
import path from 'path';
import serve from '@nebula.js/cli-serve';
import { test, expect, chromium } from '@playwright/test';
import createNebulaRoutes from '../utils/routes';

const paths = {
  artifacts: path.join(__dirname, '__artifacts__'),
  fixtures: path.join(__dirname, '__fixtures__'),
};

test.describe('Rendering', () => {
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
      fixturePath: 'test/rendering/__fixtures__',
    });

    route = createNebulaRoutes(s.url);
  });

  test.afterAll(async () => {
    // await s.close();
  });

  test.describe('rendering', () => {
    fs.readdirSync(paths.fixtures).forEach((file) => {
      const name = file.replace('.fix.js', '');
      const fixturePath = `./${file}`;

      test(name, async () => {
        const renderUrl = await route.renderFixture(fixturePath);
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(renderUrl, { waitUntil: 'networkidle' });
        // Should switch to below locator when instead of the implicit wait when supported correctly in nebula
        // await page.locator('[data-render-count="1"]', { visible: true });
        await page.waitForTimeout(2000);
        expect(await page.screenshot()).toMatchSnapshot(`${name}.png`);
      });
    });
  });
});
