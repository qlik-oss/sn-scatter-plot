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
            qcx: 3,
            qcy: 6,
          },
          qDimensionInfo: [
            {
              qFallbackTitle: 'Region',
              qApprMaxGlyphCount: 11,
              qCardinal: 6,
              qSortIndicator: 'A',
              qGroupFallbackTitles: ['Region'],
              qGroupPos: 0,
              qStateCounts: {
                qLocked: 0,
                qSelected: 0,
                qOption: 6,
                qDeselected: 0,
                qAlternative: 0,
                qExcluded: 0,
                qSelectedExcluded: 0,
                qLockedExcluded: 0,
              },
              qTags: ['$ascii', '$text'],
              qDimensionType: 'D',
              qGrouping: 'N',
              qNumFormat: {
                qType: 'U',
                qnDec: 0,
                qUseThou: 0,
              },
              qIsAutoFormat: true,
              qGroupFieldDefs: ['Region'],
              qMin: 'NaN',
              qMax: 'NaN',
              qAttrExprInfo: [],
              qAttrDimInfo: [
                {
                  qCardinal: 6,
                  qSize: {
                    qcx: 2,
                    qcy: 6,
                  },
                  qFallbackTitle: 'Region',
                  id: 'colorByAlternative',
                  colorMapRef: 'jgxpDbw',
                },
              ],
              qCardinalities: {
                qCardinal: 6,
                qHypercubeCardinal: 6,
                qAllValuesCardinal: -1,
              },
              qLibraryId: 'jgxpDbw',
              title: 'Region',
              autoSort: true,
              cId: 'KWXVkX',
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
              qMin: 18673.109999999968,
              qMax: 16208458.889999997,
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
              qMin: 1,
              qMax: 79,
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
          qEffectiveInterColumnSortOrder: [2, 1, 0],
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
          ],
          qDataPages: [],
          qPivotDataPages: [],
          qStackedDataPages: [],
          qMode: 'S',
          qNoOfLeftDims: -1,
          qTreeNodesOnDim: [],
          qColumnOrder: [],
          qHasOtherValues: false,
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
          rangeBubbleSizes: [2, 8],
        },
        labels: {
          mode: 1,
        },
        gridLine: {
          auto: true,
          spacing: 2,
        },
        color: {
          auto: false,
          mode: 'byDimension',
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
          altLabel: 'jgxpDbw',
          byDimDef: {
            label: 'jgxpDbw',
            key: 'jgxpDbw',
            type: 'libraryItem',
          },
        },
        legend: {
          show: true,
          dock: 'bottom',
          showTitle: true,
        },
        xAxis: {
          show: 'none',
          dock: 'near',
          spacing: 1,
          autoMinMax: true,
          minMax: 'min',
          min: 0,
          max: 10,
        },
        yAxis: {
          show: 'none',
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
                qText: 'Americas',
                qNum: 'NaN',
                qElemNumber: 0,
                qState: 'O',
                qAttrDims: {
                  qValues: [
                    {
                      qText: 'Americas',
                      qElemNo: 0,
                    },
                  ],
                },
              },
              {
                qText: '$16,208,458.89',
                qNum: 16208458.889999997,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '79',
                qNum: 79,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Europe',
                qNum: 'NaN',
                qElemNumber: 4,
                qState: 'O',
                qAttrDims: {
                  qValues: [
                    {
                      qText: 'Europe',
                      qElemNo: 4,
                    },
                  ],
                },
              },
              {
                qText: '$11,811,398.79',
                qNum: 11811398.789999994,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '29',
                qNum: 29,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Africa',
                qNum: 'NaN',
                qElemNumber: 1,
                qState: 'O',
                qAttrDims: {
                  qValues: [
                    {
                      qText: 'Africa',
                      qElemNo: 1,
                    },
                  ],
                },
              },
              {
                qText: '$419,013.73',
                qNum: 419013.7300000006,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '8',
                qNum: 8,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Pacific',
                qNum: 'NaN',
                qElemNumber: 2,
                qState: 'O',
                qAttrDims: {
                  qValues: [
                    {
                      qText: 'Pacific',
                      qElemNo: 2,
                    },
                  ],
                },
              },
              {
                qText: '$2,940,084.82',
                qNum: 2940084.820000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '7',
                qNum: 7,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Asia',
                qNum: 'NaN',
                qElemNumber: 3,
                qState: 'O',
                qAttrDims: {
                  qValues: [
                    {
                      qText: 'Asia',
                      qElemNo: 3,
                    },
                  ],
                },
              },
              {
                qText: '$4,817,874.83',
                qNum: 4817874.830000003,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '6',
                qNum: 6,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Middle East',
                qNum: 'NaN',
                qElemNumber: 5,
                qState: 'O',
                qAttrDims: {
                  qValues: [
                    {
                      qText: 'Middle East',
                      qElemNo: 5,
                    },
                  ],
                },
              },
              {
                qText: '$18,673.11',
                qNum: 18673.109999999968,
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
            qWidth: 3,
            qHeight: 6,
          },
        },
      ],
      getEffectiveProperties: {},
    },
  ],
});
