import createMiniPoints from './mini-points';
import createBackgroundWindow from './background-window';
import createNavigationWindow from './navigation-window';

export default function createMiniChart({ models }) {
  const { layoutService, chartModel } = models;
  if (!layoutService.meta.isBigData || layoutService.meta.isSnapshot) {
    return [];
  }
  const backgroundWindow = createBackgroundWindow(chartModel);
  const navigationWindow = createNavigationWindow(chartModel);
  const miniChartPoints = createMiniPoints(chartModel);
  return [backgroundWindow, miniChartPoints, navigationWindow];
}
