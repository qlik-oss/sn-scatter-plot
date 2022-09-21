import { usePromise } from '@nebula.js/stardust';

const useRender = ({ settings, models }) => {
  const [, renderError] = usePromise(() => {
    if (!settings) {
      return Promise.resolve();
    }

    const { chartModel } = models;
    return chartModel.command.update({ settings });
  }, [settings]);
  if (renderError) {
    throw renderError;
  }
};

export default useRender;
