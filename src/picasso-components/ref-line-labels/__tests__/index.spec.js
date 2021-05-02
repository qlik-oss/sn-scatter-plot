import refLineLabels from '..';

describe('require', () => {
  it('should contain correct value', () => {
    expect(refLineLabels.require).to.deep.equal(['renderer', 'symbol']);
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
