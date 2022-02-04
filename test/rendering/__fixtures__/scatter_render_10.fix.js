export default () => ({
  type: 'sn-scatter-plot',
  genericObjects: [
    {
      getLayout: {
        qInfo: {
          qId: 'bGpUjPW',
          qType: 'sn-scatter-plot',
        },
        qMeta: {
          privileges: ['read', 'update', 'delete', 'exportdata'],
        },
        qSelectionInfo: {},
        qHyperCube: {
          qSize: {
            qcx: 3,
            qcy: 26,
          },
          qDimensionInfo: [
            {
              qFallbackTitle: 'Alpha',
              qApprMaxGlyphCount: 1,
              qCardinal: 26,
              qSortIndicator: 'A',
              qGroupFallbackTitles: ['Alpha'],
              qGroupPos: 0,
              qStateCounts: {
                qLocked: 0,
                qSelected: 0,
                qOption: 26,
                qDeselected: 0,
                qAlternative: 0,
                qExcluded: 0,
                qSelectedExcluded: 0,
                qLockedExcluded: 0,
              },
              qTags: ['$text', '$ascii'],
              qDimensionType: 'D',
              qGrouping: 'N',
              qNumFormat: {
                qType: 'U',
                qnDec: 0,
                qUseThou: 0,
              },
              qIsAutoFormat: true,
              qGroupFieldDefs: ['Alpha'],
              qMin: 'NaN',
              qMax: 'NaN',
              qAttrExprInfo: [],
              qAttrDimInfo: [],
              qCardinalities: {
                qCardinal: 26,
                qHypercubeCardinal: 26,
                qAllValuesCardinal: -1,
              },
              autoSort: true,
              cId: 'fHtfW',
              othersLabel: 'Others',
            },
          ],
          qMeasureInfo: [
            {
              qFallbackTitle: 'Sum(Expression1)',
              qApprMaxGlyphCount: 15,
              qCardinal: 0,
              qSortIndicator: 'D',
              qNumFormat: {
                qType: 'M',
                qnDec: 2,
                qUseThou: 0,
                qFmt: '# ##0,00 kr;-# ##0,00 kr',
                qDec: ',',
                qThou: ' ',
              },
              qMin: 84035,
              qMax: 107795,
              qAttrExprInfo: [],
              qAttrDimInfo: [],
              qTrendLines: [
                {
                  qType: 'AVERAGE',
                  qCoeff: [93792.42307692308],
                  qR2: 0,
                  qExpression: 'y = 93792',
                  qElemNo: -1,
                  label: 'Average',
                  style: {
                    autoColor: false,
                    paletteColor: {
                      index: 3,
                      color: '#276e27',
                    },
                    dashed: true,
                    lineDash: '8, 4',
                  },
                  flipXY: true,
                  cId: 'CUJTzj',
                },
                {
                  qType: 'POLYNOMIAL2',
                  qCoeff: [262118.68366503867, -415.90401614671146, 0.2529020149154844],
                  qR2: 0,
                  qExpression: 'y = 0.2529x^2 - 415.9x + 2.6212e+05',
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
                  flipXY: true,
                  cId: 'FTXhpB',
                },
                {
                  qType: 'POLYNOMIAL3',
                  qCoeff: [-1508296.8280173573, 5408.696692396841, -6.106833080581095, 0.00230431305990938],
                  qR2: 0,
                  qExpression: 'y = 0.0023043x^3 - 6.1068x^2 + 5408.7x - 1.5083e+06',
                  qElemNo: -1,
                  label: 'Third',
                  style: {
                    autoColor: false,
                    paletteColor: {
                      index: 5,
                      color: '#7db8da',
                    },
                    dashed: false,
                    lineDash: '',
                  },
                  flipXY: true,
                  cId: 'DJKXZjt',
                },
                {
                  qType: 'POLYNOMIAL4',
                  qCoeff: [
                    -29997109.841109317, 131072.2583115885, -213.2830680124954, 0.15360507662149897,
                    -0.00004129683862375928,
                  ],
                  qR2: 0,
                  qExpression: 'y = -4.1297e-05x^4 + 0.15361x^3 - 213.28x^2 + 1.3107e+05x - 2.9997e+07',
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
                  flipXY: true,
                  cId: 'cTynsBu',
                },
                {
                  qType: 'EXPONENTIAL',
                  qCoeff: [10.978311805358791, 0.0005205924859951557],
                  qR2: 0,
                  qExpression: 'y = 58590 * e^0.00052059x',
                  qElemNo: -1,
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
                  flipXY: true,
                  cId: 'mcCpbRj',
                },
                {
                  qType: 'LOG',
                  qCoeff: [45069.63083355926, -212704.6343660815],
                  qR2: 0,
                  qExpression: 'y = 45070 * ln(x) + -2.127e+05',
                  qElemNo: -1,
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
                  flipXY: true,
                  cId: 'hkYNgC',
                },
                {
                  qType: 'POWER',
                  qCoeff: [3.587541224757927, 0.46857962926884644],
                  qR2: 0,
                  qExpression: 'y = 3868.5 * x^0.46858',
                  qElemNo: -1,
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
                  flipXY: true,
                  cId: 'tXAZxkA',
                },
              ],
              autoSort: true,
              cId: 'xFjZ',
              numFormatFromTemplate: true,
              isCustomFormatted: false,
            },
            {
              qFallbackTitle: 'Sum(Expression2)',
              qApprMaxGlyphCount: 12,
              qCardinal: 0,
              qSortIndicator: 'D',
              qNumFormat: {
                qType: 'M',
                qnDec: 2,
                qUseThou: 0,
                qFmt: '# ##0,00 kr;-# ##0,00 kr',
                qDec: ',',
                qThou: ' ',
              },
              qMin: 787,
              qMax: 1052,
              qAttrExprInfo: [],
              qAttrDimInfo: [],
              qTrendLines: [
                {
                  qType: 'LINEAR',
                  qCoeff: [189.30165225454698, 0.007584734801598201],
                  qR2: 0,
                  qExpression: 'y = 0.0075847x + 189.3',
                  qElemNo: -1,
                  label:
                    'Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Lin',
                  style: {
                    autoColor: false,
                    paletteColor: {
                      index: 2,
                      color: '#46c646',
                    },
                    dashed: true,
                    lineDash: '8, 4',
                  },
                  flipXY: false,
                  cId: 'LJjmf',
                },
              ],
              autoSort: true,
              cId: 'bJzppN',
              numFormatFromTemplate: true,
              isCustomFormatted: false,
            },
          ],
          qEffectiveInterColumnSortOrder: [2, 1, 0],
          qGrandTotalRow: [
            {
              qText: '2 438 603,00 kr',
              qNum: 2438603,
              qElemNumber: -1,
              qState: 'X',
              qIsTotalCell: true,
            },
            {
              qText: '23 418,00 kr',
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
        title: 'Best fit line',
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
          auto: true,
          hideBasic: false,
          chart: {
            style: {
              size: 'medium',
            },
          },
          title: '',
          description: '',
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
            label:
              'Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Linear Lin',
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
            flipXY: false,
            cId: 'LJjmf',
            qMultiDimMode: 'Sum',
            qXColIx: 1,
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
              dashed: true,
              lineDash: '8, 4',
            },
            flipXY: true,
            cId: 'CUJTzj',
            qMultiDimMode: 'Sum',
            qXColIx: 2,
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
            flipXY: true,
            cId: 'FTXhpB',
            qMultiDimMode: 'Sum',
            qXColIx: 2,
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
              dashed: false,
              lineDash: '',
            },
            flipXY: true,
            cId: 'DJKXZjt',
            qMultiDimMode: 'Sum',
            qXColIx: 2,
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
            flipXY: true,
            cId: 'cTynsBu',
            qMultiDimMode: 'Sum',
            qXColIx: 2,
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
            flipXY: true,
            cId: 'mcCpbRj',
            qMultiDimMode: 'Sum',
            qXColIx: 2,
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
            flipXY: true,
            cId: 'hkYNgC',
            qMultiDimMode: 'Sum',
            qXColIx: 2,
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
            flipXY: true,
            cId: 'tXAZxkA',
            qMultiDimMode: 'Sum',
            qXColIx: 2,
          },
        ],
      },
      getHyperCubeData: [
        {
          qMatrix: [
            [
              {
                qText: 'J',
                qNum: 'NaN',
                qElemNumber: 9,
                qState: 'O',
              },
              {
                qText: '102 525,00 kr',
                qNum: 102525,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1 052,00 kr',
                qNum: 1052,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'P',
                qNum: 'NaN',
                qElemNumber: 15,
                qState: 'O',
              },
              {
                qText: '107 795,00 kr',
                qNum: 107795,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1 045,00 kr',
                qNum: 1045,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'G',
                qNum: 'NaN',
                qElemNumber: 6,
                qState: 'O',
              },
              {
                qText: '98 192,00 kr',
                qNum: 98192,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '1 001,00 kr',
                qNum: 1001,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'M',
                qNum: 'NaN',
                qElemNumber: 12,
                qState: 'O',
              },
              {
                qText: '95 718,00 kr',
                qNum: 95718,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '976,00 kr',
                qNum: 976,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'T',
                qNum: 'NaN',
                qElemNumber: 19,
                qState: 'O',
              },
              {
                qText: '95 129,00 kr',
                qNum: 95129,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '957,00 kr',
                qNum: 957,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'I',
                qNum: 'NaN',
                qElemNumber: 8,
                qState: 'O',
              },
              {
                qText: '96 224,00 kr',
                qNum: 96224,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '954,00 kr',
                qNum: 954,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'L',
                qNum: 'NaN',
                qElemNumber: 11,
                qState: 'O',
              },
              {
                qText: '96 163,00 kr',
                qNum: 96163,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '939,00 kr',
                qNum: 939,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'C',
                qNum: 'NaN',
                qElemNumber: 2,
                qState: 'O',
              },
              {
                qText: '96 308,00 kr',
                qNum: 96308,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '936,00 kr',
                qNum: 936,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'E',
                qNum: 'NaN',
                qElemNumber: 4,
                qState: 'O',
              },
              {
                qText: '97 186,00 kr',
                qNum: 97186,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '914,00 kr',
                qNum: 914,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'D',
                qNum: 'NaN',
                qElemNumber: 3,
                qState: 'O',
              },
              {
                qText: '89 741,00 kr',
                qNum: 89741,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '911,00 kr',
                qNum: 911,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'H',
                qNum: 'NaN',
                qElemNumber: 7,
                qState: 'O',
              },
              {
                qText: '84 035,00 kr',
                qNum: 84035,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '909,00 kr',
                qNum: 909,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'K',
                qNum: 'NaN',
                qElemNumber: 10,
                qState: 'O',
              },
              {
                qText: '93 892,00 kr',
                qNum: 93892,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '898,00 kr',
                qNum: 898,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Y',
                qNum: 'NaN',
                qElemNumber: 24,
                qState: 'O',
              },
              {
                qText: '87 706,00 kr',
                qNum: 87706,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '895,00 kr',
                qNum: 895,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Z',
                qNum: 'NaN',
                qElemNumber: 25,
                qState: 'O',
              },
              {
                qText: '85 868,00 kr',
                qNum: 85868,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '895,00 kr',
                qNum: 895,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'V',
                qNum: 'NaN',
                qElemNumber: 21,
                qState: 'O',
              },
              {
                qText: '100 524,00 kr',
                qNum: 100524,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '873,00 kr',
                qNum: 873,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'O',
                qNum: 'NaN',
                qElemNumber: 14,
                qState: 'O',
              },
              {
                qText: '97 939,00 kr',
                qNum: 97939,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '870,00 kr',
                qNum: 870,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'R',
                qNum: 'NaN',
                qElemNumber: 17,
                qState: 'O',
              },
              {
                qText: '87 571,00 kr',
                qNum: 87571,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '869,00 kr',
                qNum: 869,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'X',
                qNum: 'NaN',
                qElemNumber: 23,
                qState: 'O',
              },
              {
                qText: '96 047,00 kr',
                qNum: 96047,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '855,00 kr',
                qNum: 855,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'F',
                qNum: 'NaN',
                qElemNumber: 5,
                qState: 'O',
              },
              {
                qText: '93 450,00 kr',
                qNum: 93450,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '855,00 kr',
                qNum: 855,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'B',
                qNum: 'NaN',
                qElemNumber: 1,
                qState: 'O',
              },
              {
                qText: '88 460,00 kr',
                qNum: 88460,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '855,00 kr',
                qNum: 855,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'U',
                qNum: 'NaN',
                qElemNumber: 20,
                qState: 'O',
              },
              {
                qText: '92 926,00 kr',
                qNum: 92926,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '851,00 kr',
                qNum: 851,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'N',
                qNum: 'NaN',
                qElemNumber: 13,
                qState: 'O',
              },
              {
                qText: '91 346,00 kr',
                qNum: 91346,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '850,00 kr',
                qNum: 850,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'W',
                qNum: 'NaN',
                qElemNumber: 22,
                qState: 'O',
              },
              {
                qText: '93 626,00 kr',
                qNum: 93626,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '836,00 kr',
                qNum: 836,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'S',
                qNum: 'NaN',
                qElemNumber: 18,
                qState: 'O',
              },
              {
                qText: '94 367,00 kr',
                qNum: 94367,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '833,00 kr',
                qNum: 833,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Q',
                qNum: 'NaN',
                qElemNumber: 16,
                qState: 'O',
              },
              {
                qText: '86 384,00 kr',
                qNum: 86384,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '802,00 kr',
                qNum: 802,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'A',
                qNum: 'NaN',
                qElemNumber: 0,
                qState: 'O',
              },
              {
                qText: '89 481,00 kr',
                qNum: 89481,
                qElemNumber: 0,
                qState: 'L',
              },
              {
                qText: '787,00 kr',
                qNum: 787,
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
            qHeight: 26,
          },
        },
      ],
      getEffectiveProperties: {},
    },
  ],
});
