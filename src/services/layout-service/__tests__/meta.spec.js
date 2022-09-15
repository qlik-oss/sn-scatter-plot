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
    sandbox
      .stub(NUMBERS, 'default')
      .value({ MAX_NR_SCATTER: 100, LARGE_NUM_DATA_POINTS: 500, MAX_VISIBLE_BUBBLES: 10000 });
    flags = { isEnabled: sandbox.stub() };
    flags.isEnabled.withArgs('NUM_BUBBLES').returns(false);
    flags.isEnabled.withArgs('PROGRESSIVE_RENDERING').returns(false);
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
      isMaxVisibleBubblesEnabled: false,
      isProgressiveEnabled: false,
      isLargeNumDataPoints: false,
      maxVisibleBubbles: 100,
      largeNumDataPoints: 100,
      numDataPoints: 101,
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
      isMaxVisibleBubblesEnabled: false,
      isProgressiveEnabled: false,
      isLargeNumDataPoints: false,
      maxVisibleBubbles: 100,
      largeNumDataPoints: 100,
      numDataPoints: 101,
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
      isMaxVisibleBubblesEnabled: false,
      isProgressiveEnabled: false,
      isLargeNumDataPoints: false,
      maxVisibleBubbles: 100,
      largeNumDataPoints: 100,
      numDataPoints: 101,
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
      isMaxVisibleBubblesEnabled: false,
      isProgressiveEnabled: false,
      isLargeNumDataPoints: false,
      maxVisibleBubbles: 100,
      largeNumDataPoints: 100,
      numDataPoints: 101,
    });
  });

  it('should return correct meta object, when NUM_BUBBLES flag is enabled and qcy < maxVisibleBubbles < LARGE_NUM_DATA_POINTS', () => {
    chartModule.getValue.withArgs('hpc', 'qMeasureInfo.2').returns('some-info');
    chartModule.getValue.withArgs('hpc', 'qSize.qcy').returns(101);
    layout.qIsBDILiveMode = true;
    flags.isEnabled.withArgs('BDI_CLIENT_ADAPT').returns(false);
    flags.isEnabled.withArgs('NUM_BUBBLES').returns(true);
    layout.maxVisibleBubbles = 300;
    expect(create()({ layout })).to.deep.equal({
      isSnapshot: true,
      hasSizeMeasure: true,
      isBigData: false,
      isContinuous: true,
      isRangeSelectionsSupported: true,
      isMaxVisibleBubblesEnabled: true,
      isProgressiveEnabled: false,
      isLargeNumDataPoints: false,
      maxVisibleBubbles: 300,
      largeNumDataPoints: 300,
      numDataPoints: 101,
    });
  });

  it('should return correct meta object, when NUM_BUBBLES flag is enabled and maxVisibleBubbles < qcy < LARGE_NUM_DATA_POINTS', () => {
    chartModule.getValue.withArgs('hpc', 'qMeasureInfo.2').returns('some-info');
    chartModule.getValue.withArgs('hpc', 'qSize.qcy').returns(400);
    layout.qIsBDILiveMode = true;
    flags.isEnabled.withArgs('BDI_CLIENT_ADAPT').returns(false);
    flags.isEnabled.withArgs('NUM_BUBBLES').returns(true);
    layout.maxVisibleBubbles = 300;
    expect(create()({ layout })).to.deep.equal({
      isSnapshot: true,
      hasSizeMeasure: true,
      isBigData: true,
      isContinuous: true,
      isRangeSelectionsSupported: true,
      isMaxVisibleBubblesEnabled: true,
      isProgressiveEnabled: false,
      isLargeNumDataPoints: false,
      maxVisibleBubbles: 300,
      largeNumDataPoints: 300,
      numDataPoints: 400,
    });
  });

  it('should return correct meta object, when NUM_BUBBLES flag is enabled and maxVisibleBubbles < LARGE_NUM_DATA_POINTS < qcy', () => {
    chartModule.getValue.withArgs('hpc', 'qMeasureInfo.2').returns('some-info');
    chartModule.getValue.withArgs('hpc', 'qSize.qcy').returns(600);
    layout.qIsBDILiveMode = true;
    flags.isEnabled.withArgs('BDI_CLIENT_ADAPT').returns(false);
    flags.isEnabled.withArgs('NUM_BUBBLES').returns(true);
    layout.maxVisibleBubbles = 300;
    expect(create()({ layout })).to.deep.equal({
      isSnapshot: true,
      hasSizeMeasure: true,
      isBigData: true,
      isContinuous: true,
      isRangeSelectionsSupported: true,
      isMaxVisibleBubblesEnabled: true,
      isProgressiveEnabled: false,
      isLargeNumDataPoints: false,
      maxVisibleBubbles: 300,
      largeNumDataPoints: 300,
      numDataPoints: 600,
    });
  });

  it('should return correct meta object, when NUM_BUBBLES flag is enabled and qcy < LARGE_NUM_DATA_POINTS < maxVisibleBubbles', () => {
    chartModule.getValue.withArgs('hpc', 'qMeasureInfo.2').returns('some-info');
    chartModule.getValue.withArgs('hpc', 'qSize.qcy').returns(101);
    layout.qIsBDILiveMode = true;
    flags.isEnabled.withArgs('BDI_CLIENT_ADAPT').returns(false);
    flags.isEnabled.withArgs('NUM_BUBBLES').returns(true);
    layout.maxVisibleBubbles = 600;
    expect(create()({ layout })).to.deep.equal({
      isSnapshot: true,
      hasSizeMeasure: true,
      isBigData: false,
      isContinuous: true,
      isRangeSelectionsSupported: true,
      isMaxVisibleBubblesEnabled: true,
      isProgressiveEnabled: false,
      isLargeNumDataPoints: false,
      maxVisibleBubbles: 600,
      largeNumDataPoints: 500,
      numDataPoints: 101,
    });
  });

  it('should return correct meta object, when NUM_BUBBLES flag is enabled and LARGE_NUM_DATA_POINTS < qcy < maxVisibleBubbles', () => {
    chartModule.getValue.withArgs('hpc', 'qMeasureInfo.2').returns('some-info');
    chartModule.getValue.withArgs('hpc', 'qSize.qcy').returns(550);
    layout.qIsBDILiveMode = true;
    flags.isEnabled.withArgs('BDI_CLIENT_ADAPT').returns(false);
    flags.isEnabled.withArgs('NUM_BUBBLES').returns(true);
    layout.maxVisibleBubbles = 600;
    expect(create()({ layout })).to.deep.equal({
      isSnapshot: true,
      hasSizeMeasure: true,
      isBigData: false,
      isContinuous: true,
      isRangeSelectionsSupported: true,
      isMaxVisibleBubblesEnabled: true,
      isProgressiveEnabled: false,
      isLargeNumDataPoints: true,
      maxVisibleBubbles: 600,
      largeNumDataPoints: 500,
      numDataPoints: 550,
    });
  });

  it('should return correct meta object, when NUM_BUBBLES flag is enabled and LARGE_NUM_DATA_POINTS < maxVisibleBubbles < qcy', () => {
    chartModule.getValue.withArgs('hpc', 'qMeasureInfo.2').returns('some-info');
    chartModule.getValue.withArgs('hpc', 'qSize.qcy').returns(800);
    layout.qIsBDILiveMode = true;
    flags.isEnabled.withArgs('BDI_CLIENT_ADAPT').returns(false);
    flags.isEnabled.withArgs('NUM_BUBBLES').returns(true);
    layout.maxVisibleBubbles = 600;
    expect(create()({ layout })).to.deep.equal({
      isSnapshot: true,
      hasSizeMeasure: true,
      isBigData: true,
      isContinuous: true,
      isRangeSelectionsSupported: true,
      isMaxVisibleBubblesEnabled: true,
      isProgressiveEnabled: false,
      isLargeNumDataPoints: false,
      maxVisibleBubbles: 600,
      largeNumDataPoints: 500,
      numDataPoints: 800,
    });
  });
});
