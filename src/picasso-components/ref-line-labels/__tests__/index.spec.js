import refLineLabels from '..';
import * as area from '../internal/area';
import labelHelper from '../internal/label-helper';
import * as getLabelStyle from '../internal/label-style';
import * as getFormatter from '../internal/formatter';
import oob from '../internal/oob';
import * as tokenize from '../internal/tokenize';
import labelLayout from '../internal/label-layout';
import tooltip from '../internal/tooltip';

describe('require', () => {
  it('should contain correct value', () => {
    expect(refLineLabels.require).to.deep.equal(['renderer', 'symbol']);
  });
});

describe('defaultSettings', () => {
  it('should contain correct values', () => {
    expect(refLineLabels.defaultSettings).to.deep.equal({
      layout: {
        displayOrder: 0,
        prioOrder: 0,
      },
    });
  });
});

describe('measureText', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    refLineLabels.settings = { style: { label: { fonSize: '12px', fontFamily: 'Arial' } } };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct measureText function from renderer', () => {
    refLineLabels.renderer = { measureText: sandbox.stub().returns('customized measureText function') };
    const result = refLineLabels.measureText('some text');
    expect(result).to.deep.equal('customized measureText function');
  });
});

describe('preferredSize', () => {
  let sandbox;
  let labels;

  beforeEach(() => {
    refLineLabels.scale = 'some scale';
    refLineLabels.settings = {
      style: { oob: { size: 12 } },
      localeInfo: 'some localeInfo',
      layout: { dock: 'some dock' },
    };
    labels = ['ref lable 1', 'ref label 2', 'ref label 3'];
    sandbox = sinon.createSandbox();
    sandbox.stub(getFormatter, 'default').returns('some formatter');
    sandbox.stub(labelHelper, 'resolveLabels').returns(labels);
    sandbox.stub(labelHelper, 'addLabelTitles');
    sandbox.stub(getLabelStyle, 'default').returns('some style');
    sandbox.stub(labelHelper, 'addLabelWidth');
    sandbox
      .stub(area, 'getPreferredSize')
      .withArgs(['ref lable 1', 'ref label 2', 'ref label 3'], 'some dock', 'some style')
      .returns(100);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct preferred size', () => {
    const result = refLineLabels.preferredSize();
    expect(result).to.deep.equal(100);
  });
});

describe('render', () => {
  let sandbox;
  let labels;

  beforeEach(() => {
    refLineLabels.rect = 'rect';
    refLineLabels.symbol = 'symbol';
    refLineLabels.settings = {
      labels: 'setting labels',
      layout: { dock: 'top' },
      style: { label: 'setting label style', oob: { size: 12 } },
      localeInfo: 'some localeInfo',
    };
    labels = ['ref label 1', 'ref label 2', 'ref label 3', 'ref label 4'];
    sandbox = sinon.createSandbox();
    refLineLabels.scale = { domain: sandbox.stub().returns([-100, -50]) };
    sandbox.stub(labelHelper, 'resolveLabels').withArgs('setting labels').returns(labels);
    sandbox
      .stub(getLabelStyle, 'default')
      .withArgs('setting label style')
      .returns({
        fontSize: '11px',
        fontFamily: 'San serif',
        font: 'Tahoma',
        lineHeight: 10,
        gap: 5,
        maxLabelWidth: 80,
        maxNumLines: 3,
        padding: { top: 1, bottom: 2, left: 3, right: 4 },
      });
    sandbox.stub(getFormatter, 'default').returns('some formatter');
    sandbox.stub(area, 'createArea').withArgs('rect', 'top', { top: 1, bottom: 2, left: 3, right: 4 }).returns({
      orientation: 'horizontal',
      majorAxis: 'x',
      majorDimension: 'width',
      majorSize: 400,
      minorAxis: 'y',
      minorCenter: 100,
    });
    area.createArea.withArgs('rect', 'right', { top: 1, bottom: 2, left: 3, right: 4 }).returns({
      orientation: 'vertical',
      majorAxis: 'y',
      majorDimension: 'height',
      majorSize: 300,
      minorAxis: 'x',
      minorCenter: 200,
    });
    sandbox.stub(labelHelper, 'addLabelTitles');
    sandbox.stub(labelHelper, 'addLabelPositions');
    sandbox.stub(refLineLabels, 'measureText').value('correct measureText function');
    sandbox
      .stub(oob, 'createOobsInfo')
      .withArgs({
        labels: ['ref label 1', 'ref label 2', 'ref label 3', 'ref label 4'],
        minValue: -100,
        maxValue: -50,
        orientation: 'horizontal',
        style: { label: 'setting label style', oob: { size: 12 } },
        padding: { top: 1, bottom: 2, left: 3, right: 4 },
        measureText: 'correct measureText function',
      })
      .returns({
        filteredLabels: ['ref label 2', 'ref label 3'],
        lowerOobs: ['ref label 1'],
        upperOobs: ['ref label 4'],
        lowerCircleSize: 2,
        upperCircleSize: 6,
        lowerOobSpace: 4,
        upperOobSpace: 5,
      });

    oob.createOobsInfo
      .withArgs({
        labels: ['ref label 1', 'ref label 2', 'ref label 3', 'ref label 4'],
        minValue: -100,
        maxValue: -50,
        orientation: 'vertical',
        style: { label: 'setting label style', oob: { size: 12 } },
        padding: { top: 1, bottom: 2, left: 3, right: 4 },
        measureText: 'correct measureText function',
      })
      .returns({
        filteredLabels: ['ref label 2', 'ref label 3'],
        lowerOobs: ['ref label 1'],
        upperOobs: ['ref label 4'],
        lowerCircleSize: 2,
        upperCircleSize: 6,
        lowerOobSpace: 4,
        upperOobSpace: 5,
      });

    // [min, max] = [4, 395] if dock = 'top'
    // [min, max] = [5, 296] if dock = 'right'

    sandbox.stub(tokenize, 'tokenizeLabels');
    sandbox.stub(labelHelper, 'reduceMaxNumLines');
    sandbox.stub(tokenize, 'retokenizeLabels');
    sandbox.stub(labelHelper, 'addLabelSizes');
    sandbox.stub(labelHelper, 'addLabelSegments');
    sandbox
      .stub(labelLayout, 'createLayout')
      .withArgs(['ref label 2', 'ref label 3'], 4, 395, 5)
      .returns([
        { lines: ['ref', 'label 2'], fill: 'red', segment: { position: 101 } },
        { lines: ['ref label 3'], fill: 'blue', segment: { position: 203 } },
      ]);
    labelLayout.createLayout.withArgs(['ref label 2', 'ref label 3'], 5, 296, 5).returns([
      { lines: ['ref', 'label 2'], fill: 'red', segment: { position: 101 } },
      { lines: ['ref label 3'], fill: 'blue', segment: { position: 203 } },
    ]);
    sandbox.stub(tooltip, 'getLabelTooltip').returns('label tooltip');
    // lowPosition = 12 + 2/2 = 13
    // upperPosition = 400 -(12+6/2)=385
    // [lowPosition,upperPosition] = [13,385] if dock = 'top'

    // lowPosition = 12 + 2/2 = 13
    // upperPosition = 300 -(12+6/2)=285
    // [lowPosition,upperPosition] = [285,13] if dock = 'right'
    sandbox.stub(oob, 'createOobs');
    oob.createOobs
      .withArgs({
        alignment: 0,
        dockValue: 0,
        oobs: ['ref label 1'],
        style: { size: 12 },
        rect: 'rect',
        symbol: 'symbol',
        position: 13,
        area: {
          orientation: 'horizontal',
          majorAxis: 'x',
          majorDimension: 'width',
          majorSize: 400,
          minorAxis: 'y',
          minorCenter: 100,
        },
        radius: 1,
        font: 'Tahoma',
      })
      .returns(['lower oobs, dock top']);
    oob.createOobs
      .withArgs({
        alignment: 1,
        dockValue: 1,
        oobs: ['ref label 4'],
        style: { size: 12 },
        rect: 'rect',
        symbol: 'symbol',
        position: 385,
        area: {
          orientation: 'horizontal',
          majorAxis: 'x',
          majorDimension: 'width',
          majorSize: 400,
          minorAxis: 'y',
          minorCenter: 100,
        },
        radius: 3,
        font: 'Tahoma',
      })
      .returns(['upper oobs, dock top']);
    oob.createOobs
      .withArgs({
        alignment: 0,
        dockValue: 0,
        oobs: ['ref label 1'],
        style: { size: 12 },
        rect: 'rect',
        symbol: 'symbol',
        position: 285,
        area: {
          orientation: 'vertical',
          majorAxis: 'y',
          majorDimension: 'height',
          majorSize: 300,
          minorAxis: 'x',
          minorCenter: 200,
        },
        radius: 1,
        font: 'Tahoma',
      })
      .returns(['lower oobs, dock right']);
    oob.createOobs
      .withArgs({
        alignment: 1,
        dockValue: 1,
        oobs: ['ref label 4'],
        style: { size: 12 },
        rect: 'rect',
        symbol: 'symbol',
        position: 13,
        area: {
          orientation: 'vertical',
          majorAxis: 'y',
          majorDimension: 'height',
          majorSize: 300,
          minorAxis: 'x',
          minorCenter: 200,
        },
        radius: 3,
        font: 'Tahoma',
      })
      .returns(['upper oobs, dock right']);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return false if the scale domain or labels has no element', () => {
    refLineLabels.scale.domain.returns([]);
    labelHelper.resolveLabels.returns([]);
    const result = refLineLabels.render();
    expect(result).to.deep.equal(false);
  });

  it('should return correct component definitions when orientation is horizontal', () => {
    const result = refLineLabels.render();
    expect(result).to.deep.equal([
      {
        fontSize: '11px',
        fontFamily: 'San serif',
        type: 'text',
        text: 'ref',
        title: 'label tooltip',
        dx: 0,
        dy: 0,
        maxWidth: 80,
        width: 80,
        fill: 'red',
        baseline: 'central',
        anchor: 'middle',
        y: 95,
        x: 101,
        labelID: 'x-0',
      },
      {
        fontSize: '11px',
        fontFamily: 'San serif',
        type: 'text',
        text: 'label 2',
        title: 'label tooltip',
        dx: 0,
        dy: 0,
        maxWidth: 80,
        width: 80,
        fill: 'red',
        baseline: 'central',
        anchor: 'middle',
        y: 105,
        x: 101,
        labelID: 'x-0',
      },
      {
        fontSize: '11px',
        fontFamily: 'San serif',
        type: 'text',
        text: 'ref label 3',
        title: 'label tooltip',
        dx: 0,
        dy: 0,
        maxWidth: 80,
        width: 80,
        fill: 'blue',
        baseline: 'central',
        anchor: 'middle',
        y: 100,
        x: 203,
        labelID: 'x-1',
      },
      'lower oobs, dock top',
      'upper oobs, dock top',
    ]);
  });

  it('should return correct component definitions when orientation is vertical', () => {
    refLineLabels.settings.layout = { dock: 'right' };
    const result = refLineLabels.render();
    expect(result).to.deep.equal([
      {
        fontSize: '11px',
        fontFamily: 'San serif',
        type: 'text',
        text: 'ref',
        title: 'label tooltip',
        dx: 0,
        dy: 0,
        maxWidth: 80,
        width: 80,
        fill: 'red',
        baseline: 'central',
        anchor: 'middle',
        x: 200,
        y: 96,
        labelID: 'y-0',
      },
      {
        fontSize: '11px',
        fontFamily: 'San serif',
        type: 'text',
        text: 'label 2',
        title: 'label tooltip',
        dx: 0,
        dy: 0,
        maxWidth: 80,
        width: 80,
        fill: 'red',
        baseline: 'central',
        anchor: 'middle',
        x: 200,
        y: 106,
        labelID: 'y-0',
      },
      {
        fontSize: '11px',
        fontFamily: 'San serif',
        type: 'text',
        text: 'ref label 3',
        title: 'label tooltip',
        dx: 0,
        dy: 0,
        maxWidth: 80,
        width: 80,
        fill: 'blue',
        baseline: 'central',
        anchor: 'middle',
        x: 200,
        y: 203,
        labelID: 'y-1',
      },
      'lower oobs, dock right',
      'upper oobs, dock right',
    ]);
  });
});
