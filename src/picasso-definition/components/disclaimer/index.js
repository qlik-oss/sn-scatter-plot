export default function createDisclaimer({ disclaimerModel, context, layoutService, picasso }) {
  const disclaimer = disclaimerModel.query.getDisclaimer();
  const formatter = picasso.formatter('q-number');

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
      label:
        disclaimer.key === 'OverviewData'
          ? translator.get(
              'properties.compression.providingOverviewOf',
              formatter('#.#A')(layoutService.getHyperCubeValue('qSize.qcy', 0))
            )
          : translator.get(`Object.Disclaimer.${disclaimer.key}`),
      rtl,
    },
  };
}
