export default function colorModeOptions(data) {
  const colorOptions = [
    {
      value: 'primary',
      translation: 'properties.colorMode.primary',
    },
    {
      value: 'byDimension',
      translation: 'properties.colorMode.byDimension',
    },
    {
      value: 'byMeasure',
      translation: 'properties.colorMode.byMeasure',
    },
  ];
  if (data?.qHyperCubeDef?.qMeasures?.length > 0) {
    colorOptions.push({
      value: 'byExpression',
      translation: 'properties.colorMode.byExpression',
    });
  }
  return colorOptions;
}
