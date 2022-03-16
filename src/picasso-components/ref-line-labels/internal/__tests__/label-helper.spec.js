import labelHelper from '../label-helper';

const {
  addLabelPositions,
  addLabelWidth,
  addLabelSizes,
  addLabelSegments,
  addLabelTitles,
  hasEngineFormat,
  reduceMaxNumLines,
  resolveLabels,
} = labelHelper;

describe('addLabelPositions', () => {
  it('should add correct label centers and sort them based on their centers', () => {
    const labels = [{ value: 100 }, { value: 10 }, { value: 20 }, { value: 200 }];
    const scale = sinon.stub();
    scale.onCall(0).returns(100);
    scale.onCall(1).returns(10);
    scale.onCall(2).returns(20);
    scale.onCall(3).returns(200);
    const size = 2;
    addLabelPositions(labels, scale, size);
    expect(labels).to.deep.equal([
      { value: 10, center: 20 },
      { value: 20, center: 40 },
      { value: 100, center: 200 },
      { value: 200, center: 400 },
    ]);
  });
});

describe('addLabelWidth', () => {
  const labels = [{}, {}, {}, {}];
  let measureText;

  beforeEach(() => {
    measureText = sinon.stub();
    measureText.onCall(0).returns({ width: 10 });
    measureText.onCall(1).returns({ width: 20 });
    measureText.onCall(2).returns({ width: 30 });
    measureText.onCall(3).returns({ width: 40 });
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should add correct label total width', () => {
    addLabelWidth(labels, measureText);
    expect(labels).to.deep.equal([{ totalWidth: 10 }, { totalWidth: 20 }, { totalWidth: 30 }, { totalWidth: 40 }]);
  });
});

describe('addLabelSizes', () => {
  const labels = [
    {
      lines: ['label 1, line 1', 'label 1, line 2'],
    },
    {
      lines: ['label 2, line 1', 'label 2, line 2', 'label 2, line 3'],
    },
    {
      lines: ['label 3, line 1'],
    },
    {
      lines: ['label 4, line 1', 'label 4, line 2', 'label 4, line 3', 'label 4, line 4'],
    },
  ];

  let measureText;
  const lineHeight = 15;
  const maxLabelWidth = 50;

  beforeEach(() => {
    measureText = sinon.stub();
    measureText.onCall(0).returns({ width: 10 });
    measureText.onCall(1).returns({ width: 25 });
    measureText.onCall(2).returns({ width: 35 });
    measureText.onCall(3).returns({ width: 40 });
    measureText.onCall(4).returns({ width: 50 });
    measureText.onCall(5).returns({ width: 65 });
    measureText.onCall(6).returns({ width: 75 });
    measureText.onCall(7).returns({ width: 80 });
    measureText.onCall(8).returns({ width: 90 });
    measureText.onCall(9).returns({ width: 105 });
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should add correct label width and label height', () => {
    addLabelSizes(labels, maxLabelWidth, lineHeight, measureText);
    expect(labels).to.deep.equal([
      {
        lines: ['label 1, line 1', 'label 1, line 2'],
        width: 25,
        height: 30,
      },
      {
        lines: ['label 2, line 1', 'label 2, line 2', 'label 2, line 3'],
        width: 50,
        height: 45,
      },
      {
        lines: ['label 3, line 1'],
        width: 50,
        height: 15,
      },
      {
        lines: ['label 4, line 1', 'label 4, line 2', 'label 4, line 3', 'label 4, line 4'],
        width: 50,
        height: 60,
      },
    ]);
  });
});

describe('addLabelSegments', () => {
  const labels = [
    { center: 100, x: 50, y: 60 },
    { center: 150, x: 40, y: 70 },
    { center: 200, x: 30, y: 80 },
  ];

  it('should return correct segment positions and radii when major dimension is X', () => {
    const majorDimension = 'x';
    addLabelSegments(labels, majorDimension);
    expect(labels).to.deep.equal([
      { center: 100, x: 50, y: 60, segment: { position: 100, radius: 25 } },
      { center: 150, x: 40, y: 70, segment: { position: 150, radius: 20 } },
      { center: 200, x: 30, y: 80, segment: { position: 200, radius: 15 } },
    ]);
  });

  it('should return correct segment positions and radii when major dimension is Y', () => {
    const majorDimension = 'y';
    addLabelSegments(labels, majorDimension);
    expect(labels).to.deep.equal([
      { center: 100, x: 50, y: 60, segment: { position: 100, radius: 30 } },
      { center: 150, x: 40, y: 70, segment: { position: 150, radius: 35 } },
      { center: 200, x: 30, y: 80, segment: { position: 200, radius: 40 } },
    ]);
  });
});

describe('addLabelTitles', () => {
  let sandbox;
  const localeInfo = 'valid';
  const labels = [
    { value: 1000, valueLabel: '1e3', text: '1st' },
    { value: 2000, valueLabel: '2e3', text: '2nd' },
    { value: 3000, valueLabel: '3e3', text: '3rd' },
  ];
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(labelHelper, 'hasEngineFormat');
    labelHelper.hasEngineFormat.onCall(0).returns(true);
    labelHelper.hasEngineFormat.onCall(1).returns(false);
    labelHelper.hasEngineFormat.onCall(2).returns(false);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should add correct label valueString and label title, when there is Engine Format for the 1st label, formatter is undefined', () => {
    const formatter = undefined;
    addLabelTitles(labels, formatter, localeInfo);
    expect(labels).to.deep.equal([
      { value: 1000, valueLabel: '1e3', text: '1st', valueString: '(1e3)', title: '1st (1e3)' },
      { value: 2000, valueLabel: '2e3', text: '2nd', valueString: '(2000)', title: '2nd (2000)' },
      { value: 3000, valueLabel: '3e3', text: '3rd', valueString: '(3000)', title: '3rd (3000)' },
    ]);
  });

  it('should add correct label valueString and label title, when there is Engine Format for the 1st label, formatter is defined', () => {
    const formatter = sinon.stub();
    formatter.onCall(0).returns('2k');
    formatter.onCall(1).returns('3k');
    addLabelTitles(labels, formatter, localeInfo);
    expect(labels).to.deep.equal([
      { value: 1000, valueLabel: '1e3', text: '1st', valueString: '(1e3)', title: '1st (1e3)' },
      { value: 2000, valueLabel: '2e3', text: '2nd', valueString: '(2k)', title: '2nd (2k)' },
      { value: 3000, valueLabel: '3e3', text: '3rd', valueString: '(3k)', title: '3rd (3k)' },
    ]);
  });
});

describe('hasEngineFormat', () => {
  let value;
  let valueLabel;
  let localeInfo;

  it('should return false, if either value or valueLabel is undefined, of if they are equal', () => {
    let result = hasEngineFormat(value, valueLabel, localeInfo);
    expect(result).to.deep.equal(false);
    value = 1234;
    valueLabel = '1234';
    result = hasEngineFormat(value, valueLabel, localeInfo);
    expect(result).to.deep.equal(false);
  });

  it('should return true, if value and valueLabel are defined and are not the same but localeInfo is undefined', () => {
    value = 1234;
    valueLabel = '1234.1';
    const result = hasEngineFormat(value, valueLabel, localeInfo);
    expect(result).to.deep.equal(true);
  });

  it('should return true, if value and valueLabel are defined and are not the same, localeInfo is defined, but valueLabel contains anything other than digits, e, +, -, decimal separator, or thoudsand separtor.', () => {
    value = 1234;
    valueLabel = '1.234k';
    localeInfo = { qDecimalSep: '.', qThousandSep: ',' };
    const result = hasEngineFormat(value, valueLabel, localeInfo);
    expect(result).to.deep.equal(true);
  });

  it('should handle when valueLabel is not a string', () => {
    value = 1234;
    valueLabel = 1234;
    localeInfo = { qDecimalSep: '.', qThousandSep: ',' };
    const result = hasEngineFormat(value, valueLabel, localeInfo);
    expect(result).to.deep.equal(false);
  });

  it('should return false, if value and valueLabel are defined and are not the same, localeInfo is defined, but valueLabel contains only digits, e, +, -, decimal separator, or thoudsand separtor.', () => {
    value = 1234;
    valueLabel = '1*234$567e6';
    localeInfo = { qDecimalSep: '$', qThousandSep: '*' };
    const result = hasEngineFormat(value, valueLabel, localeInfo);
    expect(result).to.deep.equal(false);
  });

  it('should return true, if value and valueLabel are defined and are not the same, decimal and thousand separator are undefined, labelValue contains special characters', () => {
    value = 1234;
    valueLabel = '1*234$567e6';
    localeInfo = { qDecimalSep: undefined, qThousandSep: undefined };
    const result = hasEngineFormat(value, valueLabel, localeInfo);
    expect(result).to.deep.equal(true);
  });
});

describe('reduceMaxNumLines', () => {
  const min = 50;
  const max = 350;
  const gap = 20;
  const lineHeight = 20;
  const epsilon = 10;

  it('should not change labels if it has no element', () => {
    const labels = [];
    reduceMaxNumLines({ labels, min, max, gap, lineHeight, epsilon });
    expect(labels).to.deep.equal([]);
  });

  it('should not change maxNumLines when labels has only one element', () => {
    const labels = [{ center: 100, maxNumLines: 1000 }];
    reduceMaxNumLines({ labels, min, max, gap, lineHeight, epsilon });
    expect(labels).to.deep.equal([{ center: 100, cMin: 50, cMax: 350, maxNumLines: 1000 }]);
  });

  it('should change maxNumLines correctly when labels has at least two element', () => {
    const labels = [
      { center: 100, maxNumLines: 1000 },
      { center: 200, maxNumLines: 500 },
      { center: 300, maxNumLines: 200 },
    ];
    reduceMaxNumLines({ labels, min, max, gap, lineHeight, epsilon });
    expect(labels).to.deep.equal([
      { center: 100, maxNumLines: 5, cMin: 50, cMax: 140 }, // 140-50=90; (90+10)/20=5;
      { center: 200, maxNumLines: 4, cMin: 160, cMax: 240 }, // 240-160=80; (80+10)/20=4.5
      { center: 300, maxNumLines: 5, cMin: 260, cMax: 350 }, // 350-260=90; (90+10)/20=5
    ]);
  });
});

describe('resolveLabels', () => {
  const labels = [
    { value: 100, scale: 'x', text: '100' },
    { value: 200, scale: 'y', text: '200' },
    { value: () => 300, scale: 'x', text: '300' },
  ];

  it('should return correct values', () => {
    const result = resolveLabels(labels);
    expect(result).to.deep.equal([
      { value: 100, scale: 'x', text: '100' },
      { value: 200, scale: 'y', text: '200' },
      { value: 300, scale: 'x', text: '300' },
    ]);
  });
});
