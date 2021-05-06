import { useElement, useEffect, useState, useOptions } from '@nebula.js/stardust';
import useActions from './use-actions';
import configurePicasso from '../configure-picasso';
import createViewState from './viewstate';

const useCore = () => {
  const element = useElement();
  const options = useOptions();
  const actions = useActions();

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

    const viewState = createViewState();
    setCore({
      picassoInstance,
      chart,
      actions,
      viewState,
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return core;
};

export default useCore;
