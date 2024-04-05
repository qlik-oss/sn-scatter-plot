import * as d3Color from 'd3-color';
import * as adjustColor from '../adjust-color';

jest.mock('d3-color', () => ({ hcl: jest.fn() }));

describe('adjust-color', () => {
  beforeAll(() => {
    d3Color.hcl.mockImplementation(() => ({ l: undefined }));
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should make the color darker', () => {
    const mockedColor = { l: 48.19379114255456, toString: jest.fn() };
    d3Color.hcl.mockImplementation(() => mockedColor);
    adjustColor.makeDarker('#4477aa');
    expect(mockedColor.l).to.equal(8.19379114255456);
    expect(mockedColor.toString.mock.calls.length).to.equal(1);
    expect(d3Color.hcl.mock.calls[0][0]).to.equal('#4477aa');
  });

  it('should make the color brighter', () => {
    const mockedColor = { l: 48.19379114255456, toString: jest.fn() };
    d3Color.hcl.mockImplementation(() => mockedColor);
    adjustColor.makeBrighter('#4477aa');
    expect(mockedColor.l).to.equal(58.19379114255456);
    expect(mockedColor.toString.mock.calls.length).to.equal(1);
    expect(d3Color.hcl.mock.calls[0][0]).to.equal('#4477aa');
  });
});
