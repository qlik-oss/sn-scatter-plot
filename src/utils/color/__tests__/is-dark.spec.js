import * as d3Color from 'd3-color';
import isDark from '../is-dark';

describe('isDark', () => {
  it('should return correct boolean value', () => {
    const sandbox = sinon.createSandbox();
    sandbox.stub(d3Color, 'hcl').withArgs('dark blue').returns({ l: 60 });
    expect(isDark('dark blue')).to.equal(true);
    sandbox.restore();
  });
});
