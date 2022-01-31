import container from '../container';
import CONST from '../../constants';

describe('Custom Tooltip Container', () => {
  let layout;
  let ctx;

  beforeEach(() => {
    layout = {
      tooltip: {},
    };
    ctx = {
      h: (param1, param2) => param2,
    };
  });

  describe('container', () => {
    it('should create a container', () => {
      layout.tooltip = { chart: { object: { refId: 'myChartId' }, style: { size: 'small' } } };
      const chartContainer = container(ctx, layout);
      expect(chartContainer[0].content[0].id).to.be.equal(CONST.CHART.CONTAINER_ID);
    });
  });
});
