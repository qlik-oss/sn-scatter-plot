import heatMapHighlight from '..';
import * as getImageData from '../extract-image-data';
import * as getPixelRatio from '../get-pixel-ratio';

describe('heatMapHighlight', () => {
  let sandbox;
  let heatMapCanvas;
  let heatMapCanvasContext;
  let heatMapHighlightCanvas;
  let ctx;

  it('should have correct keys', () => {
    expect(heatMapHighlight).to.have.all.keys(['require', 'renderer', 'render']);
  });

  describe('render', () => {
    beforeEach(() => {
      sandbox = sinon.createSandbox();
      heatMapCanvasContext = {
        getImageData: sandbox.stub().returns({ data: [0, 0, 0, 0, 0, 0, 0, 0, 0] }),
      };
      heatMapCanvas = {
        getContext: sandbox.stub().returns(heatMapCanvasContext),
        width: 200,
        height: 100,
      };
      ctx = {
        clearRect: sandbox.stub(),
        putImageData: sandbox.stub(),
      };
      heatMapHighlightCanvas = {
        getContext: sandbox.stub().returns(ctx),
      };
      heatMapHighlight.chart = { element: { querySelector: sandbox.stub().returns(heatMapCanvas) } };
      heatMapHighlight.renderer = { element: sandbox.stub().returns(heatMapHighlightCanvas) };
      heatMapHighlight.rect = { width: 200, height: 100 };
      heatMapHighlight.settings = {
        settings: {
          actions: {
            select: {
              on: sandbox.stub(),
              emit: sandbox.stub(),
            },
          },
          dataView: sandbox.stub(),
        },
      };
      sandbox.stub(getImageData, 'default');
      sandbox.stub(getPixelRatio, 'default');
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should calculate image data when is x range ', () => {
      heatMapHighlight.settings.settings.actions.select.emit('binXRange');
      heatMapHighlight.render();
      expect(heatMapHighlight.settings.settings.actions.select.on.withArgs('binXRange')).to.have.been.calledOnce;
    });

    it('should calculate image data when is y range ', () => {
      heatMapHighlight.settings.settings.actions.select.emit('binYRange');
      heatMapHighlight.render();
      expect(heatMapHighlight.settings.settings.actions.select.on.withArgs('binYRange')).to.have.been.calledOnce;
    });

    it('should clear image data when range selection is cleared ', () => {
      heatMapHighlight.settings.settings.actions.select.emit('binsRangeSelectionClear');
      heatMapHighlight.render();
      expect(heatMapHighlight.settings.settings.actions.select.on.withArgs('binsRangeSelectionClear')).to.have.been
        .calledOnce;
    });
  });
});
