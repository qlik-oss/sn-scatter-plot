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
import createPicassoDefinition from '../picasso-definition';
import getLogicalSize from '../logical-size';

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

  usePromise(() => {
    if (!models) {
      return Promise.resolve();
    }

    const { layoutModel, chartModel } = models;
    const zoomHandler = chartModel.query.getZoomHandler();
    const logicalSize = getLogicalSize({ layout: layoutModel.getLayout(), options });

    return zoomHandler.fetchData().then((pages) => {
      layoutModel.setDataPages(pages);
      setSettings(getPicassoDef(logicalSize));
    });
  }, [models]);

  useEffect(() => {
    if (!models) {
      return;
    }

    const { layoutModel, chartModel, dockModel } = models;
    const zoomHandler = chartModel.query.getZoomHandler();
    const logicalSize = getLogicalSize({ layout: layoutModel.getLayout(), options });

    dockModel.update(logicalSize || rect);
    zoomHandler.update();
    zoomHandler.fetchData().then((pages) => {
      layoutModel.setDataPages(pages);
      setSettings(getPicassoDef(logicalSize));
    });
  }, [rect.width, rect.height]);

  return settings;
};

export default useSettings;
