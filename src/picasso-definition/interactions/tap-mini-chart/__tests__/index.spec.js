import tap from '..';
import * as updateTapDataView from '../update-tap-data-view';
import * as getTapPosition from '../tap-position';

describe('tap', () => {
  let sandbox;
  let create;
  const eventName = 'tap';
  let viewHandler;
  let e;
  let tapObject;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(updateTapDataView, 'default');
    sandbox.stub(getTapPosition, 'default');
    e = { preventDefault: sandbox.stub() };
    create = () => tap({ eventName, viewHandler });
    tapObject = create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return an object with all keys', () => {
    expect(tapObject).to.have.all.keys(['key', 'type', 'options', 'events']);
  });

  describe('options', () => {
    it('should have all keys', () => {
      expect(tapObject.options).to.have.all.keys(['event', 'interval', 'pointers', 'enable']);
    });

    describe('enable', () => {
      it('should return true if e is undefined', () => {
        e = undefined;
        expect(tapObject.options.enable(1, e)).to.equal(true);
      });

      it('should return true if e is not undefined and the tap is in miniChart', () => {
        e = 'event';
        getTapPosition.default.returns({ x: 1, y: 2 });
        expect(tapObject.options.enable(1, e)).to.equal(true);
      });

      it('should return false if e is not undefined but the tap is not in miniChart', () => {
        e = 'event';
        getTapPosition.default.returns(null);
        expect(tapObject.options.enable(1, e)).to.equal(false);
      });
    });
  });

  describe('event', () => {
    it('should call updateTapDataView', () => {
      tapObject.events.tap(e);
      expect(updateTapDataView.default).to.have.been.calledOnce;
    });
  });
});
