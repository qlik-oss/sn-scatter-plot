import KEYS from '../../constants/keys';

export default function getPluginArgs(layoutService) {
  return {
    layout: layoutService.getLayout(),
    keys: {
      scales: {
        x: KEYS.SCALE.X,
        y: KEYS.SCALE.Y,
      },
      components: {
        point: KEYS.COMPONENT.POINT,
      },
    },
  };
}
