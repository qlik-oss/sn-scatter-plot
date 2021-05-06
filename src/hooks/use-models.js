import {
  useEffect,
  useState,
  useStaleLayout,
  useTheme,
  useConstraints,
  useTranslator,
  useApp,
  useAppLayout,
  useModel,
  useOptions,
  useRect,
  useSelections,
} from '@nebula.js/stardust';
import { layoutService as createLayoutService, themeService as createThemeService } from '@qlik/chart-modules';
import themeStyleMatrix from '../services/theme-service/theme-style-matrix';
import layoutServiceMeta from '../services/layout-service/meta';
import createChartModel from '../models/chart-model';
import createTickModel from '../models/tick-model';
import createDockModel from '../models/dock-model';
import createSelectionModel from '../models/selection-model';
import createColorService from '../services/color-service';
import getLogicalSize from '../logical-size';
// import createViewState from './viewstate';
import createExtremumModel from '../models/extremum-model';
import createDisclaimerModel from '../models/disclaimer-model';

const useModels = ({ core, flags }) => {
  const layout = useStaleLayout();
  const theme = useTheme();
  const model = useModel();
  const translator = useTranslator();
  const constraints = useConstraints();
  const options = useOptions();
  const rect = useRect();
  const selections = useSelections();
  const app = useApp();
  const { qLocaleInfo: localeInfo } = useAppLayout();
  const [selectionModel, setSelectionModel] = useState();
  const [models, setModels] = useState();

  useEffect(() => {
    if (!core) {
      return () => {};
    }

    const { chart, actions } = core;
    const sm = createSelectionModel({
      chart,
      actions,
      selections,
      document,
    });

    setSelectionModel(sm);

    return () => {
      sm.command.destroy();
    };
  }, [core]);

  useEffect(() => {
    if (!layout || !selectionModel) {
      return;
    }

    const { picassoInstance, chart, actions, viewState } = core;
    const layoutService = createLayoutService({ source: layout, metaAdditionsFn: layoutServiceMeta });
    const logicalSize = getLogicalSize({ layout: layoutService.getLayout(), options });
    const dockModel = createDockModel({ layoutService, size: logicalSize || rect, rtl: options.direction === 'rtl' });
    const themeService = createThemeService({ theme, styleMatrix: themeStyleMatrix });
    const extremumModel = createExtremumModel(layoutService, options.viewState);
    const tickModel = createTickModel({ layoutService, dockModel, extremumModel, themeService, chart });
    // const viewState = createViewState(layoutService, options.viewState, tickModel);
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

    const chartModel = createChartModel({
      chart,
      localeInfo,
      layoutService,
      dockModel,
      model,
      picasso: picassoInstance,
      options,
      viewState,
      colorService,
      extremumModel,
    });

    const disclaimerModel = createDisclaimerModel({ layoutService, flags });

    selectionModel.command.setLayout({ layout });
    setModels({
      layoutService,
      tickModel,
      chartModel,
      dockModel,
      selectionModel,
      themeService,
      disclaimerModel,
      colorService,
    });
  }, [
    model,
    app,
    selectionModel,
    layout,
    constraints,
    theme.name(),
    translator.language(),
    options.direction,
    options.viewState,
  ]);

  return models;
};

export default useModels;
