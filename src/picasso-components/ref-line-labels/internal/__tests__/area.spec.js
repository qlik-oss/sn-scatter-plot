import * as tokenize from '../tokenize';
import * as area from '../area';

describe('creatArea', () => {
  it('should return correct area, test case 1 (vertical, right)', () => {
    const rect = {
      width: 100,
      height: 400,
    };
    const dock = 'right';
    const padding = {
      top: 2,
      right: 4,
      bottom: 6,
      left: 8,
    };
    const results = area.createArea(rect, dock, padding);
    expect(results).to.deep.equal({
      orientation: 'vertical',
      majorAxis: 'y',
      majorDimension: 'height',
      majorSize: 400,
      minorAxis: 'x',
      minorDimension: 'width',
      minorCenter: 52, // 8+(100-8-4)/2 == 52
    });
  });

  it('should return correct area, test case 2 (horizontal, top)', () => {
    const rect = {
      width: 500,
      height: 50,
    };
    const dock = 'top';
    const padding = {
      top: 4,
      right: 2,
      bottom: 0,
      left: 6,
    };
    const results = area.createArea(rect, dock, padding);
    expect(results).to.deep.equal({
      orientation: 'horizontal',
      majorAxis: 'x',
      majorDimension: 'width',
      majorSize: 500,
      minorAxis: 'y',
      minorDimension: 'height',
      minorCenter: 27, // 4 + (50 - 4 - 0) / 2 == 27
    });
  });

  it('should return correct area, test case 3 (vertical, left)', () => {
    const rect = {
      width: 200,
      height: 1000,
    };
    const dock = 'left';
    const padding = {
      top: 3,
      right: 5,
      bottom: 7,
      left: 9,
    };
    const results = area.createArea(rect, dock, padding);
    expect(results).to.deep.equal({
      orientation: 'vertical',
      majorAxis: 'y',
      majorDimension: 'height',
      majorSize: 1000,
      minorAxis: 'x',
      minorDimension: 'width',
      minorCenter: 102, // 9 + (200 - 9 - 5) / 2 == 102
    });
  });

  it('should return correct area, test case 3 (horizontal, bottom)', () => {
    const rect = {
      width: 600,
      height: 300,
    };
    const dock = 'bottom';
    const padding = {
      top: 10,
      right: 12,
      bottom: 14,
      left: 16,
    };
    const results = area.createArea(rect, dock, padding);
    expect(results).to.deep.equal({
      orientation: 'horizontal',
      majorAxis: 'x',
      majorDimension: 'width',
      majorSize: 600,
      minorAxis: 'y',
      minorDimension: 'height',
      minorCenter: 148, // 10 + (300 - 10 - 14) / 2 == 148
    });
  });
});

describe('getPreferredSize', () => {
  let sandbox;
  const labels = [
    {
      lines: ['label 1, line 1', 'label 1, line 2'],
      totalWidth: 50,
    },
    {
      lines: ['label 2, line 1', 'label 2, line 2', 'label 2, line 3'],
      totalWidth: 75,
    },
    {
      lines: ['label 3, line 1'],
      totalWidth: 25,
    },
    {
      lines: ['label 4, line 1', 'label 4, line 2', 'label 4, line 3', 'label 4, line 4'],
      totalWidth: 100,
    },
  ];

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(tokenize, 'tokenizeLabels');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct preferred size, case 1 (dock left)', () => {
    const dock = 'left';
    const labelStyle = {
      maxLabelWidth: 70,
      lineHeight: 15,
      padding: { top: 20, right: 10, bottom: 30, left: 0 },
    };
    const preferredSize = area.getPreferredSize(labels, dock, labelStyle);
    expect(preferredSize).to.deep.equal(80);
  });

  it('should return correct preferred size, case 2 (dock bottom)', () => {
    const dock = 'bottom';
    const labelStyle = {
      maxLabelWidth: 110,
      lineHeight: 20,
      padding: { top: 10, right: 10, bottom: 20, left: 40 },
    };
    const preferredSize = area.getPreferredSize(labels, dock, labelStyle);
    expect(preferredSize).to.deep.equal(50); // 1*20 + 10 + 20  = 50
  });

  it('should return correct preferred size, case 3 (dock right)', () => {
    const dock = 'right';
    const labelStyle = {
      maxLabelWidth: 110,
      lineHeight: 10,
      padding: { top: 15, right: 25, bottom: 5, left: 35 },
    };
    const preferredSize = area.getPreferredSize(labels, dock, labelStyle);
    expect(preferredSize).to.deep.equal(160); // 100 + 25 + 35  = 160
  });

  it('should return correct preferred size, case 4 (dock top)', () => {
    const dock = 'top';
    const labelStyle = {
      maxLabelWidth: 70,
      lineHeight: 20,
      padding: { top: 20, right: 30, bottom: 40, left: 50 },
    };
    const preferredSize = area.getPreferredSize(labels, dock, labelStyle);
    expect(preferredSize).to.deep.equal(140); // 4*20 + 20 + 40 = 140
  });
});
