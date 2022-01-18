import getPixelRatio from '../get-pixel-ratio';

describe('getPixelRatio', () => {
  let canvasContext;
  beforeEach(() => {
    global.window = {
      devicePixelRatio: 1.25,
    };
  });

  it('shoule return correct pixel ratio when has webkitBackingStorePixelRatio', () => {
    canvasContext = { webkitBackingStorePixelRatio: 1 };
    expect(getPixelRatio(canvasContext)).to.equal(1.25);
  });

  it('shoule return correct pixel ratio when has mozBackingStorePixelRatio', () => {
    canvasContext = { mozBackingStorePixelRatio: 1.25 };
    expect(getPixelRatio(canvasContext)).to.equal(1);
  });

  it('shoule return correct pixel ratio when has msBackingStorePixelRatio', () => {
    canvasContext = { msBackingStorePixelRatio: 2.5 };
    expect(getPixelRatio(canvasContext)).to.equal(0.5);
  });

  it('shoule return correct pixel ratio when has oBackingStorePixelRatio', () => {
    canvasContext = { oBackingStorePixelRatio: 1.25 };
    expect(getPixelRatio(canvasContext)).to.equal(1);
  });

  it('shoule return correct pixel ratio when has backingStorePixelRatio', () => {
    canvasContext = { backingStorePixelRatio: 1.25 };
    expect(getPixelRatio(canvasContext)).to.equal(1);
  });

  it('should return correct pixel ratio when window.devicePixelRatio is not defined', () => {
    canvasContext = { webkitBackingStorePixelRatio: 1.25 };
    global.window = { devicePixelRatio: undefined };
    expect(getPixelRatio(canvasContext)).to.equal(0.8);
  });
});
