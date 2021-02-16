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
});
