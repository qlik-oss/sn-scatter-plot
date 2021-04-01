import component from './visual';
import tap from './range-tap';
import event from '../range-event';

export default function (config, opts) {
  const c = component(config);
  const e = event(config, opts, 'range');
  const t = config.onEdited ? tap(config, opts) : null;

  return {
    interactions: [t, e].filter(Boolean),
    components: [c],
  };
}
