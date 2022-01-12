import extend from 'extend';
import * as KEYS from '../../../constants/keys';
import * as NUMBERS from '../../../constants/numbers';
import pan from '../pan';
import * as updateTapDataView from '../tap-mini-chart/update-tap-data-view';
import * as getTapPosition from '../tap-mini-chart/tap-position';

describe('pan', () => {
  let sandbox;
  let chart;
  let actions;
  let viewHandler;
  let rtl;
  let panObject;
  let e;
  let myDataView;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    viewHandler = {
      getDataView: sandbox.stub(),
      throttledFetchData: sandbox.stub().callsFake(() => sandbox.stub()),
      setInteractionInProgress: sandbox.stub(),
      getMeta: sandbox.stub().returns({ scale: 0.1 }),
    };
    rtl = false;
    actions = { zoom: { enabled: sandbox.stub() } };
    chart = { componentsFromPoint: sandbox.stub(), component: sandbox.stub() };
    sandbox.stub(KEYS, 'default').value({ COMPONENT: { POINT: 'point-comp' } });
    sandbox.stub(NUMBERS, 'default').value({ MINI_CHART: { RATIO: 0.5 } });
    sandbox.stub(getTapPosition, 'default').returns({ x: 1, y: 1 });
    sandbox.stub(updateTapDataView, 'default');
    panObject = pan({ chart, actions, viewHandler, rtl });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should have correct attributes ', () => {
    expect(panObject).to.have.all.keys(['type', 'key', 'options', 'events']);
  });

  describe('options', () => {
    it('should have correct attributes', () => {
      expect(panObject.options).to.have.all.keys(['event', 'pointers', 'threshold', 'enable']);
    });

    describe('enable', () => {
      it('should return true if options.started equals areaPan', () => {
        panObject.options.started = 'areaPan';
        expect(panObject.options.enable('', '')).to.equal(true);
      });

      it('should return true if e is not defined', () => {
        expect(panObject.options.enable('', undefined)).to.equal(true);
      });

      it('should return false if actions zoom is not enabled', () => {
        actions.zoom.enabled.returns(false);
        expect(panObject.options.enable('', 'e')).to.equal(false);
      });

      it('should return correct pointAreaPanned', () => {
        actions.zoom.enabled.returns(true);
        chart.componentsFromPoint
          .withArgs({ x: 200, y: 100 })
          .returns([{ key: 'point-comp' }, { key: 'point-comp', id: 'should-not-return-this' }]);
        expect(panObject.options.enable('', { center: { x: 200, y: 100 } })).to.deep.equal({ key: 'point-comp' });
      });
    });
  });

  describe('events', () => {
    it('should have correct attributes', () => {
      expect(panObject.events).to.have.all.keys(['areaPanstart', 'areaPanmove', 'areaPanend', 'areaPancancel']);
    });

    describe('areaPanstart', () => {
      it('should add correct areaPan object to events, case 1: tap is inside the mini chart', () => {
        viewHandler.getDataView.returns({ xAxisMin: 1, xAxisMax: 2, yAxisMin: 3, yAxisMax: 4 });
        panObject.events.pointAreaPanned = { rect: { width: 1, height: 2 } };
        e = { preventDefault: sandbox.stub() };
        panObject.events.areaPanstart(e);
        expect(panObject.events.started).to.equal('areaPan');
        expect(panObject.events.areaPan).to.deep.equal({
          componentSize: { width: 1, height: 2 },
          xAxisMin: 1,
          xAxisMax: 2,
          yAxisMin: 3,
          yAxisMax: 4,
          miniChart: { panInMiniChart: true, navWindowScale: 0.05 },
        });
      });
    });

    describe('areaPanmove', () => {
      it('should modify myDataView correctly', () => {
        e = { preventDefault: sandbox.stub(), deltaX: 10, deltaY: 20 };
        panObject.events.areaPan = {
          componentSize: { width: 100, height: 200 },
          xAxisMin: -1000,
          xAxisMax: 1000,
          yAxisMin: 0,
          yAxisMax: 2000,
          miniChart: { panInMiniChart: false, navWindowScale: 0.05 },
        };
        myDataView = {};
        viewHandler.setDataView = (dataView) => {
          extend(true, myDataView, dataView);
        };
        panObject.events.areaPanmove(e);
        expect(myDataView).to.deep.equal({
          xAxisMin: -1200,
          xAxisMax: 800,
          yAxisMin: 200,
          yAxisMax: 2200,
          deltaX: 10,
          deltaY: 20,
        });
      });

      it('should modify myDataView correctly when panning inside mini chart', () => {
        e = { preventDefault: sandbox.stub(), deltaX: 10, deltaY: 20 };
        panObject.events.areaPan = {
          componentSize: { width: 100, height: 200 },
          xAxisMin: -1000,
          xAxisMax: 1000,
          yAxisMin: 0,
          yAxisMax: 2000,
          miniChart: { panInMiniChart: true, navWindowScale: 0.05 },
        };
        myDataView = {};
        viewHandler.setDataView = (dataView) => {
          extend(true, myDataView, dataView);
        };
        panObject.events.areaPanmove(e);
        expect(myDataView).to.deep.equal({
          xAxisMin: 3000,
          xAxisMax: 5000,
          yAxisMin: -4000,
          yAxisMax: -2000,
          deltaX: -200,
          deltaY: -400,
        });
      });

      it('should modify myDataView correctly when is rtl', () => {
        rtl = true;
        e = { preventDefault: sandbox.stub(), deltaX: 10, deltaY: 20 };
        panObject = pan({ chart, actions, viewHandler, rtl });
        panObject.events.areaPan = {
          componentSize: { width: 100, height: 200 },
          xAxisMin: -1000,
          xAxisMax: 1000,
          yAxisMin: 0,
          yAxisMax: 2000,
          miniChart: { panInMiniChart: false, navWindowScale: 0.05 },
        };
        myDataView = {};
        viewHandler.setDataView = (dataView) => {
          extend(true, myDataView, dataView);
        };
        panObject.events.areaPanmove(e);
        expect(myDataView).to.deep.equal({
          xAxisMin: -800,
          xAxisMax: 1200,
          yAxisMin: 200,
          yAxisMax: 2200,
          deltaX: 10,
          deltaY: 20,
        });
      });
    });

    describe('areaPanend', () => {
      it('should set events.started to false', () => {
        e = { preventDefault: sandbox.stub() };
        panObject.events.areaPan = {
          componentSize: { width: 100, height: 200 },
          xAxisMin: -1000,
          xAxisMax: 1000,
          yAxisMin: 0,
          yAxisMax: 2000,
          miniChart: { panInMiniChart: false, navWindowScale: 0.05 },
        };
        viewHandler.setDataView = sandbox.stub();
        panObject.events.areaPanend(e);
        expect(panObject.events.started).to.equal(false);
      });
    });

    describe('areaPancancel', () => {
      it('should set events.started to false', () => {
        e = { preventDefault: sandbox.stub() };
        panObject.events.areaPancancel(e);
        expect(panObject.events.started).to.equal(false);
      });
    });
  });
});
