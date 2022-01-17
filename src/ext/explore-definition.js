import showCompressionResolution from './show-compression-resolution';
import colorModeOptions from './color-mode-options';
import useDimValColShow from './use-dim-val-col-show';

const getNumMeasures = (obj) => obj?.qHyperCubeDef?.qMeasures?.length || 0;

const getDimensionLayouts = (layout) => layout?.qHyperCube?.qDimensionInfo || [];

export default {
  type: 'items',
  component: 'accordion',
  items: {
    data: {
      uses: 'data',
    },
    presentation: {
      uses: 'presentation',
      items: {
        showNavigation: {
          type: 'boolean',
          translation: 'Common.Navigation',
          component: 'switch',
          ref: 'navigation',
          options: [
            {
              value: true,
              translation: 'Common.Auto',
            },
            {
              value: false,
              translation: 'properties.off',
            },
          ],
        },
        showLabels: {
          component: 'radio-list',
          translation: 'properties.labels',
          type: 'number',
          ref: 'labels.mode',
          options() {
            return [
              {
                value: 1,
                translation: 'Common.Auto',
              },
              {
                value: 2,
                translation: 'Common.All',
              },
              {
                value: 0,
                translation: 'Common.None',
              },
            ];
          },
        },
        bubbleSizes: {
          type: 'integer',
          component: 'slider',
          ref: 'dataPoint.bubbleSizes',
          translation: 'properties.dataPoints.bubbleSizes',
          min: 1,
          max: 20,
          step: 1,
          show(data) {
            return getNumMeasures(data) < 3;
          },
        },
        rangeBubbleSizes: {
          type: 'array',
          component: 'slider',
          ref: 'dataPoint.rangeBubbleSizes',
          translation: 'properties.dataPoints.bubbleSizes',
          min: 1,
          max: 20,
          step: 1,
          show(data) {
            return getNumMeasures(data) > 2;
          },
        },
        queryLevel: {
          type: 'integer',
          component: 'slider',
          ref: 'compressionResolution',
          translation: 'properties.compression.resolution',
          min: 4,
          max: 8,
          step: 1,
          show(data, layout) {
            return showCompressionResolution(layout);
          },
        },
      },
    },
    color: {
      uses: 'color',
      items: {
        mode: {
          options: colorModeOptions,
        },
        dimension: {
          items: {
            colorScheme: {
              show(data, layout) {
                const dim = getDimensionLayouts(layout)[0];
                const dimColVal =
                  data.color && data.color.mode === 'byDimension' && data.color.useDimColVal && useDimValColShow(data);
                return !((dim && dim.qCardinal <= 12) || dimColVal);
              },
            },
            persistentColors: {
              show(data) {
                return !(
                  data.color &&
                  data.color.mode === 'byDimension' &&
                  data.color.useDimColVal &&
                  useDimValColShow(data)
                );
              },
            },
          },
        },
      },
    },
  },
};
