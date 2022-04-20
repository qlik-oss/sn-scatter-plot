// eslint-disable-next-line no-unused-vars
import * as chartModule from 'qlik-chart-modules';
import * as NUMBERS from '../../../constants/numbers';
import createMeta from '../meta';

describe('meta', () => {
  let sandbox;
  let create;
  let flags;
  let layout;
  let qIsDirectQueryMode;
  let qUnsupportedFeature;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    qIsDirectQueryMode = false;
    qUnsupportedFeature = [];
    layout = { snapshotData: 'some-data', qHyperCube: 'hpc' };
    sandbox.stub(chartModule, 'getValue');
    sandbox.stub(NUMBERS, 'default').value({ MAX_NR_SCATTER: 100 });
    flags = { isEnabled: sandbox.stub() };
    create = () => createMeta(flags, qIsDirectQueryMode, qUnsupportedFeature);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct meta object, when it is not BDI live mode', () => {
    chartModule.getValue.withArgs('hpc', 'qMeasureInfo.2').returns('some-info');
    chartModule.getValue.withArgs('hpc', 'qSize.qcy').returns(101);
    expect(create()({ layout })).to.deep.equal({
      isSnapshot: true,
      hasSizeMeasure: true,
      isBigData: true,
      isContinuous: true,
      isRangeSelectionsSupported: true,
    });
  });

  it('should return correct meta object, when it is BDI live mode but BDI flag is not enabled', () => {
    chartModule.getValue.withArgs('hpc', 'qMeasureInfo.2').returns('some-info');
    chartModule.getValue.withArgs('hpc', 'qSize.qcy').returns(101);
    layout.qIsBDILiveMode = true;
    flags.isEnabled.withArgs('BDI_CLIENT_ADAPT').returns(false);
    expect(create()({ layout })).to.deep.equal({
      isSnapshot: true,
      hasSizeMeasure: true,
      isBigData: true,
      isContinuous: true,
      isRangeSelectionsSupported: true,
    });
  });

  it('should return correct meta object, when binning is not supported', () => {
    qIsDirectQueryMode = true;
    qUnsupportedFeature = ['binningData'];
    chartModule.getValue.withArgs('hpc', 'qMeasureInfo.2').returns('some-info');
    chartModule.getValue.withArgs('hpc', 'qSize.qcy').returns(101);
    expect(create()({ layout })).to.deep.equal({
      isSnapshot: true,
      hasSizeMeasure: true,
      isBigData: false,
      isContinuous: true,
      isRangeSelectionsSupported: false,
    });
  });

  it('should return correct meta object, when range selections is not supported', () => {
    qIsDirectQueryMode = true;
    qUnsupportedFeature = ['rangeSelections'];
    chartModule.getValue.withArgs('hpc', 'qMeasureInfo.2').returns('some-info');
    chartModule.getValue.withArgs('hpc', 'qSize.qcy').returns(101);
    expect(create()({ layout })).to.deep.equal({
      isSnapshot: true,
      hasSizeMeasure: true,
      isBigData: false,
      isContinuous: true,
      isRangeSelectionsSupported: false,
    });
  });
});
