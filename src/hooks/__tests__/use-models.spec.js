// eslint-disable-next-line no-unused-vars
import * as stardust from '@nebula.js/stardust';
import * as chartModules from 'qlik-chart-modules';
import * as layoutServiceMeta from '../../services/layout-service/meta';
import * as createChartModel from '../../models/chart-model';
import * as createTickModel from '../../models/tick-model';
import * as createSelectionService from '../../services/selection-service';
import * as createColorService from '../../services/color-service';
import * as createTooltipService from '../../services/tooltip-service';
import * as getPluginArgs from '../../services/plugin-service/plugin-args';
import * as getLogicalSize from '../../logical-size';
import * as createExtremumModel from '../../models/extremum-model';
import * as createDisclaimerModel from '../../models/disclaimer-model';
import * as createPropertiesModel from '../../models/properties-model';
import * as createCustomTooltipService from '../../custom-tooltip/service';
import * as createDataHandler from '../../data-handler';
import useModels from '../use-models';

describe('use-models', () => {
  let sandbox;
  let create;
  let core;
  let flags;
  let layout;
  let theme;
  let model;
  let translator;
  let options;
  let rect;
  let selections;
  let app;
  let localeInfo;
  let plugins;
  let selectionService;
  let setSelectionService;
  let models;
  let setModels;
  let fn;
  let conditionArray;
  let localSelectionService;
  let picassoInstance;
  let chart;
  let actions;
  let viewState;
  let layoutService;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layout = 'layout';
    theme = { name: sandbox.stub() };
    model = 'enigma-model';
    translator = { language: sandbox.stub() };
    options = { direction: 'ltr', viewState: undefined };
    rect = 'rect';
    selections = 'selections';
    app = 'app';
    localeInfo = 'localeInfo';
    plugins = 'plugins';
    selectionService = { setLayout: sandbox.stub() };
    setSelectionService = sandbox.stub();
    models = 'models';
    setModels = sandbox.stub();
    core = { picassoInstance, chart, actions, viewState };
    global.document = 'document';
    localSelectionService = { destroy: sandbox.stub() };
    layoutService = { getLayout: sandbox.stub() };

    sandbox.stub(stardust, 'useStaleLayout').returns(layout);
    sandbox.stub(stardust, 'useTheme').returns(theme);
    sandbox.stub(stardust, 'useModel').returns(model);
    sandbox.stub(stardust, 'useTranslator').returns(translator);
    sandbox.stub(stardust, 'useOptions').returns(options);
    sandbox.stub(stardust, 'useRect').returns(rect);
    sandbox.stub(stardust, 'useSelections').returns(selections);
    sandbox.stub(stardust, 'useApp').returns(app);
    sandbox.stub(stardust, 'useAppLayout').returns({ qLocaleInfo: localeInfo });
    sandbox.stub(stardust, 'usePlugins').returns(plugins);
    sandbox.stub(stardust, 'useState');
    sandbox.stub(stardust, 'useEffect');
    sandbox.stub(stardust, 'useEmbed');
    stardust.useState.onFirstCall().returns([selectionService, setSelectionService]);
    stardust.useState.onSecondCall().returns([models, setModels]);
    sandbox.stub(createSelectionService, 'default').returns(localSelectionService);
    sandbox.stub(chartModules, 'layoutService').returns(layoutService);
    sandbox.stub(getLogicalSize, 'default');
    sandbox.stub(layoutServiceMeta, 'default');
    sandbox.stub(chartModules, 'dockService');
    sandbox.stub(chartModules, 'themeService');
    sandbox.stub(getPluginArgs, 'default');
    sandbox.stub(chartModules, 'pluginService');
    sandbox.stub(createExtremumModel, 'default');
    sandbox.stub(createDataHandler, 'default');
    sandbox.stub(createColorService, 'default');
    sandbox.stub(createTooltipService, 'default');
    sandbox.stub(createChartModel, 'default');
    sandbox.stub(createTickModel, 'default');
    sandbox.stub(createDisclaimerModel, 'default');
    sandbox.stub(createPropertiesModel, 'default');
    sandbox.stub(createCustomTooltipService, 'default');

    create = () => useModels({ core, flags });
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('the first useEffect call', () => {
    it('should have the second argument as an array with only one element: core', () => {
      create();
      conditionArray = stardust.useEffect.getCall(0).args[1];
      expect(conditionArray).to.deep.equal([core]);
    });

    describe('the function in the first useEffect arguments list', () => {
      it('should return a function which returns nothing (undefined) if core is not defined', () => {
        core = undefined;
        create();
        fn = stardust.useEffect.getCall(0).args[0];
        const returnFn = fn();
        expect(returnFn()).to.deep.equal(undefined);
      });

      it('should call createSelectionService with proper argument', () => {
        core = { chart: 'some-chart', actions: 'some-actions' };
        create();
        fn = stardust.useEffect.getCall(0).args[0];
        fn();
        expect(createSelectionService.default).to.have.been.calledWithExactly({
          chart: 'some-chart',
          actions: 'some-actions',
          selections: 'selections',
          document: 'document',
        });
      });

      it('should return a function that will call the destroy function of selection service', () => {
        core = { chart: 'some-chart', actions: 'some-actions' };
        create();
        fn = stardust.useEffect.getCall(0).args[0];
        const returnFn = fn();
        returnFn();
        expect(localSelectionService.destroy).to.have.been.calledOnce;
      });
    });
  });

  describe('the second useEffect call', () => {
    it('should have the second argument as an array with correct elements', () => {
      create();
      conditionArray = stardust.useEffect.getCall(1).args[1];
      expect(conditionArray).to.be.a('array');
    });

    describe('the function in the second useEffect arguments list', () => {
      it('should return nothing (undefined) if layout is not defined', () => {
        stardust.useStaleLayout.returns(undefined);
        create();
        fn = stardust.useEffect.getCall(1).args[0];
        expect(fn()).to.deep.equal(undefined);
      });

      it('should return nothing (undefined) if selectionService is not defined', () => {
        selectionService = undefined;
        stardust.useState.onFirstCall().returns([selectionService, setSelectionService]);
        create();
        fn = stardust.useEffect.getCall(1).args[0];
        expect(fn()).to.deep.equal(undefined);
      });

      it('should create all the services and models', () => {
        create();
        fn = stardust.useEffect.getCall(1).args[0];
        fn();
        expect(chartModules.layoutService).to.have.been.calledOnce;
        expect(chartModules.dockService).to.have.been.calledOnce;
        expect(chartModules.themeService).to.have.been.calledOnce;
        expect(chartModules.pluginService).to.have.been.calledOnce;

        expect(createExtremumModel.default).to.have.been.calledOnce;
        expect(createDataHandler.default).to.have.been.calledOnce;
        expect(createColorService.default).to.have.been.calledOnce;
        expect(createCustomTooltipService.default).to.have.been.calledOnce;
        expect(createTooltipService.default).to.have.been.calledOnce;
        expect(createChartModel.default).to.have.been.calledOnce;
        expect(createTickModel.default).to.have.been.calledOnce;
        expect(createDisclaimerModel.default).to.have.been.calledOnce;
        expect(createPropertiesModel.default).to.have.been.calledOnce;
        expect(selectionService.setLayout).to.have.been.calledOnce;
        expect(setModels).to.have.been.calledOnce;
      });
    });
  });
});
