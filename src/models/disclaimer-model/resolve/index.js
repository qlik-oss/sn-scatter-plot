import disclaimers from './disclaimers';

export default function resolveDisclaimer({ layoutService }) {
  let resolved;

  for (let i = 0; i < disclaimers.length; i++) {
    const disclaimer = disclaimers[i];
    if (disclaimer.condition({ layoutService })) {
      resolved = disclaimer;
      break;
    }
  }

  return resolved;
}
