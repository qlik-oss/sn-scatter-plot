import customTooltipUtils from '../utils';
import customTooltipPromises from '../promises';
import TOOLTIP from '../constants';

describe('Custom tooltip utils', () => {
  const sandbox = sinon.createSandbox();
  let dimension;
  let data;
  let opts;
  const quarantineId = TOOLTIP.CUSTOM.QUARANTINE;
  const attrId = TOOLTIP.CUSTOM.EXPRESSION;
  let customTooltipModel;
  beforeEach(() => {
    dimension = {
      qAttributeExpressions: [
        {
          id: 'color',
        },
        {
          id: TOOLTIP.CUSTOM.EXPRESSION,
        },
      ],
    };

    data = {
      qHyperCubeDef: {
        qDimensions: [
          {
            qAttributeExpressions: [
              {
                id: TOOLTIP.CUSTOM.EXPRESSION,
              },
            ],
          },
        ],
      },
    };

    customTooltipModel = {
      chart: {
        findShapes: () => [],
      },
      layout: {
        qHyperCube: {
          qDimensionInfo: [
            {
              qAttrExprInfo: [
                {
                  id: TOOLTIP.CUSTOM.IMAGES,
                },
              ],
            },
          ],
        },
      },
    };
  });

  describe('Get Data Nodes', () => {
    let inputNodes;
    let outputNodes;
    let chart;
    beforeEach(() => {
      inputNodes = [
        {
          type: 'invalidType',
          data: {
            selectionDimension: {
              value: 'selectionDimensionValue',
              label: 'selectionDimensionLabel',
            },
          },
        },
      ];
      outputNodes = (type) => [
        {
          type,
          key: 'bar',
          data: {
            customTooltipAttrExps: [],
            selectionDimension: {
              value: 'selectionDimensionValue',
              label: 'selectionDimensionLabel',
            },
          },
        },
      ];
      chart = {
        findShapes: (type) => (type === 'container' ? outputNodes(type) : []),
      };
    });

    it('should get data nodes when hovering over to axis node and data nodes exists', () => {
      const expected = customTooltipUtils.getDataNodes(chart, inputNodes);
      expect(outputNodes('container')[0]).to.be.deep.equal(expected[0]);
      expect(1).to.be.equal(expected.length);
    });

    it('should NOT search for additional data nodes when hovering over to a data node that contains customTooltipAttrExps', () => {
      inputNodes[0].data.customTooltipAttrExps = [];
      inputNodes[0].data.customTooltipImages = undefined;
      let expected = customTooltipUtils.getDataNodes(chart, inputNodes);
      expect(inputNodes[0]).to.be.deep.equal(expected[0]);
      expect(1).to.be.equal(expected.length);

      inputNodes[0].type = 'container';
      inputNodes[0].data.customTooltipImages = undefined;
      expected = customTooltipUtils.getDataNodes(chart, inputNodes);
      expect(inputNodes[0]).to.be.deep.equal(expected[0]);
      expect(1).to.be.equal(expected.length);
    });

    it('should NOT get data nodes when hovering over to a data node that does not contain customTooltipAttrExps', () => {
      inputNodes[0].data.customTooltipAttrExps = undefined;
      inputNodes[0].type = 'container';
      const expected = customTooltipUtils.getDataNodes(chart, inputNodes);
      expect(0).to.be.equal(expected.length);
    });

    it('should NOT get data nodes when hovering over to axis node and data nodes does NOT exists', () => {
      chart.findShapes = () => [];

      const expected = customTooltipUtils.getDataNodes(chart, inputNodes);
      expect(0).to.be.equal(expected.length);
    });
  });

  describe('Display the tooltip', () => {
    const nodes = [];
    let tooltip;
    beforeEach(() => {
      tooltip = {
        emit: () => true,
      };
      opts = {
        flags: {
          isEnabled: () => false,
        },
      };
      sandbox.stub(customTooltipPromises, 'handlePromises').resolves(true);
      sandbox.stub(customTooltipUtils, 'getDataNodes').returns([]);
    });

    it('should handle the promises', () => {
      const tempNodes = ['1', '2', '3'];
      customTooltipUtils.displayTooltip(undefined, tooltip, {
        nodes: tempNodes,
        opts,
        customTooltipModel,
      });
      expect(customTooltipPromises.handlePromises).to.have.been.calledOnce;
      expect(customTooltipUtils.getDataNodes).to.have.been.calledOnce;
    });

    it('should handle the promises with extractedNodes', () => {
      const tempNodes = ['1', '2', '3'];
      customTooltipUtils.displayTooltip(undefined, tooltip, {
        nodes: tempNodes,
        opts,
        customTooltipModel,
        extractedNodes: nodes,
      });
      expect(customTooltipPromises.handlePromises).to.have.been.calledOnce;
      expect(customTooltipUtils.getDataNodes).to.have.been.calledOnce;
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should get attribute expressions from dim', () => {
    const prop = {
      qHyperCubeDef: {
        qDimensions: [
          {
            qAttributeExpressions: ['first attribute expression'],
          },
        ],
      },
    };
    const expected = customTooltipUtils.getAttrExps(prop, prop.qHyperCubeDef.qDimensions[0]);
    expect(prop.qHyperCubeDef.qDimensions[0].qAttributeExpressions[0]).to.be.equal(expected[0]);
  });

  it('should get prop path to last dim attribute expressions', () => {
    const prop = {
      qHyperCubeDef: {
        qDimensions: [
          {
            qAttributeExpressions: [],
          },
          {
            qAttributeExpressions: ['first attribute expression', 'second attribute expression'],
          },
        ],
      },
    };
    const expected = customTooltipUtils.getAttrExps(prop, prop.qHyperCubeDef.qDimensions[1]);
    expect(expected.length).to.be.equal(2);
  });

  it('should quarantine custom tooltips attributes if no are already stored', () => {
    customTooltipUtils.quarantineCustomTooltipAttrs(data, dimension);
    const expected = [
      {
        id: attrId,
      },
    ];
    expect(data.qLayoutExclude.quarantine[quarantineId]).to.be.deep.equal(expected);
  });
  it('should not quarantine custom tooltips attributes if there are attributes already quarantined', () => {
    data.qLayoutExclude = {
      quarantine: {
        [quarantineId]: [],
      },
    };
    const expected = [];
    customTooltipUtils.quarantineCustomTooltipAttrs(data, dimension);
    expect(data.qLayoutExclude.quarantine[quarantineId]).to.be.deep.equal(expected);
  });
  it('should unquarantine custom tooltip attributes', () => {
    data.qLayoutExclude = {
      quarantine: {
        [quarantineId]: [],
      },
    };
    customTooltipUtils.unquarantineCustomTooltipAttrs(data);
    expect(data.qLayoutExclude.quarantine[quarantineId]).to.be.undefined;
  });
  it('should set custom tooltip attributes if no pre-existing attributes', () => {
    const expected = [
      {
        id: attrId,
        def: 'foo',
      },
      {
        id: attrId,
        def: 'bar',
      },
    ];
    data.qHyperCubeDef.qDimensions = [
      {
        qAttributeExpressions: [],
      },
      {
        qAttributeExpressions: [],
      },
    ];
    data.qLayoutExclude = {
      quarantine: {
        [quarantineId]: expected,
      },
    };
    customTooltipUtils.setAttrsFromQuarantine(data);
    expect(data.qHyperCubeDef.qDimensions[0].qAttributeExpressions).to.deep.equal([]);
    expect(data.qHyperCubeDef.qDimensions[1].qAttributeExpressions).to.deep.equal(expected);
  });
  it('should not set custom tooltip attributes if pre-existing attributes', () => {
    const expected = [
      {
        id: attrId,
      },
    ];
    data.qLayoutExclude = {
      quarantine: {
        [quarantineId]: [
          {
            id: attrId,
            def: 'foo',
          },
        ],
      },
    };
    customTooltipUtils.setAttrsFromQuarantine(data);
    expect(data.qHyperCubeDef.qDimensions[0].qAttributeExpressions).to.deep.equal(expected);
  });
  it('should move custom tooltip attributes to last dim', () => {
    const dim = {
      qAttributeExpressions: [],
    };
    data.qHyperCubeDef.qDimensions.push(dim);
    data.qHyperCubeDef.qDimensions.push(dim);
    const expected = [
      {
        id: TOOLTIP.CUSTOM.EXPRESSION,
      },
    ];
    customTooltipUtils.moveCustomTooltipAttrs(data);
    expect(data.qHyperCubeDef.qDimensions[2].qAttributeExpressions).to.be.deep.equal(expected);
  });

  it('should move custom tooltip attributes to second dim', () => {
    const dim = {
      qAttributeExpressions: [],
    };
    data.qHyperCubeDef.qDimensions.push(dim);
    data.qHyperCubeDef.qDimensions.push(dim);
    const expected = [
      {
        id: TOOLTIP.CUSTOM.EXPRESSION,
      },
    ];
    customTooltipUtils.moveCustomTooltipAttrs(data, {}, 1);
    expect(data.qHyperCubeDef.qDimensions[1].qAttributeExpressions).to.be.deep.equal(expected);
  });

  it('should move removed dim custom tooltip attributes to last dim', () => {
    const dim = {
      qAttributeExpressions: [
        {
          id: TOOLTIP.CUSTOM.EXPRESSION,
        },
      ],
    };
    data.qHyperCubeDef.qDimensions = [
      {
        qAttributeExpressions: [],
      },
    ];
    const expected = [
      {
        id: TOOLTIP.CUSTOM.EXPRESSION,
      },
    ];
    customTooltipUtils.moveCustomTooltipAttrs(data, dim);
    expect(data.qHyperCubeDef.qDimensions[0].qAttributeExpressions).to.be.deep.equal(expected);
  });

  describe('data definition', () => {
    const ID = TOOLTIP.CUSTOM.EXPRESSION;
    beforeEach(() => {
      data = {
        qHyperCubeDef: {
          qDimensions: [
            {
              qAttributeExpressions: [
                {
                  id: ID,
                },
              ],
            },
          ],
        },
        qLayoutExclude: {
          quarantine: {
            customTooltip: [
              {
                id: 'quarantine',
              },
            ],
          },
        },
      };
    });

    describe('add callback', () => {
      it('should add quarantined custom tooltip attrs', () => {
        data.qHyperCubeDef.qDimensions[0].qAttributeExpressions = [];
        customTooltipUtils.addCallbackCustomTooltip(data);
        const expected = data.qHyperCubeDef.qDimensions[0].qAttributeExpressions;
        expect(expected.length).to.be.equal(1);
        expect(expected[0].id).to.be.equal('quarantine');
        expect(data.qLayoutExclude.quarantine.customToolip).to.be.equal(undefined);
      });

      it('should move custom tooltip attrs on when several dimensions', () => {
        data.qHyperCubeDef.qDimensions.push({
          qAttributeExpressions: [],
        });
        customTooltipUtils.addCallbackCustomTooltip(data);
        const expected = data.qHyperCubeDef.qDimensions[1].qAttributeExpressions;
        expect(expected.length).to.be.equal(1);
        expect(expected[0].id).to.be.equal(ID);
      });
    });

    describe('move callback', () => {
      it('should add quarantined custom tooltip attrs when there is one dimension', () => {
        data.qHyperCubeDef.qDimensions[0].qAttributeExpressions = [];
        customTooltipUtils.moveCallbackCustomTooltip(data);
        const expected = data.qHyperCubeDef.qDimensions[0].qAttributeExpressions;
        expect(expected.length).to.be.equal(1);
        expect(expected[0].id).to.be.equal('quarantine');
        expect(data.qLayoutExclude.quarantine.customTooltip).to.be.equal(undefined);
      });

      it('should move custom tooltip attrs when several dimensions', () => {
        data.qHyperCubeDef.qDimensions.push({
          qAttributeExpressions: [],
        });
        customTooltipUtils.moveCallbackCustomTooltip(data);
        const expected = data.qHyperCubeDef.qDimensions[1].qAttributeExpressions;
        expect(expected.length).to.be.equal(1);
        expect(expected[0].id).to.be.equal(ID);
      });

      it('should move custom tooltip attrs when the moved dim has the attrs', () => {
        data.qHyperCubeDef.qDimensions = [
          {
            qAttributeExpressions: [],
          },
          {
            qAttributeExpressions: [],
          },
        ];
        dimension = {
          qAttributeExpressions: [
            {
              id: ID,
            },
          ],
        };
        customTooltipUtils.moveCallbackCustomTooltip(data, dimension);
        const expected = data.qHyperCubeDef.qDimensions[1].qAttributeExpressions;
        expect(expected.length).to.be.equal(1);
        expect(expected[0].id).to.be.equal(ID);
      });

      it('should not unquarantine custom tooltip attrs when there is not a dimension', () => {
        data.qHyperCubeDef.qDimensions = [];
        customTooltipUtils.moveCallbackCustomTooltip(data);
        expect(data.qLayoutExclude.quarantine.customTooltip.length).to.be.equal(1);
      });
    });

    describe('remove callback', () => {
      it('should quarantine custom tooltip attrs', () => {
        data.qLayoutExclude = [];
        data.qHyperCubeDef.qDimensions = [];
        dimension = {
          qAttributeExpressions: [
            {
              id: ID,
            },
          ],
        };
        customTooltipUtils.removeCallbackCustomTooltip(data, dimension);
        expect(data.qLayoutExclude.quarantine.customTooltip.length).to.be.equal(1);
        expect(data.qLayoutExclude.quarantine.customTooltip[0].id).to.be.equal(ID);
      });

      it('should move custom tooltip attrs', () => {
        data.qHyperCubeDef.qDimensions = [
          {
            qAttributeExpressions: [],
          },
        ];
        dimension = {
          qAttributeExpressions: [
            {
              id: ID,
            },
          ],
        };
        customTooltipUtils.removeCallbackCustomTooltip(data, dimension);
        const expected = data.qHyperCubeDef.qDimensions[0].qAttributeExpressions;
        expect(expected.length).to.be.equal(1);
        expect(expected[0].id).to.be.equal(ID);
      });
    });

    describe('replace callback', () => {
      it('should quarantine, set and unquarantine custom tooltip attrs', () => {
        data.qLayoutExclude = [];
        data.qHyperCubeDef.qDimensions[0].qAttributeExpressions = [];
        dimension = {
          qAttributeExpressions: [
            {
              id: ID,
            },
          ],
        };
        customTooltipUtils.replaceCallbackCustomTooltip(data, dimension);
        const expected = data.qHyperCubeDef.qDimensions[0].qAttributeExpressions;
        expect(expected.length).to.be.equal(1);
        expect(expected[0].id).to.be.equal(ID);
        expect(data.qLayoutExclude.quarantine.customTooltip).to.be.equal(undefined);
      });

      it('should move custom tooltip attrs when several dimensions', () => {
        data.qHyperCubeDef.qDimensions = [
          {
            qAttributeExpressions: [],
          },
          {
            qAttributeExpressions: [],
          },
        ];
        dimension = {
          qAttributeExpressions: [
            {
              id: ID,
            },
          ],
        };
        customTooltipUtils.replaceCallbackCustomTooltip(data, dimension);
        const expected = data.qHyperCubeDef.qDimensions[1].qAttributeExpressions;
        expect(expected.length).to.be.equal(1);
        expect(expected[0].id).to.be.equal(ID);
      });
    });
  });
});
