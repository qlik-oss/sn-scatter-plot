import createAxisX from './x-axis';
import createAxisY from './y-axis';

export default function createAxes({ context, layoutModel, dockModel, themeModel }) {
  return [
    createAxisX({
      context,
      layoutModel,
      dockModel,
      themeModel,
    }),
    createAxisY({
      layoutModel,
      dockModel,
      themeModel,
    }),
  ];
}
