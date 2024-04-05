import attribute from '../attribute';

describe('attribute', () => {
  let sandbox;
  let getDirection;
  let getCustomAttrExps;
  let layout;
  let layoutService;
  let nodes;
  let datasetField;
  let dataset;
  let formatter;

  beforeAll(() => {
    sandbox = sinon.createSandbox();
    getDirection = sandbox.stub();
    getCustomAttrExps = sandbox.stub();
    layout = {
      qHyperCube: {},
    };
    layoutService = {
      meta: {
        isOneDimensional: true,
        isStacked: false,
      },
      getLayout: () => layout,
    };
    nodes = [];
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
    formatter = (x) => x;
  });

  beforeEach(() => {
    sandbox.reset();
    getDirection.returns('ltr');
    layoutService.meta.isOneDimensional = true;
    layoutService.meta.isStacked = false;
  });

  afterAll(() => {
    sandbox.restore();
  });

  describe('create', () => {
    it('should return correct content', () => {
      layout = {
        qHyperCube: {
          qDimensionInfo: [
            {
              qAttrExprInfo: [
                {
                  id: 'customTooltipExpression',
                  qFallbackTitle: 'dimension attribute expression',
                },
                {
                  id: 'customTooltipTitle',
                },
                {
                  id: 'customTooltipDescription',
                },
              ],
            },
          ],
        },
      };
      nodes = [
        {
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
                  value: 'description value',
                  label: '',
                },
              ],
            },
          },
        },
      ];
      const attrcontent = attribute({ nodes, layout, dataset, formatter });
      expect(attrcontent).to.deep.equal({
        customTooltipAttrExpsArr: [
          {
            label: 'dimension attribute expression',
            value: '111',
          },
        ],
        customTooltipInfoAttrExpsArr: [
          {
            id: 'customTooltipTitle',
            title: 'title value',
            value: 'title value',
          },
          {
            id: 'customTooltipDescription',
            value: 'ds value',
          },
        ],
      });
    });
    it('should return correct content when title exist but description and measures are missing', () => {
      getCustomAttrExps.returns({
        customTooltipInfoAttrExpsArr: [
          {
            title: 'title value',
            value: 'title value',
            id: 'customTooltipTitle',
          },
        ],
        customTooltipAttrExpsArr: [],
      });
      layout = {
        qHyperCube: {
          qDimensionInfo: [
            {
              qAttrExprInfo: [
                {
                  id: 'customTooltipTitle',
                },
              ],
            },
          ],
        },
      };
      nodes = [
        {
          attrs: {},
          data: {
            customTooltipAttrExps: {
              field: 'qDimensionInfo/0',
              value: [
                {
                  source: {
                    key: 'qHyperCube',
                    field: `qDimensionInfo/0/qAttrExprInfo/1`,
                  },
                  value: '-',
                  label: 'title value',
                },
              ],
            },
          },
        },
      ];
      const attrcontent = attribute({ nodes, layout, dataset, formatter });
      expect(attrcontent).to.deep.equal({
        customTooltipAttrExpsArr: [],
        customTooltipInfoAttrExpsArr: [
          {
            id: 'customTooltipTitle',
            title: 'title value',
            value: 'title value',
          },
        ],
      });
    });
    it('should return correct content when measures exists but title and description missing', () => {
      getCustomAttrExps.returns({
        customTooltipInfoAttrExpsArr: [],
        customTooltipAttrExpsArr: [
          {
            label: 'dimension attribute expression',
            value: '111',
          },
        ],
      });
      layout = {
        qHyperCube: {
          qDimensionInfo: [
            {
              qAttrExprInfo: [
                {
                  id: 'customTooltipExpression',
                  qFallbackTitle: 'dimension attribute expression',
                },
              ],
            },
          ],
        },
      };
      nodes = [
        {
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
              ],
            },
          },
        },
      ];
      const attrcontent = attribute({ nodes, layout, dataset, formatter });
      expect(attrcontent).to.deep.equal({
        customTooltipAttrExpsArr: [
          {
            label: 'dimension attribute expression',
            value: '111',
          },
        ],
        customTooltipInfoAttrExpsArr: [],
      });
    });
  });
});
