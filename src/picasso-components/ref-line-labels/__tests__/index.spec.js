import refLineLabels from '..';

describe('resolveLabels', () => {
  const labels = [
    { value: 100, scale: 'x', text: '100' },
    { value: 200, scale: 'y', text: '200' },
    { value: () => 300, scale: 'x', text: '300' },
  ];

  it('should return correct values', () => {
    const result = refLineLabels.resolveLabels(labels);
    expect(result).to.deep.equal([
      { value: 100, scale: 'x', text: '100' },
      { value: 200, scale: 'y', text: '200' },
      { value: 300, scale: 'x', text: '300' },
    ]);
  });
});

describe('require', () => {
  it('should contain correct value', () => {
    expect(refLineLabels.require).to.deep.equal(['renderer']);
  });
});

describe('defaultSettings', () => {
  it('should contain correct values', () => {
    expect(refLineLabels.defaultSettings).to.deep.equal({
      layout: {
        displayOrder: 0,
        prioOrder: 0,
      },
    });
  });
});
