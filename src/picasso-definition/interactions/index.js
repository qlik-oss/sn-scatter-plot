import native from './native';
import pan from './pan';
import pinch from './pinch';
import tapMiniChart from './tap-mini-chart';

export default function create({ chart, actions, viewHandler, gestures, colorService, rtl }) {
  const hammer = {
    type: 'hammer',
    enable: true,
    gestures: [
      // Note: the order of these gestures are important
      ...colorService.custom.legendInteractions(), // need higher priority than the tap in selectables.gestures
      tapMiniChart({ chart, actions, viewHandler }),
      ...[...gestures].sort((a, b) => (b.prio || 0) - (a.prio || 0)),
      pan({ chart, actions, viewHandler, rtl }),
      pinch({ chart, actions, viewHandler, rtl }),
    ],
  };
  const interactions = [native({ chart, actions, viewHandler }), hammer];
  return interactions;
}
