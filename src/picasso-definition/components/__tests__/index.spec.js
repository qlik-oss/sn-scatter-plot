// eslint-disable-next-line no-unused-vars
import * as createGridLines from '../grid-lines';
import * as createAxes from '../axes';
import * as createAxisTitles from '../axis-titles';
import * as createPoint from '../point';
import * as createHeatMap from '../heat-map';
import * as createHeatMapLabels from '../heat-map-labels';
import * as createReferenceLines from '../reference-lines';
import * as createPointLabels from '../point-labels';
import * as createDisclaimer from '../disclaimer';
import * as createOutOfBounds from '../out-of-bounds';
import * as createHeatMapLegend from '../heat-map-legend';
import * as createMiniChart from '../mini-chart';
import * as createHeatMapHighLight from '../heat-map-highlight';
import * as createNavigationPanel from '../navigation-panel';
import createComponents from '..';

describe('createComponents', () => {
  let sandbox;
  let create;
  let models;
  let picasso;
  let chart;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    models = {
      colorService: {
        custom: { legendComponents: sandbox.stub().returns(['legend-component-1', 'legend-component-2']) },
      },
      tooltipService: {
        getComponents: sandbox.stub().returns(['tooltip-1', 'tooltip-2']),
      },
      disclaimerModel: {
        query: { getHasSuppressingDisclaimer: sandbox.stub().returns(false) },
      },
      trendLinesService: {
        getComponents: sandbox.stub().returns(['trendlines-component']),
      },
    };
    create = () => createComponents({ context, models, picasso, chart });
    sandbox.stub(createGridLines, 'default').returns('grid-lines');
    sandbox.stub(createReferenceLines, 'default').returns(['ref-line-x', 'ref-line-y']);
    sandbox.stub(createPoint, 'default').returns('points');
    sandbox.stub(createHeatMap, 'default').returns('heat-map');
    sandbox.stub(createAxes, 'default').returns(['axis-x', 'axis-y']);
    sandbox.stub(createAxisTitles, 'default').returns(['axis-title-x', 'axis-title-y']);
    sandbox.stub(createPointLabels, 'default').returns('point-labels');
    sandbox.stub(createHeatMapLabels, 'default').returns('heat-map-labels');
    sandbox.stub(createOutOfBounds, 'default').returns('oobs');
    sandbox.stub(createOutOfBounds, 'createSpace').returns(['oobs-space']);
    sandbox.stub(createHeatMapLegend, 'default').returns('heat-map-legend');
    sandbox.stub(createDisclaimer, 'default').returns('disclaimer');
    sandbox.stub(createMiniChart, 'default').returns(['mini-chart-point', 'mini-chart-background', 'mini-chart-nav']);
    sandbox.stub(createHeatMapHighLight, 'default').returns('heat-map-highlight');
    sandbox.stub(createNavigationPanel, 'default').returns('navigation-panel');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct components', () => {
    const components = create();
    expect(components).to.deep.equal([
      'oobs-space',
      'grid-lines',
      'ref-line-x',
      'ref-line-y',
      'points',
      'heat-map',
      'trendlines-component',
      'axis-x',
      'axis-y',
      'axis-title-x',
      'axis-title-y',
      'point-labels',
      'oobs',
      'legend-component-1',
      'legend-component-2',
      'heat-map-legend',
      'disclaimer',
      'heat-map-highlight',
      'navigation-panel',
      'mini-chart-point',
      'mini-chart-background',
      'mini-chart-nav',
      'tooltip-1',
      'tooltip-2',
      'heat-map-labels',
    ]);
  });

  it('should return only disclaimer when the disclaimer is suppressing', () => {
    models.disclaimerModel.query.getHasSuppressingDisclaimer.returns(true);
    const components = create();
    expect(components).to.deep.equal(['disclaimer']);
  });
});
