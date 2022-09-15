import {
  useState,
  useModel,
  usePromise,
  useTheme,
  useOptions,
  useConstraints,
  useTranslator,
  useSelections,
  useEffect,
  useRect,
} from '@nebula.js/stardust';
import customTooltipMigrators from '../custom-tooltip/migrators';
import createPicassoDefinition from '../picasso-definition';
import getLogicalSize from '../logical-size';
import { initializeViewState, updateViewState } from './view-state';

const useSettings = ({ core, models, flags }) => {
  const rect = useRect();
  const [settings, setSettings] = useState();
  const model = useModel();
  const theme = useTheme();
  const options = useOptions();
  const constraints = useConstraints();
  const translator = useTranslator();
  const selections = useSelections();

  const getPicassoDef = (logicalSize) =>
    createPicassoDefinition({
      core,
      models,
      model,
      theme,
      options,
      constraints,
      selections,
      translator,
      logicalSize,
      flags,
    });

  usePromise(async () => {
    if (!models) {
      return Promise.resolve();
    }

    const { layoutService, chartModel, colorService, pluginService, propertiesModel } = models;

    customTooltipMigrators.attrExpr.updateProperties(model, layoutService.getLayout());

    const { viewState } = core;
    const logicalSize = getLogicalSize({ layout: layoutService.getLayout(), options });
    const dataHandler = chartModel.query.getDataHandler();
    await dataHandler.fetch().catch(() => {}); // Promise rejected if trying to fetch same data window twice in a row
    await pluginService.initialize();
    await propertiesModel.command.initialize();
    return colorService.initialize().finally(() => {
      colorService.custom.updateBrushAliases();
      colorService.custom.updateLegend();
      const newSettings = getPicassoDef(logicalSize);
      chartModel.command.layoutComponents({ settings: newSettings });
      initializeViewState({ viewState, viewStateOptions: options.viewState, models });
      setSettings(newSettings);
    });
  }, [models]);

  useEffect(() => {
    if (!models || !models?.colorService.isInitialized()) {
      return;
    }

    const { layoutService, chartModel, dockService, colorService } = models;
    const { viewState } = core;
    const logicalSize = getLogicalSize({ layout: layoutService.getLayout(), options });
    dockService.update(logicalSize || rect);
    colorService.custom.updateLegend();

    const newSettings = getPicassoDef(logicalSize || rect);
    chartModel.command.setMeta({ sizeChanged: true });
    chartModel.command.layoutComponents({ settings: newSettings });
    chartModel.command.setMeta({ sizeChanged: undefined });
    updateViewState({ viewState, viewStateOptions: options.viewState, models });
    setSettings(newSettings);
  }, [rect.width, rect.height, constraints]);

  return settings;
};

export default useSettings;
