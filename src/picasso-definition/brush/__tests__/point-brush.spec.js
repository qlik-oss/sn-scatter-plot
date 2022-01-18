import createBrush from '../point-brush';

describe('createPointBrush', () => {
  let sandbox;
  let create;
  let myBrush;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    myBrush = { brushes: sandbox.stub() };
    create = () => createBrush();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct brush object', () => {
    expect(create().consume[0].context).to.equal('selection');
    expect(create().consume[0].mode).to.equal('and');
    expect(create().consume[0].style).to.deep.equal({
      inactive: {
        opacity: 0.3,
      },
      active: {
        stroke: '#000',
        strokeWidth: 2,
      },
    });
  });

  it('should return a brush object with correct data function, case 1: brushes returns empty array', () => {
    myBrush.brushes.returns([]);
    expect(create().consume[0].data({ brush: myBrush })).to.equal(undefined);
  });

  it('should return a brush object with correct data function, case 2: brushes returns single-element array', () => {
    myBrush.brushes.returns([{ id: 'measure 1' }]);
    expect(create().consume[0].data({ brush: myBrush })).to.equal(undefined);
  });

  it('should return a brush object with correct data function, case 3: brushes returns two-element array', () => {
    myBrush.brushes.returns([{ id: 'measure 1' }, { id: 'meausre 2' }]);
    expect(create().consume[0].data({ brush: myBrush })).to.deep.equal(['x', 'y']);
  });
});
