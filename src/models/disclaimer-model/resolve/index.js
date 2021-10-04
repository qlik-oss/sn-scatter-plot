import disclaimers from './disclaimers';

export default function resolveDisclaimer({ app, layoutService, flags }) {
  let resolved;

  for (let i = 0; i < disclaimers.length; i++) {
    const disclaimer = disclaimers[i];
    if (disclaimer.condition({ app, layoutService, flags })) {
      resolved = disclaimer;
      break;
    }
  }

  return resolved;
}
