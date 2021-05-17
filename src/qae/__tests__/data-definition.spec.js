import * as dataFn from '../data-definition';

describe('setInitialSort', () => {
  let handler;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    handler = { setSorting: sandbox.stub(), getMeasures: sandbox.stub() };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should call setSorting function of handler when there are two measures', () => {
    handler.getMeasures.returns(['first measure', 'second measure']);
    dataFn.setInitialSort(handler);
    expect(handler.setSorting.withArgs([2, 1, 0])).to.have.been.calledOnce;
  });

  it('should call setSorting function of handler when there are three measures', () => {
    handler.getMeasures.returns(['first measure', 'second measure', 'third measure']);
    dataFn.setInitialSort(handler);
    expect(handler.setSorting.withArgs([3, 2, 1, 0])).to.have.been.calledOnce;
  });

  it('should not call setSorting function of handler when handler is not defined', () => {
    dataFn.setInitialSort();
    expect(handler.setSorting).to.not.have.been.called;
  });
});

describe('setColorVars', () => {
  let data;
  let handler;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    handler = { getMeasures: sandbox.stub().returns([]) };
    data = { color: { mode: 'byExpression' } };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should set mode of data color to primary if mode is byExpression', () => {
    dataFn.setColorVars(data, handler);
    expect(data.color.mode).to.deep.equal('primary');
  });

  it('should keep the currend mode of data color if mode is not byExpression', () => {
    data.color.mode = 'current mode';
    dataFn.setColorVars(data, handler);
    expect(data.color.mode).to.deep.equal('current mode');
  });

  it('should keep the currend mode of data color if mode is not byExpression, and handler is not defined', () => {
    data.color.mode = 'current mode';
    handler = undefined;
    dataFn.setColorVars(data, handler);
    expect(data.color.mode).to.deep.equal('current mode');
  });
});

describe('data definition', () => {
  let dataDef;

  before(() => {
    const env = {
      translator: {
        get: (x) => x,
      },
    };
    dataDef = dataFn.default(env);
  });

  describe('dimensions', () => {
    it('should require at least 1 dimension', () => {
      expect(dataDef.dimensions.min).to.equal(1);
    });

    it('should allow at most 1 dimension', () => {
      expect(dataDef.dimensions.max).to.equal(1);
    });

    it('should output correct description', () => {
      expect(dataDef.dimensions.description()).to.equal('Visualizations.Descriptions.Bubble');
    });
  });

  describe('measures', () => {
    it('should require at least 2 measures', () => {
      expect(dataDef.measures.min).to.equal(2);
    });

    it('should allow at most 3 measures', () => {
      expect(dataDef.measures.max).to.equal(3);
    });

    it('should output correct description', () => {
      expect(dataDef.measures.description('properties', 0)).to.equal('properties.xAxis');
      expect(dataDef.measures.description('properties', 1)).to.equal('properties.yAxis');
      expect(dataDef.measures.description('properties', 2)).to.equal('Visualizations.Descriptions.Size');
      expect(dataDef.measures.description('properties', 100)).to.equal('Visualizations.Descriptions.Color');
    });

    it('should have an add function which initialize sort for handler', () => {
      const measure = { qSortBy: {} };
      const sandbox = sinon.createSandbox();
      dataDef.measures.add(measure, 'data', { getMeasures: sandbox.stub() });
      expect(measure.qSortBy.qSortByNumeric).to.equal(-1);
    });

    it('should have an add function which initialize sort for handler', () => {
      const sandbox = sinon.createSandbox();
      const data = { color: { mode: 'byExpression' } };
      dataDef.measures.remove('measure', data, { getMeasures: sandbox.stub() });
      expect(data.color.mode).to.equal('primary');
    });
  });
});
