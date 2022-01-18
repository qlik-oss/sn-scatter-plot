import createBrush from '../heat-map-brush';

describe('createHeatMapBrush', () => {
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

  it('should return correct brush object when is value selection', () => {
    myBrush.brushes.returns([{ id: 'measure 1' }, { id: 'meausre 2' }]);
    const brush = create();
    brush.consume[0].data({ brush: myBrush });
    expect(brush.consume[0].context).to.equal('selection');
    expect(brush.consume[0].mode).to.equal('and');
    expect(brush.consume[0].style.inactive.opacity).to.equal(0.3);
    expect(brush.consume[0].style.active.strokeWidth()).to.equal(2);
    expect(brush.consume[0].style.active.stroke()).to.equal('#000');
    expect(brush.consume[0].style.active.opacity()).to.equal(1);
  });

  it('should return correct brush object when is range selection', () => {
    myBrush.brushes.returns([{ id: 'measure 1', type: 'range' }]);
    const brush = create();
    brush.consume[0].data({ brush: myBrush });
    expect(brush.consume[0].context).to.equal('selection');
    expect(brush.consume[0].mode).to.equal('and');
    expect(brush.consume[0].style.inactive.opacity).to.equal(0.3);
    expect(brush.consume[0].style.active.strokeWidth()).to.equal(0);
    expect(brush.consume[0].style.active.stroke()).to.equal(undefined);
    expect(brush.consume[0].style.active.opacity()).to.equal(0.3);
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
