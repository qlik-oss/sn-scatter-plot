import oobHelper from '../oob-helper';

describe('getDefaultSettings', () => {
  it('should return correct default oob settings', () => {
    expect(oobHelper.getDefaultSettings({ size: 11, fill: 'red', alignment: 'vertical' })).to.deep.equal({
      show: true,
      type: 'n-polygon',
      fill: 'red',
      stroke: '#000',
      strokeWidth: 0,
      size: 11,
      sides: 3,
      startAngle: -90,
      alignment: 'vertical',
    });
  });

  it('should return correct default oob settings when the parameters are default', () => {
    expect(oobHelper.getDefaultSettings()).to.deep.equal({
      show: true,
      type: 'n-polygon',
      fill: '#999',
      stroke: '#000',
      strokeWidth: 0,
      size: 10,
      sides: 3,
      startAngle: -90,
      alignment: undefined,
    });
  });
});

describe('createOob', () => {
  let sandbox;
  let symbol;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    symbol = sandbox.stub();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct symbole, when the majorAxis is x and dock at start', () => {
    symbol.withArgs({ size: 8, x: 4, y: 3, startAngle: 180 }).returns('correct symbol');
    expect(
      oobHelper.createOob({
        oob: { size: 8 },
        dockValue: 0,
        boxCenter: 1,
        majorAxis: 'x',
        rendWidth: 2,
        rendHeight: 3,
        symbol,
      })
    ).to.deep.equal('correct symbol');
  });

  it('should return correct symbole, when the majorAxis is x and dock at end', () => {
    symbol.withArgs({ size: 8, x: -2, y: 3, startAngle: 0 }).returns('correct symbol');
    expect(
      oobHelper.createOob({
        oob: { size: 8 },
        dockValue: 1,
        boxCenter: 1,
        majorAxis: 'x',
        rendWidth: 2,
        rendHeight: 3,
        symbol,
      })
    ).to.deep.equal('correct symbol');
  });

  it('should return correct symbole, when the majorAxis is y and dock at start', () => {
    symbol.withArgs({ size: 8, x: 2, y: -1, startAngle: -90 }).returns('correct symbol');
    expect(
      oobHelper.createOob({
        oob: { size: 8 },
        dockValue: 0,
        boxCenter: 1,
        majorAxis: 'y',
        rendWidth: 2,
        rendHeight: 3,
        symbol,
      })
    ).to.deep.equal('correct symbol');
  });

  it('should return correct symbole, when the majorAxis is y and dock at end', () => {
    symbol.withArgs({ size: 8, x: 2, y: 4, startAngle: 90 }).returns('correct symbol');
    expect(
      oobHelper.createOob({
        oob: { size: 8 },
        dockValue: 1,
        boxCenter: 1,
        majorAxis: 'y',
        rendWidth: 2,
        rendHeight: 3,
        symbol,
      })
    ).to.deep.equal('correct symbol');
  });
});
