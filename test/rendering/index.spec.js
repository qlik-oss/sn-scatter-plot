const fs = require('fs-extra');
const { resolve } = require('path');

const OPTS = {
  artifactsPath: 'test/rendering/artifacts',
};
const content = '.njs-viz';

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
      myBrowser = await puppeteer.launch({ args: ['--no-sandbox'] });
      // myBrowser = await puppeteer.launch({ args: ['--no-sandbox'], headless: false, slowMo: 500 });
      myPage = await myBrowser.newPage();

      myPage.on('pageerror', (e) => {
        console.log('Error:', e.message, e.stack);
      });
    });

    after(() => {
      s.close();
    });
  }

  after(async () => {
    await myBrowser.close();
  });

  const app = encodeURIComponent(process.env.APP_ID || '/apps/Executive_Dashboard.qvf');

  async function takeScreenshot(elm) {
    return myPage.screenshot({ clip: await elm.boundingBox() });
  }

  fs.readdirSync('test/rendering/data').forEach((file) => {
    const name = file.replace('.json', '');
    it(name, async function run() {
      await myPage.goto(`${process.env.BASE_URL}/render/?app=${app}&render-config=${name}`, {
        waitUntil: 'networkidle0',
      });
      const elm = await myPage.waitForSelector(content, { visible: true, timeout: 10000 });
      this.timeout(10000);
      const img = await takeScreenshot(elm);
      return expect(img).to.matchImageOf(name, OPTS, 0.0005);
    });
  });

  const plugins = ['plugin_line', 'plugin_point', 'plugin_axes'];

  plugins.forEach((plugin) => {
    it(`should render ${plugin} correctly`, async function run() {
      const absolutePath = resolve(__dirname, `../../examples/plugins/${plugin}.html`);
      const localURL = `file://${absolutePath}`;
      await myPage.goto(localURL, {
        waitUntil: 'networkidle0',
      });
      const elm = await myPage.waitForSelector(content, { visible: true, timeout: 10000 });
      this.timeout(10000);
      const img = await takeScreenshot(elm);
      return expect(img).to.matchImageOf(`${plugin}`, OPTS, 0.0005);
    });
  });
});
