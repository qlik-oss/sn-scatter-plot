// eslint-disable-next-line no-unused-vars
import * as lasso from '../../../../interactive/lasso';
import * as KEYS from '../../../../constants/keys';
import createLasso from '..';

describe('lasso', () => {
  let sandbox;
  let create;
  let models;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(lasso, 'default');
    models = {
      selectionService: { getIsDimensionLocked: sandbox.stub().returns(true) },
      layoutService: { getHyperCubeValue: sandbox.stub().returns(true) },
      chartModel: 'chart-model',
    };
    sandbox.stub(KEYS, 'default').value({ COMPONENT: { POINT: 'p', HEAT_MAP: 'hm' } });
    create = () => createLasso({ models, actions: 'correct-actions' });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should not call lasso if dimension is locked or there is only single selection', () => {
    expect(create()).to.equal(false);
  });

  it('should call lasso with correct arguments', () => {
    models.selectionService.getIsDimensionLocked.returns(false);
    models.layoutService.getHyperCubeValue.returns(false);
    create();
    expect(lasso.default).to.have.been.calledWithExactly(
      {
        key: 'lasso',
        componentTargetKeys: ['p', 'hm'],
        components: [
          {
            key: 'p',
            action: 'add',
            contexts: ['selection'],
          },
          {
            key: 'hm',
            action: 'add',
            contexts: ['selection'],
          },
        ],
      },
      { actions: 'correct-actions', layoutService: models.layoutService, chartModel: 'chart-model' }
    );
  });
});
