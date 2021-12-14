export default () => ({
  type: 'sn-scatter-plot',
  genericObjects: [
    {
      getLayout: {
        qInfo: {
          qId: 'upMhB',
          qType: 'sn-scatter-plot',
        },
        qMeta: {
          privileges: ['read', 'update', 'delete', 'exportdata'],
        },
        qSelectionInfo: {},
        qHyperCube: {
          qSize: {
            qcx: 4,
            qcy: 825,
          },
          qDimensionInfo: [
            {
              qFallbackTitle: 'Product',
              qApprMaxGlyphCount: 37,
              qCardinal: 824,
              qSortIndicator: 'A',
              qGroupFallbackTitles: ['Product'],
              qGroupPos: 0,
              qStateCounts: {
                qLocked: 0,
                qSelected: 0,
                qOption: 824,
                qDeselected: 0,
                qAlternative: 0,
                qExcluded: 0,
                qSelectedExcluded: 0,
                qLockedExcluded: 0,
              },
              qTags: ['$key', '$ascii', '$text'],
              qDimensionType: 'D',
              qGrouping: 'N',
              qNumFormat: {
                qType: 'R',
                qnDec: 14,
                qUseThou: 1,
                qFmt: '##############',
                qDec: '.',
                qThou: ',',
              },
              qIsAutoFormat: true,
              qGroupFieldDefs: ['Line Desc 1'],
              qMin: 'NaN',
              qMax: 'NaN',
              qAttrExprInfo: [
                {
                  qMin: 40603.96000000001,
                  qMax: 36215504.16999994,
                  qFallbackTitle: 'Expense Amount',
                  qMinText: '40604',
                  qMaxText: '36215504',
                  qNumFormat: {
                    qType: 'I',
                    qnDec: 0,
                    qUseThou: 0,
                    qFmt: '###0',
                    qDec: '.',
                  },
                  qIsAutoFormat: true,
                  id: 'colorByAlternative',
                  matchMeasure: 0,
                  colorMapRef: 'napvtJ',
                },
              ],
              qAttrDimInfo: [],
              qCardinalities: {
                qCardinal: 824,
                qHypercubeCardinal: 825,
                qAllValuesCardinal: -1,
              },
              qLibraryId: 'pmresb',
              title: 'Product',
              autoSort: true,
              cId: 'ahpKmV',
              othersLabel: 'Others',
            },
          ],
          qMeasureInfo: [
            {
              qFallbackTitle: 'Expense Amount',
              qApprMaxGlyphCount: 14,
              qCardinal: 0,
              qSortIndicator: 'D',
              qNumFormat: {
                qType: 'M',
                qnDec: 2,
                qUseThou: 0,
                qFmt: '$#,##0.00;($#,##0.00)',
                qDec: '.',
                qThou: ',',
              },
              qMin: 40603.96000000001,
              qMax: 36215504.16999994,
              qAttrExprInfo: [],
              qAttrDimInfo: [],
              qLibraryId: 'napvtJ',
              qTrendLines: [],
              autoSort: true,
              cId: 'RPjZje',
              numFormatFromTemplate: true,
              isCustomFormatted: false,
            },
            {
              qFallbackTitle: '# of Customers',
              qApprMaxGlyphCount: 3,
              qCardinal: 0,
              qSortIndicator: 'D',
              qNumFormat: {
                qType: 'I',
                qnDec: 0,
                qUseThou: 1,
                qFmt: '###0',
                qDec: '.',
              },
              qMin: 0,
              qMax: 90,
              qIsAutoFormat: true,
              qAttrExprInfo: [],
              qAttrDimInfo: [],
              qLibraryId: 'DSrjAGm',
              qTrendLines: [],
              coloring: {
                gradient: {
                  colors: [
                    {
                      color: '#ecc43d',
                      index: 6,
                    },
                    {
                      color: '#578b60',
                      index: 10,
                    },
                  ],
                  breakTypes: [false],
                  limits: [0.219],
                  limitType: 'percent',
                },
              },
              autoSort: true,
              cId: 'ULEWmxL',
              numFormatFromTemplate: true,
              isCustomFormatted: false,
            },
            {
              qFallbackTitle: 'Budget',
              qApprMaxGlyphCount: 11,
              qCardinal: 0,
              qSortIndicator: 'D',
              qNumFormat: {
                qType: 'R',
                qnDec: 0,
                qUseThou: 0,
                qFmt: '##############',
                qDec: '.',
                qThou: ',',
              },
              qMin: 43.33717000000001,
              qMax: 49609.47729000036,
              qIsAutoFormat: true,
              qAttrExprInfo: [],
              qAttrDimInfo: [],
              qLibraryId: 'VjxMHP',
              qTrendLines: [],
              autoSort: true,
              cId: 'RZqEhA',
              numFormatFromTemplate: true,
              quarantine: {
                qNumFormat: {},
                isCustomFormatted: false,
              },
            },
          ],
          qEffectiveInterColumnSortOrder: [3, 2, 1, 0],
          qGrandTotalRow: [
            {
              qText: '$36,215,504.17',
              qNum: 36215504.16999994,
              qElemNumber: -1,
              qState: 'X',
              qIsTotalCell: true,
            },
            {
              qText: '130',
              qNum: 130,
              qElemNumber: -1,
              qState: 'X',
              qIsTotalCell: true,
            },
            {
              qText: '49609.47729',
              qNum: 49609.47729000036,
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
          qHasOtherValues: false,
          qTreeNodesOnDim: [],
          qColumnOrder: [],
        },
        refLine: {
          refLinesX: [],
          refLinesY: [],
        },
        showTitles: true,
        title: '',
        subtitle: '',
        footnote: '',
        disableNavMenu: false,
        showDetails: false,
        showDisclaimer: true,
        navigation: false,
        dataPoint: {
          bubbleSizes: 5,
          rangeBubbleSizes: [16, 20],
        },
        labels: {
          mode: 1,
        },
        gridLine: {
          auto: false,
          spacing: 2,
        },
        color: {
          auto: false,
          mode: 'byMeasure',
          formatting: {
            numFormatFromTemplate: true,
            quarantine: {
              qNumFormat: {},
              isCustomFormatted: false,
            },
            qNumFormat: null,
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
          altLabel: 'napvtJ',
          byDimDef: {
            label: 'pmresb',
            key: 'pmresb',
            type: 'libraryItem',
            activeDimensionIndex: 0,
          },
          byMeasureDef: {
            label: 'napvtJ',
            key: 'napvtJ',
            type: 'libraryItem',
          },
        },
        legend: {
          show: true,
          dock: 'left',
          showTitle: true,
        },
        xAxis: {
          show: 'all',
          dock: 'near',
          spacing: 0.5,
          autoMinMax: true,
          minMax: 'min',
          min: 0,
          max: 10,
        },
        yAxis: {
          show: 'all',
          dock: 'near',
          spacing: 0.5,
          autoMinMax: true,
          minMax: 'min',
          min: 0,
          max: 10,
        },
        tooltip: {
          auto: true,
          hideBasic: false,
          title: '',
          description: '',
        },
        visualization: 'sn-scatter-plot',
        version: '2.0.0',
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
          version: '2.0.0',
          author: 'QlikTech International AB',
          type: 'visualization',
          supernova: true,
        },
      },
      getHyperCubeData: [
        {
          qMatrix: [
            [
              {
                qText: '-',
                qNum: 'NaN',
                qElemNumber: -2,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '36215504',
                      qNum: 36215504.16999994,
                    },
                  ],
                },
                qIsNull: true,
              },
              {
                qText: '$36,215,504.17',
                qNum: 36215504.16999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '0',
                qNum: 0,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '49609.47729',
                qNum: 49609.47729000036,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Fancy Canned Sardines',
                qNum: 'NaN',
                qElemNumber: 66,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '29975335',
                      qNum: 29975334.64000001,
                    },
                  ],
                },
              },
              {
                qText: '$29,975,334.64',
                qNum: 29975334.64000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '66',
                qNum: 66,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '32574.32842',
                qNum: 32574.328420000016,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Potato Chips',
                qNum: 'NaN',
                qElemNumber: 38,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '29307989',
                      qNum: 29307988.819999963,
                    },
                  ],
                },
              },
              {
                qText: '$29,307,988.82',
                qNum: 29307988.819999963,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '64',
                qNum: 64,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '31644.56944',
                qNum: 31644.56944000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Walnuts',
                qNum: 'NaN',
                qElemNumber: 134,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '28447210',
                      qNum: 28447210.40999994,
                    },
                  ],
                },
              },
              {
                qText: '$28,447,210.41',
                qNum: 28447210.40999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '35',
                qNum: 35,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '30994.35781',
                qNum: 30994.35781000006,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Apple Cinnamon Waffles',
                qNum: 'NaN',
                qElemNumber: 41,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '28333673',
                      qNum: 28333672.509999953,
                    },
                  ],
                },
              },
              {
                qText: '$28,333,672.51',
                qNum: 28333672.509999953,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '51',
                qNum: 51,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '30834.87769',
                qNum: 30834.87769000006,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Dried Apples',
                qNum: 'NaN',
                qElemNumber: 80,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '27818038',
                      qNum: 27818038.209999982,
                    },
                  ],
                },
              },
              {
                qText: '$27,818,038.21',
                qNum: 27818038.209999982,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '65',
                qNum: 65,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '30142.10922',
                qNum: 30142.10922000006,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Popsicles',
                qNum: 'NaN',
                qElemNumber: 45,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '27644320',
                      qNum: 27644320.439999986,
                    },
                  ],
                },
              },
              {
                qText: '$27,644,320.44',
                qNum: 27644320.439999986,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '57',
                qNum: 57,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '30092.04586',
                qNum: 30092.04586000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Canned Yams',
                qNum: 'NaN',
                qElemNumber: 126,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '27482462',
                      qNum: 27482461.509999994,
                    },
                  ],
                },
              },
              {
                qText: '$27,482,461.51',
                qNum: 27482461.509999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '46',
                qNum: 46,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '29692.5044',
                qNum: 29692.504400000013,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Great Muffins',
                qNum: 'NaN',
                qElemNumber: 154,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '27238919',
                      qNum: 27238918.869999997,
                    },
                  ],
                },
              },
              {
                qText: '$27,238,918.87',
                qNum: 27238918.869999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '41',
                qNum: 41,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '29540.40601',
                qNum: 29540.40601,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Chicken TV Dinner',
                qNum: 'NaN',
                qElemNumber: 156,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '26999087',
                      qNum: 26999086.81999996,
                    },
                  ],
                },
              },
              {
                qText: '$26,999,086.82',
                qNum: 26999086.81999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '47',
                qNum: 47,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '29081.97977',
                qNum: 29081.97977000007,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Ice Cream',
                qNum: 'NaN',
                qElemNumber: 166,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '26863422',
                      qNum: 26863422.309999954,
                    },
                  ],
                },
              },
              {
                qText: '$26,863,422.31',
                qNum: 26863422.309999954,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '52',
                qNum: 52,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '29072.5142',
                qNum: 29072.51420000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Waffles',
                qNum: 'NaN',
                qElemNumber: 120,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '26225703',
                      qNum: 26225702.990000002,
                    },
                  ],
                },
              },
              {
                qText: '$26,225,702.99',
                qNum: 26225702.990000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '31',
                qNum: 31,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '28620.34022',
                qNum: 28620.340219999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony New Potatos',
                qNum: 'NaN',
                qElemNumber: 12,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '26333927',
                      qNum: 26333927.499999978,
                    },
                  ],
                },
              },
              {
                qText: '$26,333,927.50',
                qNum: 26333927.499999978,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '65',
                qNum: 65,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '28555.8315',
                qNum: 28555.831500000033,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Limes',
                qNum: 'NaN',
                qElemNumber: 43,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '26236020',
                      qNum: 26236019.71999996,
                    },
                  ],
                },
              },
              {
                qText: '$26,236,019.72',
                qNum: 26236019.71999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '43',
                qNum: 43,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '28365.43925',
                qNum: 28365.439250000076,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Almonds',
                qNum: 'NaN',
                qElemNumber: 260,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '25843678',
                      qNum: 25843677.900000032,
                    },
                  ],
                },
              },
              {
                qText: '$25,843,677.90',
                qNum: 25843677.900000032,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '47',
                qNum: 47,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '28033.45958',
                qNum: 28033.459580000024,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Fajita French Fries',
                qNum: 'NaN',
                qElemNumber: 81,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '25763263',
                      qNum: 25763263.060000017,
                    },
                  ],
                },
              },
              {
                qText: '$25,763,263.06',
                qNum: 25763263.060000017,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '47',
                qNum: 47,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27956.91368',
                qNum: 27956.91368000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Red Spade Beef Bologna',
                qNum: 'NaN',
                qElemNumber: 20,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '25580950',
                      qNum: 25580950.269999947,
                    },
                  ],
                },
              },
              {
                qText: '$25,580,950.27',
                qNum: 25580950.269999947,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '80',
                qNum: 80,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27802.99327',
                qNum: 27802.993270000065,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Home Style French Fries',
                qNum: 'NaN',
                qElemNumber: 148,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '25433591',
                      qNum: 25433590.609999966,
                    },
                  ],
                },
              },
              {
                qText: '$25,433,590.61',
                qNum: 25433590.609999966,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '48',
                qNum: 48,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27781.25003',
                qNum: 27781.25003000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Macintosh Apples',
                qNum: 'NaN',
                qElemNumber: 19,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '25433234',
                      qNum: 25433234.329999965,
                    },
                  ],
                },
              },
              {
                qText: '$25,433,234.33',
                qNum: 25433234.329999965,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '48',
                qNum: 48,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27626.94299',
                qNum: 27626.94299000008,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Golden Delcious Apples',
                qNum: 'NaN',
                qElemNumber: 23,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '25368926',
                      qNum: 25368926.400000006,
                    },
                  ],
                },
              },
              {
                qText: '$25,368,926.40',
                qNum: 25368926.400000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '58',
                qNum: 58,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27623.27965',
                qNum: 27623.279650000044,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Canned String Beans',
                qNum: 'NaN',
                qElemNumber: 86,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '25210027',
                      qNum: 25210026.519999966,
                    },
                  ],
                },
              },
              {
                qText: '$25,210,026.52',
                qNum: 25210026.519999966,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '48',
                qNum: 48,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27189.42173',
                qNum: 27189.421730000027,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla Chocolate Milk',
                qNum: 'NaN',
                qElemNumber: 72,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '24885608',
                      qNum: 24885607.64999995,
                    },
                  ],
                },
              },
              {
                qText: '$24,885,607.65',
                qNum: 24885607.64999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '38',
                qNum: 38,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27147.32275',
                qNum: 27147.322749999974,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Oranges',
                qNum: 'NaN',
                qElemNumber: 340,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '24782402',
                      qNum: 24782401.71999994,
                    },
                  ],
                },
              },
              {
                qText: '$24,782,401.72',
                qNum: 24782401.71999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '40',
                qNum: 40,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27128.15915',
                qNum: 27128.159149999963,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better String Cheese',
                qNum: 'NaN',
                qElemNumber: 332,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '24661708',
                      qNum: 24661708.18999997,
                    },
                  ],
                },
              },
              {
                qText: '$24,661,708.19',
                qNum: 24661708.18999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '30',
                qNum: 30,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26926.54262',
                qNum: 26926.54261999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Pepper',
                qNum: 'NaN',
                qElemNumber: 82,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '24752384',
                      qNum: 24752384.230000023,
                    },
                  ],
                },
              },
              {
                qText: '$24,752,384.23',
                qNum: 24752384.230000023,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '42',
                qNum: 42,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26833.65796',
                qNum: 26833.657960000008,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Cutting Edge Foot-Long Hot Dogs',
                qNum: 'NaN',
                qElemNumber: 63,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '24619566',
                      qNum: 24619566.350000005,
                    },
                  ],
                },
              },
              {
                qText: '$24,619,566.35',
                qNum: 24619566.350000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '47',
                qNum: 47,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26603.904',
                qNum: 26603.904000000028,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Chicken TV Dinner',
                qNum: 'NaN',
                qElemNumber: 39,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '24537751',
                      qNum: 24537751.179999992,
                    },
                  ],
                },
              },
              {
                qText: '$24,537,751.18',
                qNum: 24537751.179999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '37',
                qNum: 37,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26557.45829',
                qNum: 26557.458290000028,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Washington Cranberry Juice',
                qNum: 'NaN',
                qElemNumber: 155,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '24440122',
                      qNum: 24440121.979999978,
                    },
                  ],
                },
              },
              {
                qText: '$24,440,121.98',
                qNum: 24440121.979999978,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '41',
                qNum: 41,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26401.99335',
                qNum: 26401.993349999986,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Low Fat Cookies',
                qNum: 'NaN',
                qElemNumber: 631,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '24239159',
                      qNum: 24239159.25999996,
                    },
                  ],
                },
              },
              {
                qText: '$24,239,159.26',
                qNum: 24239159.25999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '32',
                qNum: 32,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26306.1389',
                qNum: 26306.138899999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Red Spade Low Fat Bologna',
                qNum: 'NaN',
                qElemNumber: 49,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '24143708',
                      qNum: 24143707.84999998,
                    },
                  ],
                },
              },
              {
                qText: '$24,143,707.85',
                qNum: 24143707.84999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '49',
                qNum: 49,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26147.1411',
                qNum: 26147.14110000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide French Roast Coffee',
                qNum: 'NaN',
                qElemNumber: 193,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '24219663',
                      qNum: 24219662.510000017,
                    },
                  ],
                },
              },
              {
                qText: '$24,219,662.51',
                qNum: 24219662.510000017,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '32',
                qNum: 32,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26123.44372',
                qNum: 26123.443720000014,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Beef TV Dinner',
                qNum: 'NaN',
                qElemNumber: 150,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '23961878',
                      qNum: 23961878.120000023,
                    },
                  ],
                },
              },
              {
                qText: '$23,961,878.12',
                qNum: 23961878.120000023,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '40',
                qNum: 40,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25869.05897',
                qNum: 25869.05897000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Pearl Chardonnay',
                qNum: 'NaN',
                qElemNumber: 105,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '23808394',
                      qNum: 23808393.839999974,
                    },
                  ],
                },
              },
              {
                qText: '$23,808,393.84',
                qNum: 23808393.839999974,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '51',
                qNum: 51,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25754.39352',
                qNum: 25754.393520000023,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla String Cheese',
                qNum: 'NaN',
                qElemNumber: 138,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '23797294',
                      qNum: 23797294.00999997,
                    },
                  ],
                },
              },
              {
                qText: '$23,797,294.01',
                qNum: 23797294.00999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '35',
                qNum: 35,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25748.96254',
                qNum: 25748.962540000055,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Cauliflower',
                qNum: 'NaN',
                qElemNumber: 75,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '23796374',
                      qNum: 23796373.739999987,
                    },
                  ],
                },
              },
              {
                qText: '$23,796,373.74',
                qNum: 23796373.739999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '48',
                qNum: 48,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25659.3669',
                qNum: 25659.366900000037,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Sesame Oil',
                qNum: 'NaN',
                qElemNumber: 97,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '23763829',
                      qNum: 23763829.43999998,
                    },
                  ],
                },
              },
              {
                qText: '$23,763,829.44',
                qNum: 23763829.43999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '34',
                qNum: 34,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25656.03463',
                qNum: 25656.034629999976,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Discover Spaghetti',
                qNum: 'NaN',
                qElemNumber: 70,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '23624604',
                      qNum: 23624604.27999999,
                    },
                  ],
                },
              },
              {
                qText: '$23,624,604.28',
                qNum: 23624604.27999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '50',
                qNum: 50,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25654.21929',
                qNum: 25654.219290000037,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Broccoli',
                qNum: 'NaN',
                qElemNumber: 255,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '23620603',
                      qNum: 23620602.91999999,
                    },
                  ],
                },
              },
              {
                qText: '$23,620,602.92',
                qNum: 23620602.91999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23',
                qNum: 23,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25516.81573',
                qNum: 25516.815729999962,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Avocado Dip',
                qNum: 'NaN',
                qElemNumber: 10,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '23403950',
                      qNum: 23403950.36999999,
                    },
                  ],
                },
              },
              {
                qText: '$23,403,950.37',
                qNum: 23403950.36999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '44',
                qNum: 44,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25510.17745',
                qNum: 25510.177450000036,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Rice Soup',
                qNum: 'NaN',
                qElemNumber: 389,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '22961468',
                      qNum: 22961467.509999927,
                    },
                  ],
                },
              },
              {
                qText: '$22,961,467.51',
                qNum: 22961467.509999927,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25320.31227',
                qNum: 25320.312269999962,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Ice Cream Sandwich',
                qNum: 'NaN',
                qElemNumber: 410,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '23395866',
                      qNum: 23395865.51,
                    },
                  ],
                },
              },
              {
                qText: '$23,395,865.51',
                qNum: 23395865.51,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '35',
                qNum: 35,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25247.49777',
                qNum: 25247.497770000067,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Moms Sliced Ham',
                qNum: 'NaN',
                qElemNumber: 225,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '23174375',
                      qNum: 23174375.25000001,
                    },
                  ],
                },
              },
              {
                qText: '$23,174,375.25',
                qNum: 23174375.25000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '54',
                qNum: 54,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25015.62955',
                qNum: 25015.629550000052,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Chunky Peanut Butter',
                qNum: 'NaN',
                qElemNumber: 194,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '22919054',
                      qNum: 22919054.34999998,
                    },
                  ],
                },
              },
              {
                qText: '$22,919,054.35',
                qNum: 22919054.34999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24778.19782',
                qNum: 24778.197819999958,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Frozen Cheese Pizza',
                qNum: 'NaN',
                qElemNumber: 79,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '23057842',
                      qNum: 23057842.309999976,
                    },
                  ],
                },
              },
              {
                qText: '$23,057,842.31',
                qNum: 23057842.309999976,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '49',
                qNum: 49,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24758.43688',
                qNum: 24758.436880000056,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Grape Popsicles',
                qNum: 'NaN',
                qElemNumber: 311,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '22864033',
                      qNum: 22864033.42000001,
                    },
                  ],
                },
              },
              {
                qText: '$22,864,033.42',
                qNum: 22864033.42000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '31',
                qNum: 31,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24696.95589',
                qNum: 24696.955890000045,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club Cheese Spread',
                qNum: 'NaN',
                qElemNumber: 61,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '22475105',
                      qNum: 22475104.89999996,
                    },
                  ],
                },
              },
              {
                qText: '$22,475,104.90',
                qNum: 22475104.89999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '47',
                qNum: 47,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24536.37888',
                qNum: 24536.378880000007,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Fuji Apples',
                qNum: 'NaN',
                qElemNumber: 128,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '22793318',
                      qNum: 22793317.50999996,
                    },
                  ],
                },
              },
              {
                qText: '$22,793,317.51',
                qNum: 22793317.50999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '40',
                qNum: 40,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24528.31868',
                qNum: 24528.318680000066,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Cantelope',
                qNum: 'NaN',
                qElemNumber: 68,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '22712593',
                      qNum: 22712592.52999998,
                    },
                  ],
                },
              },
              {
                qText: '$22,712,592.53',
                qNum: 22712592.52999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '46',
                qNum: 46,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24444.55585',
                qNum: 24444.55585000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Squash',
                qNum: 'NaN',
                qElemNumber: 78,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '22527174',
                      qNum: 22527174.04000002,
                    },
                  ],
                },
              },
              {
                qText: '$22,527,174.04',
                qNum: 22527174.04000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '49',
                qNum: 49,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24367.29818',
                qNum: 24367.29818000007,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Prepared Salad',
                qNum: 'NaN',
                qElemNumber: 127,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '22414681',
                      qNum: 22414681.469999973,
                    },
                  ],
                },
              },
              {
                qText: '$22,414,681.47',
                qNum: 22414681.469999973,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '62',
                qNum: 62,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24208.38294',
                qNum: 24208.382940000043,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla Low Fat String Cheese',
                qNum: 'NaN',
                qElemNumber: 418,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '22282189',
                      qNum: 22282188.58999997,
                    },
                  ],
                },
              },
              {
                qText: '$22,282,188.59',
                qNum: 22282188.58999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '43',
                qNum: 43,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24134.79121',
                qNum: 24134.791210000058,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Frosted Donuts',
                qNum: 'NaN',
                qElemNumber: 7,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '22278218',
                      qNum: 22278218.39999999,
                    },
                  ],
                },
              },
              {
                qText: '$22,278,218.40',
                qNum: 22278218.39999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '45',
                qNum: 45,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24048.51253',
                qNum: 24048.512530000047,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Frozen Peas',
                qNum: 'NaN',
                qElemNumber: 190,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '22309578',
                      qNum: 22309578.10999998,
                    },
                  ],
                },
              },
              {
                qText: '$22,309,578.11',
                qNum: 22309578.10999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23880.07346',
                qNum: 23880.073459999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Red Spade Turkey Hot Dogs',
                qNum: 'NaN',
                qElemNumber: 118,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21894647',
                      qNum: 21894646.77999998,
                    },
                  ],
                },
              },
              {
                qText: '$21,894,646.78',
                qNum: 21894646.77999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '48',
                qNum: 48,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23737.66621',
                qNum: 23737.666210000036,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Washington Diet Cola',
                qNum: 'NaN',
                qElemNumber: 6,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21833337',
                      qNum: 21833336.65999997,
                    },
                  ],
                },
              },
              {
                qText: '$21,833,336.66',
                qNum: 21833336.65999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '38',
                qNum: 38,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23678.88477',
                qNum: 23678.88477000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Sweet Peas',
                qNum: 'NaN',
                qElemNumber: 0,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '22109658',
                      qNum: 22109657.609999985,
                    },
                  ],
                },
              },
              {
                qText: '$22,109,657.61',
                qNum: 22109657.609999985,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '90',
                qNum: 90,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23668.18039',
                qNum: 23668.180390000027,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Plums',
                qNum: 'NaN',
                qElemNumber: 321,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21791999',
                      qNum: 21791998.729999978,
                    },
                  ],
                },
              },
              {
                qText: '$21,791,998.73',
                qNum: 21791998.729999978,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '31',
                qNum: 31,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23636.93601',
                qNum: 23636.936010000038,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Apple Jelly',
                qNum: 'NaN',
                qElemNumber: 198,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21702125',
                      qNum: 21702124.799999975,
                    },
                  ],
                },
              },
              {
                qText: '$21,702,124.80',
                qNum: 21702124.799999975,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '33',
                qNum: 33,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23574.99075',
                qNum: 23574.99075000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Macintosh Apples',
                qNum: 'NaN',
                qElemNumber: 96,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21721140',
                      qNum: 21721140.369999986,
                    },
                  ],
                },
              },
              {
                qText: '$21,721,140.37',
                qNum: 21721140.369999986,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '45',
                qNum: 45,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23567.58411',
                qNum: 23567.58411000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Kiwi Scallops',
                qNum: 'NaN',
                qElemNumber: 658,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21525182',
                      qNum: 21525182.039999966,
                    },
                  ],
                },
              },
              {
                qText: '$21,525,182.04',
                qNum: 21525182.039999966,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23423.74777',
                qNum: 23423.747769999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Frozen Broccoli',
                qNum: 'NaN',
                qElemNumber: 51,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21654306',
                      qNum: 21654305.869999982,
                    },
                  ],
                },
              },
              {
                qText: '$21,654,305.87',
                qNum: 21654305.869999982,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '36',
                qNum: 36,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23404.9723',
                qNum: 23404.972300000045,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Firm Tofu',
                qNum: 'NaN',
                qElemNumber: 173,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21672084',
                      qNum: 21672083.740000024,
                    },
                  ],
                },
              },
              {
                qText: '$21,672,083.74',
                qNum: 21672083.740000024,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '62',
                qNum: 62,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23394.30905',
                qNum: 23394.30905000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better Sharp Cheddar Cheese',
                qNum: 'NaN',
                qElemNumber: 647,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21396532',
                      qNum: 21396531.909999963,
                    },
                  ],
                },
              },
              {
                qText: '$21,396,531.91',
                qNum: 21396531.909999963,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23234.90326',
                qNum: 23234.903259999963,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Apple Butter',
                qNum: 'NaN',
                qElemNumber: 189,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21299538',
                      qNum: 21299537.79999994,
                    },
                  ],
                },
              },
              {
                qText: '$21,299,537.80',
                qNum: 21299537.79999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23119.51677',
                qNum: 23119.51676999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club Sharp Cheddar Cheese',
                qNum: 'NaN',
                qElemNumber: 94,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21230336',
                      qNum: 21230336.469999973,
                    },
                  ],
                },
              },
              {
                qText: '$21,230,336.47',
                qNum: 21230336.469999973,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '47',
                qNum: 47,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23073.58052',
                qNum: 23073.580519999952,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Fancy Canned Oysters',
                qNum: 'NaN',
                qElemNumber: 73,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21206973',
                      qNum: 21206973.26,
                    },
                  ],
                },
              },
              {
                qText: '$21,206,973.26',
                qNum: 21206973.26,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '53',
                qNum: 53,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22967.20095',
                qNum: 22967.200950000068,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Moms Sliced Turkey',
                qNum: 'NaN',
                qElemNumber: 67,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21161597',
                      qNum: 21161596.80999998,
                    },
                  ],
                },
              },
              {
                qText: '$21,161,596.81',
                qNum: 21161596.80999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '52',
                qNum: 52,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22900.91502',
                qNum: 22900.915020000062,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Excellent Cream Soda',
                qNum: 'NaN',
                qElemNumber: 547,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21069850',
                      qNum: 21069849.95000003,
                    },
                  ],
                },
              },
              {
                qText: '$21,069,849.95',
                qNum: 21069849.95000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26',
                qNum: 26,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22874.55187',
                qNum: 22874.551870000025,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Frozen Chicken Thighs',
                qNum: 'NaN',
                qElemNumber: 42,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21318426',
                      qNum: 21318426.429999985,
                    },
                  ],
                },
              },
              {
                qText: '$21,318,426.43',
                qNum: 21318426.429999985,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '36',
                qNum: 36,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22874.28577',
                qNum: 22874.285770000042,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Red Spade Foot-Long Hot Dogs',
                qNum: 'NaN',
                qElemNumber: 322,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21136516',
                      qNum: 21136516.03999996,
                    },
                  ],
                },
              },
              {
                qText: '$21,136,516.04',
                qNum: 21136516.03999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '51',
                qNum: 51,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22839.54829',
                qNum: 22839.548290000024,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Cauliflower',
                qNum: 'NaN',
                qElemNumber: 71,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21175111',
                      qNum: 21175110.759999964,
                    },
                  ],
                },
              },
              {
                qText: '$21,175,110.76',
                qNum: 21175110.759999964,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '49',
                qNum: 49,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22834.3595',
                qNum: 22834.359500000057,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Red Spade Low Fat Cole Slaw',
                qNum: 'NaN',
                qElemNumber: 271,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20970239',
                      qNum: 20970238.65999998,
                    },
                  ],
                },
              },
              {
                qText: '$20,970,238.66',
                qNum: 20970238.65999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '32',
                qNum: 32,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22823.80647',
                qNum: 22823.80647000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Great Pumpernickel Bread',
                qNum: 'NaN',
                qElemNumber: 357,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21078033',
                      qNum: 21078033.020000026,
                    },
                  ],
                },
              },
              {
                qText: '$21,078,033.02',
                qNum: 21078033.020000026,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '36',
                qNum: 36,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22814.87215',
                qNum: 22814.87215000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Chocolate Chip Cookies',
                qNum: 'NaN',
                qElemNumber: 387,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20917232',
                      qNum: 20917232.10999998,
                    },
                  ],
                },
              },
              {
                qText: '$20,917,232.11',
                qNum: 20917232.10999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '35',
                qNum: 35,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22811.88512',
                qNum: 22811.885120000024,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Tomato Sauce',
                qNum: 'NaN',
                qElemNumber: 178,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20955315',
                      qNum: 20955314.84999995,
                    },
                  ],
                },
              },
              {
                qText: '$20,955,314.85',
                qNum: 20955314.84999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '38',
                qNum: 38,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22742.39227',
                qNum: 22742.39226999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Dried Mushrooms',
                qNum: 'NaN',
                qElemNumber: 449,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20946011',
                      qNum: 20946011.04000002,
                    },
                  ],
                },
              },
              {
                qText: '$20,946,011.04',
                qNum: 20946011.04000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '48',
                qNum: 48,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22658.11339',
                qNum: 22658.113390000013,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Large Canned Shrimp',
                qNum: 'NaN',
                qElemNumber: 342,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21023246',
                      qNum: 21023245.629999984,
                    },
                  ],
                },
              },
              {
                qText: '$21,023,245.63',
                qNum: 21023245.629999984,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '48',
                qNum: 48,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22655.70218',
                qNum: 22655.70218000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Colony Blueberry Muffins',
                qNum: 'NaN',
                qElemNumber: 269,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '21134032',
                      qNum: 21134032.259999994,
                    },
                  ],
                },
              },
              {
                qText: '$21,134,032.26',
                qNum: 21134032.259999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '29',
                qNum: 29,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22630.69126',
                qNum: 22630.69126000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Canned Tomatos',
                qNum: 'NaN',
                qElemNumber: 44,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20963646',
                      qNum: 20963646.369999968,
                    },
                  ],
                },
              },
              {
                qText: '$20,963,646.37',
                qNum: 20963646.369999968,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '55',
                qNum: 55,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22588.35227',
                qNum: 22588.352270000072,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Large Canned Shrimp',
                qNum: 'NaN',
                qElemNumber: 659,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20202649',
                      qNum: 20202648.819999944,
                    },
                  ],
                },
              },
              {
                qText: '$20,202,648.82',
                qNum: 20202648.819999944,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22521.00284',
                qNum: 22521.002839999976,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Lime Popsicles',
                qNum: 'NaN',
                qElemNumber: 249,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20590789',
                      qNum: 20590788.709999993,
                    },
                  ],
                },
              },
              {
                qText: '$20,590,788.71',
                qNum: 20590788.709999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '30',
                qNum: 30,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22503.50545',
                qNum: 22503.505450000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Moms Corned Beef',
                qNum: 'NaN',
                qElemNumber: 162,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20776330',
                      qNum: 20776329.51999997,
                    },
                  ],
                },
              },
              {
                qText: '$20,776,329.52',
                qNum: 20776329.51999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '38',
                qNum: 38,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22462.49721',
                qNum: 22462.49721000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Chicken Soup',
                qNum: 'NaN',
                qElemNumber: 365,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20904514',
                      qNum: 20904513.649999972,
                    },
                  ],
                },
              },
              {
                qText: '$20,904,513.65',
                qNum: 20904513.649999972,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '34',
                qNum: 34,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22425.1995',
                qNum: 22425.199500000053,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Low Fat French Fries',
                qNum: 'NaN',
                qElemNumber: 550,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20724746',
                      qNum: 20724745.82,
                    },
                  ],
                },
              },
              {
                qText: '$20,724,745.82',
                qNum: 20724745.82,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '29',
                qNum: 29,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22418.66455',
                qNum: 22418.66455000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Grape Fruit Roll',
                qNum: 'NaN',
                qElemNumber: 298,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20598465',
                      qNum: 20598464.97999997,
                    },
                  ],
                },
              },
              {
                qText: '$20,598,464.98',
                qNum: 20598464.97999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '33',
                qNum: 33,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22305.75229',
                qNum: 22305.752290000022,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Atomic Spicy Mints',
                qNum: 'NaN',
                qElemNumber: 353,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20541960',
                      qNum: 20541960.04999998,
                    },
                  ],
                },
              },
              {
                qText: '$20,541,960.05',
                qNum: 20541960.04999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '34',
                qNum: 34,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22291.60019',
                qNum: 22291.600190000034,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Chicken Ramen Soup',
                qNum: 'NaN',
                qElemNumber: 109,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20444507',
                      qNum: 20444506.74999997,
                    },
                  ],
                },
              },
              {
                qText: '$20,444,506.75',
                qNum: 20444506.74999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '37',
                qNum: 37,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22256.88623',
                qNum: 22256.886230000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Corn Chips',
                qNum: 'NaN',
                qElemNumber: 4,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20531989',
                      qNum: 20531988.969999973,
                    },
                  ],
                },
              },
              {
                qText: '$20,531,988.97',
                qNum: 20531988.969999973,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '43',
                qNum: 43,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22244.10796',
                qNum: 22244.1079600001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Noodle Soup',
                qNum: 'NaN',
                qElemNumber: 327,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20562418',
                      qNum: 20562418.21999998,
                    },
                  ],
                },
              },
              {
                qText: '$20,562,418.22',
                qNum: 20562418.21999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '30',
                qNum: 30,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22234.89164',
                qNum: 22234.89164000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Strawberry Jelly',
                qNum: 'NaN',
                qElemNumber: 106,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20483400',
                      qNum: 20483400.25999998,
                    },
                  ],
                },
              },
              {
                qText: '$20,483,400.26',
                qNum: 20483400.25999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '39',
                qNum: 39,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22151.12713',
                qNum: 22151.12713000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Walrus White Zinfandel Wine',
                qNum: 'NaN',
                qElemNumber: 98,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20373000',
                      qNum: 20372999.969999947,
                    },
                  ],
                },
              },
              {
                qText: '$20,372,999.97',
                qNum: 20372999.969999947,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22057.22651',
                qNum: 22057.226509999964,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Broccoli',
                qNum: 'NaN',
                qElemNumber: 206,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20355163',
                      qNum: 20355162.839999996,
                    },
                  ],
                },
              },
              {
                qText: '$20,355,162.84',
                qNum: 20355162.839999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25',
                qNum: 25,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22018.29576',
                qNum: 22018.295759999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Mushrooms',
                qNum: 'NaN',
                qElemNumber: 13,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20278961',
                      qNum: 20278960.50999998,
                    },
                  ],
                },
              },
              {
                qText: '$20,278,960.51',
                qNum: 20278960.50999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26',
                qNum: 26,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21990.57871',
                qNum: 21990.578710000016,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Tomatos',
                qNum: 'NaN',
                qElemNumber: 129,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20417906',
                      qNum: 20417906.390000008,
                    },
                  ],
                },
              },
              {
                qText: '$20,417,906.39',
                qNum: 20417906.390000008,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '45',
                qNum: 45,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21906.11476',
                qNum: 21906.114760000055,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla Strawberry Yogurt',
                qNum: 'NaN',
                qElemNumber: 52,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20087220',
                      qNum: 20087219.98999998,
                    },
                  ],
                },
              },
              {
                qText: '$20,087,219.99',
                qNum: 20087219.98999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '31',
                qNum: 31,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21887.73835',
                qNum: 21887.738350000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla Havarti Cheese',
                qNum: 'NaN',
                qElemNumber: 352,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20318392',
                      qNum: 20318392.189999998,
                    },
                  ],
                },
              },
              {
                qText: '$20,318,392.19',
                qNum: 20318392.189999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '38',
                qNum: 38,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21871.07361',
                qNum: 21871.073610000032,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Turkey Noodle Soup',
                qNum: 'NaN',
                qElemNumber: 323,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20171202',
                      qNum: 20171201.799999997,
                    },
                  ],
                },
              },
              {
                qText: '$20,171,201.80',
                qNum: 20171201.799999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '44',
                qNum: 44,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21735.4191',
                qNum: 21735.4191,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Columbian Coffee',
                qNum: 'NaN',
                qElemNumber: 318,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20112033',
                      qNum: 20112032.799999993,
                    },
                  ],
                },
              },
              {
                qText: '$20,112,032.80',
                qNum: 20112032.799999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '42',
                qNum: 42,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21692.98525',
                qNum: 21692.985250000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Washington Cola',
                qNum: 'NaN',
                qElemNumber: 169,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20026014',
                      qNum: 20026013.51999997,
                    },
                  ],
                },
              },
              {
                qText: '$20,026,013.52',
                qNum: 20026013.51999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '38',
                qNum: 38,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21684.83493',
                qNum: 21684.834929999943,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide White Sugar',
                qNum: 'NaN',
                qElemNumber: 191,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19899917',
                      qNum: 19899917.209999956,
                    },
                  ],
                },
              },
              {
                qText: '$19,899,917.21',
                qNum: 19899917.209999956,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21647.3766',
                qNum: 21647.37659999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla 1% Milk',
                qNum: 'NaN',
                qElemNumber: 3,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20142269',
                      qNum: 20142269.429999996,
                    },
                  ],
                },
              },
              {
                qText: '$20,142,269.43',
                qNum: 20142269.429999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '35',
                qNum: 35,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21642.96059',
                qNum: 21642.960590000024,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Walnuts',
                qNum: 'NaN',
                qElemNumber: 170,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20090718',
                      qNum: 20090718.479999986,
                    },
                  ],
                },
              },
              {
                qText: '$20,090,718.48',
                qNum: 20090718.479999986,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '28',
                qNum: 28,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21639.43316',
                qNum: 21639.433160000044,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Creamy Peanut Butter',
                qNum: 'NaN',
                qElemNumber: 336,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19897257',
                      qNum: 19897256.909999993,
                    },
                  ],
                },
              },
              {
                qText: '$19,897,256.91',
                qNum: 19897256.909999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '33',
                qNum: 33,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21604.12928',
                qNum: 21604.12928000006,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Sesame Crackers',
                qNum: 'NaN',
                qElemNumber: 285,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19948653',
                      qNum: 19948652.569999997,
                    },
                  ],
                },
              },
              {
                qText: '$19,948,652.57',
                qNum: 19948652.569999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '29',
                qNum: 29,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21603.90341',
                qNum: 21603.903410000017,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Atomic Mint Chocolate Bar',
                qNum: 'NaN',
                qElemNumber: 187,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19908820',
                      qNum: 19908820.470000025,
                    },
                  ],
                },
              },
              {
                qText: '$19,908,820.47',
                qNum: 19908820.470000025,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '41',
                qNum: 41,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21600.02775',
                qNum: 21600.02775000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Oranges',
                qNum: 'NaN',
                qElemNumber: 159,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20054552',
                      qNum: 20054552.099999957,
                    },
                  ],
                },
              },
              {
                qText: '$20,054,552.10',
                qNum: 20054552.099999957,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '35',
                qNum: 35,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21597.9309',
                qNum: 21597.930900000007,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Popsicles',
                qNum: 'NaN',
                qElemNumber: 579,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19714554',
                      qNum: 19714553.50999996,
                    },
                  ],
                },
              },
              {
                qText: '$19,714,553.51',
                qNum: 19714553.50999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21594.31807',
                qNum: 21594.318069999983,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Urban Small Eggs',
                qNum: 'NaN',
                qElemNumber: 254,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19878267',
                      qNum: 19878267.04999995,
                    },
                  ],
                },
              },
              {
                qText: '$19,878,267.05',
                qNum: 19878267.04999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26',
                qNum: 26,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21566.61946',
                qNum: 21566.61945999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Salt',
                qNum: 'NaN',
                qElemNumber: 31,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19865521',
                      qNum: 19865521.100000005,
                    },
                  ],
                },
              },
              {
                qText: '$19,865,521.10',
                qNum: 19865521.100000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '33',
                qNum: 33,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21562.81859',
                qNum: 21562.818590000006,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Cheese Dip',
                qNum: 'NaN',
                qElemNumber: 26,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '20032374',
                      qNum: 20032373.75999999,
                    },
                  ],
                },
              },
              {
                qText: '$20,032,373.76',
                qNum: 20032373.75999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '29',
                qNum: 29,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21487.91103',
                qNum: 21487.91103000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Pepper',
                qNum: 'NaN',
                qElemNumber: 107,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19740567',
                      qNum: 19740566.719999995,
                    },
                  ],
                },
              },
              {
                qText: '$19,740,566.72',
                qNum: 19740566.719999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '29',
                qNum: 29,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21374.44019',
                qNum: 21374.44019000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Good Chardonnay Wine',
                qNum: 'NaN',
                qElemNumber: 165,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19779901',
                      qNum: 19779900.769999966,
                    },
                  ],
                },
              },
              {
                qText: '$19,779,900.77',
                qNum: 19779900.769999966,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27',
                qNum: 27,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21364.61675',
                qNum: 21364.61674999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Vegetable Oil',
                qNum: 'NaN',
                qElemNumber: 83,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19674448',
                      qNum: 19674448.18999999,
                    },
                  ],
                },
              },
              {
                qText: '$19,674,448.19',
                qNum: 19674448.18999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '44',
                qNum: 44,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21321.25865',
                qNum: 21321.258650000047,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Apple Butter',
                qNum: 'NaN',
                qElemNumber: 317,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19759044',
                      qNum: 19759043.570000004,
                    },
                  ],
                },
              },
              {
                qText: '$19,759,043.57',
                qNum: 19759043.570000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '33',
                qNum: 33,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21288.37901',
                qNum: 21288.37901000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Beef Soup',
                qNum: 'NaN',
                qElemNumber: 164,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19524128',
                      qNum: 19524128.489999983,
                    },
                  ],
                },
              },
              {
                qText: '$19,524,128.49',
                qNum: 19524128.489999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '35',
                qNum: 35,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21137.84417',
                qNum: 21137.844170000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Colony Wheat Bread',
                qNum: 'NaN',
                qElemNumber: 99,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19597050',
                      qNum: 19597049.520000007,
                    },
                  ],
                },
              },
              {
                qText: '$19,597,049.52',
                qNum: 19597049.520000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '33',
                qNum: 33,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21041.12216',
                qNum: 21041.12216,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Lemons',
                qNum: 'NaN',
                qElemNumber: 331,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19442774',
                      qNum: 19442774.43000003,
                    },
                  ],
                },
              },
              {
                qText: '$19,442,774.43',
                qNum: 19442774.43000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '34',
                qNum: 34,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21019.58832',
                qNum: 21019.588319999988,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Salted Pretzels',
                qNum: 'NaN',
                qElemNumber: 226,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19559187',
                      qNum: 19559186.83000002,
                    },
                  ],
                },
              },
              {
                qText: '$19,559,186.83',
                qNum: 19559186.83000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '45',
                qNum: 45,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20993.42183',
                qNum: 20993.421830000047,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Washington Apple Juice',
                qNum: 'NaN',
                qElemNumber: 451,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19054601',
                      qNum: 19054600.55,
                    },
                  ],
                },
              },
              {
                qText: '$19,054,600.55',
                qNum: 19054600.55,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20952.60757',
                qNum: 20952.607569999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Walrus Light Beer',
                qNum: 'NaN',
                qElemNumber: 325,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19398551',
                      qNum: 19398550.949999962,
                    },
                  ],
                },
              },
              {
                qText: '$19,398,550.95',
                qNum: 19398550.949999962,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27',
                qNum: 27,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20920.38097',
                qNum: 20920.380970000017,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Sesame Oil',
                qNum: 'NaN',
                qElemNumber: 90,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19323927',
                      qNum: 19323927.290000007,
                    },
                  ],
                },
              },
              {
                qText: '$19,323,927.29',
                qNum: 19323927.290000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27',
                qNum: 27,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20900.76122',
                qNum: 20900.76121999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Wheat Puffs',
                qNum: 'NaN',
                qElemNumber: 348,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19366801',
                      qNum: 19366800.699999973,
                    },
                  ],
                },
              },
              {
                qText: '$19,366,800.70',
                qNum: 19366800.699999973,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '35',
                qNum: 35,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20875.43369',
                qNum: 20875.433689999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Oregano',
                qNum: 'NaN',
                qElemNumber: 158,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19165366',
                      qNum: 19165365.559999973,
                    },
                  ],
                },
              },
              {
                qText: '$19,165,365.56',
                qNum: 19165365.559999973,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '29',
                qNum: 29,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20830.90757',
                qNum: 20830.90757000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Frozen Pepperoni Pizza',
                qNum: 'NaN',
                qElemNumber: 50,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19307001',
                      qNum: 19307000.51000001,
                    },
                  ],
                },
              },
              {
                qText: '$19,307,000.51',
                qNum: 19307000.51000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '29',
                qNum: 29,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20807.10319',
                qNum: 20807.10319000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Frozen Carrots',
                qNum: 'NaN',
                qElemNumber: 117,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19214246',
                      qNum: 19214245.549999997,
                    },
                  ],
                },
              },
              {
                qText: '$19,214,245.55',
                qNum: 19214245.549999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '31',
                qNum: 31,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20792.34294',
                qNum: 20792.342940000017,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fabulous Cream Soda',
                qNum: 'NaN',
                qElemNumber: 135,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19404114',
                      qNum: 19404114.089999966,
                    },
                  ],
                },
              },
              {
                qText: '$19,404,114.09',
                qNum: 19404114.089999966,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20751.84218',
                qNum: 20751.842179999996,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast BBQ Potato Chips',
                qNum: 'NaN',
                qElemNumber: 144,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19207080',
                      qNum: 19207080.279999994,
                    },
                  ],
                },
              },
              {
                qText: '$19,207,080.28',
                qNum: 19207080.279999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '37',
                qNum: 37,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20743.89789',
                qNum: 20743.897890000037,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better Low Fat String Cheese',
                qNum: 'NaN',
                qElemNumber: 383,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19139894',
                      qNum: 19139894.009999964,
                    },
                  ],
                },
              },
              {
                qText: '$19,139,894.01',
                qNum: 19139894.009999964,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '28',
                qNum: 28,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20735.15957',
                qNum: 20735.159570000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Urban Large Brown Eggs',
                qNum: 'NaN',
                qElemNumber: 208,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19085407',
                      qNum: 19085406.880000003,
                    },
                  ],
                },
              },
              {
                qText: '$19,085,406.88',
                qNum: 19085406.880000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '31',
                qNum: 31,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20645.85565',
                qNum: 20645.855649999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Apple Cinnamon Waffles',
                qNum: 'NaN',
                qElemNumber: 316,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18825250',
                      qNum: 18825250.29999997,
                    },
                  ],
                },
              },
              {
                qText: '$18,825,250.30',
                qNum: 18825250.29999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '28',
                qNum: 28,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20623.00811',
                qNum: 20623.008110000017,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Salsa Dip',
                qNum: 'NaN',
                qElemNumber: 297,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19018822',
                      qNum: 19018822.41,
                    },
                  ],
                },
              },
              {
                qText: '$19,018,822.41',
                qNum: 19018822.41,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '36',
                qNum: 36,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20524.01126',
                qNum: 20524.01126000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Moms Chicken Hot Dogs',
                qNum: 'NaN',
                qElemNumber: 16,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19047005',
                      qNum: 19047005.37999996,
                    },
                  ],
                },
              },
              {
                qText: '$19,047,005.38',
                qNum: 19047005.37999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26',
                qNum: 26,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20499.70381',
                qNum: 20499.70381000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Grape Jam',
                qNum: 'NaN',
                qElemNumber: 315,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18897417',
                      qNum: 18897416.700000014,
                    },
                  ],
                },
              },
              {
                qText: '$18,897,416.70',
                qNum: 18897416.700000014,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27',
                qNum: 27,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20461.97844',
                qNum: 20461.978440000017,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Cutting Edge Cole Slaw',
                qNum: 'NaN',
                qElemNumber: 360,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18964864',
                      qNum: 18964864.27,
                    },
                  ],
                },
              },
              {
                qText: '$18,964,864.27',
                qNum: 18964864.27,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26',
                qNum: 26,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20372.71634',
                qNum: 20372.71634000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club Buttermilk',
                qNum: 'NaN',
                qElemNumber: 588,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18664942',
                      qNum: 18664942.119999945,
                    },
                  ],
                },
              },
              {
                qText: '$18,664,942.12',
                qNum: 18664942.119999945,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20362.05449',
                qNum: 20362.054489999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Choice Mint Chocolate Bar',
                qNum: 'NaN',
                qElemNumber: 30,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19019573',
                      qNum: 19019573.090000007,
                    },
                  ],
                },
              },
              {
                qText: '$19,019,573.09',
                qNum: 19019573.090000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '28',
                qNum: 28,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20351.7277',
                qNum: 20351.727700000007,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Jumbo Small Eggs',
                qNum: 'NaN',
                qElemNumber: 183,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18793827',
                      qNum: 18793826.939999964,
                    },
                  ],
                },
              },
              {
                qText: '$18,793,826.94',
                qNum: 18793826.939999964,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27',
                qNum: 27,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20342.81897',
                qNum: 20342.818970000037,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Mixed Nuts',
                qNum: 'NaN',
                qElemNumber: 326,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '19008812',
                      qNum: 19008811.92999999,
                    },
                  ],
                },
              },
              {
                qText: '$19,008,811.93',
                qNum: 19008811.92999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '32',
                qNum: 32,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20320.77497',
                qNum: 20320.774970000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Urban Small Brown Eggs',
                qNum: 'NaN',
                qElemNumber: 291,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18689878',
                      qNum: 18689878.289999995,
                    },
                  ],
                },
              },
              {
                qText: '$18,689,878.29',
                qNum: 18689878.289999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '31',
                qNum: 31,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20319.97117',
                qNum: 20319.97116999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Good Imported Beer',
                qNum: 'NaN',
                qElemNumber: 143,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18591176',
                      qNum: 18591175.889999975,
                    },
                  ],
                },
              },
              {
                qText: '$18,591,175.89',
                qNum: 18591175.889999975,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '34',
                qNum: 34,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20283.33426',
                qNum: 20283.33426,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Frozen Corn',
                qNum: 'NaN',
                qElemNumber: 36,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18914453',
                      qNum: 18914453.01000002,
                    },
                  ],
                },
              },
              {
                qText: '$18,914,453.01',
                qNum: 18914453.01000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25',
                qNum: 25,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20231.69935',
                qNum: 20231.699350000024,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Strawberry Preserves',
                qNum: 'NaN',
                qElemNumber: 197,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18838915',
                      qNum: 18838914.869999956,
                    },
                  ],
                },
              },
              {
                qText: '$18,838,914.87',
                qNum: 18838914.869999956,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20228.88674',
                qNum: 20228.886739999976,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Moms Turkey Hot Dogs',
                qNum: 'NaN',
                qElemNumber: 188,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18662201',
                      qNum: 18662201.33999998,
                    },
                  ],
                },
              },
              {
                qText: '$18,662,201.34',
                qNum: 18662201.33999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20225.3357',
                qNum: 20225.335699999938,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fantastic Pumpernickel Bread',
                qNum: 'NaN',
                qElemNumber: 161,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18543881',
                      qNum: 18543881.210000023,
                    },
                  ],
                },
              },
              {
                qText: '$18,543,881.21',
                qNum: 18543881.210000023,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26',
                qNum: 26,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20011.58874',
                qNum: 20011.58874000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Vegetable Oil',
                qNum: 'NaN',
                qElemNumber: 222,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18735083',
                      qNum: 18735082.63,
                    },
                  ],
                },
              },
              {
                qText: '$18,735,082.63',
                qNum: 18735082.63,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '34',
                qNum: 34,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19962.47339',
                qNum: 19962.473390000006,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Thresher Spicy Mints',
                qNum: 'NaN',
                qElemNumber: 62,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18517010',
                      qNum: 18517009.939999975,
                    },
                  ],
                },
              },
              {
                qText: '$18,517,009.94',
                qNum: 18517009.939999975,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '42',
                qNum: 42,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19947.41595',
                qNum: 19947.41595000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Canned Peanuts',
                qNum: 'NaN',
                qElemNumber: 531,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18710050',
                      qNum: 18710049.839999996,
                    },
                  ],
                },
              },
              {
                qText: '$18,710,049.84',
                qNum: 18710049.839999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '30',
                qNum: 30,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19908.49106',
                qNum: 19908.491060000015,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Golden Raisins',
                qNum: 'NaN',
                qElemNumber: 407,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18259910',
                      qNum: 18259910.390000027,
                    },
                  ],
                },
              },
              {
                qText: '$18,259,910.39',
                qNum: 18259910.390000027,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '28',
                qNum: 28,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19840.36409',
                qNum: 19840.364090000046,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better Low Fat Cottage Cheese',
                qNum: 'NaN',
                qElemNumber: 263,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18511763',
                      qNum: 18511763.470000003,
                    },
                  ],
                },
              },
              {
                qText: '$18,511,763.47',
                qNum: 18511763.470000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19807.7684',
                qNum: 19807.7684,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better Blueberry Yogurt',
                qNum: 'NaN',
                qElemNumber: 305,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18280633',
                      qNum: 18280633.34999999,
                    },
                  ],
                },
              },
              {
                qText: '$18,280,633.35',
                qNum: 18280633.34999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26',
                qNum: 26,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19789.85529',
                qNum: 19789.85529000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club Jack Cheese',
                qNum: 'NaN',
                qElemNumber: 557,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18354660',
                      qNum: 18354659.540000003,
                    },
                  ],
                },
              },
              {
                qText: '$18,354,659.54',
                qNum: 18354659.540000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19775.55232',
                qNum: 19775.552320000017,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Mandarin Oranges',
                qNum: 'NaN',
                qElemNumber: 292,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18227180',
                      qNum: 18227180.25,
                    },
                  ],
                },
              },
              {
                qText: '$18,227,180.25',
                qNum: 18227180.25,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '32',
                qNum: 32,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19759.0444',
                qNum: 19759.044399999955,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Monarch Ravioli',
                qNum: 'NaN',
                qElemNumber: 408,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18397321',
                      qNum: 18397321.379999995,
                    },
                  ],
                },
              },
              {
                qText: '$18,397,321.38',
                qNum: 18397321.379999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27',
                qNum: 27,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19737.3016',
                qNum: 19737.301600000017,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Special Oatmeal',
                qNum: 'NaN',
                qElemNumber: 457,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18342163',
                      qNum: 18342163.419999998,
                    },
                  ],
                },
              },
              {
                qText: '$18,342,163.42',
                qNum: 18342163.419999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23',
                qNum: 23,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19714.4107',
                qNum: 19714.41070000007,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Canned Tuna in Water',
                qNum: 'NaN',
                qElemNumber: 110,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18204417',
                      qNum: 18204417.159999985,
                    },
                  ],
                },
              },
              {
                qText: '$18,204,417.16',
                qNum: 18204417.159999985,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '30',
                qNum: 30,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19703.2903',
                qNum: 19703.290300000015,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Shady Lake Thai Rice',
                qNum: 'NaN',
                qElemNumber: 314,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18256193',
                      qNum: 18256193.299999982,
                    },
                  ],
                },
              },
              {
                qText: '$18,256,193.30',
                qNum: 18256193.299999982,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '28',
                qNum: 28,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19674.77429',
                qNum: 19674.77429000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson Cheese Spread',
                qNum: 'NaN',
                qElemNumber: 221,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18205087',
                      qNum: 18205086.91999997,
                    },
                  ],
                },
              },
              {
                qText: '$18,205,086.92',
                qNum: 18205086.91999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '36',
                qNum: 36,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19601.36787',
                qNum: 19601.367869999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Token Orange Juice',
                qNum: 'NaN',
                qElemNumber: 376,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18206726',
                      qNum: 18206726.419999987,
                    },
                  ],
                },
              },
              {
                qText: '$18,206,726.42',
                qNum: 18206726.419999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '31',
                qNum: 31,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19568.83043',
                qNum: 19568.830430000024,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Salsa Dip',
                qNum: 'NaN',
                qElemNumber: 27,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17775914',
                      qNum: 17775914.18000001,
                    },
                  ],
                },
              },
              {
                qText: '$17,775,914.18',
                qNum: 17775914.18000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19558.6392',
                qNum: 19558.639200000012,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Onions',
                qNum: 'NaN',
                qElemNumber: 312,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18131323',
                      qNum: 18131323.040000018,
                    },
                  ],
                },
              },
              {
                qText: '$18,131,323.04',
                qNum: 18131323.040000018,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '32',
                qNum: 32,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19556.20386',
                qNum: 19556.20386000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson Low Fat String Cheese',
                qNum: 'NaN',
                qElemNumber: 432,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18023690',
                      qNum: 18023690.209999997,
                    },
                  ],
                },
              },
              {
                qText: '$18,023,690.21',
                qNum: 18023690.209999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19538.93173',
                qNum: 19538.931729999957,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Token Apple Drink',
                qNum: 'NaN',
                qElemNumber: 371,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18025520',
                      qNum: 18025519.76000001,
                    },
                  ],
                },
              },
              {
                qText: '$18,025,519.76',
                qNum: 18025519.76000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '34',
                qNum: 34,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19429.08056',
                qNum: 19429.080560000013,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Frozen Mushroom Pizza',
                qNum: 'NaN',
                qElemNumber: 445,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18207967',
                      qNum: 18207967.039999988,
                    },
                  ],
                },
              },
              {
                qText: '$18,207,967.04',
                qNum: 18207967.039999988,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '28',
                qNum: 28,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19424.3074',
                qNum: 19424.307399999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Grape Jelly',
                qNum: 'NaN',
                qElemNumber: 303,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17950803',
                      qNum: 17950802.53,
                    },
                  ],
                },
              },
              {
                qText: '$17,950,802.53',
                qNum: 17950802.53,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19411.41754',
                qNum: 19411.41754000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Canned Beets',
                qNum: 'NaN',
                qElemNumber: 9,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17928677',
                      qNum: 17928677.16000003,
                    },
                  ],
                },
              },
              {
                qText: '$17,928,677.16',
                qNum: 17928677.16000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '30',
                qNum: 30,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19406.85618',
                qNum: 19406.856180000043,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla Low Fat Cottage Cheese',
                qNum: 'NaN',
                qElemNumber: 179,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '18194469',
                      qNum: 18194469.249999978,
                    },
                  ],
                },
              },
              {
                qText: '$18,194,469.25',
                qNum: 18194469.249999978,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19404.50638',
                qNum: 19404.506379999984,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'American Cole Slaw',
                qNum: 'NaN',
                qElemNumber: 334,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17996995',
                      qNum: 17996995.18000003,
                    },
                  ],
                },
              },
              {
                qText: '$17,996,995.18',
                qNum: 17996995.18000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '41',
                qNum: 41,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19341.91093',
                qNum: 19341.91092999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Turkey Noodle Soup',
                qNum: 'NaN',
                qElemNumber: 181,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17902225',
                      qNum: 17902225.049999982,
                    },
                  ],
                },
              },
              {
                qText: '$17,902,225.05',
                qNum: 17902225.049999982,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '31',
                qNum: 31,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19338.6536',
                qNum: 19338.653599999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Apple Preserves',
                qNum: 'NaN',
                qElemNumber: 381,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17784352',
                      qNum: 17784351.709999997,
                    },
                  ],
                },
              },
              {
                qText: '$17,784,351.71',
                qNum: 17784351.709999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19334.33731',
                qNum: 19334.337310000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Washington Cream Soda',
                qNum: 'NaN',
                qElemNumber: 333,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17931194',
                      qNum: 17931194.329999987,
                    },
                  ],
                },
              },
              {
                qText: '$17,931,194.33',
                qNum: 17931194.329999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19306.84568',
                qNum: 19306.84568,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better Strawberry Yogurt',
                qNum: 'NaN',
                qElemNumber: 186,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17970099',
                      qNum: 17970099.370000016,
                    },
                  ],
                },
              },
              {
                qText: '$17,970,099.37',
                qNum: 17970099.370000016,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19279.57659',
                qNum: 19279.576590000037,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Shady Lake Manicotti',
                qNum: 'NaN',
                qElemNumber: 215,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17796058',
                      qNum: 17796057.639999986,
                    },
                  ],
                },
              },
              {
                qText: '$17,796,057.64',
                qNum: 17796057.639999986,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19271.10711',
                qNum: 19271.107110000034,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Golden Raisins',
                qNum: 'NaN',
                qElemNumber: 15,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17834439',
                      qNum: 17834439.249999996,
                    },
                  ],
                },
              },
              {
                qText: '$17,834,439.25',
                qNum: 17834439.249999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '31',
                qNum: 31,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19239.8496',
                qNum: 19239.84960000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Cutting Edge Chicken Hot Dogs',
                qNum: 'NaN',
                qElemNumber: 180,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17853109',
                      qNum: 17853109.38999999,
                    },
                  ],
                },
              },
              {
                qText: '$17,853,109.39',
                qNum: 17853109.38999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19096.23806',
                qNum: 19096.238059999996,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Special Grits',
                qNum: 'NaN',
                qElemNumber: 409,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17666655',
                      qNum: 17666655.12999998,
                    },
                  ],
                },
              },
              {
                qText: '$17,666,655.13',
                qNum: 17666655.12999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25',
                qNum: 25,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19009.43009',
                qNum: 19009.43009000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel BBQ Potato Chips',
                qNum: 'NaN',
                qElemNumber: 101,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17455836',
                      qNum: 17455835.549999956,
                    },
                  ],
                },
              },
              {
                qText: '$17,455,835.55',
                qNum: 17455835.549999956,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18988.61895',
                qNum: 18988.618949999985,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Pancake Mix',
                qNum: 'NaN',
                qElemNumber: 544,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17641394',
                      qNum: 17641394.169999983,
                    },
                  ],
                },
              },
              {
                qText: '$17,641,394.17',
                qNum: 17641394.169999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27',
                qNum: 27,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18980.0607',
                qNum: 18980.0607,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Chunky Peanut Butter',
                qNum: 'NaN',
                qElemNumber: 139,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17484237',
                      qNum: 17484236.559999984,
                    },
                  ],
                },
              },
              {
                qText: '$17,484,236.56',
                qNum: 17484236.559999984,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '31',
                qNum: 31,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18943.058',
                qNum: 18943.05800000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Mixed Nuts',
                qNum: 'NaN',
                qElemNumber: 288,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17664404',
                      qNum: 17664403.509999983,
                    },
                  ],
                },
              },
              {
                qText: '$17,664,403.51',
                qNum: 17664403.509999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18904.67264',
                qNum: 18904.67264,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Fancy Canned Oysters',
                qNum: 'NaN',
                qElemNumber: 399,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17426652',
                      qNum: 17426651.819999993,
                    },
                  ],
                },
              },
              {
                qText: '$17,426,651.82',
                qNum: 17426651.819999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '28',
                qNum: 28,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18781.62551',
                qNum: 18781.625510000016,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Macintosh Apples',
                qNum: 'NaN',
                qElemNumber: 149,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17498712',
                      qNum: 17498712.249999996,
                    },
                  ],
                },
              },
              {
                qText: '$17,498,712.25',
                qNum: 17498712.249999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '33',
                qNum: 33,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18775.83389',
                qNum: 18775.833889999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Moms Cole Slaw',
                qNum: 'NaN',
                qElemNumber: 350,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17180263',
                      qNum: 17180263.08,
                    },
                  ],
                },
              },
              {
                qText: '$17,180,263.08',
                qNum: 17180263.08,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18636.48884',
                qNum: 18636.48883999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla Blueberry Yogurt',
                qNum: 'NaN',
                qElemNumber: 84,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17278884',
                      qNum: 17278884.399999987,
                    },
                  ],
                },
              },
              {
                qText: '$17,278,884.40',
                qNum: 17278884.399999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '33',
                qNum: 33,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18575.86937',
                qNum: 18575.86936999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Low Fat Waffles',
                qNum: 'NaN',
                qElemNumber: 478,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17250614',
                      qNum: 17250614.419999987,
                    },
                  ],
                },
              },
              {
                qText: '$17,250,614.42',
                qNum: 17250614.419999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18566.78966',
                qNum: 18566.789659999988,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Shitake Mushrooms',
                qNum: 'NaN',
                qElemNumber: 202,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16850131',
                      qNum: 16850131.37999999,
                    },
                  ],
                },
              },
              {
                qText: '$16,850,131.38',
                qNum: 16850131.37999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25',
                qNum: 25,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18526.31559',
                qNum: 18526.31558999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fantastic Rye Bread',
                qNum: 'NaN',
                qElemNumber: 397,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17282700',
                      qNum: 17282699.859999992,
                    },
                  ],
                },
              },
              {
                qText: '$17,282,699.86',
                qNum: 17282699.859999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18507.35703',
                qNum: 18507.35702999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Low Fat Popcorn',
                qNum: 'NaN',
                qElemNumber: 69,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17207127',
                      qNum: 17207126.649999995,
                    },
                  ],
                },
              },
              {
                qText: '$17,207,126.65',
                qNum: 17207126.649999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '34',
                qNum: 34,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18500.71064',
                qNum: 18500.710639999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Raisins',
                qNum: 'NaN',
                qElemNumber: 5,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17057300',
                      qNum: 17057299.899999987,
                    },
                  ],
                },
              },
              {
                qText: '$17,057,299.90',
                qNum: 17057299.899999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '32',
                qNum: 32,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18495.53491',
                qNum: 18495.53491000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Grape Popsicles',
                qNum: 'NaN',
                qElemNumber: 290,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17130290',
                      qNum: 17130290.149999987,
                    },
                  ],
                },
              },
              {
                qText: '$17,130,290.15',
                qNum: 17130290.149999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '29',
                qNum: 29,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18480.91189',
                qNum: 18480.91188999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Fancy Canned Clams',
                qNum: 'NaN',
                qElemNumber: 123,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17165609',
                      qNum: 17165609.310000002,
                    },
                  ],
                },
              },
              {
                qText: '$17,165,609.31',
                qNum: 17165609.310000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27',
                qNum: 27,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18452.65133',
                qNum: 18452.651330000015,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Special Corn Puffs',
                qNum: 'NaN',
                qElemNumber: 398,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17093976',
                      qNum: 17093975.829999983,
                    },
                  ],
                },
              },
              {
                qText: '$17,093,975.83',
                qNum: 17093975.829999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18425.09896',
                qNum: 18425.098959999967,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Moms Low Fat Bologna',
                qNum: 'NaN',
                qElemNumber: 224,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17098432',
                      qNum: 17098431.630000003,
                    },
                  ],
                },
              },
              {
                qText: '$17,098,431.63',
                qNum: 17098431.630000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25',
                qNum: 25,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18390.11174',
                qNum: 18390.111739999993,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Corn Chips',
                qNum: 'NaN',
                qElemNumber: 328,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17003024',
                      qNum: 17003024.329999987,
                    },
                  ],
                },
              },
              {
                qText: '$17,003,024.33',
                qNum: 17003024.329999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '29',
                qNum: 29,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18318.85947',
                qNum: 18318.85947000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Dried Apricots',
                qNum: 'NaN',
                qElemNumber: 172,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16978015',
                      qNum: 16978015.43999999,
                    },
                  ],
                },
              },
              {
                qText: '$16,978,015.44',
                qNum: 16978015.43999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '32',
                qNum: 32,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18310.41368',
                qNum: 18310.413679999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Fresh Lima Beans',
                qNum: 'NaN',
                qElemNumber: 251,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17052380',
                      qNum: 17052380.189999986,
                    },
                  ],
                },
              },
              {
                qText: '$17,052,380.19',
                qNum: 17052380.189999986,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18293.96045',
                qNum: 18293.96044999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Frozen Pancakes',
                qNum: 'NaN',
                qElemNumber: 388,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16875265',
                      qNum: 16875265.000000022,
                    },
                  ],
                },
              },
              {
                qText: '$16,875,265.00',
                qNum: 16875265.000000022,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18291.31012',
                qNum: 18291.310119999955,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Apple Fruit Roll',
                qNum: 'NaN',
                qElemNumber: 252,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16689479',
                      qNum: 16689479.329999967,
                    },
                  ],
                },
              },
              {
                qText: '$16,689,479.33',
                qNum: 16689479.329999967,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25',
                qNum: 25,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18227.64874',
                qNum: 18227.648740000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Beef TV Dinner',
                qNum: 'NaN',
                qElemNumber: 47,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16915211',
                      qNum: 16915211.030000005,
                    },
                  ],
                },
              },
              {
                qText: '$16,915,211.03',
                qNum: 16915211.030000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25',
                qNum: 25,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18221.85197',
                qNum: 18221.851970000018,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Large Canned Shrimp',
                qNum: 'NaN',
                qElemNumber: 549,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17045040',
                      qNum: 17045040.399999987,
                    },
                  ],
                },
              },
              {
                qText: '$17,045,040.40',
                qNum: 17045040.399999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18217.93831',
                qNum: 18217.938310000027,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Atomic Semi-Sweet Chocolate Bar',
                qNum: 'NaN',
                qElemNumber: 361,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16689061',
                      qNum: 16689060.999999983,
                    },
                  ],
                },
              },
              {
                qText: '$16,689,061.00',
                qNum: 16689060.999999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26',
                qNum: 26,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18199.92205',
                qNum: 18199.922049999954,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Beef Jerky',
                qNum: 'NaN',
                qElemNumber: 182,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16999486',
                      qNum: 16999485.73999998,
                    },
                  ],
                },
              },
              {
                qText: '$16,999,485.74',
                qNum: 16999485.73999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '30',
                qNum: 30,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18111.36678',
                qNum: 18111.366779999986,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Frozen Mushroom Pizza',
                qNum: 'NaN',
                qElemNumber: 448,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16740749',
                      qNum: 16740749.099999983,
                    },
                  ],
                },
              },
              {
                qText: '$16,740,749.10',
                qNum: 16740749.099999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23',
                qNum: 23,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18049.35886',
                qNum: 18049.358859999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Beef Soup',
                qNum: 'NaN',
                qElemNumber: 229,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16576651',
                      qNum: 16576651.100000001,
                    },
                  ],
                },
              },
              {
                qText: '$16,576,651.10',
                qNum: 16576651.100000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27',
                qNum: 27,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18022.76913',
                qNum: 18022.769130000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Creamy Peanut Butter',
                qNum: 'NaN',
                qElemNumber: 413,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16650229',
                      qNum: 16650229.099999998,
                    },
                  ],
                },
              },
              {
                qText: '$16,650,229.10',
                qNum: 16650229.099999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18010.75579',
                qNum: 18010.755790000017,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Avocado Dip',
                qNum: 'NaN',
                qElemNumber: 25,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16572932',
                      qNum: 16572932.44999999,
                    },
                  ],
                },
              },
              {
                qText: '$16,572,932.45',
                qNum: 16572932.44999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17964.01919',
                qNum: 17964.01919000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Dried Apricots',
                qNum: 'NaN',
                qElemNumber: 151,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16780185',
                      qNum: 16780185.429999977,
                    },
                  ],
                },
              },
              {
                qText: '$16,780,185.43',
                qNum: 16780185.429999977,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '32',
                qNum: 32,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17951.73929',
                qNum: 17951.739289999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Graham Crackers',
                qNum: 'NaN',
                qElemNumber: 404,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16558903',
                      qNum: 16558903.48999997,
                    },
                  ],
                },
              },
              {
                qText: '$16,558,903.49',
                qNum: 16558903.48999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23',
                qNum: 23,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17936.24251',
                qNum: 17936.242509999935,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Low Fat Apple Butter',
                qNum: 'NaN',
                qElemNumber: 368,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16474939',
                      qNum: 16474938.93999997,
                    },
                  ],
                },
              },
              {
                qText: '$16,474,938.94',
                qNum: 16474938.93999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17885.91345',
                qNum: 17885.913449999967,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Noodle Soup',
                qNum: 'NaN',
                qElemNumber: 21,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16605397',
                      qNum: 16605396.639999988,
                    },
                  ],
                },
              },
              {
                qText: '$16,605,396.64',
                qNum: 16605396.639999988,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23',
                qNum: 23,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17800.94582',
                qNum: 17800.94582,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Fresh Lima Beans',
                qNum: 'NaN',
                qElemNumber: 1,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16494738',
                      qNum: 16494737.749999994,
                    },
                  ],
                },
              },
              {
                qText: '$16,494,737.75',
                qNum: 16494737.749999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17738.757',
                qNum: 17738.757000000012,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Discover Manicotti',
                qNum: 'NaN',
                qElemNumber: 104,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16574814',
                      qNum: 16574813.649999987,
                    },
                  ],
                },
              },
              {
                qText: '$16,574,813.65',
                qNum: 16574813.649999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '54',
                qNum: 54,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17680.12985',
                qNum: 17680.129849999972,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Green Pepper',
                qNum: 'NaN',
                qElemNumber: 403,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16289501',
                      qNum: 16289501.169999996,
                    },
                  ],
                },
              },
              {
                qText: '$16,289,501.17',
                qNum: 16289501.169999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17581.8549',
                qNum: 17581.85489999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Frozen Carrots',
                qNum: 'NaN',
                qElemNumber: 673,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16604993',
                      qNum: 16604993.209999992,
                    },
                  ],
                },
              },
              {
                qText: '$16,604,993.21',
                qNum: 16604993.209999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17554.09354',
                qNum: 17554.093539999947,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Fajita French Fries',
                qNum: 'NaN',
                qElemNumber: 518,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15933537',
                      qNum: 15933537.099999981,
                    },
                  ],
                },
              },
              {
                qText: '$15,933,537.10',
                qNum: 15933537.099999981,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '29',
                qNum: 29,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17512.9229',
                qNum: 17512.922899999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Oatmeal',
                qNum: 'NaN',
                qElemNumber: 310,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16068709',
                      qNum: 16068708.92999999,
                    },
                  ],
                },
              },
              {
                qText: '$16,068,708.93',
                qNum: 16068708.92999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17488.18032',
                qNum: 17488.18031999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club Low Fat Cottage Cheese',
                qNum: 'NaN',
                qElemNumber: 235,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16231670',
                      qNum: 16231670.329999972,
                    },
                  ],
                },
              },
              {
                qText: '$16,231,670.33',
                qNum: 16231670.329999972,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17460.2878',
                qNum: 17460.28779999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Chicken Soup',
                qNum: 'NaN',
                qElemNumber: 634,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16082917',
                      qNum: 16082917.299999975,
                    },
                  ],
                },
              },
              {
                qText: '$16,082,917.30',
                qNum: 16082917.299999975,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17451.4897',
                qNum: 17451.489699999973,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Fondue Mix',
                qNum: 'NaN',
                qElemNumber: 521,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16046379',
                      qNum: 16046379.430000009,
                    },
                  ],
                },
              },
              {
                qText: '$16,046,379.43',
                qNum: 16046379.430000009,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17416.83637',
                qNum: 17416.83637,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Creamy Peanut Butter',
                qNum: 'NaN',
                qElemNumber: 46,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16109593',
                      qNum: 16109593.059999987,
                    },
                  ],
                },
              },
              {
                qText: '$16,109,593.06',
                qNum: 16109593.059999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17403.85816',
                qNum: 17403.85816000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Fancy Canned Oysters',
                qNum: 'NaN',
                qElemNumber: 2,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16032262',
                      qNum: 16032262.049999993,
                    },
                  ],
                },
              },
              {
                qText: '$16,032,262.05',
                qNum: 16032262.049999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17356.33738',
                qNum: 17356.33737999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Dried Mushrooms',
                qNum: 'NaN',
                qElemNumber: 14,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15932080',
                      qNum: 15932080.089999985,
                    },
                  ],
                },
              },
              {
                qText: '$15,932,080.09',
                qNum: 15932080.089999985,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17341.80015',
                qNum: 17341.800150000014,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Atomic Bubble Gum',
                qNum: 'NaN',
                qElemNumber: 349,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15875000',
                      qNum: 15875000.45999998,
                    },
                  ],
                },
              },
              {
                qText: '$15,875,000.46',
                qNum: 15875000.45999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17315.74252',
                qNum: 17315.74251999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Low Fat Chips',
                qNum: 'NaN',
                qElemNumber: 470,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15968548',
                      qNum: 15968547.659999995,
                    },
                  ],
                },
              },
              {
                qText: '$15,968,547.66',
                qNum: 15968547.659999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26',
                qNum: 26,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17239.87875',
                qNum: 17239.87874999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Sugar Cookies',
                qNum: 'NaN',
                qElemNumber: 433,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15991310',
                      qNum: 15991309.780000027,
                    },
                  ],
                },
              },
              {
                qText: '$15,991,309.78',
                qNum: 15991309.780000027,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17230.31746',
                qNum: 17230.317459999962,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club Muenster Cheese',
                qNum: 'NaN',
                qElemNumber: 629,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16024498',
                      qNum: 16024497.65999999,
                    },
                  ],
                },
              },
              {
                qText: '$16,024,497.66',
                qNum: 16024497.65999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17229.82654',
                qNum: 17229.826539999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Cutting Edge Turkey Hot Dogs',
                qNum: 'NaN',
                qElemNumber: 287,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15912027',
                      qNum: 15912026.570000002,
                    },
                  ],
                },
              },
              {
                qText: '$15,912,026.57',
                qNum: 15912026.570000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26',
                qNum: 26,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17220.23509',
                qNum: 17220.23509000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Frozen Broccoli',
                qNum: 'NaN',
                qElemNumber: 243,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15857167',
                      qNum: 15857167.419999983,
                    },
                  ],
                },
              },
              {
                qText: '$15,857,167.42',
                qNum: 15857167.419999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17198.7302',
                qNum: 17198.730200000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Rice Soup',
                qNum: 'NaN',
                qElemNumber: 593,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15913005',
                      qNum: 15913004.689999988,
                    },
                  ],
                },
              },
              {
                qText: '$15,913,004.69',
                qNum: 15913004.689999988,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27',
                qNum: 27,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17180.37743',
                qNum: 17180.377430000008,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Beef Jerky',
                qNum: 'NaN',
                qElemNumber: 533,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15701392',
                      qNum: 15701392.030000018,
                    },
                  ],
                },
              },
              {
                qText: '$15,701,392.03',
                qNum: 15701392.030000018,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '30',
                qNum: 30,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17156.61023',
                qNum: 17156.610229999966,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fabulous Cola',
                qNum: 'NaN',
                qElemNumber: 140,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16104084',
                      qNum: 16104083.569999985,
                    },
                  ],
                },
              },
              {
                qText: '$16,104,083.57',
                qNum: 16104083.569999985,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25',
                qNum: 25,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17134.30629',
                qNum: 17134.306290000015,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Frozen Sausage Pizza',
                qNum: 'NaN',
                qElemNumber: 65,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15954434',
                      qNum: 15954433.950000005,
                    },
                  ],
                },
              },
              {
                qText: '$15,954,433.95',
                qNum: 15954433.950000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17113.57696',
                qNum: 17113.57695999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Strawberry Preserves',
                qNum: 'NaN',
                qElemNumber: 56,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15725194',
                      qNum: 15725193.719999978,
                    },
                  ],
                },
              },
              {
                qText: '$15,725,193.72',
                qNum: 15725193.719999978,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25',
                qNum: 25,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17109.24827',
                qNum: 17109.248269999996,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super White Sugar',
                qNum: 'NaN',
                qElemNumber: 130,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15915765',
                      qNum: 15915764.649999991,
                    },
                  ],
                },
              },
              {
                qText: '$15,915,764.65',
                qNum: 15915764.649999991,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '29',
                qNum: 29,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17046.77936',
                qNum: 17046.779359999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Decaf Coffee',
                qNum: 'NaN',
                qElemNumber: 660,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15752279',
                      qNum: 15752279.379999997,
                    },
                  ],
                },
              },
              {
                qText: '$15,752,279.38',
                qNum: 15752279.379999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16988.54961',
                qNum: 16988.54960999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Thresher White Chocolate Bar',
                qNum: 'NaN',
                qElemNumber: 299,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15803054',
                      qNum: 15803054.329999989,
                    },
                  ],
                },
              },
              {
                qText: '$15,803,054.33',
                qNum: 15803054.329999989,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16921.28785',
                qNum: 16921.287849999993,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Firm Tofu',
                qNum: 'NaN',
                qElemNumber: 320,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15594008',
                      qNum: 15594007.799999984,
                    },
                  ],
                },
              },
              {
                qText: '$15,594,007.80',
                qNum: 15594007.799999984,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16916.60049',
                qNum: 16916.600489999986,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Cutting Edge Low Fat Cole Slaw',
                qNum: 'NaN',
                qElemNumber: 715,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15768135',
                      qNum: 15768135.43000001,
                    },
                  ],
                },
              },
              {
                qText: '$15,768,135.43',
                qNum: 15768135.43000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16910.71593',
                qNum: 16910.71593000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Grape Fruit Roll',
                qNum: 'NaN',
                qElemNumber: 74,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15594009',
                      qNum: 15594008.939999996,
                    },
                  ],
                },
              },
              {
                qText: '$15,594,008.94',
                qNum: 15594008.939999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16885.44944',
                qNum: 16885.44944000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Firm Tofu',
                qNum: 'NaN',
                qElemNumber: 37,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15694520',
                      qNum: 15694519.940000013,
                    },
                  ],
                },
              },
              {
                qText: '$15,694,519.94',
                qNum: 15694519.940000013,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26',
                qNum: 26,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16856.85489',
                qNum: 16856.854889999973,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Choice Semi-Sweet Chocolate Bar',
                qNum: 'NaN',
                qElemNumber: 585,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15138192',
                      qNum: 15138192.469999986,
                    },
                  ],
                },
              },
              {
                qText: '$15,138,192.47',
                qNum: 15138192.469999986,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16712.62599',
                qNum: 16712.625989999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson String Cheese',
                qNum: 'NaN',
                qElemNumber: 116,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15486843',
                      qNum: 15486843.21999999,
                    },
                  ],
                },
              },
              {
                qText: '$15,486,843.22',
                qNum: 15486843.21999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16625.60686',
                qNum: 16625.606859999996,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Monarch Thai Rice',
                qNum: 'NaN',
                qElemNumber: 514,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15359761',
                      qNum: 15359761.229999986,
                    },
                  ],
                },
              },
              {
                qText: '$15,359,761.23',
                qNum: 15359761.229999986,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16585.92717',
                qNum: 16585.927169999977,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Creamed Corn',
                qNum: 'NaN',
                qElemNumber: 444,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15551055',
                      qNum: 15551054.51999998,
                    },
                  ],
                },
              },
              {
                qText: '$15,551,054.52',
                qNum: 15551054.51999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16566.85817',
                qNum: 16566.85816999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Onions',
                qNum: 'NaN',
                qElemNumber: 57,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15365424',
                      qNum: 15365424.480000013,
                    },
                  ],
                },
              },
              {
                qText: '$15,365,424.48',
                qNum: 15365424.480000013,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16564.01487',
                qNum: 16564.014870000017,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson Mild Cheddar Cheese',
                qNum: 'NaN',
                qElemNumber: 494,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15354917',
                      qNum: 15354917.38,
                    },
                  ],
                },
              },
              {
                qText: '$15,354,917.38',
                qNum: 15354917.38,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16555.12682',
                qNum: 16555.12682,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better Chocolate Milk',
                qNum: 'NaN',
                qElemNumber: 664,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15305747',
                      qNum: 15305746.869999992,
                    },
                  ],
                },
              },
              {
                qText: '$15,305,746.87',
                qNum: 15305746.869999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16445.34169',
                qNum: 16445.34169,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla Whole Milk',
                qNum: 'NaN',
                qElemNumber: 28,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15136416',
                      qNum: 15136415.64,
                    },
                  ],
                },
              },
              {
                qText: '$15,136,415.64',
                qNum: 15136415.64,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23',
                qNum: 23,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16314.27627',
                qNum: 16314.276270000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Home Style French Fries',
                qNum: 'NaN',
                qElemNumber: 347,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15047670',
                      qNum: 15047669.679999966,
                    },
                  ],
                },
              },
              {
                qText: '$15,047,669.68',
                qNum: 15047669.679999966,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16251.21496',
                qNum: 16251.214960000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Frozen Cauliflower',
                qNum: 'NaN',
                qElemNumber: 453,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15202350',
                      qNum: 15202349.879999993,
                    },
                  ],
                },
              },
              {
                qText: '$15,202,349.88',
                qNum: 15202349.879999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23',
                qNum: 23,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16227.62744',
                qNum: 16227.627439999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Frosted Cookies',
                qNum: 'NaN',
                qElemNumber: 339,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15094757',
                      qNum: 15094756.58000001,
                    },
                  ],
                },
              },
              {
                qText: '$15,094,756.58',
                qNum: 15094756.58000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16224.91366',
                qNum: 16224.913659999991,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Salt',
                qNum: 'NaN',
                qElemNumber: 289,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15165720',
                      qNum: 15165720.429999994,
                    },
                  ],
                },
              },
              {
                qText: '$15,165,720.43',
                qNum: 15165720.429999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16185.69062',
                qNum: 16185.690620000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Walrus Imported Beer',
                qNum: 'NaN',
                qElemNumber: 278,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14802903',
                      qNum: 14802902.819999987,
                    },
                  ],
                },
              },
              {
                qText: '$14,802,902.82',
                qNum: 14802902.819999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25',
                qNum: 25,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16124.20269',
                qNum: 16124.202689999996,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Walnuts',
                qNum: 'NaN',
                qElemNumber: 248,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14754686',
                      qNum: 14754686.459999984,
                    },
                  ],
                },
              },
              {
                qText: '$14,754,686.46',
                qNum: 14754686.459999984,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16107.63378',
                qNum: 16107.633780000006,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Frozen Peas',
                qNum: 'NaN',
                qElemNumber: 124,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14777487',
                      qNum: 14777487.099999981,
                    },
                  ],
                },
              },
              {
                qText: '$14,777,487.10',
                qNum: 14777487.099999981,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16067.17741',
                qNum: 16067.17741000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Good Light Wine',
                qNum: 'NaN',
                qElemNumber: 174,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14836605',
                      qNum: 14836605.330000006,
                    },
                  ],
                },
              },
              {
                qText: '$14,836,605.33',
                qNum: 14836605.330000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16034.7682',
                qNum: 16034.768200000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better 2% Milk',
                qNum: 'NaN',
                qElemNumber: 680,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14963167',
                      qNum: 14963166.649999995,
                    },
                  ],
                },
              },
              {
                qText: '$14,963,166.65',
                qNum: 14963166.649999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16018.37368',
                qNum: 16018.37367999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Lettuce',
                qNum: 'NaN',
                qElemNumber: 394,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14739598',
                      qNum: 14739598.369999992,
                    },
                  ],
                },
              },
              {
                qText: '$14,739,598.37',
                qNum: 14739598.369999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15889.5671',
                qNum: 15889.567099999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla Jack Cheese',
                qNum: 'NaN',
                qElemNumber: 346,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14495761',
                      qNum: 14495760.729999997,
                    },
                  ],
                },
              },
              {
                qText: '$14,495,760.73',
                qNum: 14495760.729999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15812.53379',
                qNum: 15812.53378999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Red Spade Sliced Ham',
                qNum: 'NaN',
                qElemNumber: 666,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14610772',
                      qNum: 14610772.03000001,
                    },
                  ],
                },
              },
              {
                qText: '$14,610,772.03',
                qNum: 14610772.03000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15809.74082',
                qNum: 15809.740819999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Urban Egg Substitute',
                qNum: 'NaN',
                qElemNumber: 465,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14635199',
                      qNum: 14635199.199999971,
                    },
                  ],
                },
              },
              {
                qText: '$14,635,199.20',
                qNum: 14635199.199999971,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15808.9532',
                qNum: 15808.953199999989,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Excellent Orange Juice',
                qNum: 'NaN',
                qElemNumber: 364,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14687746',
                      qNum: 14687746.359999998,
                    },
                  ],
                },
              },
              {
                qText: '$14,687,746.36',
                qNum: 14687746.359999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15802.98058',
                qNum: 15802.980579999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Extra Chunky Peanut Butter',
                qNum: 'NaN',
                qElemNumber: 540,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14711871',
                      qNum: 14711870.950000016,
                    },
                  ],
                },
              },
              {
                qText: '$14,711,870.95',
                qNum: 14711870.950000016,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15785.23023',
                qNum: 15785.230229999952,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Chocolate Chip Cookies',
                qNum: 'NaN',
                qElemNumber: 122,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14336274',
                      qNum: 14336274.309999978,
                    },
                  ],
                },
              },
              {
                qText: '$14,336,274.31',
                qNum: 14336274.309999978,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25',
                qNum: 25,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15733.00585',
                qNum: 15733.005849999992,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Extra Chunky Peanut Butter',
                qNum: 'NaN',
                qElemNumber: 419,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14546928',
                      qNum: 14546927.889999999,
                    },
                  ],
                },
              },
              {
                qText: '$14,546,927.89',
                qNum: 14546927.889999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15705.82489',
                qNum: 15705.824889999996,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Radius Wheat Puffs',
                qNum: 'NaN',
                qElemNumber: 511,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14795626',
                      qNum: 14795626.439999977,
                    },
                  ],
                },
              },
              {
                qText: '$14,795,626.44',
                qNum: 14795626.439999977,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15672.96303',
                qNum: 15672.963029999988,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Radius Grits',
                qNum: 'NaN',
                qElemNumber: 468,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14853944',
                      qNum: 14853944.139999973,
                    },
                  ],
                },
              },
              {
                qText: '$14,853,944.14',
                qNum: 14853944.139999973,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15665.88524',
                qNum: 15665.885240000007,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Chicken Soup',
                qNum: 'NaN',
                qElemNumber: 512,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14575925',
                      qNum: 14575924.600000001,
                    },
                  ],
                },
              },
              {
                qText: '$14,575,924.60',
                qNum: 14575924.600000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15641.354',
                qNum: 15641.354000000014,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Dried Dates',
                qNum: 'NaN',
                qElemNumber: 402,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14548290',
                      qNum: 14548290.39999997,
                    },
                  ],
                },
              },
              {
                qText: '$14,548,290.40',
                qNum: 14548290.39999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15624.55948',
                qNum: 15624.559479999989,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Frozen Pepperoni Pizza',
                qNum: 'NaN',
                qElemNumber: 693,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14443419',
                      qNum: 14443418.549999977,
                    },
                  ],
                },
              },
              {
                qText: '$14,443,418.55',
                qNum: 14443418.549999977,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27',
                qNum: 27,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15609.9108',
                qNum: 15609.91079999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Token Berry Juice',
                qNum: 'NaN',
                qElemNumber: 218,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14523066',
                      qNum: 14523065.839999963,
                    },
                  ],
                },
              },
              {
                qText: '$14,523,065.84',
                qNum: 14523065.839999963,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15596.62643',
                qNum: 15596.62643,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Fondue Mix',
                qNum: 'NaN',
                qElemNumber: 200,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14450002',
                      qNum: 14450002.490000006,
                    },
                  ],
                },
              },
              {
                qText: '$14,450,002.49',
                qNum: 14450002.490000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15589.05692',
                qNum: 15589.056919999985,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Pancake Mix',
                qNum: 'NaN',
                qElemNumber: 440,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14455290',
                      qNum: 14455290.189999985,
                    },
                  ],
                },
              },
              {
                qText: '$14,455,290.19',
                qNum: 14455290.189999985,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15587.96',
                qNum: 15587.96,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Strawberry Jam',
                qNum: 'NaN',
                qElemNumber: 108,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14246382',
                      qNum: 14246381.749999981,
                    },
                  ],
                },
              },
              {
                qText: '$14,246,381.75',
                qNum: 14246381.749999981,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15559.50149',
                qNum: 15559.501490000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Pearl White Zinfandel Wine',
                qNum: 'NaN',
                qElemNumber: 136,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14413194',
                      qNum: 14413194.439999998,
                    },
                  ],
                },
              },
              {
                qText: '$14,413,194.44',
                qNum: 14413194.439999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15547.87987',
                qNum: 15547.879869999992,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Shady Lake Rice Medly',
                qNum: 'NaN',
                qElemNumber: 416,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14504014',
                      qNum: 14504013.969999984,
                    },
                  ],
                },
              },
              {
                qText: '$14,504,013.97',
                qNum: 14504013.969999984,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15507.08681',
                qNum: 15507.086809999983,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better Low Fat Sour Cream',
                qNum: 'NaN',
                qElemNumber: 436,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14302655',
                      qNum: 14302654.759999987,
                    },
                  ],
                },
              },
              {
                qText: '$14,302,654.76',
                qNum: 14302654.759999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15467.87687',
                qNum: 15467.87686999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Lime Popsicles',
                qNum: 'NaN',
                qElemNumber: 679,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14347820',
                      qNum: 14347819.660000006,
                    },
                  ],
                },
              },
              {
                qText: '$14,347,819.66',
                qNum: 14347819.660000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15464.6388',
                qNum: 15464.638799999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Medal Large Brown Eggs',
                qNum: 'NaN',
                qElemNumber: 591,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14411275',
                      qNum: 14411275.339999983,
                    },
                  ],
                },
              },
              {
                qText: '$14,411,275.34',
                qNum: 14411275.339999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15400.65336',
                qNum: 15400.653359999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Salt',
                qNum: 'NaN',
                qElemNumber: 196,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13673527',
                      qNum: 13673527.389999978,
                    },
                  ],
                },
              },
              {
                qText: '$13,673,527.39',
                qNum: 13673527.389999978,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15384.33297',
                qNum: 15384.332969999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Moms Potato Salad',
                qNum: 'NaN',
                qElemNumber: 275,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14236736',
                      qNum: 14236735.58999998,
                    },
                  ],
                },
              },
              {
                qText: '$14,236,735.59',
                qNum: 14236735.58999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15370.728',
                qNum: 15370.727999999996,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Sweet Onion',
                qNum: 'NaN',
                qElemNumber: 244,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14297257',
                      qNum: 14297257.359999992,
                    },
                  ],
                },
              },
              {
                qText: '$14,297,257.36',
                qNum: 14297257.359999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '25',
                qNum: 25,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15356.91164',
                qNum: 15356.911640000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Garlic',
                qNum: 'NaN',
                qElemNumber: 313,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14137021',
                      qNum: 14137021.319999961,
                    },
                  ],
                },
              },
              {
                qText: '$14,137,021.32',
                qNum: 14137021.319999961,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15350.54489',
                qNum: 15350.544889999976,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Red Spade Pimento Loaf',
                qNum: 'NaN',
                qElemNumber: 615,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14184739',
                      qNum: 14184739.399999999,
                    },
                  ],
                },
              },
              {
                qText: '$14,184,739.40',
                qNum: 14184739.399999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26',
                qNum: 26,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15306.71448',
                qNum: 15306.71448000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Great Blueberry Muffins',
                qNum: 'NaN',
                qElemNumber: 258,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14310284',
                      qNum: 14310284.239999976,
                    },
                  ],
                },
              },
              {
                qText: '$14,310,284.24',
                qNum: 14310284.239999976,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23',
                qNum: 23,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15269.35976',
                qNum: 15269.359760000012,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Washington Mango Drink',
                qNum: 'NaN',
                qElemNumber: 270,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14015041',
                      qNum: 14015041.209999982,
                    },
                  ],
                },
              },
              {
                qText: '$14,015,041.21',
                qNum: 14015041.209999982,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15261.79923',
                qNum: 15261.799229999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Cutting Edge Sliced Ham',
                qNum: 'NaN',
                qElemNumber: 18,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13832815',
                      qNum: 13832814.829999996,
                    },
                  ],
                },
              },
              {
                qText: '$13,832,814.83',
                qNum: 13832814.829999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15226.34784',
                qNum: 15226.347839999984,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Grape Jam',
                qNum: 'NaN',
                qElemNumber: 147,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14240919',
                      qNum: 14240919.059999978,
                    },
                  ],
                },
              },
              {
                qText: '$14,240,919.06',
                qNum: 14240919.059999978,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15145.56504',
                qNum: 15145.56504000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fantastic White Bread',
                qNum: 'NaN',
                qElemNumber: 359,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13834504',
                      qNum: 13834504.49999997,
                    },
                  ],
                },
              },
              {
                qText: '$13,834,504.50',
                qNum: 13834504.49999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15120.397',
                qNum: 15120.396999999988,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fabulous Diet Soda',
                qNum: 'NaN',
                qElemNumber: 88,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13949869',
                      qNum: 13949868.989999993,
                    },
                  ],
                },
              },
              {
                qText: '$13,949,868.99',
                qNum: 13949868.989999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15118.70747',
                qNum: 15118.70746999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Corn Oil',
                qNum: 'NaN',
                qElemNumber: 668,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14079682',
                      qNum: 14079681.67999999,
                    },
                  ],
                },
              },
              {
                qText: '$14,079,681.68',
                qNum: 14079681.67999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15065.03293',
                qNum: 15065.032929999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Walrus Light Wine',
                qNum: 'NaN',
                qElemNumber: 268,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14047087',
                      qNum: 14047087.439999964,
                    },
                  ],
                },
              },
              {
                qText: '$14,047,087.44',
                qNum: 14047087.439999964,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15061.96173',
                qNum: 15061.961729999992,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Quick Seasoned Hamburger',
                qNum: 'NaN',
                qElemNumber: 443,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13938972',
                      qNum: 13938972.109999979,
                    },
                  ],
                },
              },
              {
                qText: '$13,938,972.11',
                qNum: 13938972.109999979,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14991.29415',
                qNum: 14991.294149999976,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Strawberry Fruit Roll',
                qNum: 'NaN',
                qElemNumber: 677,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13956944',
                      qNum: 13956944.220000004,
                    },
                  ],
                },
              },
              {
                qText: '$13,956,944.22',
                qNum: 13956944.220000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14982.1737',
                qNum: 14982.173699999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Green Ribbon Canned Mixed Fruit',
                qNum: 'NaN',
                qElemNumber: 608,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13790521',
                      qNum: 13790521.17000001,
                    },
                  ],
                },
              },
              {
                qText: '$13,790,521.17',
                qNum: 13790521.17000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14958.83978',
                qNum: 14958.839779999984,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Green Pepper',
                qNum: 'NaN',
                qElemNumber: 92,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14096876',
                      qNum: 14096875.699999988,
                    },
                  ],
                },
              },
              {
                qText: '$14,096,875.70',
                qNum: 14096875.699999988,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14956.16348',
                qNum: 14956.163480000016,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Columbian Coffee',
                qNum: 'NaN',
                qElemNumber: 434,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14241291',
                      qNum: 14241290.839999992,
                    },
                  ],
                },
              },
              {
                qText: '$14,241,290.84',
                qNum: 14241290.839999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14929.47825',
                qNum: 14929.478250000016,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better Jack Cheese',
                qNum: 'NaN',
                qElemNumber: 580,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13705348',
                      qNum: 13705348.099999983,
                    },
                  ],
                },
              },
              {
                qText: '$13,705,348.10',
                qNum: 13705348.099999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14909.28211',
                qNum: 14909.28211,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Elephant Garlic',
                qNum: 'NaN',
                qElemNumber: 425,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13498213',
                      qNum: 13498213.429999992,
                    },
                  ],
                },
              },
              {
                qText: '$13,498,213.43',
                qNum: 13498213.429999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14899.48208',
                qNum: 14899.482079999983,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Atomic Mints',
                qNum: 'NaN',
                qElemNumber: 17,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13781882',
                      qNum: 13781881.969999993,
                    },
                  ],
                },
              },
              {
                qText: '$13,781,881.97',
                qNum: 13781881.969999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14880.99506',
                qNum: 14880.99505999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better Cheese Spread',
                qNum: 'NaN',
                qElemNumber: 683,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13582538',
                      qNum: 13582537.919999989,
                    },
                  ],
                },
              },
              {
                qText: '$13,582,537.92',
                qNum: 13582537.919999989,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14810.82405',
                qNum: 14810.82404999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Regular Coffee',
                qNum: 'NaN',
                qElemNumber: 153,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13526460',
                      qNum: 13526460.379999988,
                    },
                  ],
                },
              },
              {
                qText: '$13,526,460.38',
                qNum: 13526460.379999988,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '28',
                qNum: 28,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14793.82973',
                qNum: 14793.829729999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice No Salt Popcorn',
                qNum: 'NaN',
                qElemNumber: 227,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13428487',
                      qNum: 13428486.799999984,
                    },
                  ],
                },
              },
              {
                qText: '$13,428,486.80',
                qNum: 13428486.799999984,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14678.50483',
                qNum: 14678.504829999974,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Excellent Cola',
                qNum: 'NaN',
                qElemNumber: 450,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13685036',
                      qNum: 13685035.72999999,
                    },
                  ],
                },
              },
              {
                qText: '$13,685,035.73',
                qNum: 13685035.72999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14629.23241',
                qNum: 14629.232409999991,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Frozen Chicken Thighs',
                qNum: 'NaN',
                qElemNumber: 546,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13698770',
                      qNum: 13698770.499999996,
                    },
                  ],
                },
              },
              {
                qText: '$13,698,770.50',
                qNum: 13698770.499999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14608.96967',
                qNum: 14608.969669999993,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Salted Pretzels',
                qNum: 'NaN',
                qElemNumber: 657,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13342674',
                      qNum: 13342674.030000003,
                    },
                  ],
                },
              },
              {
                qText: '$13,342,674.03',
                qNum: 13342674.030000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14568.18064',
                qNum: 14568.18063999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Corn on the Cob',
                qNum: 'NaN',
                qElemNumber: 356,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13345185',
                      qNum: 13345185.01999999,
                    },
                  ],
                },
              },
              {
                qText: '$13,345,185.02',
                qNum: 13345185.01999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14561.76615',
                qNum: 14561.766149999992,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Choice Tasty Candy Bar',
                qNum: 'NaN',
                qElemNumber: 54,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13187808',
                      qNum: 13187808.159999974,
                    },
                  ],
                },
              },
              {
                qText: '$13,187,808.16',
                qNum: 13187808.159999974,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26',
                qNum: 26,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14508.46688',
                qNum: 14508.466880000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Fresh Lima Beans',
                qNum: 'NaN',
                qElemNumber: 355,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13532053',
                      qNum: 13532053.049999971,
                    },
                  ],
                },
              },
              {
                qText: '$13,532,053.05',
                qNum: 13532053.049999971,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14469.44649',
                qNum: 14469.446489999977,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club 1% Milk',
                qNum: 'NaN',
                qElemNumber: 184,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13466363',
                      qNum: 13466362.699999979,
                    },
                  ],
                },
              },
              {
                qText: '$13,466,362.70',
                qNum: 13466362.699999979,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '31',
                qNum: 31,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14458.64289',
                qNum: 14458.64289000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Frozen Peas',
                qNum: 'NaN',
                qElemNumber: 33,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12882062',
                      qNum: 12882062.349999994,
                    },
                  ],
                },
              },
              {
                qText: '$12,882,062.35',
                qNum: 12882062.349999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14425.53213',
                qNum: 14425.53212999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Monarch Manicotti',
                qNum: 'NaN',
                qElemNumber: 171,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13367029',
                      qNum: 13367028.7,
                    },
                  ],
                },
              },
              {
                qText: '$13,367,028.70',
                qNum: 13367028.7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14422.61371',
                qNum: 14422.613709999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Jumbo Small Brown Eggs',
                qNum: 'NaN',
                qElemNumber: 378,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13644109',
                      qNum: 13644108.75000001,
                    },
                  ],
                },
              },
              {
                qText: '$13,644,108.75',
                qNum: 13644108.75000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14417.92441',
                qNum: 14417.924410000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Vegetable Oil',
                qNum: 'NaN',
                qElemNumber: 95,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13422408',
                      qNum: 13422408.059999993,
                    },
                  ],
                },
              },
              {
                qText: '$13,422,408.06',
                qNum: 13422408.059999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '26',
                qNum: 26,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14415.80044',
                qNum: 14415.800439999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Asparagus',
                qNum: 'NaN',
                qElemNumber: 273,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13174375',
                      qNum: 13174375.429999987,
                    },
                  ],
                },
              },
              {
                qText: '$13,174,375.43',
                qNum: 13174375.429999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '23',
                qNum: 23,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14406.08017',
                qNum: 14406.080169999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Special Wheat Puffs',
                qNum: 'NaN',
                qElemNumber: 367,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13259833',
                      qNum: 13259832.969999991,
                    },
                  ],
                },
              },
              {
                qText: '$13,259,832.97',
                qNum: 13259832.969999991,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14386.20138',
                qNum: 14386.201379999979,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Colony English Muffins',
                qNum: 'NaN',
                qElemNumber: 236,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13181128',
                      qNum: 13181127.899999995,
                    },
                  ],
                },
              },
              {
                qText: '$13,181,127.90',
                qNum: 13181127.899999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14374.74923',
                qNum: 14374.749230000012,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better Head Cheese',
                qNum: 'NaN',
                qElemNumber: 386,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13426110',
                      qNum: 13426109.96999999,
                    },
                  ],
                },
              },
              {
                qText: '$13,426,109.97',
                qNum: 13426109.96999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14351.01992',
                qNum: 14351.019919999993,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Ice Cream',
                qNum: 'NaN',
                qElemNumber: 691,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12796803',
                      qNum: 12796802.789999977,
                    },
                  ],
                },
              },
              {
                qText: '$12,796,802.79',
                qNum: 12796802.789999977,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14274.89509',
                qNum: 14274.895089999969,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Canned Tuna in Water',
                qNum: 'NaN',
                qElemNumber: 77,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12988313',
                      qNum: 12988312.689999992,
                    },
                  ],
                },
              },
              {
                qText: '$12,988,312.69',
                qNum: 12988312.689999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14237.20556',
                qNum: 14237.205559999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Honey Dew',
                qNum: 'NaN',
                qElemNumber: 247,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12855510',
                      qNum: 12855509.58999996,
                    },
                  ],
                },
              },
              {
                qText: '$12,855,509.59',
                qNum: 12855509.58999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14172.08632',
                qNum: 14172.086319999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Moms Sliced Chicken',
                qNum: 'NaN',
                qElemNumber: 276,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13049786',
                      qNum: 13049785.559999991,
                    },
                  ],
                },
              },
              {
                qText: '$13,049,785.56',
                qNum: 13049785.559999991,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14165.96008',
                qNum: 14165.960079999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Canned Peanuts',
                qNum: 'NaN',
                qElemNumber: 145,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13358836',
                      qNum: 13358836.329999983,
                    },
                  ],
                },
              },
              {
                qText: '$13,358,836.33',
                qNum: 13358836.329999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '24',
                qNum: 24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14120.02021',
                qNum: 14120.02020999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Mini Donuts',
                qNum: 'NaN',
                qElemNumber: 93,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13164621',
                      qNum: 13164621.29000001,
                    },
                  ],
                },
              },
              {
                qText: '$13,164,621.29',
                qNum: 13164621.29000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14108.39359',
                qNum: 14108.393590000014,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Summer Squash',
                qNum: 'NaN',
                qElemNumber: 272,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13133901',
                      qNum: 13133901.039999994,
                    },
                  ],
                },
              },
              {
                qText: '$13,133,901.04',
                qNum: 13133901.039999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14065.99173',
                qNum: 14065.991729999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Colony Bagels',
                qNum: 'NaN',
                qElemNumber: 395,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12899419',
                      qNum: 12899418.559999976,
                    },
                  ],
                },
              },
              {
                qText: '$12,899,418.56',
                qNum: 12899418.559999976,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14055.17875',
                qNum: 14055.178749999977,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fabulous Diet Cola',
                qNum: 'NaN',
                qElemNumber: 89,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13133871',
                      qNum: 13133870.77,
                    },
                  ],
                },
              },
              {
                qText: '$13,133,870.77',
                qNum: 13133870.77,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14002.00059',
                qNum: 14002.00059,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson Jack Cheese',
                qNum: 'NaN',
                qElemNumber: 265,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13154863',
                      qNum: 13154862.729999991,
                    },
                  ],
                },
              },
              {
                qText: '$13,154,862.73',
                qNum: 13154862.729999991,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13974.67225',
                qNum: 13974.67224999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Raspberry Fruit Roll',
                qNum: 'NaN',
                qElemNumber: 543,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12802083',
                      qNum: 12802082.510000002,
                    },
                  ],
                },
              },
              {
                qText: '$12,802,082.51',
                qNum: 12802082.510000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13963.10645',
                qNum: 13963.106449999985,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Frozen Cheese Pizza',
                qNum: 'NaN',
                qElemNumber: 131,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13016309',
                      qNum: 13016309.430000005,
                    },
                  ],
                },
              },
              {
                qText: '$13,016,309.43',
                qNum: 13016309.430000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13906.39032',
                qNum: 13906.390320000008,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Apple Butter',
                qNum: 'NaN',
                qElemNumber: 32,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12520393',
                      qNum: 12520393.069999993,
                    },
                  ],
                },
              },
              {
                qText: '$12,520,393.07',
                qNum: 12520393.069999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13849.80924',
                qNum: 13849.809239999977,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Token Diet Soda',
                qNum: 'NaN',
                qElemNumber: 146,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12886041',
                      qNum: 12886040.969999995,
                    },
                  ],
                },
              },
              {
                qText: '$12,886,040.97',
                qNum: 12886040.969999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13794.5891',
                qNum: 13794.589099999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'American Corned Beef',
                qNum: 'NaN',
                qElemNumber: 396,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12791050',
                      qNum: 12791049.579999993,
                    },
                  ],
                },
              },
              {
                qText: '$12,791,049.58',
                qNum: 12791049.579999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13752.13827',
                qNum: 13752.138269999974,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Red Pepper',
                qNum: 'NaN',
                qElemNumber: 480,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12577310',
                      qNum: 12577310.420000002,
                    },
                  ],
                },
              },
              {
                qText: '$12,577,310.42',
                qNum: 12577310.420000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13680.91135',
                qNum: 13680.91134999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Vegetable Soup',
                qNum: 'NaN',
                qElemNumber: 639,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12871857',
                      qNum: 12871857.009999994,
                    },
                  ],
                },
              },
              {
                qText: '$12,871,857.01',
                qNum: 12871857.009999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13664.05099',
                qNum: 13664.050989999989,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Canned Yams',
                qNum: 'NaN',
                qElemNumber: 646,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12583647',
                      qNum: 12583647.070000004,
                    },
                  ],
                },
              },
              {
                qText: '$12,583,647.07',
                qNum: 12583647.070000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13542.25831',
                qNum: 13542.258309999967,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fabulous Mango Drink',
                qNum: 'NaN',
                qElemNumber: 713,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12825822',
                      qNum: 12825821.500000004,
                    },
                  ],
                },
              },
              {
                qText: '$12,825,821.50',
                qNum: 12825821.500000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13533.98432',
                qNum: 13533.984320000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club Havarti Cheese',
                qNum: 'NaN',
                qElemNumber: 771,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12706642',
                      qNum: 12706642.020000005,
                    },
                  ],
                },
              },
              {
                qText: '$12,706,642.02',
                qNum: 12706642.020000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13529.34053',
                qNum: 13529.340529999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Chicken Noodle Soup',
                qNum: 'NaN',
                qElemNumber: 503,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12208074',
                      qNum: 12208073.669999994,
                    },
                  ],
                },
              },
              {
                qText: '$12,208,073.67',
                qNum: 12208073.669999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13426.61694',
                qNum: 13426.616939999969,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Home Style French Fries',
                qNum: 'NaN',
                qElemNumber: 58,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12630567',
                      qNum: 12630566.799999977,
                    },
                  ],
                },
              },
              {
                qText: '$12,630,566.80',
                qNum: 12630566.799999977,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13387.64211',
                qNum: 13387.642109999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Salsa Dip',
                qNum: 'NaN',
                qElemNumber: 732,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12411542',
                      qNum: 12411541.729999978,
                    },
                  ],
                },
              },
              {
                qText: '$12,411,541.73',
                qNum: 12411541.729999978,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13386.93676',
                qNum: 13386.93675999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Dried Dates',
                qNum: 'NaN',
                qElemNumber: 676,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12715066',
                      qNum: 12715066.169999989,
                    },
                  ],
                },
              },
              {
                qText: '$12,715,066.17',
                qNum: 12715066.169999989,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13383.52851',
                qNum: 13383.52851000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Low Fat Chips',
                qNum: 'NaN',
                qElemNumber: 209,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12246674',
                      qNum: 12246674.109999994,
                    },
                  ],
                },
              },
              {
                qText: '$12,246,674.11',
                qNum: 12246674.109999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13364.77932',
                qNum: 13364.779319999967,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Waffles',
                qNum: 'NaN',
                qElemNumber: 233,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12337330',
                      qNum: 12337329.769999988,
                    },
                  ],
                },
              },
              {
                qText: '$12,337,329.77',
                qNum: 12337329.769999988,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13345.73713',
                qNum: 13345.73712999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Urban Large Eggs',
                qNum: 'NaN',
                qElemNumber: 277,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12246766',
                      qNum: 12246765.780000005,
                    },
                  ],
                },
              },
              {
                qText: '$12,246,765.78',
                qNum: 12246765.780000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13285.72157',
                qNum: 13285.721569999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Pearl Light Beer',
                qNum: 'NaN',
                qElemNumber: 300,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12471229',
                      qNum: 12471228.820000006,
                    },
                  ],
                },
              },
              {
                qText: '$12,471,228.82',
                qNum: 12471228.820000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13229.66416',
                qNum: 13229.664160000026,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson Buttermilk',
                qNum: 'NaN',
                qElemNumber: 495,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12370340',
                      qNum: 12370340.379999997,
                    },
                  ],
                },
              },
              {
                qText: '$12,370,340.38',
                qNum: 12370340.379999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13193.40503',
                qNum: 13193.405030000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Washington Orange Juice',
                qNum: 'NaN',
                qElemNumber: 338,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11926040',
                      qNum: 11926040.289999973,
                    },
                  ],
                },
              },
              {
                qText: '$11,926,040.29',
                qNum: 11926040.289999973,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '31',
                qNum: 31,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13176.41587',
                qNum: 13176.415869999983,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Red Delcious Apples',
                qNum: 'NaN',
                qElemNumber: 264,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12178230',
                      qNum: 12178230.02,
                    },
                  ],
                },
              },
              {
                qText: '$12,178,230.02',
                qNum: 12178230.02,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13120.95917',
                qNum: 13120.959170000015,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Apple Cinnamon Waffles',
                qNum: 'NaN',
                qElemNumber: 708,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12357820',
                      qNum: 12357820.079999996,
                    },
                  ],
                },
              },
              {
                qText: '$12,357,820.08',
                qNum: 12357820.079999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13104.93189',
                qNum: 13104.931889999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Cutting Edge Roasted Chicken',
                qNum: 'NaN',
                qElemNumber: 262,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12149813',
                      qNum: 12149813.28,
                    },
                  ],
                },
              },
              {
                qText: '$12,149,813.28',
                qNum: 12149813.28,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13086.24368',
                qNum: 13086.24367999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Raspberry Fruit Roll',
                qNum: 'NaN',
                qElemNumber: 391,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12197311',
                      qNum: 12197310.61,
                    },
                  ],
                },
              },
              {
                qText: '$12,197,310.61',
                qNum: 12197310.61,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13075.73482',
                qNum: 13075.734820000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club Head Cheese',
                qNum: 'NaN',
                qElemNumber: 609,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12185755',
                      qNum: 12185755.440000001,
                    },
                  ],
                },
              },
              {
                qText: '$12,185,755.44',
                qNum: 12185755.440000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13032.428',
                qNum: 13032.427999999996,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Fancy Canned Anchovies',
                qNum: 'NaN',
                qElemNumber: 354,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11834463',
                      qNum: 11834463.479999984,
                    },
                  ],
                },
              },
              {
                qText: '$11,834,463.48',
                qNum: 11834463.479999984,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13024.23888',
                qNum: 13024.238879999983,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Walrus Chardonnay',
                qNum: 'NaN',
                qElemNumber: 125,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12197418',
                      qNum: 12197418.049999991,
                    },
                  ],
                },
              },
              {
                qText: '$12,197,418.05',
                qNum: 12197418.049999991,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13014.33191',
                qNum: 13014.331910000006,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Cutting Edge Pimento Loaf',
                qNum: 'NaN',
                qElemNumber: 239,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12062632',
                      qNum: 12062631.78,
                    },
                  ],
                },
              },
              {
                qText: '$12,062,631.78',
                qNum: 12062631.78,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13001.17156',
                qNum: 13001.17155999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Frozen Pancakes',
                qNum: 'NaN',
                qElemNumber: 423,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11902511',
                      qNum: 11902511.04,
                    },
                  ],
                },
              },
              {
                qText: '$11,902,511.04',
                qNum: 11902511.04,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12917.4099',
                qNum: 12917.409900000011,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fabulous Orange Juice',
                qNum: 'NaN',
                qElemNumber: 22,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11940337',
                      qNum: 11940337.349999998,
                    },
                  ],
                },
              },
              {
                qText: '$11,940,337.35',
                qNum: 11940337.349999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12909.49154',
                qNum: 12909.491539999986,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Regular Ramen Soup',
                qNum: 'NaN',
                qElemNumber: 141,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12017086',
                      qNum: 12017085.639999976,
                    },
                  ],
                },
              },
              {
                qText: '$12,017,085.64',
                qNum: 12017085.639999976,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12895.00544',
                qNum: 12895.005439999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Pearl Imported Beer',
                qNum: 'NaN',
                qElemNumber: 358,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11984114',
                      qNum: 11984114.200000003,
                    },
                  ],
                },
              },
              {
                qText: '$11,984,114.20',
                qNum: 11984114.200000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12871.00711',
                qNum: 12871.00711,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better Buttermilk',
                qNum: 'NaN',
                qElemNumber: 681,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12144767',
                      qNum: 12144766.719999999,
                    },
                  ],
                },
              },
              {
                qText: '$12,144,766.72',
                qNum: 12144766.719999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12866.60088',
                qNum: 12866.600879999996,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Applause Canned Peaches',
                qNum: 'NaN',
                qElemNumber: 614,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12116547',
                      qNum: 12116547.220000003,
                    },
                  ],
                },
              },
              {
                qText: '$12,116,547.22',
                qNum: 12116547.220000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12859.97484',
                qNum: 12859.974839999988,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Monarch Rice Medly',
                qNum: 'NaN',
                qElemNumber: 417,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11876979',
                      qNum: 11876978.899999984,
                    },
                  ],
                },
              },
              {
                qText: '$11,876,978.90',
                qNum: 11876978.899999984,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12858.0889',
                qNum: 12858.08889999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Swell Canned Mixed Fruit',
                qNum: 'NaN',
                qElemNumber: 234,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11677995',
                      qNum: 11677995.209999979,
                    },
                  ],
                },
              },
              {
                qText: '$11,677,995.21',
                qNum: 11677995.209999979,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12838.73305',
                qNum: 12838.733049999983,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice BBQ Potato Chips',
                qNum: 'NaN',
                qElemNumber: 85,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11619664',
                      qNum: 11619663.75000001,
                    },
                  ],
                },
              },
              {
                qText: '$11,619,663.75',
                qNum: 11619663.75000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12832.10607',
                qNum: 12832.106069999973,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Applause Canned Mixed Fruit',
                qNum: 'NaN',
                qElemNumber: 11,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11732753',
                      qNum: 11732753.440000007,
                    },
                  ],
                },
              },
              {
                qText: '$11,732,753.44',
                qNum: 11732753.440000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '27',
                qNum: 27,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12831.82564',
                qNum: 12831.825640000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Jeffers Wheat Puffs',
                qNum: 'NaN',
                qElemNumber: 199,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11705321',
                      qNum: 11705320.539999994,
                    },
                  ],
                },
              },
              {
                qText: '$11,705,320.54',
                qNum: 11705320.539999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12810.97817',
                qNum: 12810.978169999986,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Medal Small Brown Eggs',
                qNum: 'NaN',
                qElemNumber: 505,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11979284',
                      qNum: 11979283.589999998,
                    },
                  ],
                },
              },
              {
                qText: '$11,979,283.59',
                qNum: 11979283.589999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12806.66489',
                qNum: 12806.664889999985,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Quick Extra Lean Hamburger',
                qNum: 'NaN',
                qElemNumber: 594,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11773626',
                      qNum: 11773625.639999995,
                    },
                  ],
                },
              },
              {
                qText: '$11,773,625.64',
                qNum: 11773625.639999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12773.1206',
                qNum: 12773.120599999971,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Canned Beets',
                qNum: 'NaN',
                qElemNumber: 488,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11451499',
                      qNum: 11451499.230000008,
                    },
                  ],
                },
              },
              {
                qText: '$11,451,499.23',
                qNum: 11451499.230000008,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12772.798',
                qNum: 12772.797999999993,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Excellent Berry Juice',
                qNum: 'NaN',
                qElemNumber: 274,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11577195',
                      qNum: 11577194.799999999,
                    },
                  ],
                },
              },
              {
                qText: '$11,577,194.80',
                qNum: 11577194.799999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12729.81969',
                qNum: 12729.819689999977,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club Strawberry Yogurt',
                qNum: 'NaN',
                qElemNumber: 648,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11789041',
                      qNum: 11789040.84999998,
                    },
                  ],
                },
              },
              {
                qText: '$11,789,040.85',
                qNum: 11789040.84999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12724.18827',
                qNum: 12724.188269999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better Mild Cheddar Cheese',
                qNum: 'NaN',
                qElemNumber: 663,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11607472',
                      qNum: 11607471.789999994,
                    },
                  ],
                },
              },
              {
                qText: '$11,607,471.79',
                qNum: 11607471.789999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12547.054',
                qNum: 12547.05399999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Apple Jelly',
                qNum: 'NaN',
                qElemNumber: 374,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11681594',
                      qNum: 11681594.469999993,
                    },
                  ],
                },
              },
              {
                qText: '$11,681,594.47',
                qNum: 11681594.469999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12532.15405',
                qNum: 12532.15404999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Vegetable Soup',
                qNum: 'NaN',
                qElemNumber: 616,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11528123',
                      qNum: 11528123.099999985,
                    },
                  ],
                },
              },
              {
                qText: '$11,528,123.10',
                qNum: 11528123.099999985,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12505.10693',
                qNum: 12505.106929999984,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Turkey TV Dinner',
                qNum: 'NaN',
                qElemNumber: 195,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11416716',
                      qNum: 11416715.649999982,
                    },
                  ],
                },
              },
              {
                qText: '$11,416,715.65',
                qNum: 11416715.649999982,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12461.76627',
                qNum: 12461.766269999984,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson Havarti Cheese',
                qNum: 'NaN',
                qElemNumber: 491,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11054091',
                      qNum: 11054090.599999994,
                    },
                  ],
                },
              },
              {
                qText: '$11,054,090.60',
                qNum: 11054090.599999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12404.26786',
                qNum: 12404.267859999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Fancy Canned Sardines',
                qNum: 'NaN',
                qElemNumber: 385,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11488503',
                      qNum: 11488502.559999974,
                    },
                  ],
                },
              },
              {
                qText: '$11,488,502.56',
                qNum: 11488502.559999974,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12393.8531',
                qNum: 12393.853099999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Tomatos',
                qNum: 'NaN',
                qElemNumber: 48,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11432357',
                      qNum: 11432357.449999986,
                    },
                  ],
                },
              },
              {
                qText: '$11,432,357.45',
                qNum: 11432357.449999986,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12391.44042',
                qNum: 12391.44041999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Token Cola',
                qNum: 'NaN',
                qElemNumber: 279,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11438405',
                      qNum: 11438404.579999981,
                    },
                  ],
                },
              },
              {
                qText: '$11,438,404.58',
                qNum: 11438404.579999981,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12342.74222',
                qNum: 12342.74221999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Low Fat French Fries',
                qNum: 'NaN',
                qElemNumber: 603,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11169126',
                      qNum: 11169126.079999989,
                    },
                  ],
                },
              },
              {
                qText: '$11,169,126.08',
                qNum: 11169126.079999989,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12330.17527',
                qNum: 12330.175269999967,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Pearl Chardonnay Wine',
                qNum: 'NaN',
                qElemNumber: 406,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11287721',
                      qNum: 11287721.379999982,
                    },
                  ],
                },
              },
              {
                qText: '$11,287,721.38',
                qNum: 11287721.379999982,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12320.18185',
                qNum: 12320.181849999974,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Fancy Plums',
                qNum: 'NaN',
                qElemNumber: 351,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11224909',
                      qNum: 11224909.150000017,
                    },
                  ],
                },
              },
              {
                qText: '$11,224,909.15',
                qNum: 11224909.150000017,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12307.50734',
                qNum: 12307.507339999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club Low Fat Sour Cream',
                qNum: 'NaN',
                qElemNumber: 542,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11578480',
                      qNum: 11578480.039999995,
                    },
                  ],
                },
              },
              {
                qText: '$11,578,480.04',
                qNum: 11578480.039999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12264.43524',
                qNum: 12264.435239999992,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Noodle Soup',
                qNum: 'NaN',
                qElemNumber: 343,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11264521',
                      qNum: 11264520.599999998,
                    },
                  ],
                },
              },
              {
                qText: '$11,264,520.60',
                qNum: 11264520.599999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12196.12583',
                qNum: 12196.125829999992,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Washington Strawberry Drink',
                qNum: 'NaN',
                qElemNumber: 203,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11497312',
                      qNum: 11497311.759999996,
                    },
                  ],
                },
              },
              {
                qText: '$11,497,311.76',
                qNum: 11497311.759999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12192.67634',
                qNum: 12192.676339999973,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Rice Soup',
                qNum: 'NaN',
                qElemNumber: 223,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11386104',
                      qNum: 11386103.549999986,
                    },
                  ],
                },
              },
              {
                qText: '$11,386,103.55',
                qNum: 11386103.549999986,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12160.59133',
                qNum: 12160.591329999983,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Choice Spicy Mints',
                qNum: 'NaN',
                qElemNumber: 565,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10816805',
                      qNum: 10816805.459999988,
                    },
                  ],
                },
              },
              {
                qText: '$10,816,805.46',
                qNum: 10816805.459999988,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12136.59454',
                qNum: 12136.59453999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Tangerines',
                qNum: 'NaN',
                qElemNumber: 452,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11221240',
                      qNum: 11221240.240000004,
                    },
                  ],
                },
              },
              {
                qText: '$11,221,240.24',
                qNum: 11221240.240000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12105.66281',
                qNum: 12105.662809999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Frosted Cookies',
                qNum: 'NaN',
                qElemNumber: 525,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11135730',
                      qNum: 11135729.849999994,
                    },
                  ],
                },
              },
              {
                qText: '$11,135,729.85',
                qNum: 11135729.849999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12047.32962',
                qNum: 12047.329620000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Sugar Cookies',
                qNum: 'NaN',
                qElemNumber: 121,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11186881',
                      qNum: 11186881.239999995,
                    },
                  ],
                },
              },
              {
                qText: '$11,186,881.24',
                qNum: 11186881.239999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12044.98421',
                qNum: 12044.984209999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Orange Popsicles',
                qNum: 'NaN',
                qElemNumber: 242,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11187400',
                      qNum: 11187400.239999972,
                    },
                  ],
                },
              },
              {
                qText: '$11,187,400.24',
                qNum: 11187400.239999972,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11993.84798',
                qNum: 11993.847979999979,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Squash',
                qNum: 'NaN',
                qElemNumber: 40,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11301084',
                      qNum: 11301084.029999983,
                    },
                  ],
                },
              },
              {
                qText: '$11,301,084.03',
                qNum: 11301084.029999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11977.04079',
                qNum: 11977.040789999985,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Turkey TV Dinner',
                qNum: 'NaN',
                qElemNumber: 281,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10841013',
                      qNum: 10841012.919999992,
                    },
                  ],
                },
              },
              {
                qText: '$10,841,012.92',
                qNum: 10841012.919999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11968.87364',
                qNum: 11968.873639999962,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Corn Chips',
                qNum: 'NaN',
                qElemNumber: 55,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11205071',
                      qNum: 11205070.540000007,
                    },
                  ],
                },
              },
              {
                qText: '$11,205,070.54',
                qNum: 11205070.540000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11929.41385',
                qNum: 11929.413849999988,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Colony Cranberry Muffins',
                qNum: 'NaN',
                qElemNumber: 375,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11138976',
                      qNum: 11138976.309999984,
                    },
                  ],
                },
              },
              {
                qText: '$11,138,976.31',
                qNum: 11138976.309999984,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11890.03009',
                qNum: 11890.030089999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'American Beef Bologna',
                qNum: 'NaN',
                qElemNumber: 532,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10962846',
                      qNum: 10962846.249999994,
                    },
                  ],
                },
              },
              {
                qText: '$10,962,846.25',
                qNum: 10962846.249999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11863.9618',
                qNum: 11863.961799999963,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Canned Tuna in Water',
                qNum: 'NaN',
                qElemNumber: 527,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11025969',
                      qNum: 11025968.99,
                    },
                  ],
                },
              },
              {
                qText: '$11,025,968.99',
                qNum: 11025968.99,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11847.64542',
                qNum: 11847.64542000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Fuji Apples',
                qNum: 'NaN',
                qElemNumber: 674,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11152601',
                      qNum: 11152601.330000004,
                    },
                  ],
                },
              },
              {
                qText: '$11,152,601.33',
                qNum: 11152601.330000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11791.23447',
                qNum: 11791.234470000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Frozen Cauliflower',
                qNum: 'NaN',
                qElemNumber: 473,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10786864',
                      qNum: 10786864.099999998,
                    },
                  ],
                },
              },
              {
                qText: '$10,786,864.10',
                qNum: 10786864.099999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11768.62292',
                qNum: 11768.622919999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Low Fat Chips',
                qNum: 'NaN',
                qElemNumber: 748,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10975785',
                      qNum: 10975785.220000003,
                    },
                  ],
                },
              },
              {
                qText: '$10,975,785.22',
                qNum: 10975785.220000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11738.41807',
                qNum: 11738.41807,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Graham Crackers',
                qNum: 'NaN',
                qElemNumber: 377,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10617143',
                      qNum: 10617142.839999977,
                    },
                  ],
                },
              },
              {
                qText: '$10,617,142.84',
                qNum: 10617142.839999977,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11736.54366',
                qNum: 11736.54366,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Grape Jam',
                qNum: 'NaN',
                qElemNumber: 662,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10871721',
                      qNum: 10871720.59999999,
                    },
                  ],
                },
              },
              {
                qText: '$10,871,720.60',
                qNum: 10871720.59999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11732.43094',
                qNum: 11732.430939999984,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fabulous Apple Drink',
                qNum: 'NaN',
                qElemNumber: 8,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11040600',
                      qNum: 11040599.549999984,
                    },
                  ],
                },
              },
              {
                qText: '$11,040,599.55',
                qNum: 11040599.549999984,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11719.83823',
                qNum: 11719.838229999985,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Ice Cream',
                qNum: 'NaN',
                qElemNumber: 214,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11001398',
                      qNum: 11001397.800000018,
                    },
                  ],
                },
              },
              {
                qText: '$11,001,397.80',
                qNum: 11001397.800000018,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11702.41275',
                qNum: 11702.412750000016,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Canola Oil',
                qNum: 'NaN',
                qElemNumber: 160,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10740206',
                      qNum: 10740206.330000006,
                    },
                  ],
                },
              },
              {
                qText: '$10,740,206.33',
                qNum: 10740206.330000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11667.48536',
                qNum: 11667.48535999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Chicken Ramen Soup',
                qNum: 'NaN',
                qElemNumber: 628,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10725864',
                      qNum: 10725864.210000008,
                    },
                  ],
                },
              },
              {
                qText: '$10,725,864.21',
                qNum: 10725864.210000008,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11592.14987',
                qNum: 11592.14986999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Low Fat Apple Butter',
                qNum: 'NaN',
                qElemNumber: 373,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10364596',
                      qNum: 10364595.709999993,
                    },
                  ],
                },
              },
              {
                qText: '$10,364,595.71',
                qNum: 10364595.709999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11567.60038',
                qNum: 11567.600379999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson Chocolate Milk',
                qNum: 'NaN',
                qElemNumber: 496,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10802886',
                      qNum: 10802885.639999988,
                    },
                  ],
                },
              },
              {
                qText: '$10,802,885.64',
                qNum: 10802885.639999988,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11535.24815',
                qNum: 11535.248149999954,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Canned Beets',
                qNum: 'NaN',
                qElemNumber: 435,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10744045',
                      qNum: 10744045.119999997,
                    },
                  ],
                },
              },
              {
                qText: '$10,744,045.12',
                qNum: 10744045.119999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '22',
                qNum: 22,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11529.07318',
                qNum: 11529.07317999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Green Pepper',
                qNum: 'NaN',
                qElemNumber: 330,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10671857',
                      qNum: 10671856.609999994,
                    },
                  ],
                },
              },
              {
                qText: '$10,671,856.61',
                qNum: 10671856.609999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11495.49293',
                qNum: 11495.492929999984,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club String Cheese',
                qNum: 'NaN',
                qElemNumber: 530,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10654013',
                      qNum: 10654012.909999983,
                    },
                  ],
                },
              },
              {
                qText: '$10,654,012.91',
                qNum: 10654012.909999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11479.37448',
                qNum: 11479.374479999986,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Large Canned Shrimp',
                qNum: 'NaN',
                qElemNumber: 640,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10491641',
                      qNum: 10491640.670000013,
                    },
                  ],
                },
              },
              {
                qText: '$10,491,640.67',
                qNum: 10491640.670000013,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11443.07881',
                qNum: 11443.078810000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Buttered Popcorn',
                qNum: 'NaN',
                qElemNumber: 462,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10735312',
                      qNum: 10735312.160000006,
                    },
                  ],
                },
              },
              {
                qText: '$10,735,312.16',
                qNum: 10735312.160000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11421.01668',
                qNum: 11421.016680000026,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Tomatos',
                qNum: 'NaN',
                qElemNumber: 296,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10187936',
                      qNum: 10187935.539999982,
                    },
                  ],
                },
              },
              {
                qText: '$10,187,935.54',
                qNum: 10187935.539999982,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11371.56213',
                qNum: 11371.562129999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Corn Oil',
                qNum: 'NaN',
                qElemNumber: 29,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10618348',
                      qNum: 10618347.74000001,
                    },
                  ],
                },
              },
              {
                qText: '$10,618,347.74',
                qNum: 10618347.74000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11360.86593',
                qNum: 11360.865929999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Thresher Semi-Sweet Chocolate Bar',
                qNum: 'NaN',
                qElemNumber: 133,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10747724',
                      qNum: 10747723.899999972,
                    },
                  ],
                },
              },
              {
                qText: '$10,747,723.90',
                qNum: 10747723.899999972,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11333.3557',
                qNum: 11333.35569999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Frosted Donuts',
                qNum: 'NaN',
                qElemNumber: 556,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10450231',
                      qNum: 10450230.589999992,
                    },
                  ],
                },
              },
              {
                qText: '$10,450,230.59',
                qNum: 10450230.589999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11332.55566',
                qNum: 11332.555659999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Great Rye Bread',
                qNum: 'NaN',
                qElemNumber: 384,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10183683',
                      qNum: 10183682.989999987,
                    },
                  ],
                },
              },
              {
                qText: '$10,183,682.99',
                qNum: 10183682.989999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11316.8094',
                qNum: 11316.809399999971,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Low Fat Waffles',
                qNum: 'NaN',
                qElemNumber: 204,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10812508',
                      qNum: 10812507.979999999,
                    },
                  ],
                },
              },
              {
                qText: '$10,812,507.98',
                qNum: 10812507.979999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11296.05935',
                qNum: 11296.059349999989,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big City Canned Mixed Fruit',
                qNum: 'NaN',
                qElemNumber: 111,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10429692',
                      qNum: 10429692.299999982,
                    },
                  ],
                },
              },
              {
                qText: '$10,429,692.30',
                qNum: 10429692.299999982,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11240.60791',
                qNum: 11240.607909999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Frozen Broccoli',
                qNum: 'NaN',
                qElemNumber: 643,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10552610',
                      qNum: 10552609.739999989,
                    },
                  ],
                },
              },
              {
                qText: '$10,552,609.74',
                qNum: 10552609.739999989,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11202.75214',
                qNum: 11202.752139999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Beets',
                qNum: 'NaN',
                qElemNumber: 119,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10369829',
                      qNum: 10369828.760000004,
                    },
                  ],
                },
              },
              {
                qText: '$10,369,828.76',
                qNum: 10369828.760000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11168.73787',
                qNum: 11168.737869999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'American Pimento Loaf',
                qNum: 'NaN',
                qElemNumber: 415,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10386356',
                      qNum: 10386356.030000001,
                    },
                  ],
                },
              },
              {
                qText: '$10,386,356.03',
                qNum: 10386356.030000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11159.20526',
                qNum: 11159.205259999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Graham Crackers',
                qNum: 'NaN',
                qElemNumber: 526,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10193887',
                      qNum: 10193887.099999988,
                    },
                  ],
                },
              },
              {
                qText: '$10,193,887.10',
                qNum: 10193887.099999988,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11153.36134',
                qNum: 11153.361339999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club Chocolate Milk',
                qNum: 'NaN',
                qElemNumber: 582,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10109419',
                      qNum: 10109419.369999984,
                    },
                  ],
                },
              },
              {
                qText: '$10,109,419.37',
                qNum: 10109419.369999984,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11136.78776',
                qNum: 11136.787759999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club Mild Cheddar Cheese',
                qNum: 'NaN',
                qElemNumber: 726,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10128164',
                      qNum: 10128163.75999998,
                    },
                  ],
                },
              },
              {
                qText: '$10,128,163.76',
                qNum: 10128163.75999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11118.28267',
                qNum: 11118.282669999991,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Red Spade Sliced Chicken',
                qNum: 'NaN',
                qElemNumber: 654,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9945058',
                      qNum: 9945057.929999983,
                    },
                  ],
                },
              },
              {
                qText: '$9,945,057.93',
                qNum: 9945057.929999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11082.81091',
                qNum: 11082.810909999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fabulous Apple Juice',
                qNum: 'NaN',
                qElemNumber: 698,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10343192',
                      qNum: 10343192.029999997,
                    },
                  ],
                },
              },
              {
                qText: '$10,343,192.03',
                qNum: 10343192.029999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11077.80657',
                qNum: 11077.80656999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Low Fat Popcorn',
                qNum: 'NaN',
                qElemNumber: 113,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10242644',
                      qNum: 10242643.839999992,
                    },
                  ],
                },
              },
              {
                qText: '$10,242,643.84',
                qNum: 10242643.839999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11071.53233',
                qNum: 11071.532329999976,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Sugar Cookies',
                qNum: 'NaN',
                qElemNumber: 428,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10177251',
                      qNum: 10177251.489999983,
                    },
                  ],
                },
              },
              {
                qText: '$10,177,251.49',
                qNum: 10177251.489999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10948.65728',
                qNum: 10948.657279999985,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Grape Preserves',
                qNum: 'NaN',
                qElemNumber: 259,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10046120',
                      qNum: 10046120.350000001,
                    },
                  ],
                },
              },
              {
                qText: '$10,046,120.35',
                qNum: 10046120.350000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10919.8454',
                qNum: 10919.845399999991,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Moms Beef Bologna',
                qNum: 'NaN',
                qElemNumber: 250,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10307799',
                      qNum: 10307798.529999984,
                    },
                  ],
                },
              },
              {
                qText: '$10,307,798.53',
                qNum: 10307798.529999984,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10893.8731',
                qNum: 10893.873099999988,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Grape Popsicles',
                qNum: 'NaN',
                qElemNumber: 64,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10148718',
                      qNum: 10148717.979999986,
                    },
                  ],
                },
              },
              {
                qText: '$10,148,717.98',
                qNum: 10148717.979999986,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10879.83836',
                qNum: 10879.838359999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Fancy Canned Anchovies',
                qNum: 'NaN',
                qElemNumber: 689,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9948405',
                      qNum: 9948405.310000017,
                    },
                  ],
                },
              },
              {
                qText: '$9,948,405.31',
                qNum: 9948405.310000017,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10858.78641',
                qNum: 10858.786409999992,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Canned Peanuts',
                qNum: 'NaN',
                qElemNumber: 211,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10036805',
                      qNum: 10036805.27999998,
                    },
                  ],
                },
              },
              {
                qText: '$10,036,805.28',
                qNum: 10036805.27999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10817.67666',
                qNum: 10817.676659999968,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Blueberry Waffles',
                qNum: 'NaN',
                qElemNumber: 606,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10177691',
                      qNum: 10177691.480000006,
                    },
                  ],
                },
              },
              {
                qText: '$10,177,691.48',
                qNum: 10177691.480000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10813.4182',
                qNum: 10813.418199999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Regular Coffee',
                qNum: 'NaN',
                qElemNumber: 661,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10097765',
                      qNum: 10097764.530000001,
                    },
                  ],
                },
              },
              {
                qText: '$10,097,764.53',
                qNum: 10097764.530000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10796.31455',
                qNum: 10796.314550000012,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Washington Diet Soda',
                qNum: 'NaN',
                qElemNumber: 168,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10241134',
                      qNum: 10241133.600000001,
                    },
                  ],
                },
              },
              {
                qText: '$10,241,133.60',
                qNum: 10241133.600000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10785.34788',
                qNum: 10785.347879999976,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Cutting Edge Potato Salad',
                qNum: 'NaN',
                qElemNumber: 778,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9965261',
                      qNum: 9965261.139999982,
                    },
                  ],
                },
              },
              {
                qText: '$9,965,261.14',
                qNum: 9965261.139999982,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10753.16436',
                qNum: 10753.164359999992,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Low Fat BBQ Chips',
                qNum: 'NaN',
                qElemNumber: 412,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10098847',
                      qNum: 10098846.570000006,
                    },
                  ],
                },
              },
              {
                qText: '$10,098,846.57',
                qNum: 10098846.570000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10736.83662',
                qNum: 10736.83662000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Buttered Popcorn',
                qNum: 'NaN',
                qElemNumber: 592,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9955805',
                      qNum: 9955805.11999999,
                    },
                  ],
                },
              },
              {
                qText: '$9,955,805.12',
                qNum: 9955805.11999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10689.89773',
                qNum: 10689.897729999984,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'American Foot-Long Hot Dogs',
                qNum: 'NaN',
                qElemNumber: 535,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10036646',
                      qNum: 10036646.369999986,
                    },
                  ],
                },
              },
              {
                qText: '$10,036,646.37',
                qNum: 10036646.369999986,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10688.02354',
                qNum: 10688.023539999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Regular Ramen Soup',
                qNum: 'NaN',
                qElemNumber: 737,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9643044',
                      qNum: 9643044.309999987,
                    },
                  ],
                },
              },
              {
                qText: '$9,643,044.31',
                qNum: 9643044.309999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10645.29898',
                qNum: 10645.298980000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fantastic Wheat Bread',
                qNum: 'NaN',
                qElemNumber: 301,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9581423',
                      qNum: 9581422.76999999,
                    },
                  ],
                },
              },
              {
                qText: '$9,581,422.77',
                qNum: 9581422.76999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10636.04501',
                qNum: 10636.045009999985,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Blueberry Waffles',
                qNum: 'NaN',
                qElemNumber: 605,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9668228',
                      qNum: 9668228.169999994,
                    },
                  ],
                },
              },
              {
                qText: '$9,668,228.17',
                qNum: 9668228.169999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10622.92747',
                qNum: 10622.927469999968,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Lemon Popsicles',
                qNum: 'NaN',
                qElemNumber: 379,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9737680',
                      qNum: 9737680.189999994,
                    },
                  ],
                },
              },
              {
                qText: '$9,737,680.19',
                qNum: 9737680.189999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10583.21125',
                qNum: 10583.211249999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Thresher Mints',
                qNum: 'NaN',
                qElemNumber: 103,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9970844',
                      qNum: 9970843.630000003,
                    },
                  ],
                },
              },
              {
                qText: '$9,970,843.63',
                qNum: 9970843.630000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10577.76512',
                qNum: 10577.765119999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better Havarti Cheese',
                qNum: 'NaN',
                qElemNumber: 421,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9802660',
                      qNum: 9802660.02999999,
                    },
                  ],
                },
              },
              {
                qText: '$9,802,660.03',
                qNum: 9802660.02999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10571.03171',
                qNum: 10571.031709999983,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Mandarin Oranges',
                qNum: 'NaN',
                qElemNumber: 344,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9900121',
                      qNum: 9900121.490000002,
                    },
                  ],
                },
              },
              {
                qText: '$9,900,121.49',
                qNum: 9900121.490000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10566.5063',
                qNum: 10566.506299999985,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Canned Yams',
                qNum: 'NaN',
                qElemNumber: 764,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9903730',
                      qNum: 9903730.250000022,
                    },
                  ],
                },
              },
              {
                qText: '$9,903,730.25',
                qNum: 9903730.250000022,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10500.91971',
                qNum: 10500.919709999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast No Salt Popcorn',
                qNum: 'NaN',
                qElemNumber: 142,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9420220',
                      qNum: 9420220.309999984,
                    },
                  ],
                },
              },
              {
                qText: '$9,420,220.31',
                qNum: 9420220.309999984,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10372.85262',
                qNum: 10372.852619999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Discover Rice Medly',
                qNum: 'NaN',
                qElemNumber: 405,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9387543',
                      qNum: 9387543.019999996,
                    },
                  ],
                },
              },
              {
                qText: '$9,387,543.02',
                qNum: 9387543.019999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10356.23205',
                qNum: 10356.23204999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Canned Peas',
                qNum: 'NaN',
                qElemNumber: 441,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9616610',
                      qNum: 9616609.569999976,
                    },
                  ],
                },
              },
              {
                qText: '$9,616,609.57',
                qNum: 9616609.569999976,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10351.05196',
                qNum: 10351.051959999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'American Potato Salad',
                qNum: 'NaN',
                qElemNumber: 163,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9547818',
                      qNum: 9547817.989999998,
                    },
                  ],
                },
              },
              {
                qText: '$9,547,817.99',
                qNum: 9547817.989999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10340.59923',
                qNum: 10340.599229999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Good Light Beer',
                qNum: 'NaN',
                qElemNumber: 175,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9277285',
                      qNum: 9277285.339999989,
                    },
                  ],
                },
              },
              {
                qText: '$9,277,285.34',
                qNum: 9277285.339999989,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10318.59502',
                qNum: 10318.595019999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Token Apple Juice',
                qNum: 'NaN',
                qElemNumber: 177,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9664753',
                      qNum: 9664752.989999989,
                    },
                  ],
                },
              },
              {
                qText: '$9,664,752.99',
                qNum: 9664752.989999989,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10305.36895',
                qNum: 10305.36894999996,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Colony Pumpernickel Bread',
                qNum: 'NaN',
                qElemNumber: 706,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9531050',
                      qNum: 9531049.53999998,
                    },
                  ],
                },
              },
              {
                qText: '$9,531,049.54',
                qNum: 9531049.53999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10295.03406',
                qNum: 10295.03405999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Tangerines',
                qNum: 'NaN',
                qElemNumber: 469,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9443313',
                      qNum: 9443313.139999993,
                    },
                  ],
                },
              },
              {
                qText: '$9,443,313.14',
                qNum: 9443313.139999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '20',
                qNum: 20,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10269.54106',
                qNum: 10269.54105999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Choice Malted Milk Balls',
                qNum: 'NaN',
                qElemNumber: 307,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9233583',
                      qNum: 9233583.319999997,
                    },
                  ],
                },
              },
              {
                qText: '$9,233,583.32',
                qNum: 9233583.319999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10231.49664',
                qNum: 10231.496639999981,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Mixed Nuts',
                qNum: 'NaN',
                qElemNumber: 266,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9609133',
                      qNum: 9609133.13999999,
                    },
                  ],
                },
              },
              {
                qText: '$9,609,133.14',
                qNum: 9609133.13999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10231.23435',
                qNum: 10231.234349999986,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Turkey Noodle Soup',
                qNum: 'NaN',
                qElemNumber: 253,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9437847',
                      qNum: 9437846.619999994,
                    },
                  ],
                },
              },
              {
                qText: '$9,437,846.62',
                qNum: 9437846.619999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10197.10052',
                qNum: 10197.100519999967,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Mushrooms',
                qNum: 'NaN',
                qElemNumber: 380,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9323920',
                      qNum: 9323919.859999975,
                    },
                  ],
                },
              },
              {
                qText: '$9,323,919.86',
                qNum: 9323919.859999975,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10155.41954',
                qNum: 10155.419539999977,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Lemon Cookies',
                qNum: 'NaN',
                qElemNumber: 705,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9069046',
                      qNum: 9069045.559999999,
                    },
                  ],
                },
              },
              {
                qText: '$9,069,045.56',
                qNum: 9069045.559999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10145.94256',
                qNum: 10145.942559999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Sweet Peas',
                qNum: 'NaN',
                qElemNumber: 710,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9474491',
                      qNum: 9474490.539999994,
                    },
                  ],
                },
              },
              {
                qText: '$9,474,490.54',
                qNum: 9474490.539999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10143.61627',
                qNum: 10143.61626999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Apple Preserves',
                qNum: 'NaN',
                qElemNumber: 216,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9679873',
                      qNum: 9679873.480000002,
                    },
                  ],
                },
              },
              {
                qText: '$9,679,873.48',
                qNum: 9679873.480000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10131.04342',
                qNum: 10131.043419999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Strawberry Preserves',
                qNum: 'NaN',
                qElemNumber: 308,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9279285',
                      qNum: 9279284.999999994,
                    },
                  ],
                },
              },
              {
                qText: '$9,279,285.00',
                qNum: 9279284.999999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10124.69071',
                qNum: 10124.690709999977,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Grits',
                qNum: 'NaN',
                qElemNumber: 176,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9084681',
                      qNum: 9084681.189999979,
                    },
                  ],
                },
              },
              {
                qText: '$9,084,681.19',
                qNum: 9084681.189999979,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10108.20397',
                qNum: 10108.203969999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Party Nuts',
                qNum: 'NaN',
                qElemNumber: 414,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9195556',
                      qNum: 9195555.67999999,
                    },
                  ],
                },
              },
              {
                qText: '$9,195,555.68',
                qNum: 9195555.67999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10091.95058',
                qNum: 10091.950579999966,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Garlic',
                qNum: 'NaN',
                qElemNumber: 284,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9292087',
                      qNum: 9292087.399999995,
                    },
                  ],
                },
              },
              {
                qText: '$9,292,087.40',
                qNum: 9292087.399999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10084.09055',
                qNum: 10084.090549999963,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson Low Fat Cottage Cheese',
                qNum: 'NaN',
                qElemNumber: 115,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9352607',
                      qNum: 9352606.979999987,
                    },
                  ],
                },
              },
              {
                qText: '$9,352,606.98',
                qNum: 9352606.979999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10065.62587',
                qNum: 10065.625870000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Chocolate Donuts',
                qNum: 'NaN',
                qElemNumber: 506,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9244583',
                      qNum: 9244583.259999996,
                    },
                  ],
                },
              },
              {
                qText: '$9,244,583.26',
                qNum: 9244583.259999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10033.28783',
                qNum: 10033.287829999988,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Sweet Peas',
                qNum: 'NaN',
                qElemNumber: 541,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8935463',
                      qNum: 8935462.929999994,
                    },
                  ],
                },
              },
              {
                qText: '$8,935,462.93',
                qNum: 8935462.929999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10020.75281',
                qNum: 10020.752809999974,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Canola Oil',
                qNum: 'NaN',
                qElemNumber: 132,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9228216',
                      qNum: 9228215.929999996,
                    },
                  ],
                },
              },
              {
                qText: '$9,228,215.93',
                qNum: 9228215.929999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9890.54518',
                qNum: 9890.54517999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Canned Tuna in Oil',
                qNum: 'NaN',
                qElemNumber: 728,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8843813',
                      qNum: 8843812.859999992,
                    },
                  ],
                },
              },
              {
                qText: '$8,843,812.86',
                qNum: 8843812.859999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9867.40839',
                qNum: 9867.40838999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Frozen Mushroom Pizza',
                qNum: 'NaN',
                qElemNumber: 731,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9188864',
                      qNum: 9188863.999999993,
                    },
                  ],
                },
              },
              {
                qText: '$9,188,864.00',
                qNum: 9188863.999999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9861.26388',
                qNum: 9861.263879999977,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Potato Chips',
                qNum: 'NaN',
                qElemNumber: 261,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9209511',
                      qNum: 9209511.429999994,
                    },
                  ],
                },
              },
              {
                qText: '$9,209,511.43',
                qNum: 9209511.429999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9855.38552',
                qNum: 9855.385519999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Pearl Light Wine',
                qNum: 'NaN',
                qElemNumber: 515,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9081673',
                      qNum: 9081673.15999999,
                    },
                  ],
                },
              },
              {
                qText: '$9,081,673.16',
                qNum: 9081673.15999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9831.6926',
                qNum: 9831.692599999977,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Blueberry Waffles',
                qNum: 'NaN',
                qElemNumber: 626,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8984984',
                      qNum: 8984983.620000008,
                    },
                  ],
                },
              },
              {
                qText: '$8,984,983.62',
                qNum: 8984983.620000008,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9810.02471',
                qNum: 9810.024709999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Chicken TV Dinner',
                qNum: 'NaN',
                qElemNumber: 282,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9045664',
                      qNum: 9045664.330000002,
                    },
                  ],
                },
              },
              {
                qText: '$9,045,664.33',
                qNum: 9045664.330000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9789.93937',
                qNum: 9789.939369999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Chocolate Donuts',
                qNum: 'NaN',
                qElemNumber: 192,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8772374',
                      qNum: 8772374.14999999,
                    },
                  ],
                },
              },
              {
                qText: '$8,772,374.15',
                qNum: 8772374.14999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9742.66694',
                qNum: 9742.66694,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Broccoli',
                qNum: 'NaN',
                qElemNumber: 651,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9309529',
                      qNum: 9309529.109999996,
                    },
                  ],
                },
              },
              {
                qText: '$9,309,529.11',
                qNum: 9309529.109999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9734.99351',
                qNum: 9734.993509999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Ice Cream Sandwich',
                qNum: 'NaN',
                qElemNumber: 554,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9237419',
                      qNum: 9237418.639999997,
                    },
                  ],
                },
              },
              {
                qText: '$9,237,418.64',
                qNum: 9237418.639999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9729.38373',
                qNum: 9729.383729999989,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Fancy Canned Anchovies',
                qNum: 'NaN',
                qElemNumber: 576,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8763561',
                      qNum: 8763560.679999992,
                    },
                  ],
                },
              },
              {
                qText: '$8,763,560.68',
                qNum: 8763560.679999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9630.0603',
                qNum: 9630.060299999985,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fabulous Cranberry Juice',
                qNum: 'NaN',
                qElemNumber: 800,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9069748',
                      qNum: 9069748.409999998,
                    },
                  ],
                },
              },
              {
                qText: '$9,069,748.41',
                qNum: 9069748.409999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9614.38351',
                qNum: 9614.383509999983,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Excellent Mango Drink',
                qNum: 'NaN',
                qElemNumber: 426,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8673556',
                      qNum: 8673555.509999998,
                    },
                  ],
                },
              },
              {
                qText: '$8,673,555.51',
                qNum: 8673555.509999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9594.58654',
                qNum: 9594.586539999966,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better Large Curd Cottage Cheese',
                qNum: 'NaN',
                qElemNumber: 682,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9178140',
                      qNum: 9178139.849999996,
                    },
                  ],
                },
              },
              {
                qText: '$9,178,139.85',
                qNum: 9178139.849999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9530.85344',
                qNum: 9530.853439999979,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Baby Onion',
                qNum: 'NaN',
                qElemNumber: 718,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8897587',
                      qNum: 8897586.610000001,
                    },
                  ],
                },
              },
              {
                qText: '$8,897,586.61',
                qNum: 8897586.610000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9527.08302',
                qNum: 9527.083019999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Great Wheat Bread',
                qNum: 'NaN',
                qElemNumber: 520,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8566346',
                      qNum: 8566346.14000001,
                    },
                  ],
                },
              },
              {
                qText: '$8,566,346.14',
                qNum: 8566346.14000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9463.76513',
                qNum: 9463.765129999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club Sour Cream',
                qNum: 'NaN',
                qElemNumber: 587,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8741534',
                      qNum: 8741534.279999997,
                    },
                  ],
                },
              },
              {
                qText: '$8,741,534.28',
                qNum: 8741534.279999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9462.77322',
                qNum: 9462.773219999988,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Strawberry Jelly',
                qNum: 'NaN',
                qElemNumber: 783,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8685610',
                      qNum: 8685610.209999999,
                    },
                  ],
                },
              },
              {
                qText: '$8,685,610.21',
                qNum: 8685610.209999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9420.39733',
                qNum: 9420.397329999972,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Lemon Popsicles',
                qNum: 'NaN',
                qElemNumber: 687,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8764077',
                      qNum: 8764077.319999993,
                    },
                  ],
                },
              },
              {
                qText: '$8,764,077.32',
                qNum: 8764077.319999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9401.43976',
                qNum: 9401.43975999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Fudge Cookies',
                qNum: 'NaN',
                qElemNumber: 481,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8641067',
                      qNum: 8641067.049999988,
                    },
                  ],
                },
              },
              {
                qText: '$8,641,067.05',
                qNum: 8641067.049999988,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9362.82548',
                qNum: 9362.825479999983,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super French Roast Coffee',
                qNum: 'NaN',
                qElemNumber: 335,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8782228',
                      qNum: 8782227.569999995,
                    },
                  ],
                },
              },
              {
                qText: '$8,782,227.57',
                qNum: 8782227.569999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9280.04386',
                qNum: 9280.043859999972,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Canned String Beans',
                qNum: 'NaN',
                qElemNumber: 513,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8628120',
                      qNum: 8628119.53999999,
                    },
                  ],
                },
              },
              {
                qText: '$8,628,119.54',
                qNum: 8628119.53999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9267.42744',
                qNum: 9267.427439999963,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'American Chicken Hot Dogs',
                qNum: 'NaN',
                qElemNumber: 507,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8622100',
                      qNum: 8622099.540000005,
                    },
                  ],
                },
              },
              {
                qText: '$8,622,099.54',
                qNum: 8622099.540000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '21',
                qNum: 21,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9137.19884',
                qNum: 9137.198839999983,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Lemons',
                qNum: 'NaN',
                qElemNumber: 424,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8398474',
                      qNum: 8398474.029999994,
                    },
                  ],
                },
              },
              {
                qText: '$8,398,474.03',
                qNum: 8398474.029999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9133.78889',
                qNum: 9133.788890000013,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club Blueberry Yogurt',
                qNum: 'NaN',
                qElemNumber: 649,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8540812',
                      qNum: 8540811.529999988,
                    },
                  ],
                },
              },
              {
                qText: '$8,540,811.53',
                qNum: 8540811.529999988,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9106.22141',
                qNum: 9106.221409999986,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Turkey TV Dinner',
                qNum: 'NaN',
                qElemNumber: 207,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8549103',
                      qNum: 8549103.34,
                    },
                  ],
                },
              },
              {
                qText: '$8,549,103.34',
                qNum: 8549103.34,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9085.63179',
                qNum: 9085.631789999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Prepared Salad',
                qNum: 'NaN',
                qElemNumber: 711,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8146043',
                      qNum: 8146043.350000005,
                    },
                  ],
                },
              },
              {
                qText: '$8,146,043.35',
                qNum: 8146043.350000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9014.14921',
                qNum: 9014.149209999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Good White Zinfandel Wine',
                qNum: 'NaN',
                qElemNumber: 76,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8419894',
                      qNum: 8419893.969999999,
                    },
                  ],
                },
              },
              {
                qText: '$8,419,893.97',
                qNum: 8419893.969999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9003.32525',
                qNum: 9003.32524999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Lime Popsicles',
                qNum: 'NaN',
                qElemNumber: 24,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8554292',
                      qNum: 8554291.699999994,
                    },
                  ],
                },
              },
              {
                qText: '$8,554,291.70',
                qNum: 8554291.699999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8983.43793',
                qNum: 8983.437929999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Oranges',
                qNum: 'NaN',
                qElemNumber: 411,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8115514',
                      qNum: 8115514.340000005,
                    },
                  ],
                },
              },
              {
                qText: '$8,115,514.34',
                qNum: 8115514.340000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8977.56851',
                qNum: 8977.568509999963,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Frozen Chicken Breast',
                qNum: 'NaN',
                qElemNumber: 545,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8118338',
                      qNum: 8118337.900000003,
                    },
                  ],
                },
              },
              {
                qText: '$8,118,337.90',
                qNum: 8118337.900000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8937.56217',
                qNum: 8937.562169999974,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Token Strawberry Drink',
                qNum: 'NaN',
                qElemNumber: 690,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8065779',
                      qNum: 8065779.119999999,
                    },
                  ],
                },
              },
              {
                qText: '$8,065,779.12',
                qNum: 8065779.119999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8912.84027',
                qNum: 8912.840269999979,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Frozen Chicken Wings',
                qNum: 'NaN',
                qElemNumber: 712,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8519180',
                      qNum: 8519180.359999998,
                    },
                  ],
                },
              },
              {
                qText: '$8,519,180.36',
                qNum: 8519180.359999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8897.42382',
                qNum: 8897.423819999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Discover Thai Rice',
                qNum: 'NaN',
                qElemNumber: 595,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7961223',
                      qNum: 7961223.069999997,
                    },
                  ],
                },
              },
              {
                qText: '$7,961,223.07',
                qNum: 7961223.069999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8890.59617',
                qNum: 8890.59616999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Medalist Rice Medly',
                qNum: 'NaN',
                qElemNumber: 575,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7868610',
                      qNum: 7868609.619999996,
                    },
                  ],
                },
              },
              {
                qText: '$7,868,609.62',
                qNum: 7868609.619999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8877.65206',
                qNum: 8877.652059999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fantastic Blueberry Muffins',
                qNum: 'NaN',
                qElemNumber: 454,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8331855',
                      qNum: 8331854.500000005,
                    },
                  ],
                },
              },
              {
                qText: '$8,331,854.50',
                qNum: 8331854.500000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8860.44599',
                qNum: 8860.445989999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best White Sugar',
                qNum: 'NaN',
                qElemNumber: 455,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8248488',
                      qNum: 8248487.699999998,
                    },
                  ],
                },
              },
              {
                qText: '$8,248,487.70',
                qNum: 8248487.699999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8826.76141',
                qNum: 8826.76140999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Red Spade Corned Beef',
                qNum: 'NaN',
                qElemNumber: 552,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8168519',
                      qNum: 8168519.320000001,
                    },
                  ],
                },
              },
              {
                qText: '$8,168,519.32',
                qNum: 8168519.320000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8815.22877',
                qNum: 8815.228769999989,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better Whole Milk',
                qNum: 'NaN',
                qElemNumber: 736,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8416226',
                      qNum: 8416225.659999989,
                    },
                  ],
                },
              },
              {
                qText: '$8,416,225.66',
                qNum: 8416225.659999989,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8806.86764',
                qNum: 8806.86763999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Jeffers Oatmeal',
                qNum: 'NaN',
                qElemNumber: 625,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8421578',
                      qNum: 8421577.520000005,
                    },
                  ],
                },
              },
              {
                qText: '$8,421,577.52',
                qNum: 8421577.520000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8782.85165',
                qNum: 8782.851649999993,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Green Ribbon Canned Peaches',
                qNum: 'NaN',
                qElemNumber: 578,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7972120',
                      qNum: 7972120.2799999975,
                    },
                  ],
                },
              },
              {
                qText: '$7,972,120.28',
                qNum: 7972120.2799999975,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8754.368',
                qNum: 8754.367999999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Thresher Malted Milk Balls',
                qNum: 'NaN',
                qElemNumber: 87,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8485175',
                      qNum: 8485175.070000006,
                    },
                  ],
                },
              },
              {
                qText: '$8,485,175.07',
                qNum: 8485175.070000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8752.35117',
                qNum: 8752.35116999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Chocolate Donuts',
                qNum: 'NaN',
                qElemNumber: 482,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8269133',
                      qNum: 8269132.900000003,
                    },
                  ],
                },
              },
              {
                qText: '$8,269,132.90',
                qNum: 8269132.900000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8751.12208',
                qNum: 8751.122079999992,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Radius Corn Puffs',
                qNum: 'NaN',
                qElemNumber: 558,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8088504',
                      qNum: 8088503.500000007,
                    },
                  ],
                },
              },
              {
                qText: '$8,088,503.50',
                qNum: 8088503.500000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8726.13814',
                qNum: 8726.138139999988,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Turkey Noodle Soup',
                qNum: 'NaN',
                qElemNumber: 700,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7944981',
                      qNum: 7944980.540000001,
                    },
                  ],
                },
              },
              {
                qText: '$7,944,980.54',
                qNum: 7944980.540000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8685.02087',
                qNum: 8685.020869999973,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better Muenster Cheese',
                qNum: 'NaN',
                qElemNumber: 561,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8184821',
                      qNum: 8184821.499999997,
                    },
                  ],
                },
              },
              {
                qText: '$8,184,821.50',
                qNum: 8184821.499999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8645.79846',
                qNum: 8645.798459999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Choice White Chocolate Bar',
                qNum: 'NaN',
                qElemNumber: 776,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8007376',
                      qNum: 8007376.419999999,
                    },
                  ],
                },
              },
              {
                qText: '$8,007,376.42',
                qNum: 8007376.419999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8641.58048',
                qNum: 8641.580479999979,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Asparagus',
                qNum: 'NaN',
                qElemNumber: 228,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7702039',
                      qNum: 7702039.240000002,
                    },
                  ],
                },
              },
              {
                qText: '$7,702,039.24',
                qNum: 7702039.240000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8639.63229',
                qNum: 8639.63228999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Fancy Canned Oysters',
                qNum: 'NaN',
                qElemNumber: 91,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7803380',
                      qNum: 7803379.640000005,
                    },
                  ],
                },
              },
              {
                qText: '$7,803,379.64',
                qNum: 7803379.640000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8629.90031',
                qNum: 8629.900309999979,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Cauliflower',
                qNum: 'NaN',
                qElemNumber: 53,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7928723',
                      qNum: 7928723.380000003,
                    },
                  ],
                },
              },
              {
                qText: '$7,928,723.38',
                qNum: 7928723.380000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8607.41779',
                qNum: 8607.417789999983,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson Head Cheese',
                qNum: 'NaN',
                qElemNumber: 492,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7749845',
                      qNum: 7749845.259999999,
                    },
                  ],
                },
              },
              {
                qText: '$7,749,845.26',
                qNum: 7749845.259999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8577.94511',
                qNum: 8577.945109999971,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Golden Raisins',
                qNum: 'NaN',
                qElemNumber: 286,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7886896',
                      qNum: 7886896.030000008,
                    },
                  ],
                },
              },
              {
                qText: '$7,886,896.03',
                qNum: 7886896.030000008,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8571.69645',
                qNum: 8571.69644999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Peaches',
                qNum: 'NaN',
                qElemNumber: 584,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7587832',
                      qNum: 7587832.360000011,
                    },
                  ],
                },
              },
              {
                qText: '$7,587,832.36',
                qNum: 7587832.360000011,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8569.17282',
                qNum: 8569.172820000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Orange Popsicles',
                qNum: 'NaN',
                qElemNumber: 460,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7708205',
                      qNum: 7708204.679999999,
                    },
                  ],
                },
              },
              {
                qText: '$7,708,204.68',
                qNum: 7708204.679999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8552.33991',
                qNum: 8552.339909999988,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Fuji Apples',
                qNum: 'NaN',
                qElemNumber: 294,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7884169',
                      qNum: 7884168.690000008,
                    },
                  ],
                },
              },
              {
                qText: '$7,884,168.69',
                qNum: 7884168.690000008,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8548.34154',
                qNum: 8548.341539999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Raisins',
                qNum: 'NaN',
                qElemNumber: 766,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7700239',
                      qNum: 7700238.679999995,
                    },
                  ],
                },
              },
              {
                qText: '$7,700,238.68',
                qNum: 7700238.679999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8540.30312',
                qNum: 8540.303119999977,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Brown Sugar',
                qNum: 'NaN',
                qElemNumber: 667,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7823689',
                      qNum: 7823688.5299999975,
                    },
                  ],
                },
              },
              {
                qText: '$7,823,688.53',
                qNum: 7823688.5299999975,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8505.08154',
                qNum: 8505.08153999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla Sour Cream',
                qNum: 'NaN',
                qElemNumber: 366,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7941717',
                      qNum: 7941717.470000003,
                    },
                  ],
                },
              },
              {
                qText: '$7,941,717.47',
                qNum: 7941717.470000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8493.40046',
                qNum: 8493.400459999979,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Baby Onion',
                qNum: 'NaN',
                qElemNumber: 539,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7677343',
                      qNum: 7677343.17,
                    },
                  ],
                },
              },
              {
                qText: '$7,677,343.17',
                qNum: 7677343.17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8463.13527',
                qNum: 8463.135269999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Grape Jelly',
                qNum: 'NaN',
                qElemNumber: 217,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7910209',
                      qNum: 7910208.800000011,
                    },
                  ],
                },
              },
              {
                qText: '$7,910,208.80',
                qNum: 7910208.800000011,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8450.18124',
                qNum: 8450.181239999985,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla Cheese Spread',
                qNum: 'NaN',
                qElemNumber: 567,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7586248',
                      qNum: 7586248.480000007,
                    },
                  ],
                },
              },
              {
                qText: '$7,586,248.48',
                qNum: 7586248.480000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8435.4138',
                qNum: 8435.413799999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Frozen Sausage Pizza',
                qNum: 'NaN',
                qElemNumber: 604,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7585417',
                      qNum: 7585417.020000004,
                    },
                  ],
                },
              },
              {
                qText: '$7,585,417.02',
                qNum: 7585417.020000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8347.41534',
                qNum: 8347.415339999983,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Potato Chips',
                qNum: 'NaN',
                qElemNumber: 692,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7861386',
                      qNum: 7861386.13,
                    },
                  ],
                },
              },
              {
                qText: '$7,861,386.13',
                qNum: 7861386.13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '19',
                qNum: 19,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8323.11208',
                qNum: 8323.112079999972,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Medal Large Eggs',
                qNum: 'NaN',
                qElemNumber: 430,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7550155',
                      qNum: 7550155.229999995,
                    },
                  ],
                },
              },
              {
                qText: '$7,550,155.23',
                qNum: 7550155.229999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '18',
                qNum: 18,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8321.98365',
                qNum: 8321.983649999976,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson Blueberry Yogurt',
                qNum: 'NaN',
                qElemNumber: 499,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7391531',
                      qNum: 7391530.819999996,
                    },
                  ],
                },
              },
              {
                qText: '$7,391,530.82',
                qNum: 7391530.819999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8312.69943',
                qNum: 8312.699429999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Red Delcious Apples',
                qNum: 'NaN',
                qElemNumber: 702,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7420737',
                      qNum: 7420737.220000011,
                    },
                  ],
                },
              },
              {
                qText: '$7,420,737.22',
                qNum: 7420737.220000011,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8306.49766',
                qNum: 8306.497660000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Frozen Chicken Wings',
                qNum: 'NaN',
                qElemNumber: 510,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7323633',
                      qNum: 7323632.970000009,
                    },
                  ],
                },
              },
              {
                qText: '$7,323,632.97',
                qNum: 7323632.970000009,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8300.49244',
                qNum: 8300.492439999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Fancy Plums',
                qNum: 'NaN',
                qElemNumber: 447,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7692952',
                      qNum: 7692952.329999991,
                    },
                  ],
                },
              },
              {
                qText: '$7,692,952.33',
                qNum: 7692952.329999991,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8281.73285',
                qNum: 8281.732849999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Peaches',
                qNum: 'NaN',
                qElemNumber: 621,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7948320',
                      qNum: 7948320.000000002,
                    },
                  ],
                },
              },
              {
                qText: '$7,948,320.00',
                qNum: 7948320.000000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8265.49672',
                qNum: 8265.496719999981,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Medalist Spaghetti',
                qNum: 'NaN',
                qElemNumber: 471,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7409855',
                      qNum: 7409855.280000005,
                    },
                  ],
                },
              },
              {
                qText: '$7,409,855.28',
                qNum: 7409855.280000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8255.39115',
                qNum: 8255.391150000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Great English Muffins',
                qNum: 'NaN',
                qElemNumber: 611,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7581747',
                      qNum: 7581747.359999997,
                    },
                  ],
                },
              },
              {
                qText: '$7,581,747.36',
                qNum: 7581747.359999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8254.3349',
                qNum: 8254.334900000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Columbian Coffee',
                qNum: 'NaN',
                qElemNumber: 555,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7999867',
                      qNum: 7999867.189999999,
                    },
                  ],
                },
              },
              {
                qText: '$7,999,867.19',
                qNum: 7999867.189999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8234.38445',
                qNum: 8234.384449999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Lemons',
                qNum: 'NaN',
                qElemNumber: 551,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7747664',
                      qNum: 7747664.340000003,
                    },
                  ],
                },
              },
              {
                qText: '$7,747,664.34',
                qNum: 7747664.340000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8197.69399',
                qNum: 8197.69398999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Grape Fruit Roll',
                qNum: 'NaN',
                qElemNumber: 483,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7788880',
                      qNum: 7788879.720000005,
                    },
                  ],
                },
              },
              {
                qText: '$7,788,879.72',
                qNum: 7788879.720000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8194.09206',
                qNum: 8194.092059999977,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Low Fat BBQ Chips',
                qNum: 'NaN',
                qElemNumber: 744,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7703216',
                      qNum: 7703216.269999998,
                    },
                  ],
                },
              },
              {
                qText: '$7,703,216.27',
                qNum: 7703216.269999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8178.40552',
                qNum: 8178.405519999986,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tip Top Lox',
                qNum: 'NaN',
                qElemNumber: 230,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7307825',
                      qNum: 7307825.350000001,
                    },
                  ],
                },
              },
              {
                qText: '$7,307,825.35',
                qNum: 7307825.350000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8166.32748',
                qNum: 8166.327479999968,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Canned Tomatos',
                qNum: 'NaN',
                qElemNumber: 671,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7305144',
                      qNum: 7305144.330000003,
                    },
                  ],
                },
              },
              {
                qText: '$7,305,144.33',
                qNum: 7305144.330000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8148.00747',
                qNum: 8148.007469999984,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Asparagus',
                qNum: 'NaN',
                qElemNumber: 213,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7331431',
                      qNum: 7331431.3599999985,
                    },
                  ],
                },
              },
              {
                qText: '$7,331,431.36',
                qNum: 7331431.3599999985,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8143.02601',
                qNum: 8143.026009999991,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better 1% Milk',
                qNum: 'NaN',
                qElemNumber: 304,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7506380',
                      qNum: 7506380.1,
                    },
                  ],
                },
              },
              {
                qText: '$7,506,380.10',
                qNum: 7506380.1,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8131.88746',
                qNum: 8131.887459999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Low Fat Cookies',
                qNum: 'NaN',
                qElemNumber: 601,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7593346',
                      qNum: 7593346.399999998,
                    },
                  ],
                },
              },
              {
                qText: '$7,593,346.40',
                qNum: 7593346.399999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8128.25199',
                qNum: 8128.251989999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Shitake Mushrooms',
                qNum: 'NaN',
                qElemNumber: 719,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7226092',
                      qNum: 7226091.650000009,
                    },
                  ],
                },
              },
              {
                qText: '$7,226,091.65',
                qNum: 7226091.650000009,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8126.08739',
                qNum: 8126.087390000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Fancy Canned Clams',
                qNum: 'NaN',
                qElemNumber: 537,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7562986',
                      qNum: 7562986.289999998,
                    },
                  ],
                },
              },
              {
                qText: '$7,562,986.29',
                qNum: 7562986.289999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8104.71631',
                qNum: 8104.7163099999825,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Frozen Pancakes',
                qNum: 'NaN',
                qElemNumber: 60,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7336546',
                      qNum: 7336545.719999994,
                    },
                  ],
                },
              },
              {
                qText: '$7,336,545.72',
                qNum: 7336545.719999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8092.5198',
                qNum: 8092.519799999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Fancy Canned Clams',
                qNum: 'NaN',
                qElemNumber: 489,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7267386',
                      qNum: 7267385.869999993,
                    },
                  ],
                },
              },
              {
                qText: '$7,267,385.87',
                qNum: 7267385.869999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8052.19301',
                qNum: 8052.19300999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Canned Tuna in Oil',
                qNum: 'NaN',
                qElemNumber: 458,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7383831',
                      qNum: 7383830.590000003,
                    },
                  ],
                },
              },
              {
                qText: '$7,383,830.59',
                qNum: 7383830.590000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8013.6673',
                qNum: 8013.667299999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Washington Apple Drink',
                qNum: 'NaN',
                qElemNumber: 619,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7325169',
                      qNum: 7325169.319999998,
                    },
                  ],
                },
              },
              {
                qText: '$7,325,169.32',
                qNum: 7325169.319999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7988.62807',
                qNum: 7988.628069999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Frozen Corn',
                qNum: 'NaN',
                qElemNumber: 500,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7593376',
                      qNum: 7593375.899999991,
                    },
                  ],
                },
              },
              {
                qText: '$7,593,375.90',
                qNum: 7593375.899999991,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7961.04277',
                qNum: 7961.04276999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Red Spade Cole Slaw',
                qNum: 'NaN',
                qElemNumber: 590,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7339793',
                      qNum: 7339792.550000005,
                    },
                  ],
                },
              },
              {
                qText: '$7,339,792.55',
                qNum: 7339792.550000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7957.59961',
                qNum: 7957.599609999985,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Cheese Crackers',
                qNum: 'NaN',
                qElemNumber: 528,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7501736',
                      qNum: 7501736.440000001,
                    },
                  ],
                },
              },
              {
                qText: '$7,501,736.44',
                qNum: 7501736.440000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7950.71583',
                qNum: 7950.715830000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Frozen Corn',
                qNum: 'NaN',
                qElemNumber: 645,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7500775',
                      qNum: 7500775.420000008,
                    },
                  ],
                },
              },
              {
                qText: '$7,500,775.42',
                qNum: 7500775.420000008,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7932.71616',
                qNum: 7932.716159999979,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Excellent Apple Drink',
                qNum: 'NaN',
                qElemNumber: 337,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7190715',
                      qNum: 7190714.870000002,
                    },
                  ],
                },
              },
              {
                qText: '$7,190,714.87',
                qNum: 7190714.870000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7902.03602',
                qNum: 7902.036019999971,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Canned Tomatos',
                qNum: 'NaN',
                qElemNumber: 747,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7119279',
                      qNum: 7119278.859999999,
                    },
                  ],
                },
              },
              {
                qText: '$7,119,278.86',
                qNum: 7119278.859999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7891.12636',
                qNum: 7891.126359999991,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Medalist Thai Rice',
                qNum: 'NaN',
                qElemNumber: 485,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7506862',
                      qNum: 7506862.010000004,
                    },
                  ],
                },
              },
              {
                qText: '$7,506,862.01',
                qNum: 7506862.010000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7889.71196',
                qNum: 7889.711959999981,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Beef TV Dinner',
                qNum: 'NaN',
                qElemNumber: 630,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7396358',
                      qNum: 7396357.539999998,
                    },
                  ],
                },
              },
              {
                qText: '$7,396,357.54',
                qNum: 7396357.539999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7864.29321',
                qNum: 7864.293209999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Excellent Diet Soda',
                qNum: 'NaN',
                qElemNumber: 709,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7244248',
                      qNum: 7244247.5299999975,
                    },
                  ],
                },
              },
              {
                qText: '$7,244,247.53',
                qNum: 7244247.5299999975,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7789.43917',
                qNum: 7789.439169999969,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Swell Canned Peaches',
                qNum: 'NaN',
                qElemNumber: 753,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7070166',
                      qNum: 7070165.7000000095,
                    },
                  ],
                },
              },
              {
                qText: '$7,070,165.70',
                qNum: 7070165.7000000095,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7784.81491',
                qNum: 7784.814910000006,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'American Roasted Chicken',
                qNum: 'NaN',
                qElemNumber: 509,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7309435',
                      qNum: 7309434.68,
                    },
                  ],
                },
              },
              {
                qText: '$7,309,434.68',
                qNum: 7309434.68,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7762.40963',
                qNum: 7762.409629999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Jeffers Corn Puffs',
                qNum: 'NaN',
                qElemNumber: 665,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7415027',
                      qNum: 7415026.780000002,
                    },
                  ],
                },
              },
              {
                qText: '$7,415,026.78',
                qNum: 7415026.780000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7740.90459',
                qNum: 7740.904589999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Cantelope',
                qNum: 'NaN',
                qElemNumber: 185,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7233775',
                      qNum: 7233775.369999999,
                    },
                  ],
                },
              },
              {
                qText: '$7,233,775.37',
                qNum: 7233775.369999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7726.29384',
                qNum: 7726.293839999984,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Frozen Cheese Pizza',
                qNum: 'NaN',
                qElemNumber: 280,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7152874',
                      qNum: 7152874.049999995,
                    },
                  ],
                },
              },
              {
                qText: '$7,152,874.05',
                qNum: 7152874.049999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '16',
                qNum: 16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7699.30637',
                qNum: 7699.306369999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Fajita French Fries',
                qNum: 'NaN',
                qElemNumber: 241,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7273909',
                      qNum: 7273909.419999996,
                    },
                  ],
                },
              },
              {
                qText: '$7,273,909.42',
                qNum: 7273909.419999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7699.18387',
                qNum: 7699.1838699999735,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Cheese Crackers',
                qNum: 'NaN',
                qElemNumber: 775,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6936582',
                      qNum: 6936582.330000002,
                    },
                  ],
                },
              },
              {
                qText: '$6,936,582.33',
                qNum: 6936582.330000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7690.98189',
                qNum: 7690.981889999978,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Dried Apricots',
                qNum: 'NaN',
                qElemNumber: 324,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7400061',
                      qNum: 7400060.529999998,
                    },
                  ],
                },
              },
              {
                qText: '$7,400,060.53',
                qNum: 7400060.529999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '17',
                qNum: 17,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7626.58652',
                qNum: 7626.586519999971,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Jumbo Large Eggs',
                qNum: 'NaN',
                qElemNumber: 791,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7212591',
                      qNum: 7212590.93,
                    },
                  ],
                },
              },
              {
                qText: '$7,212,590.93',
                qNum: 7212590.93,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7592.46825',
                qNum: 7592.4682499999835,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Corn Oil',
                qNum: 'NaN',
                qElemNumber: 686,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6932327',
                      qNum: 6932326.84,
                    },
                  ],
                },
              },
              {
                qText: '$6,932,326.84',
                qNum: 6932326.84,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7534.85531',
                qNum: 7534.8553099999735,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Lemon Popsicles',
                qNum: 'NaN',
                qElemNumber: 790,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6824756',
                      qNum: 6824755.950000004,
                    },
                  ],
                },
              },
              {
                qText: '$6,824,755.95',
                qNum: 6824755.950000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7495.85779',
                qNum: 7495.85778999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Regular Ramen Soup',
                qNum: 'NaN',
                qElemNumber: 461,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7238117',
                      qNum: 7238116.7700000005,
                    },
                  ],
                },
              },
              {
                qText: '$7,238,116.77',
                qNum: 7238116.7700000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7494.3748',
                qNum: 7494.374799999974,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Walrus Chablis Wine',
                qNum: 'NaN',
                qElemNumber: 581,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6980516',
                      qNum: 6980515.900000002,
                    },
                  ],
                },
              },
              {
                qText: '$6,980,515.90',
                qNum: 6980515.900000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7492.89891',
                qNum: 7492.898909999993,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Canned Peas',
                qNum: 'NaN',
                qElemNumber: 772,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6733039',
                      qNum: 6733038.630000001,
                    },
                  ],
                },
              },
              {
                qText: '$6,733,038.63',
                qNum: 6733038.630000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7482.1774',
                qNum: 7482.177399999971,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Creamed Corn',
                qNum: 'NaN',
                qElemNumber: 617,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6966951',
                      qNum: 6966950.760000001,
                    },
                  ],
                },
              },
              {
                qText: '$6,966,950.76',
                qNum: 6966950.760000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7444.05429',
                qNum: 7444.054289999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fabulous Strawberry Drink',
                qNum: 'NaN',
                qElemNumber: 152,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7067079',
                      qNum: 7067078.62,
                    },
                  ],
                },
              },
              {
                qText: '$7,067,078.62',
                qNum: 7067078.62,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7410.7646',
                qNum: 7410.764599999996,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Cheese Dip',
                qNum: 'NaN',
                qElemNumber: 345,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6851387',
                      qNum: 6851386.610000001,
                    },
                  ],
                },
              },
              {
                qText: '$6,851,386.61',
                qNum: 6851386.610000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7361.05416',
                qNum: 7361.05415999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Canned Yams',
                qNum: 'NaN',
                qElemNumber: 231,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6673165',
                      qNum: 6673165.129999999,
                    },
                  ],
                },
              },
              {
                qText: '$6,673,165.13',
                qNum: 6673165.129999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7339.55636',
                qNum: 7339.55635999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Chocolate Chip Cookies',
                qNum: 'NaN',
                qElemNumber: 758,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6496494',
                      qNum: 6496494.130000006,
                    },
                  ],
                },
              },
              {
                qText: '$6,496,494.13',
                qNum: 6496494.130000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7288.37778',
                qNum: 7288.37777999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Ice Cream Sandwich',
                qNum: 'NaN',
                qElemNumber: 653,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6553360',
                      qNum: 6553360.220000006,
                    },
                  ],
                },
              },
              {
                qText: '$6,553,360.22',
                qNum: 6553360.220000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7267.24211',
                qNum: 7267.242110000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson Muenster Cheese',
                qNum: 'NaN',
                qElemNumber: 620,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6592517',
                      qNum: 6592517.499999995,
                    },
                  ],
                },
              },
              {
                qText: '$6,592,517.50',
                qNum: 6592517.499999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7263.02497',
                qNum: 7263.024969999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Colony White Bread',
                qNum: 'NaN',
                qElemNumber: 538,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6555512',
                      qNum: 6555512.200000005,
                    },
                  ],
                },
              },
              {
                qText: '$6,555,512.20',
                qNum: 6555512.200000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7188.12511',
                qNum: 7188.125109999973,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Frozen Cauliflower',
                qNum: 'NaN',
                qElemNumber: 754,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6411078',
                      qNum: 6411077.670000001,
                    },
                  ],
                },
              },
              {
                qText: '$6,411,077.67',
                qNum: 6411077.670000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7168.90593',
                qNum: 7168.905929999988,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Grape Preserves',
                qNum: 'NaN',
                qElemNumber: 438,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6580242',
                      qNum: 6580241.5900000045,
                    },
                  ],
                },
              },
              {
                qText: '$6,580,241.59',
                qNum: 6580241.5900000045,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7159.34498',
                qNum: 7159.344979999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Monarch Spaghetti',
                qNum: 'NaN',
                qElemNumber: 684,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6424484',
                      qNum: 6424483.760000007,
                    },
                  ],
                },
              },
              {
                qText: '$6,424,483.76',
                qNum: 6424483.760000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7126.75012',
                qNum: 7126.750120000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Footnote Seasoned Hamburger',
                qNum: 'NaN',
                qElemNumber: 655,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6437107',
                      qNum: 6437107.16,
                    },
                  ],
                },
              },
              {
                qText: '$6,437,107.16',
                qNum: 6437107.16,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7083.25718',
                qNum: 7083.257179999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Token Cream Soda',
                qNum: 'NaN',
                qElemNumber: 739,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6511827',
                      qNum: 6511826.569999995,
                    },
                  ],
                },
              },
              {
                qText: '$6,511,826.57',
                qNum: 6511826.569999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7062.41129',
                qNum: 7062.411289999992,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Party Nuts',
                qNum: 'NaN',
                qElemNumber: 267,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6550192',
                      qNum: 6550192.169999993,
                    },
                  ],
                },
              },
              {
                qText: '$6,550,192.17',
                qNum: 6550192.169999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7053.94582',
                qNum: 7053.945819999989,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Canned Peas',
                qNum: 'NaN',
                qElemNumber: 622,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6511928',
                      qNum: 6511928.170000005,
                    },
                  ],
                },
              },
              {
                qText: '$6,511,928.17',
                qNum: 6511928.170000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7045.93789',
                qNum: 7045.937889999984,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Lettuce',
                qNum: 'NaN',
                qElemNumber: 427,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6341047',
                      qNum: 6341046.659999995,
                    },
                  ],
                },
              },
              {
                qText: '$6,341,046.66',
                qNum: 6341046.659999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7038.32155',
                qNum: 7038.321549999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Fudge Cookies',
                qNum: 'NaN',
                qElemNumber: 393,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6371411',
                      qNum: 6371411.1400000015,
                    },
                  ],
                },
              },
              {
                qText: '$6,371,411.14',
                qNum: 6371411.1400000015,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7030.93511',
                qNum: 7030.935109999985,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Apple Jam',
                qNum: 'NaN',
                qElemNumber: 302,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6623185',
                      qNum: 6623184.5499999905,
                    },
                  ],
                },
              },
              {
                qText: '$6,623,184.55',
                qNum: 6623184.5499999905,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6968.39735',
                qNum: 6968.397349999984,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Frozen Chicken Breast',
                qNum: 'NaN',
                qElemNumber: 210,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6469007',
                      qNum: 6469007.189999998,
                    },
                  ],
                },
              },
              {
                qText: '$6,469,007.19',
                qNum: 6469007.189999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6966.01678',
                qNum: 6966.016780000009,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Atomic White Chocolate Bar',
                qNum: 'NaN',
                qElemNumber: 678,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6406113',
                      qNum: 6406112.839999999,
                    },
                  ],
                },
              },
              {
                qText: '$6,406,112.84',
                qNum: 6406112.839999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6910.20404',
                qNum: 6910.204039999983,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Strawberry Jam',
                qNum: 'NaN',
                qElemNumber: 329,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6231363',
                      qNum: 6231362.809999995,
                    },
                  ],
                },
              },
              {
                qText: '$6,231,362.81',
                qNum: 6231362.809999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6888.14358',
                qNum: 6888.143579999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club Whole Milk',
                qNum: 'NaN',
                qElemNumber: 589,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6265024',
                      qNum: 6265023.54000001,
                    },
                  ],
                },
              },
              {
                qText: '$6,265,023.54',
                qNum: 6265023.54000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6885.50731',
                qNum: 6885.507309999988,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Red Spade Potato Salad',
                qNum: 'NaN',
                qElemNumber: 675,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6450470',
                      qNum: 6450469.64,
                    },
                  ],
                },
              },
              {
                qText: '$6,450,469.64',
                qNum: 6450469.64,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6858.40356',
                qNum: 6858.4035599999825,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top New Potatos',
                qNum: 'NaN',
                qElemNumber: 205,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6148627',
                      qNum: 6148627.160000001,
                    },
                  ],
                },
              },
              {
                qText: '$6,148,627.16',
                qNum: 6148627.160000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6829.34901',
                qNum: 6829.349010000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Frosted Donuts',
                qNum: 'NaN',
                qElemNumber: 502,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6298519',
                      qNum: 6298518.680000002,
                    },
                  ],
                },
              },
              {
                qText: '$6,298,518.68',
                qNum: 6298518.680000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6809.07612',
                qNum: 6809.076119999988,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Jeffers Grits',
                qNum: 'NaN',
                qElemNumber: 624,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6280933',
                      qNum: 6280932.530000002,
                    },
                  ],
                },
              },
              {
                qText: '$6,280,932.53',
                qNum: 6280932.530000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6769.24254',
                qNum: 6769.242539999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Golden Delcious Apples',
                qNum: 'NaN',
                qElemNumber: 716,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6255332',
                      qNum: 6255331.840000005,
                    },
                  ],
                },
              },
              {
                qText: '$6,255,331.84',
                qNum: 6255331.840000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6768.46799',
                qNum: 6768.4679899999865,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Cheese Crackers',
                qNum: 'NaN',
                qElemNumber: 768,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6169953',
                      qNum: 6169952.850000002,
                    },
                  ],
                },
              },
              {
                qText: '$6,169,952.85',
                qNum: 6169952.850000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6755.41241',
                qNum: 6755.412409999984,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla Mild Cheddar Cheese',
                qNum: 'NaN',
                qElemNumber: 600,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6237708',
                      qNum: 6237707.58,
                    },
                  ],
                },
              },
              {
                qText: '$6,237,707.58',
                qNum: 6237707.58,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6753.73097',
                qNum: 6753.730969999989,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Tomato Sauce',
                qNum: 'NaN',
                qElemNumber: 669,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6254271',
                      qNum: 6254271.389999996,
                    },
                  ],
                },
              },
              {
                qText: '$6,254,271.39',
                qNum: 6254271.389999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6747.21788',
                qNum: 6747.2178799999865,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Strawberry Fruit Roll',
                qNum: 'NaN',
                qElemNumber: 752,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6122562',
                      qNum: 6122561.500000003,
                    },
                  ],
                },
              },
              {
                qText: '$6,122,561.50',
                qNum: 6122561.500000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6744.84864',
                qNum: 6744.8486399999965,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel No Salt Popcorn',
                qNum: 'NaN',
                qElemNumber: 390,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6077109',
                      qNum: 6077108.899999996,
                    },
                  ],
                },
              },
              {
                qText: '$6,077,108.90',
                qNum: 6077108.899999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6715.36797',
                qNum: 6715.3679699999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Moms Pimento Loaf',
                qNum: 'NaN',
                qElemNumber: 786,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6050972',
                      qNum: 6050972.210000001,
                    },
                  ],
                },
              },
              {
                qText: '$6,050,972.21',
                qNum: 6050972.210000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6711.85949',
                qNum: 6711.859489999992,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Potatos',
                qNum: 'NaN',
                qElemNumber: 792,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6026939',
                      qNum: 6026939.199999995,
                    },
                  ],
                },
              },
              {
                qText: '$6,026,939.20',
                qNum: 6026939.199999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6703.95573',
                qNum: 6703.955729999986,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Colony Muffins',
                qNum: 'NaN',
                qElemNumber: 652,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6175207',
                      qNum: 6175207.430000008,
                    },
                  ],
                },
              },
              {
                qText: '$6,175,207.43',
                qNum: 6175207.430000008,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6678.20557',
                qNum: 6678.205569999984,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson 2% Milk',
                qNum: 'NaN',
                qElemNumber: 760,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5958749',
                      qNum: 5958748.879999993,
                    },
                  ],
                },
              },
              {
                qText: '$5,958,748.88',
                qNum: 5958748.879999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6667.91544',
                qNum: 6667.915439999983,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Great White Bread',
                qNum: 'NaN',
                qElemNumber: 798,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5899409',
                      qNum: 5899409.320000006,
                    },
                  ],
                },
              },
              {
                qText: '$5,899,409.32',
                qNum: 5899409.320000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6666.07536',
                qNum: 6666.07536,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Frozen Carrots',
                qNum: 'NaN',
                qElemNumber: 610,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6066595',
                      qNum: 6066595.150000004,
                    },
                  ],
                },
              },
              {
                qText: '$6,066,595.15',
                qNum: 6066595.150000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6660.68274',
                qNum: 6660.682739999996,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Atomic Tasty Candy Bar',
                qNum: 'NaN',
                qElemNumber: 466,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5967470',
                      qNum: 5967469.880000001,
                    },
                  ],
                },
              },
              {
                qText: '$5,967,469.88',
                qNum: 5967469.880000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6613.01993',
                qNum: 6613.019929999986,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Good Chablis Wine',
                qNum: 'NaN',
                qElemNumber: 808,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5800216',
                      qNum: 5800215.620000008,
                    },
                  ],
                },
              },
              {
                qText: '$5,800,215.62',
                qNum: 5800215.620000008,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2',
                qNum: 2,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6565.96254',
                qNum: 6565.962540000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla Sharp Cheddar Cheese',
                qNum: 'NaN',
                qElemNumber: 599,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5842807',
                      qNum: 5842807.049999999,
                    },
                  ],
                },
              },
              {
                qText: '$5,842,807.05',
                qNum: 5842807.049999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6555.3143',
                qNum: 6555.31429999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Frozen Sausage Pizza',
                qNum: 'NaN',
                qElemNumber: 632,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5921467',
                      qNum: 5921466.799999996,
                    },
                  ],
                },
              },
              {
                qText: '$5,921,466.80',
                qNum: 5921466.799999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '13',
                qNum: 13,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6531.52073',
                qNum: 6531.520729999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Hot Chocolate',
                qNum: 'NaN',
                qElemNumber: 688,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5829698',
                      qNum: 5829697.650000006,
                    },
                  ],
                },
              },
              {
                qText: '$5,829,697.65',
                qNum: 5829697.650000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6507.11737',
                qNum: 6507.11737,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Brown Sugar',
                qNum: 'NaN',
                qElemNumber: 372,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5996883',
                      qNum: 5996882.609999999,
                    },
                  ],
                },
              },
              {
                qText: '$5,996,882.61',
                qNum: 5996882.609999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6495.67414',
                qNum: 6495.67413999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Chicken Ramen Soup',
                qNum: 'NaN',
                qElemNumber: 369,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6090557',
                      qNum: 6090556.959999996,
                    },
                  ],
                },
              },
              {
                qText: '$6,090,556.96',
                qNum: 6090556.959999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6477.58946',
                qNum: 6477.589459999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Oregano',
                qNum: 'NaN',
                qElemNumber: 685,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5819473',
                      qNum: 5819472.689999999,
                    },
                  ],
                },
              },
              {
                qText: '$5,819,472.69',
                qNum: 5819472.689999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6465.62865',
                qNum: 6465.628649999985,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Frozen Pepperoni Pizza',
                qNum: 'NaN',
                qElemNumber: 723,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6133531',
                      qNum: 6133530.689999999,
                    },
                  ],
                },
              },
              {
                qText: '$6,133,530.69',
                qNum: 6133530.689999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6428.38772',
                qNum: 6428.387719999993,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Atomic Malted Milk Balls',
                qNum: 'NaN',
                qElemNumber: 623,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6037884',
                      qNum: 6037883.689999995,
                    },
                  ],
                },
              },
              {
                qText: '$6,037,883.69',
                qNum: 6037883.689999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6402.14651',
                qNum: 6402.146509999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Baby Onion',
                qNum: 'NaN',
                qElemNumber: 167,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5721176',
                      qNum: 5721175.919999995,
                    },
                  ],
                },
              },
              {
                qText: '$5,721,175.92',
                qNum: 5721175.919999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6336.76205',
                qNum: 6336.762050000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Popsicles',
                qNum: 'NaN',
                qElemNumber: 586,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5873652',
                      qNum: 5873651.820000008,
                    },
                  ],
                },
              },
              {
                qText: '$5,873,651.82',
                qNum: 5873651.820000008,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6334.18543',
                qNum: 6334.185429999985,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'American Sliced Ham',
                qNum: 'NaN',
                qElemNumber: 741,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5669623',
                      qNum: 5669622.829999997,
                    },
                  ],
                },
              },
              {
                qText: '$5,669,622.83',
                qNum: 5669622.829999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6331.64384',
                qNum: 6331.643840000008,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson Large Curd Cottage Cheese',
                qNum: 'NaN',
                qElemNumber: 370,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5872720',
                      qNum: 5872720.000000002,
                    },
                  ],
                },
              },
              {
                qText: '$5,872,720.00',
                qNum: 5872720.000000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6325.58993',
                qNum: 6325.58993,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Hot Chocolate',
                qNum: 'NaN',
                qElemNumber: 734,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5948456',
                      qNum: 5948455.730000006,
                    },
                  ],
                },
              },
              {
                qText: '$5,948,455.73',
                qNum: 5948455.730000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6311.7882',
                qNum: 6311.788199999981,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Tangerines',
                qNum: 'NaN',
                qElemNumber: 504,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5621335',
                      qNum: 5621334.950000003,
                    },
                  ],
                },
              },
              {
                qText: '$5,621,334.95',
                qNum: 5621334.950000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6288.41775',
                qNum: 6288.41774999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Apple Preserves',
                qNum: 'NaN',
                qElemNumber: 114,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5859141',
                      qNum: 5859141.07,
                    },
                  ],
                },
              },
              {
                qText: '$5,859,141.07',
                qNum: 5859141.07,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6256.69585',
                qNum: 6256.695849999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson 1% Milk',
                qNum: 'NaN',
                qElemNumber: 497,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5656266',
                      qNum: 5656265.920000008,
                    },
                  ],
                },
              },
              {
                qText: '$5,656,265.92',
                qNum: 5656265.920000008,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6253.74025',
                qNum: 6253.740250000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Canned Tuna in Oil',
                qNum: 'NaN',
                qElemNumber: 644,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5824990',
                      qNum: 5824990.230000002,
                    },
                  ],
                },
              },
              {
                qText: '$5,824,990.23',
                qNum: 5824990.230000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6135.45815',
                qNum: 6135.458149999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Salted Pretzels',
                qNum: 'NaN',
                qElemNumber: 696,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5738665',
                      qNum: 5738665.429999992,
                    },
                  ],
                },
              },
              {
                qText: '$5,738,665.43',
                qNum: 5738665.429999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6126.27145',
                qNum: 6126.271449999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Plums',
                qNum: 'NaN',
                qElemNumber: 464,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5488458',
                      qNum: 5488457.749999998,
                    },
                  ],
                },
              },
              {
                qText: '$5,488,457.75',
                qNum: 5488457.749999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6114.70319',
                qNum: 6114.703189999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Medal Small Eggs',
                qNum: 'NaN',
                qElemNumber: 763,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5844991',
                      qNum: 5844991.250000005,
                    },
                  ],
                },
              },
              {
                qText: '$5,844,991.25',
                qNum: 5844991.250000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6104.15228',
                qNum: 6104.152279999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Footnote Extra Lean Hamburger',
                qNum: 'NaN',
                qElemNumber: 517,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5373676',
                      qNum: 5373676.410000001,
                    },
                  ],
                },
              },
              {
                qText: '$5,373,676.41',
                qNum: 5373676.410000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '15',
                qNum: 15,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6062.02081',
                qNum: 6062.020809999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Party Nuts',
                qNum: 'NaN',
                qElemNumber: 463,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5378510',
                      qNum: 5378510.429999999,
                    },
                  ],
                },
              },
              {
                qText: '$5,378,510.43',
                qNum: 5378510.429999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6056.50956',
                qNum: 6056.509559999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Honey Dew',
                qNum: 'NaN',
                qElemNumber: 613,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5590867',
                      qNum: 5590866.800000001,
                    },
                  ],
                },
              },
              {
                qText: '$5,590,866.80',
                qNum: 5590866.800000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6043.93474',
                qNum: 6043.934739999991,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club Large Curd Cottage Cheese',
                qNum: 'NaN',
                qElemNumber: 563,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5766609',
                      qNum: 5766608.630000003,
                    },
                  ],
                },
              },
              {
                qText: '$5,766,608.63',
                qNum: 5766608.630000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6004.82604',
                qNum: 6004.826039999986,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Onions',
                qNum: 'NaN',
                qElemNumber: 459,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5378319',
                      qNum: 5378319.4999999935,
                    },
                  ],
                },
              },
              {
                qText: '$5,378,319.50',
                qNum: 5378319.4999999935,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5985.92313',
                qNum: 5985.923129999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Radius Oatmeal',
                qNum: 'NaN',
                qElemNumber: 751,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5601171',
                      qNum: 5601171.4700000025,
                    },
                  ],
                },
              },
              {
                qText: '$5,601,171.47',
                qNum: 5601171.4700000025,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5975.9325',
                qNum: 5975.9325000000035,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Extra Chunky Peanut Butter',
                qNum: 'NaN',
                qElemNumber: 309,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5458897',
                      qNum: 5458896.7600000035,
                    },
                  ],
                },
              },
              {
                qText: '$5,458,896.76',
                qNum: 5458896.7600000035,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5971.758',
                qNum: 5971.757999999988,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Choice Mints',
                qNum: 'NaN',
                qElemNumber: 484,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5670407',
                      qNum: 5670406.740000003,
                    },
                  ],
                },
              },
              {
                qText: '$5,670,406.74',
                qNum: 5670406.740000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5965.1433',
                qNum: 5965.1433,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Discover Ravioli',
                qNum: 'NaN',
                qElemNumber: 34,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5424158',
                      qNum: 5424158.429999997,
                    },
                  ],
                },
              },
              {
                qText: '$5,424,158.43',
                qNum: 5424158.429999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5943.44805',
                qNum: 5943.44805,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Cutting Edge Corned Beef',
                qNum: 'NaN',
                qElemNumber: 295,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5465642',
                      qNum: 5465641.94999999,
                    },
                  ],
                },
              },
              {
                qText: '$5,465,641.95',
                qNum: 5465641.94999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5898.4643',
                qNum: 5898.464299999993,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Medal Egg Substitute',
                qNum: 'NaN',
                qElemNumber: 420,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5522535',
                      qNum: 5522534.950000005,
                    },
                  ],
                },
              },
              {
                qText: '$5,522,534.95',
                qNum: 5522534.950000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5884.13131',
                qNum: 5884.13130999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Cutting Edge Low Fat Bologna',
                qNum: 'NaN',
                qElemNumber: 363,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5214771',
                      qNum: 5214770.600000001,
                    },
                  ],
                },
              },
              {
                qText: '$5,214,770.60',
                qNum: 5214770.600000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5881.86533',
                qNum: 5881.8653299999905,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Curlew Scallops',
                qNum: 'NaN',
                qElemNumber: 100,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5526893',
                      qNum: 5526892.890000009,
                    },
                  ],
                },
              },
              {
                qText: '$5,526,892.89',
                qNum: 5526892.890000009,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '12',
                qNum: 12,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5737.08315',
                qNum: 5737.083149999993,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Plums',
                qNum: 'NaN',
                qElemNumber: 583,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5047009',
                      qNum: 5047008.740000004,
                    },
                  ],
                },
              },
              {
                qText: '$5,047,008.74',
                qNum: 5047008.740000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5723.45784',
                qNum: 5723.457840000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Limes',
                qNum: 'NaN',
                qElemNumber: 656,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5150553',
                      qNum: 5150552.569999993,
                    },
                  ],
                },
              },
              {
                qText: '$5,150,552.57',
                qNum: 5150552.569999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5714.96459',
                qNum: 5714.96459,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Limes',
                qNum: 'NaN',
                qElemNumber: 35,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5128837',
                      qNum: 5128837.3,
                    },
                  ],
                },
              },
              {
                qText: '$5,128,837.30',
                qNum: 5128837.3,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5705.42787',
                qNum: 5705.427869999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Frozen Chicken Breast',
                qNum: 'NaN',
                qElemNumber: 59,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5176300',
                      qNum: 5176300.169999992,
                    },
                  ],
                },
              },
              {
                qText: '$5,176,300.17',
                qNum: 5176300.169999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5690.26471',
                qNum: 5690.264709999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Moms Roasted Chicken',
                qNum: 'NaN',
                qElemNumber: 524,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5122794',
                      qNum: 5122793.689999996,
                    },
                  ],
                },
              },
              {
                qText: '$5,122,793.69',
                qNum: 5122793.689999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5681.5423',
                qNum: 5681.542300000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Low Fat Apple Butter',
                qNum: 'NaN',
                qElemNumber: 362,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5144854',
                      qNum: 5144853.669999998,
                    },
                  ],
                },
              },
              {
                qText: '$5,144,853.67',
                qNum: 5144853.669999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5638.65171',
                qNum: 5638.651709999985,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Hot Chocolate',
                qNum: 'NaN',
                qElemNumber: 699,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5450913',
                      qNum: 5450912.880000002,
                    },
                  ],
                },
              },
              {
                qText: '$5,450,912.88',
                qNum: 5450912.880000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5636.24135',
                qNum: 5636.241349999991,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Beef Soup',
                qNum: 'NaN',
                qElemNumber: 777,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5343744',
                      qNum: 5343744.380000012,
                    },
                  ],
                },
              },
              {
                qText: '$5,343,744.38',
                qNum: 5343744.380000012,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5629.25105',
                qNum: 5629.25105,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Thresher Mint Chocolate Bar',
                qNum: 'NaN',
                qElemNumber: 392,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5031314',
                      qNum: 5031314.130000002,
                    },
                  ],
                },
              },
              {
                qText: '$5,031,314.13',
                qNum: 5031314.130000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5523.19241',
                qNum: 5523.1924099999915,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Waffles',
                qNum: 'NaN',
                qElemNumber: 283,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4994203',
                      qNum: 4994202.779999996,
                    },
                  ],
                },
              },
              {
                qText: '$4,994,202.78',
                qNum: 4994202.779999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5522.36809',
                qNum: 5522.36809,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Golden Delcious Apples',
                qNum: 'NaN',
                qElemNumber: 446,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5064973',
                      qNum: 5064973.449999999,
                    },
                  ],
                },
              },
              {
                qText: '$5,064,973.45',
                qNum: 5064973.449999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5520.88726',
                qNum: 5520.887259999989,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Shitake Mushrooms',
                qNum: 'NaN',
                qElemNumber: 112,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5272908',
                      qNum: 5272908.290000005,
                    },
                  ],
                },
              },
              {
                qText: '$5,272,908.29',
                qNum: 5272908.290000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5520.66638',
                qNum: 5520.666380000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Apple Fruit Roll',
                qNum: 'NaN',
                qElemNumber: 637,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5090218',
                      qNum: 5090218.490000001,
                    },
                  ],
                },
              },
              {
                qText: '$5,090,218.49',
                qNum: 5090218.490000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '14',
                qNum: 14,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5511.84061',
                qNum: 5511.840610000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Decaf Coffee',
                qNum: 'NaN',
                qElemNumber: 341,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5086531',
                      qNum: 5086531.289999998,
                    },
                  ],
                },
              },
              {
                qText: '$5,086,531.29',
                qNum: 5086531.289999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5407.19951',
                qNum: 5407.199509999996,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club Low Fat String Cheese',
                qNum: 'NaN',
                qElemNumber: 701,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5159019',
                      qNum: 5159019.010000003,
                    },
                  ],
                },
              },
              {
                qText: '$5,159,019.01',
                qNum: 5159019.010000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5382.50987',
                qNum: 5382.509870000006,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla 2% Milk',
                qNum: 'NaN',
                qElemNumber: 237,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4816249',
                      qNum: 4816249.26,
                    },
                  ],
                },
              },
              {
                qText: '$4,816,249.26',
                qNum: 4816249.26,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5369.6434',
                qNum: 5369.6433999999945,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Fudge Brownies',
                qNum: 'NaN',
                qElemNumber: 572,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4709741',
                      qNum: 4709740.63,
                    },
                  ],
                },
              },
              {
                qText: '$4,709,740.63',
                qNum: 4709740.63,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5316.85',
                qNum: 5316.850000000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Avocado Dip',
                qNum: 'NaN',
                qElemNumber: 704,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4755458',
                      qNum: 4755457.619999998,
                    },
                  ],
                },
              },
              {
                qText: '$4,755,457.62',
                qNum: 4755457.619999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5288.9335',
                qNum: 5288.933499999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Lemon Cookies',
                qNum: 'NaN',
                qElemNumber: 730,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5007318',
                      qNum: 5007318.069999999,
                    },
                  ],
                },
              },
              {
                qText: '$5,007,318.07',
                qNum: 5007318.069999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5248.32304',
                qNum: 5248.323040000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Frozen Chicken Thighs',
                qNum: 'NaN',
                qElemNumber: 755,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4676731',
                      qNum: 4676731.279999995,
                    },
                  ],
                },
              },
              {
                qText: '$4,676,731.28',
                qNum: 4676731.279999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5219.59805',
                qNum: 5219.598049999989,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Strawberry Jelly',
                qNum: 'NaN',
                qElemNumber: 746,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4936154',
                      qNum: 4936154.1400000015,
                    },
                  ],
                },
              },
              {
                qText: '$4,936,154.14',
                qNum: 4936154.1400000015,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5218.24676',
                qNum: 5218.246760000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Golden Orange Popsicles',
                qNum: 'NaN',
                qElemNumber: 602,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5196301',
                      qNum: 5196301.24,
                    },
                  ],
                },
              },
              {
                qText: '$5,196,301.24',
                qNum: 5196301.24,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5194.8038',
                qNum: 5194.803799999993,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Cutting Edge Sliced Turkey',
                qNum: 'NaN',
                qElemNumber: 477,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4685747',
                      qNum: 4685747.269999992,
                    },
                  ],
                },
              },
              {
                qText: '$4,685,747.27',
                qNum: 4685747.269999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5192.02126',
                qNum: 5192.021259999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Regular Ramen Soup',
                qNum: 'NaN',
                qElemNumber: 717,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4783859',
                      qNum: 4783859.369999999,
                    },
                  ],
                },
              },
              {
                qText: '$4,783,859.37',
                qNum: 4783859.369999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5155.03967',
                qNum: 5155.039669999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Beef Soup',
                qNum: 'NaN',
                qElemNumber: 636,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4793731',
                      qNum: 4793730.789999995,
                    },
                  ],
                },
              },
              {
                qText: '$4,793,730.79',
                qNum: 4793730.789999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5152.85873',
                qNum: 5152.8587299999945,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'National Large Brown Eggs',
                qNum: 'NaN',
                qElemNumber: 794,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4662604',
                      qNum: 4662604.399999996,
                    },
                  ],
                },
              },
              {
                qText: '$4,662,604.40',
                qNum: 4662604.399999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5133.10043',
                qNum: 5133.100429999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Sweet Onion',
                qNum: 'NaN',
                qElemNumber: 756,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4653974',
                      qNum: 4653973.759999998,
                    },
                  ],
                },
              },
              {
                qText: '$4,653,973.76',
                qNum: 4653973.759999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5108.13143',
                qNum: 5108.131430000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Moms Foot-Long Hot Dogs',
                qNum: 'NaN',
                qElemNumber: 516,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4582684',
                      qNum: 4582683.76,
                    },
                  ],
                },
              },
              {
                qText: '$4,582,683.76',
                qNum: 4582683.76,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5084.04201',
                qNum: 5084.042010000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Even Better Sour Cream',
                qNum: 'NaN',
                qElemNumber: 529,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4555053',
                      qNum: 4555053.349999997,
                    },
                  ],
                },
              },
              {
                qText: '$4,555,053.35',
                qNum: 4555053.349999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5052.38488',
                qNum: 5052.384880000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Pancake Mix',
                qNum: 'NaN',
                qElemNumber: 479,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4607483',
                      qNum: 4607483.279999997,
                    },
                  ],
                },
              },
              {
                qText: '$4,607,483.28',
                qNum: 4607483.279999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5034.64827',
                qNum: 5034.6482699999915,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Red Spade Chicken Hot Dogs',
                qNum: 'NaN',
                qElemNumber: 559,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4968387',
                      qNum: 4968386.779999998,
                    },
                  ],
                },
              },
              {
                qText: '$4,968,386.78',
                qNum: 4968386.779999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5032.62515',
                qNum: 5032.625150000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Token Diet Cola',
                qNum: 'NaN',
                qElemNumber: 735,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4625461',
                      qNum: 4625460.709999997,
                    },
                  ],
                },
              },
              {
                qText: '$4,625,460.71',
                qNum: 4625460.709999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4997.66974',
                qNum: 4997.669739999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Corn on the Cob',
                qNum: 'NaN',
                qElemNumber: 212,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4489078',
                      qNum: 4489078.039999999,
                    },
                  ],
                },
              },
              {
                qText: '$4,489,078.04',
                qNum: 4489078.039999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4965.88185',
                qNum: 4965.881850000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Mini Donuts',
                qNum: 'NaN',
                qElemNumber: 522,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4482525',
                      qNum: 4482524.929999993,
                    },
                  ],
                },
              },
              {
                qText: '$4,482,524.93',
                qNum: 4482524.929999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4958.36597',
                qNum: 4958.365970000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Great Cranberry Muffins',
                qNum: 'NaN',
                qElemNumber: 642,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4520296',
                      qNum: 4520295.910000001,
                    },
                  ],
                },
              },
              {
                qText: '$4,520,295.91',
                qNum: 4520295.910000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4954.93057',
                qNum: 4954.930570000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Shady Lake Ravioli',
                qNum: 'NaN',
                qElemNumber: 762,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4490911',
                      qNum: 4490910.770000002,
                    },
                  ],
                },
              },
              {
                qText: '$4,490,910.77',
                qNum: 4490910.770000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4928.36185',
                qNum: 4928.3618499999975,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Beets',
                qNum: 'NaN',
                qElemNumber: 803,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4380661',
                      qNum: 4380661.039999999,
                    },
                  ],
                },
              },
              {
                qText: '$4,380,661.04',
                qNum: 4380661.039999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4927.00329',
                qNum: 4927.003290000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla Head Cheese',
                qNum: 'NaN',
                qElemNumber: 597,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4400873',
                      qNum: 4400873.240000001,
                    },
                  ],
                },
              },
              {
                qText: '$4,400,873.24',
                qNum: 4400873.240000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4901.55506',
                qNum: 4901.555060000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Jumbo Egg Substitute',
                qNum: 'NaN',
                qElemNumber: 725,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4656833',
                      qNum: 4656833.279999999,
                    },
                  ],
                },
              },
              {
                qText: '$4,656,833.28',
                qNum: 4656833.279999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4869.56855',
                qNum: 4869.568550000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Corn on the Cob',
                qNum: 'NaN',
                qElemNumber: 742,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4451382',
                      qNum: 4451382.099999998,
                    },
                  ],
                },
              },
              {
                qText: '$4,451,382.10',
                qNum: 4451382.099999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4861.60951',
                qNum: 4861.609510000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Token Cranberry Juice',
                qNum: 'NaN',
                qElemNumber: 220,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4567616',
                      qNum: 4567616.030000002,
                    },
                  ],
                },
              },
              {
                qText: '$4,567,616.03',
                qNum: 4567616.030000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4800.31382',
                qNum: 4800.31382,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Cutting Edge Beef Bologna',
                qNum: 'NaN',
                qElemNumber: 240,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4563626',
                      qNum: 4563625.830000006,
                    },
                  ],
                },
              },
              {
                qText: '$4,563,625.83',
                qNum: 4563625.830000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4798.83593',
                qNum: 4798.83593,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale New Potatos',
                qNum: 'NaN',
                qElemNumber: 548,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4389062',
                      qNum: 4389061.680000001,
                    },
                  ],
                },
              },
              {
                qText: '$4,389,061.68',
                qNum: 4389061.680000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4750.5432',
                qNum: 4750.543200000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Fancy Canned Clams',
                qNum: 'NaN',
                qElemNumber: 476,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4344450',
                      qNum: 4344449.690000003,
                    },
                  ],
                },
              },
              {
                qText: '$4,344,449.69',
                qNum: 4344449.690000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4731.29522',
                qNum: 4731.29522,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson Sour Cream',
                qNum: 'NaN',
                qElemNumber: 672,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4269180',
                      qNum: 4269179.619999999,
                    },
                  ],
                },
              },
              {
                qText: '$4,269,179.62',
                qNum: 4269179.619999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4696.08471',
                qNum: 4696.084709999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Potatos',
                qNum: 'NaN',
                qElemNumber: 670,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4150929',
                      qNum: 4150928.6199999982,
                    },
                  ],
                },
              },
              {
                qText: '$4,150,928.62',
                qNum: 4150928.6199999982,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4671.50015',
                qNum: 4671.500149999996,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Fudge Cookies',
                qNum: 'NaN',
                qElemNumber: 569,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4185882',
                      qNum: 4185881.7799999975,
                    },
                  ],
                },
              },
              {
                qText: '$4,185,881.78',
                qNum: 4185881.7799999975,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4617.57032',
                qNum: 4617.57032,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Creamed Corn',
                qNum: 'NaN',
                qElemNumber: 765,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4184747',
                      qNum: 4184746.549999993,
                    },
                  ],
                },
              },
              {
                qText: '$4,184,746.55',
                qNum: 4184746.549999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4597.62721',
                qNum: 4597.6272100000015,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Club 2% Milk',
                qNum: 'NaN',
                qElemNumber: 694,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4244145',
                      qNum: 4244144.790000003,
                    },
                  ],
                },
              },
              {
                qText: '$4,244,144.79',
                qNum: 4244144.790000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4591.88712',
                qNum: 4591.88712,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Fancy Plums',
                qNum: 'NaN',
                qElemNumber: 137,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4044191',
                      qNum: 4044190.549999998,
                    },
                  ],
                },
              },
              {
                qText: '$4,044,190.55',
                qNum: 4044190.549999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4557.97411',
                qNum: 4557.974109999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tip Top Scallops',
                qNum: 'NaN',
                qElemNumber: 442,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4161902',
                      qNum: 4161902.170000001,
                    },
                  ],
                },
              },
              {
                qText: '$4,161,902.17',
                qNum: 4161902.170000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '11',
                qNum: 11,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4520.799',
                qNum: 4520.798999999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Lettuce',
                qNum: 'NaN',
                qElemNumber: 774,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4254425',
                      qNum: 4254425.4499999955,
                    },
                  ],
                },
              },
              {
                qText: '$4,254,425.45',
                qNum: 4254425.4499999955,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4519.20872',
                qNum: 4519.208719999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Low Fat Popcorn',
                qNum: 'NaN',
                qElemNumber: 781,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4228922',
                      qNum: 4228921.689999998,
                    },
                  ],
                },
              },
              {
                qText: '$4,228,921.69',
                qNum: 4228921.689999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4509.40478',
                qNum: 4509.404779999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Canned Tuna in Water',
                qNum: 'NaN',
                qElemNumber: 475,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4361489',
                      qNum: 4361489.320000002,
                    },
                  ],
                },
              },
              {
                qText: '$4,361,489.32',
                qNum: 4361489.320000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4477.68166',
                qNum: 4477.681660000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Cantelope',
                qNum: 'NaN',
                qElemNumber: 437,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3954932',
                      qNum: 3954932.159999998,
                    },
                  ],
                },
              },
              {
                qText: '$3,954,932.16',
                qNum: 3954932.159999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4394.65039',
                qNum: 4394.650390000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson Sharp Cheddar Cheese',
                qNum: 'NaN',
                qElemNumber: 493,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4210711',
                      qNum: 4210710.679999998,
                    },
                  ],
                },
              },
              {
                qText: '$4,210,710.68',
                qNum: 4210710.679999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4327.84613',
                qNum: 4327.846130000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Potatos',
                qNum: 'NaN',
                qElemNumber: 743,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3902497',
                      qNum: 3902497.209999997,
                    },
                  ],
                },
              },
              {
                qText: '$3,902,497.21',
                qNum: 3902497.209999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4314.65789',
                qNum: 4314.6578899999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Noodle Soup',
                qNum: 'NaN',
                qElemNumber: 724,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3933287',
                      qNum: 3933287.349999999,
                    },
                  ],
                },
              },
              {
                qText: '$3,933,287.35',
                qNum: 3933287.349999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4306.72234',
                qNum: 4306.722340000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Lemon Cookies',
                qNum: 'NaN',
                qElemNumber: 596,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3797264',
                      qNum: 3797263.6499999976,
                    },
                  ],
                },
              },
              {
                qText: '$3,797,263.65',
                qNum: 3797263.6499999976,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4239.75679',
                qNum: 4239.756790000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ship Shape Extra Lean Hamburger',
                qNum: 'NaN',
                qElemNumber: 306,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3857932',
                      qNum: 3857931.7600000026,
                    },
                  ],
                },
              },
              {
                qText: '$3,857,931.76',
                qNum: 3857931.7600000026,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4232.77438',
                qNum: 4232.774380000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Canned String Beans',
                qNum: 'NaN',
                qElemNumber: 534,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3874000',
                      qNum: 3873999.910000003,
                    },
                  ],
                },
              },
              {
                qText: '$3,873,999.91',
                qNum: 3873999.910000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4229.2848',
                qNum: 4229.284800000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'American Turkey Hot Dogs',
                qNum: 'NaN',
                qElemNumber: 641,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4162452',
                      qNum: 4162452.1800000053,
                    },
                  ],
                },
              },
              {
                qText: '$4,162,452.18',
                qNum: 4162452.1800000053,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4219.26115',
                qNum: 4219.261150000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Pepper',
                qNum: 'NaN',
                qElemNumber: 577,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3790565',
                      qNum: 3790565.279999997,
                    },
                  ],
                },
              },
              {
                qText: '$3,790,565.28',
                qNum: 3790565.279999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4200.88372',
                qNum: 4200.883720000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Almonds',
                qNum: 'NaN',
                qElemNumber: 574,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3811613',
                      qNum: 3811613.0799999963,
                    },
                  ],
                },
              },
              {
                qText: '$3,811,613.08',
                qNum: 3811613.0799999963,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4191.31691',
                qNum: 4191.316909999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Elephant Garlic',
                qNum: 'NaN',
                qElemNumber: 568,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3806325',
                      qNum: 3806325.040000003,
                    },
                  ],
                },
              },
              {
                qText: '$3,806,325.04',
                qNum: 3806325.040000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4188.60701',
                qNum: 4188.60701,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Excellent Diet Cola',
                qNum: 'NaN',
                qElemNumber: 769,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3713961',
                      qNum: 3713961.139999996,
                    },
                  ],
                },
              },
              {
                qText: '$3,713,961.14',
                qNum: 3713961.139999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4161.74195',
                qNum: 4161.741950000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Frozen Chicken Wings',
                qNum: 'NaN',
                qElemNumber: 722,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3765965',
                      qNum: 3765965.3399999966,
                    },
                  ],
                },
              },
              {
                qText: '$3,765,965.34',
                qNum: 3765965.3399999966,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4153.81023',
                qNum: 4153.810230000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Colony Rye Bread',
                qNum: 'NaN',
                qElemNumber: 627,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3745582',
                      qNum: 3745581.6699999995,
                    },
                  ],
                },
              },
              {
                qText: '$3,745,581.67',
                qNum: 3745581.6699999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4138.12558',
                qNum: 4138.125580000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Canned String Beans',
                qNum: 'NaN',
                qElemNumber: 733,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3811444',
                      qNum: 3811443.690000003,
                    },
                  ],
                },
              },
              {
                qText: '$3,811,443.69',
                qNum: 3811443.690000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4067.96798',
                qNum: 4067.967980000006,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Grape Preserves',
                qNum: 'NaN',
                qElemNumber: 782,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3559216',
                      qNum: 3559215.6399999983,
                    },
                  ],
                },
              },
              {
                qText: '$3,559,215.64',
                qNum: 3559215.6399999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4043.28626',
                qNum: 4043.286260000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Peaches',
                qNum: 'NaN',
                qElemNumber: 257,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3568282',
                      qNum: 3568281.68,
                    },
                  ],
                },
              },
              {
                qText: '$3,568,281.68',
                qNum: 3568281.68,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4018.74128',
                qNum: 4018.741280000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Low Fat BBQ Chips',
                qNum: 'NaN',
                qElemNumber: 695,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3902562',
                      qNum: 3902561.779999999,
                    },
                  ],
                },
              },
              {
                qText: '$3,902,561.78',
                qNum: 3902561.779999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4008.10848',
                qNum: 4008.108480000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Excellent Cranberry Juice',
                qNum: 'NaN',
                qElemNumber: 487,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3641667',
                      qNum: 3641666.729999995,
                    },
                  ],
                },
              },
              {
                qText: '$3,641,666.73',
                qNum: 3641666.729999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4006.10838',
                qNum: 4006.1083800000024,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Beef Jerky',
                qNum: 'NaN',
                qElemNumber: 201,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3582321',
                      qNum: 3582321.1400000043,
                    },
                  ],
                },
              },
              {
                qText: '$3,582,321.14',
                qNum: 3582321.1400000043,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3997.23257',
                qNum: 3997.23257,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Shady Lake Spaghetti',
                qNum: 'NaN',
                qElemNumber: 429,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3961930',
                      qNum: 3961929.7199999997,
                    },
                  ],
                },
              },
              {
                qText: '$3,961,929.72',
                qNum: 3961929.7199999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3963.7189',
                qNum: 3963.7189000000017,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Red Delcious Apples',
                qNum: 'NaN',
                qElemNumber: 749,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3574768',
                      qNum: 3574768.0700000045,
                    },
                  ],
                },
              },
              {
                qText: '$3,574,768.07',
                qNum: 3574768.0700000045,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3963.21893',
                qNum: 3963.2189300000014,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Red Spade Sliced Turkey',
                qNum: 'NaN',
                qElemNumber: 553,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3642237',
                      qNum: 3642236.569999999,
                    },
                  ],
                },
              },
              {
                qText: '$3,642,236.57',
                qNum: 3642236.569999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3926.50509',
                qNum: 3926.5050899999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Almonds',
                qNum: 'NaN',
                qElemNumber: 740,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3482762',
                      qNum: 3482761.870000001,
                    },
                  ],
                },
              },
              {
                qText: '$3,482,761.87',
                qNum: 3482761.870000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3874.52255',
                qNum: 3874.522550000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Fancy Canned Sardines',
                qNum: 'NaN',
                qElemNumber: 562,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3581809',
                      qNum: 3581809.3699999964,
                    },
                  ],
                },
              },
              {
                qText: '$3,581,809.37',
                qNum: 3581809.3699999964,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3863.58639',
                qNum: 3863.5863900000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Pearl Merlot Wine',
                qNum: 'NaN',
                qElemNumber: 811,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3637293',
                      qNum: 3637292.580000001,
                    },
                  ],
                },
              },
              {
                qText: '$3,637,292.58',
                qNum: 3637292.580000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3857.07926',
                qNum: 3857.079260000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Washington Berry Juice',
                qNum: 'NaN',
                qElemNumber: 560,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3526877',
                      qNum: 3526877.3999999966,
                    },
                  ],
                },
              },
              {
                qText: '$3,526,877.40',
                qNum: 3526877.3999999966,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3849.22009',
                qNum: 3849.2200900000025,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Chicken Noodle Soup',
                qNum: 'NaN',
                qElemNumber: 650,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3447304',
                      qNum: 3447304.159999998,
                    },
                  ],
                },
              },
              {
                qText: '$3,447,304.16',
                qNum: 3447304.159999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3808.26162',
                qNum: 3808.2616200000007,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Raisins',
                qNum: 'NaN',
                qElemNumber: 633,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3444736',
                      qNum: 3444735.8199999975,
                    },
                  ],
                },
              },
              {
                qText: '$3,444,735.82',
                qNum: 3444735.8199999975,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3785.07246',
                qNum: 3785.072460000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Blue Label Vegetable Soup',
                qNum: 'NaN',
                qElemNumber: 804,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3647797',
                      qNum: 3647797.240000002,
                    },
                  ],
                },
              },
              {
                qText: '$3,647,797.24',
                qNum: 3647797.240000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3765.59157',
                qNum: 3765.591570000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Decaf Coffee',
                qNum: 'NaN',
                qElemNumber: 745,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3574936',
                      qNum: 3574936.4200000027,
                    },
                  ],
                },
              },
              {
                qText: '$3,574,936.42',
                qNum: 3574936.4200000027,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3754.09114',
                qNum: 3754.09114,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Good Merlot Wine',
                qNum: 'NaN',
                qElemNumber: 720,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3440353',
                      qNum: 3440352.8700000015,
                    },
                  ],
                },
              },
              {
                qText: '$3,440,352.87',
                qNum: 3440352.8700000015,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3753.64275',
                qNum: 3753.642750000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Strawberry Fruit Roll',
                qNum: 'NaN',
                qElemNumber: 400,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3485312',
                      qNum: 3485311.8599999947,
                    },
                  ],
                },
              },
              {
                qText: '$3,485,311.86',
                qNum: 3485311.8599999947,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3722.5718',
                qNum: 3722.5718,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Sesame Oil',
                qNum: 'NaN',
                qElemNumber: 519,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3282677',
                      qNum: 3282676.540000004,
                    },
                  ],
                },
              },
              {
                qText: '$3,282,676.54',
                qNum: 3282676.540000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3671.85312',
                qNum: 3671.85312,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Dried Dates',
                qNum: 'NaN',
                qElemNumber: 571,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3430637',
                      qNum: 3430636.8899999987,
                    },
                  ],
                },
              },
              {
                qText: '$3,430,636.89',
                qNum: 3430636.8899999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3643.31036',
                qNum: 3643.310360000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Red Pepper',
                qNum: 'NaN',
                qElemNumber: 501,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3369246',
                      qNum: 3369245.8199999984,
                    },
                  ],
                },
              },
              {
                qText: '$3,369,245.82',
                qNum: 3369245.8199999984,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3592.30672',
                qNum: 3592.3067200000023,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Oregano',
                qNum: 'NaN',
                qElemNumber: 319,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3296560',
                      qNum: 3296560.1699999976,
                    },
                  ],
                },
              },
              {
                qText: '$3,296,560.17',
                qNum: 3296560.1699999976,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3564.72888',
                qNum: 3564.728880000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson Whole Milk',
                qNum: 'NaN',
                qElemNumber: 472,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3171361',
                      qNum: 3171360.990000003,
                    },
                  ],
                },
              },
              {
                qText: '$3,171,360.99',
                qNum: 3171360.990000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3563.96611',
                qNum: 3563.9661100000017,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Walrus Chardonnay Wine',
                qNum: 'NaN',
                qElemNumber: 638,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3247062',
                      qNum: 3247061.8699999982,
                    },
                  ],
                },
              },
              {
                qText: '$3,247,061.87',
                qNum: 3247061.8699999982,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3498.47972',
                qNum: 3498.4797200000025,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Walrus Merlot Wine',
                qNum: 'NaN',
                qElemNumber: 773,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3196133',
                      qNum: 3196133.27,
                    },
                  ],
                },
              },
              {
                qText: '$3,196,133.27',
                qNum: 3196133.27,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3497.73573',
                qNum: 3497.735730000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson Strawberry Yogurt',
                qNum: 'NaN',
                qElemNumber: 498,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3417949',
                      qNum: 3417948.549999998,
                    },
                  ],
                },
              },
              {
                qText: '$3,417,948.55',
                qNum: 3417948.549999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3480.7285',
                qNum: 3480.728500000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big Time Low Fat Waffles',
                qNum: 'NaN',
                qElemNumber: 570,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3104731',
                      qNum: 3104730.8500000006,
                    },
                  ],
                },
              },
              {
                qText: '$3,104,730.85',
                qNum: 3104730.8500000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3474.5199',
                qNum: 3474.5199,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Chunky Peanut Butter',
                qNum: 'NaN',
                qElemNumber: 486,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3238864',
                      qNum: 3238863.6300000004,
                    },
                  ],
                },
              },
              {
                qText: '$3,238,863.63',
                qNum: 3238863.6300000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3450.23418',
                qNum: 3450.23418,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Summer Squash',
                qNum: 'NaN',
                qElemNumber: 618,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3227940',
                      qNum: 3227940.079999999,
                    },
                  ],
                },
              },
              {
                qText: '$3,227,940.08',
                qNum: 3227940.079999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3430.58388',
                qNum: 3430.583880000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Low Fat Cookies',
                qNum: 'NaN',
                qElemNumber: 757,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3193494',
                      qNum: 3193493.969999999,
                    },
                  ],
                },
              },
              {
                qText: '$3,193,493.97',
                qNum: 3193493.969999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3379.82591',
                qNum: 3379.8259100000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Chicken Ramen Soup',
                qNum: 'NaN',
                qElemNumber: 523,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3131388',
                      qNum: 3131388.070000001,
                    },
                  ],
                },
              },
              {
                qText: '$3,131,388.07',
                qNum: 3131388.070000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3358.77922',
                qNum: 3358.7792200000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'American Low Fat Cole Slaw',
                qNum: 'NaN',
                qElemNumber: 536,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3053623',
                      qNum: 3053622.8900000034,
                    },
                  ],
                },
              },
              {
                qText: '$3,053,622.89',
                qNum: 3053622.8900000034,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3344.43964',
                qNum: 3344.4396399999982,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Brown Sugar',
                qNum: 'NaN',
                qElemNumber: 467,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2980284',
                      qNum: 2980284.39,
                    },
                  ],
                },
              },
              {
                qText: '$2,980,284.39',
                qNum: 2980284.39,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3340.98443',
                qNum: 3340.984430000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Canned Peas',
                qNum: 'NaN',
                qElemNumber: 382,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2967709',
                      qNum: 2967708.5600000005,
                    },
                  ],
                },
              },
              {
                qText: '$2,967,708.56',
                qNum: 2967708.5600000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3302.39384',
                qNum: 3302.393840000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Sweet Onion',
                qNum: 'NaN',
                qElemNumber: 795,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2940741',
                      qNum: 2940740.880000001,
                    },
                  ],
                },
              },
              {
                qText: '$2,940,740.88',
                qNum: 2940740.880000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3251.23581',
                qNum: 3251.235809999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Fancy Canned Sardines',
                qNum: 'NaN',
                qElemNumber: 245,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2880921',
                      qNum: 2880921.2799999975,
                    },
                  ],
                },
              },
              {
                qText: '$2,880,921.28',
                qNum: 2880921.2799999975,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3186.84527',
                qNum: 3186.845270000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Token Mango Drink',
                qNum: 'NaN',
                qElemNumber: 219,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2816691',
                      qNum: 2816691.499999999,
                    },
                  ],
                },
              },
              {
                qText: '$2,816,691.50',
                qNum: 2816691.499999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3142.59799',
                qNum: 3142.5979900000007,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Dried Apples',
                qNum: 'NaN',
                qElemNumber: 780,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3100548',
                      qNum: 3100548.08,
                    },
                  ],
                },
              },
              {
                qText: '$3,100,548.08',
                qNum: 3100548.08,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3108.89333',
                qNum: 3108.8933300000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Medalist Ravioli',
                qNum: 'NaN',
                qElemNumber: 818,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3121508',
                      qNum: 3121508.0899999985,
                    },
                  ],
                },
              },
              {
                qText: '$3,121,508.09',
                qNum: 3121508.0899999985,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3103.56504',
                qNum: 3103.565039999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Choice Bubble Gum',
                qNum: 'NaN',
                qElemNumber: 564,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2757277',
                      qNum: 2757277.4399999976,
                    },
                  ],
                },
              },
              {
                qText: '$2,757,277.44',
                qNum: 2757277.4399999976,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3080.63862',
                qNum: 3080.6386199999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Carlson Low Fat Sour Cream',
                qNum: 'NaN',
                qElemNumber: 490,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2843592',
                      qNum: 2843591.850000001,
                    },
                  ],
                },
              },
              {
                qText: '$2,843,591.85',
                qNum: 2843591.850000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3070.44813',
                qNum: 3070.4481300000007,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Canned Beets',
                qNum: 'NaN',
                qElemNumber: 796,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2708296',
                      qNum: 2708296.160000001,
                    },
                  ],
                },
              },
              {
                qText: '$2,708,296.16',
                qNum: 2708296.160000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2980.85443',
                qNum: 2980.8544299999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Curlew Lox',
                qNum: 'NaN',
                qElemNumber: 799,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2670631',
                      qNum: 2670630.8700000015,
                    },
                  ],
                },
              },
              {
                qText: '$2,670,630.87',
                qNum: 2670630.8700000015,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2926.05641',
                qNum: 2926.0564099999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Fancy Canned Anchovies',
                qNum: 'NaN',
                qElemNumber: 814,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2555193',
                      qNum: 2555192.959999999,
                    },
                  ],
                },
              },
              {
                qText: '$2,555,192.96',
                qNum: 2555192.959999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2898.58014',
                qNum: 2898.5801399999987,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Apple Jelly',
                qNum: 'NaN',
                qElemNumber: 474,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2565958',
                      qNum: 2565957.66,
                    },
                  ],
                },
              },
              {
                qText: '$2,565,957.66',
                qNum: 2565957.66,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2882.37328',
                qNum: 2882.373280000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Rice Soup',
                qNum: 'NaN',
                qElemNumber: 246,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2629600',
                      qNum: 2629600.239999998,
                    },
                  ],
                },
              },
              {
                qText: '$2,629,600.24',
                qNum: 2629600.239999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2860.04584',
                qNum: 2860.045840000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Frosted Cookies',
                qNum: 'NaN',
                qElemNumber: 401,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2496930',
                      qNum: 2496930.089999999,
                    },
                  ],
                },
              },
              {
                qText: '$2,496,930.09',
                qNum: 2496930.089999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '9',
                qNum: 9,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2858.92788',
                qNum: 2858.927880000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Excellent Apple Juice',
                qNum: 'NaN',
                qElemNumber: 797,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2533756',
                      qNum: 2533756.459999999,
                    },
                  ],
                },
              },
              {
                qText: '$2,533,756.46',
                qNum: 2533756.459999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2834.3952',
                qNum: 2834.3952000000013,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla Muenster Cheese',
                qNum: 'NaN',
                qElemNumber: 807,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2492571',
                      qNum: 2492571.2400000016,
                    },
                  ],
                },
              },
              {
                qText: '$2,492,571.24',
                qNum: 2492571.2400000016,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2832.01556',
                qNum: 2832.01556,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Apple Jam',
                qNum: 'NaN',
                qElemNumber: 813,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2665538',
                      qNum: 2665537.5099999965,
                    },
                  ],
                },
              },
              {
                qText: '$2,665,537.51',
                qNum: 2665537.5099999965,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2831.75441',
                qNum: 2831.7544099999986,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Sesame Crackers',
                qNum: 'NaN',
                qElemNumber: 727,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2486001',
                      qNum: 2486000.7800000003,
                    },
                  ],
                },
              },
              {
                qText: '$2,486,000.78',
                qNum: 2486000.7800000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2819.84416',
                qNum: 2819.8441600000024,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Vegetable Soup',
                qNum: 'NaN',
                qElemNumber: 232,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2590674',
                      qNum: 2590673.8500000006,
                    },
                  ],
                },
              },
              {
                qText: '$2,590,673.85',
                qNum: 2590673.8500000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '10',
                qNum: 10,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2816.6368',
                qNum: 2816.6368,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Choice Fudge Brownies',
                qNum: 'NaN',
                qElemNumber: 767,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2709254',
                      qNum: 2709254.1999999997,
                    },
                  ],
                },
              },
              {
                qText: '$2,709,254.20',
                qNum: 2709254.1999999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2752.26386',
                qNum: 2752.263860000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Big City Canned Peaches',
                qNum: 'NaN',
                qElemNumber: 635,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2554071',
                      qNum: 2554070.969999999,
                    },
                  ],
                },
              },
              {
                qText: '$2,554,070.97',
                qNum: 2554070.969999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2',
                qNum: 2,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2730.60662',
                qNum: 2730.606620000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Thresher Bubble Gum',
                qNum: 'NaN',
                qElemNumber: 102,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2694617',
                      qNum: 2694616.7600000016,
                    },
                  ],
                },
              },
              {
                qText: '$2,694,616.76',
                qNum: 2694616.7600000016,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2717.41029',
                qNum: 2717.410290000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla Buttermilk',
                qNum: 'NaN',
                qElemNumber: 238,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2446780',
                      qNum: 2446779.9399999995,
                    },
                  ],
                },
              },
              {
                qText: '$2,446,779.94',
                qNum: 2446779.9399999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2702.9975',
                qNum: 2702.997500000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Mandarin Oranges',
                qNum: 'NaN',
                qElemNumber: 729,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2451070',
                      qNum: 2451069.970000001,
                    },
                  ],
                },
              },
              {
                qText: '$2,451,069.97',
                qNum: 2451069.970000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2702.89418',
                qNum: 2702.89418,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Kiwi Lox',
                qNum: 'NaN',
                qElemNumber: 157,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2410215',
                      qNum: 2410215.2500000023,
                    },
                  ],
                },
              },
              {
                qText: '$2,410,215.25',
                qNum: 2410215.2500000023,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2660.05141',
                qNum: 2660.0514100000046,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Canola Oil',
                qNum: 'NaN',
                qElemNumber: 761,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2331185',
                      qNum: 2331184.5700000017,
                    },
                  ],
                },
              },
              {
                qText: '$2,331,184.57',
                qNum: 2331184.5700000017,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2636.80006',
                qNum: 2636.8000600000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tell Tale Honey Dew',
                qNum: 'NaN',
                qElemNumber: 293,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2324954',
                      qNum: 2324954.2299999995,
                    },
                  ],
                },
              },
              {
                qText: '$2,324,954.23',
                qNum: 2324954.2299999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2516.19218',
                qNum: 2516.192180000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Red Pepper',
                qNum: 'NaN',
                qElemNumber: 431,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2474044',
                      qNum: 2474043.9799999995,
                    },
                  ],
                },
              },
              {
                qText: '$2,474,043.98',
                qNum: 2474043.9799999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2513.12311',
                qNum: 2513.1231100000023,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'National Small Brown Eggs',
                qNum: 'NaN',
                qElemNumber: 422,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2187755',
                      qNum: 2187755.3000000007,
                    },
                  ],
                },
              },
              {
                qText: '$2,187,755.30',
                qNum: 2187755.3000000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2467.2224',
                qNum: 2467.2224000000015,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Chicken Soup',
                qNum: 'NaN',
                qElemNumber: 806,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2078620',
                      qNum: 2078619.9200000004,
                    },
                  ],
                },
              },
              {
                qText: '$2,078,619.92',
                qNum: 2078619.9200000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2355.62649',
                qNum: 2355.6264900000015,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla Large Curd Cottage Cheese',
                qNum: 'NaN',
                qElemNumber: 598,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2091947',
                      qNum: 2091946.5099999998,
                    },
                  ],
                },
              },
              {
                qText: '$2,091,946.51',
                qNum: 2091946.5099999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2306.31078',
                qNum: 2306.3107800000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Red Spade Roasted Chicken',
                qNum: 'NaN',
                qElemNumber: 573,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2187485',
                      qNum: 2187484.7800000007,
                    },
                  ],
                },
              },
              {
                qText: '$2,187,484.78',
                qNum: 2187484.7800000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2275.65733',
                qNum: 2275.65733,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Pearl Chablis Wine',
                qNum: 'NaN',
                qElemNumber: 721,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2075681',
                      qNum: 2075681.3600000006,
                    },
                  ],
                },
              },
              {
                qText: '$2,075,681.36',
                qNum: 2075681.3600000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2247.68927',
                qNum: 2247.6892700000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Garlic',
                qNum: 'NaN',
                qElemNumber: 802,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2008036',
                      qNum: 2008036.010000001,
                    },
                  ],
                },
              },
              {
                qText: '$2,008,036.01',
                qNum: 2008036.010000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2230.31952',
                qNum: 2230.3195199999986,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Fondue Mix',
                qNum: 'NaN',
                qElemNumber: 256,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1942635',
                      qNum: 1942635.2300000002,
                    },
                  ],
                },
              },
              {
                qText: '$1,942,635.23',
                qNum: 1942635.2300000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2167.05731',
                qNum: 2167.057309999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Thresher Tasty Candy Bar',
                qNum: 'NaN',
                qElemNumber: 819,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2180465',
                      qNum: 2180465.0500000017,
                    },
                  ],
                },
              },
              {
                qText: '$2,180,465.05',
                qNum: 2180465.0500000017,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2118.77728',
                qNum: 2118.777280000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gorilla Low Fat Sour Cream',
                qNum: 'NaN',
                qElemNumber: 607,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1861777',
                      qNum: 1861777.3200000008,
                    },
                  ],
                },
              },
              {
                qText: '$1,861,777.32',
                qNum: 1861777.3200000008,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2020.02531',
                qNum: 2020.0253099999995,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Creamed Corn',
                qNum: 'NaN',
                qElemNumber: 805,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1837527',
                      qNum: 1837526.7699999996,
                    },
                  ],
                },
              },
              {
                qText: '$1,837,526.77',
                qNum: 1837526.7699999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1984.20993',
                qNum: 1984.20993,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Elephant Garlic',
                qNum: 'NaN',
                qElemNumber: 815,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2039521',
                      qNum: 2039521.4500000004,
                    },
                  ],
                },
              },
              {
                qText: '$2,039,521.45',
                qNum: 2039521.4500000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1976.64669',
                qNum: 1976.6466899999996,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Great Bagels',
                qNum: 'NaN',
                qElemNumber: 439,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1705880',
                      qNum: 1705879.68,
                    },
                  ],
                },
              },
              {
                qText: '$1,705,879.68',
                qNum: 1705879.68,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1957.54427',
                qNum: 1957.5442699999994,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best Regular Coffee',
                qNum: 'NaN',
                qElemNumber: 566,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1772302',
                      qNum: 1772302.04,
                    },
                  ],
                },
              },
              {
                qText: '$1,772,302.04',
                qNum: 1772302.04,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1918.26514',
                qNum: 1918.2651400000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Sesame Crackers',
                qNum: 'NaN',
                qElemNumber: 787,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1615977',
                      qNum: 1615977.46,
                    },
                  ],
                },
              },
              {
                qText: '$1,615,977.46',
                qNum: 1615977.46,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1885.5613',
                qNum: 1885.5612999999996,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Chicken Noodle Soup',
                qNum: 'NaN',
                qElemNumber: 810,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1598873',
                      qNum: 1598873.1600000006,
                    },
                  ],
                },
              },
              {
                qText: '$1,598,873.16',
                qNum: 1598873.1600000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1835.51628',
                qNum: 1835.5162800000005,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Prepared Salad',
                qNum: 'NaN',
                qElemNumber: 821,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1596286',
                      qNum: 1596286.3099999998,
                    },
                  ],
                },
              },
              {
                qText: '$1,596,286.31',
                qNum: 1596286.3099999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2',
                qNum: 2,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1776.00437',
                qNum: 1776.0043700000008,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Buttered Popcorn',
                qNum: 'NaN',
                qElemNumber: 784,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1489946',
                      qNum: 1489946.3299999998,
                    },
                  ],
                },
              },
              {
                qText: '$1,489,946.33',
                qNum: 1489946.3299999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1729.7215',
                qNum: 1729.7215,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ebony Dried Mushrooms',
                qNum: 'NaN',
                qElemNumber: 770,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1590511',
                      qNum: 1590511.4100000015,
                    },
                  ],
                },
              },
              {
                qText: '$1,590,511.41',
                qNum: 1590511.4100000015,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1708.79476',
                qNum: 1708.7947599999989,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Best Corn Puffs',
                qNum: 'NaN',
                qElemNumber: 697,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1515575',
                      qNum: 1515575.3499999999,
                    },
                  ],
                },
              },
              {
                qText: '$1,515,575.35',
                qNum: 1515575.3499999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1679.84401',
                qNum: 1679.84401,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Cutting Edge Sliced Chicken',
                qNum: 'NaN',
                qElemNumber: 759,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1481816',
                      qNum: 1481816.4500000011,
                    },
                  ],
                },
              },
              {
                qText: '$1,481,816.45',
                qNum: 1481816.4500000011,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1628.14419',
                qNum: 1628.1441899999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Dried Apples',
                qNum: 'NaN',
                qElemNumber: 793,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1458313',
                      qNum: 1458312.8800000004,
                    },
                  ],
                },
              },
              {
                qText: '$1,458,312.88',
                qNum: 1458312.8800000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1612.1611',
                qNum: 1612.1611000000007,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Apple Fruit Roll',
                qNum: 'NaN',
                qElemNumber: 750,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1521307',
                      qNum: 1521306.7399999993,
                    },
                  ],
                },
              },
              {
                qText: '$1,521,306.74',
                qNum: 1521306.7399999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1522.45858',
                qNum: 1522.4585800000011,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Nationeel Cheese Dip',
                qNum: 'NaN',
                qElemNumber: 456,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1328226',
                      qNum: 1328226.3700000017,
                    },
                  ],
                },
              },
              {
                qText: '$1,328,226.37',
                qNum: 1328226.3700000017,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1480.17267',
                qNum: 1480.1726700000006,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fabulous Berry Juice',
                qNum: 'NaN',
                qElemNumber: 714,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1376593',
                      qNum: 1376593.2699999998,
                    },
                  ],
                },
              },
              {
                qText: '$1,376,593.27',
                qNum: 1376593.2699999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1471.75988',
                qNum: 1471.7598799999996,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Apple Jam',
                qNum: 'NaN',
                qElemNumber: 612,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1300129',
                      qNum: 1300128.89,
                    },
                  ],
                },
              },
              {
                qText: '$1,300,128.89',
                qNum: 1300128.89,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1432.23878',
                qNum: 1432.23878,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bravo Canned Tuna in Oil',
                qNum: 'NaN',
                qElemNumber: 785,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1150269',
                      qNum: 1150268.7099999997,
                    },
                  ],
                },
              },
              {
                qText: '$1,150,268.71',
                qNum: 1150268.7099999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '5',
                qNum: 5,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1422.85321',
                qNum: 1422.8532099999993,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Moms Low Fat Cole Slaw',
                qNum: 'NaN',
                qElemNumber: 707,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1133500',
                      qNum: 1133499.600000001,
                    },
                  ],
                },
              },
              {
                qText: '$1,133,499.60',
                qNum: 1133499.600000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1331.0241',
                qNum: 1331.024100000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Grape Jelly',
                qNum: 'NaN',
                qElemNumber: 809,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1180979',
                      qNum: 1180979.0999999994,
                    },
                  ],
                },
              },
              {
                qText: '$1,180,979.10',
                qNum: 1180979.0999999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1291.67799',
                qNum: 1291.67799,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Jumbo Large Brown Eggs',
                qNum: 'NaN',
                qElemNumber: 801,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1171321',
                      qNum: 1171320.65,
                    },
                  ],
                },
              },
              {
                qText: '$1,171,320.65',
                qNum: 1171320.65,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1284.7816',
                qNum: 1284.7815999999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Fudge Brownies',
                qNum: 'NaN',
                qElemNumber: 738,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1107418',
                      qNum: 1107417.7699999998,
                    },
                  ],
                },
              },
              {
                qText: '$1,107,417.77',
                qNum: 1107417.7699999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1254.84701',
                qNum: 1254.8470099999997,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Landslide Tomato Sauce',
                qNum: 'NaN',
                qElemNumber: 817,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1169353',
                      qNum: 1169353.369999999,
                    },
                  ],
                },
              },
              {
                qText: '$1,169,353.37',
                qNum: 1169353.369999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1248.54716',
                qNum: 1248.5471599999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Imagine Low Fat French Fries',
                qNum: 'NaN',
                qElemNumber: 779,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1109395',
                      qNum: 1109395.1800000006,
                    },
                  ],
                },
              },
              {
                qText: '$1,109,395.18',
                qNum: 1109395.1800000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1229.4616',
                qNum: 1229.461599999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Better Canned Tomatos',
                qNum: 'NaN',
                qElemNumber: 789,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1092923',
                      qNum: 1092922.8299999994,
                    },
                  ],
                },
              },
              {
                qText: '$1,092,922.83',
                qNum: 1092922.8299999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1164.33749',
                qNum: 1164.3374900000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'American Sliced Chicken',
                qNum: 'NaN',
                qElemNumber: 788,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1022631',
                      qNum: 1022630.9199999998,
                    },
                  ],
                },
              },
              {
                qText: '$1,022,630.92',
                qNum: 1022630.9199999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '4',
                qNum: 4,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1107.41202',
                qNum: 1107.4120199999998,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'BBB Best French Roast Coffee',
                qNum: 'NaN',
                qElemNumber: 508,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '845960',
                      qNum: 845960.2300000002,
                    },
                  ],
                },
              },
              {
                qText: '$845,960.23',
                qNum: 845960.2300000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2',
                qNum: 2,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '978.66755',
                qNum: 978.6675500000002,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Just Right Chicken Noodle Soup',
                qNum: 'NaN',
                qElemNumber: 820,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '892159',
                      qNum: 892158.5700000001,
                    },
                  ],
                },
              },
              {
                qText: '$892,158.57',
                qNum: 892158.5700000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2',
                qNum: 2,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '969.8642',
                qNum: 969.8642000000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Excellent Strawberry Drink',
                qNum: 'NaN',
                qElemNumber: 816,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '710053',
                      qNum: 710053.0400000007,
                    },
                  ],
                },
              },
              {
                qText: '$710,053.04',
                qNum: 710053.0400000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2',
                qNum: 2,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '846.44057',
                qNum: 846.4405700000003,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'High Top Mushrooms',
                qNum: 'NaN',
                qElemNumber: 823,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '765322',
                      qNum: 765321.9800000002,
                    },
                  ],
                },
              },
              {
                qText: '$765,321.98',
                qNum: 765321.9800000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '2',
                qNum: 2,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '844.288',
                qNum: 844.2879999999999,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Medalist Manicotti',
                qNum: 'NaN',
                qElemNumber: 703,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '769134',
                      qNum: 769133.8700000001,
                    },
                  ],
                },
              },
              {
                qText: '$769,133.87',
                qNum: 769133.8700000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '843.89691',
                qNum: 843.8969100000004,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fast Mini Donuts',
                qNum: 'NaN',
                qElemNumber: 822,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '421749',
                      qNum: 421748.79999999993,
                    },
                  ],
                },
              },
              {
                qText: '$421,748.80',
                qNum: 421748.79999999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '3',
                qNum: 3,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '480.29345',
                qNum: 480.29345,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Super Strawberry Jam',
                qNum: 'NaN',
                qElemNumber: 812,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '40604',
                      qNum: 40603.96000000001,
                    },
                  ],
                },
              },
              {
                qText: '$40,603.96',
                qNum: 40603.96000000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '43.33717',
                qNum: 43.33717000000001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
          ],
          qTails: [
            {
              qUp: 0,
              qDown: 0,
            },
          ],
          qArea: {
            qLeft: 0,
            qTop: 0,
            qWidth: 4,
            qHeight: 825,
          },
        },
      ],
      getEffectiveProperties: {},
    },
  ],
});
