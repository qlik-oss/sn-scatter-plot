import {
  useEffect,
  useState,
  useStaleLayout,
  useTheme,
  useConstraints,
  useTranslator,
  useAppLayout,
  useModel,
  useOptions,
  useRect,
  useSelections,
} from '@nebula.js/stardust';

import createChartModel from '../models/chart-model';
import createTickModel from '../models/tick-model';
import createDockModel from '../models/dock-model';
import createSelectionModel from '../models/selection-model';
import createThemeModel from '../models/theme-model';
import getLogicalSize from '../logical-size';
import utils from '../utils';

const useModels = ({ core }) => {
  const layout = useStaleLayout();
  const theme = useTheme();
  const model = useModel();
  const translator = useTranslator();
  const constraints = useConstraints();
  const options = useOptions();
  const rect = useRect();
  const selections = useSelections();
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

    const { picassoInstance, chart } = core;

    // TODO: use the layoutmodel module or another proper implementation
    const layoutModel = {
      meta: {
        isSnapshot: !!layout.snapshotData,
        hasSizeMeasure: !!utils.getValue(layout.qHyperCube, 'qMeasureInfo.2'),
      },
      getDataPages: () => layout.qHyperCube.qDataPages,
      getHyperCube: () => layout.qHyperCube,
      getHyperCubeValue: (path, defaultValue) => utils.getValue(layout.qHyperCube, path, defaultValue),
      getLayoutValue: (path, defaultValue) => utils.getValue(layout, path, defaultValue),
      getLayout: () => layout,
      setDataPages: (pages) => {
        layout.qHyperCube.qDataPages = pages;
      },
    };

    const logicalSize = getLogicalSize({ layout: layoutModel.getLayout(), options });
    const dockModel = createDockModel({ layoutModel, size: logicalSize || rect, rtl: options.direction === 'rtl' });

    const chartModel = createChartModel({
      chart,
      localeInfo,
      layoutModel,
      dockModel,
      model,
      picasso: picassoInstance,
      options,
    });

    const tickModel = createTickModel({
      layoutModel,
      chartModel,
      dockModel,
    });

    selectionModel.command.setLayout({ layout });

    const themeModel = createThemeModel({ theme });

    setModels({
      layoutModel,
      tickModel,
      chartModel,
      dockModel,
      selectionModel,
      themeModel,
    });
  }, [selectionModel, layout, constraints, theme.name(), translator.language(), options.direction, options.viewState]);

  return models;
};

export default useModels;
