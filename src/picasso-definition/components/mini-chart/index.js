import createMiniPoints from './mini-points';
import createBackgroundWindow from './background-window';
import createNavigationWindow from './navigation-window';

export default function createMiniChart({ models, context }) {
  const { layoutService, chartModel } = models;
  if (!layoutService.meta.isBigData || layoutService.meta.isSnapshot) {
    return [];
  }
  const { rtl } = context;
  const backgroundWindow = createBackgroundWindow(chartModel, rtl);
  const navigationWindow = createNavigationWindow(chartModel, rtl);
  const miniChartPoints = createMiniPoints(chartModel, rtl);
  return [backgroundWindow, miniChartPoints, navigationWindow];
}
