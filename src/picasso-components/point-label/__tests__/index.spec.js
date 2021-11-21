import * as helper from '../get-labels';
import component from '..';

describe('component', () => {
  it('should have correct keys', () => {
    expect(component).to.have.all.keys(['require', 'defaultSettings', 'preferredSize', 'render']);
  });

  describe('defaultSettings', () => {
    it('should have correct keys', () => {
      expect(component.defaultSettings).to.have.all.keys(['settings', 'style']);
    });

    describe('settings', () => {
      it('should have correct keys', () => {
        expect(component.defaultSettings.settings).to.have.all.keys(['rtl', 'label', 'showLabel', 'target', 'mode']);
      });

      describe('label', () => {
        it('should return an undefined object', () => {
          expect(component.defaultSettings.settings.label()).to.deep.equal(undefined);
        });
      });

      describe('showLabel', () => {
        it('should return true', () => {
          expect(component.defaultSettings.settings.showLabel()).to.deep.equal(true);
        });
      });
    });
  });

  describe('preferredSize', () => {
    it('should return correct preferredSize', () => {
      expect(component.preferredSize()).to.deep.equal({ edgeBleed: { top: 0, right: 0, bottom: 0, left: 0 } });
    });
  });

  describe('render', () => {
    let sandbox;
    let create;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      component.chart = { component: sandbox.stub(), findShapes: sandbox.stub() };
      component.chart.component.withArgs('pc').returns('component');
      component.settings = {
        settings: {
          target: { point: 'pc' },
          label: '',
          showLabel: sandbox.stub().returns(true),
          mode: 1,
          debugMode: true,
        },
      };
      component.style = { fontSize: '1px', fontFamily: 'Sans serif', fill: 'red', backgroundColor: 'white' };
      component.renderer = { measureText: sandbox.stub().returns({ height: 10 }) };
      sandbox.stub(helper, 'getLabels');
      sandbox.stub(helper, 'DISTANCE').value(3);
      create = () => component.render();
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should return an empty array if point component does not exist', () => {
      component.chart.component.withArgs('pc').returns(undefined);
      expect(create()).to.deep.equal([]);
    });

    it('should return an empty array if there is no node', () => {
      component.chart.findShapes.withArgs('circle').returns([]);
      component.chart.findShapes.withArgs('path').returns([]);
      expect(create()).to.deep.equal([]);
    });

    it.skip('should return correct labels, rects, and lines', () => {
      component.chart.findShapes.withArgs('path').returns([]);
      component.chart.findShapes.withArgs('circle').returns([{ key: 'pc' }]);
      helper.getLabels.returns({
        topLabels: [{ text: 'top label 1', cx: 0, topRect: { x1: 2, y1: 3, y2: 1 }, textWidth: 10 }],
        bottomLabels: [{ text: 'bottom label 1', cx: 10, bottomRect: { x1: 12, y1: 13, y2: 11 }, textWidth: 110 }],
      });
      expect(create()).to.deep.equal([
        {
          type: 'rect',
          x: 2,
          y: 3,
          width: 10,
          height: 8,
          fill: 'white',
        },
        {
          type: 'rect',
          x: 12,
          y: 13,
          width: 110,
          height: 8,
          fill: 'white',
        },
        {
          type: 'text',
          text: 'top label 1',
          x: 0,
          y: 1,
          fontSize: '1px',
          fontFamily: 'Sans serif',
          fill: 'red',
          baseline: 'text-after-edge',
          anchor: 'middle',
        },
        {
          type: 'text',
          text: 'bottom label 1',
          x: 10,
          y: 13,
          fontSize: '1px',
          fontFamily: 'Sans serif',
          fill: 'red',
          baseline: 'text-before-edge',
          anchor: 'middle',
        },
        {
          type: 'line',
          x1: 0,
          x2: 0,
          y1: 1,
          y2: 3,
          stroke: 'red',
          strokeWidth: 1,
        },
        {
          type: 'line',
          x1: 10,
          x2: 10,
          y1: 11,
          y2: 13,
          stroke: 'red',
          strokeWidth: 1,
        },
      ]);
    });

    it('should return correct labels and lines, but not rects, if mode is ALL or debugMode is false', () => {
      component.chart.findShapes.withArgs('path').returns([]);
      component.chart.findShapes.withArgs('circle').returns([{ key: 'pc' }]);
      helper.getLabels.returns({
        topLabels: [
          {
            text: 'top label 1',
            cx: 0,
            topRect: { x1: 2, y1: 3, y2: 1 },
            textWidth: 10,
            ellipsed: 'top label 1',
            pointValue: 0,
          },
        ],
        bottomLabels: [
          {
            text: 'bottom label 1',
            cx: 10,
            bottomRect: { x1: 12, y1: 13, y2: 11 },
            textWidth: 110,
            ellipsed: 'bottom label 1',
            pointValue: 1,
          },
        ],
      });
      component.settings.settings.debugMode = false;
      expect(create()).to.deep.equal([
        {
          type: 'text',
          text: 'top label 1',
          x: 0,
          y: 1,
          fontSize: '1px',
          fontFamily: 'Sans serif',
          fill: 'red',
          baseline: 'text-after-edge',
          anchor: 'middle',
          pointValue: 0,
        },
        {
          type: 'text',
          text: 'bottom label 1',
          x: 10,
          y: 13,
          fontSize: '1px',
          fontFamily: 'Sans serif',
          fill: 'red',
          baseline: 'text-before-edge',
          anchor: 'middle',
          pointValue: 1,
        },
        {
          type: 'line',
          x1: 0,
          x2: 0,
          y1: 1,
          y2: 3,
          stroke: 'red',
          strokeWidth: 1,
          pointValue: 0,
        },
        {
          type: 'line',
          x1: 10,
          x2: 10,
          y1: 11,
          y2: 13,
          stroke: 'red',
          strokeWidth: 1,
          pointValue: 1,
        },
      ]);
    });
  });
});
