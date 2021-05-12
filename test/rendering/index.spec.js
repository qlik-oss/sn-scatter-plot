const OPTS = {
  artifactsPath: 'test/rendering/__artifacts__',
};

async function takeScreenshot(elm) {
  return page.screenshot({ clip: await elm.boundingBox() });
}

describe('interaction', () => {
  const content = '.njs-viz[data-render-count="1"]';
  const app = encodeURIComponent(process.env.APP_ID || '/apps/Executive_Dashboard.qvf');
  let elm;

  beforeEach(async () => {
    await page.goto(`${process.env.BASE_URL}/render/?app=${app}&render-config=mes_2_color_dim`);
    elm = await page.waitForSelector(content, {
      timeout: 5000,
    });
  });

  it('Measures: 2, color: by dimension', async function run() {
    this.timeout(10000);
    const img = await takeScreenshot(elm);
    return expect(img).to.matchImageOf('mes_2_color_dim', OPTS, 0.0005);
  });
});
