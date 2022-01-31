import attrExpr from '../attr-expr';
import TOOLTIP from '../../constants';

describe('Custom Tooltip Attribute Expressions', () => {
  describe('retrieveAttrExps', () => {
    let sandbox;
    let datasetField;
    let dataset;
    let node;
    let layout;
    let formatter;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      datasetField = {
        title: () => 'ds value',
        formatter: () => {
          const fn = (val) => `${val}`;
          return fn;
        },
      };
      dataset = () => ({
        field: () => datasetField,
      });
      formatter = sandbox.stub().callsFake((v) => `formatted ${v}`);
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('retrieve attribute from dimensions', () => {
      layout = {
        qHyperCube: {
          qDimensionInfo: [
            {
              qAttrExprInfo: [
                {
                  id: TOOLTIP.CUSTOM.EXPRESSION,
                  qFallbackTitle: 'first dimension attribute expression',
                },
                {
                  id: TOOLTIP.CUSTOM.EXPRESSION,
                  qFallbackTitle: 'second dimension attribute expression',
                },
              ],
            },
          ],
          qMeasureInfo: [],
        },
      };

      node = {
        attrs: {},
        data: {
          customTooltipAttrExps: {
            field: 'qDimensionInfo/0',
            value: [
              {
                source: {
                  key: 'qHyperCube',
                  field: `qDimensionInfo/0/qAttrExprInfo/0`,
                },
                label: 111,
              },
              {
                source: {
                  key: 'qHyperCube',
                  field: `qDimensionInfo/0/qAttrExprInfo/1`,
                },
                label: 'secondValue',
              },
            ],
          },
        },
      };

      const attrExps = attrExpr.getCustomAttrExps(dataset, node, layout, formatter);
      expect(attrExps.customTooltipAttrExpsArr.length).to.equals(2);
      expect(attrExps.customTooltipAttrExpsArr[0]).to.deep.equal({
        label: 'first dimension attribute expression',
        value: '111',
      });
      expect(attrExps.customTooltipAttrExpsArr[1]).to.deep.equal({
        label: 'second dimension attribute expression',
        value: 'secondValue',
      });
    });

    it('retrieve title and description attribute from dimensions', () => {
      layout = {
        qHyperCube: {
          qDimensionInfo: [
            {
              qAttrExprInfo: [
                {
                  id: TOOLTIP.CUSTOM.EXPRESSION,
                  qFallbackTitle: 'dimension attribute expression',
                },
                {
                  id: TOOLTIP.CUSTOM.TITLE,
                },
                {
                  id: TOOLTIP.CUSTOM.DESCRIPTION,
                },
              ],
            },
          ],
          qMeasureInfo: [],
        },
      };

      node = {
        attrs: {},
        data: {
          customTooltipAttrExps: {
            field: 'qDimensionInfo/0',
            value: [
              {
                source: {
                  key: 'qHyperCube',
                  field: `qDimensionInfo/0/qAttrExprInfo/0`,
                },
                label: 111,
              },
              {
                source: {
                  key: 'qHyperCube',
                  field: `qDimensionInfo/0/qAttrExprInfo/1`,
                },
                value: '-',
                label: 'title value',
              },
              {
                source: {
                  key: 'qHyperCube',
                  field: `qDimensionInfo/0/qAttrExprInfo/2`,
                },
                value: 'unparsed value',
                label: '',
              },
            ],
          },
        },
      };

      const attrExps = attrExpr.getCustomAttrExps(dataset, node, layout, formatter);
      expect(attrExps.customTooltipAttrExpsArr.length).to.equals(1);
      expect(attrExps.customTooltipAttrExpsArr[0]).to.deep.equal({
        label: 'dimension attribute expression',
        value: '111',
      });
      expect(attrExps.customTooltipInfoAttrExpsArr.length).to.equals(2);
      expect(attrExps.customTooltipInfoAttrExpsArr[0]).to.deep.equal({
        id: TOOLTIP.CUSTOM.TITLE,
        title: 'title value',
        value: 'title value',
      });
      expect(attrExps.customTooltipInfoAttrExpsArr[1]).to.deep.equal({
        id: TOOLTIP.CUSTOM.DESCRIPTION,
        value: 'ds value',
      });
    });

    it('does not retrieve attribute expressions', () => {
      layout = {
        qHyperCube: {
          qDimensionInfo: [],
          qMeasureInfo: [],
        },
      };
      node = {
        attrs: {},
        data: {
          customTooltipAttrExps: {},
        },
      };
      const attrExps = attrExpr.getCustomAttrExps(dataset, node, layout, formatter);
      expect(attrExps.customTooltipAttrExpsArr.length).to.equals(0);
    });
  });
});
