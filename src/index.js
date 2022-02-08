import { useCore, useModels, useSettings, useRender } from './hooks';
import createQae from './qae';
import ext from './ext/ext';
import setupSnapshot from './snapshot';
import locale from './locale';

export default function scatterplot(env) {
  const { flags } = env;
  locale(env.translator);

  return {
    qae: createQae(env),
    ext: ext(env),
    component() {
      const core = useCore();
      const models = useModels({ core, flags });
      const settings = useSettings({ core, models, flags });

      useRender({ settings, models, chart: core?.chart });
      setupSnapshot({ core, models });
    },
  };
}
