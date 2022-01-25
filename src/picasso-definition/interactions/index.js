import native from './native';
import pan from './pan';
import pinch from './pinch';
import tapNavigationPanel from './tap-navigation-panel';
import tapMiniChart from './tap-mini-chart';

export default function create({
  chart,
  actions,
  viewHandler,
  gestures,
  colorService,
  tooltipService,
  rtl,
  layoutService,
}) {
  const tooltipInteractions = tooltipService.getInteractions();

  const hammer = {
    type: 'hammer',
    enable: true,
    gestures: [
      // Note: the order of these gestures are important
      ...colorService.custom.legendInteractions(), // need higher priority than the tap in selectables.gestures
      tapNavigationPanel({ chart, actions, viewHandler }),
      tapMiniChart({ chart, actions, viewHandler }),
      ...[...gestures].sort((a, b) => (b.prio || 0) - (a.prio || 0)),
      pan({ chart, actions, viewHandler, rtl, layoutService }),
      pinch({ chart, actions, viewHandler, rtl }),
      ...tooltipInteractions.gestures,
    ],
  };
  const interactions = [native({ chart, actions, viewHandler }), tooltipInteractions.native, hammer];
  return interactions;
}
