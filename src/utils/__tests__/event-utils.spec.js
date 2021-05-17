import * as eventUtils from '../event-utils';

describe('eventToChartPoint', () => {
  let sandbox;
  let chart;
  let event;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    event = { clientX: 1, clientY: 2 };
    chart = { element: { getBoundingClientRect: sandbox.stub().returns({ left: 3, top: 4 }) } };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct coordinate relative to chart', () => {
    expect(eventUtils.eventToChartPoint(event, chart)).to.deep.equal({ x: -2, y: -2 });
  });
});

describe('eventToComponentPoint', () => {
  let sandbox;
  let component;
  let chart;
  let event;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    event = { clientX: 1, clientY: 2 };
    component = { rect: { computedPhysical: { x: 3, y: 4 } } };
    chart = { element: { getBoundingClientRect: sandbox.stub().returns({ left: 5, top: 6 }) } };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct coordinate relative to component', () => {
    expect(eventUtils.eventToComponentPoint(event, chart, component)).to.deep.equal({ x: -7, y: -8 });
  });
});
