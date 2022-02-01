import createTrendlineSection from '../trendline';

describe('trendline-tooltip', () => {
  let sandbox;
  let translator;
  let nodes;
  let createAPI;
  let create;

  before(() => {
    sandbox = sinon.createSandbox();
  });

  beforeEach(() => {
    sandbox.reset();
    translator = {
      get: sandbox.stub(),
    };
    translator.get.callsFake((v) => `${v}-translated`);
    nodes = [
      {
        data: {
          x: 5,
          y: 15,
          layer: 0,
        },
      },
    ];
    const h = (type, attrs, content) => ({ type, attrs, content });
    const dataset = () => ({
      field: () => ({
        formatter: () => (value) => `${value}-formatted`,
      }),
    });
    const trendLinesService = {
      getModel: () => ({
        query: {
          getLabel: (index) => `Label-${index}`,
          getExpression: (index) => `Expression-${index}`,
          getType: (index) => `Type-${index}`,
          getStroke: (index) => `Stroke-${index}`,
          getLineDash: (index) => `LineDash-${index}`,
        },
      }),
    };
    createAPI = {
      raw: (value) => value,
      text: (value) => value,
      measure: (value) => value,
    };
    create = () => createTrendlineSection({ dataset, translator, nodes, create: createAPI, h, trendLinesService });
  });

  after(() => {
    sandbox.restore();
  });

  it('should create correctly tooltip', () => {
    const tooltip = create();
    expect(tooltip).to.deep.equals([
      {
        value: [
          {
            content: {
              attrs: {
                height: '1em',
                viewBox: '0 0 16 16',
                width: '1em',
                xlms: 'http://www.w3.org/2000/svg',
              },
              content: {
                attrs: {
                  'stroke-width': '3px',
                  x1: '0px',
                  x2: '16px',
                  y1: '16px',
                  y2: '0px',
                },
                content: undefined,
                type: 'line',
              },
              type: 'svg',
            },
            style: {
              stroke: 'Stroke-0',
              'stroke-dasharray': 'LineDash-0',
              'vertical-align': 'middle',
              width: '16px',
            },
          },
          {
            content: {
              attrs: {
                style: {
                  display: 'flex',
                  'flex-direction': 'column',
                },
              },
              content: [
                {
                  attrs: {
                    style: {
                      'font-weight': 'bold',
                    },
                  },
                  content: 'Label-0',
                  type: 'span',
                },
                {
                  attrs: null,
                  content: 'Type-0',
                  type: 'span',
                },
              ],
              type: 'div',
            },
            style: {},
          },
        ],
      },
      {
        label: 'x-translated',
        value: '5-formatted',
      },
      {
        label: 'y-translated',
        value: '15-formatted',
      },
      {
        value: 'Expression-0',
      },
    ]);
  });
});
