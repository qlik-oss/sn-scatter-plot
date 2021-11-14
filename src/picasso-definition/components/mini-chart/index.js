import createMiniPoints from './mini-points';
import createBackgroundRect from './background-rect';
import createNavigationRect from './navigation-rect';

export default function createMiniChart({ models, flags }) {
  const backgroundWindow = createBackgroundRect({ models, flags });
  const navigationWindow = createNavigationRect({ models, flags });
  const miniChartPoints = createMiniPoints({ models, flags });
  return [backgroundWindow, miniChartPoints, navigationWindow];
}
