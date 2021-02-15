import { useEffect } from '@nebula.js/stardust';

const useRender = ({ settings, models }) => {
  useEffect(() => {
    if (!settings) {
      return;
    }

    const { chartModel } = models;
    chartModel.command.update({ settings });
  }, [settings]);
};

export default useRender;
