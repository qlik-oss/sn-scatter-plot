/* eslint-disable no-param-reassign */
import NUMBERS from '../constants/numbers';
import createCollections from './collections';
import createComponents from './components';
import createScales from './scales';
import createInteractions from './interactions';
import createSelectables from './selectables';
import createFormatters from './formatters';

export default function createPicassoDefinition({
  core,
  models,
  model,
  theme,
  options,
  constraints,
  translator,
  logicalSize,
  flags,
}) {
  const { chart, actions, picasso } = core;
  const { chartModel, colorService, pluginService, layoutService } = models;
  const viewHandler = chartModel.query.getViewHandler();
  const viewState = chartModel.query.getViewState();
  const localeInfo = chartModel.query.getLocaleInfo();
  const context = {
    rtl: options.direction === 'rtl',
    theme,
    translator,
    constraints,
    model,
    localeInfo,
  };

  const scales = createScales({ models, viewState, options });

  const collections = createCollections(models);

  const components = createComponents({ models, context, flags, picasso, model });

  const selectables = createSelectables({ models, actions, scales, flags });

  const componentDefinitions = [...components, ...selectables.components];

  // Disable animations if there are too many points
  if (layoutService.getHyperCubeValue('qSize.qcy', 0) > NUMBERS.MAX_NR_ANIMATION) {
    componentDefinitions.forEach((component) => {
      if (component.animations) {
        component.animations.enabled = false;
      }
    });
  }

  // const chartAnimations = {
  //   enabled: layoutService.getHyperCubeValue('qSize.qcy', 0) <= NUMBERS.MAX_NR_SCATTER,
  //   compensateForLayout(currentNodes, dock, instanceContext, preComputedRect, pathToPoints, pointsToPath) {
  //     if (!currentNodes || currentNodes.length === 0) {
  //       return;
  //     }
  //     switch (instanceContext.key) {
  //       case 'y-axis': {
  //         if (dock === 'right') {
  //           break;
  //         }
  //         const deltaWidth = instanceContext.rect.computed.width - preComputedRect.width;
  //         currentNodes.forEach((node) => {
  //           if (node.type === 'line') {
  //             node.x1 += deltaWidth;
  //             node.x2 += deltaWidth;
  //           } else if (node.type === 'text') {
  //             node.x += deltaWidth;
  //           }
  //         });
  //         break;
  //       }
  //       case 'x-axis':
  //         if (instanceContext.rect.computed.width !== preComputedRect.width) {
  //           const deltaX = instanceContext.rect.computed.x - preComputedRect.x;
  //           const deltaWidth = instanceContext.rect.computed.width - preComputedRect.width;
  //           currentNodes[0].x1 += deltaX;
  //           currentNodes[0].x2 += deltaX + deltaWidth;
  //         }
  //         break;
  //       case 'reference-line-labels-x':
  //       case 'reference-line-labels-y': {
  //         const deltaX = preComputedRect.x - instanceContext.rect.computed.x;
  //         currentNodes.forEach((node) => {
  //           node.x += deltaX;
  //         });
  //         break;
  //       }
  //       case 'point-component':
  //       case 'point-labels':
  //         if (instanceContext.rect.computed.x !== preComputedRect.x) {
  //           const deltaX = preComputedRect.x - instanceContext.rect.computed.x;
  //           currentNodes.forEach((node) => {
  //             switch (node.type) {
  //               case 'circle':
  //                 node.cx += deltaX;
  //                 break;
  //               case 'path': {
  //                 const points = pathToPoints(node.d);
  //                 points.forEach((point) => {
  //                   point.x += deltaX;
  //                 });
  //                 node.d = pointsToPath(points);
  //                 break;
  //               }
  //               case 'text':
  //                 node.x += deltaX;
  //                 break;
  //               case 'line':
  //                 node.x1 += deltaX;
  //                 node.x2 += deltaX;
  //                 break;
  //               default:
  //                 break;
  //             }
  //           });
  //         }
  //         break;
  //       case 'reference-lines-y':
  //         if (instanceContext.rect.computed.width !== preComputedRect.width) {
  //           const deltaWidth = instanceContext.rect.computed.width - preComputedRect.width;
  //           currentNodes.forEach((node) => {
  //             node.x2 += deltaWidth;
  //           });
  //         }
  //         break;
  //       case 'reference-lines-x':
  //         if (instanceContext.rect.computed.x !== preComputedRect.x) {
  //           const deltaX = instanceContext.rect.computed.x - preComputedRect.x;
  //           currentNodes.forEach((node) => {
  //             node.x1 -= deltaX;
  //             node.x2 -= deltaX;
  //           });
  //         }
  //         break;
  //       case 'grid-lines': {
  //         const deltaWidth = instanceContext.rect.computed.width - preComputedRect.width;
  //         const deltaX = instanceContext.rect.computed.x - preComputedRect.x;
  //         currentNodes.forEach((node) => {
  //           if (node.dir === 'x') {
  //             node.x1 -= deltaX;
  //             node.x2 -= deltaX;
  //           } else {
  //             node.x2 += deltaWidth;
  //           }
  //         });
  //         break;
  //       }
  //       default:
  //         break;
  //     }
  //   },
  // };

  return {
    interactions: createInteractions({
      chart,
      actions,
      viewHandler,
      gestures: [...selectables.gestures],
      colorService,
    }),
    scales,
    components: pluginService.extendComponents(componentDefinitions),
    collections,
    palettes: colorService.getPalettes(),
    strategy: {
      layoutModes: NUMBERS.LAYOUT_MODES,
      center: {
        minWidthRatio: 0,
        minHeightRatio: 0,
      },
      logicalSize,
    },
    formatters: createFormatters(),
    // strategy: createDockLayout(layout, {
    //   logicalSize,
    //   minCenterRatio: 0,
    // }),
  };
}
