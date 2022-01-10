import JSONPatch from '../json-patch';

describe('json-patch generate', () => {
  it('should return empty patches if the original and the new objects are identical', () => {
    const original = {
      a: { b: { c: 1 } },
    };
    const newData = {
      a: { b: { c: 1 } },
    };
    const patches = JSONPatch.generate(original, newData);
    expect(patches).to.deep.equals([]);
  });

  it('should return add operation in patches if the original does not have a property from the new', () => {
    const original = {
      a1: { a2: { a3: 1 } },
    };
    const newData = {
      a1: { a2: { a3: 1 }, b1: { a1: 2 } },
    };
    const patches = JSONPatch.generate(original, newData);
    expect(patches).to.deep.equals([
      {
        op: 'add',
        path: '/a1/b1',
        value: { a1: 2 },
      },
    ]);
  });

  it('should return replce operation in patches if the original and the new has the same property but different value, and this value is a simple property (bool/string/number)', () => {
    const original = {
      a1: { a2: { a3: 1 } },
    };
    const newData = {
      a1: { a2: { a3: 'one' } },
    };
    const patches = JSONPatch.generate(original, newData);
    expect(patches).to.deep.equals([
      {
        op: 'replace',
        path: '/a1/a2/a3',
        value: 'one',
      },
    ]);
  });

  it('should return replace operation in patches if the original and the new has the same property but different value, and this value is a simple property (bool/string/number)', () => {
    const original = {
      a1: { a2: { a3: 1 } },
    };
    const newData = {
      a1: { a2: { a3: 'one' } },
    };
    const patches = JSONPatch.generate(original, newData);
    expect(patches).to.deep.equals([
      {
        op: 'replace',
        path: '/a1/a2/a3',
        value: 'one',
      },
    ]);
  });

  it('should return remove operation in patches if the new does not have a property from the original', () => {
    const original = {
      a1: { a2: { a3: 1 }, b1: { a1: 2 } },
    };
    const newData = {
      a1: { a2: { a3: 1 } },
    };
    const patches = JSONPatch.generate(original, newData);
    expect(patches).to.deep.equals([
      {
        op: 'remove',
        path: '/a1/b1',
      },
    ]);
  });

  it('change to empty array should generate a replace', () => {
    const original = {
      list: ['a'],
    };
    const newData = {
      list: [],
    };
    const patches = JSONPatch.generate(original, newData);
    expect(patches).to.deep.equals([
      {
        op: 'replace',
        path: '/list',
        value: [],
      },
    ]);
  });
});
