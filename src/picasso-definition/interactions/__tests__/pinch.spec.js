import KEYS from '../../../constants/keys';
import * as zoom from '../../../utils/math/zoom';
import pinch from '../pinch';

describe('pinch', () => {
  let sandbox;
  let chart;
  let actions;
  let viewHandler;
  let pinchObject;
  let e;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    viewHandler = { getDataView: sandbox.stub() };
    actions = { zoom: { enabled: sandbox.stub() } };
    chart = { componentsFromPoint: sandbox.stub() };
    sandbox.stub(KEYS, 'COMPONENT').value({ POINT: 'point-component' });
    sandbox.stub(zoom, 'default');
    pinchObject = pinch({ chart, actions, viewHandler });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should have correct attributes ', () => {
    expect(pinchObject).to.have.all.keys(['type', 'key', 'options', 'events']);
  });

  describe('options', () => {
    it('should have correct attributes', () => {
      expect(pinchObject.options).to.have.all.keys(['event', 'pointers', 'threshold', 'enable']);
    });

    describe('enable', () => {
      it('should return true if e is not defined', () => {
        expect(pinchObject.options.enable('', undefined)).to.equal(true);
      });

      it('should return false if actions zoom is not enabled', () => {
        actions.zoom.enabled.returns(false);
        expect(pinchObject.options.enable('', 'e')).to.equal(false);
      });

      it('should return correct pointAreaPinched', () => {
        actions.zoom.enabled.returns(true);
        chart.componentsFromPoint
          .withArgs({ x: 200, y: 100 })
          .returns([{ key: 'point-component' }, { key: 'point-component', id: 'should-not-return-this' }]);
        expect(pinchObject.options.enable('', { center: { x: 200, y: 100 } })).to.deep.equal({
          key: 'point-component',
        });
      });
    });
  });

  describe('events', () => {
    it('should have correct attributes', () => {
      expect(pinchObject.events).to.have.all.keys(['zoomstart', 'zoommove']);
    });

    describe('zoommove', () => {
      it('should not call zoom when scale diff is smalller than 0.01', () => {
        e = { preventDefault: sandbox.stub(), scale: 0.001 };
        pinchObject.events.zoommove(e);
        expect(zoom.default).not.to.have.been.called;
      });

      it('should call zoom when scale diff is larger than 0.01', () => {
        e = { preventDefault: sandbox.stub(), scale: 1.1 };
        pinchObject.events.zoommove(e);
        expect(zoom.default).to.have.been.calledOnce;
      });
    });
  });
});
