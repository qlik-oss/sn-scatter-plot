const { resolve } = require('path');

const OPTS = {
  artifactsPath: 'test/rendering-plugin/configurable/__artifacts__',
};

async function takeScreenshot(elm) {
  return page.screenshot({ clip: await elm.boundingBox() });
}

describe('rendering configurable plugin examples', () => {
  const content = '.njs-viz[data-render-count="1"]';
  it('should render config1 correctly', async function run() {
    const absolutePath = resolve(__dirname, '../../../examples/plugins/configurable/config1.html');
    const localURL = `file://${absolutePath}`;
    await page.goto(localURL);
    const elm = await page.waitForSelector(content, {
      timeout: 5000,
    });
    this.timeout(5000);
    const img = await takeScreenshot(elm);
    return expect(img).to.matchImageOf('config1', OPTS, 0.0005);
  });

  it('should render config2 correctly', async function run() {
    const absolutePath = resolve(__dirname, '../../../examples/plugins/configurable/config2.html');
    const localURL = `file://${absolutePath}`;
    await page.goto(localURL);
    const elm = await page.waitForSelector(content, {
      timeout: 5000,
    });
    this.timeout(5000);
    const img = await takeScreenshot(elm);
    return expect(img).to.matchImageOf('config2', OPTS, 0.0005);
  });
});
