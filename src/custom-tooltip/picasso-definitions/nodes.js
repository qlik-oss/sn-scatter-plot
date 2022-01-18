import TOOLTIP from '../constants';

function getLabel(attribute, attrValue) {
  let label;
  switch (attribute.id) {
    case TOOLTIP.CUSTOM.EXPRESSION:
      if (attrValue.qNum === 'NaN' || attribute.isCustomFormatted) {
        label = attrValue.qText === undefined ? 'NaN' : attrValue.qText;
      } else {
        label = attrValue.qNum;
      }
      break;
    case TOOLTIP.CUSTOM.TITLE:
    case TOOLTIP.CUSTOM.DESCRIPTION:
    case TOOLTIP.CUSTOM.IMAGES:
      label = attrValue.qText === undefined ? attribute.qFallbackTitle : attrValue.qText;
      break;
    default:
      label = 'NaN';
  }
  return label;
}

function retrieveAttributeExpressions(d, layout, target, lastIndex) {
  const attrExprInfo = layout.qHyperCube?.[target]?.[lastIndex]?.qAttrExprInfo || [];
  // when the bar-chart is stacked on dimnesions, we retrieve qSubNodes of the last measure from the last dimension's reference
  const nodes = [];
  const attrExpsValues = d.qSubNodes && d.qSubNodes[lastIndex] ? d.qSubNodes[lastIndex].qAttrExps : d.qAttrExps;
  if (!attrExpsValues) {
    return nodes;
  }
  attrExprInfo.forEach((attribute, attributeIndex) => {
    const attrValue =
      attrExpsValues.qValues && attrExpsValues.qValues[attributeIndex]
        ? attrExpsValues.qValues[attributeIndex]
        : undefined;
    const label = attrValue === undefined ? 'NaN' : getLabel(attribute, attrValue);
    nodes.push({
      source: {
        key: 'qHyperCube',
        field: `${target}/${lastIndex}/qAttrExprInfo/${attributeIndex}`,
      },
      label,
      value: 'value',
    });
  });
  return nodes;
}

const customTooltipNodes = {
  getNode(layout, { dimensionCount }) {
    if (!dimensionCount || dimensionCount < 1) {
      return undefined;
    }
    const lastIndex = dimensionCount - 1;
    const target = 'qDimensionInfo';
    const field = `${target}/${lastIndex}`;
    return {
      field,
      value: (d) => retrieveAttributeExpressions(d, layout, target, lastIndex),
    };
  },
};

export default customTooltipNodes;
