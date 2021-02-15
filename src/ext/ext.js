import pp from './property-definition';

const isValidLayout = (layout) => !!(layout && layout.qHyperCube.qSize.qcy > 0);

export default function ext(env) {
  return {
    definition: pp(env),
    support: {
      snapshot: isValidLayout,
      export: true,
      exportData: true,
      sharing: false,
      viewData: true,
    },
  };
}
