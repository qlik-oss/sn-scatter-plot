export default () => ({
  type: 'sn-scatter-plot',
  genericObjects: [
    {
      getLayout: {
        qInfo: {
          qId: 'e5860c20-1bd7-4aea-b0ea-90ab38829b7c',
          qType: 'embeddedsnapshot',
        },
        qMeta: {
          privileges: ['read', 'update', 'delete', 'exportdata', 'approve'],
          title: '',
          description: '',
          annotation: '',
        },
        qBookmark: {
          qStateData: [
            {
              qStateName: '$',
              qFieldItems: [],
            },
            {
              qStateName: 'state 1',
              qFieldItems: [],
            },
            {
              qStateName: 'state 2',
              qFieldItems: [],
            },
          ],
          qUtcModifyTime: 44595.53958333333,
          qVariableItems: [],
          qPatches: [],
        },
        qFieldInfos: [],
        creationDate: '2022-02-03T11:57:00.960Z',
        qSelectionInfo: {},
        qHyperCube: {
          qSize: {
            qcx: 3,
            qcy: 271,
          },
          qDimensionInfo: [
            {
              qFallbackTitle: 'A City (1)',
              qApprMaxGlyphCount: 17,
              qCardinal: 271,
              qSortIndicator: 'A',
              qGroupFallbackTitles: ['A City (1)'],
              qGroupPos: 0,
              qStateCounts: {
                qLocked: 0,
                qSelected: 0,
                qOption: 271,
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
              qGroupFieldDefs: ['City'],
              qMin: 'NaN',
              qMax: 'NaN',
              qAttrExprInfo: [],
              qAttrDimInfo: [
                {
                  qCardinal: 271,
                  qSize: {
                    qcx: 2,
                    qcy: 271,
                  },
                  qFallbackTitle: 'A City (1)',
                  id: 'colorByAlternative',
                  colorMapRef: '01b5a405-2125-49e7-85ff-fe29d7736910',
                },
              ],
              qCardinalities: {
                qCardinal: 271,
                qHypercubeCardinal: 271,
                qAllValuesCardinal: -1,
              },
              qLibraryId: '01b5a405-2125-49e7-85ff-fe29d7736910',
              title: 'A City (1)',
              coloring: {
                colorMapRef: '01b5a405-2125-49e7-85ff-fe29d7736910',
                changeHash: '0.5830222604081499',
              },
              autoSort: true,
              cId: 'EXZAfp',
              othersLabel: 'Others',
            },
          ],
          qMeasureInfo: [
            {
              qFallbackTitle: 'Actual Amount',
              qApprMaxGlyphCount: 11,
              qCardinal: 0,
              qSortIndicator: 'D',
              qNumFormat: {
                qType: 'U',
                qnDec: 0,
                qUseThou: 0,
              },
              qMin: -849.12,
              qMax: 11434394.96,
              qIsAutoFormat: true,
              qAttrExprInfo: [],
              qAttrDimInfo: [],
              qLibraryId: 'uQbd',
              qTrendLines: [],
              autoSort: true,
              cId: 'dwhpG',
              numFormatFromTemplate: true,
              quarantine: {
                qNumFormat: {},
                isCustomFormatted: false,
              },
            },
            {
              qFallbackTitle: 'Sales $',
              qApprMaxGlyphCount: 15,
              qCardinal: 0,
              qSortIndicator: 'D',
              qNumFormat: {
                qType: 'U',
                qnDec: 0,
                qUseThou: 0,
              },
              qMin: 0,
              qMax: 11889136.430000003,
              qIsAutoFormat: true,
              qAttrExprInfo: [],
              qAttrDimInfo: [],
              qLibraryId: 'FAeJZM',
              qTrendLines: [],
              autoSort: true,
              cId: 'XQgUkYe',
              numFormatFromTemplate: true,
              quarantine: {
                qNumFormat: {},
                isCustomFormatted: false,
              },
            },
          ],
          qEffectiveInterColumnSortOrder: [2, 1, 0],
          qGrandTotalRow: [
            {
              qText: '46258458.11',
              qNum: 46258458.110000014,
              qElemNumber: -1,
              qState: 'X',
              qIsTotalCell: true,
            },
            {
              qText: '98672601.470002',
              qNum: 98672601.47000188,
              qElemNumber: -1,
              qState: 'X',
              qIsTotalCell: true,
            },
          ],
          qDataPages: [
            {
              qMatrix: [
                [
                  {
                    qText: 'Mentor',
                    qNum: 'NaN',
                    qElemNumber: 154,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Mentor',
                          qElemNo: 154,
                        },
                      ],
                    },
                  },
                  {
                    qText: '11434394.96',
                    qNum: 11434394.96,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '11889136.43',
                    qNum: 11889136.430000003,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Hamel',
                    qNum: 'NaN',
                    qElemNumber: 59,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Hamel',
                          qElemNo: 59,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '11117285.78',
                    qNum: 11117285.779999997,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Compton',
                    qNum: 'NaN',
                    qElemNumber: 0,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Compton',
                          qElemNo: 0,
                        },
                      ],
                    },
                  },
                  {
                    qText: '136859.48',
                    qNum: 136859.48,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '3720451.16',
                    qNum: 3720451.1600000137,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Odessa',
                    qNum: 'NaN',
                    qElemNumber: 32,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Odessa',
                          qElemNo: 32,
                        },
                      ],
                    },
                  },
                  {
                    qText: '3109821.47',
                    qNum: 3109821.47,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '3178724.93',
                    qNum: 3178724.93,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Smyrna',
                    qNum: 'NaN',
                    qElemNumber: 26,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Smyrna',
                          qElemNo: 26,
                        },
                      ],
                    },
                  },
                  {
                    qText: '90451.8',
                    qNum: 90451.79999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '3108910.14',
                    qNum: 3108910.1399999973,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Roanoke',
                    qNum: 'NaN',
                    qElemNumber: 53,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Roanoke',
                          qElemNo: 53,
                        },
                      ],
                    },
                  },
                  {
                    qText: '1996743.47',
                    qNum: 1996743.4699999997,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '2431352.62',
                    qNum: 2431352.6199999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Buffdale',
                    qNum: 'NaN',
                    qElemNumber: 186,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Buffdale',
                          qElemNo: 186,
                        },
                      ],
                    },
                  },
                  {
                    qText: '2242011.51',
                    qNum: 2242011.5100000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '2248193.39',
                    qNum: 2248193.39,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Southfield',
                    qNum: 'NaN',
                    qElemNumber: 112,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Southfield',
                          qElemNo: 112,
                        },
                      ],
                    },
                  },
                  {
                    qText: '1835965.04',
                    qNum: 1835965.04,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '2115465.02',
                    qNum: 2115465.0199999963,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Cypress',
                    qNum: 'NaN',
                    qElemNumber: 93,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Cypress',
                          qElemNo: 93,
                        },
                      ],
                    },
                  },
                  {
                    qText: '8622.79',
                    qNum: 8622.79,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '2048522.27',
                    qNum: 2048522.27,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Sioux Center',
                    qNum: 'NaN',
                    qElemNumber: 148,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Sioux Center',
                          qElemNo: 148,
                        },
                      ],
                    },
                  },
                  {
                    qText: '2022972.99',
                    qNum: 2022972.9900000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '2044386.32',
                    qNum: 2044386.319999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Overland Park',
                    qNum: 'NaN',
                    qElemNumber: 2,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Overland Park',
                          qElemNo: 2,
                        },
                      ],
                    },
                  },
                  {
                    qText: '233855',
                    qNum: 233854.99999999997,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1945587.63',
                    qNum: 1945587.6300000125,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Exeter',
                    qNum: 'NaN',
                    qElemNumber: 28,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Exeter',
                          qElemNo: 28,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1934520.21',
                    qNum: 1934520.210000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Livonia',
                    qNum: 'NaN',
                    qElemNumber: 14,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Livonia',
                          qElemNo: 14,
                        },
                      ],
                    },
                  },
                  {
                    qText: '108171.66',
                    qNum: 108171.66000000005,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1836462.89',
                    qNum: 1836462.8900000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Portland',
                    qNum: 'NaN',
                    qElemNumber: 24,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Portland',
                          qElemNo: 24,
                        },
                      ],
                    },
                  },
                  {
                    qText: '1276524.02',
                    qNum: 1276524.02,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1832969.2',
                    qNum: 1832969.2000000041,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Sacramento',
                    qNum: 'NaN',
                    qElemNumber: 39,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Sacramento',
                          qElemNo: 39,
                        },
                      ],
                    },
                  },
                  {
                    qText: '1225805.46',
                    qNum: 1225805.4600000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1803526.3',
                    qNum: 1803526.3,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Thief River Falls',
                    qNum: 'NaN',
                    qElemNumber: 79,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Thief River Falls',
                          qElemNo: 79,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1782516.08',
                    qNum: 1782516.08,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Plainfield',
                    qNum: 'NaN',
                    qElemNumber: 86,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Plainfield',
                          qElemNo: 86,
                        },
                      ],
                    },
                  },
                  {
                    qText: '106585.14',
                    qNum: 106585.14000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1555698.51',
                    qNum: 1555698.5100000023,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Dallas',
                    qNum: 'NaN',
                    qElemNumber: 34,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Dallas',
                          qElemNo: 34,
                        },
                      ],
                    },
                  },
                  {
                    qText: '1503538.07',
                    qNum: 1503538.07,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1543996.27',
                    qNum: 1543996.2700000003,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Sparks',
                    qNum: 'NaN',
                    qElemNumber: 126,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Sparks',
                          qElemNo: 126,
                        },
                      ],
                    },
                  },
                  {
                    qText: '1288612.08',
                    qNum: 1288612.08,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1308421.04',
                    qNum: 1308421.040000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Maxwell',
                    qNum: 'NaN',
                    qElemNumber: 151,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Maxwell',
                          qElemNo: 151,
                        },
                      ],
                    },
                  },
                  {
                    qText: '1143700.63',
                    qNum: 1143700.6299999997,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1280146.81',
                    qNum: 1280146.8100000005,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Schertz',
                    qNum: 'NaN',
                    qElemNumber: 71,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Schertz',
                          qElemNo: 71,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1254348.34',
                    qNum: 1254348.3400000005,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Auburn',
                    qNum: 'NaN',
                    qElemNumber: 35,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Auburn',
                          qElemNo: 35,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1058082.53',
                    qNum: 1058082.530000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'New Castle',
                    qNum: 'NaN',
                    qElemNumber: 165,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'New Castle',
                          qElemNo: 165,
                        },
                      ],
                    },
                  },
                  {
                    qText: '876404.49',
                    qNum: 876404.4899999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '994911.12',
                    qNum: 994911.1200000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Cape Girardeau',
                    qNum: 'NaN',
                    qElemNumber: 46,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Cape Girardeau',
                          qElemNo: 46,
                        },
                      ],
                    },
                  },
                  {
                    qText: '17416.32',
                    qNum: 17416.32,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '969020.84',
                    qNum: 969020.8399999992,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Janesville',
                    qNum: 'NaN',
                    qElemNumber: 52,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Janesville',
                          qElemNo: 52,
                        },
                      ],
                    },
                  },
                  {
                    qText: '468.29',
                    qNum: 468.28999999999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '945869.79',
                    qNum: 945869.7900000006,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'West Jordan',
                    qNum: 'NaN',
                    qElemNumber: 13,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'West Jordan',
                          qElemNo: 13,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '906968.68',
                    qNum: 906968.6799999994,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Kansas City',
                    qNum: 'NaN',
                    qElemNumber: 70,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Kansas City',
                          qElemNo: 70,
                        },
                      ],
                    },
                  },
                  {
                    qText: '650.17',
                    qNum: 650.17,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '884177.33',
                    qNum: 884177.3299999991,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Mebane',
                    qNum: 'NaN',
                    qElemNumber: 5,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Mebane',
                          qElemNo: 5,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '847958.25',
                    qNum: 847958.25,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Salt Lake City',
                    qNum: 'NaN',
                    qElemNumber: 25,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Salt Lake City',
                          qElemNo: 25,
                        },
                      ],
                    },
                  },
                  {
                    qText: '7116.37',
                    qNum: 7116.369999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '756947.92',
                    qNum: 756947.92,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Irvine',
                    qNum: 'NaN',
                    qElemNumber: 131,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Irvine',
                          qElemNo: 131,
                        },
                      ],
                    },
                  },
                  {
                    qText: '480887.53',
                    qNum: 480887.53,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '717642.9',
                    qNum: 717642.9000000004,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Boise',
                    qNum: 'NaN',
                    qElemNumber: 72,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Boise',
                          qElemNo: 72,
                        },
                      ],
                    },
                  },
                  {
                    qText: '368655.72',
                    qNum: 368655.72,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '710879.52',
                    qNum: 710879.5199999985,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Fort Worth',
                    qNum: 'NaN',
                    qElemNumber: 69,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Fort Worth',
                          qElemNo: 69,
                        },
                      ],
                    },
                  },
                  {
                    qText: '21581.85',
                    qNum: 21581.85,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '702744.36',
                    qNum: 702744.3600000018,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Poplar Bluff',
                    qNum: 'NaN',
                    qElemNumber: 248,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Poplar Bluff',
                          qElemNo: 248,
                        },
                      ],
                    },
                  },
                  {
                    qText: '701585.65',
                    qNum: 701585.65,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '701744.3',
                    qNum: 701744.3,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Kalamazoo',
                    qNum: 'NaN',
                    qElemNumber: 198,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Kalamazoo',
                          qElemNo: 198,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '647617.29',
                    qNum: 647617.2900000003,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Sidney',
                    qNum: 'NaN',
                    qElemNumber: 29,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Sidney',
                          qElemNo: 29,
                        },
                      ],
                    },
                  },
                  {
                    qText: '169659.63',
                    qNum: 169659.63,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '635403',
                    qNum: 635402.9999999994,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Tulsa',
                    qNum: 'NaN',
                    qElemNumber: 75,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Tulsa',
                          qElemNo: 75,
                        },
                      ],
                    },
                  },
                  {
                    qText: '267716.76',
                    qNum: 267716.76,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '619727.88',
                    qNum: 619727.8800000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Dover',
                    qNum: 'NaN',
                    qElemNumber: 152,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Dover',
                          qElemNo: 152,
                        },
                      ],
                    },
                  },
                  {
                    qText: '604720.5',
                    qNum: 604720.5,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '605854.3',
                    qNum: 605854.2999999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Te Rapa Hamilton',
                    qNum: 'NaN',
                    qElemNumber: 21,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Te Rapa Hamilton',
                          qElemNo: 21,
                        },
                      ],
                    },
                  },
                  {
                    qText: '98916.31',
                    qNum: 98916.31,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '582211.06',
                    qNum: 582211.0600000013,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Tupelo',
                    qNum: 'NaN',
                    qElemNumber: 22,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Tupelo',
                          qElemNo: 22,
                        },
                      ],
                    },
                  },
                  {
                    qText: '98916.31',
                    qNum: 98916.31,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '582211.06',
                    qNum: 582211.0600000013,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Jacksonville',
                    qNum: 'NaN',
                    qElemNumber: 68,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Jacksonville',
                          qElemNo: 68,
                        },
                      ],
                    },
                  },
                  {
                    qText: '350927.92',
                    qNum: 350927.92000000004,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '581091.25',
                    qNum: 581091.2500000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'San Diego',
                    qNum: 'NaN',
                    qElemNumber: 129,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'San Diego',
                          qElemNo: 129,
                        },
                      ],
                    },
                  },
                  {
                    qText: '531067.61',
                    qNum: 531067.61,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '542123.65',
                    qNum: 542123.6500000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Statesville',
                    qNum: 'NaN',
                    qElemNumber: 238,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Statesville',
                          qElemNo: 238,
                        },
                      ],
                    },
                  },
                  {
                    qText: '517268.84',
                    qNum: 517268.84,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '517268.84',
                    qNum: 517268.83999999997,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Clemson',
                    qNum: 'NaN',
                    qElemNumber: 23,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Clemson',
                          qElemNo: 23,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '469515.76',
                    qNum: 469515.7599999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Costa Mesa',
                    qNum: 'NaN',
                    qElemNumber: 243,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Costa Mesa',
                          qElemNo: 243,
                        },
                      ],
                    },
                  },
                  {
                    qText: '438845.61',
                    qNum: 438845.6099999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '442997.78',
                    qNum: 442997.77999999956,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Tumwater',
                    qNum: 'NaN',
                    qElemNumber: 83,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Tumwater',
                          qElemNo: 83,
                        },
                      ],
                    },
                  },
                  {
                    qText: '399217.79',
                    qNum: 399217.79,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '430683.25',
                    qNum: 430683.2500000004,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Olive Branch',
                    qNum: 'NaN',
                    qElemNumber: 239,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Olive Branch',
                          qElemNo: 239,
                        },
                      ],
                    },
                  },
                  {
                    qText: '419544.96',
                    qNum: 419544.9599999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '420176.19',
                    qNum: 420176.18999999994,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Columbiana',
                    qNum: 'NaN',
                    qElemNumber: 66,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Columbiana',
                          qElemNo: 66,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '415125.96',
                    qNum: 415125.95999999985,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Greenwood',
                    qNum: 'NaN',
                    qElemNumber: 50,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Greenwood',
                          qElemNo: 50,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '409514.34',
                    qNum: 409514.34,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Phoenix',
                    qNum: 'NaN',
                    qElemNumber: 55,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Phoenix',
                          qElemNo: 55,
                        },
                      ],
                    },
                  },
                  {
                    qText: '122685.36',
                    qNum: 122685.36000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '397408.57',
                    qNum: 397408.5700000006,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Bedford Hills',
                    qNum: 'NaN',
                    qElemNumber: 235,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Bedford Hills',
                          qElemNo: 235,
                        },
                      ],
                    },
                  },
                  {
                    qText: '388706.22',
                    qNum: 388706.2200000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '388706.22',
                    qNum: 388706.2200000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Van Nuys',
                    qNum: 'NaN',
                    qElemNumber: 177,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Van Nuys',
                          qElemNo: 177,
                        },
                      ],
                    },
                  },
                  {
                    qText: '329056.42',
                    qNum: 329056.42000000004,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '370052.7',
                    qNum: 370052.69999999984,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Saginaw',
                    qNum: 'NaN',
                    qElemNumber: 36,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Saginaw',
                          qElemNo: 36,
                        },
                      ],
                    },
                  },
                  {
                    qText: '27827.95',
                    qNum: 27827.95,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '358850.5',
                    qNum: 358850.5,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'New Orleans',
                    qNum: 'NaN',
                    qElemNumber: 145,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'New Orleans',
                          qElemNo: 145,
                        },
                      ],
                    },
                  },
                  {
                    qText: '341680.47',
                    qNum: 341680.46999999986,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '351164.66',
                    qNum: 351164.6599999994,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Highland',
                    qNum: 'NaN',
                    qElemNumber: 96,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Highland',
                          qElemNo: 96,
                        },
                      ],
                    },
                  },
                  {
                    qText: '347691.01',
                    qNum: 347691.01,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '350943.44',
                    qNum: 350943.43999999965,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Pomona',
                    qNum: 'NaN',
                    qElemNumber: 80,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Pomona',
                          qElemNo: 80,
                        },
                      ],
                    },
                  },
                  {
                    qText: '320915.12',
                    qNum: 320915.11999999994,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '340544.21',
                    qNum: 340544.2099999998,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Little Rock',
                    qNum: 'NaN',
                    qElemNumber: 78,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Little Rock',
                          qElemNo: 78,
                        },
                      ],
                    },
                  },
                  {
                    qText: '187739.92',
                    qNum: 187739.91999999998,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '331671.62',
                    qNum: 331671.6199999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Eagan',
                    qNum: 'NaN',
                    qElemNumber: 81,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Eagan',
                          qElemNo: 81,
                        },
                      ],
                    },
                  },
                  {
                    qText: '136032.7',
                    qNum: 136032.7,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '323795.01',
                    qNum: 323795.0099999995,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Mobile',
                    qNum: 'NaN',
                    qElemNumber: 47,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Mobile',
                          qElemNo: 47,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '319867.88',
                    qNum: 319867.8799999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'McHenry',
                    qNum: 'NaN',
                    qElemNumber: 159,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'McHenry',
                          qElemNo: 159,
                        },
                      ],
                    },
                  },
                  {
                    qText: '299280.04',
                    qNum: 299280.04,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '311376.78',
                    qNum: 311376.7800000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Wester Chester',
                    qNum: 'NaN',
                    qElemNumber: 15,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Wester Chester',
                          qElemNo: 15,
                        },
                      ],
                    },
                  },
                  {
                    qText: '144715.1',
                    qNum: 144715.10000000003,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '290976.01',
                    qNum: 290976.00999999995,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Beaverton',
                    qNum: 'NaN',
                    qElemNumber: 60,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Beaverton',
                          qElemNo: 60,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '285978.69',
                    qNum: 285978.6899999998,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'South Bend',
                    qNum: 'NaN',
                    qElemNumber: 27,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'South Bend',
                          qElemNo: 27,
                        },
                      ],
                    },
                  },
                  {
                    qText: '14603.72',
                    qNum: 14603.720000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '281696.67',
                    qNum: 281696.67,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Hialeah',
                    qNum: 'NaN',
                    qElemNumber: 31,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Hialeah',
                          qElemNo: 31,
                        },
                      ],
                    },
                  },
                  {
                    qText: '92377.9',
                    qNum: 92377.90000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '276352.86',
                    qNum: 276352.8600000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Jackson',
                    qNum: 'NaN',
                    qElemNumber: 144,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Jackson',
                          qElemNo: 144,
                        },
                      ],
                    },
                  },
                  {
                    qText: '230139.41',
                    qNum: 230139.41,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '274925.23',
                    qNum: 274925.23000000016,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Fairview',
                    qNum: 'NaN',
                    qElemNumber: 250,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Fairview',
                          qElemNo: 250,
                        },
                      ],
                    },
                  },
                  {
                    qText: '258637.88',
                    qNum: 258637.87999999995,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '266831.69',
                    qNum: 266831.6900000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Ottawa',
                    qNum: 'NaN',
                    qElemNumber: 234,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Ottawa',
                          qElemNo: 234,
                        },
                      ],
                    },
                  },
                  {
                    qText: '235368.42',
                    qNum: 235368.41999999998,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '258981.58',
                    qNum: 258981.57999999993,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Canton',
                    qNum: 'NaN',
                    qElemNumber: 119,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Canton',
                          qElemNo: 119,
                        },
                      ],
                    },
                  },
                  {
                    qText: '133524.5',
                    qNum: 133524.5,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '254238.7',
                    qNum: 254238.70000000004,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Calhoun',
                    qNum: 'NaN',
                    qElemNumber: 30,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Calhoun',
                          qElemNo: 30,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '249863.06',
                    qNum: 249863.05999999994,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Mitchell',
                    qNum: 'NaN',
                    qElemNumber: 184,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Mitchell',
                          qElemNo: 184,
                        },
                      ],
                    },
                  },
                  {
                    qText: '245803.83',
                    qNum: 245803.83,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '248068.66',
                    qNum: 248068.65999999977,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Wells',
                    qNum: 'NaN',
                    qElemNumber: 207,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Wells',
                          qElemNo: 207,
                        },
                      ],
                    },
                  },
                  {
                    qText: '230475.56',
                    qNum: 230475.56,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '247283.8',
                    qNum: 247283.80000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Tampa',
                    qNum: 'NaN',
                    qElemNumber: 91,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Tampa',
                          qElemNo: 91,
                        },
                      ],
                    },
                  },
                  {
                    qText: '243507.61',
                    qNum: 243507.61,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '246290.9',
                    qNum: 246290.89999999994,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Elizabethtown',
                    qNum: 'NaN',
                    qElemNumber: 84,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Elizabethtown',
                          qElemNo: 84,
                        },
                      ],
                    },
                  },
                  {
                    qText: '140095.01',
                    qNum: 140095.01,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '244717.23',
                    qNum: 244717.23000000024,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Tuscon',
                    qNum: 'NaN',
                    qElemNumber: 4,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Tuscon',
                          qElemNo: 4,
                        },
                      ],
                    },
                  },
                  {
                    qText: '1238.28',
                    qNum: 1238.28,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '241289.14',
                    qNum: 241289.14000000022,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Miami',
                    qNum: 'NaN',
                    qElemNumber: 51,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Miami',
                          qElemNo: 51,
                        },
                      ],
                    },
                  },
                  {
                    qText: '78089.9',
                    qNum: 78089.90000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '234150.68',
                    qNum: 234150.67999999993,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Coldwater',
                    qNum: 'NaN',
                    qElemNumber: 38,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Coldwater',
                          qElemNo: 38,
                        },
                      ],
                    },
                  },
                  {
                    qText: '2589.63',
                    qNum: 2589.6300000000006,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '225488.72',
                    qNum: 225488.71999999983,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'North Little Rock',
                    qNum: 'NaN',
                    qElemNumber: 122,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'North Little Rock',
                          qElemNo: 122,
                        },
                      ],
                    },
                  },
                  {
                    qText: '120404.1',
                    qNum: 120404.09999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '223675.98',
                    qNum: 223675.97999999984,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Birmingham',
                    qNum: 'NaN',
                    qElemNumber: 110,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Birmingham',
                          qElemNo: 110,
                        },
                      ],
                    },
                  },
                  {
                    qText: '158989.69',
                    qNum: 158989.68999999997,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '221824.7',
                    qNum: 221824.69999999995,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Mercer',
                    qNum: 'NaN',
                    qElemNumber: 74,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Mercer',
                          qElemNo: 74,
                        },
                      ],
                    },
                  },
                  {
                    qText: '27944.26',
                    qNum: 27944.260000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '217073.18',
                    qNum: 217073.18000000017,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Marshfield',
                    qNum: 'NaN',
                    qElemNumber: 246,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Marshfield',
                          qElemNo: 246,
                        },
                      ],
                    },
                  },
                  {
                    qText: '195934.68',
                    qNum: 195934.68,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '212415.37',
                    qNum: 212415.36999999976,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Petersburg',
                    qNum: 'NaN',
                    qElemNumber: 107,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Petersburg',
                          qElemNo: 107,
                        },
                      ],
                    },
                  },
                  {
                    qText: '65949.77',
                    qNum: 65949.77,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '204171.02',
                    qNum: 204171.01999999993,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'East Providence',
                    qNum: 'NaN',
                    qElemNumber: 16,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'East Providence',
                          qElemNo: 16,
                        },
                      ],
                    },
                  },
                  {
                    qText: '194754.41',
                    qNum: 194754.41,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '202162.31',
                    qNum: 202162.30999999997,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Brownsville',
                    qNum: 'NaN',
                    qElemNumber: 252,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Brownsville',
                          qElemNo: 252,
                        },
                      ],
                    },
                  },
                  {
                    qText: '199463.5',
                    qNum: 199463.5,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '201878.5',
                    qNum: 201878.5000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Pocatello',
                    qNum: 'NaN',
                    qElemNumber: 206,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Pocatello',
                          qElemNo: 206,
                        },
                      ],
                    },
                  },
                  {
                    qText: '191945',
                    qNum: 191945,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '192833.62',
                    qNum: 192833.62000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Elma',
                    qNum: 'NaN',
                    qElemNumber: 241,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Elma',
                          qElemNo: 241,
                        },
                      ],
                    },
                  },
                  {
                    qText: '192005.98',
                    qNum: 192005.97999999998,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '192616.17',
                    qNum: 192616.17,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Louisville',
                    qNum: 'NaN',
                    qElemNumber: 142,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Louisville',
                          qElemNo: 142,
                        },
                      ],
                    },
                  },
                  {
                    qText: '150753.02',
                    qNum: 150753.02,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '192211.79',
                    qNum: 192211.7899999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Fort Smith',
                    qNum: 'NaN',
                    qElemNumber: 118,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Fort Smith',
                          qElemNo: 118,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '191486.53',
                    qNum: 191486.53000000017,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Spokane',
                    qNum: 'NaN',
                    qElemNumber: 12,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Spokane',
                          qElemNo: 12,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '186544.56',
                    qNum: 186544.55999999988,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'St Louis Park',
                    qNum: 'NaN',
                    qElemNumber: 3,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'St Louis Park',
                          qElemNo: 3,
                        },
                      ],
                    },
                  },
                  {
                    qText: '33618.97',
                    qNum: 33618.97000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '184908.33',
                    qNum: 184908.32999999978,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Dearborn',
                    qNum: 'NaN',
                    qElemNumber: 48,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Dearborn',
                          qElemNo: 48,
                        },
                      ],
                    },
                  },
                  {
                    qText: '9396.18',
                    qNum: 9396.18,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '177957.55',
                    qNum: 177957.5500000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Goodlettsville',
                    qNum: 'NaN',
                    qElemNumber: 98,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Goodlettsville',
                          qElemNo: 98,
                        },
                      ],
                    },
                  },
                  {
                    qText: '110147.68',
                    qNum: 110147.68,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '177841.64',
                    qNum: 177841.6400000003,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Charlotte',
                    qNum: 'NaN',
                    qElemNumber: 124,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Charlotte',
                          qElemNo: 124,
                        },
                      ],
                    },
                  },
                  {
                    qText: '78108.75',
                    qNum: 78108.75,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '173552.72',
                    qNum: 173552.71999999968,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Prineville',
                    qNum: 'NaN',
                    qElemNumber: 179,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Prineville',
                          qElemNo: 179,
                        },
                      ],
                    },
                  },
                  {
                    qText: '18371.19',
                    qNum: 18371.19,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '170090.2',
                    qNum: 170090.1999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Brookfield',
                    qNum: 'NaN',
                    qElemNumber: 170,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Brookfield',
                          qElemNo: 170,
                        },
                      ],
                    },
                  },
                  {
                    qText: '164820.4',
                    qNum: 164820.4,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '166817.35',
                    qNum: 166817.35000000012,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Flint',
                    qNum: 'NaN',
                    qElemNumber: 62,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Flint',
                          qElemNo: 62,
                        },
                      ],
                    },
                  },
                  {
                    qText: '156321.97',
                    qNum: 156321.97,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '163436.1',
                    qNum: 163436.1000000004,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Independence',
                    qNum: 'NaN',
                    qElemNumber: 196,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Independence',
                          qElemNo: 196,
                        },
                      ],
                    },
                  },
                  {
                    qText: '160459.27',
                    qNum: 160459.26999999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '162738.74',
                    qNum: 162738.73999999982,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Wrightsville',
                    qNum: 'NaN',
                    qElemNumber: 54,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Wrightsville',
                          qElemNo: 54,
                        },
                      ],
                    },
                  },
                  {
                    qText: '8361.69',
                    qNum: 8361.69,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '159022.2',
                    qNum: 159022.19999999975,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Cleveland',
                    qNum: 'NaN',
                    qElemNumber: 106,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Cleveland',
                          qElemNo: 106,
                        },
                      ],
                    },
                  },
                  {
                    qText: '116781.42',
                    qNum: 116781.42000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '159013.55',
                    qNum: 159013.55000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Puyallup',
                    qNum: 'NaN',
                    qElemNumber: 210,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Puyallup',
                          qElemNo: 210,
                        },
                      ],
                    },
                  },
                  {
                    qText: '157457.55',
                    qNum: 157457.55,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '157502.3',
                    qNum: 157502.3,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'San Marcos',
                    qNum: 'NaN',
                    qElemNumber: 242,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'San Marcos',
                          qElemNo: 242,
                        },
                      ],
                    },
                  },
                  {
                    qText: '151677.98',
                    qNum: 151677.97999999998,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '152006.71',
                    qNum: 152006.71000000022,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Fairmount',
                    qNum: 'NaN',
                    qElemNumber: 218,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Fairmount',
                          qElemNo: 218,
                        },
                      ],
                    },
                  },
                  {
                    qText: '129823.25',
                    qNum: 129823.25000000003,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '150872.83',
                    qNum: 150872.83000000007,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Appleton',
                    qNum: 'NaN',
                    qElemNumber: 17,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Appleton',
                          qElemNo: 17,
                        },
                      ],
                    },
                  },
                  {
                    qText: '2379.28',
                    qNum: 2379.2799999999997,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '146646.09',
                    qNum: 146646.09000000003,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Memphis',
                    qNum: 'NaN',
                    qElemNumber: 1,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Memphis',
                          qElemNo: 1,
                        },
                      ],
                    },
                  },
                  {
                    qText: '9354.68',
                    qNum: 9354.679999999998,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '145437.03',
                    qNum: 145437.02999999997,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Morton',
                    qNum: 'NaN',
                    qElemNumber: 228,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Morton',
                          qElemNo: 228,
                        },
                      ],
                    },
                  },
                  {
                    qText: '137493.71',
                    qNum: 137493.71,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '144473.99',
                    qNum: 144473.98999999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Milwaukie',
                    qNum: 'NaN',
                    qElemNumber: 10,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Milwaukie',
                          qElemNo: 10,
                        },
                      ],
                    },
                  },
                  {
                    qText: '92619.89',
                    qNum: 92619.89,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '141082.43',
                    qNum: 141082.4300000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Grand Rapids',
                    qNum: 'NaN',
                    qElemNumber: 143,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Grand Rapids',
                          qElemNo: 143,
                        },
                      ],
                    },
                  },
                  {
                    qText: '118676.97',
                    qNum: 118676.97000000003,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '138258.42',
                    qNum: 138258.42000000013,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Anchorage',
                    qNum: 'NaN',
                    qElemNumber: 7,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Anchorage',
                          qElemNo: 7,
                        },
                      ],
                    },
                  },
                  {
                    qText: '13922.72',
                    qNum: 13922.72,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '136501.5',
                    qNum: 136501.5000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Jasper',
                    qNum: 'NaN',
                    qElemNumber: 41,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Jasper',
                          qElemNo: 41,
                        },
                      ],
                    },
                  },
                  {
                    qText: '113540.72',
                    qNum: 113540.72000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '134180.64',
                    qNum: 134180.64,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Meridian',
                    qNum: 'NaN',
                    qElemNumber: 149,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Meridian',
                          qElemNo: 149,
                        },
                      ],
                    },
                  },
                  {
                    qText: '109693.72',
                    qNum: 109693.72,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '130842.55',
                    qNum: 130842.54999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Hillsboro',
                    qNum: 'NaN',
                    qElemNumber: 19,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Hillsboro',
                          qElemNo: 19,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '127374.38',
                    qNum: 127374.38000000006,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Yakama',
                    qNum: 'NaN',
                    qElemNumber: 157,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Yakama',
                          qElemNo: 157,
                        },
                      ],
                    },
                  },
                  {
                    qText: '115038.81',
                    qNum: 115038.81,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '115038.81',
                    qNum: 115038.81000000004,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Clackamas',
                    qNum: 'NaN',
                    qElemNumber: 43,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Clackamas',
                          qElemNo: 43,
                        },
                      ],
                    },
                  },
                  {
                    qText: '7853.23',
                    qNum: 7853.230000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '114046.37',
                    qNum: 114046.37000000004,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'MOLINE',
                    qNum: 'NaN',
                    qElemNumber: 56,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'MOLINE',
                          qElemNo: 56,
                        },
                      ],
                    },
                  },
                  {
                    qText: '115529.55',
                    qNum: 115529.54999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '113914.48',
                    qNum: 113914.47999999998,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Kent',
                    qNum: 'NaN',
                    qElemNumber: 40,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Kent',
                          qElemNo: 40,
                        },
                      ],
                    },
                  },
                  {
                    qText: '98424.43',
                    qNum: 98424.43000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '111075.64',
                    qNum: 111075.63999999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Wooster',
                    qNum: 'NaN',
                    qElemNumber: 117,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Wooster',
                          qElemNo: 117,
                        },
                      ],
                    },
                  },
                  {
                    qText: '11539.3',
                    qNum: 11539.3,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '103883.9',
                    qNum: 103883.89999999997,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Lake Hamilton',
                    qNum: 'NaN',
                    qElemNumber: 135,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Lake Hamilton',
                          qElemNo: 135,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '102407.59',
                    qNum: 102407.59000000004,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Pearl',
                    qNum: 'NaN',
                    qElemNumber: 6,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Pearl',
                          qElemNo: 6,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '100487.88',
                    qNum: 100487.88000000009,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Longview',
                    qNum: 'NaN',
                    qElemNumber: 125,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Longview',
                          qElemNo: 125,
                        },
                      ],
                    },
                  },
                  {
                    qText: '81.9',
                    qNum: 81.9,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '98666.83',
                    qNum: 98666.83000000012,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Oklahoma City',
                    qNum: 'NaN',
                    qElemNumber: 224,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Oklahoma City',
                          qElemNo: 224,
                        },
                      ],
                    },
                  },
                  {
                    qText: '93895.76',
                    qNum: 93895.76000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '97306.65',
                    qNum: 97306.65000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Chattanooga',
                    qNum: 'NaN',
                    qElemNumber: 20,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Chattanooga',
                          qElemNo: 20,
                        },
                      ],
                    },
                  },
                  {
                    qText: '37008.25',
                    qNum: 37008.25,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '94358.92',
                    qNum: 94358.91999999997,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Pittsburgh',
                    qNum: 'NaN',
                    qElemNumber: 240,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Pittsburgh',
                          qElemNo: 240,
                        },
                      ],
                    },
                  },
                  {
                    qText: '57309.75',
                    qNum: 57309.75,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '89686.42',
                    qNum: 89686.42000000003,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Columbia',
                    qNum: 'NaN',
                    qElemNumber: 87,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Columbia',
                          qElemNo: 87,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '89412.73',
                    qNum: 89412.72999999997,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Rapid City',
                    qNum: 'NaN',
                    qElemNumber: 100,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Rapid City',
                          qElemNo: 100,
                        },
                      ],
                    },
                  },
                  {
                    qText: '73958.36',
                    qNum: 73958.36,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '85433.07',
                    qNum: 85433.07,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Eugene',
                    qNum: 'NaN',
                    qElemNumber: 49,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Eugene',
                          qElemNo: 49,
                        },
                      ],
                    },
                  },
                  {
                    qText: '1799.58',
                    qNum: 1799.58,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '85227.29',
                    qNum: 85227.29,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'North Highlands',
                    qNum: 'NaN',
                    qElemNumber: 11,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'North Highlands',
                          qElemNo: 11,
                        },
                      ],
                    },
                  },
                  {
                    qText: '68722.22',
                    qNum: 68722.22,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '84960.66',
                    qNum: 84960.66000000003,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Elkhart',
                    qNum: 'NaN',
                    qElemNumber: 73,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Elkhart',
                          qElemNo: 73,
                        },
                      ],
                    },
                  },
                  {
                    qText: '12310.51',
                    qNum: 12310.509999999998,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '83512.39',
                    qNum: 83512.39000000007,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Houston',
                    qNum: 'NaN',
                    qElemNumber: 132,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Houston',
                          qElemNo: 132,
                        },
                      ],
                    },
                  },
                  {
                    qText: '28703.33',
                    qNum: 28703.33000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '83066.65',
                    qNum: 83066.65000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Lennox',
                    qNum: 'NaN',
                    qElemNumber: 222,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Lennox',
                          qElemNo: 222,
                        },
                      ],
                    },
                  },
                  {
                    qText: '65927.05',
                    qNum: 65927.05,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '79075.96',
                    qNum: 79075.95999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Pocahontas',
                    qNum: 'NaN',
                    qElemNumber: 217,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Pocahontas',
                          qElemNo: 217,
                        },
                      ],
                    },
                  },
                  {
                    qText: '78578.21',
                    qNum: 78578.20999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '78646.12',
                    qNum: 78646.11999999997,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Rancho Cordova',
                    qNum: 'NaN',
                    qElemNumber: 103,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Rancho Cordova',
                          qElemNo: 103,
                        },
                      ],
                    },
                  },
                  {
                    qText: '7971.24',
                    qNum: 7971.24,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '78120.41',
                    qNum: 78120.40999999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Medford',
                    qNum: 'NaN',
                    qElemNumber: 232,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Medford',
                          qElemNo: 232,
                        },
                      ],
                    },
                  },
                  {
                    qText: '77832.21',
                    qNum: 77832.21000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '77965.34',
                    qNum: 77965.34000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Joliet',
                    qNum: 'NaN',
                    qElemNumber: 166,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Joliet',
                          qElemNo: 166,
                        },
                      ],
                    },
                  },
                  {
                    qText: '72166.12',
                    qNum: 72166.12000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '76456',
                    qNum: 76455.99999999994,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Atlanta',
                    qNum: 'NaN',
                    qElemNumber: 45,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Atlanta',
                          qElemNo: 45,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '76197.75',
                    qNum: 76197.75,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'West Sayville',
                    qNum: 'NaN',
                    qElemNumber: 193,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'West Sayville',
                          qElemNo: 193,
                        },
                      ],
                    },
                  },
                  {
                    qText: '75650.03',
                    qNum: 75650.03,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '75650.03',
                    qNum: 75650.03000000003,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Baton Rouge',
                    qNum: 'NaN',
                    qElemNumber: 102,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Baton Rouge',
                          qElemNo: 102,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '74763.7',
                    qNum: 74763.70000000007,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Irving',
                    qNum: 'NaN',
                    qElemNumber: 201,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Irving',
                          qElemNo: 201,
                        },
                      ],
                    },
                  },
                  {
                    qText: '67795.94',
                    qNum: 67795.94000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '73994.62',
                    qNum: 73994.62000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Watervliet',
                    qNum: 'NaN',
                    qElemNumber: 44,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Watervliet',
                          qElemNo: 44,
                        },
                      ],
                    },
                  },
                  {
                    qText: '38213.37',
                    qNum: 38213.37,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '73243.75',
                    qNum: 73243.74999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Oslo',
                    qNum: 'NaN',
                    qElemNumber: 214,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Oslo',
                          qElemNo: 214,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '73225.16',
                    qNum: 73225.16,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Libby',
                    qNum: 'NaN',
                    qElemNumber: 9,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Libby',
                          qElemNo: 9,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '69512.97',
                    qNum: 69512.96999999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Milesburg',
                    qNum: 'NaN',
                    qElemNumber: 195,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Milesburg',
                          qElemNo: 195,
                        },
                      ],
                    },
                  },
                  {
                    qText: '65454',
                    qNum: 65454,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '66378.84',
                    qNum: 66378.84,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Cramerton',
                    qNum: 'NaN',
                    qElemNumber: 67,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Cramerton',
                          qElemNo: 67,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '66322.81',
                    qNum: 66322.81000000003,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Albany',
                    qNum: 'NaN',
                    qElemNumber: 258,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Albany',
                          qElemNo: 258,
                        },
                      ],
                    },
                  },
                  {
                    qText: '33361.25',
                    qNum: 33361.24999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '66004.3',
                    qNum: 66004.29999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Norcross',
                    qNum: 'NaN',
                    qElemNumber: 172,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Norcross',
                          qElemNo: 172,
                        },
                      ],
                    },
                  },
                  {
                    qText: '5429.95',
                    qNum: 5429.95,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '63525.51',
                    qNum: 63525.509999999995,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Cass City',
                    qNum: 'NaN',
                    qElemNumber: 174,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Cass City',
                          qElemNo: 174,
                        },
                      ],
                    },
                  },
                  {
                    qText: '1839.09',
                    qNum: 1839.0900000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '63149.5',
                    qNum: 63149.50000000004,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'El Paso',
                    qNum: 'NaN',
                    qElemNumber: 101,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'El Paso',
                          qElemNo: 101,
                        },
                      ],
                    },
                  },
                  {
                    qText: '9989.7',
                    qNum: 9989.699999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '62399.08',
                    qNum: 62399.07999999997,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Tigard',
                    qNum: 'NaN',
                    qElemNumber: 136,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Tigard',
                          qElemNo: 136,
                        },
                      ],
                    },
                  },
                  {
                    qText: '2810.28',
                    qNum: 2810.28,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '62304.74',
                    qNum: 62304.74000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Sun Prairie',
                    qNum: 'NaN',
                    qElemNumber: 254,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Sun Prairie',
                          qElemNo: 254,
                        },
                      ],
                    },
                  },
                  {
                    qText: '60070.85',
                    qNum: 60070.850000000006,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '60070.85',
                    qNum: 60070.84999999998,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Chicago',
                    qNum: 'NaN',
                    qElemNumber: 187,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Chicago',
                          qElemNo: 187,
                        },
                      ],
                    },
                  },
                  {
                    qText: '16471.32',
                    qNum: 16471.32,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '59606.89',
                    qNum: 59606.89000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Troy',
                    qNum: 'NaN',
                    qElemNumber: 77,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Troy',
                          qElemNo: 77,
                        },
                      ],
                    },
                  },
                  {
                    qText: '2487.45',
                    qNum: 2487.4500000000003,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '57680.69',
                    qNum: 57680.689999999995,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Hayward',
                    qNum: 'NaN',
                    qElemNumber: 167,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Hayward',
                          qElemNo: 167,
                        },
                      ],
                    },
                  },
                  {
                    qText: '43994.43',
                    qNum: 43994.43,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '57123.86',
                    qNum: 57123.85999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Savannah',
                    qNum: 'NaN',
                    qElemNumber: 121,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Savannah',
                          qElemNo: 121,
                        },
                      ],
                    },
                  },
                  {
                    qText: '21922.59',
                    qNum: 21922.59,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '55342.56',
                    qNum: 55342.56,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Nesquehoning',
                    qNum: 'NaN',
                    qElemNumber: 108,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Nesquehoning',
                          qElemNo: 108,
                        },
                      ],
                    },
                  },
                  {
                    qText: '6946.35',
                    qNum: 6946.349999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '52331.11',
                    qNum: 52331.11,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Billings',
                    qNum: 'NaN',
                    qElemNumber: 42,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Billings',
                          qElemNo: 42,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '52313.29',
                    qNum: 52313.28999999997,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Lewiston',
                    qNum: 'NaN',
                    qElemNumber: 168,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Lewiston',
                          qElemNo: 168,
                        },
                      ],
                    },
                  },
                  {
                    qText: '40691.43',
                    qNum: 40691.43000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '51516.36',
                    qNum: 51516.35999999995,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Springfield',
                    qNum: 'NaN',
                    qElemNumber: 113,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Springfield',
                          qElemNo: 113,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '51429.14',
                    qNum: 51429.14000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Waterville',
                    qNum: 'NaN',
                    qElemNumber: 225,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Waterville',
                          qElemNo: 225,
                        },
                      ],
                    },
                  },
                  {
                    qText: '44800.41',
                    qNum: 44800.41,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '51337.69',
                    qNum: 51337.690000000024,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Johnson City',
                    qNum: 'NaN',
                    qElemNumber: 105,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Johnson City',
                          qElemNo: 105,
                        },
                      ],
                    },
                  },
                  {
                    qText: '3686.21',
                    qNum: 3686.21,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '50996.25',
                    qNum: 50996.250000000015,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Bedford',
                    qNum: 'NaN',
                    qElemNumber: 109,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Bedford',
                          qElemNo: 109,
                        },
                      ],
                    },
                  },
                  {
                    qText: '29078.77',
                    qNum: 29078.769999999993,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '50140.8',
                    qNum: 50140.80000000005,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Evansville',
                    qNum: 'NaN',
                    qElemNumber: 161,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Evansville',
                          qElemNo: 161,
                        },
                      ],
                    },
                  },
                  {
                    qText: '30064.54',
                    qNum: 30064.539999999994,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '49756.68',
                    qNum: 49756.68,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Corona',
                    qNum: 'NaN',
                    qElemNumber: 64,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Corona',
                          qElemNo: 64,
                        },
                      ],
                    },
                  },
                  {
                    qText: '3620.46',
                    qNum: 3620.46,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '49222.52',
                    qNum: 49222.51999999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Depere',
                    qNum: 'NaN',
                    qElemNumber: 76,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Depere',
                          qElemNo: 76,
                        },
                      ],
                    },
                  },
                  {
                    qText: '10747.73',
                    qNum: 10747.73,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '46782.27',
                    qNum: 46782.270000000004,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Springhill',
                    qNum: 'NaN',
                    qElemNumber: 227,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Springhill',
                          qElemNo: 227,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '43495.53',
                    qNum: 43495.530000000006,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Framingham',
                    qNum: 'NaN',
                    qElemNumber: 247,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Framingham',
                          qElemNo: 247,
                        },
                      ],
                    },
                  },
                  {
                    qText: '42845.77',
                    qNum: 42845.77,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '42845.77',
                    qNum: 42845.770000000004,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Shreveport',
                    qNum: 'NaN',
                    qElemNumber: 18,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Shreveport',
                          qElemNo: 18,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '42603.89',
                    qNum: 42603.89,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Spring',
                    qNum: 'NaN',
                    qElemNumber: 192,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Spring',
                          qElemNo: 192,
                        },
                      ],
                    },
                  },
                  {
                    qText: '42178.8',
                    qNum: 42178.799999999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '42271.75',
                    qNum: 42271.75,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Ft Collins',
                    qNum: 'NaN',
                    qElemNumber: 58,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Ft Collins',
                          qElemNo: 58,
                        },
                      ],
                    },
                  },
                  {
                    qText: '31036.57',
                    qNum: 31036.57,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '40189.5',
                    qNum: 40189.49999999998,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Amarillo',
                    qNum: 'NaN',
                    qElemNumber: 120,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Amarillo',
                          qElemNo: 120,
                        },
                      ],
                    },
                  },
                  {
                    qText: '188.92',
                    qNum: 188.92000000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '39739.84',
                    qNum: 39739.83999999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Warren',
                    qNum: 'NaN',
                    qElemNumber: 90,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Warren',
                          qElemNo: 90,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '39719.95',
                    qNum: 39719.95000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Augusta',
                    qNum: 'NaN',
                    qElemNumber: 146,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Augusta',
                          qElemNo: 146,
                        },
                      ],
                    },
                  },
                  {
                    qText: '38120.57',
                    qNum: 38120.56999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '38262.16',
                    qNum: 38262.159999999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Hammond',
                    qNum: 'NaN',
                    qElemNumber: 128,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Hammond',
                          qElemNo: 128,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '37340.02',
                    qNum: 37340.01999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Ormond Beach',
                    qNum: 'NaN',
                    qElemNumber: 185,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Ormond Beach',
                          qElemNo: 185,
                        },
                      ],
                    },
                  },
                  {
                    qText: '1258.21',
                    qNum: 1258.21,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '37199.3',
                    qNum: 37199.29999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Shawano',
                    qNum: 'NaN',
                    qElemNumber: 205,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Shawano',
                          qElemNo: 205,
                        },
                      ],
                    },
                  },
                  {
                    qText: '15627.81',
                    qNum: 15627.810000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '37166.88',
                    qNum: 37166.87999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Pontiac',
                    qNum: 'NaN',
                    qElemNumber: 61,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Pontiac',
                          qElemNo: 61,
                        },
                      ],
                    },
                  },
                  {
                    qText: '11825.08',
                    qNum: 11825.079999999998,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '32778.34',
                    qNum: 32778.34000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Villa Rica',
                    qNum: 'NaN',
                    qElemNumber: 133,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Villa Rica',
                          qElemNo: 133,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '32510.88',
                    qNum: 32510.880000000005,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'El Cajon',
                    qNum: 'NaN',
                    qElemNumber: 256,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'El Cajon',
                          qElemNo: 256,
                        },
                      ],
                    },
                  },
                  {
                    qText: '22397.68',
                    qNum: 22397.68,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '32379.18',
                    qNum: 32379.179999999986,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Ocala',
                    qNum: 'NaN',
                    qElemNumber: 183,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Ocala',
                          qElemNo: 183,
                        },
                      ],
                    },
                  },
                  {
                    qText: '13543.38',
                    qNum: 13543.380000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '32328.9',
                    qNum: 32328.9,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Missoula',
                    qNum: 'NaN',
                    qElemNumber: 94,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Missoula',
                          qElemNo: 94,
                        },
                      ],
                    },
                  },
                  {
                    qText: '14893.21',
                    qNum: 14893.21,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '31590.76',
                    qNum: 31590.760000000013,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Modesto',
                    qNum: 'NaN',
                    qElemNumber: 92,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Modesto',
                          qElemNo: 92,
                        },
                      ],
                    },
                  },
                  {
                    qText: '29870.65',
                    qNum: 29870.65,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '30575.93',
                    qNum: 30575.930000000004,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Traverse City',
                    qNum: 'NaN',
                    qElemNumber: 155,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Traverse City',
                          qElemNo: 155,
                        },
                      ],
                    },
                  },
                  {
                    qText: '2626.43',
                    qNum: 2626.4300000000003,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '28563.59',
                    qNum: 28563.590000000007,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Milton',
                    qNum: 'NaN',
                    qElemNumber: 137,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Milton',
                          qElemNo: 137,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '27063.06',
                    qNum: 27063.05999999998,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Wheatridge',
                    qNum: 'NaN',
                    qElemNumber: 127,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Wheatridge',
                          qElemNo: 127,
                        },
                      ],
                    },
                  },
                  {
                    qText: '26362.19',
                    qNum: 26362.19,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '26881.48',
                    qNum: 26881.47999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'St Joseph',
                    qNum: 'NaN',
                    qElemNumber: 199,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'St Joseph',
                          qElemNo: 199,
                        },
                      ],
                    },
                  },
                  {
                    qText: '10423.16',
                    qNum: 10423.16,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '25604.11',
                    qNum: 25604.11,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Rexburg',
                    qNum: 'NaN',
                    qElemNumber: 158,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Rexburg',
                          qElemNo: 158,
                        },
                      ],
                    },
                  },
                  {
                    qText: '8983.12',
                    qNum: 8983.12,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '25159.1',
                    qNum: 25159.100000000006,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Okarche',
                    qNum: 'NaN',
                    qElemNumber: 249,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Okarche',
                          qElemNo: 249,
                        },
                      ],
                    },
                  },
                  {
                    qText: '22134.18',
                    qNum: 22134.18,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '23398.84',
                    qNum: 23398.840000000007,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Colorado Springs',
                    qNum: 'NaN',
                    qElemNumber: 99,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Colorado Springs',
                          qElemNo: 99,
                        },
                      ],
                    },
                  },
                  {
                    qText: '19319.17',
                    qNum: 19319.170000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '23244.64',
                    qNum: 23244.63999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Fresno',
                    qNum: 'NaN',
                    qElemNumber: 213,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Fresno',
                          qElemNo: 213,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '22909.17',
                    qNum: 22909.170000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Stewartsville',
                    qNum: 'NaN',
                    qElemNumber: 202,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Stewartsville',
                          qElemNo: 202,
                        },
                      ],
                    },
                  },
                  {
                    qText: '4445.36',
                    qNum: 4445.36,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '22820.61',
                    qNum: 22820.610000000004,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Frederick',
                    qNum: 'NaN',
                    qElemNumber: 191,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Frederick',
                          qElemNo: 191,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '22638.11',
                    qNum: 22638.11,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Creedmoor',
                    qNum: 'NaN',
                    qElemNumber: 123,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Creedmoor',
                          qElemNo: 123,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '22558.36',
                    qNum: 22558.36,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Lansing',
                    qNum: 'NaN',
                    qElemNumber: 164,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Lansing',
                          qElemNo: 164,
                        },
                      ],
                    },
                  },
                  {
                    qText: '22440.37',
                    qNum: 22440.37,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '22499.31',
                    qNum: 22499.310000000012,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Bensonville',
                    qNum: 'NaN',
                    qElemNumber: 138,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Bensonville',
                          qElemNo: 138,
                        },
                      ],
                    },
                  },
                  {
                    qText: '22301.23',
                    qNum: 22301.229999999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '22435.03',
                    qNum: 22435.02999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Buffalo',
                    qNum: 'NaN',
                    qElemNumber: 175,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Buffalo',
                          qElemNo: 175,
                        },
                      ],
                    },
                  },
                  {
                    qText: '936.66',
                    qNum: 936.66,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '22426.16',
                    qNum: 22426.16,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Holden',
                    qNum: 'NaN',
                    qElemNumber: 134,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Holden',
                          qElemNo: 134,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '22377.98',
                    qNum: 22377.979999999992,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Eau Claire',
                    qNum: 'NaN',
                    qElemNumber: 208,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Eau Claire',
                          qElemNo: 208,
                        },
                      ],
                    },
                  },
                  {
                    qText: '10706.41',
                    qNum: 10706.41,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '22365.42',
                    qNum: 22365.42,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Nashville',
                    qNum: 'NaN',
                    qElemNumber: 226,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Nashville',
                          qElemNo: 226,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '21942.66',
                    qNum: 21942.66,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Pine Bluff',
                    qNum: 'NaN',
                    qElemNumber: 65,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Pine Bluff',
                          qElemNo: 65,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '21687.44',
                    qNum: 21687.439999999995,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Tulare',
                    qNum: 'NaN',
                    qElemNumber: 251,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Tulare',
                          qElemNo: 251,
                        },
                      ],
                    },
                  },
                  {
                    qText: '21335.44',
                    qNum: 21335.44,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '21335.44',
                    qNum: 21335.440000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Mechanicsburg',
                    qNum: 'NaN',
                    qElemNumber: 171,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Mechanicsburg',
                          qElemNo: 171,
                        },
                      ],
                    },
                  },
                  {
                    qText: '15212.25',
                    qNum: 15212.25,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '20386.99',
                    qNum: 20386.989999999987,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Attica',
                    qNum: 'NaN',
                    qElemNumber: 173,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Attica',
                          qElemNo: 173,
                        },
                      ],
                    },
                  },
                  {
                    qText: '20114.12',
                    qNum: 20114.120000000003,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '20114.12',
                    qNum: 20114.12,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'North Hampton',
                    qNum: 'NaN',
                    qElemNumber: 221,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'North Hampton',
                          qElemNo: 221,
                        },
                      ],
                    },
                  },
                  {
                    qText: '18815.87',
                    qNum: 18815.870000000003,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '18815.87',
                    qNum: 18815.86999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'West Point',
                    qNum: 'NaN',
                    qElemNumber: 203,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'West Point',
                          qElemNo: 203,
                        },
                      ],
                    },
                  },
                  {
                    qText: '15636.36',
                    qNum: 15636.36,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '18636.56',
                    qNum: 18636.559999999998,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Richmond',
                    qNum: 'NaN',
                    qElemNumber: 163,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Richmond',
                          qElemNo: 163,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '17717.73',
                    qNum: 17717.729999999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Huntington Beach',
                    qNum: 'NaN',
                    qElemNumber: 178,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Huntington Beach',
                          qElemNo: 178,
                        },
                      ],
                    },
                  },
                  {
                    qText: '72.94',
                    qNum: 72.94,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '16468.73',
                    qNum: 16468.729999999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Des Moines',
                    qNum: 'NaN',
                    qElemNumber: 236,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Des Moines',
                          qElemNo: 236,
                        },
                      ],
                    },
                  },
                  {
                    qText: '10850.3',
                    qNum: 10850.300000000003,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '15834.1',
                    qNum: 15834.100000000006,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Glen Burnie',
                    qNum: 'NaN',
                    qElemNumber: 244,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Glen Burnie',
                          qElemNo: 244,
                        },
                      ],
                    },
                  },
                  {
                    qText: '15817.24',
                    qNum: 15817.240000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '15817.24',
                    qNum: 15817.239999999994,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Monroe',
                    qNum: 'NaN',
                    qElemNumber: 150,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Monroe',
                          qElemNo: 150,
                        },
                      ],
                    },
                  },
                  {
                    qText: '63.94',
                    qNum: 63.940000000000005,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '15640.42',
                    qNum: 15640.42,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Oakland',
                    qNum: 'NaN',
                    qElemNumber: 116,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Oakland',
                          qElemNo: 116,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '14295.62',
                    qNum: 14295.62,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Whitehouse',
                    qNum: 'NaN',
                    qElemNumber: 33,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Whitehouse',
                          qElemNo: 33,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '14109.47',
                    qNum: 14109.469999999998,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'St Louis',
                    qNum: 'NaN',
                    qElemNumber: 215,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'St Louis',
                          qElemNo: 215,
                        },
                      ],
                    },
                  },
                  {
                    qText: '14070.27',
                    qNum: 14070.27,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '14074.16',
                    qNum: 14074.16,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Bozeman',
                    qNum: 'NaN',
                    qElemNumber: 181,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Bozeman',
                          qElemNo: 181,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '13316.53',
                    qNum: 13316.53,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Beaumont',
                    qNum: 'NaN',
                    qElemNumber: 261,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Beaumont',
                          qElemNo: 261,
                        },
                      ],
                    },
                  },
                  {
                    qText: '4636.31',
                    qNum: 4636.3099999999995,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '12794.2',
                    qNum: 12794.199999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Cincinnati',
                    qNum: 'NaN',
                    qElemNumber: 130,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Cincinnati',
                          qElemNo: 130,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '11877.35',
                    qNum: 11877.35,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Stockton',
                    qNum: 'NaN',
                    qElemNumber: 153,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Stockton',
                          qElemNo: 153,
                        },
                      ],
                    },
                  },
                  {
                    qText: '1290.55',
                    qNum: 1290.55,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '11764.19',
                    qNum: 11764.19,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Wayne',
                    qNum: 'NaN',
                    qElemNumber: 104,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Wayne',
                          qElemNo: 104,
                        },
                      ],
                    },
                  },
                  {
                    qText: '11293.76',
                    qNum: 11293.760000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '11293.76',
                    qNum: 11293.760000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Vinton',
                    qNum: 'NaN',
                    qElemNumber: 147,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Vinton',
                          qElemNo: 147,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '11096.46',
                    qNum: 11096.460000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Brookhaven',
                    qNum: 'NaN',
                    qElemNumber: 253,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Brookhaven',
                          qElemNo: 253,
                        },
                      ],
                    },
                  },
                  {
                    qText: '1228.56',
                    qNum: 1228.56,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '10986.66',
                    qNum: 10986.66,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Waldorf',
                    qNum: 'NaN',
                    qElemNumber: 209,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Waldorf',
                          qElemNo: 209,
                        },
                      ],
                    },
                  },
                  {
                    qText: '10849.97',
                    qNum: 10849.970000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '10849.97',
                    qNum: 10849.970000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Middlebury',
                    qNum: 'NaN',
                    qElemNumber: 266,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Middlebury',
                          qElemNo: 266,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '10684.23',
                    qNum: 10684.23,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Chippewa Falls',
                    qNum: 'NaN',
                    qElemNumber: 169,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Chippewa Falls',
                          qElemNo: 169,
                        },
                      ],
                    },
                  },
                  {
                    qText: '9312.48',
                    qNum: 9312.480000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '10281.3',
                    qNum: 10281.299999999996,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Montgomery',
                    qNum: 'NaN',
                    qElemNumber: 204,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Montgomery',
                          qElemNo: 204,
                        },
                      ],
                    },
                  },
                  {
                    qText: '1469.37',
                    qNum: 1469.3700000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '9967.17',
                    qNum: 9967.17,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Salem',
                    qNum: 'NaN',
                    qElemNumber: 97,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Salem',
                          qElemNo: 97,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '9708.34',
                    qNum: 9708.34,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Andover',
                    qNum: 'NaN',
                    qElemNumber: 111,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Andover',
                          qElemNo: 111,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '9364.57',
                    qNum: 9364.570000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Moline',
                    qNum: 'NaN',
                    qElemNumber: 114,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Moline',
                          qElemNo: 114,
                        },
                      ],
                    },
                  },
                  {
                    qText: '9255.27',
                    qNum: 9255.27,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '9263.05',
                    qNum: 9263.049999999997,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Aurora',
                    qNum: 'NaN',
                    qElemNumber: 194,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Aurora',
                          qElemNo: 194,
                        },
                      ],
                    },
                  },
                  {
                    qText: '4642.22',
                    qNum: 4642.219999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '9159.07',
                    qNum: 9159.07,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Shelby',
                    qNum: 'NaN',
                    qElemNumber: 260,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Shelby',
                          qElemNo: 260,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '9097.17',
                    qNum: 9097.17,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Garner',
                    qNum: 'NaN',
                    qElemNumber: 216,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Garner',
                          qElemNo: 216,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '8442.4',
                    qNum: 8442.399999999998,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Gardena',
                    qNum: 'NaN',
                    qElemNumber: 180,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Gardena',
                          qElemNo: 180,
                        },
                      ],
                    },
                  },
                  {
                    qText: '3206.25',
                    qNum: 3206.25,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '7665.12',
                    qNum: 7665.120000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Okolona',
                    qNum: 'NaN',
                    qElemNumber: 229,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Okolona',
                          qElemNo: 229,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '7531.44',
                    qNum: 7531.439999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'St. Cloud',
                    qNum: 'NaN',
                    qElemNumber: 245,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'St. Cloud',
                          qElemNo: 245,
                        },
                      ],
                    },
                  },
                  {
                    qText: '6872.37',
                    qNum: 6872.37,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '6640.2',
                    qNum: 6640.199999999995,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Somerset',
                    qNum: 'NaN',
                    qElemNumber: 223,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Somerset',
                          qElemNo: 223,
                        },
                      ],
                    },
                  },
                  {
                    qText: '2379.7',
                    qNum: 2379.7,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '6628.08',
                    qNum: 6628.080000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Indianapolis',
                    qNum: 'NaN',
                    qElemNumber: 188,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Indianapolis',
                          qElemNo: 188,
                        },
                      ],
                    },
                  },
                  {
                    qText: '1538.45',
                    qNum: 1538.45,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '6360.4',
                    qNum: 6360.4,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Enumclaw',
                    qNum: 'NaN',
                    qElemNumber: 219,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Enumclaw',
                          qElemNo: 219,
                        },
                      ],
                    },
                  },
                  {
                    qText: '6121.4',
                    qNum: 6121.400000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '6158.95',
                    qNum: 6158.950000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Valparaiso',
                    qNum: 'NaN',
                    qElemNumber: 190,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Valparaiso',
                          qElemNo: 190,
                        },
                      ],
                    },
                  },
                  {
                    qText: '5841.5',
                    qNum: 5841.5,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '5841.5',
                    qNum: 5841.5,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'New Hampton',
                    qNum: 'NaN',
                    qElemNumber: 8,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'New Hampton',
                          qElemNo: 8,
                        },
                      ],
                    },
                  },
                  {
                    qText: '1581.08',
                    qNum: 1581.08,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '5739.45',
                    qNum: 5739.450000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Laurel',
                    qNum: 'NaN',
                    qElemNumber: 189,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Laurel',
                          qElemNo: 189,
                        },
                      ],
                    },
                  },
                  {
                    qText: '4689.98',
                    qNum: 4689.9800000000005,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '5039.63',
                    qNum: 5039.629999999999,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Manassas',
                    qNum: 'NaN',
                    qElemNumber: 37,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Manassas',
                          qElemNo: 37,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '4827.56',
                    qNum: 4827.56,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Benicia',
                    qNum: 'NaN',
                    qElemNumber: 89,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Benicia',
                          qElemNo: 89,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '4618.44',
                    qNum: 4618.4400000000005,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Brea',
                    qNum: 'NaN',
                    qElemNumber: 82,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Brea',
                          qElemNo: 82,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '4291.71',
                    qNum: 4291.71,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Raleigh',
                    qNum: 'NaN',
                    qElemNumber: 259,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Raleigh',
                          qElemNo: 259,
                        },
                      ],
                    },
                  },
                  {
                    qText: '2584.73',
                    qNum: 2584.73,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '3197.54',
                    qNum: 3197.54,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Mechanicsville',
                    qNum: 'NaN',
                    qElemNumber: 197,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Mechanicsville',
                          qElemNo: 197,
                        },
                      ],
                    },
                  },
                  {
                    qText: '2250.49',
                    qNum: 2250.49,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '2955.57',
                    qNum: 2955.5699999999997,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Trinity Center',
                    qNum: 'NaN',
                    qElemNumber: 200,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Trinity Center',
                          qElemNo: 200,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '2436.77',
                    qNum: 2436.77,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Buda',
                    qNum: 'NaN',
                    qElemNumber: 255,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Buda',
                          qElemNo: 255,
                        },
                      ],
                    },
                  },
                  {
                    qText: '73.06',
                    qNum: 73.06,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '2237.81',
                    qNum: 2237.81,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Greenville',
                    qNum: 'NaN',
                    qElemNumber: 263,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Greenville',
                          qElemNo: 263,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1824.03',
                    qNum: 1824.03,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Hazelwood',
                    qNum: 'NaN',
                    qElemNumber: 269,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Hazelwood',
                          qElemNo: 269,
                        },
                      ],
                    },
                  },
                  {
                    qText: '-849.12',
                    qNum: -849.12,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1603',
                    qNum: 1603,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Orlando',
                    qNum: 'NaN',
                    qElemNumber: 270,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Orlando',
                          qElemNo: 270,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1538.4',
                    qNum: 1538.4,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Shady Grove',
                    qNum: 'NaN',
                    qElemNumber: 115,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Shady Grove',
                          qElemNo: 115,
                        },
                      ],
                    },
                  },
                  {
                    qText: '606.37',
                    qNum: 606.37,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1520.65',
                    qNum: 1520.65,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Casper',
                    qNum: 'NaN',
                    qElemNumber: 140,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Casper',
                          qElemNo: 140,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1489.31',
                    qNum: 1489.31,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Placentia',
                    qNum: 'NaN',
                    qElemNumber: 139,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Placentia',
                          qElemNo: 139,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1322.27',
                    qNum: 1322.2700000000002,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Ooltewah',
                    qNum: 'NaN',
                    qElemNumber: 264,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Ooltewah',
                          qElemNo: 264,
                        },
                      ],
                    },
                  },
                  {
                    qText: '70.91',
                    qNum: 70.91,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1255.32',
                    qNum: 1255.32,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Gretna',
                    qNum: 'NaN',
                    qElemNumber: 230,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Gretna',
                          qElemNo: 230,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1114.23',
                    qNum: 1114.23,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Indianopolis',
                    qNum: 'NaN',
                    qElemNumber: 95,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Indianopolis',
                          qElemNo: 95,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '1108.98',
                    qNum: 1108.98,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Breckenridge',
                    qNum: 'NaN',
                    qElemNumber: 63,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Breckenridge',
                          qElemNo: 63,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '696.31',
                    qNum: 696.31,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Crestwood',
                    qNum: 'NaN',
                    qElemNumber: 220,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Crestwood',
                          qElemNo: 220,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '498.5',
                    qNum: 498.5,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Columbus',
                    qNum: 'NaN',
                    qElemNumber: 57,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Columbus',
                          qElemNo: 57,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '227.13',
                    qNum: 227.13,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Hermitage',
                    qNum: 'NaN',
                    qElemNumber: 231,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Hermitage',
                          qElemNo: 231,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '193.89',
                    qNum: 193.89000000000001,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Akron',
                    qNum: 'NaN',
                    qElemNumber: 265,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Akron',
                          qElemNo: 265,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '178.71',
                    qNum: 178.71,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Duluth',
                    qNum: 'NaN',
                    qElemNumber: 85,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Duluth',
                          qElemNo: 85,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '106.36',
                    qNum: 106.36,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Redding',
                    qNum: 'NaN',
                    qElemNumber: 237,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Redding',
                          qElemNo: 237,
                        },
                      ],
                    },
                  },
                  {
                    qText: '32.47',
                    qNum: 32.47,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '32.47',
                    qNum: 32.47,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Philadelphia',
                    qNum: 'NaN',
                    qElemNumber: 156,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Philadelphia',
                          qElemNo: 156,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '27.66',
                    qNum: 27.66,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Alexandria',
                    qNum: 'NaN',
                    qElemNumber: 162,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Alexandria',
                          qElemNo: 162,
                        },
                      ],
                    },
                  },
                  {
                    qText: '8.11',
                    qNum: 8.11,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                  {
                    qText: '8.11',
                    qNum: 8.11,
                    qElemNumber: 0,
                    qState: 'L',
                  },
                ],
                [
                  {
                    qText: 'Bremorton',
                    qNum: 'NaN',
                    qElemNumber: 267,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Bremorton',
                          qElemNo: 267,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
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
                [
                  {
                    qText: 'Burnsville',
                    qNum: 'NaN',
                    qElemNumber: 262,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Burnsville',
                          qElemNo: 262,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
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
                [
                  {
                    qText: 'Farmington',
                    qNum: 'NaN',
                    qElemNumber: 176,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Farmington',
                          qElemNo: 176,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
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
                [
                  {
                    qText: 'Fort Collins',
                    qNum: 'NaN',
                    qElemNumber: 88,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Fort Collins',
                          qElemNo: 88,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
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
                [
                  {
                    qText: 'Fredericksburg',
                    qNum: 'NaN',
                    qElemNumber: 233,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Fredericksburg',
                          qElemNo: 233,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
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
                [
                  {
                    qText: 'Ham Lake',
                    qNum: 'NaN',
                    qElemNumber: 257,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Ham Lake',
                          qElemNo: 257,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
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
                [
                  {
                    qText: 'Hodgdon',
                    qNum: 'NaN',
                    qElemNumber: 182,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Hodgdon',
                          qElemNo: 182,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
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
                [
                  {
                    qText: 'Morgantown',
                    qNum: 'NaN',
                    qElemNumber: 268,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Morgantown',
                          qElemNo: 268,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
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
                [
                  {
                    qText: 'Newport',
                    qNum: 'NaN',
                    qElemNumber: 211,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Newport',
                          qElemNo: 211,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
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
                [
                  {
                    qText: 'Oak Ridge',
                    qNum: 'NaN',
                    qElemNumber: 160,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Oak Ridge',
                          qElemNo: 160,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
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
                [
                  {
                    qText: 'San Antonio',
                    qNum: 'NaN',
                    qElemNumber: 141,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'San Antonio',
                          qElemNo: 141,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
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
                [
                  {
                    qText: 'Tonawanda',
                    qNum: 'NaN',
                    qElemNumber: 212,
                    qState: 'O',
                    qAttrDims: {
                      qValues: [
                        {
                          qText: 'Tonawanda',
                          qElemNo: 212,
                        },
                      ],
                    },
                  },
                  {
                    qText: '0',
                    qNum: 0,
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
                qHeight: 271,
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
        compressionResolution: 7,
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
          altLabel: '01b5a405-2125-49e7-85ff-fe29d7736910',
          byDimDef: {
            label: '01b5a405-2125-49e7-85ff-fe29d7736910',
            key: '01b5a405-2125-49e7-85ff-fe29d7736910',
            type: 'libraryItem',
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
        snapshotData: {
          object: {
            size: {
              w: 918,
              h: 577,
            },
          },
          rtl: false,
          content: {
            size: {
              w: 917.6000366210938,
              h: 576.6000366210938,
            },
            chartData: {
              xAxisMin: 203091.9335540299,
              xAxisMax: 556645.3241473034,
              yAxisMin: 295587.0807866241,
              yAxisMax: 737528.8190282157,
              legendScrollOffset: 0,
              legendDataPage: [
                {
                  qMatrix: [
                    [
                      {
                        qText: 'Akron',
                        qNum: 'NaN',
                        qElemNumber: 265,
                        qState: 'O',
                      },
                      {
                        qText: '265',
                        qNum: 265,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Albany',
                        qNum: 'NaN',
                        qElemNumber: 258,
                        qState: 'O',
                      },
                      {
                        qText: '258',
                        qNum: 258,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Alexandria',
                        qNum: 'NaN',
                        qElemNumber: 162,
                        qState: 'O',
                      },
                      {
                        qText: '162',
                        qNum: 162,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Amarillo',
                        qNum: 'NaN',
                        qElemNumber: 120,
                        qState: 'O',
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
                        qText: 'Anchorage',
                        qNum: 'NaN',
                        qElemNumber: 7,
                        qState: 'O',
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
                        qText: 'Andover',
                        qNum: 'NaN',
                        qElemNumber: 111,
                        qState: 'O',
                      },
                      {
                        qText: '111',
                        qNum: 111,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Appleton',
                        qNum: 'NaN',
                        qElemNumber: 17,
                        qState: 'O',
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
                        qText: 'Atlanta',
                        qNum: 'NaN',
                        qElemNumber: 45,
                        qState: 'O',
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
                        qText: 'Attica',
                        qNum: 'NaN',
                        qElemNumber: 173,
                        qState: 'O',
                      },
                      {
                        qText: '173',
                        qNum: 173,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Auburn',
                        qNum: 'NaN',
                        qElemNumber: 35,
                        qState: 'O',
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
                        qText: 'Augusta',
                        qNum: 'NaN',
                        qElemNumber: 146,
                        qState: 'O',
                      },
                      {
                        qText: '146',
                        qNum: 146,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Aurora',
                        qNum: 'NaN',
                        qElemNumber: 194,
                        qState: 'O',
                      },
                      {
                        qText: '194',
                        qNum: 194,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Baton Rouge',
                        qNum: 'NaN',
                        qElemNumber: 102,
                        qState: 'O',
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
                        qText: 'Beaumont',
                        qNum: 'NaN',
                        qElemNumber: 261,
                        qState: 'O',
                      },
                      {
                        qText: '261',
                        qNum: 261,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Beaverton',
                        qNum: 'NaN',
                        qElemNumber: 60,
                        qState: 'O',
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
                        qText: 'Bedford',
                        qNum: 'NaN',
                        qElemNumber: 109,
                        qState: 'O',
                      },
                      {
                        qText: '109',
                        qNum: 109,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Bedford Hills',
                        qNum: 'NaN',
                        qElemNumber: 235,
                        qState: 'O',
                      },
                      {
                        qText: '235',
                        qNum: 235,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Benicia',
                        qNum: 'NaN',
                        qElemNumber: 89,
                        qState: 'O',
                      },
                      {
                        qText: '89',
                        qNum: 89,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Bensonville',
                        qNum: 'NaN',
                        qElemNumber: 138,
                        qState: 'O',
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
                        qText: 'Billings',
                        qNum: 'NaN',
                        qElemNumber: 42,
                        qState: 'O',
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
                        qText: 'Birmingham',
                        qNum: 'NaN',
                        qElemNumber: 110,
                        qState: 'O',
                      },
                      {
                        qText: '110',
                        qNum: 110,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Boise',
                        qNum: 'NaN',
                        qElemNumber: 72,
                        qState: 'O',
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
                        qText: 'Bozeman',
                        qNum: 'NaN',
                        qElemNumber: 181,
                        qState: 'O',
                      },
                      {
                        qText: '181',
                        qNum: 181,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Brea',
                        qNum: 'NaN',
                        qElemNumber: 82,
                        qState: 'O',
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
                        qText: 'Breckenridge',
                        qNum: 'NaN',
                        qElemNumber: 63,
                        qState: 'O',
                      },
                      {
                        qText: '63',
                        qNum: 63,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Bremorton',
                        qNum: 'NaN',
                        qElemNumber: 267,
                        qState: 'O',
                      },
                      {
                        qText: '267',
                        qNum: 267,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Brookfield',
                        qNum: 'NaN',
                        qElemNumber: 170,
                        qState: 'O',
                      },
                      {
                        qText: '170',
                        qNum: 170,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Brookhaven',
                        qNum: 'NaN',
                        qElemNumber: 253,
                        qState: 'O',
                      },
                      {
                        qText: '253',
                        qNum: 253,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Brownsville',
                        qNum: 'NaN',
                        qElemNumber: 252,
                        qState: 'O',
                      },
                      {
                        qText: '252',
                        qNum: 252,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Buda',
                        qNum: 'NaN',
                        qElemNumber: 255,
                        qState: 'O',
                      },
                      {
                        qText: '255',
                        qNum: 255,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Buffalo',
                        qNum: 'NaN',
                        qElemNumber: 175,
                        qState: 'O',
                      },
                      {
                        qText: '175',
                        qNum: 175,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Buffdale',
                        qNum: 'NaN',
                        qElemNumber: 186,
                        qState: 'O',
                      },
                      {
                        qText: '186',
                        qNum: 186,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Burnsville',
                        qNum: 'NaN',
                        qElemNumber: 262,
                        qState: 'O',
                      },
                      {
                        qText: '262',
                        qNum: 262,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Calhoun',
                        qNum: 'NaN',
                        qElemNumber: 30,
                        qState: 'O',
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
                        qText: 'Canton',
                        qNum: 'NaN',
                        qElemNumber: 119,
                        qState: 'O',
                      },
                      {
                        qText: '119',
                        qNum: 119,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Cape Girardeau',
                        qNum: 'NaN',
                        qElemNumber: 46,
                        qState: 'O',
                      },
                      {
                        qText: '46',
                        qNum: 46,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Casper',
                        qNum: 'NaN',
                        qElemNumber: 140,
                        qState: 'O',
                      },
                      {
                        qText: '140',
                        qNum: 140,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Cass City',
                        qNum: 'NaN',
                        qElemNumber: 174,
                        qState: 'O',
                      },
                      {
                        qText: '174',
                        qNum: 174,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Charlotte',
                        qNum: 'NaN',
                        qElemNumber: 124,
                        qState: 'O',
                      },
                      {
                        qText: '124',
                        qNum: 124,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Chattanooga',
                        qNum: 'NaN',
                        qElemNumber: 20,
                        qState: 'O',
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
                        qText: 'Chicago',
                        qNum: 'NaN',
                        qElemNumber: 187,
                        qState: 'O',
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
                        qText: 'Chippewa Falls',
                        qNum: 'NaN',
                        qElemNumber: 169,
                        qState: 'O',
                      },
                      {
                        qText: '169',
                        qNum: 169,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Cincinnati',
                        qNum: 'NaN',
                        qElemNumber: 130,
                        qState: 'O',
                      },
                      {
                        qText: '130',
                        qNum: 130,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Clackamas',
                        qNum: 'NaN',
                        qElemNumber: 43,
                        qState: 'O',
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
                        qText: 'Clemson',
                        qNum: 'NaN',
                        qElemNumber: 23,
                        qState: 'O',
                      },
                      {
                        qText: '23',
                        qNum: 23,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Cleveland',
                        qNum: 'NaN',
                        qElemNumber: 106,
                        qState: 'O',
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
                        qText: 'Coldwater',
                        qNum: 'NaN',
                        qElemNumber: 38,
                        qState: 'O',
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
                        qText: 'Colorado Springs',
                        qNum: 'NaN',
                        qElemNumber: 99,
                        qState: 'O',
                      },
                      {
                        qText: '99',
                        qNum: 99,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Columbia',
                        qNum: 'NaN',
                        qElemNumber: 87,
                        qState: 'O',
                      },
                      {
                        qText: '87',
                        qNum: 87,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Columbiana',
                        qNum: 'NaN',
                        qElemNumber: 66,
                        qState: 'O',
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
                        qText: 'Columbus',
                        qNum: 'NaN',
                        qElemNumber: 57,
                        qState: 'O',
                      },
                      {
                        qText: '57',
                        qNum: 57,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Compton',
                        qNum: 'NaN',
                        qElemNumber: 0,
                        qState: 'O',
                      },
                      {
                        qText: '0',
                        qNum: 0,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Corona',
                        qNum: 'NaN',
                        qElemNumber: 64,
                        qState: 'O',
                      },
                      {
                        qText: '64',
                        qNum: 64,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Costa Mesa',
                        qNum: 'NaN',
                        qElemNumber: 243,
                        qState: 'O',
                      },
                      {
                        qText: '243',
                        qNum: 243,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Cramerton',
                        qNum: 'NaN',
                        qElemNumber: 67,
                        qState: 'O',
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
                        qText: 'Creedmoor',
                        qNum: 'NaN',
                        qElemNumber: 123,
                        qState: 'O',
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
                        qText: 'Crestwood',
                        qNum: 'NaN',
                        qElemNumber: 220,
                        qState: 'O',
                      },
                      {
                        qText: '220',
                        qNum: 220,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Cypress',
                        qNum: 'NaN',
                        qElemNumber: 93,
                        qState: 'O',
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
                        qText: 'Dallas',
                        qNum: 'NaN',
                        qElemNumber: 34,
                        qState: 'O',
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
                        qText: 'Dearborn',
                        qNum: 'NaN',
                        qElemNumber: 48,
                        qState: 'O',
                      },
                      {
                        qText: '48',
                        qNum: 48,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Depere',
                        qNum: 'NaN',
                        qElemNumber: 76,
                        qState: 'O',
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
                        qText: 'Des Moines',
                        qNum: 'NaN',
                        qElemNumber: 236,
                        qState: 'O',
                      },
                      {
                        qText: '236',
                        qNum: 236,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Dover',
                        qNum: 'NaN',
                        qElemNumber: 152,
                        qState: 'O',
                      },
                      {
                        qText: '152',
                        qNum: 152,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Duluth',
                        qNum: 'NaN',
                        qElemNumber: 85,
                        qState: 'O',
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
                        qText: 'Eagan',
                        qNum: 'NaN',
                        qElemNumber: 81,
                        qState: 'O',
                      },
                      {
                        qText: '81',
                        qNum: 81,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'East Providence',
                        qNum: 'NaN',
                        qElemNumber: 16,
                        qState: 'O',
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
                        qText: 'Eau Claire',
                        qNum: 'NaN',
                        qElemNumber: 208,
                        qState: 'O',
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
                        qText: 'El Cajon',
                        qNum: 'NaN',
                        qElemNumber: 256,
                        qState: 'O',
                      },
                      {
                        qText: '256',
                        qNum: 256,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'El Paso',
                        qNum: 'NaN',
                        qElemNumber: 101,
                        qState: 'O',
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
                        qText: 'Elizabethtown',
                        qNum: 'NaN',
                        qElemNumber: 84,
                        qState: 'O',
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
                        qText: 'Elkhart',
                        qNum: 'NaN',
                        qElemNumber: 73,
                        qState: 'O',
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
                        qText: 'Elma',
                        qNum: 'NaN',
                        qElemNumber: 241,
                        qState: 'O',
                      },
                      {
                        qText: '241',
                        qNum: 241,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Enumclaw',
                        qNum: 'NaN',
                        qElemNumber: 219,
                        qState: 'O',
                      },
                      {
                        qText: '219',
                        qNum: 219,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Eugene',
                        qNum: 'NaN',
                        qElemNumber: 49,
                        qState: 'O',
                      },
                      {
                        qText: '49',
                        qNum: 49,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Evansville',
                        qNum: 'NaN',
                        qElemNumber: 161,
                        qState: 'O',
                      },
                      {
                        qText: '161',
                        qNum: 161,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Exeter',
                        qNum: 'NaN',
                        qElemNumber: 28,
                        qState: 'O',
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
                        qText: 'Fairmount',
                        qNum: 'NaN',
                        qElemNumber: 218,
                        qState: 'O',
                      },
                      {
                        qText: '218',
                        qNum: 218,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Fairview',
                        qNum: 'NaN',
                        qElemNumber: 250,
                        qState: 'O',
                      },
                      {
                        qText: '250',
                        qNum: 250,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Farmington',
                        qNum: 'NaN',
                        qElemNumber: 176,
                        qState: 'O',
                      },
                      {
                        qText: '176',
                        qNum: 176,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Flint',
                        qNum: 'NaN',
                        qElemNumber: 62,
                        qState: 'O',
                      },
                      {
                        qText: '62',
                        qNum: 62,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Fort Collins',
                        qNum: 'NaN',
                        qElemNumber: 88,
                        qState: 'O',
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
                        qText: 'Fort Smith',
                        qNum: 'NaN',
                        qElemNumber: 118,
                        qState: 'O',
                      },
                      {
                        qText: '118',
                        qNum: 118,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Fort Worth',
                        qNum: 'NaN',
                        qElemNumber: 69,
                        qState: 'O',
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
                        qText: 'Framingham',
                        qNum: 'NaN',
                        qElemNumber: 247,
                        qState: 'O',
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
                        qText: 'Frederick',
                        qNum: 'NaN',
                        qElemNumber: 191,
                        qState: 'O',
                      },
                      {
                        qText: '191',
                        qNum: 191,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Fredericksburg',
                        qNum: 'NaN',
                        qElemNumber: 233,
                        qState: 'O',
                      },
                      {
                        qText: '233',
                        qNum: 233,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Fresno',
                        qNum: 'NaN',
                        qElemNumber: 213,
                        qState: 'O',
                      },
                      {
                        qText: '213',
                        qNum: 213,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Ft Collins',
                        qNum: 'NaN',
                        qElemNumber: 58,
                        qState: 'O',
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
                        qText: 'Gardena',
                        qNum: 'NaN',
                        qElemNumber: 180,
                        qState: 'O',
                      },
                      {
                        qText: '180',
                        qNum: 180,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Garner',
                        qNum: 'NaN',
                        qElemNumber: 216,
                        qState: 'O',
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
                        qText: 'Glen Burnie',
                        qNum: 'NaN',
                        qElemNumber: 244,
                        qState: 'O',
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
                        qText: 'Goodlettsville',
                        qNum: 'NaN',
                        qElemNumber: 98,
                        qState: 'O',
                      },
                      {
                        qText: '98',
                        qNum: 98,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Grand Rapids',
                        qNum: 'NaN',
                        qElemNumber: 143,
                        qState: 'O',
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
                        qText: 'Greenville',
                        qNum: 'NaN',
                        qElemNumber: 263,
                        qState: 'O',
                      },
                      {
                        qText: '263',
                        qNum: 263,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Greenwood',
                        qNum: 'NaN',
                        qElemNumber: 50,
                        qState: 'O',
                      },
                      {
                        qText: '50',
                        qNum: 50,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Gretna',
                        qNum: 'NaN',
                        qElemNumber: 230,
                        qState: 'O',
                      },
                      {
                        qText: '230',
                        qNum: 230,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Ham Lake',
                        qNum: 'NaN',
                        qElemNumber: 257,
                        qState: 'O',
                      },
                      {
                        qText: '257',
                        qNum: 257,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Hamel',
                        qNum: 'NaN',
                        qElemNumber: 59,
                        qState: 'O',
                      },
                      {
                        qText: '59',
                        qNum: 59,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Hammond',
                        qNum: 'NaN',
                        qElemNumber: 128,
                        qState: 'O',
                      },
                      {
                        qText: '128',
                        qNum: 128,
                        qElemNumber: 0,
                        qState: 'L',
                      },
                    ],
                    [
                      {
                        qText: 'Hayward',
                        qNum: 'NaN',
                        qElemNumber: 167,
                        qState: 'O',
                      },
                      {
                        qText: '167',
                        qNum: 167,
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
                    qWidth: 2,
                    qHeight: 100,
                  },
                },
              ],
            },
          },
          parent: {
            h: 641.6,
            w: 937.6,
          },
        },
        dataPages: [
          {
            qMatrix: [
              [
                {
                  qText: 'Mentor',
                  qNum: 'NaN',
                  qElemNumber: 154,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Mentor',
                        qElemNo: 154,
                      },
                    ],
                  },
                },
                {
                  qText: '11434394.96',
                  qNum: 11434394.96,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '11889136.43',
                  qNum: 11889136.430000003,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Hamel',
                  qNum: 'NaN',
                  qElemNumber: 59,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Hamel',
                        qElemNo: 59,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '11117285.78',
                  qNum: 11117285.779999997,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Compton',
                  qNum: 'NaN',
                  qElemNumber: 0,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Compton',
                        qElemNo: 0,
                      },
                    ],
                  },
                },
                {
                  qText: '136859.48',
                  qNum: 136859.48,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '3720451.16',
                  qNum: 3720451.1600000137,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Odessa',
                  qNum: 'NaN',
                  qElemNumber: 32,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Odessa',
                        qElemNo: 32,
                      },
                    ],
                  },
                },
                {
                  qText: '3109821.47',
                  qNum: 3109821.47,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '3178724.93',
                  qNum: 3178724.93,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Smyrna',
                  qNum: 'NaN',
                  qElemNumber: 26,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Smyrna',
                        qElemNo: 26,
                      },
                    ],
                  },
                },
                {
                  qText: '90451.8',
                  qNum: 90451.79999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '3108910.14',
                  qNum: 3108910.1399999973,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Roanoke',
                  qNum: 'NaN',
                  qElemNumber: 53,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Roanoke',
                        qElemNo: 53,
                      },
                    ],
                  },
                },
                {
                  qText: '1996743.47',
                  qNum: 1996743.4699999997,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '2431352.62',
                  qNum: 2431352.6199999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Buffdale',
                  qNum: 'NaN',
                  qElemNumber: 186,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Buffdale',
                        qElemNo: 186,
                      },
                    ],
                  },
                },
                {
                  qText: '2242011.51',
                  qNum: 2242011.5100000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '2248193.39',
                  qNum: 2248193.39,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Southfield',
                  qNum: 'NaN',
                  qElemNumber: 112,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Southfield',
                        qElemNo: 112,
                      },
                    ],
                  },
                },
                {
                  qText: '1835965.04',
                  qNum: 1835965.04,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '2115465.02',
                  qNum: 2115465.0199999963,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Cypress',
                  qNum: 'NaN',
                  qElemNumber: 93,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Cypress',
                        qElemNo: 93,
                      },
                    ],
                  },
                },
                {
                  qText: '8622.79',
                  qNum: 8622.79,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '2048522.27',
                  qNum: 2048522.27,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Sioux Center',
                  qNum: 'NaN',
                  qElemNumber: 148,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Sioux Center',
                        qElemNo: 148,
                      },
                    ],
                  },
                },
                {
                  qText: '2022972.99',
                  qNum: 2022972.9900000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '2044386.32',
                  qNum: 2044386.319999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Overland Park',
                  qNum: 'NaN',
                  qElemNumber: 2,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Overland Park',
                        qElemNo: 2,
                      },
                    ],
                  },
                },
                {
                  qText: '233855',
                  qNum: 233854.99999999997,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1945587.63',
                  qNum: 1945587.6300000125,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Exeter',
                  qNum: 'NaN',
                  qElemNumber: 28,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Exeter',
                        qElemNo: 28,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1934520.21',
                  qNum: 1934520.210000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Livonia',
                  qNum: 'NaN',
                  qElemNumber: 14,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Livonia',
                        qElemNo: 14,
                      },
                    ],
                  },
                },
                {
                  qText: '108171.66',
                  qNum: 108171.66000000005,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1836462.89',
                  qNum: 1836462.8900000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Portland',
                  qNum: 'NaN',
                  qElemNumber: 24,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Portland',
                        qElemNo: 24,
                      },
                    ],
                  },
                },
                {
                  qText: '1276524.02',
                  qNum: 1276524.02,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1832969.2',
                  qNum: 1832969.2000000041,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Sacramento',
                  qNum: 'NaN',
                  qElemNumber: 39,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Sacramento',
                        qElemNo: 39,
                      },
                    ],
                  },
                },
                {
                  qText: '1225805.46',
                  qNum: 1225805.4600000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1803526.3',
                  qNum: 1803526.3,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Thief River Falls',
                  qNum: 'NaN',
                  qElemNumber: 79,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Thief River Falls',
                        qElemNo: 79,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1782516.08',
                  qNum: 1782516.08,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Plainfield',
                  qNum: 'NaN',
                  qElemNumber: 86,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Plainfield',
                        qElemNo: 86,
                      },
                    ],
                  },
                },
                {
                  qText: '106585.14',
                  qNum: 106585.14000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1555698.51',
                  qNum: 1555698.5100000023,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Dallas',
                  qNum: 'NaN',
                  qElemNumber: 34,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Dallas',
                        qElemNo: 34,
                      },
                    ],
                  },
                },
                {
                  qText: '1503538.07',
                  qNum: 1503538.07,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1543996.27',
                  qNum: 1543996.2700000003,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Sparks',
                  qNum: 'NaN',
                  qElemNumber: 126,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Sparks',
                        qElemNo: 126,
                      },
                    ],
                  },
                },
                {
                  qText: '1288612.08',
                  qNum: 1288612.08,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1308421.04',
                  qNum: 1308421.040000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Maxwell',
                  qNum: 'NaN',
                  qElemNumber: 151,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Maxwell',
                        qElemNo: 151,
                      },
                    ],
                  },
                },
                {
                  qText: '1143700.63',
                  qNum: 1143700.6299999997,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1280146.81',
                  qNum: 1280146.8100000005,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Schertz',
                  qNum: 'NaN',
                  qElemNumber: 71,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Schertz',
                        qElemNo: 71,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1254348.34',
                  qNum: 1254348.3400000005,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Auburn',
                  qNum: 'NaN',
                  qElemNumber: 35,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Auburn',
                        qElemNo: 35,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1058082.53',
                  qNum: 1058082.530000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'New Castle',
                  qNum: 'NaN',
                  qElemNumber: 165,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'New Castle',
                        qElemNo: 165,
                      },
                    ],
                  },
                },
                {
                  qText: '876404.49',
                  qNum: 876404.4899999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '994911.12',
                  qNum: 994911.1200000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Cape Girardeau',
                  qNum: 'NaN',
                  qElemNumber: 46,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Cape Girardeau',
                        qElemNo: 46,
                      },
                    ],
                  },
                },
                {
                  qText: '17416.32',
                  qNum: 17416.32,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '969020.84',
                  qNum: 969020.8399999992,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Janesville',
                  qNum: 'NaN',
                  qElemNumber: 52,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Janesville',
                        qElemNo: 52,
                      },
                    ],
                  },
                },
                {
                  qText: '468.29',
                  qNum: 468.28999999999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '945869.79',
                  qNum: 945869.7900000006,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'West Jordan',
                  qNum: 'NaN',
                  qElemNumber: 13,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'West Jordan',
                        qElemNo: 13,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '906968.68',
                  qNum: 906968.6799999994,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Kansas City',
                  qNum: 'NaN',
                  qElemNumber: 70,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Kansas City',
                        qElemNo: 70,
                      },
                    ],
                  },
                },
                {
                  qText: '650.17',
                  qNum: 650.17,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '884177.33',
                  qNum: 884177.3299999991,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Mebane',
                  qNum: 'NaN',
                  qElemNumber: 5,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Mebane',
                        qElemNo: 5,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '847958.25',
                  qNum: 847958.25,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Salt Lake City',
                  qNum: 'NaN',
                  qElemNumber: 25,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Salt Lake City',
                        qElemNo: 25,
                      },
                    ],
                  },
                },
                {
                  qText: '7116.37',
                  qNum: 7116.369999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '756947.92',
                  qNum: 756947.92,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Irvine',
                  qNum: 'NaN',
                  qElemNumber: 131,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Irvine',
                        qElemNo: 131,
                      },
                    ],
                  },
                },
                {
                  qText: '480887.53',
                  qNum: 480887.53,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '717642.9',
                  qNum: 717642.9000000004,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Boise',
                  qNum: 'NaN',
                  qElemNumber: 72,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Boise',
                        qElemNo: 72,
                      },
                    ],
                  },
                },
                {
                  qText: '368655.72',
                  qNum: 368655.72,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '710879.52',
                  qNum: 710879.5199999985,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Fort Worth',
                  qNum: 'NaN',
                  qElemNumber: 69,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Fort Worth',
                        qElemNo: 69,
                      },
                    ],
                  },
                },
                {
                  qText: '21581.85',
                  qNum: 21581.85,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '702744.36',
                  qNum: 702744.3600000018,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Poplar Bluff',
                  qNum: 'NaN',
                  qElemNumber: 248,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Poplar Bluff',
                        qElemNo: 248,
                      },
                    ],
                  },
                },
                {
                  qText: '701585.65',
                  qNum: 701585.65,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '701744.3',
                  qNum: 701744.3,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Kalamazoo',
                  qNum: 'NaN',
                  qElemNumber: 198,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Kalamazoo',
                        qElemNo: 198,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '647617.29',
                  qNum: 647617.2900000003,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Sidney',
                  qNum: 'NaN',
                  qElemNumber: 29,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Sidney',
                        qElemNo: 29,
                      },
                    ],
                  },
                },
                {
                  qText: '169659.63',
                  qNum: 169659.63,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '635403',
                  qNum: 635402.9999999994,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Tulsa',
                  qNum: 'NaN',
                  qElemNumber: 75,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Tulsa',
                        qElemNo: 75,
                      },
                    ],
                  },
                },
                {
                  qText: '267716.76',
                  qNum: 267716.76,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '619727.88',
                  qNum: 619727.8800000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Dover',
                  qNum: 'NaN',
                  qElemNumber: 152,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Dover',
                        qElemNo: 152,
                      },
                    ],
                  },
                },
                {
                  qText: '604720.5',
                  qNum: 604720.5,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '605854.3',
                  qNum: 605854.2999999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Te Rapa Hamilton',
                  qNum: 'NaN',
                  qElemNumber: 21,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Te Rapa Hamilton',
                        qElemNo: 21,
                      },
                    ],
                  },
                },
                {
                  qText: '98916.31',
                  qNum: 98916.31,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '582211.06',
                  qNum: 582211.0600000013,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Tupelo',
                  qNum: 'NaN',
                  qElemNumber: 22,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Tupelo',
                        qElemNo: 22,
                      },
                    ],
                  },
                },
                {
                  qText: '98916.31',
                  qNum: 98916.31,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '582211.06',
                  qNum: 582211.0600000013,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Jacksonville',
                  qNum: 'NaN',
                  qElemNumber: 68,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Jacksonville',
                        qElemNo: 68,
                      },
                    ],
                  },
                },
                {
                  qText: '350927.92',
                  qNum: 350927.92000000004,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '581091.25',
                  qNum: 581091.2500000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'San Diego',
                  qNum: 'NaN',
                  qElemNumber: 129,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'San Diego',
                        qElemNo: 129,
                      },
                    ],
                  },
                },
                {
                  qText: '531067.61',
                  qNum: 531067.61,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '542123.65',
                  qNum: 542123.6500000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Statesville',
                  qNum: 'NaN',
                  qElemNumber: 238,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Statesville',
                        qElemNo: 238,
                      },
                    ],
                  },
                },
                {
                  qText: '517268.84',
                  qNum: 517268.84,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '517268.84',
                  qNum: 517268.83999999997,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Clemson',
                  qNum: 'NaN',
                  qElemNumber: 23,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Clemson',
                        qElemNo: 23,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '469515.76',
                  qNum: 469515.7599999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Costa Mesa',
                  qNum: 'NaN',
                  qElemNumber: 243,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Costa Mesa',
                        qElemNo: 243,
                      },
                    ],
                  },
                },
                {
                  qText: '438845.61',
                  qNum: 438845.6099999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '442997.78',
                  qNum: 442997.77999999956,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Tumwater',
                  qNum: 'NaN',
                  qElemNumber: 83,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Tumwater',
                        qElemNo: 83,
                      },
                    ],
                  },
                },
                {
                  qText: '399217.79',
                  qNum: 399217.79,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '430683.25',
                  qNum: 430683.2500000004,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Olive Branch',
                  qNum: 'NaN',
                  qElemNumber: 239,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Olive Branch',
                        qElemNo: 239,
                      },
                    ],
                  },
                },
                {
                  qText: '419544.96',
                  qNum: 419544.9599999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '420176.19',
                  qNum: 420176.18999999994,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Columbiana',
                  qNum: 'NaN',
                  qElemNumber: 66,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Columbiana',
                        qElemNo: 66,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '415125.96',
                  qNum: 415125.95999999985,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Greenwood',
                  qNum: 'NaN',
                  qElemNumber: 50,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Greenwood',
                        qElemNo: 50,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '409514.34',
                  qNum: 409514.34,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Phoenix',
                  qNum: 'NaN',
                  qElemNumber: 55,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Phoenix',
                        qElemNo: 55,
                      },
                    ],
                  },
                },
                {
                  qText: '122685.36',
                  qNum: 122685.36000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '397408.57',
                  qNum: 397408.5700000006,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Bedford Hills',
                  qNum: 'NaN',
                  qElemNumber: 235,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Bedford Hills',
                        qElemNo: 235,
                      },
                    ],
                  },
                },
                {
                  qText: '388706.22',
                  qNum: 388706.2200000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '388706.22',
                  qNum: 388706.2200000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Van Nuys',
                  qNum: 'NaN',
                  qElemNumber: 177,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Van Nuys',
                        qElemNo: 177,
                      },
                    ],
                  },
                },
                {
                  qText: '329056.42',
                  qNum: 329056.42000000004,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '370052.7',
                  qNum: 370052.69999999984,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Saginaw',
                  qNum: 'NaN',
                  qElemNumber: 36,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Saginaw',
                        qElemNo: 36,
                      },
                    ],
                  },
                },
                {
                  qText: '27827.95',
                  qNum: 27827.95,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '358850.5',
                  qNum: 358850.5,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'New Orleans',
                  qNum: 'NaN',
                  qElemNumber: 145,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'New Orleans',
                        qElemNo: 145,
                      },
                    ],
                  },
                },
                {
                  qText: '341680.47',
                  qNum: 341680.46999999986,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '351164.66',
                  qNum: 351164.6599999994,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Highland',
                  qNum: 'NaN',
                  qElemNumber: 96,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Highland',
                        qElemNo: 96,
                      },
                    ],
                  },
                },
                {
                  qText: '347691.01',
                  qNum: 347691.01,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '350943.44',
                  qNum: 350943.43999999965,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Pomona',
                  qNum: 'NaN',
                  qElemNumber: 80,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Pomona',
                        qElemNo: 80,
                      },
                    ],
                  },
                },
                {
                  qText: '320915.12',
                  qNum: 320915.11999999994,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '340544.21',
                  qNum: 340544.2099999998,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Little Rock',
                  qNum: 'NaN',
                  qElemNumber: 78,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Little Rock',
                        qElemNo: 78,
                      },
                    ],
                  },
                },
                {
                  qText: '187739.92',
                  qNum: 187739.91999999998,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '331671.62',
                  qNum: 331671.6199999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Eagan',
                  qNum: 'NaN',
                  qElemNumber: 81,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Eagan',
                        qElemNo: 81,
                      },
                    ],
                  },
                },
                {
                  qText: '136032.7',
                  qNum: 136032.7,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '323795.01',
                  qNum: 323795.0099999995,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Mobile',
                  qNum: 'NaN',
                  qElemNumber: 47,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Mobile',
                        qElemNo: 47,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '319867.88',
                  qNum: 319867.8799999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'McHenry',
                  qNum: 'NaN',
                  qElemNumber: 159,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'McHenry',
                        qElemNo: 159,
                      },
                    ],
                  },
                },
                {
                  qText: '299280.04',
                  qNum: 299280.04,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '311376.78',
                  qNum: 311376.7800000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Wester Chester',
                  qNum: 'NaN',
                  qElemNumber: 15,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Wester Chester',
                        qElemNo: 15,
                      },
                    ],
                  },
                },
                {
                  qText: '144715.1',
                  qNum: 144715.10000000003,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '290976.01',
                  qNum: 290976.00999999995,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Beaverton',
                  qNum: 'NaN',
                  qElemNumber: 60,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Beaverton',
                        qElemNo: 60,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '285978.69',
                  qNum: 285978.6899999998,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'South Bend',
                  qNum: 'NaN',
                  qElemNumber: 27,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'South Bend',
                        qElemNo: 27,
                      },
                    ],
                  },
                },
                {
                  qText: '14603.72',
                  qNum: 14603.720000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '281696.67',
                  qNum: 281696.67,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Hialeah',
                  qNum: 'NaN',
                  qElemNumber: 31,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Hialeah',
                        qElemNo: 31,
                      },
                    ],
                  },
                },
                {
                  qText: '92377.9',
                  qNum: 92377.90000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '276352.86',
                  qNum: 276352.8600000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Jackson',
                  qNum: 'NaN',
                  qElemNumber: 144,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Jackson',
                        qElemNo: 144,
                      },
                    ],
                  },
                },
                {
                  qText: '230139.41',
                  qNum: 230139.41,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '274925.23',
                  qNum: 274925.23000000016,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Fairview',
                  qNum: 'NaN',
                  qElemNumber: 250,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Fairview',
                        qElemNo: 250,
                      },
                    ],
                  },
                },
                {
                  qText: '258637.88',
                  qNum: 258637.87999999995,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '266831.69',
                  qNum: 266831.6900000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Ottawa',
                  qNum: 'NaN',
                  qElemNumber: 234,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Ottawa',
                        qElemNo: 234,
                      },
                    ],
                  },
                },
                {
                  qText: '235368.42',
                  qNum: 235368.41999999998,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '258981.58',
                  qNum: 258981.57999999993,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Canton',
                  qNum: 'NaN',
                  qElemNumber: 119,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Canton',
                        qElemNo: 119,
                      },
                    ],
                  },
                },
                {
                  qText: '133524.5',
                  qNum: 133524.5,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '254238.7',
                  qNum: 254238.70000000004,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Calhoun',
                  qNum: 'NaN',
                  qElemNumber: 30,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Calhoun',
                        qElemNo: 30,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '249863.06',
                  qNum: 249863.05999999994,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Mitchell',
                  qNum: 'NaN',
                  qElemNumber: 184,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Mitchell',
                        qElemNo: 184,
                      },
                    ],
                  },
                },
                {
                  qText: '245803.83',
                  qNum: 245803.83,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '248068.66',
                  qNum: 248068.65999999977,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Wells',
                  qNum: 'NaN',
                  qElemNumber: 207,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Wells',
                        qElemNo: 207,
                      },
                    ],
                  },
                },
                {
                  qText: '230475.56',
                  qNum: 230475.56,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '247283.8',
                  qNum: 247283.80000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Tampa',
                  qNum: 'NaN',
                  qElemNumber: 91,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Tampa',
                        qElemNo: 91,
                      },
                    ],
                  },
                },
                {
                  qText: '243507.61',
                  qNum: 243507.61,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '246290.9',
                  qNum: 246290.89999999994,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Elizabethtown',
                  qNum: 'NaN',
                  qElemNumber: 84,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Elizabethtown',
                        qElemNo: 84,
                      },
                    ],
                  },
                },
                {
                  qText: '140095.01',
                  qNum: 140095.01,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '244717.23',
                  qNum: 244717.23000000024,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Tuscon',
                  qNum: 'NaN',
                  qElemNumber: 4,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Tuscon',
                        qElemNo: 4,
                      },
                    ],
                  },
                },
                {
                  qText: '1238.28',
                  qNum: 1238.28,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '241289.14',
                  qNum: 241289.14000000022,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Miami',
                  qNum: 'NaN',
                  qElemNumber: 51,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Miami',
                        qElemNo: 51,
                      },
                    ],
                  },
                },
                {
                  qText: '78089.9',
                  qNum: 78089.90000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '234150.68',
                  qNum: 234150.67999999993,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Coldwater',
                  qNum: 'NaN',
                  qElemNumber: 38,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Coldwater',
                        qElemNo: 38,
                      },
                    ],
                  },
                },
                {
                  qText: '2589.63',
                  qNum: 2589.6300000000006,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '225488.72',
                  qNum: 225488.71999999983,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'North Little Rock',
                  qNum: 'NaN',
                  qElemNumber: 122,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'North Little Rock',
                        qElemNo: 122,
                      },
                    ],
                  },
                },
                {
                  qText: '120404.1',
                  qNum: 120404.09999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '223675.98',
                  qNum: 223675.97999999984,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Birmingham',
                  qNum: 'NaN',
                  qElemNumber: 110,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Birmingham',
                        qElemNo: 110,
                      },
                    ],
                  },
                },
                {
                  qText: '158989.69',
                  qNum: 158989.68999999997,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '221824.7',
                  qNum: 221824.69999999995,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Mercer',
                  qNum: 'NaN',
                  qElemNumber: 74,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Mercer',
                        qElemNo: 74,
                      },
                    ],
                  },
                },
                {
                  qText: '27944.26',
                  qNum: 27944.260000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '217073.18',
                  qNum: 217073.18000000017,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Marshfield',
                  qNum: 'NaN',
                  qElemNumber: 246,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Marshfield',
                        qElemNo: 246,
                      },
                    ],
                  },
                },
                {
                  qText: '195934.68',
                  qNum: 195934.68,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '212415.37',
                  qNum: 212415.36999999976,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Petersburg',
                  qNum: 'NaN',
                  qElemNumber: 107,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Petersburg',
                        qElemNo: 107,
                      },
                    ],
                  },
                },
                {
                  qText: '65949.77',
                  qNum: 65949.77,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '204171.02',
                  qNum: 204171.01999999993,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'East Providence',
                  qNum: 'NaN',
                  qElemNumber: 16,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'East Providence',
                        qElemNo: 16,
                      },
                    ],
                  },
                },
                {
                  qText: '194754.41',
                  qNum: 194754.41,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '202162.31',
                  qNum: 202162.30999999997,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Brownsville',
                  qNum: 'NaN',
                  qElemNumber: 252,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Brownsville',
                        qElemNo: 252,
                      },
                    ],
                  },
                },
                {
                  qText: '199463.5',
                  qNum: 199463.5,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '201878.5',
                  qNum: 201878.5000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Pocatello',
                  qNum: 'NaN',
                  qElemNumber: 206,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Pocatello',
                        qElemNo: 206,
                      },
                    ],
                  },
                },
                {
                  qText: '191945',
                  qNum: 191945,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '192833.62',
                  qNum: 192833.62000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Elma',
                  qNum: 'NaN',
                  qElemNumber: 241,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Elma',
                        qElemNo: 241,
                      },
                    ],
                  },
                },
                {
                  qText: '192005.98',
                  qNum: 192005.97999999998,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '192616.17',
                  qNum: 192616.17,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Louisville',
                  qNum: 'NaN',
                  qElemNumber: 142,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Louisville',
                        qElemNo: 142,
                      },
                    ],
                  },
                },
                {
                  qText: '150753.02',
                  qNum: 150753.02,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '192211.79',
                  qNum: 192211.7899999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Fort Smith',
                  qNum: 'NaN',
                  qElemNumber: 118,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Fort Smith',
                        qElemNo: 118,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '191486.53',
                  qNum: 191486.53000000017,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Spokane',
                  qNum: 'NaN',
                  qElemNumber: 12,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Spokane',
                        qElemNo: 12,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '186544.56',
                  qNum: 186544.55999999988,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'St Louis Park',
                  qNum: 'NaN',
                  qElemNumber: 3,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'St Louis Park',
                        qElemNo: 3,
                      },
                    ],
                  },
                },
                {
                  qText: '33618.97',
                  qNum: 33618.97000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '184908.33',
                  qNum: 184908.32999999978,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Dearborn',
                  qNum: 'NaN',
                  qElemNumber: 48,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Dearborn',
                        qElemNo: 48,
                      },
                    ],
                  },
                },
                {
                  qText: '9396.18',
                  qNum: 9396.18,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '177957.55',
                  qNum: 177957.5500000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Goodlettsville',
                  qNum: 'NaN',
                  qElemNumber: 98,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Goodlettsville',
                        qElemNo: 98,
                      },
                    ],
                  },
                },
                {
                  qText: '110147.68',
                  qNum: 110147.68,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '177841.64',
                  qNum: 177841.6400000003,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Charlotte',
                  qNum: 'NaN',
                  qElemNumber: 124,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Charlotte',
                        qElemNo: 124,
                      },
                    ],
                  },
                },
                {
                  qText: '78108.75',
                  qNum: 78108.75,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '173552.72',
                  qNum: 173552.71999999968,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Prineville',
                  qNum: 'NaN',
                  qElemNumber: 179,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Prineville',
                        qElemNo: 179,
                      },
                    ],
                  },
                },
                {
                  qText: '18371.19',
                  qNum: 18371.19,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '170090.2',
                  qNum: 170090.1999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Brookfield',
                  qNum: 'NaN',
                  qElemNumber: 170,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Brookfield',
                        qElemNo: 170,
                      },
                    ],
                  },
                },
                {
                  qText: '164820.4',
                  qNum: 164820.4,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '166817.35',
                  qNum: 166817.35000000012,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Flint',
                  qNum: 'NaN',
                  qElemNumber: 62,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Flint',
                        qElemNo: 62,
                      },
                    ],
                  },
                },
                {
                  qText: '156321.97',
                  qNum: 156321.97,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '163436.1',
                  qNum: 163436.1000000004,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Independence',
                  qNum: 'NaN',
                  qElemNumber: 196,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Independence',
                        qElemNo: 196,
                      },
                    ],
                  },
                },
                {
                  qText: '160459.27',
                  qNum: 160459.26999999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '162738.74',
                  qNum: 162738.73999999982,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Wrightsville',
                  qNum: 'NaN',
                  qElemNumber: 54,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Wrightsville',
                        qElemNo: 54,
                      },
                    ],
                  },
                },
                {
                  qText: '8361.69',
                  qNum: 8361.69,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '159022.2',
                  qNum: 159022.19999999975,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Cleveland',
                  qNum: 'NaN',
                  qElemNumber: 106,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Cleveland',
                        qElemNo: 106,
                      },
                    ],
                  },
                },
                {
                  qText: '116781.42',
                  qNum: 116781.42000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '159013.55',
                  qNum: 159013.55000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Puyallup',
                  qNum: 'NaN',
                  qElemNumber: 210,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Puyallup',
                        qElemNo: 210,
                      },
                    ],
                  },
                },
                {
                  qText: '157457.55',
                  qNum: 157457.55,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '157502.3',
                  qNum: 157502.3,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'San Marcos',
                  qNum: 'NaN',
                  qElemNumber: 242,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'San Marcos',
                        qElemNo: 242,
                      },
                    ],
                  },
                },
                {
                  qText: '151677.98',
                  qNum: 151677.97999999998,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '152006.71',
                  qNum: 152006.71000000022,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Fairmount',
                  qNum: 'NaN',
                  qElemNumber: 218,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Fairmount',
                        qElemNo: 218,
                      },
                    ],
                  },
                },
                {
                  qText: '129823.25',
                  qNum: 129823.25000000003,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '150872.83',
                  qNum: 150872.83000000007,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Appleton',
                  qNum: 'NaN',
                  qElemNumber: 17,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Appleton',
                        qElemNo: 17,
                      },
                    ],
                  },
                },
                {
                  qText: '2379.28',
                  qNum: 2379.2799999999997,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '146646.09',
                  qNum: 146646.09000000003,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Memphis',
                  qNum: 'NaN',
                  qElemNumber: 1,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Memphis',
                        qElemNo: 1,
                      },
                    ],
                  },
                },
                {
                  qText: '9354.68',
                  qNum: 9354.679999999998,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '145437.03',
                  qNum: 145437.02999999997,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Morton',
                  qNum: 'NaN',
                  qElemNumber: 228,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Morton',
                        qElemNo: 228,
                      },
                    ],
                  },
                },
                {
                  qText: '137493.71',
                  qNum: 137493.71,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '144473.99',
                  qNum: 144473.98999999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Milwaukie',
                  qNum: 'NaN',
                  qElemNumber: 10,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Milwaukie',
                        qElemNo: 10,
                      },
                    ],
                  },
                },
                {
                  qText: '92619.89',
                  qNum: 92619.89,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '141082.43',
                  qNum: 141082.4300000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Grand Rapids',
                  qNum: 'NaN',
                  qElemNumber: 143,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Grand Rapids',
                        qElemNo: 143,
                      },
                    ],
                  },
                },
                {
                  qText: '118676.97',
                  qNum: 118676.97000000003,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '138258.42',
                  qNum: 138258.42000000013,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Anchorage',
                  qNum: 'NaN',
                  qElemNumber: 7,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Anchorage',
                        qElemNo: 7,
                      },
                    ],
                  },
                },
                {
                  qText: '13922.72',
                  qNum: 13922.72,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '136501.5',
                  qNum: 136501.5000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Jasper',
                  qNum: 'NaN',
                  qElemNumber: 41,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Jasper',
                        qElemNo: 41,
                      },
                    ],
                  },
                },
                {
                  qText: '113540.72',
                  qNum: 113540.72000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '134180.64',
                  qNum: 134180.64,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Meridian',
                  qNum: 'NaN',
                  qElemNumber: 149,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Meridian',
                        qElemNo: 149,
                      },
                    ],
                  },
                },
                {
                  qText: '109693.72',
                  qNum: 109693.72,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '130842.55',
                  qNum: 130842.54999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Hillsboro',
                  qNum: 'NaN',
                  qElemNumber: 19,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Hillsboro',
                        qElemNo: 19,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '127374.38',
                  qNum: 127374.38000000006,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Yakama',
                  qNum: 'NaN',
                  qElemNumber: 157,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Yakama',
                        qElemNo: 157,
                      },
                    ],
                  },
                },
                {
                  qText: '115038.81',
                  qNum: 115038.81,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '115038.81',
                  qNum: 115038.81000000004,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Clackamas',
                  qNum: 'NaN',
                  qElemNumber: 43,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Clackamas',
                        qElemNo: 43,
                      },
                    ],
                  },
                },
                {
                  qText: '7853.23',
                  qNum: 7853.230000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '114046.37',
                  qNum: 114046.37000000004,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'MOLINE',
                  qNum: 'NaN',
                  qElemNumber: 56,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'MOLINE',
                        qElemNo: 56,
                      },
                    ],
                  },
                },
                {
                  qText: '115529.55',
                  qNum: 115529.54999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '113914.48',
                  qNum: 113914.47999999998,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Kent',
                  qNum: 'NaN',
                  qElemNumber: 40,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Kent',
                        qElemNo: 40,
                      },
                    ],
                  },
                },
                {
                  qText: '98424.43',
                  qNum: 98424.43000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '111075.64',
                  qNum: 111075.63999999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Wooster',
                  qNum: 'NaN',
                  qElemNumber: 117,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Wooster',
                        qElemNo: 117,
                      },
                    ],
                  },
                },
                {
                  qText: '11539.3',
                  qNum: 11539.3,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '103883.9',
                  qNum: 103883.89999999997,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Lake Hamilton',
                  qNum: 'NaN',
                  qElemNumber: 135,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Lake Hamilton',
                        qElemNo: 135,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '102407.59',
                  qNum: 102407.59000000004,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Pearl',
                  qNum: 'NaN',
                  qElemNumber: 6,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Pearl',
                        qElemNo: 6,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '100487.88',
                  qNum: 100487.88000000009,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Longview',
                  qNum: 'NaN',
                  qElemNumber: 125,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Longview',
                        qElemNo: 125,
                      },
                    ],
                  },
                },
                {
                  qText: '81.9',
                  qNum: 81.9,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '98666.83',
                  qNum: 98666.83000000012,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Oklahoma City',
                  qNum: 'NaN',
                  qElemNumber: 224,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Oklahoma City',
                        qElemNo: 224,
                      },
                    ],
                  },
                },
                {
                  qText: '93895.76',
                  qNum: 93895.76000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '97306.65',
                  qNum: 97306.65000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Chattanooga',
                  qNum: 'NaN',
                  qElemNumber: 20,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Chattanooga',
                        qElemNo: 20,
                      },
                    ],
                  },
                },
                {
                  qText: '37008.25',
                  qNum: 37008.25,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '94358.92',
                  qNum: 94358.91999999997,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Pittsburgh',
                  qNum: 'NaN',
                  qElemNumber: 240,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Pittsburgh',
                        qElemNo: 240,
                      },
                    ],
                  },
                },
                {
                  qText: '57309.75',
                  qNum: 57309.75,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '89686.42',
                  qNum: 89686.42000000003,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Columbia',
                  qNum: 'NaN',
                  qElemNumber: 87,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Columbia',
                        qElemNo: 87,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '89412.73',
                  qNum: 89412.72999999997,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Rapid City',
                  qNum: 'NaN',
                  qElemNumber: 100,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Rapid City',
                        qElemNo: 100,
                      },
                    ],
                  },
                },
                {
                  qText: '73958.36',
                  qNum: 73958.36,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '85433.07',
                  qNum: 85433.07,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Eugene',
                  qNum: 'NaN',
                  qElemNumber: 49,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Eugene',
                        qElemNo: 49,
                      },
                    ],
                  },
                },
                {
                  qText: '1799.58',
                  qNum: 1799.58,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '85227.29',
                  qNum: 85227.29,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'North Highlands',
                  qNum: 'NaN',
                  qElemNumber: 11,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'North Highlands',
                        qElemNo: 11,
                      },
                    ],
                  },
                },
                {
                  qText: '68722.22',
                  qNum: 68722.22,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '84960.66',
                  qNum: 84960.66000000003,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Elkhart',
                  qNum: 'NaN',
                  qElemNumber: 73,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Elkhart',
                        qElemNo: 73,
                      },
                    ],
                  },
                },
                {
                  qText: '12310.51',
                  qNum: 12310.509999999998,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '83512.39',
                  qNum: 83512.39000000007,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Houston',
                  qNum: 'NaN',
                  qElemNumber: 132,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Houston',
                        qElemNo: 132,
                      },
                    ],
                  },
                },
                {
                  qText: '28703.33',
                  qNum: 28703.33000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '83066.65',
                  qNum: 83066.65000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Lennox',
                  qNum: 'NaN',
                  qElemNumber: 222,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Lennox',
                        qElemNo: 222,
                      },
                    ],
                  },
                },
                {
                  qText: '65927.05',
                  qNum: 65927.05,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '79075.96',
                  qNum: 79075.95999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Pocahontas',
                  qNum: 'NaN',
                  qElemNumber: 217,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Pocahontas',
                        qElemNo: 217,
                      },
                    ],
                  },
                },
                {
                  qText: '78578.21',
                  qNum: 78578.20999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '78646.12',
                  qNum: 78646.11999999997,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Rancho Cordova',
                  qNum: 'NaN',
                  qElemNumber: 103,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Rancho Cordova',
                        qElemNo: 103,
                      },
                    ],
                  },
                },
                {
                  qText: '7971.24',
                  qNum: 7971.24,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '78120.41',
                  qNum: 78120.40999999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Medford',
                  qNum: 'NaN',
                  qElemNumber: 232,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Medford',
                        qElemNo: 232,
                      },
                    ],
                  },
                },
                {
                  qText: '77832.21',
                  qNum: 77832.21000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '77965.34',
                  qNum: 77965.34000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Joliet',
                  qNum: 'NaN',
                  qElemNumber: 166,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Joliet',
                        qElemNo: 166,
                      },
                    ],
                  },
                },
                {
                  qText: '72166.12',
                  qNum: 72166.12000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '76456',
                  qNum: 76455.99999999994,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Atlanta',
                  qNum: 'NaN',
                  qElemNumber: 45,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Atlanta',
                        qElemNo: 45,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '76197.75',
                  qNum: 76197.75,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'West Sayville',
                  qNum: 'NaN',
                  qElemNumber: 193,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'West Sayville',
                        qElemNo: 193,
                      },
                    ],
                  },
                },
                {
                  qText: '75650.03',
                  qNum: 75650.03,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '75650.03',
                  qNum: 75650.03000000003,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Baton Rouge',
                  qNum: 'NaN',
                  qElemNumber: 102,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Baton Rouge',
                        qElemNo: 102,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '74763.7',
                  qNum: 74763.70000000007,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Irving',
                  qNum: 'NaN',
                  qElemNumber: 201,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Irving',
                        qElemNo: 201,
                      },
                    ],
                  },
                },
                {
                  qText: '67795.94',
                  qNum: 67795.94000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '73994.62',
                  qNum: 73994.62000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Watervliet',
                  qNum: 'NaN',
                  qElemNumber: 44,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Watervliet',
                        qElemNo: 44,
                      },
                    ],
                  },
                },
                {
                  qText: '38213.37',
                  qNum: 38213.37,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '73243.75',
                  qNum: 73243.74999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Oslo',
                  qNum: 'NaN',
                  qElemNumber: 214,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Oslo',
                        qElemNo: 214,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '73225.16',
                  qNum: 73225.16,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Libby',
                  qNum: 'NaN',
                  qElemNumber: 9,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Libby',
                        qElemNo: 9,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '69512.97',
                  qNum: 69512.96999999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Milesburg',
                  qNum: 'NaN',
                  qElemNumber: 195,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Milesburg',
                        qElemNo: 195,
                      },
                    ],
                  },
                },
                {
                  qText: '65454',
                  qNum: 65454,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '66378.84',
                  qNum: 66378.84,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Cramerton',
                  qNum: 'NaN',
                  qElemNumber: 67,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Cramerton',
                        qElemNo: 67,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '66322.81',
                  qNum: 66322.81000000003,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Albany',
                  qNum: 'NaN',
                  qElemNumber: 258,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Albany',
                        qElemNo: 258,
                      },
                    ],
                  },
                },
                {
                  qText: '33361.25',
                  qNum: 33361.24999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '66004.3',
                  qNum: 66004.29999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Norcross',
                  qNum: 'NaN',
                  qElemNumber: 172,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Norcross',
                        qElemNo: 172,
                      },
                    ],
                  },
                },
                {
                  qText: '5429.95',
                  qNum: 5429.95,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '63525.51',
                  qNum: 63525.509999999995,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Cass City',
                  qNum: 'NaN',
                  qElemNumber: 174,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Cass City',
                        qElemNo: 174,
                      },
                    ],
                  },
                },
                {
                  qText: '1839.09',
                  qNum: 1839.0900000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '63149.5',
                  qNum: 63149.50000000004,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'El Paso',
                  qNum: 'NaN',
                  qElemNumber: 101,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'El Paso',
                        qElemNo: 101,
                      },
                    ],
                  },
                },
                {
                  qText: '9989.7',
                  qNum: 9989.699999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '62399.08',
                  qNum: 62399.07999999997,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Tigard',
                  qNum: 'NaN',
                  qElemNumber: 136,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Tigard',
                        qElemNo: 136,
                      },
                    ],
                  },
                },
                {
                  qText: '2810.28',
                  qNum: 2810.28,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '62304.74',
                  qNum: 62304.74000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Sun Prairie',
                  qNum: 'NaN',
                  qElemNumber: 254,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Sun Prairie',
                        qElemNo: 254,
                      },
                    ],
                  },
                },
                {
                  qText: '60070.85',
                  qNum: 60070.850000000006,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '60070.85',
                  qNum: 60070.84999999998,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Chicago',
                  qNum: 'NaN',
                  qElemNumber: 187,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Chicago',
                        qElemNo: 187,
                      },
                    ],
                  },
                },
                {
                  qText: '16471.32',
                  qNum: 16471.32,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '59606.89',
                  qNum: 59606.89000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Troy',
                  qNum: 'NaN',
                  qElemNumber: 77,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Troy',
                        qElemNo: 77,
                      },
                    ],
                  },
                },
                {
                  qText: '2487.45',
                  qNum: 2487.4500000000003,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '57680.69',
                  qNum: 57680.689999999995,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Hayward',
                  qNum: 'NaN',
                  qElemNumber: 167,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Hayward',
                        qElemNo: 167,
                      },
                    ],
                  },
                },
                {
                  qText: '43994.43',
                  qNum: 43994.43,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '57123.86',
                  qNum: 57123.85999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Savannah',
                  qNum: 'NaN',
                  qElemNumber: 121,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Savannah',
                        qElemNo: 121,
                      },
                    ],
                  },
                },
                {
                  qText: '21922.59',
                  qNum: 21922.59,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '55342.56',
                  qNum: 55342.56,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Nesquehoning',
                  qNum: 'NaN',
                  qElemNumber: 108,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Nesquehoning',
                        qElemNo: 108,
                      },
                    ],
                  },
                },
                {
                  qText: '6946.35',
                  qNum: 6946.349999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '52331.11',
                  qNum: 52331.11,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Billings',
                  qNum: 'NaN',
                  qElemNumber: 42,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Billings',
                        qElemNo: 42,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '52313.29',
                  qNum: 52313.28999999997,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Lewiston',
                  qNum: 'NaN',
                  qElemNumber: 168,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Lewiston',
                        qElemNo: 168,
                      },
                    ],
                  },
                },
                {
                  qText: '40691.43',
                  qNum: 40691.43000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '51516.36',
                  qNum: 51516.35999999995,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Springfield',
                  qNum: 'NaN',
                  qElemNumber: 113,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Springfield',
                        qElemNo: 113,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '51429.14',
                  qNum: 51429.14000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Waterville',
                  qNum: 'NaN',
                  qElemNumber: 225,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Waterville',
                        qElemNo: 225,
                      },
                    ],
                  },
                },
                {
                  qText: '44800.41',
                  qNum: 44800.41,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '51337.69',
                  qNum: 51337.690000000024,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Johnson City',
                  qNum: 'NaN',
                  qElemNumber: 105,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Johnson City',
                        qElemNo: 105,
                      },
                    ],
                  },
                },
                {
                  qText: '3686.21',
                  qNum: 3686.21,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '50996.25',
                  qNum: 50996.250000000015,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Bedford',
                  qNum: 'NaN',
                  qElemNumber: 109,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Bedford',
                        qElemNo: 109,
                      },
                    ],
                  },
                },
                {
                  qText: '29078.77',
                  qNum: 29078.769999999993,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '50140.8',
                  qNum: 50140.80000000005,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Evansville',
                  qNum: 'NaN',
                  qElemNumber: 161,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Evansville',
                        qElemNo: 161,
                      },
                    ],
                  },
                },
                {
                  qText: '30064.54',
                  qNum: 30064.539999999994,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '49756.68',
                  qNum: 49756.68,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Corona',
                  qNum: 'NaN',
                  qElemNumber: 64,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Corona',
                        qElemNo: 64,
                      },
                    ],
                  },
                },
                {
                  qText: '3620.46',
                  qNum: 3620.46,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '49222.52',
                  qNum: 49222.51999999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Depere',
                  qNum: 'NaN',
                  qElemNumber: 76,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Depere',
                        qElemNo: 76,
                      },
                    ],
                  },
                },
                {
                  qText: '10747.73',
                  qNum: 10747.73,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '46782.27',
                  qNum: 46782.270000000004,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Springhill',
                  qNum: 'NaN',
                  qElemNumber: 227,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Springhill',
                        qElemNo: 227,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '43495.53',
                  qNum: 43495.530000000006,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Framingham',
                  qNum: 'NaN',
                  qElemNumber: 247,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Framingham',
                        qElemNo: 247,
                      },
                    ],
                  },
                },
                {
                  qText: '42845.77',
                  qNum: 42845.77,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '42845.77',
                  qNum: 42845.770000000004,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Shreveport',
                  qNum: 'NaN',
                  qElemNumber: 18,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Shreveport',
                        qElemNo: 18,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '42603.89',
                  qNum: 42603.89,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Spring',
                  qNum: 'NaN',
                  qElemNumber: 192,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Spring',
                        qElemNo: 192,
                      },
                    ],
                  },
                },
                {
                  qText: '42178.8',
                  qNum: 42178.799999999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '42271.75',
                  qNum: 42271.75,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Ft Collins',
                  qNum: 'NaN',
                  qElemNumber: 58,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Ft Collins',
                        qElemNo: 58,
                      },
                    ],
                  },
                },
                {
                  qText: '31036.57',
                  qNum: 31036.57,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '40189.5',
                  qNum: 40189.49999999998,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Amarillo',
                  qNum: 'NaN',
                  qElemNumber: 120,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Amarillo',
                        qElemNo: 120,
                      },
                    ],
                  },
                },
                {
                  qText: '188.92',
                  qNum: 188.92000000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '39739.84',
                  qNum: 39739.83999999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Warren',
                  qNum: 'NaN',
                  qElemNumber: 90,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Warren',
                        qElemNo: 90,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '39719.95',
                  qNum: 39719.95000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Augusta',
                  qNum: 'NaN',
                  qElemNumber: 146,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Augusta',
                        qElemNo: 146,
                      },
                    ],
                  },
                },
                {
                  qText: '38120.57',
                  qNum: 38120.56999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '38262.16',
                  qNum: 38262.159999999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Hammond',
                  qNum: 'NaN',
                  qElemNumber: 128,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Hammond',
                        qElemNo: 128,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '37340.02',
                  qNum: 37340.01999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Ormond Beach',
                  qNum: 'NaN',
                  qElemNumber: 185,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Ormond Beach',
                        qElemNo: 185,
                      },
                    ],
                  },
                },
                {
                  qText: '1258.21',
                  qNum: 1258.21,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '37199.3',
                  qNum: 37199.29999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Shawano',
                  qNum: 'NaN',
                  qElemNumber: 205,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Shawano',
                        qElemNo: 205,
                      },
                    ],
                  },
                },
                {
                  qText: '15627.81',
                  qNum: 15627.810000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '37166.88',
                  qNum: 37166.87999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Pontiac',
                  qNum: 'NaN',
                  qElemNumber: 61,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Pontiac',
                        qElemNo: 61,
                      },
                    ],
                  },
                },
                {
                  qText: '11825.08',
                  qNum: 11825.079999999998,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '32778.34',
                  qNum: 32778.34000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Villa Rica',
                  qNum: 'NaN',
                  qElemNumber: 133,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Villa Rica',
                        qElemNo: 133,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '32510.88',
                  qNum: 32510.880000000005,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'El Cajon',
                  qNum: 'NaN',
                  qElemNumber: 256,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'El Cajon',
                        qElemNo: 256,
                      },
                    ],
                  },
                },
                {
                  qText: '22397.68',
                  qNum: 22397.68,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '32379.18',
                  qNum: 32379.179999999986,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Ocala',
                  qNum: 'NaN',
                  qElemNumber: 183,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Ocala',
                        qElemNo: 183,
                      },
                    ],
                  },
                },
                {
                  qText: '13543.38',
                  qNum: 13543.380000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '32328.9',
                  qNum: 32328.9,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Missoula',
                  qNum: 'NaN',
                  qElemNumber: 94,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Missoula',
                        qElemNo: 94,
                      },
                    ],
                  },
                },
                {
                  qText: '14893.21',
                  qNum: 14893.21,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '31590.76',
                  qNum: 31590.760000000013,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Modesto',
                  qNum: 'NaN',
                  qElemNumber: 92,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Modesto',
                        qElemNo: 92,
                      },
                    ],
                  },
                },
                {
                  qText: '29870.65',
                  qNum: 29870.65,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '30575.93',
                  qNum: 30575.930000000004,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Traverse City',
                  qNum: 'NaN',
                  qElemNumber: 155,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Traverse City',
                        qElemNo: 155,
                      },
                    ],
                  },
                },
                {
                  qText: '2626.43',
                  qNum: 2626.4300000000003,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '28563.59',
                  qNum: 28563.590000000007,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Milton',
                  qNum: 'NaN',
                  qElemNumber: 137,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Milton',
                        qElemNo: 137,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '27063.06',
                  qNum: 27063.05999999998,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Wheatridge',
                  qNum: 'NaN',
                  qElemNumber: 127,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Wheatridge',
                        qElemNo: 127,
                      },
                    ],
                  },
                },
                {
                  qText: '26362.19',
                  qNum: 26362.19,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '26881.48',
                  qNum: 26881.47999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'St Joseph',
                  qNum: 'NaN',
                  qElemNumber: 199,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'St Joseph',
                        qElemNo: 199,
                      },
                    ],
                  },
                },
                {
                  qText: '10423.16',
                  qNum: 10423.16,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '25604.11',
                  qNum: 25604.11,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Rexburg',
                  qNum: 'NaN',
                  qElemNumber: 158,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Rexburg',
                        qElemNo: 158,
                      },
                    ],
                  },
                },
                {
                  qText: '8983.12',
                  qNum: 8983.12,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '25159.1',
                  qNum: 25159.100000000006,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Okarche',
                  qNum: 'NaN',
                  qElemNumber: 249,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Okarche',
                        qElemNo: 249,
                      },
                    ],
                  },
                },
                {
                  qText: '22134.18',
                  qNum: 22134.18,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '23398.84',
                  qNum: 23398.840000000007,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Colorado Springs',
                  qNum: 'NaN',
                  qElemNumber: 99,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Colorado Springs',
                        qElemNo: 99,
                      },
                    ],
                  },
                },
                {
                  qText: '19319.17',
                  qNum: 19319.170000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '23244.64',
                  qNum: 23244.63999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Fresno',
                  qNum: 'NaN',
                  qElemNumber: 213,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Fresno',
                        qElemNo: 213,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '22909.17',
                  qNum: 22909.170000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Stewartsville',
                  qNum: 'NaN',
                  qElemNumber: 202,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Stewartsville',
                        qElemNo: 202,
                      },
                    ],
                  },
                },
                {
                  qText: '4445.36',
                  qNum: 4445.36,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '22820.61',
                  qNum: 22820.610000000004,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Frederick',
                  qNum: 'NaN',
                  qElemNumber: 191,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Frederick',
                        qElemNo: 191,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '22638.11',
                  qNum: 22638.11,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Creedmoor',
                  qNum: 'NaN',
                  qElemNumber: 123,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Creedmoor',
                        qElemNo: 123,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '22558.36',
                  qNum: 22558.36,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Lansing',
                  qNum: 'NaN',
                  qElemNumber: 164,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Lansing',
                        qElemNo: 164,
                      },
                    ],
                  },
                },
                {
                  qText: '22440.37',
                  qNum: 22440.37,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '22499.31',
                  qNum: 22499.310000000012,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Bensonville',
                  qNum: 'NaN',
                  qElemNumber: 138,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Bensonville',
                        qElemNo: 138,
                      },
                    ],
                  },
                },
                {
                  qText: '22301.23',
                  qNum: 22301.229999999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '22435.03',
                  qNum: 22435.02999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Buffalo',
                  qNum: 'NaN',
                  qElemNumber: 175,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Buffalo',
                        qElemNo: 175,
                      },
                    ],
                  },
                },
                {
                  qText: '936.66',
                  qNum: 936.66,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '22426.16',
                  qNum: 22426.16,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Holden',
                  qNum: 'NaN',
                  qElemNumber: 134,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Holden',
                        qElemNo: 134,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '22377.98',
                  qNum: 22377.979999999992,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Eau Claire',
                  qNum: 'NaN',
                  qElemNumber: 208,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Eau Claire',
                        qElemNo: 208,
                      },
                    ],
                  },
                },
                {
                  qText: '10706.41',
                  qNum: 10706.41,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '22365.42',
                  qNum: 22365.42,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Nashville',
                  qNum: 'NaN',
                  qElemNumber: 226,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Nashville',
                        qElemNo: 226,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '21942.66',
                  qNum: 21942.66,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Pine Bluff',
                  qNum: 'NaN',
                  qElemNumber: 65,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Pine Bluff',
                        qElemNo: 65,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '21687.44',
                  qNum: 21687.439999999995,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Tulare',
                  qNum: 'NaN',
                  qElemNumber: 251,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Tulare',
                        qElemNo: 251,
                      },
                    ],
                  },
                },
                {
                  qText: '21335.44',
                  qNum: 21335.44,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '21335.44',
                  qNum: 21335.440000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Mechanicsburg',
                  qNum: 'NaN',
                  qElemNumber: 171,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Mechanicsburg',
                        qElemNo: 171,
                      },
                    ],
                  },
                },
                {
                  qText: '15212.25',
                  qNum: 15212.25,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '20386.99',
                  qNum: 20386.989999999987,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Attica',
                  qNum: 'NaN',
                  qElemNumber: 173,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Attica',
                        qElemNo: 173,
                      },
                    ],
                  },
                },
                {
                  qText: '20114.12',
                  qNum: 20114.120000000003,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '20114.12',
                  qNum: 20114.12,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'North Hampton',
                  qNum: 'NaN',
                  qElemNumber: 221,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'North Hampton',
                        qElemNo: 221,
                      },
                    ],
                  },
                },
                {
                  qText: '18815.87',
                  qNum: 18815.870000000003,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '18815.87',
                  qNum: 18815.86999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'West Point',
                  qNum: 'NaN',
                  qElemNumber: 203,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'West Point',
                        qElemNo: 203,
                      },
                    ],
                  },
                },
                {
                  qText: '15636.36',
                  qNum: 15636.36,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '18636.56',
                  qNum: 18636.559999999998,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Richmond',
                  qNum: 'NaN',
                  qElemNumber: 163,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Richmond',
                        qElemNo: 163,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '17717.73',
                  qNum: 17717.729999999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Huntington Beach',
                  qNum: 'NaN',
                  qElemNumber: 178,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Huntington Beach',
                        qElemNo: 178,
                      },
                    ],
                  },
                },
                {
                  qText: '72.94',
                  qNum: 72.94,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '16468.73',
                  qNum: 16468.729999999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Des Moines',
                  qNum: 'NaN',
                  qElemNumber: 236,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Des Moines',
                        qElemNo: 236,
                      },
                    ],
                  },
                },
                {
                  qText: '10850.3',
                  qNum: 10850.300000000003,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '15834.1',
                  qNum: 15834.100000000006,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Glen Burnie',
                  qNum: 'NaN',
                  qElemNumber: 244,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Glen Burnie',
                        qElemNo: 244,
                      },
                    ],
                  },
                },
                {
                  qText: '15817.24',
                  qNum: 15817.240000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '15817.24',
                  qNum: 15817.239999999994,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Monroe',
                  qNum: 'NaN',
                  qElemNumber: 150,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Monroe',
                        qElemNo: 150,
                      },
                    ],
                  },
                },
                {
                  qText: '63.94',
                  qNum: 63.940000000000005,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '15640.42',
                  qNum: 15640.42,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Oakland',
                  qNum: 'NaN',
                  qElemNumber: 116,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Oakland',
                        qElemNo: 116,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '14295.62',
                  qNum: 14295.62,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Whitehouse',
                  qNum: 'NaN',
                  qElemNumber: 33,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Whitehouse',
                        qElemNo: 33,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '14109.47',
                  qNum: 14109.469999999998,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'St Louis',
                  qNum: 'NaN',
                  qElemNumber: 215,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'St Louis',
                        qElemNo: 215,
                      },
                    ],
                  },
                },
                {
                  qText: '14070.27',
                  qNum: 14070.27,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '14074.16',
                  qNum: 14074.16,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Bozeman',
                  qNum: 'NaN',
                  qElemNumber: 181,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Bozeman',
                        qElemNo: 181,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '13316.53',
                  qNum: 13316.53,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Beaumont',
                  qNum: 'NaN',
                  qElemNumber: 261,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Beaumont',
                        qElemNo: 261,
                      },
                    ],
                  },
                },
                {
                  qText: '4636.31',
                  qNum: 4636.3099999999995,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '12794.2',
                  qNum: 12794.199999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Cincinnati',
                  qNum: 'NaN',
                  qElemNumber: 130,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Cincinnati',
                        qElemNo: 130,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '11877.35',
                  qNum: 11877.35,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Stockton',
                  qNum: 'NaN',
                  qElemNumber: 153,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Stockton',
                        qElemNo: 153,
                      },
                    ],
                  },
                },
                {
                  qText: '1290.55',
                  qNum: 1290.55,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '11764.19',
                  qNum: 11764.19,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Wayne',
                  qNum: 'NaN',
                  qElemNumber: 104,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Wayne',
                        qElemNo: 104,
                      },
                    ],
                  },
                },
                {
                  qText: '11293.76',
                  qNum: 11293.760000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '11293.76',
                  qNum: 11293.760000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Vinton',
                  qNum: 'NaN',
                  qElemNumber: 147,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Vinton',
                        qElemNo: 147,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '11096.46',
                  qNum: 11096.460000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Brookhaven',
                  qNum: 'NaN',
                  qElemNumber: 253,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Brookhaven',
                        qElemNo: 253,
                      },
                    ],
                  },
                },
                {
                  qText: '1228.56',
                  qNum: 1228.56,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '10986.66',
                  qNum: 10986.66,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Waldorf',
                  qNum: 'NaN',
                  qElemNumber: 209,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Waldorf',
                        qElemNo: 209,
                      },
                    ],
                  },
                },
                {
                  qText: '10849.97',
                  qNum: 10849.970000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '10849.97',
                  qNum: 10849.970000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Middlebury',
                  qNum: 'NaN',
                  qElemNumber: 266,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Middlebury',
                        qElemNo: 266,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '10684.23',
                  qNum: 10684.23,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Chippewa Falls',
                  qNum: 'NaN',
                  qElemNumber: 169,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Chippewa Falls',
                        qElemNo: 169,
                      },
                    ],
                  },
                },
                {
                  qText: '9312.48',
                  qNum: 9312.480000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '10281.3',
                  qNum: 10281.299999999996,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Montgomery',
                  qNum: 'NaN',
                  qElemNumber: 204,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Montgomery',
                        qElemNo: 204,
                      },
                    ],
                  },
                },
                {
                  qText: '1469.37',
                  qNum: 1469.3700000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '9967.17',
                  qNum: 9967.17,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Salem',
                  qNum: 'NaN',
                  qElemNumber: 97,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Salem',
                        qElemNo: 97,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '9708.34',
                  qNum: 9708.34,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Andover',
                  qNum: 'NaN',
                  qElemNumber: 111,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Andover',
                        qElemNo: 111,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '9364.57',
                  qNum: 9364.570000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Moline',
                  qNum: 'NaN',
                  qElemNumber: 114,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Moline',
                        qElemNo: 114,
                      },
                    ],
                  },
                },
                {
                  qText: '9255.27',
                  qNum: 9255.27,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '9263.05',
                  qNum: 9263.049999999997,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Aurora',
                  qNum: 'NaN',
                  qElemNumber: 194,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Aurora',
                        qElemNo: 194,
                      },
                    ],
                  },
                },
                {
                  qText: '4642.22',
                  qNum: 4642.219999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '9159.07',
                  qNum: 9159.07,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Shelby',
                  qNum: 'NaN',
                  qElemNumber: 260,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Shelby',
                        qElemNo: 260,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '9097.17',
                  qNum: 9097.17,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Garner',
                  qNum: 'NaN',
                  qElemNumber: 216,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Garner',
                        qElemNo: 216,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '8442.4',
                  qNum: 8442.399999999998,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Gardena',
                  qNum: 'NaN',
                  qElemNumber: 180,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Gardena',
                        qElemNo: 180,
                      },
                    ],
                  },
                },
                {
                  qText: '3206.25',
                  qNum: 3206.25,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '7665.12',
                  qNum: 7665.120000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Okolona',
                  qNum: 'NaN',
                  qElemNumber: 229,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Okolona',
                        qElemNo: 229,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '7531.44',
                  qNum: 7531.439999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'St. Cloud',
                  qNum: 'NaN',
                  qElemNumber: 245,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'St. Cloud',
                        qElemNo: 245,
                      },
                    ],
                  },
                },
                {
                  qText: '6872.37',
                  qNum: 6872.37,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '6640.2',
                  qNum: 6640.199999999995,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Somerset',
                  qNum: 'NaN',
                  qElemNumber: 223,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Somerset',
                        qElemNo: 223,
                      },
                    ],
                  },
                },
                {
                  qText: '2379.7',
                  qNum: 2379.7,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '6628.08',
                  qNum: 6628.080000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Indianapolis',
                  qNum: 'NaN',
                  qElemNumber: 188,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Indianapolis',
                        qElemNo: 188,
                      },
                    ],
                  },
                },
                {
                  qText: '1538.45',
                  qNum: 1538.45,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '6360.4',
                  qNum: 6360.4,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Enumclaw',
                  qNum: 'NaN',
                  qElemNumber: 219,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Enumclaw',
                        qElemNo: 219,
                      },
                    ],
                  },
                },
                {
                  qText: '6121.4',
                  qNum: 6121.400000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '6158.95',
                  qNum: 6158.950000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Valparaiso',
                  qNum: 'NaN',
                  qElemNumber: 190,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Valparaiso',
                        qElemNo: 190,
                      },
                    ],
                  },
                },
                {
                  qText: '5841.5',
                  qNum: 5841.5,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '5841.5',
                  qNum: 5841.5,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'New Hampton',
                  qNum: 'NaN',
                  qElemNumber: 8,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'New Hampton',
                        qElemNo: 8,
                      },
                    ],
                  },
                },
                {
                  qText: '1581.08',
                  qNum: 1581.08,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '5739.45',
                  qNum: 5739.450000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Laurel',
                  qNum: 'NaN',
                  qElemNumber: 189,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Laurel',
                        qElemNo: 189,
                      },
                    ],
                  },
                },
                {
                  qText: '4689.98',
                  qNum: 4689.9800000000005,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '5039.63',
                  qNum: 5039.629999999999,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Manassas',
                  qNum: 'NaN',
                  qElemNumber: 37,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Manassas',
                        qElemNo: 37,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '4827.56',
                  qNum: 4827.56,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Benicia',
                  qNum: 'NaN',
                  qElemNumber: 89,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Benicia',
                        qElemNo: 89,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '4618.44',
                  qNum: 4618.4400000000005,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Brea',
                  qNum: 'NaN',
                  qElemNumber: 82,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Brea',
                        qElemNo: 82,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '4291.71',
                  qNum: 4291.71,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Raleigh',
                  qNum: 'NaN',
                  qElemNumber: 259,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Raleigh',
                        qElemNo: 259,
                      },
                    ],
                  },
                },
                {
                  qText: '2584.73',
                  qNum: 2584.73,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '3197.54',
                  qNum: 3197.54,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Mechanicsville',
                  qNum: 'NaN',
                  qElemNumber: 197,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Mechanicsville',
                        qElemNo: 197,
                      },
                    ],
                  },
                },
                {
                  qText: '2250.49',
                  qNum: 2250.49,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '2955.57',
                  qNum: 2955.5699999999997,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Trinity Center',
                  qNum: 'NaN',
                  qElemNumber: 200,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Trinity Center',
                        qElemNo: 200,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '2436.77',
                  qNum: 2436.77,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Buda',
                  qNum: 'NaN',
                  qElemNumber: 255,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Buda',
                        qElemNo: 255,
                      },
                    ],
                  },
                },
                {
                  qText: '73.06',
                  qNum: 73.06,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '2237.81',
                  qNum: 2237.81,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Greenville',
                  qNum: 'NaN',
                  qElemNumber: 263,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Greenville',
                        qElemNo: 263,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1824.03',
                  qNum: 1824.03,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Hazelwood',
                  qNum: 'NaN',
                  qElemNumber: 269,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Hazelwood',
                        qElemNo: 269,
                      },
                    ],
                  },
                },
                {
                  qText: '-849.12',
                  qNum: -849.12,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1603',
                  qNum: 1603,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Orlando',
                  qNum: 'NaN',
                  qElemNumber: 270,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Orlando',
                        qElemNo: 270,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1538.4',
                  qNum: 1538.4,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Shady Grove',
                  qNum: 'NaN',
                  qElemNumber: 115,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Shady Grove',
                        qElemNo: 115,
                      },
                    ],
                  },
                },
                {
                  qText: '606.37',
                  qNum: 606.37,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1520.65',
                  qNum: 1520.65,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Casper',
                  qNum: 'NaN',
                  qElemNumber: 140,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Casper',
                        qElemNo: 140,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1489.31',
                  qNum: 1489.31,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Placentia',
                  qNum: 'NaN',
                  qElemNumber: 139,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Placentia',
                        qElemNo: 139,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1322.27',
                  qNum: 1322.2700000000002,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Ooltewah',
                  qNum: 'NaN',
                  qElemNumber: 264,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Ooltewah',
                        qElemNo: 264,
                      },
                    ],
                  },
                },
                {
                  qText: '70.91',
                  qNum: 70.91,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1255.32',
                  qNum: 1255.32,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Gretna',
                  qNum: 'NaN',
                  qElemNumber: 230,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Gretna',
                        qElemNo: 230,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1114.23',
                  qNum: 1114.23,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Indianopolis',
                  qNum: 'NaN',
                  qElemNumber: 95,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Indianopolis',
                        qElemNo: 95,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '1108.98',
                  qNum: 1108.98,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Breckenridge',
                  qNum: 'NaN',
                  qElemNumber: 63,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Breckenridge',
                        qElemNo: 63,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '696.31',
                  qNum: 696.31,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Crestwood',
                  qNum: 'NaN',
                  qElemNumber: 220,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Crestwood',
                        qElemNo: 220,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '498.5',
                  qNum: 498.5,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Columbus',
                  qNum: 'NaN',
                  qElemNumber: 57,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Columbus',
                        qElemNo: 57,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '227.13',
                  qNum: 227.13,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Hermitage',
                  qNum: 'NaN',
                  qElemNumber: 231,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Hermitage',
                        qElemNo: 231,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '193.89',
                  qNum: 193.89000000000001,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Akron',
                  qNum: 'NaN',
                  qElemNumber: 265,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Akron',
                        qElemNo: 265,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '178.71',
                  qNum: 178.71,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Duluth',
                  qNum: 'NaN',
                  qElemNumber: 85,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Duluth',
                        qElemNo: 85,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '106.36',
                  qNum: 106.36,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Redding',
                  qNum: 'NaN',
                  qElemNumber: 237,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Redding',
                        qElemNo: 237,
                      },
                    ],
                  },
                },
                {
                  qText: '32.47',
                  qNum: 32.47,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '32.47',
                  qNum: 32.47,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Philadelphia',
                  qNum: 'NaN',
                  qElemNumber: 156,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Philadelphia',
                        qElemNo: 156,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '27.66',
                  qNum: 27.66,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Alexandria',
                  qNum: 'NaN',
                  qElemNumber: 162,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Alexandria',
                        qElemNo: 162,
                      },
                    ],
                  },
                },
                {
                  qText: '8.11',
                  qNum: 8.11,
                  qElemNumber: 0,
                  qState: 'L',
                },
                {
                  qText: '8.11',
                  qNum: 8.11,
                  qElemNumber: 0,
                  qState: 'L',
                },
              ],
              [
                {
                  qText: 'Bremorton',
                  qNum: 'NaN',
                  qElemNumber: 267,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Bremorton',
                        qElemNo: 267,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
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
              [
                {
                  qText: 'Burnsville',
                  qNum: 'NaN',
                  qElemNumber: 262,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Burnsville',
                        qElemNo: 262,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
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
              [
                {
                  qText: 'Farmington',
                  qNum: 'NaN',
                  qElemNumber: 176,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Farmington',
                        qElemNo: 176,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
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
              [
                {
                  qText: 'Fort Collins',
                  qNum: 'NaN',
                  qElemNumber: 88,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Fort Collins',
                        qElemNo: 88,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
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
              [
                {
                  qText: 'Fredericksburg',
                  qNum: 'NaN',
                  qElemNumber: 233,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Fredericksburg',
                        qElemNo: 233,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
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
              [
                {
                  qText: 'Ham Lake',
                  qNum: 'NaN',
                  qElemNumber: 257,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Ham Lake',
                        qElemNo: 257,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
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
              [
                {
                  qText: 'Hodgdon',
                  qNum: 'NaN',
                  qElemNumber: 182,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Hodgdon',
                        qElemNo: 182,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
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
              [
                {
                  qText: 'Morgantown',
                  qNum: 'NaN',
                  qElemNumber: 268,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Morgantown',
                        qElemNo: 268,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
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
              [
                {
                  qText: 'Newport',
                  qNum: 'NaN',
                  qElemNumber: 211,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Newport',
                        qElemNo: 211,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
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
              [
                {
                  qText: 'Oak Ridge',
                  qNum: 'NaN',
                  qElemNumber: 160,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Oak Ridge',
                        qElemNo: 160,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
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
              [
                {
                  qText: 'San Antonio',
                  qNum: 'NaN',
                  qElemNumber: 141,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'San Antonio',
                        qElemNo: 141,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
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
              [
                {
                  qText: 'Tonawanda',
                  qNum: 'NaN',
                  qElemNumber: 212,
                  qState: 'O',
                  qAttrDims: {
                    qValues: [
                      {
                        qText: 'Tonawanda',
                        qElemNo: 212,
                      },
                    ],
                  },
                },
                {
                  qText: '0',
                  qNum: 0,
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
              qHeight: 271,
            },
          },
        ],
        visualizationType: 'sn-scatter-plot',
        sourceObjectId: 'GsqMp',
        sheetId: '31153314-9e26-469c-a8c0-048d038a59c0',
        timestamp: 1643889420909,
        isClone: false,
        supportExport: true,
      },
      getHyperCubeData: [],
      getEffectiveProperties: {},
    },
  ],
});
