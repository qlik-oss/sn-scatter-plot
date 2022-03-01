import createObjectDefinition from '../object-definition';

describe('object-definition', () => {
  let definition;

  beforeEach(() => {
    definition = createObjectDefinition();
  });

  it('should return an object definition', () => {
    expect(definition).to.be.a('object');
  });

  it('should have correct properties', () => {
    expect(definition).to.have.all.keys([
      'version',
      'color',
      'dataPoint',
      'disableNavMenu',
      'footnote',
      'labels',
      'gridLine',
      'legend',
      'navigation',
      'qHyperCubeDef',
      'refLine',
      'showTitles',
      'showDetails',
      'showDisclaimer',
      'subtitle',
      'title',
      'tooltip',
      'trendLines',
      'xAxis',
      'yAxis',
    ]);
  });

  it('should have correct qHyperCubeDef', () => {
    expect(definition.qHyperCubeDef).to.deep.equal({
      qDimensions: [],
      qMeasures: [],
      qSuppressMissing: true,
    });
  });

  it('should have correct showTitles', () => {
    expect(definition.showTitles).to.be.true;
  });

  it('should have correct title', () => {
    expect(definition.title).to.equal('');
  });

  it('should have correct subtitle', () => {
    expect(definition.subtitle).to.equal('');
  });

  it('should have correct footnote', () => {
    expect(definition.footnote).to.equal('');
  });
});
