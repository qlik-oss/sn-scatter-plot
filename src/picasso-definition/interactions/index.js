import native from './native';
import pan from './pan';
import pinch from './pinch';
import tapButton from './tap-button';
import tapMiniChart from './tap-mini-chart';

export default function create({ chart, actions, viewHandler, gestures, models, rtl }) {
  const { colorService, tooltipService } = models;
  const tooltipInteractions = tooltipService.getInteractions();

  const hammer = {
    type: 'hammer',
    enable: true,
    gestures: [
      // Note: the order of these gestures are important
      ...colorService.custom.legendInteractions(), // need higher priority than the tap in selectables.gestures
      tapButton({}),
      tapMiniChart({ viewHandler, rtl }),
      ...[...gestures].sort((a, b) => (b.prio || 0) - (a.prio || 0)),
      pan({ chart, actions, viewHandler, rtl }),
      pinch({ chart, actions, viewHandler, rtl, models }),
      ...tooltipInteractions.gestures,
    ],
  };
  const interactions = [native({ chart, actions, viewHandler, models }), tooltipInteractions.native, hammer];
  return interactions;
}
