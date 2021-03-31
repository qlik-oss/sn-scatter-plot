import component from './visual';
import event from './event';

export default function (cfg, opts) {
  // if (!opts.actions.select.enabled()) {
  //   return {
  //     interactions: [],
  //     components: [],
  //   };
  // }

  if (!cfg.componentTargetKey) {
    throw new Error("Missing 'componentTargetKey' property");
  }

  const config = { key: 'lasso', ...cfg };

  const c = component(config, opts);
  const e = event(config, opts);

  return {
    interactions: [e],
    components: [c],
  };
}
