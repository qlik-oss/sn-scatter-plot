import getMeasureValue from '../measure-value';

describe('measure-value', () => {
  let sandbox;
  let dataset;
  let data;
  let raw;
  let formatter;
  let field;
  let fieldFn;
  let get;

  before(() => {
    sandbox = sinon.createSandbox();
    dataset = sandbox.stub();
  });

  beforeEach(() => {
    sandbox.reset();
    data = {
      source: {
        key: 'source-key',
        field: 'source-field',
      },
      label: 'label',
      value: 100,
    };
    raw = {
      isCustomFormatted: false,
      qIsAutoFormat: true,
      qNumFormat: {},
    };
    formatter = sandbox.stub().callsFake((value) => `formatted-${value}`);
    field = {
      raw: () => raw,
      formatter: () => formatter,
    };
    fieldFn = sandbox.stub();
    fieldFn.withArgs('source-field').returns(field);
    dataset.withArgs('source-key').returns({ field: fieldFn });
    get = () => getMeasureValue({ dataset, data });
  });

  after(() => {
    sandbox.restore();
  });

  it('should return label if field is custom formatted', () => {
    raw.isCustomFormatted = true;
    expect(get()).to.equal('label');
  });

  it('should return "-" if value is empty string', () => {
    data.value = '';
    expect(get()).to.equal('-');
  });

  it('should return "-" if value is NaN', () => {
    data.value = NaN;
    expect(get()).to.equal('-');
  });

  it('should return "-" if value is "NaN"', () => {
    data.value = 'NaN';
    expect(get()).to.equal('-');
  });

  it('should return formatted value', () => {
    expect(get()).to.equal('formatted-100');
  });
});
