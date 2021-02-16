import dataFn from '../data-definition';

describe('data definition', () => {
  let dataDef;

  before(() => {
    const env = {
      translator: {
        get: (x) => x,
      },
    };
    dataDef = dataFn(env);
  });

  describe('dimensions', () => {
    it('should require at least 1 dimension', () => {
      expect(dataDef.dimensions.min).to.equal(1);
    });

    it('should allow at most 1 dimension', () => {
      expect(dataDef.dimensions.max).to.equal(1);
    });
  });

  describe('measures', () => {
    it('should require at least 2 measures', () => {
      expect(dataDef.measures.min).to.equal(2);
    });

    it('should allow at most 3 measures', () => {
      expect(dataDef.measures.max).to.equal(3);
    });
  });
});
