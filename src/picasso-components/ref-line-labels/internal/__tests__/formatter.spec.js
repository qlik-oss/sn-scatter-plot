import getFormatter from '../formatter';

describe('getFormatter', () => {
  it('should return undefined when scale is undefined', () => {
    const scale = undefined;
    const result = getFormatter(scale);
    expect(result).to.deep.equal(undefined);
  });

  it('should return null when scale.data() does not return fields', () => {
    const scale = {
      data: sinon.stub().returns('not fields'),
    };
    const result = getFormatter(scale);
    expect(result).to.deep.equal(null);
  });

  it('should return null when scale.data().fields is not an array', () => {
    const scale = {
      data: sinon.stub().returns({ fields: false }),
    };
    const result = getFormatter(scale);
    expect(result).to.deep.equal(null);
  });

  it('should return correct formatter in scale.data().fields[0]', () => {
    const scale = {
      data: sinon
        .stub()
        .returns({ fields: [{ formatter: sinon.stub().returns('correct formatter') }, 'the 2nd element of fields'] }),
    };
    const result = getFormatter(scale);
    expect(result).to.deep.equal('correct formatter');
  });
});
