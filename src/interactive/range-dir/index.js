import component from './visual';
import event from '../range-event';

export default function (config, opts) {
  // if (!opts.actions.select.enabled()) {
  //   return {
  //     interactions: [],
  //     components: [],
  //   };
  // }

  const c = component(config);
  const e = event(config, opts, 'area');

  return {
    interactions: [e],
    components: [c],
  };
}
