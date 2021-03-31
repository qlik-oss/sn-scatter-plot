/* eslint-disable func-names */
import event from './event';

export default function (config, options) {
  // if (!opts.actions.select.enabled()) {
  //   return {
  //     interactions: [],
  //     components: [],
  //   };
  // }

  if (!config.targets) {
    throw new Error("Missing 'targets' property");
  }

  const e = event(config, options);

  return {
    interactions: [e],
    components: [],
  };
}
