import * as d3Color from 'd3-color';
import isDark from '../is-dark';

jest.mock('d3-color', () => ({ hcl: jest.fn() }));

describe('is-dark', () => {
  beforeAll(() => {
    d3Color.hcl.mockImplementation(() => ({ l: 60 }));
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return correct value', () => {
    expect(isDark('dark blue')).to.be.true;
    expect(d3Color.hcl.mock.calls[0][0]).to.equal('dark blue');
  });
});
