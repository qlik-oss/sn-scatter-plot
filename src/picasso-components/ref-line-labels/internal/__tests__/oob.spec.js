import oob from '../oob';
import oobHelper from '../../../../utils/oob-helper';
import tooltip from '../tooltip';

function createOobs(numOobs) {
  const oobs = [];
  for (let i = 0; i < numOobs; i++) {
    oobs[i] = { title: `oob ${i}`, value: i };
  }
  return oobs;
}

describe('oob', () => {
  let sandbox;
  let labels;

  describe('filterOobLabels', () => {
    it('should return correct result', () => {
      labels = [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 5 },
        { value: 4 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
      ];
      const result = oob.filterOobLabels(labels, 4, 6);
      expect(result.numLowerOobs).to.equal(3);
      expect(result.numUpperOobs).to.equal(2);
      expect(result.filteredLabels).to.deep.equal([{ value: 5 }, { value: 4 }, { value: 6 }]);
    });
  });

  describe('getOobSizes', () => {
    let measureText;
    beforeEach(() => {
      sandbox = sinon.createSandbox();
      measureText = sandbox.stub().returns({ width: 3, height: 4 });
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should run measureText correctly', () => {
      const result = oob.getOobSizes(measureText);
      expect(measureText).to.have.been.callCount(10);
      expect(measureText.getCall(0).args).to.deep.equal([1]);
      expect(measureText.getCall(5).args).to.deep.equal([6]);
      expect(measureText.getCall(9).args).to.deep.equal(['9+']);
      expect(result).to.deep.equal([5, 5]);
    });
  });

  describe('getCircleSize', () => {
    it('should return correct result', () => {
      expect(oob.getCircleSize(9, ['small', 'big'])).to.equal('small');
      expect(oob.getCircleSize(10, ['small', 'big'])).to.equal('big');
    });
  });

  describe('creatOobsInfo', () => {
    labels = [
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 5 },
      { value: 4 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
    ];
    let minValue;
    let maxValue;
    const style = { oob: { size: 7 } };
    const padding = { top: 1, bottom: 2, left: 3, right: 4 };
    const measureText = 'measureText';
    beforeEach(() => {
      minValue = 4;
      maxValue = 6;
      sandbox = sinon.createSandbox();
      sandbox.stub(oob, 'getOobSizes').returns([6, 8]);
      sandbox
        .stub(oob, 'filterOobLabels')
        .withArgs(labels, 4, 6)
        .returns({
          filteredLabels: [{ value: 5 }, { value: 4 }, { value: 6 }],
          lowerOobs: [{ value: 1 }, { value: 2 }, { value: 3 }],
          upperOobs: [{ value: 8 }, { value: 7 }],
          numLowerOobs: 3,
          numUpperOobs: 2,
        });
      oob.filterOobLabels.withArgs(labels, 0, 9).returns({
        filteredLabels: [
          { value: 1 },
          { value: 2 },
          { value: 3 },
          { value: 5 },
          { value: 4 },
          { value: 6 },
          { value: 7 },
          { value: 8 },
        ],
        lowerOobs: [],
        upperOobs: [],
        numLowerOobs: 0,
        numUpperOobs: 0,
      });
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should return correct oob info when orientation is vertical', () => {
      const orientation = 'vertical';
      expect(
        oob.createOobsInfo({ labels, minValue, maxValue, orientation, style, padding, measureText })
      ).to.deep.equal({
        filteredLabels: [{ value: 5 }, { value: 4 }, { value: 6 }],
        lowerOobs: [{ value: 1 }, { value: 2 }, { value: 3 }],
        upperOobs: [{ value: 8 }, { value: 7 }],
        lowerCircleSize: 6,
        upperCircleSize: 6,
        lowerOobSpace: 14,
        upperOobSpace: 15,
      });
    });

    it('should return correct oob info when orientation is horizontal', () => {
      const orientation = 'horizontal';
      expect(
        oob.createOobsInfo({ labels, minValue, maxValue, orientation, style, padding, measureText })
      ).to.deep.equal({
        filteredLabels: [{ value: 5 }, { value: 4 }, { value: 6 }],
        lowerOobs: [{ value: 1 }, { value: 2 }, { value: 3 }],
        upperOobs: [{ value: 8 }, { value: 7 }],
        lowerCircleSize: 6,
        upperCircleSize: 6,
        lowerOobSpace: 16,
        upperOobSpace: 17,
      });
    });

    it('should return correct oob info when there is no oob', () => {
      const orientation = 'horizontal';
      minValue = 0;
      maxValue = 9;
      expect(
        oob.createOobsInfo({ labels, minValue, maxValue, orientation, style, padding, measureText })
      ).to.deep.equal({
        filteredLabels: [
          { value: 1 },
          { value: 2 },
          { value: 3 },
          { value: 5 },
          { value: 4 },
          { value: 6 },
          { value: 7 },
          { value: 8 },
        ],
        lowerOobs: [],
        upperOobs: [],
        lowerCircleSize: 6,
        upperCircleSize: 6,
        lowerOobSpace: 0,
        upperOobSpace: 0,
      });
    });
  });

  describe('createOobs', () => {
    let area;
    let rect;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      rect = { width: 50 };
      area = {
        majorAxis: 'y',
        minorAxis: 'x',
        minorDimension: 'width',
      };
      sandbox.stub(oobHelper, 'createOob').returns('oobSymbol');
      sandbox.stub(oobHelper, 'getDefaultSettings').returns('getDefaultSettings');
      sandbox.stub(tooltip, 'getOobsTooltip').returns('oob tool tips');
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should return correct result oobs is undefined', () => {
      const result = oob.createOobs({ oobs: undefined });
      expect(result).to.deep.equal([]);
    });

    it('should return correct result when num oobs < 1', () => {
      const result = oob.createOobs({ oobs: [] });
      expect(result).to.deep.equal([]);
    });

    it('should run createOob correctly when numOobs > 0', () => {
      const fontSize = 'fontSize';
      const fontFamily = 'fontFamily';
      const fill = 'fill';
      const background = { fill };
      const result = oob.createOobs({
        position: -100,
        radius: 10,
        rect,
        oobs: createOobs(2),
        style: {
          text: {
            fontSize,
            fontFamily,
            fill,
            background,
          },
        },
        area,
      });
      expect(oobHelper.getDefaultSettings).to.have.been.calledOnce;
      expect(oobHelper.createOob).to.have.been.calledOnce;
      expect(oobHelper.createOob.getCall(0).args[0].majorAxis).to.equal('y');
      expect(result[0]).to.equal('oobSymbol');
      expect(result[1]).to.deep.equal({
        type: 'circle',
        r: 10,
        stroke: 'transparent',
        fill: 'fill',
        strokeWidth: 0,
        cx: 25,
        cy: -100,
      });
      expect(result[2]).to.deep.equal({
        type: 'text',
        text: 2,
        title: 'oob tool tips',
        dx: 0,
        dy: 0,
        maxWidth: 50,
        width: 50,
        fontSize: 'fontSize',
        fontFamily: 'fontFamily',
        fill: 'fill',
        baseline: 'central',
        anchor: 'middle',
        x: 25,
        y: -100,
      });
    });

    it('should run createOob correctly when numOobs >= 10', () => {
      const fontSize = 'fontSize';
      const fontFamily = 'fontFamily';
      const fill = 'fill';
      const background = { fill };
      const result = oob.createOobs({
        position: -100,
        radius: 10,
        rect,
        oobs: createOobs(10),
        style: {
          text: {
            fontSize,
            fontFamily,
            fill,
            background,
          },
        },
        area,
      });
      expect(result[2]).to.deep.equal({
        type: 'text',
        text: '9+',
        title: 'oob tool tips',
        dx: 0,
        dy: 0,
        maxWidth: 50,
        width: 50,
        fontSize: 'fontSize',
        fontFamily: 'fontFamily',
        fill: 'fill',
        baseline: 'central',
        anchor: 'middle',
        x: 25,
        y: -100,
      });
    });
  });
});
