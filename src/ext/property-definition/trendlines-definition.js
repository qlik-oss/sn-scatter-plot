/* eslint-disable no-param-reassign */
import { trendlinesService } from 'qlik-chart-modules';

export function updateTrendlines(properties) {
  if (properties.qHyperCubeDef?.qMeasures?.length >= 2) {
    properties.qHyperCubeDef.qMeasures[0].qTrendLines = [];
    properties.qHyperCubeDef.qMeasures[1].qTrendLines = [];
    properties.trendLines?.forEach((qTrendLine) => {
      if (qTrendLine.flipXY) {
        qTrendLine.qXColIx = 2;
        properties.qHyperCubeDef.qMeasures[0].qTrendLines.push(qTrendLine);
      } else {
        qTrendLine.qXColIx = 1;
        properties.qHyperCubeDef.qMeasures[1].qTrendLines.push(qTrendLine);
      }
    });
  }
}

export function clearTrendlines(properties) {
  properties.qHyperCubeDef?.qMeasures?.forEach((measureDef) => {
    measureDef.qTrendLines = [];
  });
}

export default function getDefinition(env) {
  const { flags, translator } = env;
  const trendlines = trendlinesService.propertyPanelProperties({ translator });
  trendlines.translation = 'properties.regressionline';
  trendlines.titleTranslation = undefined;
  trendlines.addTranslation = 'properties.regressionline.add';

  trendlines.ref = 'trendLines';
  trendlines.globalChange = updateTrendlines;
  trendlines.show = () => flags.isEnabled('BEST_FIT_LINE');
  trendlines.items.type.defaultValue = 'LINEAR';
  trendlines.items.flipXY = {
    type: 'boolean',
    defaultValue: false,
    ref: 'flipXY',
    translation: 'properties.regressionline.direction',
    component: 'dropdown',
    options: [
      { value: false, translation: 'properties.regressionline.direction.normal' },
      { value: true, translation: 'properties.regressionline.direction.alternative' },
    ],
  };

  return trendlines;
}
