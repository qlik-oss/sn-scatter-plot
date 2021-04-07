import toObject from '..';

describe('to-object', () => {
  it('should return correct object when value is undefined', () => {
    expect(
      toObject({
        path: 'root.domain.sub',
        attribute: 'prop',
        value: undefined,
      })
    ).to.deep.equal({
      root: {
        domain: {
          sub: {},
        },
      },
    });
  });

  it('should return correct object when value is number', () => {
    expect(
      toObject({
        path: 'root.domain.sub',
        attribute: 'prop',
        value: 123,
      })
    ).to.deep.equal({
      root: {
        domain: {
          sub: {
            prop: 123,
          },
        },
      },
    });
  });

  it('should return correct object when value is string', () => {
    expect(
      toObject({
        path: 'root.domain.sub',
        attribute: 'prop',
        value: 'abc',
      })
    ).to.deep.equal({
      root: {
        domain: {
          sub: {
            prop: 'abc',
          },
        },
      },
    });
  });

  it('should return correct object when value is boolean', () => {
    expect(
      toObject({
        path: 'root.domain.sub',
        attribute: 'prop',
        value: false,
      })
    ).to.deep.equal({
      root: {
        domain: {
          sub: {
            prop: false,
          },
        },
      },
    });
  });

  it('should return correct object when path is single level', () => {
    expect(
      toObject({
        path: 'root',
        attribute: 'prop',
        value: 'abc',
      })
    ).to.deep.equal({
      root: {
        prop: 'abc',
      },
    });
  });

  it('should return correct object when path is empty', () => {
    expect(
      toObject({
        path: '',
        attribute: 'prop',
        value: 'abc',
      })
    ).to.deep.equal({
      prop: 'abc',
    });
  });
});
