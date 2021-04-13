import KEYS from '../../../constants/keys';
import settings from './settings';

export default function createLegend({ viewState, chart, options, colorService, actions }) {
  const config = {
    eventName: 'legend-c',
    key: KEYS.COMPONENT.LEGEND,
    viewState,
    chart,
    styleReference: 'object.scatterPlot',
    rtl: options.direction === 'rtl',
    settings: settings({ colorService }),
  };

  const { components, interactions } = colorService.getLegend(config, {
    actions,
    navigationDisabled: !actions.interact.enabled(),
  });
  const scales = colorService.getScales();

  return {
    components: components.filter(Boolean).map((comp) => {
      const { layout } = comp;
      const { dock } = layout;
      const rangeScaleDef = scales[`${KEYS.SCALE.COLOR}Range`];

      // TODO colorService module should handle this..
      if (rangeScaleDef && (dock === 'right' || dock === 'left')) {
        rangeScaleDef.invert = true;
      }

      if (comp.type === 'legend-cat') {
        // reuse the main color legend scale
        comp.settings.item.shape.fill.scale = comp.scale; // eslint-disable-line no-param-reassign
        comp.settings.item.shape.stroke.scale = comp.scale; // eslint-disable-line no-param-reassign
      }

      return comp;
    }),
    interactions,
    scales,
  };
}
