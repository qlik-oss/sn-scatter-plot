import { useCore, useModels, useSettings, useRender } from './hooks';
import createQae from './qae';

export default function scatterplot(env) {
  return {
    qae: createQae(env),
    component() {
      const core = useCore();
      const models = useModels({ core });
      const settings = useSettings({ core, models });

      useRender({ settings, models });
    },
  };
}
