const fs = require('fs-extra');
const { resolve } = require('path');

const OPTS = {
  artifactsPath: 'test/rendering/__artifacts__',
};
const content = '.njs-viz[data-render-count="1"]';

describe('rendering', () => {
  let myBrowser;
  let myPage;

  const serve = require('@nebula.js/cli-serve'); // eslint-disable-line

  if (!process.env.BASE_URL) {
    let s;
    before(async function run() {
      this.timeout(10000);
      s = await serve({
        build: false,
        open: false,
      });

      process.env.BASE_URL = s.url;

      // eslint-disable-next-line global-require
      const puppeteer = require('puppeteer');
      myBrowser = await puppeteer.launch({ headless: true });
      // myBrowser = await puppeteer.connect({ browserWSEndpoint: 'ws://localhost:3000' });
      myPage = await myBrowser.newPage();

      myPage.on('pageerror', (e) => {
        console.log('Error:', e.message, e.stack);
      });
    });

    after(() => {
      s.close();
    });
  }

  const app = encodeURIComponent(process.env.APP_ID || '/apps/Executive_Dashboard.qvf');
  async function takeScreenshot(elm) {
    return myPage.screenshot({ clip: await elm.boundingBox() });
  }

  fs.readdirSync('test/rendering/data').forEach((file) => {
    const name = file.replace('.json', '');
    it(name, async () => {
      await myPage.goto(`${process.env.BASE_URL}/render/?app=${app}&render-config=${name}`);
      // this.timeout(10000);
      const elm = await myPage.waitForSelector(content, { visible: true, timeout: 5000 });
      const img = await takeScreenshot(elm);
      return expect(img).to.matchImageOf(name, OPTS, 0.0005);
    });
  });

  it('should render lines plugin correctly', async function run() {
    const absolutePath = resolve(__dirname, '../../examples/plugins/lines/index.html');
    const localURL = `file://${absolutePath}`;
    await myPage.goto(localURL);
    const elm = await myPage.waitForSelector(content, {
      timeout: 5000,
    });
    this.timeout(5000);
    const img = await takeScreenshot(elm);
    return expect(img).to.matchImageOf('lines_plugin', OPTS, 0.0005);
  });

  it('should render config1 correctly', async function run() {
    const absolutePath = resolve(__dirname, '../../examples/plugins/configurable/config1.html');
    const localURL = `file://${absolutePath}`;
    await myPage.goto(localURL);
    const elm = await myPage.waitForSelector(content, {
      timeout: 5000,
    });
    this.timeout(5000);
    const img = await takeScreenshot(elm);
    return expect(img).to.matchImageOf('config1', OPTS, 0.0005);
  });

  it('should render config2 correctly', async function run() {
    const absolutePath = resolve(__dirname, '../../examples/plugins/configurable/config2.html');
    const localURL = `file://${absolutePath}`;
    await myPage.goto(localURL);
    const elm = await myPage.waitForSelector(content, {
      timeout: 5000,
    });
    this.timeout(5000);
    const img = await takeScreenshot(elm);
    return expect(img).to.matchImageOf('config2', OPTS, 0.0005);
  });
});
