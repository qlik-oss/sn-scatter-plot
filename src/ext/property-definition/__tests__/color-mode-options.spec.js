import colorModeOptions from '../color-mode-options';

describe('colorModeOptions', () => {
  let data;

  beforeEach(() => {
    data = { qHyperCubeDef: { qMeasures: [] } };
  });

  it('should return correct options if there is no measure', () => {
    expect(colorModeOptions(data)).to.deep.equal([
      {
        value: 'primary',
        translation: 'properties.colorMode.primary',
      },
      {
        value: 'byDimension',
        translation: 'properties.colorMode.byDimension',
      },
      {
        value: 'byMeasure',
        translation: 'properties.colorMode.byMeasure',
      },
    ]);
  });

  it('should return correct options if data.qHyperCubeDef.qMeasures.length = 1', () => {
    data.qHyperCubeDef.qMeasures.length = 1;
    expect(colorModeOptions(data)).to.deep.equal([
      {
        value: 'primary',
        translation: 'properties.colorMode.primary',
      },
      {
        value: 'byDimension',
        translation: 'properties.colorMode.byDimension',
      },
      {
        value: 'byMeasure',
        translation: 'properties.colorMode.byMeasure',
      },
      {
        value: 'byExpression',
        translation: 'properties.colorMode.byExpression',
      },
    ]);
  });

  it('should return correct options if data.qHyperCubeDef.qMeasures.length > 1', () => {
    data.qHyperCubeDef.qMeasures.length = 2;
    expect(colorModeOptions(data)).to.deep.equal([
      {
        value: 'primary',
        translation: 'properties.colorMode.primary',
      },
      {
        value: 'byDimension',
        translation: 'properties.colorMode.byDimension',
      },
      {
        value: 'byMeasure',
        translation: 'properties.colorMode.byMeasure',
      },
      {
        value: 'byExpression',
        translation: 'properties.colorMode.byExpression',
      },
    ]);
  });
});
