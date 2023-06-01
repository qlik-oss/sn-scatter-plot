import KEYS from '../../../constants/keys';
import settings from './settings';

export default function createLegend({ viewState, chart, options, colorService, actions, styleModel }) {
  const rtl = options.direction === 'rtl';

  const config = {
    eventName: 'legend-c',
    key: KEYS.COMPONENT.LEGEND,
    viewState,
    chart,
    styleReference: 'object.scatterPlot',
    styleOverrides: {
      title: styleModel.query.legend.title.getStyle(),
      label: styleModel.query.legend.label.getStyle(),
    },
    rtl,
    settings: settings({ colorService }),
  };

  const { components, interactions } = colorService.getLegend(config, {
    actions,
    navigationDisabled: !actions.interact.enabled(),
  });

  const scales = colorService.getScales();
  const range = scales[`${KEYS.SCALE.COLOR}Range`];
  const [legendComponent] = components;
  const dock = legendComponent && legendComponent.layout.dock;
  if (range) {
    range.invert = dock === 'right' || dock === 'left' || rtl;
  }

  return {
    components,
    interactions,
    scales,
  };
}
