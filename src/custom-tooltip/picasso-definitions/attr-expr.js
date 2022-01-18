import TOOLTIP from '../constants';
import tooltipUtils from '../utils';

function extractAttrExpr(layout, measures, dataset, attrExpsValuesObj) {
  const infoList = { [TOOLTIP.CUSTOM.TITLE]: true, [TOOLTIP.CUSTOM.DESCRIPTION]: true };

  const { attrExps, fieldPath } = tooltipUtils.getAttrExprData(layout);

  if (measures.length === 0 || attrExps.length === 0 || fieldPath === '') {
    return attrExpsValuesObj;
  }

  attrExps.forEach((attr, index) => {
    const attrExpsValue = measures[index];
    if (attr.id === TOOLTIP.CUSTOM.EXPRESSION && attrExpsValue) {
      const label = attr.qFallbackTitle;
      const formatedValue =
        attrExpsValue.value !== 'NaN' && !attr.isCustomFormatted
          ? dataset('qHyperCube').field(`${fieldPath}/${index}`).formatter()(attrExpsValue.value)
          : attrExpsValue.value;
      attrExpsValuesObj.customTooltipAttrExpsArr.push({
        label,
        value: formatedValue,
      });
    } else if (infoList[attr.id] && attrExpsValue) {
      const attributeValue =
        attrExpsValue.value !== '-' && attrExpsValue.value !== 'NaN' ? attrExpsValue.value : attrExpsValue.label;
      if (attributeValue && attributeValue !== 'undefined') {
        attrExpsValuesObj.customTooltipInfoAttrExpsArr.push({
          ...(attr.id === TOOLTIP.CUSTOM.TITLE && { title: attributeValue }),
          value: attributeValue,
          id: attr.id,
        });
      }
    }
  });

  return attrExpsValuesObj;
}

function getMeasure(dataset, prop) {
  const measureField = dataset(prop.source.key).field(prop.source.field);
  const measureLabel = measureField.title();
  return {
    label: `${measureLabel}`,
    value: prop.label === '' || prop.label === 'NaN' ? '-' : prop.label,
    field: prop.source.field,
  };
}

const customTooltipAttr = {
  getCustomAttrExps(ds, node, layout) {
    const attrExpsValuesObj = {
      customTooltipAttrExpsArr: [],
      customTooltipInfoAttrExpsArr: [],
    };
    const props = node.data?.customTooltipAttrExps?.value || [];
    if (Number.isNaN(props)) {
      return attrExpsValuesObj;
    }
    const measures = props.map((prop) => {
      const measure = getMeasure(ds, prop);
      return measure;
    });

    return extractAttrExpr(layout, measures, ds, attrExpsValuesObj);
  },
};

export default customTooltipAttr;
