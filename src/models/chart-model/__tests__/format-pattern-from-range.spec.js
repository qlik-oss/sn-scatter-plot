import * as KEYS from '../../../constants/keys';
import getAutoFormatPatternFromRange from '../format-pattern-from-range';

describe('getAutoFormatPatternFromRange', () => {
  let sandbox;
  let create;
  let scaleName;
  let viewHandler;
  let localeInfo;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'default').value({ SCALE: { X: 'x', Y: 'y' } });
    viewHandler = { getMeta: sandbox.stub() };
    localeInfo = {};
    create = () => getAutoFormatPatternFromRange(scaleName, viewHandler, localeInfo);
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
    localeInfo.qThousandSep = undefined;
    localeInfo.qDecimalSep = 'd';
    expect(create()).to.equal('0d####');
  });

  it('should correct format pattern when, case 2: xRange = [800M, 800M]', () => {
    scaleName = 'x';
    viewHandler.getMeta.returns({ homeStateDataView: { xAxisMin: 800000000, xAxisMax: 800000000 } });
    localeInfo.qDecimalSep = '.';
    expect(create()).to.equal('0.##');
  });

  it('should correct format pattern when, case 3: yRange = [0.001, 0.081]', () => {
    scaleName = 'y';
    viewHandler.getMeta.returns({ homeStateDataView: { yAxisMin: 0.001, yAxisMax: 0.081 } });
    localeInfo.qThousandSep = ',';
    localeInfo.qDecimalSep = '.';
    expect(create()).to.equal('#,##0.###');
  });

  it('should correct format pattern when, case 4: yRange = [0.01, 10.01]', () => {
    scaleName = 'y';
    viewHandler.getMeta.returns({ homeStateDataView: { yAxisMin: 0.01, yAxisMax: 10.01 } });
    localeInfo.qThousandSep = ',';
    localeInfo.qDecimalSep = '.';
    expect(create()).to.equal('#,##0.#');
  });
});
