import createPointTooltip from './point';

export default function createTooltips({ models, context }) {
  return [createPointTooltip({ models, rtl: context.rtl })];
}
