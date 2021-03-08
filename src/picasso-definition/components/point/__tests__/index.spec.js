import createPoint from '../index';
import * as KEYS from '../../../../constants/keys';

describe('grid chart point', () => {
  let sandbox;
  let layoutModel;
  let create;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'default').get(() => ({
      COMPONENT: {
        POINT: 'pointComponentKey',
      },
      COLLECTION: {
        MAIN: 'mainCollectionKey',
      },
    }));
    const layoutValueStub = sandbox.stub();
    layoutValueStub.withArgs('dataPoint.rangeBubbleSizes').returns([0.1, 1]);
    layoutModel = {
      key: 'layout-model',
      getLayoutValue: layoutValueStub,
      meta: {
        hasSizeMeasure: true,
      },
    };

    create = () =>
      createPoint({
        layoutModel,
      });
  });

  afterEach(() => {
    sandbox.restore();
  });
  describe('object definition', () => {
    it('should return an object definition', () => {
      expect(create()).to.be.a('object');
    });

    it('should have correct type', () => {
      expect(create().type).to.equal('point');
    });

    it('should have correct properties', () => {
      expect(create()).to.have.all.keys(['key', 'type', 'data', 'rendererSettings', 'settings', 'beforeRender']);
    });

    it('should have correct key', () => {
      expect(create().key).to.equal('pointComponentKey');
    });

    describe('data', () => {
      it('should be correct', () => {
        expect(create().data).to.deep.equal({ collection: 'mainCollectionKey' });
      });
    });
  });

  describe('settings', () => {
    it('should have correct properties', () => {
      expect(create().settings).to.have.all.keys(['x', 'y', 'size', 'strokeWidth', 'stroke']);
    });

    describe('size', () => {
      it('should be set with a function', () => {
        expect(create().settings.size.fn).to.be.a('function');
      });

      it('should return correctly calculated value', () => {
        const d = {
          scale: sandbox.stub().returns(0.1),
          datum: {
            size: {
              value: 0,
            },
          },
        };
        expect(create().settings.size.fn(d).toFixed(4)).to.equal('0.0095');
        d.scale = sandbox.stub().returns(0);
        expect(create().settings.size.fn(d)).to.equal(0.005);
        d.scale = sandbox.stub().returns(1);
        expect(create().settings.size.fn(d)).to.equal(0.05);
      });
    });
  });
});
