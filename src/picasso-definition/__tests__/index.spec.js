// eslint-disable-next-line no-unused-vars
import createPicassoDefinition from '..';
import * as NUMBERS from '../../constants/numbers';
import * as createCollections from '../collections';
import * as createComponents from '../components';
import * as createScales from '../scales';
import * as createInteractions from '../interactions';
import * as createSelectables from '../selectables';
import * as createFormatters from '../formatters';

describe('picasso-definition', () => {
  let sandbox;
  let create;
  let core;
  let models;
  let model;
  let theme;
  let options;
  let constraints;
  let translator;
  let flags;
  let chartModel;
  let viewState;
  let localeInfo;
  let colorService;
  let pluginService;
  const logicalSize = 100;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    core = { chart: 'current-chart', actions: 'registered-actions', picasso: 'picasso-object' };
    chartModel = {
      query: {
        getViewHandler: sandbox.stub().returns('view-handler'),
        getViewState: sandbox.stub().returns(viewState),
        getLocaleInfo: sandbox.stub().returns(localeInfo),
      },
    };
    colorService = { getPalettes: sandbox.stub().returns('current-palettes') };
    pluginService = { extendComponents: (normalComponents) => [...normalComponents, 'plugin-component-1'] };
    models = { chartModel, colorService, pluginService, tooltipService: 'current-tooltip-service' };
    options = { direction: 'ltr' };
    sandbox
      .stub(createSelectables, 'default')
      .returns({ gestures: ['g-1', 'g-2'], components: ['selectable-component-1'] });
    sandbox.stub(createScales, 'default').returns('correct-scales');
    sandbox.stub(createCollections, 'default').returns('current-collections');
    sandbox.stub(NUMBERS, 'default').value({ LAYOUT_MODES: 'correct-layout-modes' });
    sandbox.stub(createFormatters, 'default').returns('correct-formatters');
    sandbox.stub(createComponents, 'default').returns(['comp-1', 'comp-2']);
    sandbox
      .stub(createInteractions, 'default')
      .withArgs({
        chart: 'current-chart',
        actions: 'registered-actions',
        viewHandler: 'view-handler',
        gestures: ['g-1', 'g-2'],
        colorService,
        tooltipService: 'current-tooltip-service',
        rtl: false,
      })
      .returns('correct-interactions');
    create = () =>
      createPicassoDefinition({
        core,
        models,
        model,
        theme,
        options,
        constraints,
        translator,
        logicalSize,
        flags,
      });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct Picasso definitions', () => {
    const returnObj = create();
    expect(returnObj).to.deep.equal({
      interactions: 'correct-interactions',
      scales: 'correct-scales',
      components: ['comp-1', 'comp-2', 'selectable-component-1', 'plugin-component-1'],
      collections: 'current-collections',
      palettes: 'current-palettes',
      strategy: {
        layoutModes: 'correct-layout-modes',
        center: {
          minWidthRatio: 0,
          minHeightRatio: 0,
        },
        logicalSize: 100,
      },
      formatters: 'correct-formatters',
    });
  });
});
