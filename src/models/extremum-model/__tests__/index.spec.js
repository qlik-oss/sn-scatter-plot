import createExtremumModel from '..';

describe('createExtremumModel', () => {
  describe('getExtrema', () => {
    let sandbox;
    let create;
    let layoutModel;
    let viewStateOptions;
    let extremumModel;
    let result;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      layoutModel = { getHyperCubeValue: sandbox.stub(), getLayoutValue: sandbox.stub(), meta: { isSnapshot: false } };

      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(0.9);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(0.1);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0.9);
      layoutModel.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });
      layoutModel.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });

      create = () => createExtremumModel(layoutModel, viewStateOptions);
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should return correct extrema when the source is snapshot, and the snapshot has number data', () => {
      layoutModel.meta.isSnapshot = true;
      layoutModel.getLayoutValue.withArgs('snapshotData.content.chartData', {}).returns({
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
      layoutModel.meta.isSnapshot = true;
      layoutModel.getLayoutValue.withArgs('snapshotData.content.chartData', {}).returns({
        xAxisMin: 0,
        xAxisMax: '600',
        yAxisMin: '-100',
        yAxisMax: 500,
      });

      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(600);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-300);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0.9);
      layoutModel.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: true, minMax: 'min', min: 0.2, max: 0.8 });
      layoutModel.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: true, minMax: 'min', min: 0.2, max: 0.8 });

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
      layoutModel.meta.isSnapshot = false;
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
      layoutModel.meta.isSnapshot = false;
      viewStateOptions = {
        xAxisMin: '1',
        xAxisMax: 2,
        yAxisMin: 3,
        yAxisMax: '4',
      };

      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(601);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-321);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(4);
      layoutModel.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });
      layoutModel.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });

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
      layoutModel.meta.isSnapshot = false;
      viewStateOptions = {
        xAxisMin: '1',
        xAxisMax: '2',
        yAxisMin: 3,
        yAxisMax: '4',
      };

      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(601);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-321);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(4);
      layoutModel.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: false, minMax: 'max', min: 0.2, max: 0.8 });
      layoutModel.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });

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

    it('should return correct extrema when the source is not defined, both X and Y have autoMinMax on', () => {
      layoutModel.meta.isSnapshot = false;
      viewStateOptions = {};

      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(600.1);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-300);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0);
      layoutModel.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: true, minMax: 'max', min: 0.2, max: 0.8 });
      layoutModel.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: true, minMax: 'min', min: 0.2, max: 0.8 });

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
      layoutModel.meta.isSnapshot = true;
      layoutModel.getLayoutValue.withArgs('snapshotData.content.chartData', {}).returns({});

      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.2);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(600.2);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-321);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(1.2);
      layoutModel.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: true, minMax: 'max', min: 0.2, max: 0.8 });
      layoutModel.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });

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
      layoutModel.meta.isSnapshot = true;
      layoutModel.getLayoutValue.withArgs('snapshotData.content.chartData', {}).returns({});

      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.2);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(601);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-300);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0);
      layoutModel.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: false, minMax: 'max', min: 0.2, max: 0.8 });
      layoutModel.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: true, minMax: 'min', min: 0.2, max: 0.8 });

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
      layoutModel.meta.isSnapshot = true;
      layoutModel.getLayoutValue.withArgs('snapshotData.content.chartData', {}).returns({});

      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(601);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-321);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0.9);
      layoutModel.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: false, minMax: 'max', min: 0.2, max: 0.8 });
      layoutModel.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: false, minMax: 'minMax', min: 0.2, max: 0.8 });

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
  });

  describe('updateExtrema', () => {
    let sandbox;
    let create;
    let layoutModel;
    let viewStateOptions;
    let extremumModel;
    let result;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      layoutModel = { getHyperCubeValue: sandbox.stub(), getLayoutValue: sandbox.stub(), meta: { isSnapshot: false } };

      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(0.9);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(0.1);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0.9);
      layoutModel.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });
      layoutModel.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: true, minMax: 'max', min: 0.2, max: 0.8 });

      create = () => createExtremumModel(layoutModel, viewStateOptions);
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should update extrema', () => {
      const newZoom = {
        xAxisMin: 1,
        xAxisMax: 8,
        yAxisMin: 2,
        yAxisMax: 8,
        x: 0.05,
        y: 0.06,
      };
      layoutModel.meta.isSnapshot = false;
      viewStateOptions = {};
      extremumModel = create();
      extremumModel.query.updateExtrema(newZoom);
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
  });
});
