import native from './native';
import pan from './pan';

export default function create({ chart, actions, zoomHandler, gestures }) {
  const hammer = {
    type: 'hammer',
    enable: true,
    gestures: [
      // Note: the order of these gestures are important
      ...[...gestures].sort((a, b) => (b.prio || 0) - (a.prio || 0)),
      pan({ chart, actions, zoomHandler }),
    ],
  };
  const interactions = [native({ chart, actions, zoomHandler }), hammer];
  return interactions;
}
