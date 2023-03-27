import { fontResolver as createFontResolver } from 'qlik-chart-modules';
import scatterPlotLabelsDefinition from './styling-utils';

const getStylingPanelDefinition = (bkgOptionsEnabled, flags, translator, theme) => {
  const fontResolver = createFontResolver({
    theme,
    translator,
    config: {
      id: 'scatterPlot',
      paths: ['axis.title', 'axis.label.name', 'label.value', 'referenceLine.label.name'],
    },
  });

  return {
    component: 'styling-panel',
    chartTitle: 'Object.ScatterPlot',
    translation: 'LayerStyleEditor.component.styling',
    subtitle: 'LayerStyleEditor.component.styling',
    ref: 'components',
    useGeneral: true,
    useBackground: bkgOptionsEnabled,
    items: flags?.isEnabled('CLIENT_IM_3050')
      ? {
          axisTitleSection: {
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
          },
          axisLabelSection: {
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
          },
          labelValueSection: {
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
          },
        }
      : undefined,
  };
};

export default getStylingPanelDefinition;
