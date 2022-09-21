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
} from '@nebula.js/stardust';
import {
  layoutService as createLayoutService,
  themeService as createThemeService,
  dockService as createDockService,
  pluginService as createPluginService,
} from 'qlik-chart-modules';
import themeStyleMatrix from '../services/theme-service/theme-style-matrix';
import layoutServiceMeta from '../services/layout-service/meta';
import createTrenslinesService from '../services/trendlines-service';
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

const useModels = ({ core, flags }) => {
  const layout = useStaleLayout();
  const theme = useTheme();
  const model = useModel();
  const translator = useTranslator();
  const options = useOptions();
  const rect = useRect();
  const selections = useSelections();
  const app = useApp();
  const { qLocaleInfo: localeInfo, qIsDirectQueryMode, qUnsupportedFeature } = useAppLayout();
  const plugins = usePlugins();
  const [selectionService, setSelectionService] = useState();
  const [models, setModels] = useState();
  const embed = useEmbed();

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
    };
  }, [core]);

  useEffect(() => {
    if (!layout || !selectionService) {
      return;
    }

    const { picassoInstance, chart, actions, viewState, progressive } = core;

    const rtl = options.direction === 'rtl';

    const layoutService = createLayoutService({
      source: layout,
      metaAdditionsFn: layoutServiceMeta(flags, qIsDirectQueryMode, qUnsupportedFeature),
    });
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
    const themeService = createThemeService({ theme, styleMatrix: themeStyleMatrix });
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
    const trendLinesService = createTrenslinesService({
      chart,
      colorService,
      enableAnimations: () => chartModel.query.getViewHandler().animationEnabled,
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
      picasso: picassoInstance,
      viewState,
      colorService,
      extremumModel,
      dataHandler,
      trendLinesService,
      actions,
      progressive,
      getCurrentYTicks: () => tickModel.query.getCurrentYTicks(),
      getYTicks: () => tickModel.query.getYTicks(),
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

    selectionService.setLayout(layoutService.getLayout());
    setModels({
      layoutService,
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
    qIsDirectQueryMode,
    qUnsupportedFeature,
  ]);

  return models;
};

export default useModels;
