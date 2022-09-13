// eslint-disable-next-line no-unused-vars
import * as stardust from '@nebula.js/stardust';
import useSelect from '../use-select';

describe('use-select', () => {
  let sandbox;
  let create;
  let constraints;
  let actions;
  let enabled;
  let setEnabled;
  let listeners;
  let setListeners;
  let fn;
  let conditionArray;
  let listener1;
  let listener2;
  let listener3;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    constraints = { select: false, active: false };
    actions = { getProgressive: sandbox.stub() };
    enabled = false;
    listener1 = sandbox.stub();
    listener2 = sandbox.stub();
    listener3 = sandbox.stub();
    listeners = { event1: [listener1, listener2], event2: undefined };
    setListeners = sandbox.stub();
    setEnabled = sandbox.stub();
    sandbox.stub(stardust, 'useConstraints').returns(constraints);
    sandbox.stub(stardust, 'useState');
    sandbox.stub(stardust, 'useEffect');
    stardust.useState.onFirstCall().returns([enabled, setEnabled]);
    stardust.useState.onSecondCall().returns([listeners, setListeners]);
    create = () => useSelect(actions);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('useEffect (1st)', () => {
    describe('callback function', () => {
      it('should return a function that calls setListener', () => {
        create();
        fn = stardust.useEffect.getCall(0).args[0];
        const func = fn();
        func();
        expect(setListeners).to.have.been.calledOnce;
      });
    });
  });

  describe('useEffect (2nd)', () => {
    it('should have the second argument being an array with constraints being the only element', () => {
      create();
      conditionArray = stardust.useEffect.getCall(1).args[1];
      expect(conditionArray).to.deep.equal([{ select: false, active: false }]);
    });

    describe('callback function', () => {
      it('should return nothing (undefined) if constraints is undefined', () => {
        constraints = undefined;
        stardust.useConstraints.returns(constraints);
        create();
        fn = stardust.useEffect.getCall(1).args[0];
        expect(fn()).to.equal(undefined);
      });

      it('should call setEnabled if constraints is defined', () => {
        create();
        fn = stardust.useEffect.getCall(1).args[0];
        fn();
        expect(setEnabled).to.have.been.calledOnce;
      });
    });
  });

  describe('the returned object', () => {
    it('should have all keys', () => {
      const object = create();
      expect(object).to.have.all.keys([
        'enabled',
        'emit',
        'removeListener',
        'removeAllListeners',
        'on',
        'getBrushOptions',
      ]);
    });

    describe('enabled', () => {
      it('should return correct value if enabled = false', () => {
        const object = create();
        expect(object.enabled()).to.equal(false);
      });

      it('should return correct value if enabled = true & actions.getProgressive() = true', () => {
        actions.getProgressive.returns(true);
        stardust.useState.onCall(0).callsFake(() => {
          enabled = true;
          return [enabled, setEnabled];
        });
        const object = create();
        expect(object.enabled()).to.equal(false);
      });

      it('should return correct value if enabled = true & actions.getProgressive() = false', () => {
        actions.getProgressive.returns(false);
        stardust.useState.onCall(0).callsFake(() => {
          enabled = true;
          return [enabled, setEnabled];
        });
        const object = create();
        expect(object.enabled()).to.equal(true);
      });
    });

    describe('emit', () => {
      it('should call every listener', () => {
        const object = create();
        object.emit('event1');
        expect(listener1).to.have.been.calledOnce;
        expect(listener2).to.have.been.calledOnce;
      });
    });

    describe('removeListener', () => {
      it('should remove listener correctly', () => {
        const object = create();
        object.removeListener('event1', listener2);
        expect(listeners).to.deep.equal({ event1: [listener1], event2: undefined });
        object.removeListener('event1', listener3);
        expect(listeners).to.deep.equal({ event1: [listener1], event2: undefined });
      });
    });

    describe('on', () => {
      it('should add listeners correctly', () => {
        const object = create();
        object.on('event2', listener3);
        expect(listeners).to.deep.equal({ event1: [listener1, listener2], event2: [listener3] });
        object.on('event2', listener1);
        expect(listeners).to.deep.equal({ event1: [listener1, listener2], event2: [listener3, listener1] });
      });
    });

    describe('getBrushOptions', () => {
      it('should get brush options correctly', () => {
        const object = create();
        expect(object.getBrushOptions('tap')).to.deep.equal({ orMode: true });
        expect(object.getBrushOptions('pan')).to.deep.equal({ orMode: false });
      });
    });
  });
});
