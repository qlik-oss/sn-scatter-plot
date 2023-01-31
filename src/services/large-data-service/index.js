import isProgressiveAllowed from '../../utils/is-progressive-allowed';

export default function createLargeDataService({ layoutService, options }) {
  const shouldUseProgressive = () => options?.progressiveRendering !== false && isProgressiveAllowed(layoutService);

  // TO DO
  // Bring all logics of progressive rendering to this file
  return {
    shouldUseProgressive,
  };
}
