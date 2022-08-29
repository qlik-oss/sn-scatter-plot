const getSelectionContext = (layoutService) =>
  layoutService.meta.isBigData || layoutService.meta.isLargeNumDataPoints ? 'lazySelection' : 'selection';

export default getSelectionContext;
