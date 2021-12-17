// eslint-disable-next-line no-unused-vars
import * as KEYS from '../../../../constants/keys';
import * as tap from '../../../../interactive/tap';
import createTap from '..';

describe('tap', () => {
  let sandbox;
  let create;
  let models;
  let actions;
  let flags;
  let e;
  let shapes;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(tap, 'default');
    sandbox.stub(KEYS, 'default').value({ COMPONENT: { POINT: 'p', LEGEND_CATEGORICAL: 'lc', HEAT_MAP: 'hm' } });
    models = {
      selectionService: 'ss',
      colorService: 'cs',
      customTooltipModel: 'cm',
      layoutService: { getHyperCubeValue: sandbox.stub() },
    };
    e = { srcEvent: { ctrlKey: true } };
    shapes = [{ key: 'hm', data: { null: { value: 'some-value' } } }];
    create = () => createTap({ models, actions, flags });
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('config', () => {
    let getConfig;

    beforeEach(() => {
      getConfig = () => {
        create();
        const config = tap.default.getCall(0).args[0];
        return config;
      };
    });

    it('should have correct targets', () => {
      expect(getConfig().targets).to.deep.equal(['p', 'lc', 'hm']);
    });

    describe('components', () => {
      it('should return correct components, when shape is legend, and when ctrl key is not pressed and it is not single selection', () => {
        shapes = [{ key: 'lc', data: { null: { value: 'some-value' } } }];
        e = { srcEvent: { ctrlKey: false } };
        models.layoutService.getHyperCubeValue.returns(false);
        expect(getConfig().components(e, shapes)).to.deep.equal([
          {
            key: 'lc',
            action: 'toggle',
            contexts: ['selection'],
          },
        ]);
      });

      it('should return false if it is point component and null data has value', () => {
        shapes = [{ key: 'p', data: { null: { value: 'some-value' } } }];
        expect(getConfig().components(e, shapes)).to.equal(false);
      });

      it('should return correct components, when shape is heat map', () => {
        expect(getConfig().components(e, shapes)).to.deep.equal([
          {
            key: 'hm',
            action: 'set',
            contexts: ['selection'],
            data: ['selectionDimension'],
          },
        ]);
      });
    });
  });

  describe('options', () => {
    let getOptions;

    beforeEach(() => {
      getOptions = () => {
        create();
        const options = tap.default.getCall(0).args[1];
        return options;
      };
    });
    describe('hitRadius', () => {
      it('should return hit radius of zero if there is no component', () => {
        const components = [];
        expect(getOptions().hitRadius(components)).to.equal(0);
      });

      it('should return hit radius of 3 if one of the components is point, eventhough there is heatmap component', () => {
        const components = [{ key: 'p' }, { key: 'hm' }];
        expect(getOptions().hitRadius(components)).to.equal(3);
      });

      it('should return hit radius of 1 if there is no is point component, but there is heatmap component', () => {
        const components = [{ key: 'lc' }, { key: 'hm' }];
        expect(getOptions().hitRadius(components)).to.equal(1);
      });
    });
  });
});
