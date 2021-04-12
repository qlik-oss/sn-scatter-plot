import * as getTable from '../table';
import * as resolveValue from '../resolve';
import * as toObject from '../to-object';
import resolveStyle from '..';

describe('style', () => {
  let sandbox;
  let transform;
  let table;
  let theme;
  let resolve;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    transform = sandbox.stub().returns(15);
    table = [
      ['object', 'grid.line.major', 'color', '#cccccc'],
      ['object', 'grid.line.major', 'value', 11, transform],
    ];
    sandbox.stub(getTable, 'default').returns(table);
    sandbox.stub(resolveValue, 'default').callsFake((args) => args.defaultValue);
    sandbox.stub(toObject, 'default');
    toObject.default.onCall(0).returns({
      grid: {
        line: {
          major: {
            color: '#cccccc',
          },
        },
      },
    });
    toObject.default.onCall(1).returns({
      grid: {
        line: {
          major: {
            value: 15,
          },
        },
      },
    });
    resolve = () => resolveStyle({ theme });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should get table', () => {
    resolve();
    expect(getTable.default).to.have.been.calledOnce;
  });

  it('should resolve value for each row', () => {
    resolve();
    expect(resolveValue.default).to.have.been.calledTwice;
    expect(resolveValue.default.getCall(0).args[0]).to.deep.equal({
      theme,
      base: 'object',
      path: 'grid.line.major',
      attribute: 'color',
      defaultValue: '#cccccc',
    });
    expect(resolveValue.default.getCall(1).args[0]).to.deep.equal({
      theme,
      base: 'object',
      path: 'grid.line.major',
      attribute: 'value',
      defaultValue: 11,
    });
  });

  it('should transform resolved value for each row if has transform fn', () => {
    resolve();
    expect(transform.withArgs(11)).to.have.been.calledOnce;
  });

  it('should call toObject for each row', () => {
    resolve();
    expect(toObject.default).to.have.been.calledTwice;
    expect(toObject.default.getCall(0).args[0]).to.deep.equal({
      path: 'grid.line.major',
      attribute: 'color',
      value: '#cccccc',
    });
    expect(toObject.default.getCall(1).args[0]).to.deep.equal({
      path: 'grid.line.major',
      attribute: 'value',
      value: 15,
    });
  });

  it('should return correct style', () => {
    expect(resolve()).to.deep.equal({
      grid: {
        line: {
          major: {
            color: '#cccccc',
            value: 15,
          },
        },
      },
    });
  });
});
