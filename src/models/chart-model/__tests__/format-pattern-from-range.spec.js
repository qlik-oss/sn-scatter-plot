import * as KEYS from '../../../constants/keys';
import getFormatPatternFromRange from '../format-pattern-from-range';

describe('getFormatPatternFromRange', () => {
  let sandbox;
  let create;
  let scaleName;
  let viewHandler;
  let layoutService;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'default').value({ SCALE: { X: 'x', Y: 'y' } });
    viewHandler = { getMeta: sandbox.stub() };
    layoutService = { getHyperCubeValue: sandbox.stub() };
    create = () => getFormatPatternFromRange(scaleName, viewHandler, layoutService);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return false if cannot get min or max', () => {
    scaleName = 'x';
    viewHandler.getMeta.returns({ homeStateDataView: { xAxisMin: 800000000 } });
    expect(create()).to.equal(false);
  });

  it('should correct format pattern when, case 1: xRange = [800M, 801M], thousand delimiter is undefined', () => {
    scaleName = 'x';
    viewHandler.getMeta.returns({ homeStateDataView: { xAxisMin: 800000000, xAxisMax: 801000000 } });
    layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qNumFormat.qThou').returns(undefined);
    layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qNumFormat.qDec').returns('d');
    expect(create()).to.equal('0d####');
  });

  it('should correct format pattern when, case 2: xRange = [800M, 800M]', () => {
    scaleName = 'x';
    viewHandler.getMeta.returns({ homeStateDataView: { xAxisMin: 800000000, xAxisMax: 800000000 } });
    layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qNumFormat.qDec').returns('.');
    expect(create()).to.equal('0.##');
  });

  it('should correct format pattern when, case 3: yRange = [0.001, 0.081]', () => {
    scaleName = 'y';
    viewHandler.getMeta.returns({ homeStateDataView: { yAxisMin: 0.001, yAxisMax: 0.081 } });
    layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qNumFormat.qThou').returns(',');
    layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qNumFormat.qDec').returns('.');
    expect(create()).to.equal('#,##0.###');
  });

  it('should correct format pattern when, case 4: yRange = [0.01, 10.01]', () => {
    scaleName = 'y';
    viewHandler.getMeta.returns({ homeStateDataView: { yAxisMin: 0.01, yAxisMax: 10.01 } });
    layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qNumFormat.qThou').returns(',');
    layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qNumFormat.qDec').returns('.');
    expect(create()).to.equal('#,##0.#');
  });
});
