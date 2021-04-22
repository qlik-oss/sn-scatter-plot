export default function createDisclaimer({ disclaimerModel, context }) {
  const disclaimer = disclaimerModel.query.getDisclaimer();

  if (!disclaimer) {
    return false;
  }

  const { rtl, translator } = context;

  return {
    key: 'disclaimer',
    type: 'disclaimer',
    dock: disclaimer.alignment,
    show: true,
    settings: {
      label: translator.get(`Object.Disclaimer.${disclaimer.key}`),
      rtl,
    },
  };
}
