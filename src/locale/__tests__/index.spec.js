import * as all from '../all.json';
import autoRegister from '..';

describe('autoRegister', () => {
  let sandbox;
  let create;
  let translator;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    translator = { get: sandbox.stub(), add: sandbox.stub() };
    sandbox.stub(all, 'default').value({ properties_dataPoints_labelmode_share: false });
    create = () => autoRegister(translator);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should not call translator.add if translated string is different from its id', () => {
    translator.get.returns('');
    create();
    expect(translator.add).to.not.have.been.called;
  });

  it('should call translator.add if translated string is the same as its id', () => {
    translator.get.returns('properties.compression.providingOverviewOf');
    create();
    expect(translator.add).to.have.been.called;
  });
});
