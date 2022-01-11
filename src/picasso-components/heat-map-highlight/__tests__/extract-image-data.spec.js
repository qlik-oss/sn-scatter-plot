import getImageData from '../extract-image-data';

describe('image data', () => {
  let range;
  let axis;
  let dataView;
  let dirtyImageData;
  let width;
  let height;

  beforeEach(() => {
    range = [100, 200];
    axis = 'x';
    dataView = () => ({
      xAxisMin: 10,
      xAxisMax: 1000,
      yAxisMin: 5,
      yAxisMax: 300,
    });
    dirtyImageData = {
      x: 0,
      y: 0,
      w: 300,
      h: 200,
    };
    width = 300;
    height = 200;
  });

  it('should return correct image data for x range selection', () => {
    const { x, y, w, h } = getImageData(range, axis, dataView, dirtyImageData, width, height);

    expect(x).to.equal(27.27);
    expect(y).to.equal(0);
    expect(w).to.equal(30.3);
    expect(h).to.equal(200);
  });

  it('should return correct image data for y range selection', () => {
    axis = 'y';
    const { x, y, w, h } = getImageData(range, axis, dataView, dirtyImageData, width, height);

    expect(x).to.equal(0);
    expect(y).to.equal(67.8);
    expect(w).to.equal(300);
    expect(h).to.equal(67.8);
  });
});
