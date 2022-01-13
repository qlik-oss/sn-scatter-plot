import createOutOfBounds from '../index';
import * as createSizeScale from '../../../scales/size';
import * as KEYS from '../../../../constants/keys';

describe('out of bounds', () => {
  let sandbox;
  let colorService;
  let chartModel;
  let layoutService;
  let create;
  let viewHandler;
  let context;
  let chart;

  const xAxisMin = 55;
  const xAxisMax = 95;
  const yAxisMin = 55;
  const yAxisMax = 70;
  const dataView = {
    xAxisMax,
    xAxisMin,
    yAxisMin,
    yAxisMax,
  };

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    colorService = {
      getColor: sandbox.stub(),
    };
    viewHandler = {
      getDataView: () => dataView,
    };
    chartModel = {
      query: {
        getViewHandler: () => viewHandler,
      },
    };
    layoutService = {
      meta: {
        isBigData: false,
      },
    };
    chart = { component: sandbox.stub().returns({ rect: { width: 500, height: 500 } }) };
    sandbox.stub(createSizeScale, 'default');
    createSizeScale.default.returns(() => '10px');
    sandbox.stub(KEYS, 'default').get(() => ({
      COMPONENT: {
        OUT_OF_BOUNDS: 'oobComponentKey',
      },
      COLLECTION: {
        MAIN: 'mainCollectionKey',
      },
      SCALE: {
        X: 'x',
        Y: 'y',
      },
    }));
    context = { rtl: false };
    const models = { colorService, chartModel, layoutService };
    create = () => createOutOfBounds({ models, context, chart });
  });

  afterEach(() => sandbox.restore());

  describe('object definition', () => {
    it('should return an object definition', () => {
      expect(create()).to.be.a('object');
    });

    it('should return undefined if isBigData is true', () => {
      layoutService.meta.isBigData = true;
      expect(create()).to.equal(undefined);
    });

    it('should have correct type', () => {
      expect(create().type).to.equal('point');
    });

    it('should have correct properties', () => {
      expect(create()).to.have.all.keys(['key', 'type', 'data', 'settings', 'preferredSize', 'beforeRender']);
    });

    it('should have correct key', () => {
      expect(create().key).to.equal('oobComponentKey');
    });

    it('should have correct data', () => {
      expect(create().data.collection).to.equal('mainCollectionKey');
    });

    it('should filter oob values', () => {
      const oob = create();
      const size = { width: 400, height: 200 };
      oob.beforeRender({ size });

      const d = {
        x: { value: 56 },
        y: { value: 70 },
      };
      expect(oob.data.filter(d)).to.equal(false);

      // x < xAxisMin
      d.x.value = 54.4;
      d.y.value = 60;
      expect(oob.data.filter(d)).to.equal(true);

      // x > xAxisMax
      d.x.value = 95.6;
      d.y.value = 60;
      expect(oob.data.filter(d)).to.equal(true);

      // y < yAxisMin
      d.x.value = 60;
      d.y.value = 54.6;
      expect(oob.data.filter(d)).to.equal(true);

      // y > yAxisMax
      d.x.value = 60;
      d.y.value = 70.4;
      expect(oob.data.filter(d)).to.equal(true);

      // x < xAxisMin and y > XAxisMax
      d.x.value = 54.4;
      d.y.value = 70.4;
      expect(oob.data.filter(d)).to.equal(true);
    });
  });

  describe('settings', () => {
    it('should have correct properties', () => {
      expect(create().settings).to.have.all.keys(['x', 'y', 'size', 'fill']);
    });

    describe('x', () => {
      describe('fn', () => {
        const datum = { x: { value: undefined } };
        let oob;
        it('should return correct x oob position, when datum x value is less than xAxisMin, rtl false', () => {
          datum.x.value = 54;
          context.rtl = false;
          oob = create();
          oob.data.filter({
            x: { value: undefined },
            y: { value: undefined },
          });
          expect(oob.settings.x.fn({ datum })).to.equal(-0.005);
        });

        it('should return correct x oob position, when datum x value is less than xAxisMin, rtl true', () => {
          datum.x.value = 54;
          context.rtl = true;
          oob = create();
          oob.data.filter({
            x: { value: undefined },
            y: { value: undefined },
          });
          expect(oob.settings.x.fn({ datum })).to.equal(1.005);
        });

        it('should return correct x oob position, when datum x value is larger than xAxisMax, rtl false', () => {
          datum.x.value = 100;
          context.rtl = false;
          oob = create();
          oob.data.filter({
            x: { value: undefined },
            y: { value: undefined },
          });
          expect(oob.settings.x.fn({ datum })).to.equal(1.005);
        });

        it('should return correct x oob position, when datum x value is larger than xAxisMax, rtl true', () => {
          datum.x.value = 100;
          context.rtl = true;
          oob = create();
          oob.data.filter({
            x: { value: undefined },
            y: { value: undefined },
          });
          expect(oob.settings.x.fn({ datum })).to.equal(-0.005);
        });

        it('should return correct x oob position, when datum x value is between xAxisMin and xAxisMax, rtl false', () => {
          datum.x.value = 65;
          context.rtl = false;
          oob = create();
          oob.data.filter({
            x: { value: undefined },
            y: { value: undefined },
          });
          expect(oob.settings.x.fn({ datum })).to.equal(0.25);
        });

        it('should return correct x oob position, when datum x value is between xAxisMin and xAxisMax, rtl true', () => {
          datum.x.value = 65;
          context.rtl = true;
          oob = create();
          oob.data.filter({
            x: { value: undefined },
            y: { value: undefined },
          });
          expect(oob.settings.x.fn({ datum })).to.equal(0.75);
        });
      });
    });

    describe('y', () => {
      describe('fn', () => {
        const datum = { y: { value: undefined } };
        let oob;
        it('should return correct y oob position, when datum y value is less than yAxisMin', () => {
          datum.y.value = 54;
          oob = create();
          oob.data.filter({
            x: { value: undefined },
            y: { value: undefined },
          });
          expect(oob.settings.y.fn({ datum })).to.equal(1.005);
        });

        it('should return correct y oob position, when datum y value is larger than yAxisMax', () => {
          datum.y.value = 71;
          oob = create();
          oob.data.filter({
            x: { value: undefined },
            y: { value: undefined },
          });
          expect(oob.settings.y.fn({ datum })).to.equal(-0.005);
        });

        it('should return correct y oob position, when datum y value is between yAxisMin and yAxisMax', () => {
          datum.y.value = 55 + (70 - 55) * 0.25;
          oob = create();
          oob.data.filter({
            x: { value: undefined },
            y: { value: undefined },
          });
          expect(oob.settings.y.fn({ datum })).to.equal(0.75);
        });
      });
    });

    describe('y', () => {
      describe('fn', () => {
        it('should return correct value', () => {
          expect(create().settings.size.fn()).to.equal('6px');
        });
      });
    });
  });

  describe('beforeRender', () => {
    it('should be set with a function', () => {
      expect(create().beforeRender).to.be.a('function');
    });
  });

  describe('dataView', () => {
    it('should filter correct values when dataView changes', () => {
      const oob = create();
      const size = { width: 400, height: 200 };
      oob.beforeRender({ size });
      const d = {
        x: { value: 56 },
        y: { value: 70 },
      };
      expect(oob.data.filter(d)).to.equal(false);
      dataView.xAxisMax = 70;
      dataView.xAxisMin = 60;
      dataView.yAxisMin = 80;
      dataView.yAxisMax = 95;
      expect(oob.data.filter(d)).to.equal(true);
    });
  });
});
