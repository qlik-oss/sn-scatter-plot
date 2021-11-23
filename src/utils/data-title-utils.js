import extend from 'extend';

function changeTo(model, index, altIndex, listAttr, onChange, skipAttributeExpressions) {
  model.getEffectiveProperties().then((oldProperties) => {
    const newProperties = extend(true, {}, oldProperties);
    const oldItem = newProperties.qHyperCubeDef[listAttr][index];
    const newItem = newProperties.qHyperCubeDef.qLayoutExclude.qHyperCubeDef[listAttr][altIndex];
    newItem.qAttributeDimensions = oldItem.qAttributeDimensions;
    oldItem.qAttributeDimensions = [];
    if (!skipAttributeExpressions) {
      newItem.qAttributeExpressions = oldItem.qAttributeExpressions;
      oldItem.qAttributeExpressions = [];
    }
    newProperties.qHyperCubeDef[listAttr][index] = newItem;
    newProperties.qHyperCubeDef.qLayoutExclude.qHyperCubeDef[listAttr][altIndex] = oldItem;
  });
}

// Measure
function getAlternateMeasureTitle(itemProperties, app, translator) {
  const isLibraryItem = !!itemProperties.qLibraryId;

  if (isLibraryItem) {
    return app
      .getMeasure(itemProperties.qLibraryId)
      .then((d) => d.getLayout())
      .catch(() => null)
      .then((layout) => {
        if (!layout) {
          return translator.get('Object.ErrorMessage.MissingMeasure');
        }
        if (layout.qMeasure.qLabelExpression) {
          return layout.qMeasure.qLabelExpression;
        }
        return layout.qMeasure.qLabel || layout.qMeasure.qDef;
      });
  }
  const labelExpression = itemProperties.qDef.qLabelExpression;
  const hasLabelExpression = !!labelExpression;

  if (hasLabelExpression) {
    return app.evaluate(labelExpression);
  }
  const title = itemProperties.qDef.qLabel || itemProperties.qDef.qDef;

  return Promise.resolve(title);
}

export function getMeasurePopoverData({
  altList,
  app,
  dir,
  dock,
  model,
  onChange,
  skipAttributeExpressions,
  translator,
}) {
  if (altList.length === 0) {
    return null;
  }
  return {
    dir,
    dock,
    getAlternatives() {
      const alternatives = altList.map((altItem) =>
        getAlternateMeasureTitle(altItem, app, translator).then((title) => ({
          //eslint-disable-line
          id: altItem.qDef.cId,
          selected: false,
          title,
        }))
      );
      return Promise.all(alternatives);
    },
    changeTo(index, altIndex) {
      changeTo(model, index, altIndex, 'qMeasures', onChange, skipAttributeExpressions);
    },
  };
}
export function getMeasureTitleData(meaInfo, index) {
  return {
    breadcrumbs: [],
    drilldown: false,
    index,
    locked: false,
    text: meaInfo.qFallbackTitle,
    popoverText: meaInfo.qFallbackTitle,
  };
}
