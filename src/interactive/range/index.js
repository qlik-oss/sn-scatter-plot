import component from './visual';
import event from './event';

export default function createRange(config, opts) {
  const c = component(config);
  const e = event(config, opts);

  return {
    interactions: [e].filter(Boolean),
    components: [c],
  };
}
