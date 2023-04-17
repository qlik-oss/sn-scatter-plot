// eslint-disable-next-line no-unused-vars
import stardust from '@nebula.js/stardust';
import * as lassoIcon from '../lasso-icon';
import useLasso from '../use-lasso';

describe('use-lasso', () => {
  let sandbox;
  let create;
  let constraints;
  let enabled;
  let setEnabled;
  let active;
  let setActive;
  let layout;
  let fn;
  let conditionArray;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    constraints = { active: false, select: false };
    layout = {
      qSelectionInfo: { qInSelections: false },
      qHyperCube: { qDimensionInfo: [{ qIsOneAndOnlyOne: false }] },
    };
    active = false;
    enabled = false;
    setEnabled = sandbox.stub();
    setActive = sandbox.stub();
    sandbox.stub(stardust, 'useConstraints').returns(constraints);
    sandbox.stub(stardust, 'useState');
    stardust.useState.onFirstCall().returns([enabled, setEnabled]);
    stardust.useState.onSecondCall().returns([active, setActive]);
    sandbox.stub(stardust, 'useLayout').returns(layout);
    sandbox.stub(stardust, 'useEffect');
    sandbox.stub(stardust, 'useAction');
    sandbox.stub(stardust, 'useTranslator');
    stardust.useTranslator.returns({
      get: (text) => `${text}-translated`,
    });
    sandbox.stub(lassoIcon, 'default').value('some-icons');
    create = () => useLasso();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('useEffect', () => {
    it('should have the second argument being an array having constraints as the only element', () => {
      create();
      conditionArray = stardust.useEffect.getCall(0).args[1];
      expect(conditionArray).to.deep.equal([{ active: false, select: false }]);
    });

    describe('the function in the argument list', () => {
      it('should return nothing (undefined) in constraints is undefined', () => {
        stardust.useConstraints.returns(undefined);
        create();
        fn = stardust.useEffect.getCall(0).args[0];
        expect(fn()).to.equal(undefined);
      });

      it('should call setEnabled if constraints is defined', () => {
        create();
        fn = stardust.useEffect.getCall(0).args[0];
        fn();
        expect(setEnabled).to.have.been.calledOnce;
      });
    });
  });

  describe('useAction', () => {
    it('should have the second argument being an array with correct elements', () => {
      create();
      conditionArray = stardust.useAction.getCall(0).args[1];
      expect(conditionArray).to.deep.equal([false, false, false, false]);
    });

    describe('the function in the argument list', () => {
      it('should return correct object', () => {
        enabled = true;
        stardust.useState.onFirstCall().returns([enabled, setEnabled]);
        layout = {
          qSelectionInfo: { qInSelections: true },
          qHyperCube: { qDimensionInfo: [{ qIsOneAndOnlyOne: false }] },
        };
        stardust.useLayout.returns(layout);
        create();
        fn = stardust.useAction.getCall(0).args[0];
        const result = fn();
        delete result.action;
        expect(result).to.deep.equal({
          key: 'lasso',
          label: 'Tooltip.ToggleOnLassoSelection-translated',
          icon: 'some-icons',
          hidden: false,
          active: false,
        });
      });
    });
  });

  describe('the return object', () => {
    it('should have correct action function', () => {
      const object = create();
      object.action(true);
      expect(setActive).to.have.been.calledWithExactly(true);
      object.action('true');
      expect(setActive).to.have.been.calledWithExactly(true);
    });

    it('should have correct enabled function', () => {
      const object = create();
      expect(object.enabled()).to.equal(false);
    });

    it('should have correct active function', () => {
      const object = create();
      expect(object.active()).to.equal(false);
    });
  });
});
