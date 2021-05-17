import createExtremumModel from '..';

describe('createExtremumModel', () => {
  describe('getExtrema', () => {
    let sandbox;
    let create;
    let layoutService;
    let viewStateOptions;
    let extremumModel;
    let result;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      layoutService = {
        getHyperCubeValue: sandbox.stub(),
        getLayoutValue: sandbox.stub(),
        meta: { isSnapshot: false },
      };

      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(0.9);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(0.1);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0.9);
      layoutService.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });
      layoutService.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });

      create = () => createExtremumModel(layoutService, viewStateOptions);
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should return correct extrema when the source is snapshot, and the snapshot has number data', () => {
      layoutService.meta.isSnapshot = true;
      layoutService.getLayoutValue.withArgs('snapshotData.content.chartData', {}).returns({
        xAxisMin: 0,
        xAxisMax: 600,
        yAxisMin: -100,
        yAxisMax: 500,
      });
      extremumModel = create();
      result = { ...extremumModel.query.getXExtrema(), ...extremumModel.query.getYExtrema() };
      expect(result).to.deep.equal({
        xAxisMin: 0,
        xAxisMax: 600,
        yAxisMin: -100,
        yAxisMax: 500,
        xAxisExplicitType: 'minMax',
        yAxisExplicitType: 'minMax',
      });
    });

    it('should return correct extrema when the source is snapshot, but some of snapshot data are not number', () => {
      layoutService.meta.isSnapshot = true;
      layoutService.getLayoutValue.withArgs('snapshotData.content.chartData', {}).returns({
        xAxisMin: 0,
        xAxisMax: '600',
        yAxisMin: '-100',
        yAxisMax: 500,
      });

      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(600);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-300);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0.9);
      layoutService.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: true, minMax: 'min', min: 0.2, max: 0.8 });
      layoutService.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: true, minMax: 'min', min: 0.2, max: 0.8 });

      extremumModel = create();
      result = { ...extremumModel.query.getXExtrema(), ...extremumModel.query.getYExtrema() };
      expect(result).to.deep.equal({
        xAxisMin: 0,
        xAxisMax: 660,
        yAxisMin: -380,
        yAxisMax: 500,
        xAxisExplicitType: 'min',
        yAxisExplicitType: 'max',
      });
    });

    it('should return correct extrema when the source is viewStateOptions, and the viewStateOptions has number data', () => {
      layoutService.meta.isSnapshot = false;
      viewStateOptions = {
        xAxisMin: 1,
        xAxisMax: 2,
        yAxisMin: 3,
        yAxisMax: 4,
      };
      extremumModel = create();
      result = { ...extremumModel.query.getXExtrema(), ...extremumModel.query.getYExtrema() };
      expect(result).to.deep.equal({
        xAxisMin: 1,
        xAxisMax: 2,
        yAxisMin: 3,
        yAxisMax: 4,
        xAxisExplicitType: 'minMax',
        yAxisExplicitType: 'minMax',
      });
    });

    it('should return correct extrema when the source is viewStateOptions, but some of viewStateOptions data are not number, test 1', () => {
      layoutService.meta.isSnapshot = false;
      viewStateOptions = {
        xAxisMin: '1',
        xAxisMax: 2,
        yAxisMin: 3,
        yAxisMax: '4',
      };

      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(601);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-321);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(4);
      layoutService.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });
      layoutService.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });

      extremumModel = create();
      result = { ...extremumModel.query.getXExtrema(), ...extremumModel.query.getYExtrema() };
      expect(result).to.deep.equal({
        xAxisMin: 0.2,
        xAxisMax: 2,
        yAxisMin: 3,
        yAxisMax: 4.1,
        xAxisExplicitType: 'minMax',
        yAxisExplicitType: 'min',
      });
    });

    it('should return correct extrema when the source is viewStateOptions, but some of viewStateOptions data are not number, test 2', () => {
      layoutService.meta.isSnapshot = false;
      viewStateOptions = {
        xAxisMin: '1',
        xAxisMax: '2',
        yAxisMin: 3,
        yAxisMax: '4',
      };

      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(601);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-321);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(4);
      layoutService.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: false, minMax: 'max', min: 0.2, max: 0.8 });
      layoutService.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });

      extremumModel = create();
      result = { ...extremumModel.query.getXExtrema(), ...extremumModel.query.getYExtrema() };
      expect(result).to.deep.equal({
        xAxisMin: 0.03,
        xAxisMax: 0.8,
        yAxisMin: 3,
        yAxisMax: 4.1,
        xAxisExplicitType: 'max',
        yAxisExplicitType: 'min',
      });
    });

    it('should return correct extrema when the source is viewStateOptions, but some of viewStateOptions data are not number, test 3', () => {
      layoutService.meta.isSnapshot = false;
      viewStateOptions = {
        xAxisMin: 0,
        xAxisMax: '2',
        yAxisMin: 3,
        yAxisMax: '4',
      };

      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(601);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-321);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(4);
      layoutService.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: false, minMax: 'max', min: 0.2, max: 0.8 });
      layoutService.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });

      extremumModel = create();
      result = { ...extremumModel.query.getXExtrema(), ...extremumModel.query.getYExtrema() };
      expect(result).to.deep.equal({
        xAxisMin: 0,
        xAxisMax: 0.8,
        yAxisMin: 3,
        yAxisMax: 4.1,
        xAxisExplicitType: 'minMax',
        yAxisExplicitType: 'min',
      });
    });

    it('should return correct extrema when the source is not defined, both X and Y have autoMinMax on', () => {
      layoutService.meta.isSnapshot = false;
      viewStateOptions = {};

      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(600.1);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-300);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0);
      layoutService.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: true, minMax: 'max', min: 0.2, max: 0.8 });
      layoutService.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: true, minMax: 'min', min: 0.2, max: 0.8 });

      extremumModel = create();
      result = { ...extremumModel.query.getXExtrema(), ...extremumModel.query.getYExtrema() };
      expect(result).to.deep.equal({
        xAxisMin: -59.9,
        xAxisMax: 660.1,
        yAxisMin: -330,
        yAxisMax: 30,
        xAxisExplicitType: 'none',
        yAxisExplicitType: 'none',
      });
    });

    it('should return correct extrema when the source is not defined, only X has autoMinMax on', () => {
      layoutService.meta.isSnapshot = true;
      layoutService.getLayoutValue.withArgs('snapshotData.content.chartData', {}).returns({});

      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.2);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(600.2);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-321);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(1.2);
      layoutService.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: true, minMax: 'max', min: 0.2, max: 0.8 });
      layoutService.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });

      extremumModel = create();
      result = { ...extremumModel.query.getXExtrema(), ...extremumModel.query.getYExtrema() };
      expect(result).to.deep.equal({
        xAxisMin: -59.8,
        xAxisMax: 660.2,
        yAxisMin: 0.2,
        yAxisMax: 1.3,
        xAxisExplicitType: 'none',
        yAxisExplicitType: 'min',
      });
    });

    it('should return correct extrema when the source is not defined, only Y has autoMinMax on', () => {
      layoutService.meta.isSnapshot = true;
      layoutService.getLayoutValue.withArgs('snapshotData.content.chartData', {}).returns({});

      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.2);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(601);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-300);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0);
      layoutService.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: false, minMax: 'max', min: 0.2, max: 0.8 });
      layoutService.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: true, minMax: 'min', min: 0.2, max: 0.8 });

      extremumModel = create();
      result = { ...extremumModel.query.getXExtrema(), ...extremumModel.query.getYExtrema() };
      expect(result).to.deep.equal({
        xAxisMin: 0.14,
        xAxisMax: 0.8,
        yAxisMin: -330,
        yAxisMax: 30,
        xAxisExplicitType: 'max',
        yAxisExplicitType: 'none',
      });
    });

    it('should return correct extrema when the source is not defined, both X and Y have autoMinMax off', () => {
      layoutService.meta.isSnapshot = true;
      layoutService.getLayoutValue.withArgs('snapshotData.content.chartData', {}).returns({});

      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(601);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-321);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0.9);
      layoutService.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: false, minMax: 'max', min: 0.2, max: 0.8 });
      layoutService.getLayoutValue
        .withArgs('yAxis')
        .returns({ autoMinMax: false, minMax: 'minMax', min: 0.2, max: 0.8 });

      extremumModel = create();
      result = { ...extremumModel.query.getXExtrema(), ...extremumModel.query.getYExtrema() };
      expect(result).to.deep.equal({
        xAxisMin: 0.03,
        xAxisMax: 0.8,
        yAxisMin: 0.2,
        yAxisMax: 0.8,
        xAxisExplicitType: 'max',
        yAxisExplicitType: 'minMax',
      });
    });

    it('should return correct extrema when xAxisMin is equal xAxisMax', () => {
      layoutService.meta.isSnapshot = true;
      layoutService.getLayoutValue.withArgs('snapshotData.content.chartData', {}).returns({});

      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(601);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-321);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0.9);
      layoutService.getLayoutValue
        .withArgs('xAxis')
        .returns({ autoMinMax: false, minMax: 'minMax', min: 0.2, max: 0.2 });
      layoutService.getLayoutValue
        .withArgs('yAxis')
        .returns({ autoMinMax: false, minMax: 'minMax', min: 0.2, max: 0.8 });

      extremumModel = create();
      result = { ...extremumModel.query.getXExtrema(), ...extremumModel.query.getYExtrema() };
      expect(result).to.deep.equal({
        xAxisMin: 0.2,
        xAxisMax: 0.2,
        yAxisMin: 0.2,
        yAxisMax: 0.8,
        xAxisExplicitType: 'minMax',
        yAxisExplicitType: 'minMax',
      });
    });
  });

  describe('updateExtrema', () => {
    let sandbox;
    let create;
    let layoutService;
    let viewStateOptions;
    let extremumModel;
    let result;
    let isHomeState;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      layoutService = {
        getHyperCubeValue: sandbox.stub(),
        getLayoutValue: sandbox.stub(),
        meta: { isSnapshot: false },
      };

      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(0.9);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(0.1);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0.9);
      layoutService.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });
      layoutService.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: true, minMax: 'max', min: 0.2, max: 0.8 });

      create = () => createExtremumModel(layoutService, viewStateOptions);
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should update extrema when isHomeState is false', () => {
      const dataView = {
        xAxisMin: 1,
        xAxisMax: 8,
        yAxisMin: 2,
        yAxisMax: 8,
      };
      layoutService.meta.isSnapshot = false;
      viewStateOptions = {};
      extremumModel = create();
      isHomeState = false;
      extremumModel.command.updateExtrema(dataView, isHomeState);
      result = { ...extremumModel.query.getXExtrema(), ...extremumModel.query.getYExtrema() };
      expect(result).to.deep.equal({
        xAxisMin: 1,
        xAxisMax: 8,
        yAxisMin: 2,
        yAxisMax: 8,
        xAxisExplicitType: 'minMax',
        yAxisExplicitType: 'minMax',
      });
    });

    it('should update extrema when isHomeState is true', () => {
      const dataView = {
        xAxisMin: 1,
        xAxisMax: 8,
        yAxisMin: 2,
        yAxisMax: 8,
      };
      layoutService.meta.isSnapshot = false;
      viewStateOptions = {};
      extremumModel = create();
      const oldXAxisExplicitType = extremumModel.query.getXExtrema().xAxisExplicitType;
      const oldYAxisExplicitType = extremumModel.query.getYExtrema().yAxisExplicitType;
      isHomeState = true;
      extremumModel.command.updateExtrema(dataView, isHomeState);
      result = { ...extremumModel.query.getXExtrema(), ...extremumModel.query.getYExtrema() };
      expect(result).to.deep.equal({
        xAxisMin: 1,
        xAxisMax: 8,
        yAxisMin: 2,
        yAxisMax: 8,
        xAxisExplicitType: oldXAxisExplicitType,
        yAxisExplicitType: oldYAxisExplicitType,
      });
    });
  });

  describe('resetExtrema', () => {
    let sandbox;
    let create;
    let layoutService;
    let viewStateOptions;
    let extremumModel;
    let result;
    let isHomeState;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      layoutService = {
        getHyperCubeValue: sandbox.stub(),
        getLayoutValue: sandbox.stub(),
        meta: { isSnapshot: false },
      };

      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(0.9);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(0.1);
      layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0.9);
      layoutService.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });
      layoutService.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: true, minMax: 'max', min: 0.2, max: 0.8 });

      create = () => createExtremumModel(layoutService, viewStateOptions);
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should reset extrema correctly', () => {
      const dataView = {
        xAxisMin: 0.001,
        xAxisMax: 0.008,
        yAxisMin: 0.002,
        yAxisMax: 0.008,
      };
      layoutService.meta.isSnapshot = false;
      viewStateOptions = {};
      extremumModel = create();
      const {
        xAxisMin: oldXMin,
        xAxisMax: oldXMax,
        xAxisExplicitType: oldXExplicit,
      } = extremumModel.query.getXExtrema();
      const {
        yAxisMin: oldYMin,
        yAxisMax: oldYMax,
        yAxisExplicitType: oldYExplicit,
      } = extremumModel.query.getYExtrema();
      isHomeState = false;
      extremumModel.command.updateExtrema(dataView, isHomeState);
      extremumModel.command.resetExtrema();
      result = { ...extremumModel.query.getXExtrema(), ...extremumModel.query.getYExtrema() };
      expect(result).to.deep.equal({
        xAxisMin: oldXMin,
        xAxisMax: oldXMax,
        yAxisMin: oldYMin,
        yAxisMax: oldYMax,
        xAxisExplicitType: oldXExplicit,
        yAxisExplicitType: oldYExplicit,
      });
    });
  });
});
