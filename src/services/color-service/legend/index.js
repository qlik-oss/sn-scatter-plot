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
  const range = scales[`${KEYS.SCALE.COLOR}Range`];
  const [legendComponent] = components;
  const dock = legendComponent && legendComponent.layout.dock;
  if (range && (dock === 'right' || dock === 'left')) {
    range.invert = true;
  }

  return {
    components,
    interactions,
    scales,
  };
}
