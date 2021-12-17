import KEYS from '../../../constants/keys';

// const getSelectedArea = (viewHandler) => {
//   const { x1, x2, y1, y2, newX1, newX2, newY1, newY2 } = viewHandler.getRangeSelectionView();
//   console.log(viewHandler.getRangeSelectionView());
//   if (newX1 < x1 && newX2 < x1) {
//     viewHandler.setRangeSelectionView({ x1: newX2, x2, y1, y2, newX1: 0, newX2: 0, newY1, newY2 });
//   } else if (newX1 > x2 && newX2 > x2) {
//     viewHandler.setRangeSelectionView({ x1, x2: newX2, y1, y2, newX1: 0, newX2: 0, newY1, newY2 });
//   } else if (newX1 < x2 && newX2 < x2) {
//     if (newX2 <= x1) {
//       viewHandler.setRangeSelectionView({ x1: newX2, x2: x1, y1, y2, newX1: 0, newX2: 0, newY1, newY2 });
//     } else {
//       viewHandler.setRangeSelectionView({ x1, x2: newX2, y1, y2, newX1: 0, newX2: 0, newY1, newY2 });
//     }
//   } else if (newX1 > x1 && newX2 > x1) {
//     if (newX1 >= x2) {
//       viewHandler.setRangeSelectionView({ x1: x2, x2: newX2, y1, y2, newX1: 0, newX2: 0, newY1, newY2 });
//     } else {
//       viewHandler.setRangeSelectionView({ x1: newX2, x2, y1, y2, newX1: 0, newX2: 0, newY1, newY2 });
//     }
//   } else {
//     return viewHandler.getRangeSelectionView();
//   }

//   return viewHandler.getRangeSelectionView();
// };

export default function createHeatMapHighLight(chartModel) {
  const dataHandler = chartModel.query.getDataHandler();
  const viewHandler = chartModel.query.getViewHandler();
  return {
    key: KEYS.COMPONENT.HEAT_MAP_HIGH_LIGHT,
    type: 'heat-map-high-light',
    show: () => dataHandler.getMeta().isBinnedData,
    settings: {
      rangeSelectionView: () => viewHandler.getRangeSelectionView(),
    },
  };
}
