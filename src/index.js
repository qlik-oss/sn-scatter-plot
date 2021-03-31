import { useCore, useModels, useSettings, useRender } from './hooks';
import createQae from './qae';

export default function scatterplot(env) {
  const { flags } = env;
  return {
    qae: createQae(env),
    component() {
      const core = useCore();
      const models = useModels({ core });
      const settings = useSettings({ core, models, flags });

      useRender({ settings, models });
    },
  };
}
