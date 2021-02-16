import * as glyphCount from '../glyph-count';
import createAxes from '../index';

describe('axes', () => {
  let sandbox;
  let context;
  let layout;
  let layoutModel;
  let dockModel;
  let axes;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    context = {
      rtl: false,
      theme: {
        getStyle: sandbox.spy(),
      },
    };
    dockModel = {
      chartSize: {
        width: 700,
        height: 600,
      },
      x: {
        dock: 'bottom',
      },
      y: {
        dock: 'left',
      },
    };
    layout = {
      xAxis: {
        show: 'all',
        label: 'auto',
      },
      yAxis: {
        show: 'all',
      },
    };
    layoutModel = {
      getLayout: () => layout,
      getLayoutValue: (axis) => layout[axis],
    };

    sandbox.stub(glyphCount, 'default').returns(5);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create two axes', () => {
    axes = createAxes({ context, layoutModel, dockModel });
    expect(axes.length).to.equal(2);
  });

  describe('x-axis', () => {
    it('should have correct show property for labels', () => {
      expect(axes[0].settings.labels.show).to.equal(true);
      layout.xAxis.show = 'title';
      axes = createAxes({ context, layoutModel, dockModel });
      expect(axes[0].settings.labels.show).to.equal(false);
    });

    it('should have correct mode property for labels', () => {
      expect(axes[0].settings.labels.mode).to.equal('auto');
      layout.xAxis.label = 'tilted';
      axes = createAxes({ context, layoutModel, dockModel });
      expect(axes[0].settings.labels.mode).to.equal('tilted');
    });
  });

  describe('y-axis', () => {
    it('should have correct show property for labels', () => {
      expect(axes[1].settings.labels.show).to.equal(true);
      layout.yAxis.show = 'title';
      axes = createAxes({ context, layoutModel, dockModel });
      expect(axes[1].settings.labels.show).to.equal(false);
    });
  });
});
