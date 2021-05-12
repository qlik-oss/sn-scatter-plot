const fs = require('fs-extra');

const OPTS = {
  artifactsPath: 'test/rendering/__artifacts__',
};

async function takeScreenshot(elm) {
  return page.screenshot({ clip: await elm.boundingBox() });
}

describe('rendering', () => {
  const content = '.njs-viz[data-render-count="1"]';
  const app = encodeURIComponent(process.env.APP_ID || '/apps/Executive_Dashboard.qvf');
  fs.readdirSync('test/rendering/data').forEach((file) => {
    const name = file.replace('.json', '');
    it(name, async function run() {
      await page.goto(`${process.env.BASE_URL}/render/?app=${app}&render-config=${name}`);
      const elm = await page.waitForSelector(content, {
        timeout: 5000,
      });
      this.timeout(10000);
      const img = await takeScreenshot(elm);
      return expect(img).to.matchImageOf(name, OPTS, 0.0005);
    });
  });
});
