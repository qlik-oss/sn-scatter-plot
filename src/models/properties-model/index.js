import { getValue } from 'qlik-chart-modules';

const getEffectiveProperties = ({ layout, model }) => {
  if (getValue(layout, 'snapshotData')) {
    return Promise.resolve(null);
  }
  return model.getEffectiveProperties().then((properties) => ({ properties }));
};

export default function createPropertiesModel({ model, layoutService }) {
  const state = {
    properties: undefined,
  };

  return {
    query: {
      getProperties: () => state.properties,
    },
    command: {
      initialize: () =>
        getEffectiveProperties({
          layout: layoutService.getLayout(),
          model,
        }).then((obj) => {
          const { properties } = obj ?? {};
          state.properties = properties;
        }),
    },
  };
}
