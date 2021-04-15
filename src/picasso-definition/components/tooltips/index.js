import createPointTooltip from './point';

export default function createTooltips({ context, themeModel, layoutModel }) {
  return [
    createPointTooltip({
      themeModel,
      layoutModel,
      rtl: context.rtl,
    }),
  ];
}
