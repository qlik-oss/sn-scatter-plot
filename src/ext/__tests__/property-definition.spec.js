import propertyPanelDef from '../property-definition';

describe('property panel definition', () => {
  const env = {
    translator: {
      get: (text) => `translated-${text}`,
    },
  };
  let def;
  beforeEach(() => {
    def = propertyPanelDef(env);
  });

  it('should have correct settings', () => {
    expect(Object.keys(def.items)).to.eql(['data', 'addons', 'settings']);
  });

  it('should only show bubble sizes when appropriate', () => {
    const showFn = def.items.settings.items.presentation.items.bubbleSizeItems.items.bubbleSizes.show;
    expect(showFn({ qHyperCubeDef: { qMeasures: ['m1', 'm2', 'm3'] } }), 'not when there are more than 2 measures').to
      .be.false;
  });

  it('should only show range bubble sizes when appropriate', () => {
    const showFn = def.items.settings.items.presentation.items.bubbleSizeItems.items.rangeBubbleSizes.show;
    expect(showFn({ qHyperCubeDef: { qMeasures: ['m1', 'm2', 'm3'] } }), 'when there are more than 2 measures').to.be
      .true;
  });

  it('should only show queryLevel when appropriate', () => {
    const showFn = def.items.settings.items.presentation.items.queryLevel.show;
    expect(
      showFn({}, { layout: { qHyperCube: { qDimensionInfo: [{ qCardinal: 1001 }] } } }),
      'when qCardinal is larger than 1000'
    ).to.be.true;
  });

  it('should only show grid lines when appropriate', () => {
    const showFn = def.items.settings.items.presentation.items.gridLines.items.gridSpacing.show;
    expect(showFn({ gridLine: { auto: true } }), 'not when gridLine is set to auto').to.be.false;
  });

  it('should return correct color options', () => {
    const optionFn = def.items.settings.items.colorsAndLegend.items.colors.items.colorMode.options;
    expect(
      optionFn({ qHyperCubeDef: { qMeasures: ['m1', 'm2', 'm3'] } }),
      'when there is at least one measure'
    ).to.deep.equal([
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

  it('should return correct color options', () => {
    const optionFn = def.items.settings.items.colorsAndLegend.items.colors.items.colorMode.options;
    expect(optionFn({ qHyperCubeDef: {} }), 'when qHyperCubeDef is empty').to.deep.equal([
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

  it('should only show legend settings when appropriate', () => {
    const showFn = def.items.settings.items.colorsAndLegend.items.legend.show;
    expect(showFn({ color: { auto: true } }), 'not when coloring is set to auto').to.be.false;
    expect(showFn({ color: { auto: false, mode: 'primary' } }), 'not when coloring by single color').to.be.false;
    expect(showFn({ color: { auto: false, mode: 'byDimension' } }), 'when coloring by dimension').to.be.true;
    expect(showFn({ color: { auto: false, mode: 'byMeasure' } }), 'when coloring by measure').to.be.true;
    expect(
      showFn({ color: { auto: false, mode: 'byExpression' } }),
      'when coloring by expression that is not a color code'
    ).to.be.true;
    expect(
      showFn({ color: { auto: false, mode: 'byExpression', expressionIsColor: true } }),
      'not when coloring by expression that is a color code'
    ).to.be.false;
  });

  it('should show correct translated xAxis', () => {
    const labelFn = def.items.settings.items.xAxis.label;
    const properties = 'some properties';
    const sandbox = sinon.createSandbox();
    let handler = { getMeasureLayouts: sandbox.stub().returns([{ qError: false, qFallbackTitle: 'fb title' }]) };
    expect(labelFn(properties, handler), 'with info when there is no error').to.deep.equal(
      'translated-properties.xAxisWithInfo'
    );
    handler = { getMeasureLayouts: sandbox.stub().returns([{ qError: true, qFallbackTitle: 'fb title' }]) };
    expect(labelFn(properties, handler), 'with no info when there is an error').to.deep.equal(
      'translated-properties.xAxis'
    );
    sandbox.restore();
  });

  it('should only show xAxis when appropriate', () => {
    const showFn = def.items.settings.items.xAxis.items.axis.items.dock.show;
    expect(showFn({ xAxis: { show: 'none' } }), 'not when show property is set to none').to.be.false;
  });

  it('should only show xAxis grid when appropriate', () => {
    const showFn = def.items.settings.items.xAxis.items.axis.items.spacing.show;
    expect(showFn({ xAxis: { show: 'none' } }), 'not when show property is set to none').to.be.false;
  });

  it('should only show xAxis min max when appropriate', () => {
    const showFn = def.items.settings.items.xAxis.items.minMax.items.minMax.show;
    expect(showFn({ xAxis: { autoMinMax: true } }), 'not when autoMinMax is true').to.be.false;
  });

  it('should only show xAxis min when appropriate', () => {
    const showFn = def.items.settings.items.xAxis.items.minMax.items.min.show;
    expect(showFn({ xAxis: { autoMinMax: false, minMax: 'min' } }), 'when autoMinMax is false and minMax is set to min')
      .to.be.true;
  });

  it('should detect invalidity of xAxis min value correctly', () => {
    const validFn = def.items.settings.items.xAxis.items.minMax.items.min.invalid;
    expect(validFn({ xAxis: { min: 1, max: -1, minMax: 'minMax' } }), 'when min is larger than max').to.be.true;
    expect(validFn({ xAxis: { min: 1, max: -1, minMax: 'min' } }), 'when the minMax property is set to min').to.be
      .false;
  });

  it('should only show xAxis max when appropriate', () => {
    const showFn = def.items.settings.items.xAxis.items.minMax.items.max.show;
    expect(showFn({ xAxis: { autoMinMax: false, minMax: 'max' } }), 'when autoMinMax is false and minMax is set to max')
      .to.be.true;
  });

  it('should detect invalidity of xAxis max value correctly', () => {
    const validFn = def.items.settings.items.xAxis.items.minMax.items.max.invalid;
    expect(validFn({ xAxis: { min: 1, max: -1, minMax: 'minMax' } }), 'when min is larger than max').to.be.true;
    expect(validFn({ xAxis: { min: 1, max: -1, minMax: 'max' } }), 'when the minMax property is set to max').to.be
      .false;
  });

  it('should show correct translated yAxis', () => {
    const labelFn = def.items.settings.items.yAxis.label;
    const properties = 'some properties';
    const sandbox = sinon.createSandbox();
    let handler = { getMeasureLayouts: sandbox.stub().returns([{}, { qError: false, qFallbackTitle: 'fb title' }]) };
    expect(labelFn(properties, handler), 'with info when there is no error').to.deep.equal(
      'translated-properties.yAxisWithInfo'
    );
    handler = { getMeasureLayouts: sandbox.stub().returns([{ qError: true, qFallbackTitle: 'fb title' }]) };
    expect(labelFn(properties, handler), 'with no info when there is an error').to.deep.equal(
      'translated-properties.yAxis'
    );
    sandbox.restore();
  });

  it('should only show yAxis when appropriate', () => {
    const showFn = def.items.settings.items.yAxis.items.axis.items.dock.show;
    expect(showFn({ yAxis: { show: 'none' } }), 'not when show property is set to none').to.be.false;
  });

  it('should return correct yMirrorMode options', () => {
    const optionFn = def.items.settings.items.yAxis.items.axis.items.dock.options;
    expect(optionFn('data', 'handler', { yMirrorMode: true }), 'when yMirrorMode is set to true').to.deep.equal([
      { value: 'near', translation: 'properties.dock.right' },
      { value: 'far', translation: 'properties.dock.left' },
    ]);
    expect(optionFn('data', 'handler', { yMirrorMode: false }), 'when yMirrorMode is set to false').to.deep.equal([
      { value: 'near', translation: 'properties.dock.left' },
      { value: 'far', translation: 'properties.dock.right' },
    ]);
  });

  it('should only show yAxis grid when appropriate', () => {
    const showFn = def.items.settings.items.yAxis.items.axis.items.spacing.show;
    expect(showFn({ yAxis: { show: 'none' } }), 'not when show property is set to none').to.be.false;
  });

  it('should only show yAxis min max when appropriate', () => {
    const showFn = def.items.settings.items.yAxis.items.minMax.items.minMax.show;
    expect(showFn({ yAxis: { autoMinMax: true } }), 'not when autoMinMax is true').to.be.false;
  });

  it('should only show yAxis min when appropriate', () => {
    const showFn = def.items.settings.items.yAxis.items.minMax.items.min.show;
    expect(showFn({ yAxis: { autoMinMax: false, minMax: 'min' } }), 'when autoMinMax is false and minMax is set to min')
      .to.be.true;
  });

  it('should detect invalidity of yAxis min value correctly', () => {
    const validFn = def.items.settings.items.yAxis.items.minMax.items.min.invalid;
    expect(validFn({ yAxis: { min: 1, max: -1, minMax: 'minMax' } }), 'when min is larger than max').to.be.true;
    expect(validFn({ yAxis: { min: 1, max: -1, minMax: 'min' } }), 'when the minMax property is set to min').to.be
      .false;
  });

  it('should only show yAxis max when appropriate', () => {
    const showFn = def.items.settings.items.yAxis.items.minMax.items.max.show;
    expect(showFn({ yAxis: { autoMinMax: false, minMax: 'max' } }), 'when autoMinMax is false and minMax is set to max')
      .to.be.true;
  });

  it('should detect invalidity of yAxis max value correctly', () => {
    const validFn = def.items.settings.items.yAxis.items.minMax.items.max.invalid;
    expect(validFn({ yAxis: { min: 1, max: -1, minMax: 'minMax' } }), 'when min is larger than max').to.be.true;
    expect(validFn({ yAxis: { min: 1, max: -1, minMax: 'max' } }), 'when the minMax property is set to max').to.be
      .false;
  });
});
