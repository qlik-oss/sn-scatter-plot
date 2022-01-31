import attrExpr from './attr-expr';

function retriveAttrExpsFromNodes(nodes, layout, dataset) {
  const customAttrExps = [];

  nodes.forEach((node) => {
    customAttrExps.push(attrExpr.getCustomAttrExps(dataset, node, layout));
  });

  return customAttrExps;
}

export default function getAttributeExpression({ nodes, layout, dataset }) {
  const customAttrExps = retriveAttrExpsFromNodes(nodes, layout, dataset);
  const result = customAttrExps.reduce(
    (attrExprResult, attribute) => ({
      customTooltipAttrExpsArr: attrExprResult.customTooltipAttrExpsArr.concat(attribute.customTooltipAttrExpsArr),
      customTooltipInfoAttrExpsArr: attrExprResult.customTooltipInfoAttrExpsArr.concat(
        attribute.customTooltipInfoAttrExpsArr
      ),
    }),
    { customTooltipAttrExpsArr: [], customTooltipInfoAttrExpsArr: [] }
  );

  return result;
}
