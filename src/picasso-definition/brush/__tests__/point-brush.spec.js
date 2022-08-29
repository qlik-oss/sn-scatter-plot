import createBrush from '../point-brush';
import * as getSelectionContext from '../get-selection-context';

describe('createPointBrush', () => {
  let sandbox;
  let layoutService;
  let strokeWidthInBigData;
  let strokeColorInBigData;
  let strokeWidthInLargeData;
  let strokeColorInLargeData;
  let create;
  let myBrush;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    myBrush = { brushes: sandbox.stub() };
    layoutService = {
      meta: {
        isBigData: false,
        isLargeNumDataPoints: false,
      },
    };
    strokeWidthInBigData = sandbox.spy();
    strokeColorInBigData = sandbox.spy();
    strokeWidthInLargeData = sandbox.spy();
    strokeColorInLargeData = sandbox.spy();
    sandbox.stub(getSelectionContext, 'default').returns('selection');
    create = () =>
      createBrush({
        layoutService,
        strokeWidthInBigData,
        strokeColorInBigData,
        strokeWidthInLargeData,
        strokeColorInLargeData,
      });
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

  it('should return correct nodes with sorted order', () => {
    const nodes = [
      {
        type: 'circle',
        fill: '#26a0a7',
        r: 10,
        opacity: 1,
      },
      {
        type: 'circle',
        fill: '#26a0a7',
        r: 8,
        opacity: 0.3,
      },
      {
        type: 'circle',
        fill: '#26a0a7',
        r: 4,
        opacity: 1,
      },
      {
        type: 'circle',
        fill: '#26a0a7',
        r: 6,
        opacity: 0.3,
      },
    ];
    const config = {
      consume: [{ style: { active: { opacity: 1 } } }],
    };
    expect(create().sortNodes({ nodes, config })).to.deep.equal([
      {
        type: 'circle',
        fill: '#26a0a7',
        r: 8,
        opacity: 0.3,
      },
      {
        type: 'circle',
        fill: '#26a0a7',
        r: 6,
        opacity: 0.3,
      },
      {
        type: 'circle',
        fill: '#26a0a7',
        r: 10,
        opacity: 1,
      },
      {
        type: 'circle',
        fill: '#26a0a7',
        r: 4,
        opacity: 1,
      },
    ]);
  });
});
