import { useEffect } from '@nebula.js/stardust';

const useRender = ({ settings, models, chart }) => {
  useEffect(() => {
    if (!settings) {
      return;
    }
    const { width, height } = models.dockService.meta.chart.size;
    const { clientWidth: w, clientHeight: h } = chart?.element;
    if (w !== Math.round(width) || h !== Math.round(height)) {
      return;
    }
    const { chartModel } = models;
    chartModel.command.update({ settings });
  }, [settings]);
};

export default useRender;
