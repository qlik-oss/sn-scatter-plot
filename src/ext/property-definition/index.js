/* eslint-disable no-param-reassign */
import { setValue, getValue } from 'qlik-chart-modules';
import trendlineDefinition from './trendlines-definition';
import showCompressionResolution from '../show-compression-resolution';
import colorModeOptions from './color-mode-options';
import showUseDimValCol from '../show-use-dim-val-col';
import compressionNoteProperties from './compression-note-properties';
import NUMBERS from '../../constants/numbers';
import getStylingPanelDefinition from './styling-panel-definition';

const { MAX_NR_SCATTER, DEFAULT_VISIBLE_BUBBLES, MAX_VISIBLE_BUBBLES } = NUMBERS;

const persistentColorsShow = (data) => !getValue(data, 'color.auto') && getValue(data, 'color.mode') === 'byDimension';

export default function propertyDefinition(env) {
  const { flags } = env;

  // Feature Flags for Styling Panel
  const stylingPanelEnabled = flags.isEnabled('SENSECLIENT_IM_2206_STYLINGPANEL_SCATTERPLOT');
  const bkgOptionsEnabled = flags.isEnabled('SENSECLIENT_IM_2206_SCATTERPLOT_BG');

  const trendlines = trendlineDefinition(env);

  const change = (data) => {
    if (!data.color?.auto) {
      setValue(data, 'color.mode', 'primary');
      setValue(data, 'color.useBaseColors', 'off');
    }
  };

  const simpleColorModeOptions = (data) => {
    const options = [
      {
        value: 'primary',
        translation: 'properties.colorMode.primary',
      },
      {
        value: 'byDimension',
        translation: 'properties.colorMode.byDimension',
      },
    ];
    switch (data.color?.mode) {
      case 'byMeasure':
        options.push({
          value: 'byMeasure',
          translation: 'properties.colorMode.byMeasure',
        });
        break;
      case 'byExpression':
        options.push({
          value: 'byExpression',
          translation: 'properties.colorMode.byExpression',
        });
        break;
      default: {
        break;
      }
    }
    return options;
  };

  const getAxisTitle = (handler, axis) => {
    let label;
    const measure = axis === 'x' ? handler.getMeasureLayouts()[0] : handler.getMeasureLayouts()[1];

    if (measure && !measure.qError) {
      label = env.translator.get(`properties.${axis}AxisWithInfo`, [measure.qFallbackTitle]);
    } else {
      label = env.translator.get(`properties.${axis}Axis`);
    }

    return label;
  };

  const simpleColors = {
    items: {
      simpleItems: {
        items: {
          autoColor: {
            label: (data) => {
              if (data.color?.auto)
                return env.translator.get('Simple.Color.Auto', env.translator.get('properties.colorMode.primary'));
              return env.translator.get('Common.Custom');
            },
            change,
          },
          colorMode: {
            options: simpleColorModeOptions,
          },
        },
      },
    },
  };

  const simpleLabels = {
    items: {
      labels: {
        items: {
          header: {
            show(props) {
              return props.qHyperCubeDef.qDimensions.length && props.qHyperCubeDef.qMeasures.length >= 2;
            },
          },
          labels: {
            component: 'checkbox',
            ref: 'labels.mode',
            type: 'number',
            translation: 'Simple.Label.Show',
            defaultValue: 1,
            show(props) {
              return props.qHyperCubeDef.qDimensions.length && props.qHyperCubeDef.qMeasures.length >= 2;
            },
            convertFunctions: {
              get(getter, def, args, data) {
                return data.labels.mode;
              },
              set(value, setter, def, args, data) {
                data.labels.mode = value ? 1 : 0;
              },
            },
          },
          xAxisTitle: {
            component: 'checkbox',
            ref: 'xAxis.show',
            type: 'string',
            translation: 'Simple.Label.XAxis.Hide',
            defaultValue: 'all',
            show(props) {
              return props.qHyperCubeDef.qDimensions.length && props.qHyperCubeDef.qMeasures.length >= 2;
            },
            convertFunctions: {
              get(getter, def, args, data) {
                return data.xAxis.show === 'labels' || data.xAxis.show === 'none';
              },
              set(value, setter, def, args, data) {
                data.xAxis.show = value ? 'labels' : 'all';
              },
            },
          },
          yAxisTitle: {
            component: 'checkbox',
            ref: 'yAxis.show',
            type: 'string',
            translation: 'Simple.Label.YAxis.Hide',
            defaultValue: 'all',
            show(props) {
              return props.qHyperCubeDef.qDimensions.length && props.qHyperCubeDef.qMeasures.length >= 2;
            },
            convertFunctions: {
              get(getter, def, args, data) {
                return data.yAxis.show === 'labels' || data.yAxis.show === 'none';
              },
              set(value, setter, def, args, data) {
                data.yAxis.show = value ? 'labels' : 'all';
              },
            },
          },
        },
      },
    },
  };

  const settings = {
    uses: 'settings',
    items: {
      simpleLabels,
      general: {
        items: {
          showDisclaimer: {
            translation: 'properties.showDisclaimer',
            type: 'boolean',
            ref: 'showDisclaimer',
            component: 'switch',
            defaultValue: true,
            options: [
              {
                value: true,
                translation: 'Common.Show',
              },
              {
                value: false,
                translation: 'properties.hide',
              },
            ],
          },
        },
      },
      presentation: {
        type: 'items',
        translation: 'properties.presentation',
        grouped: true,
        items: {
          styleEditor: stylingPanelEnabled && getStylingPanelDefinition(bkgOptionsEnabled),
          showNavigation: {
            ref: 'navigation',
            type: 'boolean',
            translation: 'Common.Navigation',
            component: 'switch',
            defaultValue: false,
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
          bubbleSizeItems: {
            type: 'items',
            items: {
              bubbleSizes: {
                type: 'integer',
                component: 'slider',
                ref: 'dataPoint.bubbleSizes',
                translation: 'properties.dataPoints.bubbleSizes',
                min: 1,
                max: 20,
                step: 1,
                defaultValue: 5,
                show(data) {
                  return data.qHyperCubeDef.qMeasures.length < 3;
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
                defaultValue: [2, 8],
                show(data) {
                  return data.qHyperCubeDef.qMeasures.length >= 3;
                },
              },
              rangeBubbleCompressionNote: compressionNoteProperties,
            },
          },
          label: {
            type: 'items',
            items: {
              labelMode: {
                ref: 'labels.mode',
                translation: 'properties.labels',
                type: 'string',
                component: 'dropdown',
                defaultValue: 1,
                options: [
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
                ],
                snapshot: {
                  tid: 'property-labels',
                },
              },
              labelModeCompressionNote: compressionNoteProperties,
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
            defaultValue: 5,
            show(data, handler) {
              return showCompressionResolution(handler.layout, flags.isEnabled('NUM_BUBBLES') ? data : undefined);
            },
          },
          maxVisibleBubbles: !flags.isEnabled('NUM_BUBBLES')
            ? undefined
            : {
                type: 'integer',
                expression: 'optional',
                ref: 'maxVisibleBubbles',
                translation: 'properties.dataPoints.maxVisibleBubbles',
                defaultValue: DEFAULT_VISIBLE_BUBBLES,
                min: MAX_NR_SCATTER,
                max: MAX_VISIBLE_BUBBLES,
              },
          gridLines: {
            type: 'items',
            snapshot: {
              tid: 'property-gridLines',
            },
            items: {
              showGridLines: {
                ref: 'gridLine.auto',
                type: 'boolean',
                translation: 'properties.gridLine.spacing',
                component: 'switch',
                defaultValue: true,
                options: [
                  {
                    value: true,
                    translation: 'Common.Auto',
                  },
                  {
                    value: false,
                    translation: 'Common.Custom',
                  },
                ],
              },
              gridSpacing: {
                ref: 'gridLine.spacing',
                type: 'number',
                component: 'dropdown',
                defaultValue: 2,
                options: [
                  {
                    value: 0,
                    translation: 'properties.gridLine.noLines',
                  },
                  {
                    value: 1,
                    translation: 'properties.gridLine.wide',
                  },
                  {
                    value: 2,
                    translation: 'properties.gridLine.medium',
                  },
                  {
                    value: 3,
                    translation: 'properties.gridLine.narrow',
                  },
                ],
                show(data) {
                  return !data.gridLine.auto;
                },
              },
            },
          },
        },
      },
      colorsAndLegend: {
        uses: 'colorsAndLegend',
        items: {
          colors: {
            items: {
              colorsAnLegendCompressionNote: compressionNoteProperties,
              colorMode: {
                options: colorModeOptions,
              },
              persistentColors: {
                show(data) {
                  if (showUseDimValCol(data)) {
                    // If we allow dim value colors, then only show persistence settings if it is off
                    return persistentColorsShow(data) && !getValue(data, 'color.useDimColVal');
                  }
                  return persistentColorsShow(data);
                },
              },
            },
          },
          simpleColors,
          legend: {
            show(data) {
              const { auto, mode, expressionIsColor } = data.color;
              return !auto && mode !== 'primary' && (mode !== 'byExpression' || !expressionIsColor);
            },
          },
        },
      },
      xAxis: {
        type: 'items',
        uses: 'axis.measureAxis',
        label(properties, handler) {
          return getAxisTitle(handler, 'x');
        },
        items: {
          axis: {
            items: {
              measureAxisTitle: {
                component: 'header',
                type: 'string',
                label(properties, handler) {
                  return getAxisTitle(handler, 'x');
                },
                classification: {
                  section: 'axis',
                  tags: ['simple'],
                  exclusive: true,
                },
              },
              show: {
                ref: 'xAxis.show',
                snapshot: {
                  title: 'properties.xAxis',
                  tid: 'property-xAxis',
                },
              },
              dock: {
                ref: 'xAxis.dock',
                show(data) {
                  return data.xAxis.show !== 'none';
                },
                options: [
                  {
                    value: 'near',
                    translation: 'Common.Bottom',
                  },
                  {
                    value: 'far',
                    translation: 'Common.Top',
                  },
                ],
              },
              spacing: {
                ref: 'xAxis.spacing',
                show(data) {
                  return data.xAxis.show !== 'none';
                },
              },
            },
          },
          minMax: {
            type: 'items',
            items: {
              autoMinMax: {
                ref: 'xAxis.autoMinMax',
              },
              minMax: {
                ref: 'xAxis.minMax',
                show(data) {
                  return !data.xAxis.autoMinMax;
                },
              },
              min: {
                ref: 'xAxis.min',
                show(data) {
                  return ['min', 'minMax'].includes(data.xAxis.minMax) && !data.xAxis.autoMinMax;
                },
                invalid(data) {
                  if (data.xAxis.minMax === 'minMax') {
                    return data.xAxis.min >= data.xAxis.max;
                  }
                  return false;
                },
              },
              max: {
                ref: 'xAxis.max',
                show(data) {
                  return ['max', 'minMax'].includes(data.xAxis.minMax) && !data.xAxis.autoMinMax;
                },
                invalid(data) {
                  if (data.xAxis.minMax === 'minMax') {
                    return data.xAxis.min >= data.xAxis.max;
                  }
                  return false;
                },
              },
            },
          },
          startAt: {
            type: 'string',
            component: 'dropdown',
            translation: 'properties.axis.startAt',
            readOnly: (data) => !data.xAxis.autoMinMax && !(data.xAxis.minMax === 'min' && data.xAxis.min === 0),
            options: [
              {
                value: 'zero',
                translation: 'properties.axis.startAt.zero',
              },
              {
                value: 'lowest',
                translation: 'properties.axis.startAt.lowest',
              },
            ],
            defaultValue: 'lowest',
            convertFunctions: {
              get(getter, definition, args, data) {
                const { autoMinMax, minMax, min } = data?.xAxis || {};
                if (autoMinMax === true) {
                  return 'lowest';
                }
                if (!autoMinMax && minMax === 'min' && min === 0) {
                  return 'zero';
                }
                return getter(definition.type);
              },
              set(value, setter, definition, args, data) {
                if (value === 'zero') {
                  setValue(data, 'xAxis.autoMinMax', false);
                  setValue(data, 'xAxis.minMax', 'min');
                  setValue(data, 'xAxis.min', 0);
                } else {
                  setValue(data, 'xAxis.autoMinMax', true);
                }
              },
            },
            classification: {
              section: 'axis',
              tags: ['simple'],
              exclusive: true,
            },
          },
        },
      },
      yAxis: {
        type: 'items',
        uses: 'axis.measureAxis',
        label(properties, handler) {
          return getAxisTitle(handler, 'y');
        },
        items: {
          axis: {
            items: {
              measureAxisTitle: {
                component: 'header',
                type: 'string',
                label(properties, handler) {
                  return getAxisTitle(handler, 'y');
                },
                classification: {
                  section: 'axis',
                  tags: ['simple'],
                  exclusive: true,
                },
              },
              show: {
                ref: 'yAxis.show',
                snapshot: {
                  title: 'properties.yAxis',
                  tid: 'property-yAxis',
                },
              },
              dock: {
                ref: 'yAxis.dock',
                show(data) {
                  return data.yAxis.show !== 'none';
                },
                options(data, handler, args) {
                  const nearStr = args.yMirrorMode ? 'properties.dock.right' : 'properties.dock.left';
                  const farStr = args.yMirrorMode ? 'properties.dock.left' : 'properties.dock.right';
                  return [
                    { value: 'near', translation: nearStr },
                    { value: 'far', translation: farStr },
                  ];
                },
              },
              spacing: {
                ref: 'yAxis.spacing',
                show(data) {
                  return data.yAxis.show !== 'none';
                },
              },
            },
          },
          minMax: {
            type: 'items',
            items: {
              autoMinMax: {
                ref: 'yAxis.autoMinMax',
              },
              minMax: {
                ref: 'yAxis.minMax',
                show(data) {
                  return !data.yAxis.autoMinMax;
                },
              },
              min: {
                ref: 'yAxis.min',
                show(data) {
                  return ['min', 'minMax'].includes(data.yAxis.minMax) && !data.yAxis.autoMinMax;
                },
                invalid(data) {
                  if (data.yAxis.minMax === 'minMax') {
                    return data.yAxis.min >= data.yAxis.max;
                  }
                  return false;
                },
              },
              max: {
                ref: 'yAxis.max',
                show(data) {
                  return ['max', 'minMax'].includes(data.yAxis.minMax) && !data.yAxis.autoMinMax;
                },
                invalid(data) {
                  if (data.yAxis.minMax === 'minMax') {
                    return data.yAxis.min >= data.yAxis.max;
                  }
                  return false;
                },
              },
            },
          },
          startAt: {
            type: 'string',
            component: 'dropdown',
            translation: 'properties.axis.startAt',
            readOnly: (data) => !data.yAxis.autoMinMax && !(data.yAxis.minMax === 'min' && data.yAxis.min === 0),
            options: [
              {
                value: 'zero',
                translation: 'properties.axis.startAt.zero',
              },
              {
                value: 'lowest',
                translation: 'properties.axis.startAt.lowest',
              },
            ],
            defaultValue: 'lowest',
            convertFunctions: {
              get(getter, definition, args, data) {
                const { autoMinMax, minMax, min } = data?.yAxis || {};
                if (autoMinMax === true) {
                  return 'lowest';
                }
                if (!autoMinMax && minMax === 'min' && min === 0) {
                  return 'zero';
                }
                return getter(definition.type);
              },
              set(value, setter, definition, args, data) {
                if (value === 'zero') {
                  setValue(data, 'yAxis.autoMinMax', false);
                  setValue(data, 'yAxis.minMax', 'min');
                  setValue(data, 'yAxis.min', 0);
                } else {
                  setValue(data, 'yAxis.autoMinMax', true);
                }
              },
            },
            classification: {
              section: 'axis',
              tags: ['simple'],
              exclusive: true,
            },
          },
        },
      },
      tooltips: {
        uses: 'tooltip',
      },
    },
  };

  const data = {
    uses: 'data',
  };

  const addons = {
    type: 'items',
    component: 'expandable-items',
    translation: 'properties.addons',
    items: {
      refLinesX: {
        uses: 'reflines',
        ref: 'refLine.refLinesX',
        translation: 'properties.referenceLinesX',
        items: {
          colorBackground: {
            show: false,
          },
        },
      },
      refLinesY: {
        uses: 'reflines',
        ref: 'refLine.refLinesY',
        translation: 'properties.referenceLinesY',
        items: {
          colorBackground: {
            show: false,
          },
        },
      },
      dataHandling: {
        uses: 'dataHandling',
        items: {
          calcCond: {
            uses: 'calcCond',
          },
        },
      },
      trendlines,
    },
  };

  return {
    type: 'items',
    component: 'accordion',
    items: {
      data,
      addons,
      settings,
    },
  };
}
