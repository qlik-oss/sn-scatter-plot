import extend from 'extend';
import TOOLTIP from '../constants';

function convertMeasureToAttrExpr(measure) {
  const id = TOOLTIP.CUSTOM.EXPRESSION;
  const { qNumFormat, qLabel, qLabelExpression, cId } = measure.qDef;
  const attrExpr = measure.qLibraryId
    ? { qLibraryId: measure.qLibraryId, id, qNumFormat, qLabel, qLabelExpression, cId }
    : {
        qExpression: measure.qDef.qDef,
        id,
        qNumFormat,
        qLabel,
        qLabelExpression,
        cId,
      };
  return attrExpr;
}

function addMeasuresToAttrExprs(tooltipMeasures, attrExprs) {
  return attrExprs.concat(tooltipMeasures.map((measure) => convertMeasureToAttrExpr(measure)));
}

function createPatches(attrExprs, tooltipMeasures, lastDimIndex) {
  let index = attrExprs.length;
  const patches = [];
  tooltipMeasures.forEach((measure) => {
    const attrExpr = convertMeasureToAttrExpr(measure);
    const patchValue = JSON.stringify(attrExpr);
    patches.push({
      qPath: `/qHyperCubeDef/qDimensions/${lastDimIndex}/qAttributeExpressions/${index}`,
      qOp: 'add',
      qValue: patchValue,
    });
    index++;
  });

  patches.push({
    qPath: '/tooltip/data',
    qOp: 'remove',
  });

  return patches;
}

function getAttrExprs(props) {
  const dimensions = props.qHyperCubeDef?.qDimensions;
  const lastIndex = dimensions.length - 1;
  return dimensions[lastIndex].qAttributeExpressions || [];
}

function setAttrExprs(attrExprs, props) {
  const dimensions = props.qHyperCubeDef?.qDimensions;
  const lastIndex = dimensions.length - 1;
  dimensions[lastIndex].qAttributeExpressions = attrExprs;
}

const customTooltipMigrator = {
  migrateProperties(props) {
    const newProps = extend(true, {}, props);
    const tooltipMeasures = newProps.tooltip?.data?.qHyperCubeDef?.qMeasures || [];
    let attrExprs = getAttrExprs(newProps);
    attrExprs = addMeasuresToAttrExprs(tooltipMeasures, attrExprs);
    setAttrExprs(attrExprs, newProps);
    delete newProps.tooltip?.data;
    return newProps;
  },

  getPatches(props) {
    const tooltipMeasures = props.tooltip?.data?.qHyperCubeDef?.qMeasures || [];
    const lastDimIndex = props.qHyperCubeDef?.qDimensions.length - 1;
    const attrExprs = getAttrExprs(props);
    const patches = createPatches(attrExprs, tooltipMeasures, lastDimIndex);
    return patches;
  },

  checkForBackwardCompatibility(tooltipHypercube, dimensions) {
    const measures = tooltipHypercube.qMeasureInfo || [];
    if (measures.length > 0 && dimensions.length > 0) {
      return true;
    }
    return false;
  },

  // public function updateProperties
  // Parameters:
  //   model: the model of the current chart
  //   layout: the layout of the current chart's visualization
  updateProperties(model, layout) {
    const promise = new Promise((resolve) => {
      const dimensions = layout.qHyperCube?.qDimensionInfo || [];
      const tooltipHypercube = layout.tooltip?.data?.qHyperCube || {};
      const permissionToUpdateProps = layout.qMeta?.privileges?.includes('update');
      if (model && model.getEffectiveProperties && this.checkForBackwardCompatibility(tooltipHypercube, dimensions)) {
        model.getEffectiveProperties().then((oldProps) => {
          if (permissionToUpdateProps) {
            const newProps = this.migrateProperties(oldProps);
            model.setProperties(newProps).then(() => {
              model.app.clearUndoBuffer();
              resolve(true);
            });
          } else {
            const patches = this.getPatches(oldProps);
            model.applyPatches(patches, true).then(() => {
              model.app.clearUndoBuffer();
              resolve(true);
            });
          }
        });
      }
      resolve(false);
    });
    return promise;
  },
};

export default customTooltipMigrator;
