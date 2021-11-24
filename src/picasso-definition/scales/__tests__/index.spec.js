import createScales from '../index';
import * as KEYS from '../../../constants/keys';
import * as color from '../../../utils/color/adjust-color';
import * as getDock from '../../../utils/dock-helper';

describe('scales', () => {
  let create;
  let disclaimerModel;
  let tickModel;
  let viewState;
  let colorService;
  let layoutService;
  let chartModel;
  let dataHandler;
  let models;
  let theme;
  let rtl;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'default').value({
      FIELDS: { X: 'qDimensionInfo/0', Y: 'qDimensionInfo/1', SIZE: 'qMeasureInfo/0', BIN_X: 'binX', BIN_Y: 'binY' },
      SCALE: { HEAT_MAP_COLOR: 'heatMapColor', BIN_X: 'binX', BIN_Y: 'binY' },
      DATA: { BIN: 'bin' },
    });
    sandbox.stub(color, 'makeBrighter').returns('brighter-red');
    sandbox.stub(color, 'makeDarker').returns('darker-red');
    sandbox.stub(getDock, 'default');
    getDock.default.returns('right');
    disclaimerModel = {
      query: {
        getHasSuppressingDisclaimer: sinon.stub().returns(false),
      },
    };
    tickModel = {
      query: {
        getXTicks: sinon.stub().returns(['x1', 'x2']),
        getYTicks: sinon.stub().returns(['y1', 'y2', 'y3']),
      },
    };
    viewState = {
      get: sinon.stub().withArgs('dataView').returns({
        xAxisMin: 0,
        xAxisMax: 10,
        yAxisMin: 20,
        yAxisMax: 30,
      }),
    };
    colorService = {
      getScales: sinon.stub().returns({ s1: 's1', s2: 's2' }),
    };
    layoutService = {
      getLayoutValue: sandbox.stub(),
    };
    dataHandler = { maxBinDensity: 200 };
    chartModel = {
      query: {
        getDataHandler: () => dataHandler,
      },
    };
    models = { tickModel, colorService, disclaimerModel, layoutService, chartModel };
    const options = { direction: 'rtl' };
    theme = { getStyle: sandbox.stub().returns('red') };
    rtl = false;
    create = () => createScales({ models, viewState, options, theme, rtl });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should contain correct scales', () => {
    const scales = create();
    expect(Object.keys(scales)).to.deep.equal(['x', 'y', 'binX', 'binY', 's1', 's2', 'heatMapColor']);
  });

  it('scales should have proper properties', () => {
    const { x, y } = create();
    expect(typeof x.ticks.values === 'function').to.equal(true);
    expect(typeof x.min === 'function').to.equal(true);
    expect(typeof x.max === 'function').to.equal(true);
    expect(typeof y.ticks.values === 'function').to.equal(true);
    expect(typeof y.min === 'function').to.equal(true);
    expect(typeof y.max === 'function').to.equal(true);
  });

  it('x.min should return correct ticks', () => {
    const { x } = create();
    const res = x.min();
    expect(res).to.equal(0);
  });

  it('x.max should return correct ticks', () => {
    const { x } = create();
    const res = x.max();
    expect(res).to.equal(10);
  });

  it('x.ticks.values should return correct ticks', () => {
    const { x } = create();
    const ticks = x.ticks.values();
    expect(ticks).to.deep.equal(['x1', 'x2']);
  });

  it('y.ticks.values should return correct ticks', () => {
    const { y } = create();
    const ticks = y.ticks.values();
    expect(ticks).to.deep.equal(['y1', 'y2', 'y3']);
  });

  it('y.min should return correct ticks', () => {
    const { y } = create();
    const res = y.min();
    expect(res).to.equal(20);
  });

  it('y.max should return correct ticks', () => {
    const { y } = create();
    const res = y.max();
    expect(res).to.equal(30);
  });

  describe('bin data scale', () => {
    it('scales should have proper properties', () => {
      const { binX, binY } = create();
      expect(typeof binX.ticks.values === 'function').to.equal(true);
      expect(typeof binX.min === 'function').to.equal(true);
      expect(typeof binX.max === 'function').to.equal(true);
      expect(typeof binY.ticks.values === 'function').to.equal(true);
      expect(typeof binY.min === 'function').to.equal(true);
      expect(typeof binY.max === 'function').to.equal(true);
    });

    it('binX.data should correct bin data', () => {
      const { binX } = create();
      expect(binX.data.extract.source).to.equal('bin');
      expect(binX.data.extract.field).to.equal('binX');
    });

    it('binX.min should return correct ticks', () => {
      const { binX } = create();
      const res = binX.min();
      expect(res).to.equal(0);
    });

    it('binX.max should return correct ticks', () => {
      const { binX } = create();
      const res = binX.max();
      expect(res).to.equal(10);
    });

    it('binX.ticks.values should return correct ticks', () => {
      const { binX } = create();
      const ticks = binX.ticks.values();
      expect(ticks).to.deep.equal(['x1', 'x2']);
    });

    it('binY.data should correct bin data', () => {
      const { binY } = create();
      expect(binY.data.extract.source).to.equal('bin');
      expect(binY.data.extract.field).to.equal('binY');
    });

    it('binY.min should return correct ticks', () => {
      const { binY } = create();
      const res = binY.min();
      expect(res).to.equal(20);
    });

    it('binY.max should return correct ticks', () => {
      const { binY } = create();
      const res = binY.max();
      expect(res).to.equal(30);
    });

    it('binY.ticks.values should return correct ticks', () => {
      const { binY } = create();
      const ticks = binY.ticks.values();
      expect(ticks).to.deep.equal(['y1', 'y2', 'y3']);
    });
  });

  describe('heatMapColor scale', () => {
    it('should return correct type', () => {
      const { heatMapColor } = create();
      expect(heatMapColor.type).to.equal('sequential-color');
    });

    it('should return correct min', () => {
      const { heatMapColor } = create();
      expect(heatMapColor.min).to.equal(0);
    });

    it('should return correct max', () => {
      const { heatMapColor } = create();
      const res = heatMapColor.max();
      expect(res).to.equal(200);
    });

    describe('invert', () => {
      it('should return true when is not rtl and not dock on top or bottom', () => {
        const { heatMapColor } = create();
        expect(heatMapColor.invert).to.be.true;
      });

      it('should return true when is rtl ', () => {
        rtl = true;
        const { heatMapColor } = create();
        expect(heatMapColor.invert).to.be.true;
      });

      it('should return false when is not rtl and dock on top', () => {
        rtl = false;
        getDock.default.returns('top');
        const { heatMapColor } = create();
        expect(heatMapColor.invert).to.be.false;
      });

      it('should return false when is not rtl and dock on bottom', () => {
        rtl = false;
        getDock.default.returns('bottom');
        const { heatMapColor } = create();
        expect(heatMapColor.invert).to.be.false;
      });
    });

    describe('range', () => {
      it('should return correct color range', () => {
        const { heatMapColor } = create();
        expect(heatMapColor.range[0]).to.equal('darker-red');
        expect(heatMapColor.range[1]).to.equal('brighter-red');
      });

      it('should return correct color range when is not rtl and dock on top', () => {
        rtl = false;
        getDock.default.returns('top');
        const { heatMapColor } = create();
        expect(heatMapColor.range[0]).to.equal('brighter-red');
        expect(heatMapColor.range[1]).to.equal('darker-red');
      });

      it('should return correct color range when is not rtl and dock on bottom', () => {
        rtl = false;
        getDock.default.returns('bottom');
        const { heatMapColor } = create();
        expect(heatMapColor.range[0]).to.equal('brighter-red');
        expect(heatMapColor.range[1]).to.equal('darker-red');
      });
    });
  });
});
