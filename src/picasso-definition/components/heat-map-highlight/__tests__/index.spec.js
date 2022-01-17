import createHeatMapHighlight from '../index';
import * as KEYS from '../../../../constants/keys';

describe('heat-map-highlight', () => {
  let sandbox;
  let chartModel;
  let actions;
  let dataHandler;
  let viewHandler;
  let layoutService;
  let flags;
  let create;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'default').get(() => ({
      COMPONENT: {
        HEAT_MAP_HIGHLIGHT: 'heatMapHighlightKey',
      },
    }));
    viewHandler = {
      getDataView: sandbox.stub().returns('dataView'),
    };
    dataHandler = {
      getMeta: sandbox.stub().returns({ isBinnedData: true }),
    };
    chartModel = {
      query: {
        getViewHandler: () => viewHandler,
        getDataHandler: () => dataHandler,
      },
    };
    actions = { key: 'actions' };
    flags = { isEnabled: sandbox.stub().returns(true) };
    layoutService = {
      meta: {
        isBigData: true,
      },
    };

    create = () => createHeatMapHighlight({ chartModel, layoutService, actions, flags });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return false if is not bigData', () => {
    layoutService.meta.isBigData = false;
    expect(create()).to.be.false;
  });

  it('should return false if flag is not enabled', () => {
    layoutService.meta.isBigData = true;
    flags.isEnabled.returns(false);
    expect(create()).to.be.false;
  });

  describe('object definition', () => {
    it('should return an object definition', () => {
      expect(create()).to.be.a('object');
    });

    it('should have correct properties', () => {
      expect(create()).to.have.all.keys(['key', 'type', 'settings']);
    });

    it('should have correct key', () => {
      expect(create().key).to.equal('heatMapHighlightKey');
    });

    it('should have correct type', () => {
      expect(create().type).to.equal('heat-map-highlight');
    });

    describe('settings', () => {
      it('should have correct properties', () => {
        expect(create().settings).to.have.all.keys(['actions', 'dataView']);
      });

      it('should have correct actions', () => {
        expect(create().settings.actions).to.deep.equal({ key: 'actions' });
      });

      describe('dataView', () => {
        it('should be set with a function', () => {
          expect(create().settings.dataView).to.be.a('function');
        });

        it('should have correct dataView', () => {
          expect(create().settings.dataView()).to.equal('dataView');
        });
      });
    });
  });
});
