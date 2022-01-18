import customTooltipMigrator from '..';

describe('Custom Tooltip Migrator', () => {
  describe('check if we should migrate', () => {
    let layout;
    let dimensions;
    beforeEach(() => {
      dimensions = () => layout.qHyperCube.qDimensionInfo;
    });

    it('check layout - empty dimension and measure info', () => {
      layout = {
        qHyperCube: {
          qDimensionInfo: [
            {
              qAttrExprInfo: [],
            },
          ],
          qMeasureInfo: [
            {
              qAttrExprInfo: [],
            },
          ],
        },
        tooltip: {
          data: {
            qHyperCube: {
              qMeasureInfo: [
                {
                  qDef: { qDef: 'sum(total population)' },
                },
              ],
            },
          },
        },
      };
      const tooltipLayoutHypercube = layout.tooltip.data.qHyperCube;
      const shouldMigrate = customTooltipMigrator.attrExpr.checkForBackwardCompatibility(
        tooltipLayoutHypercube,
        dimensions()
      );
      expect(shouldMigrate).to.equals(true);
    });
    it('check layout - attribute exists in dimension info', () => {
      layout = {
        qHyperCube: {
          qDimensionInfo: [
            {
              qAttrExprInfo: [
                { id: 'customTooltipExpression', qAttribute: false, qExpression: 'sum(total population)' },
              ],
            },
          ],
        },
        tooltip: {
          data: {
            qHyperCube: {
              qMeasureInfo: [
                {
                  qDef: { qDef: 'sum(total population)' },
                },
              ],
            },
          },
        },
      };
      const tooltipLayoutHypercube = layout.tooltip.data.qHyperCube;
      const shouldMigrate = customTooltipMigrator.attrExpr.checkForBackwardCompatibility(
        tooltipLayoutHypercube,
        dimensions()
      );
      expect(shouldMigrate).to.equals(true);
    });
    it('check layout - empty tooltip measures', () => {
      layout = {
        qHyperCube: {
          qDimensionInfo: [
            {
              qAttrExprInfo: [],
            },
          ],
          qMeasureInfo: [
            {
              qAttrExprInfo: [],
            },
          ],
        },
        tooltip: {
          data: {
            qHyperCube: {
              qMeasureInfo: [],
            },
          },
        },
      };
      const tooltipLayoutHypercube = layout.tooltip.data.qHyperCube;
      const shouldMigrate = customTooltipMigrator.attrExpr.checkForBackwardCompatibility(
        tooltipLayoutHypercube,
        dimensions()
      );
      expect(shouldMigrate).to.equals(false);
    });
  });

  describe('migrate properties in dimensions', () => {
    let properties;

    it('add tooltip measures properties when dimensions have no attribute expression', () => {
      properties = {
        qHyperCubeDef: {
          qDimensions: [
            {
              qAttributeExpressions: [],
            },
          ],
        },
        tooltip: {
          data: {
            qHyperCubeDef: {
              qMeasures: [
                {
                  qDef: { qDef: 'sum(total population)' },
                },
              ],
            },
          },
        },
      };
      const newProperties = customTooltipMigrator.attrExpr.migrateProperties(properties);
      expect(newProperties.qHyperCubeDef.qDimensions[0].qAttributeExpressions[0].qExpression).to.equals(
        'sum(total population)'
      );
      expect(newProperties.tooltip.data).to.be.undefined;
    });

    it('add tooltip measures properties when dimensions already have attribute expression', () => {
      properties = {
        qHyperCubeDef: {
          qDimensions: [
            {
              qAttributeExpressions: [
                { id: 'customTooltipExpression', qAttribute: false, qExpression: 'sum(total population)' },
              ],
            },
          ],
        },
        tooltip: {
          data: {
            qHyperCubeDef: {
              qMeasures: [
                {
                  qDef: { qDef: 'sum(total population)' },
                },
              ],
            },
          },
        },
      };
      const newProperties = customTooltipMigrator.attrExpr.migrateProperties(properties);
      expect(newProperties.qHyperCubeDef.qDimensions[0].qAttributeExpressions.length).to.equals(2);
      expect(newProperties.qHyperCubeDef.qDimensions[0].qAttributeExpressions[0].qExpression).to.equals(
        'sum(total population)'
      );
      expect(newProperties.tooltip.data).to.be.undefined;
    });
  });

  describe('should patch properties in measures', () => {
    let properties;

    beforeEach(() => {
      properties = {
        qHyperCubeDef: {
          qDimensions: [
            {
              qAttributeExpressions: [],
            },
            {
              qAttributeExpressions: [
                {
                  id: 'foobar',
                },
              ],
            },
          ],
        },
        tooltip: {
          data: {
            qHyperCubeDef: {
              qMeasures: [
                {
                  qDef: { qDef: 'sum(total population) & "foobar"' },
                },
              ],
            },
          },
        },
      };
    });

    it('patched properties - targeting measure', () => {
      const patches = customTooltipMigrator.attrExpr.getPatches(properties);
      expect(patches.length).to.equals(2);
      expect(patches[0].qPath).to.equals('/qHyperCubeDef/qDimensions/1/qAttributeExpressions/1');
      expect(patches[0].qOp).to.equals('add');
      expect(patches[0].qValue).to.equals(
        '{"qExpression":"sum(total population) & \\"foobar\\"","id":"customTooltipExpression"}'
      );
      expect(patches[1].qPath).to.equals('/tooltip/data');
      expect(patches[1].qOp).to.equals('remove');
    });
  });
});
