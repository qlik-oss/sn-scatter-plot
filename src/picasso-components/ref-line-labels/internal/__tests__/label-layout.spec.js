import labelLayout from '../label-layout';

describe('getGap', () => {
  it('should get correct gap, case 1: positive gap', () => {
    const segment1 = { position: 100, radius: 50 };
    const segment2 = { position: 300, radius: 70 };
    const result = labelLayout.getGap(segment1, segment2);
    expect(result).to.deep.equal(80);
  });

  it('should get correct gap, case 2: negative gap', () => {
    const segment1 = { position: 100, radius: 50 };
    const segment2 = { position: 200, radius: 70 };
    const result = labelLayout.getGap(segment1, segment2);
    expect(result).to.deep.equal(-20);
  });

  it('should get correct gap, case 3: segment 1 position is larger than segment 2 position', () => {
    const segment1 = { position: 400, radius: 100 };
    const segment2 = { position: 300, radius: 70 };
    const result = labelLayout.getGap(segment1, segment2);
    expect(result).to.deep.equal(-70);
  });
});

describe('findSegmentPositionMeetMaxThenMin', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });
  afterEach(() => {
    sandbox.restore();
  });
  it('should return the same segment position when the segment is well between max and min ', () => {
    const segment = { position: 300, radius: 50 };
    const min = 200;
    const max = 400;
    const result = labelLayout.findSegmentPositionMeetMaxThenMin(segment, min, max);
    expect(result).to.deep.equal(300);
  });

  it('should return new segment position when the segment max is above max', () => {
    const segment = { position: 300, radius: 50 };
    const min = 200;
    const max = 320;
    const result = labelLayout.findSegmentPositionMeetMaxThenMin(segment, min, max);
    expect(result).to.deep.equal(270); // 300 - 30 == 270, 270 - 50 > 200
  });

  it('should return new segment position when the segment max is above max, and its intermediate min is below min', () => {
    const segment = { position: 300, radius: 80 };
    const min = 200;
    const max = 340;
    const result = labelLayout.findSegmentPositionMeetMaxThenMin(segment, min, max);
    expect(result).to.deep.equal(280); // 300 - 40 == 260, 180 < 200, 260 + 20 = 280
  });
});

describe('layoutPositionFromMin', () => {
  let sandbox;
  const areaMin = 30;
  const areaMax = 400;
  const gap = 8;
  let segments;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(labelLayout, 'findSegmentPositionMeetMaxThenMin').returns(100);
    segments = [
      { position: 10, radius: 20 },
      { position: 200, radius: 30 },
      { position: 310, radius: 15 },
    ];
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should calculate correct values in every loop', () => {
    labelLayout.layoutPositionFromMin(segments, areaMin, areaMax, gap);
    expect(labelLayout.findSegmentPositionMeetMaxThenMin).to.have.been.calledThrice;
    expect(labelLayout.findSegmentPositionMeetMaxThenMin.getCall(0).args).to.deep.equal([segments[0], 30, 101]);
    expect(labelLayout.findSegmentPositionMeetMaxThenMin.getCall(1).args).to.deep.equal([segments[1], 128, 251]);
    expect(labelLayout.findSegmentPositionMeetMaxThenMin.getCall(2).args).to.deep.equal([segments[2], 138, 400]);
  });

  it('should calculate correct values in every loop, when gap is implicit (zero)', () => {
    labelLayout.layoutPositionFromMin(segments, areaMin, areaMax);
    expect(labelLayout.findSegmentPositionMeetMaxThenMin).to.have.been.calledThrice;
    expect(labelLayout.findSegmentPositionMeetMaxThenMin.getCall(0).args).to.deep.equal([segments[0], 30, 105]);
    expect(labelLayout.findSegmentPositionMeetMaxThenMin.getCall(1).args).to.deep.equal([segments[1], 120, 255]);
    expect(labelLayout.findSegmentPositionMeetMaxThenMin.getCall(2).args).to.deep.equal([segments[2], 130, 400]);
  });
});

describe('adjustPositionFromMax', () => {
  it('should not modify segments if max of the last segment is smaller than max', () => {
    const min = 30;
    const max = 400;
    const gap = 8;
    const segments = [
      { position: 50, radius: 20 },
      { position: 200, radius: 30 },
      { position: 310, radius: 15 },
    ];
    labelLayout.adjustPositionFromMax(segments, min, max, gap);
    expect(segments).to.deep.equal([
      { position: 50, radius: 20 },
      { position: 200, radius: 30 },
      { position: 310, radius: 15 },
    ]);
  });

  it('should not modify segments if max of the last segment is smaller than max, when gap is implicit (zero)', () => {
    const min = 30;
    const max = 400;
    const segments = [
      { position: 50, radius: 20 },
      { position: 200, radius: 30 },
      { position: 310, radius: 15 },
    ];
    labelLayout.adjustPositionFromMax(segments, min, max);
    expect(segments).to.deep.equal([
      { position: 50, radius: 20 },
      { position: 200, radius: 30 },
      { position: 310, radius: 15 },
    ]);
  });

  it('should push the highest segment down so that its max equals max, if possible', () => {
    const min = 30;
    const max = 500;
    const gap = 8;
    const segments = [
      { position: 50, radius: 20 },
      { position: 200, radius: 30 },
      { position: 310, radius: 15 },
      { position: 430, radius: 20 },
      { position: 490, radius: 15 },
      { position: 550, radius: 30 },
    ];
    labelLayout.adjustPositionFromMax(segments, min, max, gap);
    expect(segments).to.deep.equal([
      { position: 50, radius: 20, move: 0 }, // 0
      { position: 200, radius: 30, move: 0 }, // 1
      { position: 310, radius: 15, move: 0 }, // 2
      { position: 374, radius: 20, move: 56 }, // 3
      { position: 417, radius: 15, move: 73 }, // 4
      { position: 470, radius: 30, move: 80 }, // 5
    ]);
  });

  it('should push the highest segment as low as possible, case 1: min of the lowest segment is lower than min ', () => {
    const min = 30;
    const max = 300;
    const gap = 8;
    const segments = [
      { position: 30, radius: 30 },
      { position: 100, radius: 30 },
      { position: 170, radius: 30 },
      { position: 250, radius: 40 },
      { position: 340, radius: 30 },
      { position: 410, radius: 30 },
    ];
    labelLayout.adjustPositionFromMax(segments, min, max, gap);
    expect(segments).to.deep.equal([
      { position: 30, radius: 30, move: 0 }, // 0
      { position: 98, radius: 30, move: 2 }, // 1
      { position: 166, radius: 30, move: 4 }, // 2
      { position: 244, radius: 40, move: 6 }, // 3
      { position: 322, radius: 30, move: 18 }, // 4
      { position: 390, radius: 30, move: 20 }, // 5
    ]);
  });

  it('should push the highest segment as low as possible, case 2: min of the lowest segment is higher than min', () => {
    const min = 0;
    const max = 300;
    const gap = 8;
    const segments = [
      { position: 30, radius: 10 },
      { position: 100, radius: 30 },
      { position: 170, radius: 30 },
      { position: 250, radius: 40 },
      { position: 340, radius: 30 },
      { position: 410, radius: 30 },
    ];
    labelLayout.adjustPositionFromMax(segments, min, max, gap);
    expect(segments).to.deep.equal([
      { position: 10, radius: 10, move: 20 }, // 0
      { position: 58, radius: 30, move: 42 }, // 1
      { position: 126, radius: 30, move: 44 }, // 2
      { position: 204, radius: 40, move: 46 }, // 3
      { position: 282, radius: 30, move: 58 }, // 4
      { position: 350, radius: 30, move: 60 }, // 5
    ]);
  });
});

describe('createLayout', () => {
  let sandbox;
  const min = 0;
  const max = 100;
  const gap = 10;
  let labels;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(labelLayout, 'findSegmentPositionMeetMaxThenMin');
    sandbox.stub(labelLayout, 'layoutPositionFromMin');
    sandbox.stub(labelLayout, 'adjustPositionFromMax');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should not call any helper function if there is no label', () => {
    labels = [];
    labelLayout.createLayout(labels, min, max, gap);
    expect(labelLayout.findSegmentPositionMeetMaxThenMin).to.not.have.been.called;
    expect(labelLayout.layoutPositionFromMin).to.not.have.been.called;
    expect(labelLayout.adjustPositionFromMax).to.not.have.been.called;
  });

  it('should not call any helper function if there is no label, when gap is implicit (zero)', () => {
    labels = [];
    labelLayout.createLayout(labels, min, max);
    expect(labelLayout.findSegmentPositionMeetMaxThenMin).to.not.have.been.called;
    expect(labelLayout.layoutPositionFromMin).to.not.have.been.called;
    expect(labelLayout.adjustPositionFromMax).to.not.have.been.called;
  });

  it('should call only findSegment... function if label has one element', () => {
    labels = [{ segment: { position: 20, radius: 10 } }];
    labelLayout.createLayout(labels, min, max, gap);
    expect(labelLayout.findSegmentPositionMeetMaxThenMin).to.have.been.calledOnce;
    expect(labelLayout.layoutPositionFromMin).to.not.have.been.called;
    expect(labelLayout.adjustPositionFromMax).to.not.have.been.called;
  });

  it('should call only layoutPosition... and adjustPosition... functions if label has two or more elements', () => {
    labels = [{ segment: { position: 20, radius: 10 } }, { segment: { position: 30, radius: 20 } }];
    labelLayout.createLayout(labels, min, max, gap);
    expect(labelLayout.findSegmentPositionMeetMaxThenMin).to.not.have.been.called;
    expect(labelLayout.layoutPositionFromMin).to.have.been.calledOnce;
    expect(labelLayout.adjustPositionFromMax).to.have.been.calledOnce;
  });
});
