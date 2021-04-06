import createXAxisTitle from './x-axis-title';
import createYAxisTitle from './y-axis-title';

export default function createAxisTitles({ layoutModel, dockModel, themeModel }) {
  const args = {
    layoutModel,
    dockModel,
    themeModel,
  };

  return [createXAxisTitle(args), createYAxisTitle(args)];
}
