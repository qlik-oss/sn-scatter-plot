import * as createMiniPoints from '../mini-points';
import * as createBackgroundWindow from '../background-window';
import * as createNavigationWindow from '../navigation-window';
import createMiniChart from '..';

describe('createMiniChart', () => {
  let sandbox;
  let create;
  let models;
  let context;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(createMiniPoints, 'default').returns('mini-points');
    sandbox.stub(createBackgroundWindow, 'default').returns('background-window');
    sandbox.stub(createNavigationWindow, 'default').returns('nav-window');
    models = { layoutService: { meta: { isBigData: true, isSnapshot: false } } };
    context = { rtl: true };
    create = () => createMiniChart({ models, context });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return empty array when data is not big or data binning flag is not enabled', () => {
    models.layoutService.meta.isBigData = false;
    expect(create()).to.deep.equal([]);
  });

  it('should return empty array when is snapshot', () => {
    models.layoutService.meta.isBigData = true;
    models.layoutService.meta.isSnapshot = true;
    expect(create()).to.deep.equal([]);
  });

  it('should return correct components when data is big and binning flag is enabled', () => {
    models.layoutService.meta.isBigData = true;
    expect(create()).to.deep.equal(['background-window', 'mini-points', 'nav-window']);
  });
});
