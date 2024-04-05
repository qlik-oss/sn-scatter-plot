import { trendlinesService } from 'qlik-chart-modules';
import trendlinesDef from '../trendlines-definition';

describe('trendlines definition', () => {
  let sandbox;
  const env = {
    translator: {
      get: (text) => `translated-${text}`,
    },
    flags: {
      isEnabled: () => true,
    },
  };
  let def;

  beforeAll(() => {
    sandbox = sinon.createSandbox();
    def = trendlinesDef(env);
    sandbox.stub(trendlinesService, 'propertyPanelProperties').callsFake(() => {});
  });

  afterAll(() => {
    sandbox.restore();
  });

  it('show should return true when enabled', () => {
    expect(def.show()).to.equals(true);
  });

  it('globalChange should update qTrendLines on the measures', () => {
    const properties = {
      qHyperCubeDef: {
        qMeasures: [{}, {}],
      },
      trendLines: [
        {
          qType: 'LINEAR',
          qXColIx: 0,
          flipXY: false,
        },
        {
          qType: 'AVERAGE',
          qXColIx: 0,
          flipXY: true,
        },
      ],
    };
    def.globalChange(properties);
    expect(properties.qHyperCubeDef.qMeasures).to.deep.equals([
      { qTrendLines: [{ qType: 'AVERAGE', qXColIx: 2, flipXY: true }] },
      { qTrendLines: [{ qType: 'LINEAR', qXColIx: 1, flipXY: false }] },
    ]);
  });

  it('should not return a definition when feature is unsupported', () => {
    const isUnsupportedFeature = sandbox.stub().returns(true);
    def = trendlinesDef({ anything: { sense: { isUnsupportedFeature } } });

    expect(isUnsupportedFeature).to.have.been.calledWith('trendlines');
    expect(def).to.eql(undefined);
  });
});
