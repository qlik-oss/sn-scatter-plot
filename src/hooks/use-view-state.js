import { useEffect, useState } from '@nebula.js/stardust';
import { cache as createViewCache, storage as createViewState } from 'qlik-chart-modules';

export default function useViewState() {
  const [viewState, setViewState] = useState();
  const [viewCache, setViewCache] = useState();

  useEffect(() => {
    setViewState(
      createViewState({
        dataView: {},
        legendScrollOffset: undefined,
      })
    );
    setViewCache(createViewCache());
  }, []);

  return { viewCache, viewState };
}
