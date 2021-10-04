import resolveDisclaimer from './resolve';

export default function createDisclaimerModel({ app, layoutService, flags }) {
  const state = {
    disclaimer: resolveDisclaimer({ app, layoutService, flags }),
  };

  return {
    query: {
      getHasSuppressingDisclaimer: () => !!(state.disclaimer && state.disclaimer.alignment === 'center'),
      getDisclaimer: () => state.disclaimer,
    },
  };
}
