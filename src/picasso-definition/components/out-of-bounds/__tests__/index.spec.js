import createOutOfBounds from '../index';
import * as KEYS from '../../../../constants/keys';

describe('out of bounds', () => {
  let sandbox;
  let colorService;
  let chartModel;
  let create;
  let viewHandler;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    colorService = {
      getColor: sandbox.stub(),
    };
    viewHandler = {
      getDataView: sandbox.stub(),
    };
    chartModel = {
      query: {
        getViewHandler: () => viewHandler,
      },
    };

    sandbox.stub(KEYS, 'default').get(() => ({
      COMPONENT: {
        OUT_OF_BOUNDS: 'oobComponentKey',
      },
      COLLECTION: {
        MAIN: 'mainCollectionKey',
      },
      SCALE: {
        X: 'x',
        Y: 'y',
      },
    }));
    const models = { colorService, chartModel };
    create = () => createOutOfBounds({ models, context });
  });

  afterEach(() => sandbox.restore());

  describe('object definition', () => {
    it('should return an object definition', () => {
      expect(create()).to.be.a('object');
    });

    it('should have correct type', () => {
      expect(create().type).to.equal('point');
    });

    it('should have correct properties', () => {
      expect(create()).to.have.all.keys(['key', 'type', 'data', 'settings', 'preferredSize', 'beforeRender']);
    });

    it('should have correct key', () => {
      expect(create().key).to.equal('oobComponentKey');
    });

    it('should have correct data', () => {
      expect(create().data.collection).to.equal('mainCollectionKey');
    });
  });

  describe('settings', () => {
    it('should have correct properties', () => {
      expect(create().settings).to.have.all.keys(['x', 'y', 'size', 'fill']);
    });
  });

  describe('beforeRender', () => {
    it('should be set with a function', () => {
      expect(create().beforeRender).to.be.a('function');
    });
  });
});
