import getMinorTicks from '../minor';

describe('minor', () => {
  let count;

  describe('count 1', () => {
    beforeEach(() => {
      count = 1;
    });

    it('should return correct minor ticks when major ticks are positive', () => {
      expect(getMinorTicks({ majorTicks: [1, 2, 3], count })).to.deep.equal([1.5, 2.5]);
    });

    it('should return correct minor ticks when major ticks are negative', () => {
      expect(getMinorTicks({ majorTicks: [-1, -2, -3], count })).to.deep.equal([-1.5, -2.5]);
    });

    it('should return correct minor ticks when major ticks are in reversed order', () => {
      expect(getMinorTicks({ majorTicks: [3, 2, 1], count })).to.deep.equal([2.5, 1.5]);
    });
  });

  describe('count 3', () => {
    beforeEach(() => {
      count = 3;
    });

    it('should return correct minor ticks when major ticks are positive', () => {
      expect(getMinorTicks({ majorTicks: [1, 2, 3], count })).to.deep.equal([1.25, 1.5, 1.75, 2.25, 2.5, 2.75]);
    });

    it('should return correct minor ticks when major ticks are negative', () => {
      expect(getMinorTicks({ majorTicks: [-1, -2, -3], count })).to.deep.equal([
        -1.25,
        -1.5,
        -1.75,
        -2.25,
        -2.5,
        -2.75,
      ]);
    });

    it('should return correct minor ticks when major ticks are in reversed order', () => {
      expect(getMinorTicks({ majorTicks: [3, 2, 1], count })).to.deep.equal([2.75, 2.5, 2.25, 1.75, 1.5, 1.25]);
    });
  });
});
