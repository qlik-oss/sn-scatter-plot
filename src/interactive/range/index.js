import component from './visual';
import event from './event';
import tap from './range-tap';

export default function createRange(config, opts) {
  const c = component(config);
  const e = event(config, opts);
  const t = config.onEdited ? tap(config, opts) : null;

  return {
    interactions: [e, t].filter(Boolean),
    components: [c],
  };
}
