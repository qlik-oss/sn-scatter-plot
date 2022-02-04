export default () => ({
  type: 'sn-scatter-plot',
  genericObjects: [
    {
      getLayout: {
        qInfo: {
          qId: '0094ff72-8150-46c4-9b67-c23bc6f269c2',
          qType: 'sn-scatter-plot',
        },
        qMeta: {
          privileges: ['read', 'update', 'delete', 'exportdata'],
        },
        qSelectionInfo: {},
        qHyperCube: {
          qSize: {
            qcx: 3,
            qcy: 10000,
          },
          qDimensionInfo: [
            {
              qFallbackTitle: 'TransID',
              qApprMaxGlyphCount: 5,
              qCardinal: 10000,
              qSortIndicator: 'A',
              qGroupFallbackTitles: ['TransID'],
              qGroupPos: 0,
              qStateCounts: {
                qLocked: 0,
                qSelected: 0,
                qOption: 10000,
                qDeselected: 0,
                qAlternative: 0,
                qExcluded: 0,
                qSelectedExcluded: 0,
                qLockedExcluded: 0,
              },
              qTags: ['$numeric', '$integer'],
              qDimensionType: 'N',
              qGrouping: 'N',
              qNumFormat: {
                qType: 'I',
                qnDec: 0,
                qUseThou: 1,
                qFmt: '###0',
                qDec: ',',
              },
              qIsAutoFormat: true,
              qGroupFieldDefs: ['TransID'],
              qMin: 1,
              qMax: 10000,
              qContinuousAxes: true,
              qAttrExprInfo: [
                {
                  qMin: 'NaN',
                  qMax: 'NaN',
                  qFallbackTitle: 'asdf',
                  qNumFormat: {
                    qType: 'U',
                    qnDec: 0,
                    qUseThou: 0,
                  },
                  qIsAutoFormat: true,
                  cId: 'hJbtTRq',
                  autoSort: true,
                  id: 'customTooltipTitle',
                },
                {
                  qMin: 'NaN',
                  qMax: 'NaN',
                  qFallbackTitle: 'asdf',
                  qNumFormat: {
                    qType: 'U',
                    qnDec: 0,
                    qUseThou: 0,
                  },
                  qIsAutoFormat: true,
                  cId: 'Xpdks',
                  autoSort: true,
                  id: 'customTooltipDescription',
                },
                {
                  qMin: 1,
                  qMax: 13,
                  qFallbackTitle: 'Count(Dim1)',
                  qMinText: '1',
                  qMaxText: '13',
                  qNumFormat: {
                    qType: 'I',
                    qnDec: 0,
                    qUseThou: 1,
                    qFmt: '###0',
                    qDec: ',',
                  },
                  qIsAutoFormat: true,
                  cId: 'UNvkvCT',
                  autoSort: true,
                  id: 'customTooltipExpression',
                },
              ],
              qAttrDimInfo: [],
              qCardinalities: {
                qCardinal: 10000,
                qHypercubeCardinal: 10000,
                qAllValuesCardinal: -1,
              },
              autoSort: true,
              cId: 'VfMcrQ',
              othersLabel: 'Others',
            },
          ],
          qMeasureInfo: [
            {
              qFallbackTitle: 'Sum(Expression1)',
              qApprMaxGlyphCount: 7,
              qCardinal: 0,
              qSortIndicator: 'D',
              qNumFormat: {
                qType: 'I',
                qnDec: 0,
                qUseThou: 1,
                qFmt: '###0',
                qDec: ',',
              },
              qMin: 0,
              qMax: 3077,
              qIsAutoFormat: true,
              qAttrExprInfo: [],
              qAttrDimInfo: [],
              qTrendLines: [
                {
                  qType: 'LINEAR',
                  qCoeff: [113.37416567099513, 55.7204433892753],
                  qR2: 0,
                  qExpression: 'y = 55.72x + 113.37',
                  qElemNo: -1,
                  label: 'Linear',
                  style: {
                    autoColor: false,
                    paletteColor: {
                      index: 2,
                      color: '#46c646',
                    },
                    dashed: true,
                    lineDash: '8, 4',
                  },
                  flipXY: true,
                  cId: 'LJjmf',
                },
              ],
              autoSort: true,
              cId: 'xFjZ',
              numFormatFromTemplate: true,
            },
            {
              qFallbackTitle: 'Sum(Expression2)',
              qApprMaxGlyphCount: 5,
              qCardinal: 0,
              qSortIndicator: 'D',
              qNumFormat: {
                qType: 'I',
                qnDec: 0,
                qUseThou: 1,
                qFmt: '###0',
                qDec: ',',
              },
              qMin: 0,
              qMax: 27,
              qIsAutoFormat: true,
              qAttrExprInfo: [],
              qAttrDimInfo: [],
              qTrendLines: [
                {
                  qType: 'AVERAGE',
                  qCoeff: [2.3418],
                  qR2: 0,
                  qExpression: 'y = 2.3418',
                  qElemNo: -1,
                  label: 'Average',
                  style: {
                    autoColor: false,
                    paletteColor: {
                      index: 3,
                      color: '#276e27',
                    },
                    dashed: false,
                    lineDash: '',
                  },
                  flipXY: false,
                  cId: 'CUJTzj',
                },
                {
                  qType: 'POLYNOMIAL2',
                  qCoeff: [0.9548093480309614, 0.00569298879020084, -9.921067953833536e-9],
                  qR2: 0,
                  qExpression: 'y = -9.9211e-09x^2 + 0.005693x + 0.95481',
                  qElemNo: -1,
                  label: 'Second',
                  style: {
                    autoColor: false,
                    paletteColor: {
                      index: 4,
                      color: '#b6d7ea',
                    },
                    dashed: true,
                    lineDash: '8, 4',
                  },
                  flipXY: false,
                  cId: 'FTXhpB',
                },
                {
                  qType: 'POLYNOMIAL3',
                  qCoeff: [0.8841868189125108, 0.00659704156490764, -0.000001653527889489376, 6.217570724663244e-10],
                  qR2: 0,
                  qExpression: 'y = 6.2176e-10x^3 - 1.6535e-06x^2 + 0.006597x + 0.88419',
                  qElemNo: -1,
                  label: 'Third',
                  style: {
                    autoColor: false,
                    paletteColor: {
                      index: 5,
                      color: '#7db8da',
                    },
                    dashed: true,
                    lineDash: '8, 4',
                  },
                  flipXY: false,
                  cId: 'DJKXZjt',
                },
                {
                  qType: 'POLYNOMIAL4',
                  qCoeff: [
                    0.8206673391045243, 0.007762815879617682, -0.000005048655139684386, 3.4441576103138234e-9,
                    -6.351305327716952e-13,
                  ],
                  qR2: 0,
                  qExpression: 'y = -6.3513e-13x^4 + 3.4442e-09x^3 - 5.0487e-06x^2 + 0.0077628x + 0.82067',
                  qElemNo: -1,
                  label: 'Fourth',
                  style: {
                    autoColor: false,
                    paletteColor: {
                      index: 6,
                      color: '#4477aa',
                    },
                    dashed: true,
                    lineDash: '8, 4',
                  },
                  flipXY: false,
                  cId: 'cTynsBu',
                },
                {
                  qType: 'EXPONENTIAL',
                  qError: {
                    qErrorCode: 25001,
                  },
                  qCoeff: [],
                  qR2: 0,
                  qElemNo: 0,
                  label: 'Exponentiel',
                  style: {
                    autoColor: false,
                    paletteColor: {
                      index: 7,
                      color: '#8e477d',
                    },
                    dashed: true,
                    lineDash: '8, 4',
                  },
                  flipXY: false,
                  cId: 'mcCpbRj',
                },
                {
                  qType: 'LOG',
                  qError: {
                    qErrorCode: 25001,
                  },
                  qCoeff: [],
                  qR2: 0,
                  qElemNo: 0,
                  label: 'Logarithmic',
                  style: {
                    autoColor: false,
                    paletteColor: {
                      index: 10,
                      color: '#f93f17',
                    },
                    dashed: true,
                    lineDash: '8, 4',
                  },
                  flipXY: false,
                  cId: 'hkYNgC',
                },
                {
                  qType: 'POWER',
                  qError: {
                    qErrorCode: 25001,
                  },
                  qCoeff: [],
                  qR2: 0,
                  qElemNo: 0,
                  label: 'Power',
                  style: {
                    autoColor: false,
                    paletteColor: {
                      index: 11,
                      color: '#633d0c',
                    },
                    dashed: true,
                    lineDash: '8, 4',
                  },
                  flipXY: false,
                  cId: 'tXAZxkA',
                },
              ],
              autoSort: true,
              cId: 'bJzppN',
              numFormatFromTemplate: true,
            },
          ],
          qEffectiveInterColumnSortOrder: [2, 1, 0],
          qGrandTotalRow: [
            {
              qText: '2438603',
              qNum: 2438603,
              qElemNumber: -1,
              qState: 'X',
              qIsTotalCell: true,
            },
            {
              qText: '23418',
              qNum: 23418,
              qElemNumber: -1,
              qState: 'X',
              qIsTotalCell: true,
            },
          ],
          qDataPages: [],
          qPivotDataPages: [],
          qStackedDataPages: [],
          qMode: 'S',
          qNoOfLeftDims: -1,
          qTreeNodesOnDim: [],
          qColumnOrder: [],
        },
        refLine: {
          refLinesX: [],
          refLinesY: [],
        },
        showTitles: true,
        title: 'ext',
        subtitle: '',
        footnote: '',
        disableNavMenu: false,
        showDetails: false,
        showDisclaimer: true,
        navigation: false,
        dataPoint: {
          bubbleSizes: 5,
          rangeBubbleSizes: [2, 8],
        },
        labels: {
          mode: 1,
        },
        compressionResolution: 5,
        gridLine: {
          auto: true,
          spacing: 2,
        },
        color: {
          auto: true,
          mode: 'primary',
          formatting: {
            numFormatFromTemplate: true,
          },
          useBaseColors: 'off',
          paletteColor: {
            index: 6,
          },
          useDimColVal: true,
          useMeasureGradient: true,
          persistent: false,
          expressionIsColor: true,
          expressionLabel: '',
          measureScheme: 'sg',
          reverseScheme: false,
          dimensionScheme: '12',
          autoMinMax: true,
          measureMin: 0,
          measureMax: 10,
        },
        legend: {
          show: true,
          dock: 'auto',
          showTitle: true,
        },
        xAxis: {
          show: 'all',
          dock: 'near',
          spacing: 1,
          autoMinMax: true,
          minMax: 'min',
          min: 0,
          max: 10,
        },
        yAxis: {
          show: 'all',
          dock: 'near',
          spacing: 1,
          autoMinMax: true,
          minMax: 'min',
          min: 0,
          max: 10,
        },
        tooltip: {
          auto: false,
          hideBasic: false,
          chart: {
            style: {
              size: 'medium',
            },
            object: {
              refId: 'c1de61b7-6ed7-4d1f-8034-324a91a5dbfb',
            },
          },
          title: 'asdf',
          description: 'asdf',
          imageComponents: [
            {
              type: 'media',
              size: 'small',
              cId: 'yJpwMEQ',
              ref: {
                qStaticContentUrl: {
                  qUrl: '/appcontent/eec30a62-ae8b-46b5-a1bc-0b24725898f5/Qlik_default_feathers.png',
                },
              },
            },
          ],
        },
        visualization: 'sn-scatter-plot',
        version: '3.0.0',
        extensionMeta: {
          translationKey: '',
          icon: 'puzzle',
          iconChar: 'puzzle',
          isLibraryItem: true,
          visible: true,
          name: 'sn-scatter-plot',
          description: 'A scatter plot.',
          template: 'sn-scatter-plot',
          iconPath:
            'M14.5,9 L13,9 L13,3.3 C13,3.1 12.9,3 12.7,3 L8,3 L8,1.5 C8,0.7 7.3,0 6.5,0 C5.7,0 5,0.7 5,1.5 L5,3 L0.3,3 C0.1,3 0,3.1 0,3.3 L0,9 L1.5,9 C2.3,9 3,9.7 3,10.5 C3,11.3 2.3,12 1.5,12 L0,12 L0,15.7 C0,15.9 0.1,16 0.3,16 L5,16 L5,14.5 C5,13.7 5.7,13 6.5,13 C7.3,13 8,13.7 8,14.5 L8,16 L12.7,16 C12.9,16 13,15.9 13,15.7 L13,12 L14.5,12 C15.3,12 16,11.3 16,10.5 C16,9.7 15.3,9 14.5,9 Z',
          isThirdParty: true,
          version: '3.0.0',
          author: 'QlikTech International AB',
          type: 'visualization',
          supernova: true,
        },
        trendLines: [
          {
            label: 'Linear',
            qType: 'LINEAR',
            style: {
              autoColor: false,
              paletteColor: {
                index: 2,
                color: '#46c646',
              },
              dashed: true,
              lineDash: '8, 4',
            },
            flipXY: true,
            cId: 'LJjmf',
            qMultiDimMode: 'Sum',
            qXColIx: 2,
          },
          {
            label: 'Average',
            qType: 'AVERAGE',
            style: {
              autoColor: false,
              paletteColor: {
                index: 3,
                color: '#276e27',
              },
              dashed: false,
              lineDash: '',
            },
            flipXY: false,
            cId: 'CUJTzj',
            qMultiDimMode: 'Sum',
            qXColIx: 1,
          },
          {
            label: 'Second',
            qType: 'POLYNOMIAL2',
            style: {
              autoColor: false,
              paletteColor: {
                index: 4,
                color: '#b6d7ea',
              },
              dashed: true,
              lineDash: '8, 4',
            },
            flipXY: false,
            cId: 'FTXhpB',
            qMultiDimMode: 'Sum',
            qXColIx: 1,
          },
          {
            label: 'Third',
            qType: 'POLYNOMIAL3',
            style: {
              autoColor: false,
              paletteColor: {
                index: 5,
                color: '#7db8da',
              },
              dashed: true,
              lineDash: '8, 4',
            },
            flipXY: false,
            cId: 'DJKXZjt',
            qMultiDimMode: 'Sum',
            qXColIx: 1,
          },
          {
            label: 'Fourth',
            qType: 'POLYNOMIAL4',
            style: {
              autoColor: false,
              paletteColor: {
                index: 6,
                color: '#4477aa',
              },
              dashed: true,
              lineDash: '8, 4',
            },
            flipXY: false,
            cId: 'cTynsBu',
            qMultiDimMode: 'Sum',
            qXColIx: 1,
          },
          {
            label: 'Exponentiel',
            qType: 'EXPONENTIAL',
            style: {
              autoColor: false,
              paletteColor: {
                index: 7,
                color: '#8e477d',
              },
              dashed: true,
              lineDash: '8, 4',
            },
            flipXY: false,
            cId: 'mcCpbRj',
            qMultiDimMode: 'Sum',
            qXColIx: 1,
          },
          {
            label: 'Logarithmic',
            qType: 'LOG',
            style: {
              autoColor: false,
              paletteColor: {
                index: 10,
                color: '#f93f17',
              },
              dashed: true,
              lineDash: '8, 4',
            },
            flipXY: false,
            cId: 'hkYNgC',
            qMultiDimMode: 'Sum',
            qXColIx: 1,
          },
          {
            label: 'Power',
            qType: 'POWER',
            style: {
              autoColor: false,
              paletteColor: {
                index: 11,
                color: '#633d0c',
              },
              dashed: true,
              lineDash: '8, 4',
            },
            flipXY: false,
            cId: 'tXAZxkA',
            qMultiDimMode: 'Sum',
            qXColIx: 1,
          },
        ],
      },
      getHyperCubeBinnedData: [
        {
          qMatrix: [
            [
              {
                qNum: 1364,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[2067.359375,13.078125,2115.437500,12.656250]',
                qNum: 1,
                qElemNumber: 7239,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1682.734375,13.078125,1730.812500,12.656250]',
                qNum: 1,
                qElemNumber: 7175,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1634.656250,12.234375,1682.734375,11.812500]',
                qNum: 1,
                qElemNumber: 7182,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1971.203125,10.125000,2019.281250,9.703125]',
                qNum: 1,
                qElemNumber: 7361,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1682.734375,10.125000,1730.812500,9.703125]',
                qNum: 1,
                qElemNumber: 7301,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1778.890625,9.281250,1826.968750,8.859375]',
                qNum: 1,
                qElemNumber: 7321,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1682.734375,9.281250,1730.812500,8.859375]',
                qNum: 1,
                qElemNumber: 7309,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1634.656250,8.015625,1682.734375,7.593750]',
                qNum: 1,
                qElemNumber: 7334,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[2115.437500,7.171875,2163.515625,6.750000]',
                qNum: 1,
                qElemNumber: 7418,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1682.734375,7.171875,1730.812500,6.750000]',
                qNum: 1,
                qElemNumber: 7343,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1778.890625,6.328125,1826.968750,5.906250]',
                qNum: 1,
                qElemNumber: 7699,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[2115.437500,5.062500,2163.515625,4.640625]',
                qNum: 1,
                qElemNumber: 7792,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1538.500000,5.062500,1586.578125,4.640625]',
                qNum: 1,
                qElemNumber: 7712,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1778.890625,2.109375,1826.968750,1.687500]',
                qNum: 1,
                qElemNumber: 7835,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1394.265625,3.375000,1442.343750,2.953125]',
                qNum: 1,
                qElemNumber: 7121,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1298.109375,3.375000,1346.187500,2.953125]',
                qNum: 2,
                qElemNumber: 7109,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1250.031250,3.375000,1298.109375,2.953125]',
                qNum: 3,
                qElemNumber: 7108,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1201.953125,3.375000,1250.031250,2.953125]',
                qNum: 1,
                qElemNumber: 7105,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1153.875000,3.375000,1201.953125,2.953125]',
                qNum: 3,
                qElemNumber: 7104,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1346.187500,2.109375,1394.265625,1.687500]',
                qNum: 1,
                qElemNumber: 7130,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1250.031250,2.109375,1298.109375,1.687500]',
                qNum: 2,
                qElemNumber: 7118,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1201.953125,1.265625,1250.031250,0.843750]',
                qNum: 1,
                qElemNumber: 7139,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1009.640625,1.265625,1057.718750,0.843750]',
                qNum: 1,
                qElemNumber: 7091,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[961.562500,1.265625,1009.640625,0.843750]',
                qNum: 4,
                qElemNumber: 7090,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[913.484375,1.265625,961.562500,0.843750]',
                qNum: 2,
                qElemNumber: 7079,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[865.406250,1.265625,913.484375,0.843750]',
                qNum: 4,
                qElemNumber: 7078,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[817.328125,1.265625,865.406250,0.843750]',
                qNum: 4,
                qElemNumber: 7075,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[769.250000,1.265625,817.328125,0.843750]',
                qNum: 10,
                qElemNumber: 7074,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[865.406250,0.421875,913.484375,0.000000]',
                qNum: 1,
                qElemNumber: 7086,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[769.250000,0.421875,817.328125,0.000000]',
                qNum: 3,
                qElemNumber: 7082,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1105.796875,3.375000,1153.875000,2.953125]',
                qNum: 1,
                qElemNumber: 7061,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1057.718750,3.375000,1105.796875,2.953125]',
                qNum: 2,
                qElemNumber: 7060,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1009.640625,3.375000,1057.718750,2.953125]',
                qNum: 5,
                qElemNumber: 7057,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[961.562500,3.375000,1009.640625,2.953125]',
                qNum: 5,
                qElemNumber: 7056,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1057.718750,2.109375,1105.796875,1.687500]',
                qNum: 1,
                qElemNumber: 7070,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1009.640625,2.109375,1057.718750,1.687500]',
                qNum: 3,
                qElemNumber: 7067,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[961.562500,2.109375,1009.640625,1.687500]',
                qNum: 1,
                qElemNumber: 7066,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[913.484375,2.109375,961.562500,1.687500]',
                qNum: 4,
                qElemNumber: 7055,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[865.406250,2.109375,913.484375,1.687500]',
                qNum: 6,
                qElemNumber: 7054,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[817.328125,2.109375,865.406250,1.687500]',
                qNum: 6,
                qElemNumber: 7051,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[769.250000,2.109375,817.328125,1.687500]',
                qNum: 15,
                qElemNumber: 7050,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[913.484375,3.375000,961.562500,2.953125]',
                qNum: 3,
                qElemNumber: 7045,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[865.406250,3.375000,913.484375,2.953125]',
                qNum: 6,
                qElemNumber: 7044,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[817.328125,3.375000,865.406250,2.953125]',
                qNum: 7,
                qElemNumber: 7041,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[769.250000,3.375000,817.328125,2.953125]',
                qNum: 12,
                qElemNumber: 7040,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1298.109375,6.328125,1346.187500,5.906250]',
                qNum: 1,
                qElemNumber: 6983,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1250.031250,6.328125,1298.109375,5.906250]',
                qNum: 1,
                qElemNumber: 6982,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1201.953125,6.328125,1250.031250,5.906250]',
                qNum: 2,
                qElemNumber: 6979,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1153.875000,6.328125,1201.953125,5.906250]',
                qNum: 5,
                qElemNumber: 6978,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1442.343750,5.062500,1490.421875,4.640625]',
                qNum: 2,
                qElemNumber: 7028,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1394.265625,5.062500,1442.343750,4.640625]',
                qNum: 2,
                qElemNumber: 7025,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1298.109375,5.062500,1346.187500,4.640625]',
                qNum: 1,
                qElemNumber: 7013,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1250.031250,5.062500,1298.109375,4.640625]',
                qNum: 2,
                qElemNumber: 7012,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1201.953125,5.062500,1250.031250,4.640625]',
                qNum: 2,
                qElemNumber: 7009,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1442.343750,4.218750,1490.421875,3.796875]',
                qNum: 2,
                qElemNumber: 7036,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1394.265625,4.218750,1442.343750,3.796875]',
                qNum: 2,
                qElemNumber: 7033,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1153.875000,4.218750,1201.953125,3.796875]',
                qNum: 2,
                qElemNumber: 7016,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1105.796875,4.218750,1153.875000,3.796875]',
                qNum: 2,
                qElemNumber: 6973,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1057.718750,4.218750,1105.796875,3.796875]',
                qNum: 3,
                qElemNumber: 6972,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1009.640625,4.218750,1057.718750,3.796875]',
                qNum: 3,
                qElemNumber: 6969,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[961.562500,4.218750,1009.640625,3.796875]',
                qNum: 5,
                qElemNumber: 6968,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1105.796875,5.062500,1153.875000,4.640625]',
                qNum: 1,
                qElemNumber: 6965,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1057.718750,5.062500,1105.796875,4.640625]',
                qNum: 2,
                qElemNumber: 6964,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1009.640625,5.062500,1057.718750,4.640625]',
                qNum: 8,
                qElemNumber: 6961,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[961.562500,5.062500,1009.640625,4.640625]',
                qNum: 2,
                qElemNumber: 6960,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[913.484375,4.218750,961.562500,3.796875]',
                qNum: 5,
                qElemNumber: 6957,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[865.406250,4.218750,913.484375,3.796875]',
                qNum: 5,
                qElemNumber: 6956,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[817.328125,4.218750,865.406250,3.796875]',
                qNum: 5,
                qElemNumber: 6953,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[769.250000,4.218750,817.328125,3.796875]',
                qNum: 15,
                qElemNumber: 6952,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[913.484375,5.062500,961.562500,4.640625]',
                qNum: 4,
                qElemNumber: 6949,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[865.406250,5.062500,913.484375,4.640625]',
                qNum: 8,
                qElemNumber: 6948,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[817.328125,5.062500,865.406250,4.640625]',
                qNum: 10,
                qElemNumber: 6945,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[769.250000,5.062500,817.328125,4.640625]',
                qNum: 5,
                qElemNumber: 6944,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1057.718750,6.328125,1105.796875,5.906250]',
                qNum: 2,
                qElemNumber: 6934,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1009.640625,6.328125,1057.718750,5.906250]',
                qNum: 8,
                qElemNumber: 6931,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[961.562500,6.328125,1009.640625,5.906250]',
                qNum: 1,
                qElemNumber: 6930,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[913.484375,6.328125,961.562500,5.906250]',
                qNum: 7,
                qElemNumber: 6919,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[865.406250,6.328125,913.484375,5.906250]',
                qNum: 6,
                qElemNumber: 6918,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[817.328125,6.328125,865.406250,5.906250]',
                qNum: 6,
                qElemNumber: 6915,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[769.250000,6.328125,817.328125,5.906250]',
                qNum: 6,
                qElemNumber: 6914,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[721.171875,0.421875,769.250000,0.000000]',
                qNum: 5,
                qElemNumber: 6911,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[673.093750,0.421875,721.171875,0.000000]',
                qNum: 11,
                qElemNumber: 6910,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[576.937500,0.421875,625.015625,0.000000]',
                qNum: 21,
                qElemNumber: 6906,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[625.015625,0.421875,673.093750,0.000000]',
                qNum: 17,
                qElemNumber: 6907,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[721.171875,1.265625,769.250000,0.843750]',
                qNum: 8,
                qElemNumber: 6903,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[673.093750,1.265625,721.171875,0.843750]',
                qNum: 11,
                qElemNumber: 6902,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[576.937500,1.265625,625.015625,0.843750]',
                qNum: 28,
                qElemNumber: 6898,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[625.015625,1.265625,673.093750,0.843750]',
                qNum: 19,
                qElemNumber: 6899,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[480.781250,0.421875,528.859375,0.000000]',
                qNum: 23,
                qElemNumber: 6894,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[528.859375,0.421875,576.937500,0.000000]',
                qNum: 22,
                qElemNumber: 6895,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[384.625000,0.421875,432.703125,0.000000]',
                qNum: 42,
                qElemNumber: 6890,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[432.703125,0.421875,480.781250,0.000000]',
                qNum: 26,
                qElemNumber: 6891,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[480.781250,1.265625,528.859375,0.843750]',
                qNum: 41,
                qElemNumber: 6886,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[528.859375,1.265625,576.937500,0.843750]',
                qNum: 23,
                qElemNumber: 6887,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[384.625000,1.265625,432.703125,0.843750]',
                qNum: 51,
                qElemNumber: 6882,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[432.703125,1.265625,480.781250,0.843750]',
                qNum: 57,
                qElemNumber: 6883,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[673.093750,2.109375,721.171875,1.687500]',
                qNum: 15,
                qElemNumber: 6878,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[721.171875,2.109375,769.250000,1.687500]',
                qNum: 22,
                qElemNumber: 6879,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[576.937500,2.109375,625.015625,1.687500]',
                qNum: 31,
                qElemNumber: 6874,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[625.015625,2.109375,673.093750,1.687500]',
                qNum: 19,
                qElemNumber: 6875,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[673.093750,3.375000,721.171875,2.953125]',
                qNum: 18,
                qElemNumber: 6868,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[721.171875,3.375000,769.250000,2.953125]',
                qNum: 12,
                qElemNumber: 6869,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[576.937500,3.375000,625.015625,2.953125]',
                qNum: 25,
                qElemNumber: 6864,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[625.015625,3.375000,673.093750,2.953125]',
                qNum: 17,
                qElemNumber: 6865,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[480.781250,2.109375,528.859375,1.687500]',
                qNum: 43,
                qElemNumber: 6862,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[528.859375,2.109375,576.937500,1.687500]',
                qNum: 41,
                qElemNumber: 6863,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[384.625000,2.109375,432.703125,1.687500]',
                qNum: 55,
                qElemNumber: 6858,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[432.703125,2.109375,480.781250,1.687500]',
                qNum: 53,
                qElemNumber: 6859,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[480.781250,3.375000,528.859375,2.953125]',
                qNum: 39,
                qElemNumber: 6852,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[528.859375,3.375000,576.937500,2.953125]',
                qNum: 21,
                qElemNumber: 6853,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[384.625000,3.375000,432.703125,2.953125]',
                qNum: 48,
                qElemNumber: 6848,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[432.703125,3.375000,480.781250,2.953125]',
                qNum: 52,
                qElemNumber: 6849,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[288.468750,0.421875,336.546875,0.000000]',
                qNum: 66,
                qElemNumber: 6846,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[336.546875,0.421875,384.625000,0.000000]',
                qNum: 60,
                qElemNumber: 6847,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[192.312500,0.421875,240.390625,0.000000]',
                qNum: 109,
                qElemNumber: 6842,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[240.390625,0.421875,288.468750,0.000000]',
                qNum: 99,
                qElemNumber: 6843,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[288.468750,1.265625,336.546875,0.843750]',
                qNum: 84,
                qElemNumber: 6838,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[336.546875,1.265625,384.625000,0.843750]',
                qNum: 76,
                qElemNumber: 6839,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[192.312500,1.265625,240.390625,0.843750]',
                qNum: 177,
                qElemNumber: 6834,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[240.390625,1.265625,288.468750,0.843750]',
                qNum: 126,
                qElemNumber: 6835,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[96.156250,0.421875,144.234375,0.000000]',
                qNum: 268,
                qElemNumber: 6830,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[144.234375,0.421875,192.312500,0.000000]',
                qNum: 167,
                qElemNumber: 6831,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[0.000000,0.421875,48.078125,0.000000]',
                qNum: 1364,
                qElemNumber: 6826,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[48.078125,0.421875,96.156250,0.000000]',
                qNum: 492,
                qElemNumber: 6827,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[96.156250,1.265625,144.234375,0.843750]',
                qNum: 292,
                qElemNumber: 6822,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[144.234375,1.265625,192.312500,0.843750]',
                qNum: 238,
                qElemNumber: 6823,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[0.000000,1.265625,48.078125,0.843750]',
                qNum: 644,
                qElemNumber: 6818,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[48.078125,1.265625,96.156250,0.843750]',
                qNum: 368,
                qElemNumber: 6819,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[288.468750,2.109375,336.546875,1.687500]',
                qNum: 84,
                qElemNumber: 6814,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[336.546875,2.109375,384.625000,1.687500]',
                qNum: 80,
                qElemNumber: 6815,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[192.312500,2.109375,240.390625,1.687500]',
                qNum: 126,
                qElemNumber: 6810,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[240.390625,2.109375,288.468750,1.687500]',
                qNum: 101,
                qElemNumber: 6811,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[288.468750,3.375000,336.546875,2.953125]',
                qNum: 71,
                qElemNumber: 6804,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[336.546875,3.375000,384.625000,2.953125]',
                qNum: 63,
                qElemNumber: 6805,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[192.312500,3.375000,240.390625,2.953125]',
                qNum: 90,
                qElemNumber: 6800,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[240.390625,3.375000,288.468750,2.953125]',
                qNum: 81,
                qElemNumber: 6801,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[96.156250,2.109375,144.234375,1.687500]',
                qNum: 179,
                qElemNumber: 6798,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[144.234375,2.109375,192.312500,1.687500]',
                qNum: 129,
                qElemNumber: 6799,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[0.000000,2.109375,48.078125,1.687500]',
                qNum: 244,
                qElemNumber: 6794,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[48.078125,2.109375,96.156250,1.687500]',
                qNum: 186,
                qElemNumber: 6795,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[96.156250,3.375000,144.234375,2.953125]',
                qNum: 107,
                qElemNumber: 6788,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[144.234375,3.375000,192.312500,2.953125]',
                qNum: 107,
                qElemNumber: 6789,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[0.000000,3.375000,48.078125,2.953125]',
                qNum: 140,
                qElemNumber: 6784,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[48.078125,3.375000,96.156250,2.953125]',
                qNum: 128,
                qElemNumber: 6785,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[673.093750,4.218750,721.171875,3.796875]',
                qNum: 18,
                qElemNumber: 6780,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[721.171875,4.218750,769.250000,3.796875]',
                qNum: 8,
                qElemNumber: 6781,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[576.937500,4.218750,625.015625,3.796875]',
                qNum: 24,
                qElemNumber: 6776,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[625.015625,4.218750,673.093750,3.796875]',
                qNum: 19,
                qElemNumber: 6777,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[721.171875,5.062500,769.250000,4.640625]',
                qNum: 11,
                qElemNumber: 6773,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[673.093750,5.062500,721.171875,4.640625]',
                qNum: 12,
                qElemNumber: 6772,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[576.937500,5.062500,625.015625,4.640625]',
                qNum: 13,
                qElemNumber: 6768,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[625.015625,5.062500,673.093750,4.640625]',
                qNum: 22,
                qElemNumber: 6769,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[480.781250,4.218750,528.859375,3.796875]',
                qNum: 32,
                qElemNumber: 6764,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[528.859375,4.218750,576.937500,3.796875]',
                qNum: 29,
                qElemNumber: 6765,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[384.625000,4.218750,432.703125,3.796875]',
                qNum: 41,
                qElemNumber: 6760,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[432.703125,4.218750,480.781250,3.796875]',
                qNum: 38,
                qElemNumber: 6761,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[480.781250,5.062500,528.859375,4.640625]',
                qNum: 26,
                qElemNumber: 6756,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[528.859375,5.062500,576.937500,4.640625]',
                qNum: 18,
                qElemNumber: 6757,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[384.625000,5.062500,432.703125,4.640625]',
                qNum: 26,
                qElemNumber: 6752,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[432.703125,5.062500,480.781250,4.640625]',
                qNum: 28,
                qElemNumber: 6753,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[721.171875,6.328125,769.250000,5.906250]',
                qNum: 9,
                qElemNumber: 6743,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[673.093750,6.328125,721.171875,5.906250]',
                qNum: 10,
                qElemNumber: 6742,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[576.937500,6.328125,625.015625,5.906250]',
                qNum: 25,
                qElemNumber: 6738,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[625.015625,6.328125,673.093750,5.906250]',
                qNum: 16,
                qElemNumber: 6739,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[480.781250,6.328125,528.859375,5.906250]',
                qNum: 11,
                qElemNumber: 6726,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[528.859375,6.328125,576.937500,5.906250]',
                qNum: 19,
                qElemNumber: 6727,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[384.625000,6.328125,432.703125,5.906250]',
                qNum: 16,
                qElemNumber: 6722,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[432.703125,6.328125,480.781250,5.906250]',
                qNum: 25,
                qElemNumber: 6723,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[288.468750,4.218750,336.546875,3.796875]',
                qNum: 47,
                qElemNumber: 6716,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[336.546875,4.218750,384.625000,3.796875]',
                qNum: 54,
                qElemNumber: 6717,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[192.312500,4.218750,240.390625,3.796875]',
                qNum: 68,
                qElemNumber: 6712,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[240.390625,4.218750,288.468750,3.796875]',
                qNum: 52,
                qElemNumber: 6713,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[288.468750,5.062500,336.546875,4.640625]',
                qNum: 33,
                qElemNumber: 6708,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[336.546875,5.062500,384.625000,4.640625]',
                qNum: 29,
                qElemNumber: 6709,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[192.312500,5.062500,240.390625,4.640625]',
                qNum: 42,
                qElemNumber: 6704,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[240.390625,5.062500,288.468750,4.640625]',
                qNum: 48,
                qElemNumber: 6705,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[96.156250,4.218750,144.234375,3.796875]',
                qNum: 49,
                qElemNumber: 6700,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[144.234375,4.218750,192.312500,3.796875]',
                qNum: 74,
                qElemNumber: 6701,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[0.000000,4.218750,48.078125,3.796875]',
                qNum: 79,
                qElemNumber: 6696,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[48.078125,4.218750,96.156250,3.796875]',
                qNum: 54,
                qElemNumber: 6697,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[96.156250,5.062500,144.234375,4.640625]',
                qNum: 30,
                qElemNumber: 6692,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[144.234375,5.062500,192.312500,4.640625]',
                qNum: 35,
                qElemNumber: 6693,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[0.000000,5.062500,48.078125,4.640625]',
                qNum: 36,
                qElemNumber: 6688,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[48.078125,5.062500,96.156250,4.640625]',
                qNum: 36,
                qElemNumber: 6689,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[288.468750,6.328125,336.546875,5.906250]',
                qNum: 29,
                qElemNumber: 6678,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[336.546875,6.328125,384.625000,5.906250]',
                qNum: 27,
                qElemNumber: 6679,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[192.312500,6.328125,240.390625,5.906250]',
                qNum: 23,
                qElemNumber: 6674,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[240.390625,6.328125,288.468750,5.906250]',
                qNum: 23,
                qElemNumber: 6675,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[96.156250,6.328125,144.234375,5.906250]',
                qNum: 27,
                qElemNumber: 6662,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[144.234375,6.328125,192.312500,5.906250]',
                qNum: 28,
                qElemNumber: 6663,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[0.000000,6.328125,48.078125,5.906250]',
                qNum: 12,
                qElemNumber: 6658,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[48.078125,6.328125,96.156250,5.906250]',
                qNum: 30,
                qElemNumber: 6659,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1442.343750,8.015625,1490.421875,7.593750]',
                qNum: 1,
                qElemNumber: 6646,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1346.187500,8.015625,1394.265625,7.593750]',
                qNum: 1,
                qElemNumber: 6642,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1442.343750,7.171875,1490.421875,6.750000]',
                qNum: 1,
                qElemNumber: 6654,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1394.265625,7.171875,1442.343750,6.750000]',
                qNum: 1,
                qElemNumber: 6651,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1346.187500,7.171875,1394.265625,6.750000]',
                qNum: 2,
                qElemNumber: 6650,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1298.109375,8.015625,1346.187500,7.593750]',
                qNum: 1,
                qElemNumber: 6631,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1201.953125,8.015625,1250.031250,7.593750]',
                qNum: 3,
                qElemNumber: 6627,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1153.875000,8.015625,1201.953125,7.593750]',
                qNum: 1,
                qElemNumber: 6626,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1298.109375,7.171875,1346.187500,6.750000]',
                qNum: 1,
                qElemNumber: 6639,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1250.031250,7.171875,1298.109375,6.750000]',
                qNum: 2,
                qElemNumber: 6638,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1201.953125,7.171875,1250.031250,6.750000]',
                qNum: 3,
                qElemNumber: 6635,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1153.875000,7.171875,1201.953125,6.750000]',
                qNum: 4,
                qElemNumber: 6634,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1490.421875,10.125000,1538.500000,9.703125]',
                qNum: 1,
                qElemNumber: 6613,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1394.265625,10.125000,1442.343750,9.703125]',
                qNum: 2,
                qElemNumber: 6609,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1490.421875,9.281250,1538.500000,8.859375]',
                qNum: 2,
                qElemNumber: 6621,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1394.265625,9.281250,1442.343750,8.859375]',
                qNum: 1,
                qElemNumber: 6617,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1346.187500,9.281250,1394.265625,8.859375]',
                qNum: 1,
                qElemNumber: 6616,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1298.109375,10.125000,1346.187500,9.703125]',
                qNum: 1,
                qElemNumber: 6597,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1153.875000,10.125000,1201.953125,9.703125]',
                qNum: 1,
                qElemNumber: 6592,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1298.109375,9.281250,1346.187500,8.859375]',
                qNum: 1,
                qElemNumber: 6605,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1250.031250,9.281250,1298.109375,8.859375]',
                qNum: 3,
                qElemNumber: 6604,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1201.953125,9.281250,1250.031250,8.859375]',
                qNum: 3,
                qElemNumber: 6601,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1105.796875,7.171875,1153.875000,6.750000]',
                qNum: 1,
                qElemNumber: 6591,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1057.718750,7.171875,1105.796875,6.750000]',
                qNum: 3,
                qElemNumber: 6590,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1009.640625,7.171875,1057.718750,6.750000]',
                qNum: 6,
                qElemNumber: 6587,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[961.562500,7.171875,1009.640625,6.750000]',
                qNum: 3,
                qElemNumber: 6586,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1057.718750,8.015625,1105.796875,7.593750]',
                qNum: 5,
                qElemNumber: 6582,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1009.640625,8.015625,1057.718750,7.593750]',
                qNum: 5,
                qElemNumber: 6579,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[961.562500,8.015625,1009.640625,7.593750]',
                qNum: 2,
                qElemNumber: 6578,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[913.484375,7.171875,961.562500,6.750000]',
                qNum: 7,
                qElemNumber: 6575,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[865.406250,7.171875,913.484375,6.750000]',
                qNum: 5,
                qElemNumber: 6574,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[817.328125,7.171875,865.406250,6.750000]',
                qNum: 6,
                qElemNumber: 6571,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[769.250000,7.171875,817.328125,6.750000]',
                qNum: 8,
                qElemNumber: 6570,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[913.484375,8.015625,961.562500,7.593750]',
                qNum: 2,
                qElemNumber: 6567,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[865.406250,8.015625,913.484375,7.593750]',
                qNum: 5,
                qElemNumber: 6566,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[817.328125,8.015625,865.406250,7.593750]',
                qNum: 5,
                qElemNumber: 6563,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[769.250000,8.015625,817.328125,7.593750]',
                qNum: 5,
                qElemNumber: 6562,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1105.796875,10.125000,1153.875000,9.703125]',
                qNum: 2,
                qElemNumber: 6549,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1057.718750,10.125000,1105.796875,9.703125]',
                qNum: 1,
                qElemNumber: 6548,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1009.640625,10.125000,1057.718750,9.703125]',
                qNum: 4,
                qElemNumber: 6545,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[961.562500,10.125000,1009.640625,9.703125]',
                qNum: 2,
                qElemNumber: 6544,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1105.796875,9.281250,1153.875000,8.859375]',
                qNum: 3,
                qElemNumber: 6557,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1057.718750,9.281250,1105.796875,8.859375]',
                qNum: 2,
                qElemNumber: 6556,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1009.640625,9.281250,1057.718750,8.859375]',
                qNum: 3,
                qElemNumber: 6553,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[961.562500,9.281250,1009.640625,8.859375]',
                qNum: 4,
                qElemNumber: 6552,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[865.406250,10.125000,913.484375,9.703125]',
                qNum: 2,
                qElemNumber: 6532,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[817.328125,10.125000,865.406250,9.703125]',
                qNum: 5,
                qElemNumber: 6529,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[769.250000,10.125000,817.328125,9.703125]',
                qNum: 5,
                qElemNumber: 6528,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[913.484375,9.281250,961.562500,8.859375]',
                qNum: 4,
                qElemNumber: 6541,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[817.328125,9.281250,865.406250,8.859375]',
                qNum: 3,
                qElemNumber: 6537,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[769.250000,9.281250,817.328125,8.859375]',
                qNum: 3,
                qElemNumber: 6536,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1442.343750,13.078125,1490.421875,12.656250]',
                qNum: 1,
                qElemNumber: 6486,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1201.953125,13.078125,1250.031250,12.656250]',
                qNum: 1,
                qElemNumber: 6467,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1442.343750,12.234375,1490.421875,11.812500]',
                qNum: 2,
                qElemNumber: 6494,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1298.109375,12.234375,1346.187500,11.812500]',
                qNum: 1,
                qElemNumber: 6479,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1201.953125,12.234375,1250.031250,11.812500]',
                qNum: 1,
                qElemNumber: 6475,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1153.875000,11.390625,1201.953125,10.968750]',
                qNum: 1,
                qElemNumber: 6498,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1105.796875,11.390625,1153.875000,10.968750]',
                qNum: 1,
                qElemNumber: 6455,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1057.718750,11.390625,1105.796875,10.968750]',
                qNum: 3,
                qElemNumber: 6454,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1009.640625,11.390625,1057.718750,10.968750]',
                qNum: 3,
                qElemNumber: 6451,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[961.562500,11.390625,1009.640625,10.968750]',
                qNum: 1,
                qElemNumber: 6450,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[913.484375,11.390625,961.562500,10.968750]',
                qNum: 3,
                qElemNumber: 6439,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[865.406250,11.390625,913.484375,10.968750]',
                qNum: 3,
                qElemNumber: 6438,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[817.328125,11.390625,865.406250,10.968750]',
                qNum: 1,
                qElemNumber: 6435,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[769.250000,11.390625,817.328125,10.968750]',
                qNum: 6,
                qElemNumber: 6434,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1105.796875,13.078125,1153.875000,12.656250]',
                qNum: 2,
                qElemNumber: 6423,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1057.718750,13.078125,1105.796875,12.656250]',
                qNum: 3,
                qElemNumber: 6422,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1009.640625,13.078125,1057.718750,12.656250]',
                qNum: 2,
                qElemNumber: 6419,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[961.562500,13.078125,1009.640625,12.656250]',
                qNum: 1,
                qElemNumber: 6418,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1105.796875,12.234375,1153.875000,11.812500]',
                qNum: 2,
                qElemNumber: 6431,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1057.718750,12.234375,1105.796875,11.812500]',
                qNum: 1,
                qElemNumber: 6430,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1009.640625,12.234375,1057.718750,11.812500]',
                qNum: 1,
                qElemNumber: 6427,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[913.484375,13.078125,961.562500,12.656250]',
                qNum: 1,
                qElemNumber: 6407,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[865.406250,13.078125,913.484375,12.656250]',
                qNum: 1,
                qElemNumber: 6406,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[817.328125,13.078125,865.406250,12.656250]',
                qNum: 1,
                qElemNumber: 6403,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[769.250000,13.078125,817.328125,12.656250]',
                qNum: 2,
                qElemNumber: 6402,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[913.484375,12.234375,961.562500,11.812500]',
                qNum: 1,
                qElemNumber: 6415,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[865.406250,12.234375,913.484375,11.812500]',
                qNum: 2,
                qElemNumber: 6414,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[817.328125,12.234375,865.406250,11.812500]',
                qNum: 3,
                qElemNumber: 6411,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[721.171875,7.171875,769.250000,6.750000]',
                qNum: 10,
                qElemNumber: 6399,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[673.093750,7.171875,721.171875,6.750000]',
                qNum: 10,
                qElemNumber: 6398,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[625.015625,7.171875,673.093750,6.750000]',
                qNum: 13,
                qElemNumber: 6395,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[576.937500,7.171875,625.015625,6.750000]',
                qNum: 9,
                qElemNumber: 6394,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[721.171875,8.015625,769.250000,7.593750]',
                qNum: 4,
                qElemNumber: 6391,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[673.093750,8.015625,721.171875,7.593750]',
                qNum: 12,
                qElemNumber: 6390,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[625.015625,8.015625,673.093750,7.593750]',
                qNum: 9,
                qElemNumber: 6387,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[576.937500,8.015625,625.015625,7.593750]',
                qNum: 10,
                qElemNumber: 6386,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[528.859375,7.171875,576.937500,6.750000]',
                qNum: 13,
                qElemNumber: 6383,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[480.781250,7.171875,528.859375,6.750000]',
                qNum: 9,
                qElemNumber: 6382,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[384.625000,7.171875,432.703125,6.750000]',
                qNum: 18,
                qElemNumber: 6378,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[432.703125,7.171875,480.781250,6.750000]',
                qNum: 14,
                qElemNumber: 6379,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[528.859375,8.015625,576.937500,7.593750]',
                qNum: 13,
                qElemNumber: 6375,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[480.781250,8.015625,528.859375,7.593750]',
                qNum: 8,
                qElemNumber: 6374,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[384.625000,8.015625,432.703125,7.593750]',
                qNum: 16,
                qElemNumber: 6370,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[432.703125,8.015625,480.781250,7.593750]',
                qNum: 11,
                qElemNumber: 6371,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[721.171875,9.281250,769.250000,8.859375]',
                qNum: 7,
                qElemNumber: 6365,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[673.093750,9.281250,721.171875,8.859375]',
                qNum: 5,
                qElemNumber: 6364,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[625.015625,9.281250,673.093750,8.859375]',
                qNum: 3,
                qElemNumber: 6361,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[576.937500,9.281250,625.015625,8.859375]',
                qNum: 6,
                qElemNumber: 6360,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[721.171875,10.125000,769.250000,9.703125]',
                qNum: 8,
                qElemNumber: 6357,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[673.093750,10.125000,721.171875,9.703125]',
                qNum: 2,
                qElemNumber: 6356,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[625.015625,10.125000,673.093750,9.703125]',
                qNum: 2,
                qElemNumber: 6353,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[576.937500,10.125000,625.015625,9.703125]',
                qNum: 3,
                qElemNumber: 6352,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[528.859375,9.281250,576.937500,8.859375]',
                qNum: 9,
                qElemNumber: 6349,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[480.781250,9.281250,528.859375,8.859375]',
                qNum: 5,
                qElemNumber: 6348,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[432.703125,9.281250,480.781250,8.859375]',
                qNum: 7,
                qElemNumber: 6345,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[384.625000,9.281250,432.703125,8.859375]',
                qNum: 10,
                qElemNumber: 6344,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[528.859375,10.125000,576.937500,9.703125]',
                qNum: 6,
                qElemNumber: 6341,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[432.703125,10.125000,480.781250,9.703125]',
                qNum: 3,
                qElemNumber: 6337,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[384.625000,10.125000,432.703125,9.703125]',
                qNum: 3,
                qElemNumber: 6336,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[288.468750,7.171875,336.546875,6.750000]',
                qNum: 14,
                qElemNumber: 6334,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[336.546875,7.171875,384.625000,6.750000]',
                qNum: 12,
                qElemNumber: 6335,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[192.312500,7.171875,240.390625,6.750000]',
                qNum: 20,
                qElemNumber: 6330,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[240.390625,7.171875,288.468750,6.750000]',
                qNum: 16,
                qElemNumber: 6331,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[336.546875,8.015625,384.625000,7.593750]',
                qNum: 10,
                qElemNumber: 6327,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[288.468750,8.015625,336.546875,7.593750]',
                qNum: 13,
                qElemNumber: 6326,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[240.390625,8.015625,288.468750,7.593750]',
                qNum: 6,
                qElemNumber: 6323,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[192.312500,8.015625,240.390625,7.593750]',
                qNum: 9,
                qElemNumber: 6322,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[96.156250,7.171875,144.234375,6.750000]',
                qNum: 13,
                qElemNumber: 6318,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[144.234375,7.171875,192.312500,6.750000]',
                qNum: 16,
                qElemNumber: 6319,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[0.000000,7.171875,48.078125,6.750000]',
                qNum: 11,
                qElemNumber: 6314,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[48.078125,7.171875,96.156250,6.750000]',
                qNum: 15,
                qElemNumber: 6315,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[144.234375,8.015625,192.312500,7.593750]',
                qNum: 7,
                qElemNumber: 6311,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[96.156250,8.015625,144.234375,7.593750]',
                qNum: 6,
                qElemNumber: 6310,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[48.078125,8.015625,96.156250,7.593750]',
                qNum: 4,
                qElemNumber: 6307,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[0.000000,8.015625,48.078125,7.593750]',
                qNum: 8,
                qElemNumber: 6306,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[336.546875,9.281250,384.625000,8.859375]',
                qNum: 3,
                qElemNumber: 6301,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[288.468750,9.281250,336.546875,8.859375]',
                qNum: 3,
                qElemNumber: 6300,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[240.390625,9.281250,288.468750,8.859375]',
                qNum: 8,
                qElemNumber: 6297,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[192.312500,9.281250,240.390625,8.859375]',
                qNum: 7,
                qElemNumber: 6296,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[336.546875,10.125000,384.625000,9.703125]',
                qNum: 4,
                qElemNumber: 6293,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[288.468750,10.125000,336.546875,9.703125]',
                qNum: 4,
                qElemNumber: 6292,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[240.390625,10.125000,288.468750,9.703125]',
                qNum: 4,
                qElemNumber: 6289,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[192.312500,10.125000,240.390625,9.703125]',
                qNum: 5,
                qElemNumber: 6288,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[144.234375,10.125000,192.312500,9.703125]',
                qNum: 1,
                qElemNumber: 6277,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[96.156250,10.125000,144.234375,9.703125]',
                qNum: 2,
                qElemNumber: 6276,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[48.078125,10.125000,96.156250,9.703125]',
                qNum: 1,
                qElemNumber: 6273,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[144.234375,9.281250,192.312500,8.859375]',
                qNum: 2,
                qElemNumber: 6285,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[96.156250,9.281250,144.234375,8.859375]',
                qNum: 3,
                qElemNumber: 6284,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[48.078125,9.281250,96.156250,8.859375]',
                qNum: 1,
                qElemNumber: 6281,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[0.000000,9.281250,48.078125,8.859375]',
                qNum: 3,
                qElemNumber: 6280,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[721.171875,11.390625,769.250000,10.968750]',
                qNum: 4,
                qElemNumber: 6263,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[673.093750,11.390625,721.171875,10.968750]',
                qNum: 2,
                qElemNumber: 6262,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[625.015625,11.390625,673.093750,10.968750]',
                qNum: 3,
                qElemNumber: 6259,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[576.937500,11.390625,625.015625,10.968750]',
                qNum: 3,
                qElemNumber: 6258,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[528.859375,11.390625,576.937500,10.968750]',
                qNum: 2,
                qElemNumber: 6247,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[480.781250,11.390625,528.859375,10.968750]',
                qNum: 2,
                qElemNumber: 6246,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[432.703125,11.390625,480.781250,10.968750]',
                qNum: 2,
                qElemNumber: 6243,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[384.625000,11.390625,432.703125,10.968750]',
                qNum: 5,
                qElemNumber: 6242,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[721.171875,13.078125,769.250000,12.656250]',
                qNum: 2,
                qElemNumber: 6231,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[625.015625,13.078125,673.093750,12.656250]',
                qNum: 2,
                qElemNumber: 6227,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[673.093750,12.234375,721.171875,11.812500]',
                qNum: 1,
                qElemNumber: 6238,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[625.015625,12.234375,673.093750,11.812500]',
                qNum: 3,
                qElemNumber: 6235,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[528.859375,13.078125,576.937500,12.656250]',
                qNum: 2,
                qElemNumber: 6215,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[480.781250,13.078125,528.859375,12.656250]',
                qNum: 2,
                qElemNumber: 6214,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[384.625000,13.078125,432.703125,12.656250]',
                qNum: 1,
                qElemNumber: 6210,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[528.859375,12.234375,576.937500,11.812500]',
                qNum: 1,
                qElemNumber: 6223,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[480.781250,12.234375,528.859375,11.812500]',
                qNum: 3,
                qElemNumber: 6222,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[384.625000,12.234375,432.703125,11.812500]',
                qNum: 1,
                qElemNumber: 6218,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[336.546875,13.078125,384.625000,12.656250]',
                qNum: 2,
                qElemNumber: 6167,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[288.468750,13.078125,336.546875,12.656250]',
                qNum: 2,
                qElemNumber: 6166,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[240.390625,13.078125,288.468750,12.656250]',
                qNum: 1,
                qElemNumber: 6163,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[192.312500,13.078125,240.390625,12.656250]',
                qNum: 1,
                qElemNumber: 6162,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[336.546875,12.234375,384.625000,11.812500]',
                qNum: 1,
                qElemNumber: 6175,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[240.390625,12.234375,288.468750,11.812500]',
                qNum: 1,
                qElemNumber: 6171,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[192.312500,12.234375,240.390625,11.812500]',
                qNum: 3,
                qElemNumber: 6170,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[336.546875,11.390625,384.625000,10.968750]',
                qNum: 2,
                qElemNumber: 6199,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[288.468750,11.390625,336.546875,10.968750]',
                qNum: 3,
                qElemNumber: 6198,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[240.390625,11.390625,288.468750,10.968750]',
                qNum: 2,
                qElemNumber: 6195,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[48.078125,11.390625,96.156250,10.968750]',
                qNum: 1,
                qElemNumber: 6179,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[2788.531250,27.000000,2836.609375,26.578125]',
                qNum: 1,
                qElemNumber: 5444,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1730.812500,23.203125,1778.890625,22.781250]',
                qNum: 1,
                qElemNumber: 5266,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1971.203125,19.406250,2019.281250,18.984375]',
                qNum: 1,
                qElemNumber: 5705,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[3028.921875,18.140625,3077.000000,17.718750]',
                qNum: 1,
                qElemNumber: 6007,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[2019.281250,18.140625,2067.359375,17.718750]',
                qNum: 1,
                qElemNumber: 5734,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1875.046875,18.140625,1923.125000,17.718750]',
                qNum: 1,
                qElemNumber: 5687,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1682.734375,18.140625,1730.812500,17.718750]',
                qNum: 1,
                qElemNumber: 5671,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1586.578125,17.296875,1634.656250,16.875000]',
                qNum: 1,
                qElemNumber: 5675,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[2163.515625,15.187500,2211.593750,14.765625]',
                qNum: 1,
                qElemNumber: 5873,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1057.718750,20.250000,1105.796875,19.828125]',
                qNum: 1,
                qElemNumber: 4884,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[817.328125,20.250000,865.406250,19.828125]',
                qNum: 1,
                qElemNumber: 4865,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[865.406250,19.406250,913.484375,18.984375]',
                qNum: 1,
                qElemNumber: 4876,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[913.484375,18.140625,961.562500,17.718750]',
                qNum: 1,
                qElemNumber: 4903,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[817.328125,18.140625,865.406250,17.718750]',
                qNum: 1,
                qElemNumber: 4899,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[769.250000,18.140625,817.328125,17.718750]',
                qNum: 1,
                qElemNumber: 4898,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1490.421875,16.031250,1538.500000,15.609375]',
                qNum: 1,
                qElemNumber: 5085,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1250.031250,16.031250,1298.109375,15.609375]',
                qNum: 3,
                qElemNumber: 5068,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1105.796875,16.031250,1153.875000,15.609375]',
                qNum: 1,
                qElemNumber: 5021,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1009.640625,16.031250,1057.718750,15.609375]',
                qNum: 1,
                qElemNumber: 5017,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[913.484375,16.031250,961.562500,15.609375]',
                qNum: 1,
                qElemNumber: 5005,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[865.406250,16.031250,913.484375,15.609375]',
                qNum: 1,
                qElemNumber: 5004,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[817.328125,16.031250,865.406250,15.609375]',
                qNum: 1,
                qElemNumber: 5001,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1201.953125,15.187500,1250.031250,14.765625]',
                qNum: 1,
                qElemNumber: 5089,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1057.718750,15.187500,1105.796875,14.765625]',
                qNum: 1,
                qElemNumber: 5044,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1298.109375,14.343750,1346.187500,13.921875]',
                qNum: 1,
                qElemNumber: 5101,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1250.031250,14.343750,1298.109375,13.921875]',
                qNum: 1,
                qElemNumber: 5100,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[961.562500,14.343750,1009.640625,13.921875]',
                qNum: 1,
                qElemNumber: 5048,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[865.406250,14.343750,913.484375,13.921875]',
                qNum: 1,
                qElemNumber: 5036,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[769.250000,14.343750,817.328125,13.921875]',
                qNum: 1,
                qElemNumber: 5032,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[625.015625,17.296875,673.093750,16.875000]',
                qNum: 1,
                qElemNumber: 4731,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[721.171875,15.187500,769.250000,14.765625]',
                qNum: 1,
                qElemNumber: 4853,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[625.015625,15.187500,673.093750,14.765625]',
                qNum: 1,
                qElemNumber: 4849,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[576.937500,15.187500,625.015625,14.765625]',
                qNum: 2,
                qElemNumber: 4848,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[528.859375,15.187500,576.937500,14.765625]',
                qNum: 1,
                qElemNumber: 4837,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[480.781250,15.187500,528.859375,14.765625]',
                qNum: 1,
                qElemNumber: 4836,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[432.703125,15.187500,480.781250,14.765625]',
                qNum: 2,
                qElemNumber: 4833,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[336.546875,15.187500,384.625000,14.765625]',
                qNum: 1,
                qElemNumber: 4789,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[288.468750,15.187500,336.546875,14.765625]',
                qNum: 1,
                qElemNumber: 4788,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[673.093750,14.343750,721.171875,13.921875]',
                qNum: 1,
                qElemNumber: 4860,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[625.015625,14.343750,673.093750,13.921875]',
                qNum: 2,
                qElemNumber: 4857,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[576.937500,14.343750,625.015625,13.921875]',
                qNum: 1,
                qElemNumber: 4856,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[528.859375,14.343750,576.937500,13.921875]',
                qNum: 1,
                qElemNumber: 4845,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[480.781250,14.343750,528.859375,13.921875]',
                qNum: 1,
                qElemNumber: 4844,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1201.953125,23.203125,1250.031250,22.781250]',
                qNum: 1,
                qElemNumber: 4547,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[1490.421875,21.093750,1538.500000,20.671875]',
                qNum: 1,
                qElemNumber: 4605,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[961.562500,21.093750,1009.640625,20.671875]',
                qNum: 1,
                qElemNumber: 4536,
                qState: 'L',
              },
            ],
            [
              {
                qText: '[288.468750,21.093750,336.546875,20.671875]',
                qNum: 1,
                qElemNumber: 4284,
                qState: 'L',
              },
            ],
          ],
          qTails: [],
          qArea: {
            qLeft: 0,
            qTop: 0,
            qWidth: 3,
            qHeight: 409,
          },
        },
        {
          qMatrix: [],
          qTails: [],
          qArea: {
            qLeft: 0,
            qTop: 0,
            qWidth: 0,
            qHeight: 0,
          },
        },
      ],
      getEffectiveProperties: {},
    },
  ],
});
