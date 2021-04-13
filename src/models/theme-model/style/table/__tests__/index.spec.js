import createTable from '..';

describe('theme-model table', () => {
  it('should create a table', () => {
    const table = createTable();
    const tableObjectsTotal = 13;
    expect(table.length).to.equal(tableObjectsTotal);
  });
});
