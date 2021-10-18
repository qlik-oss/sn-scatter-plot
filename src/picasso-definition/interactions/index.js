import native from './native';
import pan from './pan';
import pinch from './pinch';

export default function create({ chart, actions, viewHandler, gestures, colorService, context, models }) {
  const { chartModel } = models;
  const hammer = {
    type: 'hammer',
    enable: true,
    gestures: [
      // Note: the order of these gestures are important
      ...colorService.custom.legendInteractions(), // need higher priority than the tap in selectables.gestures
      ...[...gestures].sort((a, b) => (b.prio || 0) - (a.prio || 0)),
      pan({ chart, actions, viewHandler, context, chartModel }),
      pinch({ chart, actions, viewHandler, context, chartModel }),
    ],
  };
  const interactions = [native({ chart, actions, viewHandler, chartModel }), hammer];
  return interactions;
}
