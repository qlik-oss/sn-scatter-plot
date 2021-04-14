import native from './native';
import pan from './pan';

export default function create({ chart, actions, zoomHandler, gestures, colorService }) {
  const hammer = {
    type: 'hammer',
    enable: true,
    gestures: [
      // Note: the order of these gestures are important
      ...colorService.custom.legendInteractions(), // need higher priority than the tap in selectables.gestures
      ...[...gestures].sort((a, b) => (b.prio || 0) - (a.prio || 0)),
      pan({ chart, actions, zoomHandler }),
    ],
  };
  const interactions = [native({ chart, actions, zoomHandler }), hammer];
  return interactions;
}
