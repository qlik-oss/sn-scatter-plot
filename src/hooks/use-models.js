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
} from '@nebula.js/stardust';
import {
  layoutService as createLayoutService,
  themeService as createThemeService,
  dockService as createDockService,
  pluginService as createPluginService,
} from 'qlik-chart-modules';
import themeStyleMatrix from '../services/theme-service/theme-style-matrix';
import layoutServiceMeta from '../services/layout-service/meta';
import createChartModel from '../models/chart-model';
import createTickModel from '../models/tick-model';
import createSelectionService from '../services/selection-service';
import createColorService from '../services/color-service';
import getPluginArgs from '../services/plugin-service/plugin-args';
import getLogicalSize from '../logical-size';
import createExtremumModel from '../models/extremum-model';
import createDisclaimerModel from '../models/disclaimer-model';
import createViewHandler from '../view-handler';

const useModels = ({ core, flags }) => {
  const layout = useStaleLayout();
  const theme = useTheme();
  const model = useModel();
  const translator = useTranslator();
  const options = useOptions();
  const rect = useRect();
  const selections = useSelections();
  const app = useApp();
  const { qLocaleInfo: localeInfo } = useAppLayout();
  const plugins = usePlugins();
  const [selectionService, setSelectionService] = useState();
  const [models, setModels] = useState();

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

    const { picassoInstance, chart, actions, viewState } = core;
    const layoutService = createLayoutService({ source: layout, metaAdditionsFn: layoutServiceMeta });
    const logicalSize = getLogicalSize({ layout: layoutService.getLayout(), options });
    const dockService = createDockService({
      chart,
      layoutService,
      config: {
        logicalSize: logicalSize || rect,
        rtl: options.direction === 'rtl',
      },
      typeConfig: {
        type: 'x-y',
      },
    });
    const themeService = createThemeService({ theme, styleMatrix: themeStyleMatrix });
    const pluginArgs = getPluginArgs(layoutService);
    const pluginService = createPluginService({ picassoInstance, plugins, pluginArgs });
    const extremumModel = createExtremumModel(layoutService, options.viewState);
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
    });

    const viewHandler = createViewHandler({
      app,
      flags,
      dockService,
      layoutService,
      model,
      viewState,
    });

    const chartModel = createChartModel({
      chart,
      localeInfo,
      layoutService,
      model,
      picasso: picassoInstance,
      options,
      viewState,
      colorService,
      extremumModel,
      app,
      flags,
      viewHandler,
    });

    const tickModel = createTickModel({ layoutService, dockService, extremumModel, themeService, chartModel, chart });

    const disclaimerModel = createDisclaimerModel({ app, layoutService, flags });

    selectionService.setLayout(layout);
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
      viewHandler,
    });
  }, [model, app, selectionService, layout, theme.name(), translator.language(), options.direction, options.viewState]);

  return models;
};

export default useModels;
