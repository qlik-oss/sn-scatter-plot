// eslint-disable-next-line no-unused-vars
import * as NUMBERS from '../../../../constants/numbers';
import createSettings from '../settings';

describe('settings', () => {
  let sandbox;
  let create;
  let colorService;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    colorService = { getSettings: sandbox.stub().returns({ type: 'categorical' }) };
    sandbox.stub(NUMBERS, 'default').value({ LEGEND_CAT: { SYMBOL: { SIZE: 10 } } });
    create = () => createSettings({ colorService });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct settings, when color type is categorical', () => {
    expect(create()).to.deep.equal({
      item: {
        shape: {
          type: 'circle',
          size: 10,
        },
        label: {
          wordBreak: 'break-word',
          maxLines: 2,
        },
      },
    });
  });

  it('should return correct settings, when color type is not categorical', () => {
    colorService.getSettings.returns({ type: 'gradient' });
    expect(create()).to.equal(undefined);
  });
});
