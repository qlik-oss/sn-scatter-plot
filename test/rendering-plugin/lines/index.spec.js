const { resolve } = require('path');

const OPTS = {
  artifactsPath: 'test/rendering-plugin/lines/__artifacts__',
};

async function takeScreenshot(elm) {
  return page.screenshot({ clip: await elm.boundingBox() });
}

describe('rendering lines plugin example', () => {
  const content = '.njs-viz[data-render-count="1"]';
  it('should render lines plugin correctly', async function run() {
    const absolutePath = resolve(__dirname, '../../../examples/plugins/lines/index.html');
    const localURL = `file://${absolutePath}`;
    await page.goto(localURL);
    await page.waitForSelector(content, { visible: true, timeout: 2000 });
    const elm = await page.$(content);
    this.timeout(20000);
    const img = await takeScreenshot(elm);
    return expect(img).to.matchImageOf('lines_plugin', OPTS, 0.0005);
  });
});
