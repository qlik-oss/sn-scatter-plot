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
            qcy: 131,
          },
          qDimensionInfo: [
            {
              qFallbackTitle: 'Customer',
              qApprMaxGlyphCount: 34,
              qCardinal: 130,
              qSortIndicator: 'A',
              qGroupFallbackTitles: ['Customer'],
              qGroupPos: 0,
              qStateCounts: {
                qLocked: 0,
                qSelected: 0,
                qOption: 130,
                qDeselected: 0,
                qAlternative: 0,
                qExcluded: 0,
                qSelectedExcluded: 0,
                qLockedExcluded: 0,
              },
              qTags: ['$text'],
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
              qGroupFieldDefs: ['Customer'],
              qMin: 'NaN',
              qMax: 'NaN',
              qAttrExprInfo: [],
              qAttrDimInfo: [],
              qCardinalities: {
                qCardinal: 130,
                qHypercubeCardinal: 131,
                qAllValuesCardinal: -1,
              },
              qLibraryId: 'pcZcGjn',
              title: 'Customer',
              autoSort: true,
              cId: 'vCNUf',
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
              qMin: 7320.990000000003,
              qMax: 16208458.889999997,
              qAttrExprInfo: [
                {
                  qMin: 4278190080,
                  qMax: 4286611456,
                  qFallbackTitle:
                    "if(Region='Americas',red(),\r\n\tif(Region='Asia',brown(),\n    \tif(Region='Europe',blue(),\n        \tif(Region='Pacific',green(),\n\t\t\t\tif(Region='Pacific',yellow(),black())))))",
                  qMinText: 'RGB(0,0,0)',
                  qMaxText: 'RGB(128,128,0)',
                  qNumFormat: {
                    qType: 'U',
                    qnDec: 0,
                    qUseThou: 0,
                  },
                  qIsAutoFormat: true,
                  id: 'colorByExpression',
                },
              ],
              qAttrDimInfo: [],
              qLibraryId: 'napvtJ',
              qTrendLines: [],
              autoSort: true,
              cId: 'RPjZje',
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
              qMin: 12.143190000000004,
              qMax: 17483.981000000007,
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
              qMax: 1,
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
              qText: '49609.47729',
              qNum: 49609.47729000036,
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
          rangeBubbleSizes: [4, 8],
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
          mode: 'byExpression',
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
          colorExpression:
            "if(Region='Americas',red(),\r\n\tif(Region='Asia',brown(),\n    \tif(Region='Europe',blue(),\n        \tif(Region='Pacific',green(),\n\t\t\t\tif(Region='Pacific',yellow(),black())))))",
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
                qText: 'Hetrick Systems',
                qNum: 'NaN',
                qElemNumber: 4,
                qState: 'O',
              },
              {
                qText: '$16,208,458.89',
                qNum: 16208458.889999997,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '17483.981',
                qNum: 17483.981000000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'MATRIX',
                qNum: 'NaN',
                qElemNumber: 22,
                qState: 'O',
              },
              {
                qText: '$16,208,458.89',
                qNum: 16208458.889999997,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '17483.981',
                qNum: 17483.981000000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'RFI Corporation',
                qNum: 'NaN',
                qElemNumber: 30,
                qState: 'O',
              },
              {
                qText: '$16,208,458.89',
                qNum: 16208458.889999997,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '17483.981',
                qNum: 17483.981000000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'ValiCert',
                qNum: 'NaN',
                qElemNumber: 20,
                qState: 'O',
              },
              {
                qText: '$16,208,458.89',
                qNum: 16208458.889999997,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '17483.981',
                qNum: 17483.981000000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ethyl Corporation',
                qNum: 'NaN',
                qElemNumber: 14,
                qState: 'O',
              },
              {
                qText: '$15,569,903.27',
                qNum: 15569903.269999992,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '16783.41993',
                qNum: 16783.419930000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Homebound',
                qNum: 'NaN',
                qElemNumber: 5,
                qState: 'O',
              },
              {
                qText: '$15,569,903.27',
                qNum: 15569903.269999992,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '16783.41993',
                qNum: 16783.419930000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ra Co Amo',
                qNum: 'NaN',
                qElemNumber: 11,
                qState: 'O',
              },
              {
                qText: '$15,569,903.27',
                qNum: 15569903.269999992,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '16783.41993',
                qNum: 16783.419930000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Road Warrior International',
                qNum: 'NaN',
                qElemNumber: 59,
                qState: 'O',
              },
              {
                qText: '$15,471,055.98',
                qNum: 15471055.979999993,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '16751.63965',
                qNum: 16751.639650000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Pace',
                qNum: 'NaN',
                qElemNumber: 8,
                qState: 'O',
              },
              {
                qText: '$14,980,005.20',
                qNum: 14980005.199999992,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '16092.3514',
                qNum: 16092.351399999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'LiveWire BBS and   Favourite Links',
                qNum: 'NaN',
                qElemNumber: 16,
                qState: 'O',
              },
              {
                qText: '$14,912,416.86',
                qNum: 14912416.859999998,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '16010.82545',
                qNum: 16010.825450000002,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'A2Z Solutions',
                qNum: 'NaN',
                qElemNumber: 12,
                qState: 'O',
              },
              {
                qText: '$14,408,610.78',
                qNum: 14408610.780000003,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '15494.01206',
                qNum: 15494.012059999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Dayton Malleable Inc.',
                qNum: 'NaN',
                qElemNumber: 61,
                qState: 'O',
              },
              {
                qText: '$14,244,848.11',
                qNum: 14244848.109999994,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '15337.54471',
                qNum: 15337.54470999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Benedict',
                qNum: 'NaN',
                qElemNumber: 28,
                qState: 'O',
              },
              {
                qText: '$14,158,566.41',
                qNum: 14158566.409999996,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '15224.2419',
                qNum: 15224.241899999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Signature',
                qNum: 'NaN',
                qElemNumber: 18,
                qState: 'O',
              },
              {
                qText: '$14,106,446.81',
                qNum: 14106446.81,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '15123.15424',
                qNum: 15123.154239999989,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Stone Consolidated Corporation',
                qNum: 'NaN',
                qElemNumber: 70,
                qState: 'O',
              },
              {
                qText: '$13,612,329.45',
                qNum: 13612329.450000005,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '14510.7733',
                qNum: 14510.773299999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Quantum 4Xyte  Architects',
                qNum: 'NaN',
                qElemNumber: 34,
                qState: 'O',
              },
              {
                qText: '$12,967,441.15',
                qNum: 12967441.149999995,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '13873.59434',
                qNum: 13873.594339999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Harvard Trust Company',
                qNum: 'NaN',
                qElemNumber: 57,
                qState: 'O',
              },
              {
                qText: '$12,763,322.94',
                qNum: 12763322.940000001,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '13870.03853',
                qNum: 13870.038529999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Remedy',
                qNum: 'NaN',
                qElemNumber: 60,
                qState: 'O',
              },
              {
                qText: '$13,018,344.52',
                qNum: 13018344.520000003,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '13860.62154',
                qNum: 13860.621539999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Clearout',
                qNum: 'NaN',
                qElemNumber: 21,
                qState: 'O',
              },
              {
                qText: '$12,864,728.72',
                qNum: 12864728.719999999,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '13796.43438',
                qNum: 13796.434379999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'HCHS',
                qNum: 'NaN',
                qElemNumber: 41,
                qState: 'O',
              },
              {
                qText: '$12,858,437.52',
                qNum: 12858437.52,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '13792.00312',
                qNum: 13792.003119999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'R&R Group',
                qNum: 'NaN',
                qElemNumber: 35,
                qState: 'O',
              },
              {
                qText: '$12,834,620.58',
                qNum: 12834620.579999993,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '13739.44869',
                qNum: 13739.44868999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ready-to-Run',
                qNum: 'NaN',
                qElemNumber: 74,
                qState: 'O',
              },
              {
                qText: '$12,913,427.75',
                qNum: 12913427.750000004,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '13738.11355',
                qNum: 13738.113549999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Kool-Seal',
                qNum: 'NaN',
                qElemNumber: 33,
                qState: 'O',
              },
              {
                qText: '$12,867,460.41',
                qNum: 12867460.409999995,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '13736.87662',
                qNum: 13736.876620000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tao Group',
                qNum: 'NaN',
                qElemNumber: 72,
                qState: 'O',
              },
              {
                qText: '$12,006,317.09',
                qNum: 12006317.090000002,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '13033.11094',
                qNum: 13033.110939999986,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Pinnacle Micro',
                qNum: 'NaN',
                qElemNumber: 17,
                qState: 'O',
              },
              {
                qText: '$11,811,398.79',
                qNum: 11811398.789999994,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '12993.84583',
                qNum: 12993.845830000011,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Time Warner',
                qNum: 'NaN',
                qElemNumber: 27,
                qState: 'O',
              },
              {
                qText: '$11,811,398.79',
                qNum: 11811398.789999994,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '12993.84583',
                qNum: 12993.845830000011,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Deak-Perera Group.',
                qNum: 'NaN',
                qElemNumber: 1,
                qState: 'O',
              },
              {
                qText: '$12,200,941.83',
                qNum: 12200941.829999998,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '12991.81505',
                qNum: 12991.815049999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'J. S. Lee Associates',
                qNum: 'NaN',
                qElemNumber: 7,
                qState: 'O',
              },
              {
                qText: '$11,735,257.41',
                qNum: 11735257.409999995,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '12910.31092',
                qNum: 12910.310920000014,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Paracel',
                qNum: 'NaN',
                qElemNumber: 9,
                qState: 'O',
              },
              {
                qText: '$11,735,257.41',
                qNum: 11735257.409999995,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '12910.31092',
                qNum: 12910.310920000014,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Livermore  Laboratories (LSLI)',
                qNum: 'NaN',
                qElemNumber: 77,
                qState: 'O',
              },
              {
                qText: '$11,687,178.40',
                qNum: 11687178.4,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '12391.83198',
                qNum: 12391.83198,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Xilinx',
                qNum: 'NaN',
                qElemNumber: 31,
                qState: 'O',
              },
              {
                qText: '$11,142,343.83',
                qNum: 11142343.829999994,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '12323.4939',
                qNum: 12323.493900000016,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Pacific Sierra Research',
                qNum: 'NaN',
                qElemNumber: 54,
                qState: 'O',
              },
              {
                qText: '$11,210,022.56',
                qNum: 11210022.55999999,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '11954.21209',
                qNum: 11954.212089999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'IBVA',
                qNum: 'NaN',
                qElemNumber: 42,
                qState: 'O',
              },
              {
                qText: '$10,850,600.22',
                qNum: 10850600.219999995,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '11916.46314',
                qNum: 11916.463140000018,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Screen Saver.com',
                qNum: 'NaN',
                qElemNumber: 25,
                qState: 'O',
              },
              {
                qText: '$10,683,089.82',
                qNum: 10683089.819999995,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '11626.4468',
                qNum: 11626.446800000034,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Renegade info Crew',
                qNum: 'NaN',
                qElemNumber: 23,
                qState: 'O',
              },
              {
                qText: '$10,496,985.06',
                qNum: 10496985.059999995,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '11615.88051',
                qNum: 11615.88051000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Watcom International',
                qNum: 'NaN',
                qElemNumber: 82,
                qState: 'O',
              },
              {
                qText: '$10,757,091.57',
                qNum: 10757091.570000011,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '11587.89936',
                qNum: 11587.899359999996,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gulf and Western Industries',
                qNum: 'NaN',
                qElemNumber: 63,
                qState: 'O',
              },
              {
                qText: '$10,695,838.62',
                qNum: 10695838.619999994,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '11243.81759',
                qNum: 11243.817589999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Karsing',
                qNum: 'NaN',
                qElemNumber: 71,
                qState: 'O',
              },
              {
                qText: '$10,269,107.08',
                qNum: 10269107.079999989,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '11240.53292',
                qNum: 11240.532920000027,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Robust Code',
                qNum: 'NaN',
                qElemNumber: 67,
                qState: 'O',
              },
              {
                qText: '$10,356,406.92',
                qNum: 10356406.920000011,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '11123.98136',
                qNum: 11123.981359999982,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Zilog',
                qNum: 'NaN',
                qElemNumber: 75,
                qState: 'O',
              },
              {
                qText: '$10,554,818.77',
                qNum: 10554818.76999999,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '11108.15638',
                qNum: 11108.156379999988,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Filmotype',
                qNum: 'NaN',
                qElemNumber: 76,
                qState: 'O',
              },
              {
                qText: '$10,367,655.52',
                qNum: 10367655.519999996,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '10863.74276',
                qNum: 10863.742759999988,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Teca-Print',
                qNum: 'NaN',
                qElemNumber: 84,
                qState: 'O',
              },
              {
                qText: '$10,058,189.87',
                qNum: 10058189.870000012,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '10815.23961',
                qNum: 10815.239609999984,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'CAF Systemhaus',
                qNum: 'NaN',
                qElemNumber: 69,
                qState: 'O',
              },
              {
                qText: '$10,014,952.60',
                qNum: 10014952.60000001,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '10747.33489',
                qNum: 10747.334889999991,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'PacificServ',
                qNum: 'NaN',
                qElemNumber: 86,
                qState: 'O',
              },
              {
                qText: '$9,591,519.08',
                qNum: 9591519.079999998,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '10550.83236',
                qNum: 10550.832359999988,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'ScotGold Products',
                qNum: 'NaN',
                qElemNumber: 81,
                qState: 'O',
              },
              {
                qText: '$9,528,637.88',
                qNum: 9528637.880000014,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '10196.26976',
                qNum: 10196.269759999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Pacific West Enterprises',
                qNum: 'NaN',
                qElemNumber: 46,
                qState: 'O',
              },
              {
                qText: '$9,182,607.03',
                qNum: 9182607.029999997,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '10161.07133',
                qNum: 10161.07132999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Aaron D. Meyer & Associates',
                qNum: 'NaN',
                qElemNumber: 101,
                qState: 'O',
              },
              {
                qText: '$9,468,291.80',
                qNum: 9468291.800000018,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '10124.17108',
                qNum: 10124.171079999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Home Team',
                qNum: 'NaN',
                qElemNumber: 107,
                qState: 'O',
              },
              {
                qText: '$9,468,291.80',
                qNum: 9468291.800000018,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '10124.17108',
                qNum: 10124.171079999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Laker Airways',
                qNum: 'NaN',
                qElemNumber: 104,
                qState: 'O',
              },
              {
                qText: '$9,468,291.80',
                qNum: 9468291.800000018,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '10124.17108',
                qNum: 10124.171079999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Pacific Matics',
                qNum: 'NaN',
                qElemNumber: 111,
                qState: 'O',
              },
              {
                qText: '$9,468,291.80',
                qNum: 9468291.800000018,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '10124.17108',
                qNum: 10124.171079999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Sifton Properties Limited',
                qNum: 'NaN',
                qElemNumber: 94,
                qState: 'O',
              },
              {
                qText: '$9,468,291.80',
                qNum: 9468291.800000018,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '10124.17108',
                qNum: 10124.171079999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'SignatureFactory',
                qNum: 'NaN',
                qElemNumber: 95,
                qState: 'O',
              },
              {
                qText: '$9,468,291.80',
                qNum: 9468291.800000018,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '10124.17108',
                qNum: 10124.171079999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Vanstar',
                qNum: 'NaN',
                qElemNumber: 92,
                qState: 'O',
              },
              {
                qText: '$9,468,291.80',
                qNum: 9468291.800000018,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '10124.17108',
                qNum: 10124.171079999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Venred',
                qNum: 'NaN',
                qElemNumber: 110,
                qState: 'O',
              },
              {
                qText: '$9,468,291.80',
                qNum: 9468291.800000018,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '10124.17108',
                qNum: 10124.171079999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Satronix',
                qNum: 'NaN',
                qElemNumber: 87,
                qState: 'O',
              },
              {
                qText: '$9,419,634.25',
                qNum: 9419634.250000015,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '10114.67854',
                qNum: 10114.678539999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tredegar Company',
                qNum: 'NaN',
                qElemNumber: 53,
                qState: 'O',
              },
              {
                qText: '$9,418,490.80',
                qNum: 9418490.800000008,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '10051.23215',
                qNum: 10051.232150000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'R.J. Matter & Associates',
                qNum: 'NaN',
                qElemNumber: 10,
                qState: 'O',
              },
              {
                qText: '$8,828,152.98',
                qNum: 8828152.98,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '9848.61328',
                qNum: 9848.613280000021,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Valley  Solutions',
                qNum: 'NaN',
                qElemNumber: 96,
                qState: 'O',
              },
              {
                qText: '$9,091,599.93',
                qNum: 9091599.930000022,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '9722.12255',
                qNum: 9722.122550000011,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'K.C. Irving',
                qNum: 'NaN',
                qElemNumber: 90,
                qState: 'O',
              },
              {
                qText: '$8,656,556.38',
                qNum: 8656556.380000003,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '9548.96964',
                qNum: 9548.969640000014,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'C & C  Design',
                qNum: 'NaN',
                qElemNumber: 97,
                qState: 'O',
              },
              {
                qText: '$8,829,736.18',
                qNum: 8829736.180000007,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '9423.61001',
                qNum: 9423.610009999986,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Venable',
                qNum: 'NaN',
                qElemNumber: 38,
                qState: 'O',
              },
              {
                qText: '$8,563,955.38',
                qNum: 8563955.380000005,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '9412.29815',
                qNum: 9412.298150000011,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Kari & Associates',
                qNum: 'NaN',
                qElemNumber: 98,
                qState: 'O',
              },
              {
                qText: '$8,714,823.71',
                qNum: 8714823.71,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '9315.09611',
                qNum: 9315.096109999988,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Valpatken',
                qNum: 'NaN',
                qElemNumber: 36,
                qState: 'O',
              },
              {
                qText: '$8,461,840.89',
                qNum: 8461840.890000002,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '8952.99702',
                qNum: 8952.997019999977,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Towmotor Corporation',
                qNum: 'NaN',
                qElemNumber: 100,
                qState: 'O',
              },
              {
                qText: '$8,351,295.12',
                qNum: 8351295.120000006,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '8893.33552',
                qNum: 8893.33551999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Qwest',
                qNum: 'NaN',
                qElemNumber: 65,
                qState: 'O',
              },
              {
                qText: '$8,086,603.15',
                qNum: 8086603.150000014,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '8826.86594',
                qNum: 8826.865940000016,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Gate',
                qNum: 'NaN',
                qElemNumber: 49,
                qState: 'O',
              },
              {
                qText: '$8,150,979.44',
                qNum: 8150979.440000007,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '8782.67215',
                qNum: 8782.672150000024,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Talou',
                qNum: 'NaN',
                qElemNumber: 26,
                qState: 'O',
              },
              {
                qText: '$7,970,208.72',
                qNum: 7970208.719999997,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '8672.55428',
                qNum: 8672.554279999982,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Earth',
                qNum: 'NaN',
                qElemNumber: 106,
                qState: 'O',
              },
              {
                qText: '$8,126,311.25',
                qNum: 8126311.250000002,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '8614.80983',
                qNum: 8614.809829999973,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Harte-Hanks (formerly Locator)',
                qNum: 'NaN',
                qElemNumber: 40,
                qState: 'O',
              },
              {
                qText: '$7,770,255.03',
                qNum: 7770255.030000004,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '8601.11848',
                qNum: 8601.118480000014,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Team Financial Management Systems',
                qNum: 'NaN',
                qElemNumber: 115,
                qState: 'O',
              },
              {
                qText: '$8,148,768.92',
                qNum: 8148768.920000002,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '8596.08186',
                qNum: 8596.081859999967,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Bizmarts',
                qNum: 'NaN',
                qElemNumber: 79,
                qState: 'O',
              },
              {
                qText: '$8,024,449.66',
                qNum: 8024449.660000003,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '8471.99602',
                qNum: 8471.996019999977,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'City Fresh Foods',
                qNum: 'NaN',
                qElemNumber: 39,
                qState: 'O',
              },
              {
                qText: '$7,697,513.18',
                qNum: 7697513.180000001,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '8429.01931',
                qNum: 8429.01930999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Panngea',
                qNum: 'NaN',
                qElemNumber: 93,
                qState: 'O',
              },
              {
                qText: '$7,419,934.78',
                qNum: 7419934.780000009,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '8164.54537',
                qNum: 8164.545370000015,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'DCS Laboratory',
                qNum: 'NaN',
                qElemNumber: 29,
                qState: 'O',
              },
              {
                qText: '$7,418,387.47',
                qNum: 7418387.469999995,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '8116.00432',
                qNum: 8116.004319999988,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'United States  (USIT)',
                qNum: 'NaN',
                qElemNumber: 103,
                qState: 'O',
              },
              {
                qText: '$7,559,190.35',
                qNum: 7559190.3500000015,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '8077.15782',
                qNum: 8077.157819999976,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Kazinformcom',
                qNum: 'NaN',
                qElemNumber: 83,
                qState: 'O',
              },
              {
                qText: '$7,526,221.42',
                qNum: 7526221.419999999,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '8035.26222',
                qNum: 8035.262219999979,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Sagent',
                qNum: 'NaN',
                qElemNumber: 99,
                qState: 'O',
              },
              {
                qText: '$7,196,832.97',
                qNum: 7196832.9700000025,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '7910.73439',
                qNum: 7910.734389999969,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Aaron Products',
                qNum: 'NaN',
                qElemNumber: 117,
                qState: 'O',
              },
              {
                qText: '$7,389,078.47',
                qNum: 7389078.470000003,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '7802.94423',
                qNum: 7802.944229999974,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Active Data',
                qNum: 'NaN',
                qElemNumber: 116,
                qState: 'O',
              },
              {
                qText: '$7,408,464.11',
                qNum: 7408464.110000004,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '7767.29483',
                qNum: 7767.2948299999725,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'DCP Research',
                qNum: 'NaN',
                qElemNumber: 102,
                qState: 'O',
              },
              {
                qText: '$7,218,085.22',
                qNum: 7218085.220000006,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '7604.81279',
                qNum: 7604.812789999972,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Trend Line Corporation',
                qNum: 'NaN',
                qElemNumber: 114,
                qState: 'O',
              },
              {
                qText: '$7,018,608.96',
                qNum: 7018608.96,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '7384.95836',
                qNum: 7384.958359999978,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Caribian Specialties',
                qNum: 'NaN',
                qElemNumber: 108,
                qState: 'O',
              },
              {
                qText: '$6,880,665.86',
                qNum: 6880665.86,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '7209.91046',
                qNum: 7209.910459999977,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fins',
                qNum: 'NaN',
                qElemNumber: 3,
                qState: 'O',
              },
              {
                qText: '$6,490,290.25',
                qNum: 6490290.250000011,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '7199.14156',
                qNum: 7199.141560000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'C & J Engineering',
                qNum: 'NaN',
                qElemNumber: 113,
                qState: 'O',
              },
              {
                qText: '$6,750,522.85',
                qNum: 6750522.850000006,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '7102.38316',
                qNum: 7102.383159999976,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'XVT',
                qNum: 'NaN',
                qElemNumber: 32,
                qState: 'O',
              },
              {
                qText: '$6,587,732.10',
                qNum: 6587732.099999999,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '7090.84735',
                qNum: 7090.847349999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Reuters Usability Group',
                qNum: 'NaN',
                qElemNumber: 24,
                qState: 'O',
              },
              {
                qText: '$6,408,876.77',
                qNum: 6408876.769999996,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '7010.24792',
                qNum: 7010.247919999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Icon Site Builders',
                qNum: 'NaN',
                qElemNumber: 43,
                qState: 'O',
              },
              {
                qText: '$6,386,891.90',
                qNum: 6386891.899999995,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '6965.12239',
                qNum: 6965.12238999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Pacific Voice',
                qNum: 'NaN',
                qElemNumber: 118,
                qState: 'O',
              },
              {
                qText: '$5,990,163.50',
                qNum: 5990163.500000001,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '6465.0562',
                qNum: 6465.056200000014,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'KentISP',
                qNum: 'NaN',
                qElemNumber: 48,
                qState: 'O',
              },
              {
                qText: '$5,902,621.10',
                qNum: 5902621.100000001,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '6438.89336',
                qNum: 6438.893360000014,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'DCS International',
                qNum: 'NaN',
                qElemNumber: 122,
                qState: 'O',
              },
              {
                qText: '$5,887,120.82',
                qNum: 5887120.820000003,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '6060.80508',
                qNum: 6060.805079999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tampere',
                qNum: 'NaN',
                qElemNumber: 88,
                qState: 'O',
              },
              {
                qText: '$5,709,518.92',
                qNum: 5709518.920000007,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '5931.90234',
                qNum: 5931.902339999979,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Xentec',
                qNum: 'NaN',
                qElemNumber: 85,
                qState: 'O',
              },
              {
                qText: '$5,078,142.61',
                qNum: 5078142.610000003,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '5695.55066',
                qNum: 5695.550660000008,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Healtheon',
                qNum: 'NaN',
                qElemNumber: 73,
                qState: 'O',
              },
              {
                qText: '$5,229,571.53',
                qNum: 5229571.530000008,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '5692.98032',
                qNum: 5692.980320000008,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Soloman Brothers',
                qNum: 'NaN',
                qElemNumber: 121,
                qState: 'O',
              },
              {
                qText: '$5,523,507.88',
                qNum: 5523507.880000007,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '5634.06658',
                qNum: 5634.066579999986,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'NACSCORP',
                qNum: 'NaN',
                qElemNumber: 58,
                qState: 'O',
              },
              {
                qText: '$5,096,591.45',
                qNum: 5096591.450000005,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '5565.84899',
                qNum: 5565.848990000012,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tangent',
                qNum: 'NaN',
                qElemNumber: 55,
                qState: 'O',
              },
              {
                qText: '$4,744,900.34',
                qNum: 4744900.340000002,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '5313.22356',
                qNum: 5313.223559999995,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Zero Assumption Recovery',
                qNum: 'NaN',
                qElemNumber: 125,
                qState: 'O',
              },
              {
                qText: '$5,133,652.73',
                qNum: 5133652.73,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '5251.73011',
                qNum: 5251.730109999991,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Icon',
                qNum: 'NaN',
                qElemNumber: 15,
                qState: 'O',
              },
              {
                qText: '$4,817,874.83',
                qNum: 4817874.830000003,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,128,0)',
                      qNum: 4286611456,
                    },
                  ],
                },
              },
              {
                qText: '5059.44361',
                qNum: 5059.443610000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Team ASA',
                qNum: 'NaN',
                qElemNumber: 47,
                qState: 'O',
              },
              {
                qText: '$4,680,906.32',
                qNum: 4680906.320000002,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,128,0)',
                      qNum: 4286611456,
                    },
                  ],
                },
              },
              {
                qText: '4920.13189',
                qNum: 4920.131889999987,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Miles Laboratories, Inc.',
                qNum: 'NaN',
                qElemNumber: 126,
                qState: 'O',
              },
              {
                qText: '$4,309,113.66',
                qNum: 4309113.659999998,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '4523.865',
                qNum: 4523.864999999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Salamander Junction',
                qNum: 'NaN',
                qElemNumber: 89,
                qState: 'O',
              },
              {
                qText: '$3,978,021.91',
                qNum: 3978021.9099999983,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,128,0)',
                      qNum: 4286611456,
                    },
                  ],
                },
              },
              {
                qText: '4143.06639',
                qNum: 4143.066389999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'QualServe',
                qNum: 'NaN',
                qElemNumber: 91,
                qState: 'O',
              },
              {
                qText: '$3,940,354.25',
                qNum: 3940354.249999997,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,128,0)',
                      qNum: 4286611456,
                    },
                  ],
                },
              },
              {
                qText: '4098.93851',
                qNum: 4098.938509999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'PAP (Maintenance)',
                qNum: 'NaN',
                qElemNumber: 78,
                qState: 'O',
              },
              {
                qText: '$3,657,951.11',
                qNum: 3657951.1100000045,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '3894.90512',
                qNum: 3894.9051200000013,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'UUmail',
                qNum: 'NaN',
                qElemNumber: 64,
                qState: 'O',
              },
              {
                qText: '$3,580,931.81',
                qNum: 3580931.8099999954,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '3890.83983',
                qNum: 3890.8398299999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Tandy Corporation',
                qNum: 'NaN',
                qElemNumber: 120,
                qState: 'O',
              },
              {
                qText: '$3,632,434.79',
                qNum: 3632434.7899999996,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,128,0)',
                      qNum: 4286611456,
                    },
                  ],
                },
              },
              {
                qText: '3727.90891',
                qNum: 3727.9089100000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Satyam',
                qNum: 'NaN',
                qElemNumber: 62,
                qState: 'O',
              },
              {
                qText: '$3,121,354.99',
                qNum: 3121354.9900000026,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '3426.13714',
                qNum: 3426.1371399999985,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'eDistrict',
                qNum: 'NaN',
                qElemNumber: 127,
                qState: 'O',
              },
              {
                qText: '$3,080,097.48',
                qNum: 3080097.4799999986,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '3404.22215',
                qNum: 3404.2221500000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Zitel',
                qNum: 'NaN',
                qElemNumber: 124,
                qState: 'O',
              },
              {
                qText: '$2,905,794.77',
                qNum: 2905794.7699999977,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '2958.10685',
                qNum: 2958.1068499999983,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Ben and Jerry’s',
                qNum: 'NaN',
                qElemNumber: 0,
                qState: 'O',
              },
              {
                qText: '$2,347,249.44',
                qNum: 2347249.4400000013,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,128,0)',
                      qNum: 4278222848,
                    },
                  ],
                },
              },
              {
                qText: '2499.2571',
                qNum: 2499.2571000000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Idyllwild',
                qNum: 'NaN',
                qElemNumber: 6,
                qState: 'O',
              },
              {
                qText: '$2,346,341.02',
                qNum: 2346341.0200000005,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,128,0)',
                      qNum: 4278222848,
                    },
                  ],
                },
              },
              {
                qText: '2487.31659',
                qNum: 2487.316590000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Onestar',
                qNum: 'NaN',
                qElemNumber: 123,
                qState: 'O',
              },
              {
                qText: '$2,351,652.26',
                qNum: 2351652.26,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '2445.39496',
                qNum: 2445.394959999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Unison Management Concepts',
                qNum: 'NaN',
                qElemNumber: 56,
                qState: 'O',
              },
              {
                qText: '$2,292,371.57',
                qNum: 2292371.5700000026,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,128,0)',
                      qNum: 4278222848,
                    },
                  ],
                },
              },
              {
                qText: '2440.55688',
                qNum: 2440.556879999999,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Fill It',
                qNum: 'NaN',
                qElemNumber: 2,
                qState: 'O',
              },
              {
                qText: '$2,215,454.67',
                qNum: 2215454.6699999995,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,128,0)',
                      qNum: 4278222848,
                    },
                  ],
                },
              },
              {
                qText: '2402.08645',
                qNum: 2402.0864500000025,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Scientific Atlanta',
                qNum: 'NaN',
                qElemNumber: 52,
                qState: 'O',
              },
              {
                qText: '$1,897,338.01',
                qNum: 1897338.0100000016,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,128,0)',
                      qNum: 4278222848,
                    },
                  ],
                },
              },
              {
                qText: '2082.82888',
                qNum: 2082.8288800000014,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Patient',
                qNum: 'NaN',
                qElemNumber: 112,
                qState: 'O',
              },
              {
                qText: '$1,756,592.03',
                qNum: 1756592.0300000003,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '1997.67832',
                qNum: 1997.6783200000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'ReviewBooth',
                qNum: 'NaN',
                qElemNumber: 80,
                qState: 'O',
              },
              {
                qText: '$1,231,391.93',
                qNum: 1231391.9300000002,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,128,0)',
                      qNum: 4278222848,
                    },
                  ],
                },
              },
              {
                qText: '1401.64976',
                qNum: 1401.6497600000014,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Sage',
                qNum: 'NaN',
                qElemNumber: 128,
                qState: 'O',
              },
              {
                qText: '$1,174,120.13',
                qNum: 1174120.1300000004,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,0,0)',
                      qNum: 4286578688,
                    },
                  ],
                },
              },
              {
                qText: '1143.70731',
                qNum: 1143.7073100000007,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Federal Focus',
                qNum: 'NaN',
                qElemNumber: 119,
                qState: 'O',
              },
              {
                qText: '$1,106,745.14',
                qNum: 1106745.1400000001,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(128,128,0)',
                      qNum: 4286611456,
                    },
                  ],
                },
              },
              {
                qText: '1102.42977',
                qNum: 1102.4297699999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Pacific Group',
                qNum: 'NaN',
                qElemNumber: 105,
                qState: 'O',
              },
              {
                qText: '$1,058,641.13',
                qNum: 1058641.1300000004,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,128,0)',
                      qNum: 4278222848,
                    },
                  ],
                },
              },
              {
                qText: '1097.85742',
                qNum: 1097.8574200000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Sigma',
                qNum: 'NaN',
                qElemNumber: 129,
                qState: 'O',
              },
              {
                qText: '$1,093,042.44',
                qNum: 1093042.4400000004,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '1093.8981',
                qNum: 1093.8980999999992,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Zocalo',
                qNum: 'NaN',
                qElemNumber: 68,
                qState: 'O',
              },
              {
                qText: '$884,657.19',
                qNum: 884657.1899999995,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,128)',
                      qNum: 4278190208,
                    },
                  ],
                },
              },
              {
                qText: '993.84778',
                qNum: 993.8477799999993,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'CAM Group',
                qNum: 'NaN',
                qElemNumber: 51,
                qState: 'O',
              },
              {
                qText: '$376,171.80',
                qNum: 376171.80000000075,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,0)',
                      qNum: 4278190080,
                    },
                  ],
                },
              },
              {
                qText: '406.05585',
                qNum: 406.0558500000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'David Spencer Ltd.',
                qNum: 'NaN',
                qElemNumber: 13,
                qState: 'O',
              },
              {
                qText: '$360,628.88',
                qNum: 360628.88000000047,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,0)',
                      qNum: 4278190080,
                    },
                  ],
                },
              },
              {
                qText: '387.87481',
                qNum: 387.87481000000014,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'EDP',
                qNum: 'NaN',
                qElemNumber: 37,
                qState: 'O',
              },
              {
                qText: '$345,887.74',
                qNum: 345887.7400000004,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,0)',
                      qNum: 4278190080,
                    },
                  ],
                },
              },
              {
                qText: '371.58099',
                qNum: 371.58099000000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Southern Company',
                qNum: 'NaN',
                qElemNumber: 45,
                qState: 'O',
              },
              {
                qText: '$335,197.25',
                qNum: 335197.2500000004,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,0)',
                      qNum: 4278190080,
                    },
                  ],
                },
              },
              {
                qText: '359.40747',
                qNum: 359.4074700000005,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Target Marketing',
                qNum: 'NaN',
                qElemNumber: 44,
                qState: 'O',
              },
              {
                qText: '$330,402.53',
                qNum: 330402.5300000006,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,0)',
                      qNum: 4278190080,
                    },
                  ],
                },
              },
              {
                qText: '359.15571',
                qNum: 359.15571000000074,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'RC',
                qNum: 'NaN',
                qElemNumber: 66,
                qState: 'O',
              },
              {
                qText: '$221,539.91',
                qNum: 221539.9099999998,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,0)',
                      qNum: 4278190080,
                    },
                  ],
                },
              },
              {
                qText: '245.31174',
                qNum: 245.3117400000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'A&R Partners',
                qNum: 'NaN',
                qElemNumber: 50,
                qState: 'O',
              },
              {
                qText: '$139,727.00',
                qNum: 139727.0000000001,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,0)',
                      qNum: 4278190080,
                    },
                  ],
                },
              },
              {
                qText: '146.94371',
                qNum: 146.94370999999998,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'K International',
                qNum: 'NaN',
                qElemNumber: 109,
                qState: 'O',
              },
              {
                qText: '$86,892.00',
                qNum: 86892.00000000012,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,0)',
                      qNum: 4278190080,
                    },
                  ],
                },
              },
              {
                qText: '91.86719',
                qNum: 91.86719000000001,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'U. S. Exchange',
                qNum: 'NaN',
                qElemNumber: 19,
                qState: 'O',
              },
              {
                qText: '$11,352.12',
                qNum: 11352.12,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,0)',
                      qNum: 4278190080,
                    },
                  ],
                },
              },
              {
                qText: '12.14319',
                qNum: 12.143190000000004,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1',
                qNum: 1,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: '-',
                qNum: 'NaN',
                qElemNumber: -2,
                qState: 'L',
                qIsNull: true,
              },
              {
                qText: '$7,320.99',
                qNum: 7320.990000000003,
                qElemNumber: 0,
                qState: 'L',
                qAttrExps: {
                  qValues: [
                    {
                      qText: 'RGB(0,0,0)',
                      qNum: 4278190080,
                    },
                  ],
                },
              },
              {
                qText: '10440.64171',
                qNum: 10440.641709999963,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '0',
                qNum: 0,
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
            qHeight: 131,
          },
        },
      ],
      getEffectiveProperties: {},
    },
  ],
});
