import * as NUMBERS from '../../../../constants/numbers';
import * as KEYS from '../../../../constants/keys';
import createNavigationPanel from '..';

describe('createNavigationPanel', () => {
  let sandbox;
  let layoutService;
  let chartModel;
  let chart;
  let viewHandler;
  let create;
  let navigationPanel;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layoutService = { getLayoutValue: sandbox.stub() };
    viewHandler = {
      mockStorage: {
        currentDataView: undefined,
        currentScale: undefined,
        getcurrentScale() {
          return this.currentScale;
        },
      },
      getMeta: sandbox.stub().returns({ homeStateDataView: { xAxisMin: 0, xAxisMax: 1, yAxisMin: 2, yAxisMax: 3 } }),
      setDataView(dataView) {
        this.mockStorage.currentDataView = dataView;
      },
      getDataView() {
        return this.mockStorage.currentDataView;
      },
      setMeta({ scale }) {
        this.mockStorage.currentScale = scale;
      },
    };
    chartModel = { query: { getViewHandler: sandbox.stub().returns(viewHandler) } };
    sandbox.stub(NUMBERS, 'default').value({ NAVIGATION_PANEL: { PADDING: 1, GRID_WIDTH: 2 } });
    sandbox.stub(KEYS, 'default').value({ COMPONENT: { NAVIGATION_PANEL: 'nav-pan' } });
    chart = { component: sandbox.stub().returns({ rect: { computedPhysical: { width: 5, height: 6 } } }) };
    create = () => createNavigationPanel({ layoutService, chartModel, chart });
    navigationPanel = create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  const epsilon = 1e-6;

  const closeEnough = (dataView1, dataView2) => {
    if (
      Math.abs(1 - dataView1.xAxisMin / dataView2.xAxisMin) < epsilon &&
      Math.abs(1 - dataView1.xAxisMax / dataView2.xAxisMax) < epsilon &&
      Math.abs(1 - dataView1.yAxisMin / dataView2.yAxisMin) < epsilon &&
      Math.abs(1 - dataView1.yAxisMax / dataView2.yAxisMax) < epsilon
    ) {
      return true;
    }
    return false;
  };

  describe('the returned navigation panel object', () => {
    it('should have all keys', () => {
      expect(navigationPanel).to.have.all.keys(['key', 'type', 'show', 'style', 'buttonList']);
    });

    it('should have correct key', () => {
      expect(navigationPanel.key).to.equal('nav-pan');
    });

    it('should have correct type', () => {
      expect(navigationPanel.type).to.equal('navigation-panel');
    });

    it('should have correct show', () => {
      layoutService.getLayoutValue.returns(true);
      navigationPanel = create();
      expect(navigationPanel.show).to.equal(true);

      layoutService.getLayoutValue.returns(false);
      navigationPanel = create();
      expect(navigationPanel.show).to.equal(false);
    });

    it('should have correct style', () => {
      expect(navigationPanel.style).to.deep.equal({ padding: 1, gridWidth: 2 });
    });

    describe('buttonList', () => {
      it('should have all keys', () => {
        expect(navigationPanel.buttonList).to.have.all.keys([
          'home',
          'up',
          'down',
          'left',
          'right',
          'zoomIn',
          'zoomOut',
        ]);
      });

      describe('home', () => {
        it('should have all keys', () => {
          expect(navigationPanel.buttonList.home).to.have.all.keys(['isDisabled', 'callBack']);
        });

        describe('isDisabled', () => {
          it('should return true if the view is at home state', () => {
            viewHandler.getMeta.returns({ isHomeState: true });
            expect(navigationPanel.buttonList.home.isDisabled()).to.equal(true);
          });

          it('should return false if the view is not at home state', () => {
            viewHandler.getMeta.returns({ isHomeState: false });
            expect(navigationPanel.buttonList.home.isDisabled()).to.equal(false);
          });
        });

        describe('callBack', () => {
          it('should set home state data view as the new data view', () => {
            navigationPanel.buttonList.home.callBack();
            expect(viewHandler.mockStorage.currentDataView).to.deep.equal({
              xAxisMin: 0,
              xAxisMax: 1,
              yAxisMin: 2,
              yAxisMax: 3,
            });
          });
        });
      });

      describe('left', () => {
        describe('callBack', () => {
          it('should update data view correctly', () => {
            viewHandler.mockStorage.currentDataView = { xAxisMin: 0, xAxisMax: 1, yAxisMin: 2, yAxisMax: 3 };
            navigationPanel.buttonList.left.callBack();
            expect(viewHandler.mockStorage.currentDataView).to.deep.equal({
              xAxisMin: -0.1,
              xAxisMax: 0.9,
              yAxisMin: 2,
              yAxisMax: 3,
            });
          });
        });
      });

      describe('right', () => {
        describe('callBack', () => {
          it('should update data view correctly', () => {
            viewHandler.mockStorage.currentDataView = { xAxisMin: 0, xAxisMax: 1, yAxisMin: 2, yAxisMax: 3 };
            navigationPanel.buttonList.right.callBack();
            expect(viewHandler.mockStorage.currentDataView).to.deep.equal({
              xAxisMin: 0.1,
              xAxisMax: 1.1,
              yAxisMin: 2,
              yAxisMax: 3,
            });
          });
        });
      });

      describe('up', () => {
        describe('callBack', () => {
          it('should update data view correctly', () => {
            viewHandler.mockStorage.currentDataView = { xAxisMin: 0, xAxisMax: 1, yAxisMin: 2, yAxisMax: 3 };
            navigationPanel.buttonList.up.callBack();
            expect(viewHandler.mockStorage.currentDataView).to.deep.equal({
              xAxisMin: 0,
              xAxisMax: 1,
              yAxisMin: 2.1,
              yAxisMax: 3.1,
            });
          });
        });
      });

      describe('down', () => {
        describe('callBack', () => {
          it('should update data view correctly', () => {
            viewHandler.mockStorage.currentDataView = { xAxisMin: 0, xAxisMax: 1, yAxisMin: 2, yAxisMax: 3 };
            navigationPanel.buttonList.down.callBack();
            expect(viewHandler.mockStorage.currentDataView).to.deep.equal({
              xAxisMin: 0,
              xAxisMax: 1,
              yAxisMin: 1.9,
              yAxisMax: 2.9,
            });
          });
        });
      });

      describe('zoomIn', () => {
        describe('callBack', () => {
          it('should update data view correctly', () => {
            viewHandler.mockStorage.currentDataView = { xAxisMin: 0, xAxisMax: 1, yAxisMin: 2, yAxisMax: 3 };
            viewHandler.mockStorage.currentScale = 2;
            viewHandler.getMeta.returns({ scale: viewHandler.mockStorage.currentScale, maxScale: 4.1, minScale: 0.9 });
            navigationPanel.buttonList.zoomIn.callBack();
            viewHandler.getMeta.returns({ scale: viewHandler.mockStorage.currentScale, maxScale: 4.1, minScale: 0.9 });
            navigationPanel.buttonList.zoomIn.callBack();
            expect(
              closeEnough(viewHandler.mockStorage.currentDataView, {
                xAxisMin: 0.25,
                xAxisMax: 0.75,
                yAxisMin: 2.25,
                yAxisMax: 2.75,
              })
            ).to.equal(true);
            viewHandler.getMeta.returns({ scale: viewHandler.mockStorage.currentScale, maxScale: 4.1, minScale: 0.9 });
            navigationPanel.buttonList.zoomIn.callBack(); // hitting minScale
            expect(
              closeEnough(viewHandler.mockStorage.currentDataView, {
                xAxisMin: 0.25,
                xAxisMax: 0.75,
                yAxisMin: 2.25,
                yAxisMax: 2.75,
              })
            ).to.equal(true);
          });
        });
      });

      describe('zoomOut', () => {
        describe('callBack', () => {
          it('should update data view correctly', () => {
            viewHandler.mockStorage.currentDataView = { xAxisMin: 0, xAxisMax: 1, yAxisMin: 2, yAxisMax: 3 };
            viewHandler.mockStorage.currentScale = 2;
            viewHandler.getMeta.returns({ scale: viewHandler.mockStorage.currentScale, maxScale: 4.1, minScale: 0.9 });
            navigationPanel.buttonList.zoomOut.callBack();
            viewHandler.getMeta.returns({ scale: viewHandler.mockStorage.currentScale, maxScale: 4.1, minScale: 0.9 });
            navigationPanel.buttonList.zoomOut.callBack();
            expect(
              closeEnough(viewHandler.mockStorage.currentDataView, {
                xAxisMin: -0.5,
                xAxisMax: 1.5,
                yAxisMin: 1.5,
                yAxisMax: 3.5,
              })
            ).to.equal(true);
            viewHandler.getMeta.returns({ scale: viewHandler.mockStorage.currentScale, maxScale: 4.1, minScale: 0.9 });
            navigationPanel.buttonList.zoomOut.callBack(); // hitting maxScale
            expect(
              closeEnough(viewHandler.mockStorage.currentDataView, {
                xAxisMin: -0.5,
                xAxisMax: 1.5,
                yAxisMin: 1.5,
                yAxisMax: 3.5,
              })
            ).to.equal(true);
          });
        });
      });
    });
  });
});
