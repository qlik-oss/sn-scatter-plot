import * as createMiniPoints from '../mini-points';
import * as createBackgroundRect from '../background-rect';
import * as createNavigationRect from '../navigation-rect';
import createMiniChart from '..';

describe('createMiniChart', () => {
  let sandbox;
  let create;
  let models;
  let flags;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(createMiniPoints, 'default').returns('mini-points');
    sandbox.stub(createBackgroundRect, 'default').returns('background-rect');
    sandbox.stub(createNavigationRect, 'default').returns('nav-rect');
    create = () => createMiniChart({ models, flags });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct components', () => {
    expect(create()).to.deep.equal(['background-rect', 'mini-points', 'nav-rect']);
  });
});
