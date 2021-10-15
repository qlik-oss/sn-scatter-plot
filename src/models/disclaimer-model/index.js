import resolveDisclaimer from './resolve';

export default function createDisclaimerModel({ layoutService, flags }) {
  const state = {
    disclaimer: resolveDisclaimer({ layoutService, flags }),
  };

  return {
    query: {
      getHasSuppressingDisclaimer: () => !!(state.disclaimer && state.disclaimer.alignment === 'center'),
      getDisclaimer: () => state.disclaimer,
    },
  };
}
