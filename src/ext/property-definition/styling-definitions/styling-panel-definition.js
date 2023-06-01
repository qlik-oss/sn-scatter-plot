import { fontResolver as createFontResolver } from 'qlik-chart-modules';
import scatterPlotLabelsDefinition from './styling-utils';

const getStylingItems = (flags, translator, theme) => {
  const items = {};
  const fontResolver = createFontResolver({
    theme,
    translator,
    flags,
    config: {
      id: 'scatterPlot',
      paths: [
        'axis.title',
        'axis.label.name',
        'label.value',
        'referenceLine.label.name',
        'legend.label',
        'legend.title',
      ],
    },
  });

  if (flags?.isEnabled('CLIENT_IM_3050')) {
    items.axisTitleSection = {
      translation: 'properties.axis.title',
      component: 'panel-section',
      items: {
        labelItems: {
          component: 'items',
          ref: 'components',
          key: 'axis',
          items: scatterPlotLabelsDefinition('axis.title', fontResolver, theme),
        },
      },
    };
    items.axisLabelSection = {
      translation: 'properties.axis.label',
      component: 'panel-section',
      items: {
        labelItems: {
          component: 'items',
          ref: 'components',
          key: 'axis',
          items: scatterPlotLabelsDefinition('axis.label.name', fontResolver, theme),
        },
      },
    };
    items.labelValueSection = {
      translation: 'properties.value.label',
      component: 'panel-section',
      items: {
        labelItems: {
          component: 'items',
          ref: 'components',
          key: 'label',
          items: scatterPlotLabelsDefinition('label.value', fontResolver, theme),
        },
      },
    };
  }

  if (flags.isEnabled('CLIENT_IM_3051')) {
    items.legendTitleSection = {
      translation: 'properties.legend.title',
      component: 'panel-section',
      items: {
        labelItems: {
          component: 'items',
          ref: 'components',
          key: 'legend',
          items: scatterPlotLabelsDefinition('legend.title', fontResolver, theme),
        },
      },
    };
    items.legendLabelSection = {
      translation: 'properties.legend.label',
      component: 'panel-section',
      items: {
        labelItems: {
          component: 'items',
          ref: 'components',
          key: 'legend',
          items: scatterPlotLabelsDefinition('legend.label', fontResolver, theme),
        },
      },
    };
  }

  return Object.keys(items).length > 0 ? items : undefined;
};

const getStylingPanelDefinition = (bkgOptionsEnabled, flags, translator, theme) => ({
  component: 'styling-panel',
  chartTitle: 'Object.ScatterPlot',
  translation: 'LayerStyleEditor.component.styling',
  subtitle: 'LayerStyleEditor.component.styling',
  ref: 'components',
  useGeneral: true,
  useBackground: bkgOptionsEnabled,
  items: getStylingItems(flags, translator, theme),
});

export default getStylingPanelDefinition;
