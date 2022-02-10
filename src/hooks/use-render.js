import { useEffect } from '@nebula.js/stardust';

const useRender = ({ settings, models, chart }) => {
  useEffect(() => {
    if (!settings || !chart) {
      return;
    }

    const { chartModel, dockService, layoutService } = models;
    const { width, height } = dockService.meta.chart.size;
    const { clientWidth: w, clientHeight: h } = chart.element;
    if (!layoutService.meta.isSnapshot && (w !== Math.round(width) || h !== Math.round(height))) {
      return;
    }
    chartModel.command.update({ settings });
  }, [settings]);
};

export default useRender;
