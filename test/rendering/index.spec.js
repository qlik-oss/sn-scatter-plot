const fs = require('fs-extra');
// const { resolve } = require('path');

const OPTS = {
  artifactsPath: 'test/rendering/__artifacts__',
};
const content = '.njs-viz[data-render-count="1"]';

async function takeScreenshot(elm) {
  return page.screenshot({ clip: await elm.boundingBox() });
}

describe('rendering', () => {
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

// // const OPTS = {
// //   artifactsPath: 'test/rendering-plugin/lines/__artifacts__',
// // };

// describe('rendering lines plugin example', () => {
//   it('should render lines plugin correctly', async function run() {
//     const absolutePath = resolve(__dirname, '../../../examples/plugins/lines/index.html');
//     const localURL = `file://${absolutePath}`;
//     await page.goto(localURL);
//     const elm = await page.waitForSelector(content, {
//       timeout: 5000,
//     });
//     this.timeout(5000);
//     const img = await takeScreenshot(elm);
//     return expect(img).to.matchImageOf('lines_plugin', OPTS, 0.0005);
//   });
// });

// // const OPTS = {
// //   artifactsPath: 'test/rendering-plugin/configurable/__artifacts__',
// // };

// describe('rendering configurable plugin examples', () => {
//   it('should render config1 correctly', async function run() {
//     const absolutePath = resolve(__dirname, '../../../examples/plugins/configurable/config1.html');
//     const localURL = `file://${absolutePath}`;
//     await page.goto(localURL);
//     const elm = await page.waitForSelector(content, {
//       timeout: 5000,
//     });
//     this.timeout(5000);
//     const img = await takeScreenshot(elm);
//     return expect(img).to.matchImageOf('config1', OPTS, 0.0005);
//   });

//   it('should render config2 correctly', async function run() {
//     const absolutePath = resolve(__dirname, '../../../examples/plugins/configurable/config2.html');
//     const localURL = `file://${absolutePath}`;
//     await page.goto(localURL);
//     const elm = await page.waitForSelector(content, {
//       timeout: 5000,
//     });
//     this.timeout(5000);
//     const img = await takeScreenshot(elm);
//     return expect(img).to.matchImageOf('config2', OPTS, 0.0005);
//   });
// });
