import * as qae from '../qae';
import * as useCore from '../hooks/use-core';
import * as useModels from '../hooks/use-models';
import * as useSettings from '../hooks/use-settings';
import * as useRender from '../hooks/use-render';
import * as setupSnapshot from '../snapshot';
import supernova from '..';

describe('scatter-plot supernova', () => {
  let sandbox;
  let env;

  beforeAll(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(qae, 'default');
    sandbox.stub(useCore, 'default');
    sandbox.stub(useModels, 'default');
    sandbox.stub(useSettings, 'default');
    sandbox.stub(useRender, 'default');
    sandbox.stub(setupSnapshot, 'default');
  });

  beforeEach(() => {
    sandbox.reset();
    env = {
      flags: { isEnabled: sandbox.stub().returns(false) },
    };
    const scatterplot = supernova(env);
    scatterplot.component();
  });

  it('should call qae', () => {
    expect(qae.default).to.have.been.calledWithExactly(env);
  });

  it('should call all hooks', () => {
    expect(useCore.default).to.have.been.calledOnce;
    expect(useModels.default).to.have.been.calledOnce;
    expect(useSettings.default).to.have.been.calledOnce;
    expect(useRender.default).to.have.been.calledOnce;
    expect(setupSnapshot.default).to.have.been.calledOnce;
  });
});
