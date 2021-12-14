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
              qAttrExprInfo: [
                {
                  qMin: 12.143190000000004,
                  qMax: 17483.981000000007,
                  qFallbackTitle: 'Budget',
                  qMinText: '12.14319',
                  qMaxText: '17483.981',
                  qNumFormat: {
                    qType: 'R',
                    qnDec: 0,
                    qUseThou: 0,
                    qFmt: '##############',
                    qDec: '.',
                    qThou: ',',
                  },
                  qIsAutoFormat: true,
                  id: 'colorByAlternative',
                  matchMeasure: 0,
                  colorMapRef: 'VjxMHP',
                },
              ],
              qAttrDimInfo: [],
              qCardinalities: {
                qCardinal: 130,
                qHypercubeCardinal: 131,
                qAllValuesCardinal: -1,
              },
              qLibraryId: 'pcZcGjn',
              title: 'Customer',
              autoSort: true,
              cId: 'ZnszF',
              othersLabel: 'Others',
            },
          ],
          qMeasureInfo: [
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
              cId: 'zvbsARM',
              numFormatFromTemplate: true,
            },
            {
              qFallbackTitle: '# of Products',
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
              qMax: 752,
              qIsAutoFormat: true,
              qAttrExprInfo: [],
              qAttrDimInfo: [],
              qLibraryId: 'KdPhAt',
              qTrendLines: [],
              coloring: {
                baseColor: {
                  color: '#ec00d7',
                  index: -1,
                },
                gradient: {
                  colors: [
                    {
                      color: '#c8000a',
                      index: -1,
                    },
                    {
                      color: '#ff6b11',
                      index: -1,
                    },
                    {
                      color: '#8fda0f',
                      index: -1,
                    },
                    {
                      color: '#1e07ec',
                      index: -1,
                    },
                  ],
                  breakTypes: [false, true, false],
                  limits: [0.198, 0.57, 1],
                  limitType: 'percent',
                },
              },
              autoSort: true,
              cId: 'LpHape',
              numFormatFromTemplate: true,
            },
          ],
          qEffectiveInterColumnSortOrder: [2, 1, 0],
          qGrandTotalRow: [
            {
              qText: '49609.47729',
              qNum: 49609.47729000036,
              qElemNumber: -1,
              qState: 'X',
              qIsTotalCell: true,
            },
            {
              qText: '824',
              qNum: 824,
              qElemNumber: -1,
              qState: 'X',
              qIsTotalCell: true,
            },
          ],
          qDataPages: [
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
        title: 'Color by measure',
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
          auto: false,
          mode: 'byMeasure',
          formatting: {
            numFormatFromTemplate: true,
          },
          useBaseColors: 'off',
          paletteColor: {
            index: 12,
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
          altLabel: 'VjxMHP',
          byDimDef: {
            label: 'jgxpDbw',
            key: 'jgxpDbw',
            type: 'libraryItem',
            activeDimensionIndex: 0,
          },
          byMeasureDef: {
            label: 'VjxMHP',
            key: 'VjxMHP',
            type: 'libraryItem',
            activeMeasureIndex: 0,
          },
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
          description: 'A scatter plot',
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
                qText: 'Vanstar',
                qNum: 'NaN',
                qElemNumber: 92,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10124.17108',
                      qNum: 10124.171079999998,
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
                qText: '752',
                qNum: 752,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16783.41993',
                      qNum: 16783.419930000007,
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
                qText: '589',
                qNum: 589,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2402.08645',
                      qNum: 2402.0864500000025,
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
                qText: '484',
                qNum: 484,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16783.41993',
                      qNum: 16783.419930000007,
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
                qText: '438',
                qNum: 438,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10124.17108',
                      qNum: 10124.171079999998,
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
                qText: '417',
                qNum: 417,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17483.981',
                      qNum: 17483.981000000007,
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
                qText: '338',
                qNum: 338,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8596.08186',
                      qNum: 8596.081859999967,
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
                qText: '313',
                qNum: 313,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8077.15782',
                      qNum: 8077.157819999976,
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
                qText: '313',
                qNum: 313,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7384.95836',
                      qNum: 7384.958359999978,
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
                qText: '286',
                qNum: 286,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12993.84583',
                      qNum: 12993.845830000011,
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
                qText: '284',
                qNum: 284,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17483.981',
                      qNum: 17483.981000000007,
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
                qText: '280',
                qNum: 280,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13860.62154',
                      qNum: 13860.621539999998,
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
                qText: '260',
                qNum: 260,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9423.61001',
                      qNum: 9423.610009999986,
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
                qText: '247',
                qNum: 247,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11587.89936',
                      qNum: 11587.899359999996,
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
                qText: '244',
                qNum: 244,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9848.61328',
                      qNum: 9848.613280000021,
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
                qText: '242',
                qNum: 242,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5931.90234',
                      qNum: 5931.902339999979,
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
                qText: '240',
                qNum: 240,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15494.01206',
                      qNum: 15494.012059999992,
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
                qText: '237',
                qNum: 237,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13738.11355',
                      qNum: 13738.113549999998,
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
                qText: '237',
                qNum: 237,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: 'Hetrick Systems',
                qNum: 'NaN',
                qElemNumber: 4,
                qState: 'O',
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17483.981',
                      qNum: 17483.981000000007,
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
                qText: '232',
                qNum: 232,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11123.98136',
                      qNum: 11123.981359999982,
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
                qText: '232',
                qNum: 232,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '387.87481',
                      qNum: 387.87481000000014,
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
                qText: '223',
                qNum: 223,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10114.67854',
                      qNum: 10114.678539999992,
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
                qText: '216',
                qNum: 216,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13873.59434',
                      qNum: 13873.594339999994,
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
                qText: '208',
                qNum: 208,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5059.44361',
                      qNum: 5059.443610000004,
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
                qText: '206',
                qNum: 206,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10124.17108',
                      qNum: 10124.171079999998,
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
                qText: '204',
                qNum: 204,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16783.41993',
                      qNum: 16783.419930000007,
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
                qText: '195',
                qNum: 195,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '17483.981',
                      qNum: 17483.981000000007,
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
                qText: '193',
                qNum: 193,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11626.4468',
                      qNum: 11626.446800000034,
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
                qText: '189',
                qNum: 189,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2499.2571',
                      qNum: 2499.2571000000007,
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
                qText: '188',
                qNum: 188,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12910.31092',
                      qNum: 12910.310920000014,
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
                qText: '187',
                qNum: 187,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10124.17108',
                      qNum: 10124.171079999998,
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
                qText: '179',
                qNum: 179,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10196.26976',
                      qNum: 10196.269759999992,
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
                qText: '166',
                qNum: 166,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4143.06639',
                      qNum: 4143.066389999999,
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
                qText: '166',
                qNum: 166,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10124.17108',
                      qNum: 10124.171079999998,
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
                qText: '164',
                qNum: 164,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13736.87662',
                      qNum: 13736.876620000005,
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
                qText: '160',
                qNum: 160,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7199.14156',
                      qNum: 7199.141560000007,
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
                qText: '155',
                qNum: 155,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6465.0562',
                      qNum: 6465.056200000014,
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
                qText: '144',
                qNum: 144,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16092.3514',
                      qNum: 16092.351399999998,
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
                qText: '143',
                qNum: 143,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11916.46314',
                      qNum: 11916.463140000018,
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
                qText: '138',
                qNum: 138,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16010.82545',
                      qNum: 16010.825450000002,
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
                qText: '137',
                qNum: 137,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '406.05585',
                      qNum: 406.0558500000005,
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
                qText: '134',
                qNum: 134,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2440.55688',
                      qNum: 2440.556879999999,
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
                qText: '123',
                qNum: 123,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13792.00312',
                      qNum: 13792.003119999996,
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
                qText: '120',
                qNum: 120,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10815.23961',
                      qNum: 10815.239609999984,
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
                qText: '120',
                qNum: 120,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13033.11094',
                      qNum: 13033.110939999986,
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
                qText: '112',
                qNum: 112,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12391.83198',
                      qNum: 12391.83198,
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
                qText: '107',
                qNum: 107,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4920.13189',
                      qNum: 4920.131889999987,
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
                qText: '106',
                qNum: 106,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4098.93851',
                      qNum: 4098.938509999997,
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
                qText: '106',
                qNum: 106,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12910.31092',
                      qNum: 12910.310920000014,
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
                qText: '104',
                qNum: 104,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '371.58099',
                      qNum: 371.58099000000004,
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
                qText: '103',
                qNum: 103,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11954.21209',
                      qNum: 11954.212089999994,
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
                qText: '102',
                qNum: 102,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13796.43438',
                      qNum: 13796.434379999997,
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
                qText: '101',
                qNum: 101,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7604.81279',
                      qNum: 7604.812789999972,
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
                qText: '100',
                qNum: 100,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11240.53292',
                      qNum: 11240.532920000027,
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
                qText: '95',
                qNum: 95,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5692.98032',
                      qNum: 5692.980320000008,
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
                qText: '93',
                qNum: 93,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10124.17108',
                      qNum: 10124.171079999998,
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
                qText: '88',
                qNum: 88,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8601.11848',
                      qNum: 8601.118480000014,
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
                qText: '85',
                qNum: 85,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15337.54471',
                      qNum: 15337.54470999999,
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
                qText: '84',
                qNum: 84,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13870.03853',
                      qNum: 13870.038529999996,
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
                qText: '84',
                qNum: 84,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3727.90891',
                      qNum: 3727.9089100000006,
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
                qText: '84',
                qNum: 84,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8893.33552',
                      qNum: 8893.33551999997,
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
                qText: '82',
                qNum: 82,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2082.82888',
                      qNum: 2082.8288800000014,
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
                qText: '80',
                qNum: 80,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15224.2419',
                      qNum: 15224.241899999995,
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
                qText: '79',
                qNum: 79,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '16751.63965',
                      qNum: 16751.639650000005,
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
                qText: '78',
                qNum: 78,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10747.33489',
                      qNum: 10747.334889999991,
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
                qText: '78',
                qNum: 78,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11615.88051',
                      qNum: 11615.88051000003,
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
                qText: '76',
                qNum: 76,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7767.29483',
                      qNum: 7767.2948299999725,
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
                qText: '76',
                qNum: 76,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2487.31659',
                      qNum: 2487.316590000001,
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
                qText: '75',
                qNum: 75,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5251.73011',
                      qNum: 5251.730109999991,
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
                qText: '73',
                qNum: 73,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8116.00432',
                      qNum: 8116.004319999988,
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
                qText: '72',
                qNum: 72,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12993.84583',
                      qNum: 12993.845830000011,
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
                qText: '71',
                qNum: 71,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2445.39496',
                      qNum: 2445.394959999999,
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
                qText: '71',
                qNum: 71,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '14510.7733',
                      qNum: 14510.773299999993,
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
                qText: '69',
                qNum: 69,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10161.07133',
                      qNum: 10161.07132999999,
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
                qText: '67',
                qNum: 67,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '15123.15424',
                      qNum: 15123.154239999989,
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
                qText: '66',
                qNum: 66,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8471.99602',
                      qNum: 8471.996019999977,
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
                qText: '60',
                qNum: 60,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8164.54537',
                      qNum: 8164.545370000015,
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
                qText: '58',
                qNum: 58,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9722.12255',
                      qNum: 9722.122550000011,
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
                qText: '54',
                qNum: 54,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9548.96964',
                      qNum: 9548.969640000014,
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
                qText: '53',
                qNum: 53,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7090.84735',
                      qNum: 7090.847349999983,
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
                qText: '53',
                qNum: 53,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12991.81505',
                      qNum: 12991.815049999996,
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
                qText: '52',
                qNum: 52,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1401.64976',
                      qNum: 1401.6497600000014,
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
                qText: '51',
                qNum: 51,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11108.15638',
                      qNum: 11108.156379999988,
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
                qText: '45',
                qNum: 45,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9315.09611',
                      qNum: 9315.096109999988,
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
                qText: '43',
                qNum: 43,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10124.17108',
                      qNum: 10124.171079999998,
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
                qText: '42',
                qNum: 42,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '359.40747',
                      qNum: 359.4074700000005,
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
                qText: '41',
                qNum: 41,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '359.15571',
                      qNum: 359.15571000000074,
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
                qText: '40',
                qNum: 40,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8952.99702',
                      qNum: 8952.997019999977,
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
                qText: '38',
                qNum: 38,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5313.22356',
                      qNum: 5313.223559999995,
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
                qText: '35',
                qNum: 35,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10863.74276',
                      qNum: 10863.742759999988,
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
                qText: '34',
                qNum: 34,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8614.80983',
                      qNum: 8614.809829999973,
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
                qText: '34',
                qNum: 34,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7010.24792',
                      qNum: 7010.247919999992,
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
                qText: '33',
                qNum: 33,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '11243.81759',
                      qNum: 11243.817589999993,
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
                qText: '32',
                qNum: 32,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10124.17108',
                      qNum: 10124.171079999998,
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
                qText: '32',
                qNum: 32,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8782.67215',
                      qNum: 8782.672150000024,
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
                qText: '31',
                qNum: 31,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12.14319',
                      qNum: 12.143190000000004,
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
                qText: '30',
                qNum: 30,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5634.06658',
                      qNum: 5634.066579999986,
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
                qText: '28',
                qNum: 28,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '13739.44869',
                      qNum: 13739.44868999999,
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
                qText: '27',
                qNum: 27,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '9412.29815',
                      qNum: 9412.298150000011,
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
                qText: '27',
                qNum: 27,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8035.26222',
                      qNum: 8035.262219999979,
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
                qText: '27',
                qNum: 27,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '245.31174',
                      qNum: 245.3117400000004,
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
                qText: '27',
                qNum: 27,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '4523.865',
                      qNum: 4523.864999999999,
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
                qText: '25',
                qNum: 25,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10550.83236',
                      qNum: 10550.832359999988,
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
                qText: '22',
                qNum: 22,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7910.73439',
                      qNum: 7910.734389999969,
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
                qText: '22',
                qNum: 22,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7802.94423',
                      qNum: 7802.944229999974,
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
                qText: '22',
                qNum: 22,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7209.91046',
                      qNum: 7209.910459999977,
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
                qText: '20',
                qNum: 20,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10051.23215',
                      qNum: 10051.232150000005,
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
                qText: '19',
                qNum: 19,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5565.84899',
                      qNum: 5565.848990000012,
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
                qText: '17',
                qNum: 17,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8826.86594',
                      qNum: 8826.865940000016,
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
                qText: '16',
                qNum: 16,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6060.80508',
                      qNum: 6060.805079999983,
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
                qText: '16',
                qNum: 16,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '146.94371',
                      qNum: 146.94370999999998,
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
                qText: '15',
                qNum: 15,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '12323.4939',
                      qNum: 12323.493900000016,
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
                qText: '14',
                qNum: 14,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3426.13714',
                      qNum: 3426.1371399999985,
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
                qText: '13',
                qNum: 13,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '7102.38316',
                      qNum: 7102.383159999976,
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
                qText: '12',
                qNum: 12,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3890.83983',
                      qNum: 3890.8398299999994,
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
                qText: '12',
                qNum: 12,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1097.85742',
                      qNum: 1097.8574200000005,
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
                qText: '12',
                qNum: 12,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3404.22215',
                      qNum: 3404.2221500000005,
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
                qText: '11',
                qNum: 11,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8672.55428',
                      qNum: 8672.554279999982,
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
                qText: '9',
                qNum: 9,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '993.84778',
                      qNum: 993.8477799999993,
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
                qText: '9',
                qNum: 9,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '91.86719',
                      qNum: 91.86719000000001,
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
                qText: '9',
                qNum: 9,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '8429.01931',
                      qNum: 8429.01930999998,
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
                qText: '8',
                qNum: 8,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6965.12239',
                      qNum: 6965.12238999999,
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
                qText: '7',
                qNum: 7,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '2958.10685',
                      qNum: 2958.1068499999983,
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
                qText: '7',
                qNum: 7,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '6438.89336',
                      qNum: 6438.893360000014,
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
                qText: '6',
                qNum: 6,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '3894.90512',
                      qNum: 3894.9051200000013,
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
                qText: '6',
                qNum: 6,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '5695.55066',
                      qNum: 5695.550660000008,
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
                qText: '5',
                qNum: 5,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1143.70731',
                      qNum: 1143.7073100000007,
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
                qText: '5',
                qNum: 5,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1102.42977',
                      qNum: 1102.4297699999993,
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
                qText: '5',
                qNum: 5,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1997.67832',
                      qNum: 1997.6783200000007,
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
                qText: '3',
                qNum: 3,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '1093.8981',
                      qNum: 1093.8980999999992,
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
                qText: '3',
                qNum: 3,
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
                qAttrExps: {
                  qValues: [
                    {
                      qText: '10440.64171',
                      qNum: 10440.641709999963,
                    },
                  ],
                },
                qIsNull: true,
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
            qWidth: 3,
            qHeight: 131,
          },
        },
      ],
      getEffectiveProperties: {},
    },
  ],
});
