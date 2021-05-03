import rtlUtils from '../../../../../utils/rtl-utils';
import createColorContent from './color';
import createMeasureContent from './measure';

export default function createPointTooltipContent({ models, rtl }) {
  const { detectTextDirection: getDirection } = rtlUtils;

  const createColor = createColorContent({ models, rtl });

  const createMeasure = createMeasureContent({ rtl });

  const { hasSizeMeasure } = models.layoutService.meta;

  const measureProps = ['x', 'y', hasSizeMeasure ? 'size' : false].filter(Boolean);

  return function createContent({ context }) {
    const { node } = context;
    const { data } = node;
    const { dataset } = context.resources;
    const title = data.label;

    const color = createColor({ context, node });

    const content = {
      dataId: data.value,
      title: {
        label: title,
        direction: getDirection(title),
      },
      color,
    };

    const measures = measureProps.map((prop) =>
      createMeasure({
        node,
        dataset,
        prop,
      })
    );

    const uniqueMeasures = measures.filter(
      (measure, index, self) =>
        index === self.findIndex((m) => m.label[0] === measure.label[0] && m.value === measure.value)
    );

    content.measures = color
      ? uniqueMeasures.filter((measure) => measure.label[0] !== color.label[0] || measure.value !== color.value[1])
      : uniqueMeasures;

    return content;
  };
}
