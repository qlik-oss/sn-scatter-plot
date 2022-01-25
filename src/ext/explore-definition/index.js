import showCompressionResolution from '../show-compression-resolution';
import showBubbleSizes from './show-bubble-sizes';
import showRangeBubbleSizes from './show-range-bubble-sizes';
import colorModeOptions from './color-mode-options';
import showColorScheme from './show-color-scheme';
import showPersistentColors from './show-persistent-colors';

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
          type: 'number',
          translation: 'properties.labels',
          component: 'radio-list',
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
          translation: 'properties.dataPoints.bubbleSizes',
          component: 'slider',
          ref: 'dataPoint.bubbleSizes',
          min: 1,
          max: 20,
          step: 1,
          show: showBubbleSizes,
        },
        rangeBubbleSizes: {
          type: 'array',
          translation: 'properties.dataPoints.bubbleSizes',
          component: 'slider',
          ref: 'dataPoint.rangeBubbleSizes',
          min: 1,
          max: 20,
          step: 1,
          show: showRangeBubbleSizes,
        },
        queryLevel: {
          type: 'integer',
          translation: 'properties.compression.resolution',
          component: 'slider',
          ref: 'compressionResolution',
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
              show: showColorScheme,
            },
            persistentColors: {
              show: showPersistentColors,
            },
          },
        },
      },
    },
  },
};
