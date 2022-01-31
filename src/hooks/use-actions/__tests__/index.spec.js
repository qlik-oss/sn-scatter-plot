// eslint-disable-next-line no-unused-vars
import * as stardust from '@nebula.js/stardust';
import * as useLasso from '../use-lasso';
import * as useSelect from '../use-select';
import useActions from '..';

describe('use-actions', () => {
  let sandbox;
  let create;
  let constraints;
  let select;
  let lasso;
  let actions;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    constraints = { active: false, passive: false };
    select = 'select';
    lasso = 'lasso';
    actions = {};
    sandbox.stub(stardust, 'useConstraints').returns(constraints);
    sandbox.stub(useSelect, 'default').returns(select);
    sandbox.stub(useLasso, 'default').returns(lasso);
    sandbox.stub(stardust, 'useState').returns([actions]);
    create = () => useActions();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('actions', () => {
    let updatedActions;
    beforeEach(() => {
      updatedActions = create();
    });

    it('should has correct lasso and select property', () => {
      expect(updatedActions.lasso).to.equal('lasso');
      expect(updatedActions.select).to.equal('select');
    });

    describe('zoom', () => {
      it('should have correct enabled function', () => {
        expect(updatedActions.zoom.enabled()).to.equal(true);
      });
    });

    describe('scroll', () => {
      it('should have correct enabled function', () => {
        expect(updatedActions.scroll.enabled()).to.equal(true);
      });
    });

    describe('interact', () => {
      it('should have correct enabled function', () => {
        expect(updatedActions.interact.enabled()).to.equal(true);
      });
    });

    describe('tooltip', () => {
      it('should have correct enabled function', () => {
        expect(updatedActions.tooltip.enabled()).to.equal(true);
      });
    });
  });
});
