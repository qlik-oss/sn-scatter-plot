import KEYS from '../../../constants/keys';
import getMeasureValue from './measure-value';

export default function createSection({
  translator,
  custom,
  measureProperties,
  h,
  nodes,
  dataset,
  meta,
  create,
  util,
}) {
  const isHeatMap = meta.triggerer === KEYS.COMPONENT.HEAT_MAP;

  const [first] = nodes;

  const {
    title: customTitle,
    description: customDescription,
    measures: customMeasures,
  } = custom.isEnabled() ? custom.getAttributes({ dataset, nodes }) : {};

  const section = [];

  if (customTitle) {
    section.push(
      create.text({
        value: customTitle,
        style: {
          bold: true,
        },
      })
    );
  }

  if (customDescription) {
    section.push(
      create.text({
        value: customDescription,
      })
    );
  }

  const hideBasic = custom.hideBasic();

  if (!isHeatMap && (!hideBasic || customMeasures.length || (!customTitle && !customDescription))) {
    section.push(
      create.text({
        value: first.data.label,
        style: {
          bold: true,
        },
      })
    );
  }

  if (!hideBasic) {
    if (!isHeatMap) {
      section.push(
        create.color({
          nodes,
          property: 'color',
        })
      );

      section.push(
        ...nodes
          .map((node) =>
            measureProperties
              .map((property) => {
                const data = node.data[property];
                const { key, field } = data.source;

                return create.measure({
                  label: util.dataset.title(key, field),
                  value: getMeasureValue({ dataset, data }),
                });
              })
              .flat()
          )
          .flat()
      );
    } else {
      section.push(
        create.measure({
          label: translator.get('properties.compression.density'),
          value: first.data.binDensity.label,
        })
      );
    }
  }

  if (customMeasures) {
    section.push(
      ...customMeasures.map((m) =>
        create.measure({
          label: m.label,
          value: m.value,
          survive: {
            color: true,
            duplicate: true,
          },
        })
      )
    );
  }

  if (custom.chart.isEnabled()) {
    if (custom.chart.hasLimitation()) {
      custom.chart.destroy();
      section.push(
        create.raw({
          value: custom.chart.createLimitationRow(),
        })
      );
    } else {
      section.push(
        create.raw({
          value: custom.chart.createContainer({ h }),
        })
      );
    }
  }

  const { customTooltipImages: customImages } = first.data;

  if (custom.isEnabled() && customImages) {
    section.push(
      ...customImages.map((i) =>
        create.raw({
          value: custom.createImageRow({ value: i, h }),
        })
      )
    );
  }

  return section;
}
