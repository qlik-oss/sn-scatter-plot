import fs from 'fs';
import path from 'path';
import serve from '@nebula.js/cli-serve';
import createPuppet from './utils/puppet';
import events from './utils/events';
import createNebulaRoutes from './utils/routes';
import getTooltipContent from './utils/shared';

const paths = {
  artifacts: path.join(__dirname, '__artifacts__'),
  fixtures: path.join(__dirname, '__fixtures__'),
};

describe('sn scatter plot: ui regression tests to test visual bugs', () => {
  let s;
  let puppet;
  let route;

  before(async () => {
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

    puppet = createPuppet(page);
    route = createNebulaRoutes(s.url);
  });

  after(async () => {
    s.close();
  });

  beforeEach(() => {
    events.addListeners(page);
  });

  afterEach(() => {
    events.removeListeners(page);
  });

  describe('rendering', () => {
    fs.readdirSync(paths.fixtures).forEach((file) => {
      const name = file.replace('.fix.js', '');
      const fixturePath = `./${file}`;

      it(name, async () => {
        const renderUrl = await route.renderFixture(fixturePath);
        // console.log({ renderUrl });
        // Open page in Nebula which renders fixture
        await puppet.open(renderUrl);
        // Capture screenshot
        const img = await puppet.screenshot();

        expect(img).to.matchImageOf(name, { artifactsPath: paths.artifacts }, 0.03);
      });
    });
  });

  describe('Interaction', () => {
    describe('Tooltip', () => {
      it('Point data in scatter ', async () => {
        const renderUrl = await route.renderFixture('scatter_render_tooltip.fix.js');
        // Open page in Nebula which renders fixture
        // render svg added to the fix.js
        await puppet.open(renderUrl);
        await page.waitForSelector('[data-key="point-component"] g circle[data-label="Karl Anderson"]');
        await page.hover('[data-key="point-component"] g circle[data-label="Karl Anderson"]');
        expect(await getTooltipContent()).to.equal(
          'Karl Anderson Sales Rep Name: Karl Anderson Expense Amount: $11,735,257.41 # of Customers: 2 Budget: 12.91k'
        );
      });
      it('Binned data in scatter ', async () => {
        const renderUrl = await route.renderFixture('scatter_render_binned_snapshot_tooltip.fix.js');
        // Open page in Nebula which renders fixture
        // render svg added to the fix.js
        await puppet.open(renderUrl);
        await page.waitForSelector('[data-key="heat-map"] g rect[data-value="436904"]');
        await page.hover('[data-key="heat-map"] g rect[data-value="436904"]');
        expect(await getTooltipContent()).to.equal('Density: 3805');
      });
    });
  });
});
