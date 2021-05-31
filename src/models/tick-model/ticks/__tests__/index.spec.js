import * as getMinorTicks from '../minor';
import getTicks from '..';
import tickHelper from '../tick-helper';

describe('getTicks', () => {
  let sandbox;
  let scale;
  let explicitType;
  let distance;
  let create;
  let size;
  let measure;
  let formatter;
  let originalMinMax;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    originalMinMax = [1, 998];
    sandbox.stub(tickHelper, 'getTicksAndMinMax');
    sandbox.stub(tickHelper, 'valid');
    scale = sandbox.stub();
    scale.domain = sandbox.stub().returns(originalMinMax);
    distance = 100;
    explicitType = 'minMax';
    size = 500;
    measure = 'measure';
    formatter = 'formatter';
    create = () => getTicks({ scale, explicitType, distance, size, measure, formatter });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should get niced major ticks when explicitType is none', () => {
    distance = 500;
    explicitType = 'none';
    tickHelper.getTicksAndMinMax.withArgs(scale, true, 1, 1, 998).returns({ ticks: [0, 1000], min: 0, max: 1000 });
    sandbox.stub(getMinorTicks, 'default').returns([500]);
    expect(create()).to.deep.equal({
      ticks: [
        { value: 0, isMinor: false },
        { value: 500, isMinor: true },
        { value: 1000, isMinor: false },
      ],
      minMax: [0, 1000],
    });
  });

  it('should get niced major ticks when explicitType is none, and the ticks first created were valid', () => {
    distance = 250;
    explicitType = 'none';
    tickHelper.getTicksAndMinMax.withArgs(scale, true, 2, 1, 998).returns({ ticks: [0, 1000], min: 0, max: 1000 });
    sandbox.stub(getMinorTicks, 'default').returns([500]);
    tickHelper.valid
      .withArgs({
        scale,
        ticks: [0, 1000],
        distance: 250,
        size: 500,
        measure: 'measure',
        formatter: 'formatter',
      })
      .returns(true);
    expect(create()).to.deep.equal({
      ticks: [
        { value: 0, isMinor: false },
        { value: 500, isMinor: true },
        { value: 1000, isMinor: false },
      ],
      minMax: [0, 1000],
    });
  });

  it('should get niced major ticks when explicitType is none, and the ticks first created were invalid', () => {
    distance = 250;
    explicitType = 'none';
    tickHelper.getTicksAndMinMax.withArgs(scale, true, 2, 1, 998).returns({ ticks: [0, 500, 1000], min: 0, max: 1000 });
    tickHelper.getTicksAndMinMax.withArgs(scale, true, 1, 1, 998).returns({ ticks: [0, 1000], min: 0, max: 1000 });
    sandbox.stub(getMinorTicks, 'default').returns([500]);
    tickHelper.valid
      .withArgs({
        scale,
        ticks: [0, 500, 1000],
        distance: 250,
        size: 500,
        measure: 'measure',
        formatter: 'formatter',
      })
      .returns(false);
    expect(create()).to.deep.equal({
      ticks: [
        { value: 0, isMinor: false },
        { value: 500, isMinor: true },
        { value: 1000, isMinor: false },
      ],
      minMax: [0, 1000],
    });
  });

  it('should get correct min max when explicitType is min', () => {
    distance = 500;
    explicitType = 'min';
    tickHelper.getTicksAndMinMax.withArgs(scale, true, 1, 1, 998).returns({ ticks: [0, 1000], min: 0, max: 1000 });
    sandbox.stub(getMinorTicks, 'default').returns([500]);
    expect(create()).to.deep.equal({
      ticks: [
        { value: 0, isMinor: false },
        { value: 500, isMinor: true },
        { value: 1000, isMinor: false },
      ],
      minMax: [1, 1000],
    });
  });

  it('should get correct min max when explicitType is max', () => {
    distance = 500;
    explicitType = 'max';
    tickHelper.getTicksAndMinMax.withArgs(scale, true, 1, 1, 998).returns({ ticks: [0, 1000], min: 0, max: 1000 });
    sandbox.stub(getMinorTicks, 'default').returns([500]);
    expect(create()).to.deep.equal({
      ticks: [
        { value: 0, isMinor: false },
        { value: 500, isMinor: true },
        { value: 1000, isMinor: false },
      ],
      minMax: [0, 998],
    });
  });
});
