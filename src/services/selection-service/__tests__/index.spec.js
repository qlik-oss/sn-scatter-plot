// eslint-disable-next-line no-unused-vars
import * as chartModules from 'qlik-chart-modules';
import * as qBrush from '../bin-selection/q-brush';
import * as KEYS from '../../../constants/keys';

describe('selection-service', () => {
  let sandbox;
  let create;
  let chart;
  let actions;
  let selections;
  let createSelectionService;
  let picassoQSelections;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(chartModules, 'selectionService');
    picassoQSelections = sandbox.stub();
    createSelectionService = aw.mock(
      [['**/dist/picasso-q.js', () => ({ selections: picassoQSelections })]],
      ['../index.js']
    )[0].default;
    actions = {
      select: {
        emit: sandbox.stub(),
      },
    };
    sandbox.stub(KEYS, 'default').value({
      COMPONENT: { HEAT_MAP_HIGHLIGHT: 'heat-map-highlight' },
      BRUSH: {
        X_RANGE: 'x-range-brush',
        Y_RANGE: 'y-range-brush',
        BIN_X_RANGE: 'bin-x-range-brush',
        BIN_Y_RANGE: 'bin-y-range-brush',
      },
    });
    create = () => createSelectionService({ chart, actions, selections });
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('config', () => {
    let getConfig;

    beforeEach(() => {
      getConfig = () => {
        create();
        const { config } = chartModules.selectionService.getCall(0).args[0];
        return config;
      };
    });

    it('should have all keys', () => {
      expect(getConfig()).to.have.all.keys(['allowSimultaneous', 'selectionActions', 'selectionsFn']);
    });

    describe('allowSimultaneous', () => {
      it('should have correct length', () => {
        expect(getConfig().allowSimultaneous.length).to.equal(17);
      });
    });

    describe('selectionActions', () => {
      describe('clear', () => {
        let clearMinor;
        let clearLegend;
        let selectionInfo;
        let cleared;
        beforeEach(() => {
          selectionInfo = { event: 'xRange' };
          clearMinor = sandbox.stub();
          clearLegend = sandbox.stub();
        });

        it('should call clearLegend', () => {
          getConfig().selectionActions.clear({ clearMinor, clearLegend, selectionInfo, cleared });
          expect(clearLegend).to.have.been.calledOnce;
        });

        describe('cleared is true', () => {
          it('should call clearMinor four times and not emit event when is normal data', () => {
            cleared = true;
            selectionInfo = { event: 'xRange', components: ['point'] };
            getConfig().selectionActions.clear({ clearMinor, clearLegend, selectionInfo, cleared });
            expect(clearMinor.callCount).to.equal(4);
            expect(clearMinor).to.have.been.calledWith({ eventName: 'xRange', componentName: 'x-range-brush' });
            expect(clearMinor).to.have.been.calledWith({ eventName: 'yRange', componentName: 'y-range-brush' });
            expect(clearMinor).to.have.been.calledWith({
              eventName: 'binXRange',
              componentName: 'bin-x-range-brush',
            });
            expect(clearMinor).to.have.been.calledWith({
              eventName: 'binYRange',
              componentName: 'bin-y-range-brush',
            });
            expect(actions.select.emit).to.not.have.been.called;
          });

          it('should call clearMinor four times and emit event when is bin data', () => {
            cleared = true;
            selectionInfo = { event: 'xRange', components: ['heat-map-highlight'] };
            getConfig().selectionActions.clear({ clearMinor, clearLegend, selectionInfo, cleared });
            expect(clearMinor.callCount).to.equal(4);
            expect(clearMinor).to.have.been.calledWith({ eventName: 'xRange', componentName: 'x-range-brush' });
            expect(clearMinor).to.have.been.calledWith({ eventName: 'yRange', componentName: 'y-range-brush' });
            expect(clearMinor).to.have.been.calledWith({
              eventName: 'binXRange',
              componentName: 'bin-x-range-brush',
            });
            expect(clearMinor).to.have.been.calledWith({
              eventName: 'binYRange',
              componentName: 'bin-y-range-brush',
            });
            expect(actions.select.emit).to.have.been.calledWith('binsRangeSelectionClear');
          });
        });

        describe('isSelectingRanges is false', () => {
          it('should call clearMinor four times and not emit event when is normal data', () => {
            cleared = true;
            selectionInfo = { event: 'range', components: ['point'] };
            getConfig().selectionActions.clear({ clearMinor, clearLegend, selectionInfo, cleared });
            expect(clearMinor.callCount).to.equal(4);
            expect(clearMinor).to.have.been.calledWith({ eventName: 'xRange', componentName: 'x-range-brush' });
            expect(clearMinor).to.have.been.calledWith({ eventName: 'yRange', componentName: 'y-range-brush' });
            expect(clearMinor).to.have.been.calledWith({
              eventName: 'binXRange',
              componentName: 'bin-x-range-brush',
            });
            expect(clearMinor).to.have.been.calledWith({
              eventName: 'binYRange',
              componentName: 'bin-y-range-brush',
            });
            expect(actions.select.emit).to.not.have.been.called;
          });

          it('should call clearMinor four times and emit event when is bin data', () => {
            cleared = true;
            selectionInfo = { event: 'range', components: ['heat-map-highlight'] };
            getConfig().selectionActions.clear({ clearMinor, clearLegend, selectionInfo, cleared });
            expect(clearMinor.callCount).to.equal(4);
            expect(clearMinor).to.have.been.calledWith({ eventName: 'xRange', componentName: 'x-range-brush' });
            expect(clearMinor).to.have.been.calledWith({ eventName: 'yRange', componentName: 'y-range-brush' });
            expect(clearMinor).to.have.been.calledWith({
              eventName: 'binXRange',
              componentName: 'bin-x-range-brush',
            });
            expect(clearMinor).to.have.been.calledWith({
              eventName: 'binYRange',
              componentName: 'bin-y-range-brush',
            });
            expect(actions.select.emit).to.have.been.calledWith('binsRangeSelectionClear');
          });
        });

        it('should not call clearMinor cleared is false and xRange is being selected', () => {
          cleared = false;
          getConfig().selectionActions.clear({ clearMinor, clearLegend, selectionInfo, cleared });
          expect(clearMinor).to.not.have.been;
        });
      });
    });

    describe('slectionsFn', () => {
      let brush;
      let qBrushOptions;
      let layout;
      beforeEach(() => {
        sandbox.stub(qBrush, 'default');
        layout = { qHyperCube: { qDataPages: ['data-page-1'] } };
      });

      it('should call picassoQ selections if qDataPages is not empty', () => {
        getConfig().selectionsFn(brush, qBrushOptions, layout);
        expect(picassoQSelections).to.have.been.calledOnce;
      });

      it('should call qBrush if qDataPages is empty', () => {
        layout = { qHyperCube: { qDataPages: [] } };
        getConfig().selectionsFn(brush, qBrushOptions, layout);
        expect(qBrush.default).to.have.been.calledOnce;
      });
    });
  });
});
