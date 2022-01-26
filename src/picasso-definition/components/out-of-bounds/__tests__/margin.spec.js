import { createSpace } from '../index';
import * as KEYS from '../../../../constants/keys';

describe('out of bounds - margin', () => {
  let sandbox;
  let dockService;
  let components;

  before(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(KEYS, 'default').get(() => ({
      COMPONENT: {
        OUT_OF_BOUNDS: 'oobComponentKey',
      },
    }));
    dockService = {
      meta: {
        x: { opposite: 'dock-opposite-x' },
        y: { opposite: 'dock-opposite-y' },
      },
    };
    const models = { dockService };
    components = createSpace({ models });
  });

  after(() => sandbox.restore());

  it('should create two componennts', () => {
    expect(components).to.have.length(2);
  });

  it('should with correct keys', () => {
    expect(components.map((c) => c.key)).to.deep.equals([
      'oobComponentKey-space-dock-opposite-x',
      'oobComponentKey-space-dock-opposite-y',
    ]);
  });

  it('should with correct dock', () => {
    expect(components.map((c) => c.layout)).to.deep.equals([{ dock: 'dock-opposite-x' }, { dock: 'dock-opposite-y' }]);
  });
});
