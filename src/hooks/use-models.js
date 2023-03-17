import {
  useEffect,
  useState,
  useStaleLayout,
  useTheme,
  useTranslator,
  useApp,
  useAppLayout,
  useModel,
  useOptions,
  useRect,
  useSelections,
  usePlugins,
  useEmbed,
  useConstraints,
} from '@nebula.js/stardust';
import {
  layoutService as createLayoutService,
  themeService as createThemeService,
  dockService as createDockService,
  pluginService as createPluginService,
} from 'qlik-chart-modules';
import createLargeDataService from '../services/large-data-service';
import layoutServiceMeta from '../services/layout-service/meta';
import createTrendlinesService from '../services/trendlines-service';
import createChartModel from '../models/chart-model';
import createTickModel from '../models/tick-model';
import createSelectionService from '../services/selection-service';
import createColorService from '../services/color-service';
import createCustomTooltipService from '../custom-tooltip/service';
import createTooltipService from '../services/tooltip-service';
import getPluginArgs from '../services/plugin-service/plugin-args';
import getLogicalSize from '../logical-size';
import createExtremumModel from '../models/extremum-model';
import createDisclaimerModel from '../models/disclaimer-model';
import createPropertiesModel from '../models/properties-model';
import createDataHandler from '../data-handler';
import createStyleModel from '../models/style-model';

const useModels = ({ core, flags }) => {
  const layout = useStaleLayout();
  const theme = useTheme();
  const model = useModel();
  const translator = useTranslator();
  const options = useOptions();
  const rect = useRect();
  const selections = useSelections();
  const app = useApp();
  const { qLocaleInfo: localeInfo, qUnsupportedFeatures } = useAppLayout();
  const plugins = usePlugins();
  const [selectionService, setSelectionService] = useState();
  const [models, setModels] = useState();
  const embed = useEmbed();
  const constraints = useConstraints();

  useEffect(() => {
    if (!core) {
      return () => {};
    }

    const { chart, actions } = core;
    const localSelectionService = createSelectionService({
      chart,
      actions,
      selections,
      document,
    });

    setSelectionService(localSelectionService);

    return () => {
      localSelectionService.destroy();
      localSelectionService.destroyLazySelection();
    };
  }, [core]);

  useEffect(() => {
    if (!layout || !selectionService) {
      return;
    }

    const { picassoInstance, chart, actions, viewState, viewCache, progressive } = core;

    const rtl = options.direction === 'rtl';

    const layoutService = createLayoutService({
      source: layout,
      metaAdditionsFn: layoutServiceMeta(flags, qUnsupportedFeatures),
    });
    const largeDataService = createLargeDataService({ layoutService, options });
    const logicalSize = getLogicalSize({ layout: layoutService.getLayout(), options });
    const dockService = createDockService({
      chart,
      layoutService,
      config: {
        logicalSize: logicalSize || rect,
        rtl,
      },
      typeConfig: {
        type: 'x-y',
      },
    });
    const themeService = createThemeService({ theme, config: { id: 'scatterPlot' } });
    const pluginArgs = getPluginArgs(layoutService);
    const pluginService = createPluginService({ picassoInstance, plugins, pluginArgs });
    const extremumModel = createExtremumModel(layoutService, options.viewState);

    const dataHandler = createDataHandler({ layoutService, model, extremumModel });

    const colorService = createColorService({
      actions,
      localeInfo,
      app,
      chart,
      theme,
      translator,
      options,
      model,
      layoutService,
      picasso: picassoInstance,
      viewState,
      dataHandler,
    });

    let chartModel;
    let tickModel;
    const trendLinesService = createTrendlinesService({
      chart,
      colorService,
      animationsEnabled: () => chartModel.query.animationsEnabled(),
      flags,
      layoutService,
      translator,
      viewState,
    });

    const propertiesModel = createPropertiesModel({ model, layoutService });

    const customTooltipService = createCustomTooltipService({
      flags,
      layout,
      app,
      model,
      picasso: picassoInstance,
      chart,
      translator,
      embed,
      options,
    });

    chartModel = createChartModel({
      chart,
      localeInfo,
      layoutService,
      largeDataService,
      picasso: picassoInstance,
      viewState,
      viewCache,
      colorService,
      extremumModel,
      dataHandler,
      trendLinesService,
      actions,
      progressive,
      getCurrentYTicks: () => tickModel.query.getCurrentYTicks(),
      getYTicks: () => tickModel.query.getYTicks(),
      options,
      constraints,
    });

    const tooltipService = createTooltipService({
      chart,
      actions,
      translator,
      rtl,
      layoutService,
      colorService,
      themeService,
      trendLinesService,
      propertiesModel,
      chartModel,
      custom: customTooltipService,
    });

    tickModel = createTickModel({
      layoutService,
      dockService,
      extremumModel,
      themeService,
      chartModel,
      chart,
    });

    const disclaimerModel = createDisclaimerModel({ layoutService });
    const styleModel = createStyleModel({ layoutService, themeService, flags });

    selectionService.setLayout(layoutService.getLayout());
    setModels({
      layoutService,
      largeDataService,
      tickModel,
      chartModel,
      dockService,
      selectionService,
      themeService,
      pluginService,
      disclaimerModel,
      colorService,
      extremumModel,
      tooltipService,
      propertiesModel,
      trendLinesService,
      app,
      styleModel,
    });
  }, [
    model,
    app,
    selectionService,
    layout,
    theme.name(),
    translator.language(),
    options.direction,
    options.viewState,
    qUnsupportedFeatures,
  ]);

  return models;
};

export default useModels;
