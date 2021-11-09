import { makeDarker, makeBrighter } from '../adjust-color';

describe('makeBrighter', () => {
  it('should return correct darker color', () => {
    expect(makeDarker('#4477aa')).to.equal('rgb(0, 28, 69)');
  });
});

describe('makeBrighter', () => {
  it('should return correct brighter color', () => {
    expect(makeBrighter('#4477aa')).to.equal('rgb(96, 145, 197)');
  });
});
