import extend from 'extend';
import zoom from '../zoom';
import * as eventUtils from '../../event-utils';

describe('zoom', () => {
  let sandbox;
  let create;
  let e;
  let chart;
  let pointComponent;
  let viewHandler;
  let dataView;
  let pinchZoomFactor;
  let chartModel;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    viewHandler = {
      getMeta: sandbox.stub(),
      getDataView: sandbox.stub(),
      setMeta: sandbox.stub(),
      throttledFetchData: sandbox.stub().callsFake(() => sandbox.stub()),
    };
    viewHandler.getMeta.returns({ scale: 1, maxScale: 2 ** 4.1, minScale: 2 ** -9.1 });
    chartModel = {};
    sandbox.stub(eventUtils, 'eventToComponentPoint');
    pointComponent = { rect: { computedPhysical: { width: 100, height: 100 } } };
    create = () => zoom({ e, chart, pointComponent, viewHandler, pinchZoomFactor, chartModel });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should update correct dataView for viewHandler, when we zoom out', () => {
    e = { deltaY: 0.1 };
    eventUtils.eventToComponentPoint.returns({ x: 50, y: 50 });
    dataView = { xAxisMin: -1000, xAxisMax: 1000, yAxisMin: 0, yAxisMax: 2000 };
    viewHandler.getDataView.returns(dataView);
    viewHandler.setDataView = (newDataView) => {
      extend(true, dataView, newDataView);
    };
    create();
    expect(dataView).to.deep.equal({
      xAxisMin: -1000 * Math.sqrt(2),
      xAxisMax: 1000 * Math.sqrt(2),
      yAxisMin: 1000 - 1000 * Math.sqrt(2),
      yAxisMax: 1000 + 1000 * Math.sqrt(2),
    });
    expect(viewHandler.throttledFetchData).to.have.been.calledOnce;
    expect(viewHandler.throttledFetchData).to.have.been.calledWithExactly(chartModel);
  });

  it('should update correct dataView for viewHandler, when we zoom in', () => {
    e = { deltaY: -1 };
    eventUtils.eventToComponentPoint.returns({ x: 50, y: 50 });
    dataView = { xAxisMin: -1000, xAxisMax: 1000, yAxisMin: 0, yAxisMax: 2000 };
    viewHandler.getDataView.returns(dataView);
    viewHandler.setDataView = (newDataView) => {
      extend(true, dataView, newDataView);
    };
    create();
    expect(dataView).to.deep.equal({
      xAxisMin: -1000 / Math.sqrt(2),
      xAxisMax: 1000 / Math.sqrt(2),
      yAxisMin: -1000 * Math.sqrt(1 / 2) + 1000,
      yAxisMax: 1000 + 1000 / Math.sqrt(2),
    });
    expect(viewHandler.throttledFetchData).to.have.been.calledOnce;
    expect(viewHandler.throttledFetchData).to.have.been.calledWithExactly(chartModel);
  });

  it('should update correct dataView for viewHandler, when we zoom out but reach the maxScale limit', () => {
    e = { deltaY: 0.1 };
    eventUtils.eventToComponentPoint.returns({ x: 50, y: 50 });
    viewHandler.getMeta.returns({ scale: 2 ** 4, maxScale: 2 ** 4.1, minScale: 2 ** -9.1 });
    dataView = { xAxisMin: -1000, xAxisMax: 1000, yAxisMin: 0, yAxisMax: 2000 };
    viewHandler.getDataView.returns(dataView);
    viewHandler.setDataView = (newDataView) => {
      extend(true, dataView, newDataView);
    };
    create();
    expect(dataView).to.deep.equal({
      xAxisMin: -1000,
      xAxisMax: 1000,
      yAxisMin: 0,
      yAxisMax: 2000,
    });
    expect(viewHandler.throttledFetchData).to.not.have.been.called;
  });

  it('should update correct dataView for viewHandler, when we zoom in but reach the minScale limit', () => {
    e = { deltaY: -1 };
    eventUtils.eventToComponentPoint.returns({ x: 50, y: 50 });
    viewHandler.getMeta.returns({ scale: 2 ** -9, maxScale: 2 ** 4.1, minScale: 2 ** -9.1 });
    dataView = { xAxisMin: -1000, xAxisMax: 1000, yAxisMin: 0, yAxisMax: 2000 };
    viewHandler.getDataView.returns(dataView);
    viewHandler.setDataView = (newDataView) => {
      extend(true, dataView, newDataView);
    };
    create();
    expect(dataView).to.deep.equal({
      xAxisMin: -1000,
      xAxisMax: 1000,
      yAxisMin: 0,
      yAxisMax: 2000,
    });
    expect(viewHandler.throttledFetchData).to.not.have.been.called;
  });

  it('should update correct dataView for pinch zoom', () => {
    pinchZoomFactor = 0.6;
    eventUtils.eventToComponentPoint.returns({ x: 50, y: 50 });
    dataView = { xAxisMin: -1000, xAxisMax: 1000, yAxisMin: 0, yAxisMax: 2000 };
    viewHandler.getDataView.returns(dataView);
    viewHandler.setDataView = (newDataView) => {
      extend(true, dataView, newDataView);
    };
    create();
    expect(dataView).to.deep.equal({
      xAxisMin: -600,
      xAxisMax: 600,
      yAxisMin: 400,
      yAxisMax: 1600,
    });
    expect(viewHandler.throttledFetchData).to.have.been.calledOnce;
    expect(viewHandler.throttledFetchData).to.have.been.calledWithExactly(chartModel);
  });
});
