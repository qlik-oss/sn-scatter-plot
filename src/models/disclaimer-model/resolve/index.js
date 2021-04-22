import disclaimers from './disclaimers';

export default function resolveDisclaimer({ layoutModel, flags }) {
  let resolved;

  for (let i = 0; i < disclaimers.length; i++) {
    const disclaimer = disclaimers[i];
    if (disclaimer.condition({ layoutModel, flags })) {
      resolved = disclaimer;
      break;
    }
  }

  return resolved;
}
