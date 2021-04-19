import createExtremumModel from '..';

describe('createExtremumModel', () => {
  describe('getExtrema', () => {
    let sandbox;
    let create;
    let layoutModel;
    let viewStateOptions;

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
      const result = create().query.getExtrema();
      expect(result).to.deep.equal({
        xAxisMin: 0,
        xAxisMax: 600,
        yAxisMin: -100,
        yAxisMax: 500,
        xExplicitType: 'minMax',
        yExplicitType: 'minMax',
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
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(601);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-321);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0.9);
      layoutModel.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: true, minMax: 'min', min: 0.2, max: 0.8 });
      layoutModel.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: true, minMax: 'min', min: 0.2, max: 0.8 });

      const result = create().query.getExtrema();
      expect(result).to.deep.equal({
        xAxisMin: 0,
        xAxisMax: 601,
        yAxisMin: -321,
        yAxisMax: 500,
        xExplicitType: 'min',
        yExplicitType: 'max',
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
      const result = create().query.getExtrema();
      expect(result).to.deep.equal({
        xAxisMin: 1,
        xAxisMax: 2,
        yAxisMin: 3,
        yAxisMax: 4,
        xExplicitType: 'minMax',
        yExplicitType: 'minMax',
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
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0.9);
      layoutModel.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });
      layoutModel.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });

      const result = create().query.getExtrema();
      expect(result).to.deep.equal({
        xAxisMin: 0.2,
        xAxisMax: 2,
        yAxisMin: 3,
        yAxisMax: 0.9,
        xExplicitType: 'minMax',
        yExplicitType: 'min',
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
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0.9);
      layoutModel.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: false, minMax: 'max', min: 0.2, max: 0.8 });
      layoutModel.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });

      const result = create().query.getExtrema();
      expect(result).to.deep.equal({
        xAxisMin: 0.1,
        xAxisMax: 0.8,
        yAxisMin: 3,
        yAxisMax: 0.9,
        xExplicitType: 'max',
        yExplicitType: 'min',
      });
    });

    it('should return correct extrema when the source is not defined, both X and Y have autoMinMax on', () => {
      layoutModel.meta.isSnapshot = false;
      viewStateOptions = {};

      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(601);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-321);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0.9);
      layoutModel.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: true, minMax: 'max', min: 0.2, max: 0.8 });
      layoutModel.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: true, minMax: 'min', min: 0.2, max: 0.8 });

      const result = create().query.getExtrema();
      expect(result).to.deep.equal({
        xAxisMin: 0.1,
        xAxisMax: 601,
        yAxisMin: -321,
        yAxisMax: 0.9,
        xExplicitType: 'none',
        yExplicitType: 'none',
      });
    });

    it('should return correct extrema when the source is not defined, only X has autoMinMax on', () => {
      layoutModel.meta.isSnapshot = true;
      layoutModel.getLayoutValue.withArgs('snapshotData.content.chartData', {}).returns({});

      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(601);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-321);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0.9);
      layoutModel.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: true, minMax: 'max', min: 0.2, max: 0.8 });
      layoutModel.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: false, minMax: 'min', min: 0.2, max: 0.8 });

      const result = create().query.getExtrema();
      expect(result).to.deep.equal({
        xAxisMin: 0.1,
        xAxisMax: 601,
        yAxisMin: 0.2,
        yAxisMax: 0.9,
        xExplicitType: 'none',
        yExplicitType: 'min',
      });
    });

    it('should return correct extrema when the source is not defined, only Y has autoMinMax on', () => {
      layoutModel.meta.isSnapshot = true;
      layoutModel.getLayoutValue.withArgs('snapshotData.content.chartData', {}).returns({});

      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMin', 0).returns(0.1);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.0.qMax', 1).returns(601);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMin', 0).returns(-321);
      layoutModel.getHyperCubeValue.withArgs('qMeasureInfo.1.qMax', 1).returns(0.9);
      layoutModel.getLayoutValue.withArgs('xAxis').returns({ autoMinMax: false, minMax: 'max', min: 0.2, max: 0.8 });
      layoutModel.getLayoutValue.withArgs('yAxis').returns({ autoMinMax: true, minMax: 'min', min: 0.2, max: 0.8 });

      const result = create().query.getExtrema();
      expect(result).to.deep.equal({
        xAxisMin: 0.1,
        xAxisMax: 0.8,
        yAxisMin: -321,
        yAxisMax: 0.9,
        xExplicitType: 'max',
        yExplicitType: 'none',
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

      const result = create().query.getExtrema();
      expect(result).to.deep.equal({
        xAxisMin: 0.1,
        xAxisMax: 0.8,
        yAxisMin: 0.2,
        yAxisMax: 0.8,
        xExplicitType: 'max',
        yExplicitType: 'minMax',
      });
    });
  });

  describe('setExtrema', () => {
    let sandbox;
    let create;
    let layoutModel;
    let viewStateOptions;

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
      const model = create();
      model.query.setExtrema(newZoom);
      const result = model.query.getExtrema();
      expect(result).to.deep.equal({
        xAxisMin: 1,
        xAxisMax: 8,
        yAxisMin: 2,
        yAxisMax: 8,
        xExplicitType: 'min',
        yExplicitType: 'none',
      });
    });
  });
});
