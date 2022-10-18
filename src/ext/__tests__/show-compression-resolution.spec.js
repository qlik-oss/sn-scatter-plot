import showCompressionResolution from '../show-compression-resolution';

describe('showCompressionResolution', () => {
  let layout;
  let properties;

  beforeEach(() => {
    layout = { qHyperCube: { qDimensionInfo: [{ qCardinal: 100 }] } };
    properties = { maxVisibleBubbles: 2000 };
  });

  it('should return false if there is no dim', () => {
    layout.qHyperCube.qDimensionInfo = [];
    expect(showCompressionResolution(layout)).to.equal(false);
  });

  it('should return false if dim?.qCardinal < COMPRESSION_THRESHOLD', () => {
    expect(showCompressionResolution(layout)).to.equal(false);
  });

  it('should return false if dim?.qCardinal = COMPRESSION_THRESHOLD', () => {
    layout.qHyperCube.qDimensionInfo[0].qCardinal = 1000;
    expect(showCompressionResolution(layout)).to.equal(false);
  });

  it('should return true if dim?.qCardinal > COMPRESSION_THRESHOLD', () => {
    layout.qHyperCube.qDimensionInfo[0].qCardinal = 1001;
    expect(showCompressionResolution(layout)).to.equal(true);
  });

  it('should return false if dim?.qCardinal < maxVisibleBubbles', () => {
    expect(showCompressionResolution(layout, properties)).to.equal(false);
  });

  it('should return false if dim?.qCardinal = maxVisibleBubbles', () => {
    layout.qHyperCube.qDimensionInfo[0].qCardinal = 2000;
    expect(showCompressionResolution(layout, properties)).to.equal(false);
  });

  it('should return true if dim?.qCardinal > maxVisibleBubbles', () => {
    layout.qHyperCube.qDimensionInfo[0].qCardinal = 2001;
    expect(showCompressionResolution(layout, properties)).to.equal(true);
  });
});
