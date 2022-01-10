// eslint-disable-next-line no-unused-vars
import getLogicalSize from '../logical-size';

describe('logical-size', () => {
  let sandbox;
  let create;
  let layout;
  let options;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layout = { snapshotData: { content: { size: { w: 100, h: 200 } } } };
    options = { freeResize: false };
    create = () => getLogicalSize({ layout, options });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct logical size', () => {
    expect(create()).to.deep.equal({ width: 100, height: 200 });
    layout.snapshotData = null;
    expect(create()).to.equal(undefined);
    layout.snapshotData = 'some-data';
    options.freeResize = true;
    expect(create()).to.equal(undefined);
  });
});
