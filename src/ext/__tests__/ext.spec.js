import * as pp from '../property-definition';
import * as dataDefinition from '../../qae/data-definition';
import * as trendlinesDef from '../property-definition/trendlines-definition';

describe('ext', () => {
  let sandbox;
  let env;
  let create;
  let exportFormat;
  let initialProperties;
  let extension;
  let conversion;
  let ext;
  const propertyTree = {
    qProperty: 'properties',
  };

  beforeEach(() => {
    env = 'correct env';
    sandbox = sinon.createSandbox();
    sandbox.stub(pp, 'default').withArgs('correct env').returns('correct def');

    exportFormat = 'export-format';
    initialProperties = 'initial-properties';
    conversion = {
      colorChart: {
        importProperties: sandbox.stub().returns({ qProperty: 'imported properties' }),
        exportProperties: sandbox.stub(),
      },
    };
    [{ default: ext }] = aw.mock([['qlik-object-conversion', () => conversion]], ['../ext']);
    sandbox.stub(dataDefinition, 'default').returns('data-definition');
    sandbox.stub(trendlinesDef, 'updateTrendlines');
    sandbox.stub(trendlinesDef, 'clearTrendlines');

    extension = {
      getDefaultDimensionProperties: sandbox.stub().returns('default-dimension'),
      getDefaultMeasureProperties: sandbox.stub().returns('default-measure'),
    };
    create = () => ext(env);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should have correct properties', () => {
    expect(create()).to.have.all.keys([
      'definition',
      'support',
      'importProperties',
      'exportProperties',
      'softDefinition',
    ]);
  });

  describe('definition', () => {
    it('should return correct definition', () => {
      expect(create().definition).to.deep.equal('correct def');
    });
  });

  describe('support', () => {
    it('should have correct properties', () => {
      expect(create().support).to.have.all.keys(['snapshot', 'export', 'exportData', 'sharing', 'viewData']);
    });

    describe('snapshot', () => {
      let layout;
      it('should return false when called, case 1: layout is undefined', () => {
        layout = undefined;
        const createdSnapshot = create().support.snapshot;
        expect(createdSnapshot(layout)).to.deep.equal(false);
      });

      it('should return true when called, case 2: layout is defined and has valid properties', () => {
        layout = { qHyperCube: { qSize: { qcy: 1 } } };
        const createdSnapshot = create().support.snapshot;
        expect(createdSnapshot(layout)).to.deep.equal(true);
      });
    });
  });

  describe('importProperties', () => {
    it('should call importProperties of color chart with correct arguments', () => {
      create().importProperties(exportFormat, initialProperties, extension);
      expect(conversion.colorChart.importProperties).to.have.been.calledWithExactly({
        exportFormat: 'export-format',
        initialProperties: 'initial-properties',
        dataDefinition: 'data-definition',
        defaultPropertyValues: {
          defaultDimension: 'default-dimension',
          defaultMeasure: 'default-measure',
        },
      });
    });

    it('should update trendlines', () => {
      create().importProperties(exportFormat, initialProperties, extension);
      expect(trendlinesDef.clearTrendlines).to.be.calledOnce;
      expect(trendlinesDef.updateTrendlines).to.be.calledOnce;
    });
  });

  describe('exportProperties', () => {
    it('should call exportProperties of color chart with correct arguments', () => {
      create().exportProperties(propertyTree);
      expect(conversion.colorChart.exportProperties).to.have.been.calledWithExactly({
        propertyTree: { qProperty: 'properties' },
      });
    });

    it('should clear trendlines', () => {
      create().exportProperties(propertyTree);
      expect(trendlinesDef.clearTrendlines).to.be.calledOnce;
    });
  });
});
