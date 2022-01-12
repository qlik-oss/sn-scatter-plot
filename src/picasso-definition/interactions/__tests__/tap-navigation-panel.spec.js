import tap from '../tap-navigation-panel';

describe('tap', () => {
  let sandbox;
  let create;
  const eventName = 'tap';
  let e;
  let tapObject;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    e = { target: { tagName: 'I' } };
    create = () => tap({ eventName });
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

      it('should return true if e is not undefined and the target is an icon', () => {
        expect(tapObject.options.enable(1, e)).to.equal(true);
      });

      it('should return false if e is not undefined but the target is not an icon', () => {
        e = { target: { tagName: 'L' } };
        expect(tapObject.options.enable(1, e)).to.equal(false);
      });
    });
  });
});
