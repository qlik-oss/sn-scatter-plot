import { useElement, useEffect, useState, useOptions } from '@nebula.js/stardust';
import configurePicasso from '../configure-picasso';

const useCore = () => {
  const element = useElement();
  const options = useOptions();

  const [core, setCore] = useState();

  useEffect(() => {
    element.style.overflow = 'hidden';
    const picasso = configurePicasso();
    const picassoInstance = picasso({
      renderer: { prio: [options.renderer || 'svg'] },
    });

    const chart = picassoInstance.chart({
      element,
      data: [],
      settings: {},
    });

    setCore({
      picassoInstance,
      chart,
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return core;
};

export default useCore;
