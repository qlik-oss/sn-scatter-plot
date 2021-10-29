import getDock from '../dock-helper';

describe('getDock', () => {
  let sandbox;
  let dock;
  let chart;
  let rtl;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    dock = 'auto';
    chart = { element: { getBoundingClientRect: sandbox.stub().returns({ height: 300, width: 400 }) } };
    rtl = false;
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct dock when dock value is not auto', () => {
    dock = 'bottom';
    expect(getDock({ dock, chart, rtl })).to.equal('bottom');
  });

  it('should return right when dock value is not defined', () => {
    dock = undefined;
    expect(getDock({ dock, chart, rtl })).to.equal('right');
  });

  it('should return bottom when dock value is auto and chart height is larger than width', () => {
    chart.element.getBoundingClientRect.returns({ height: 300, width: 200 });
    expect(getDock({ dock, chart, rtl })).to.equal('bottom');
  });

  it('should return right when dock value is auto, is not rtl and chart height is smaller than width', () => {
    expect(getDock({ dock, chart, rtl })).to.equal('right');
  });

  it('should return left when dock value is auto, is rtl and chart height is smaller than width', () => {
    rtl = true;
    expect(getDock({ dock, chart, rtl })).to.equal('left');
  });
});
