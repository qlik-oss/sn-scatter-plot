import resolveDisclaimer from './resolve';

export default function createDisclaimerModel({ layoutModel, flags }) {
  const state = {
    disclaimer: resolveDisclaimer({ layoutModel, flags }),
  };

  return {
    query: {
      getHasSuppressingDisclaimer: () => !!(state.disclaimer && state.disclaimer.alignment === 'center'),
      getDisclaimer: () => state.disclaimer,
    },
  };
}
