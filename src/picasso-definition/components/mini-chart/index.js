import createMiniPoints from './mini-points';
import createBackgroundRect from './background-rect';
import createNavigationRect from './navigation-rect';

export default function createMiniChart(models) {
  const backgroundWindow = createBackgroundRect(models);
  const navigationWindow = createNavigationRect(models);
  const miniChartPoints = createMiniPoints(models);
  return [backgroundWindow, miniChartPoints, navigationWindow];
}
