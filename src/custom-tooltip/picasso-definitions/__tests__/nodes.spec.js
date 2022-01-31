import nodes from '../nodes';
import TOOLTIP from '../../constants';

describe('Custom tooltip get nodes', () => {
  let layout;
  let data;
  let dimensionCount;
  beforeEach(() => {
    dimensionCount = 1;
    layout = {
      qHyperCube: {
        qDimensionInfo: [
          {
            qAttrExprInfo: [
              {
                id: TOOLTIP.CUSTOM.EXPRESSION,
              },
            ],
          },
        ],
      },
    };
    data = {
      qSubNodes: [
        {
          qAttrExps: {
            qValues: [
              {
                qNum: 'NaN',
                qText: 'text',
              },
            ],
          },
        },
      ],
    };
  });

  it('should be undefined when no dimension', () => {
    dimensionCount = 0;
    const result = nodes.getNode(layout, { dimensionCount });
    expect(result).to.be.undefined;
  });

  it('field path should be on the last dimension index', () => {
    dimensionCount = 10;
    const result = nodes.getNode(layout, { dimensionCount });
    const expected = 'qDimensionInfo/9';
    expect(result.field).to.be.equal(expected);
  });

  it('should return one node with correct label and field', () => {
    dimensionCount = 1;
    const result = nodes.getNode(layout, { dimensionCount });
    const nodeData = result.value(data);
    expect(nodeData.length).to.be.equal(1);
    expect(nodeData[0].label).to.be.equal('text');
    expect(nodeData[0].source.field).to.be.equal('qDimensionInfo/0/qAttrExprInfo/0');
  });

  it('should return two nodes with correct label and field', () => {
    dimensionCount = 1;
    layout.qHyperCube.qDimensionInfo[0].qAttrExprInfo = [
      {
        id: TOOLTIP.CUSTOM.TITLE,
      },
      {
        id: TOOLTIP.CUSTOM.EXPRESSION,
      },
    ];
    data.qSubNodes[0].qAttrExps.qValues = [
      {
        qText: 'foo',
        qNum: 'NaN',
      },
      {
        qNum: 10,
        qText: 'bar',
      },
    ];
    const result = nodes.getNode(layout, { dimensionCount });
    const nodeData = result.value(data);
    expect(nodeData.length).to.be.equal(2);
    expect(nodeData[0].label).to.be.equal('foo');
    expect(nodeData[0].source.field).to.be.equal('qDimensionInfo/0/qAttrExprInfo/0');
    expect(nodeData[1].label).to.be.equal(10);
    expect(nodeData[1].source.field).to.be.equal('qDimensionInfo/0/qAttrExprInfo/1');
  });

  it('should return no nodes when attrs are not stored on last dim', () => {
    dimensionCount = 2;
    const result = nodes.getNode(layout, { dimensionCount });
    const nodeData = result.value(data);
    expect(nodeData.length).to.be.equal(0);
  });

  it('label should be NaN when no attribute data', () => {
    dimensionCount = 1;
    data.qSubNodes[0].qAttrExps.qValues = [];
    const result = nodes.getNode(layout, { dimensionCount });
    const nodeData = result.value(data);
    expect(nodeData.length).to.be.equal(1);
    expect(nodeData[0].label).to.be.equal('NaN');
    expect(nodeData[0].source.field).to.be.equal('qDimensionInfo/0/qAttrExprInfo/0');
  });

  it('label should be NaN when no qText', () => {
    dimensionCount = 1;
    data.qSubNodes[0].qAttrExps.qValues[0] = { qNum: 'NaN' };
    const result = nodes.getNode(layout, { dimensionCount });
    const nodeData = result.value(data);
    expect(nodeData.length).to.be.equal(1);
    expect(nodeData[0].label).to.be.equal('NaN');
    expect(nodeData[0].source.field).to.be.equal('qDimensionInfo/0/qAttrExprInfo/0');
  });

  it('label should be the qFallbackTitle when no qText and title id', () => {
    dimensionCount = 1;
    layout.qHyperCube.qDimensionInfo[0].qAttrExprInfo[0] = {
      id: TOOLTIP.CUSTOM.TITLE,
      qFallbackTitle: 'Title',
    };
    data.qSubNodes[0].qAttrExps.qValues[0] = {};
    const result = nodes.getNode(layout, { dimensionCount });
    const nodeData = result.value(data);
    expect(nodeData.length).to.be.equal(1);
    expect(nodeData[0].label).to.be.equal('Title');
    expect(nodeData[0].source.field).to.be.equal('qDimensionInfo/0/qAttrExprInfo/0');
  });

  it('label should be the qFallbackTitle when no qText and description id', () => {
    dimensionCount = 1;
    layout.qHyperCube.qDimensionInfo[0].qAttrExprInfo[0] = {
      id: TOOLTIP.CUSTOM.DESCRIPTION,
      qFallbackTitle: 'Desc',
    };
    data.qSubNodes[0].qAttrExps.qValues[0] = {};
    const result = nodes.getNode(layout, { dimensionCount });
    const nodeData = result.value(data);
    expect(nodeData.length).to.be.equal(1);
    expect(nodeData[0].label).to.be.equal('Desc');
    expect(nodeData[0].source.field).to.be.equal('qDimensionInfo/0/qAttrExprInfo/0');
  });
});
