import objectDefinition from './object-definition';
import dataDefinition from './data-definition';

export default function qae(env) {
  return {
    properties: objectDefinition(env),
    data: {
      targets: [
        {
          path: '/qHyperCubeDef',
          ...dataDefinition(env),
        },
      ],
    },
  };
}
