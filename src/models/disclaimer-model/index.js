import resolveDisclaimer from './resolve';

export default function createDisclaimerModel({ layoutService }) {
  const state = {
    disclaimer: resolveDisclaimer({ layoutService }),
  };

  return {
    query: {
      getHasSuppressingDisclaimer: () => !!(state.disclaimer && state.disclaimer.alignment === 'center'),
      getDisclaimer: () => state.disclaimer,
    },
  };
}
