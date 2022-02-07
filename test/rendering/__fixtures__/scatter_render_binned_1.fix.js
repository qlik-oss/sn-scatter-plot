export default () => ({
  type: 'sn-scatter-plot',
  genericObjects: [
    {
      getLayout: {
        qInfo: {
          qType: 'sn-scatter-plot',
          qId: 'hej',
        },
        qMetaDef: {
          title: '',
          description: '',
        },
        creationDate: '2022-02-01T12:47:04.519Z',
        qMeta: {
          privileges: ['read', 'update', 'delete', 'exportdata'],
        },
        qSelectionInfo: {},
        qHyperCube: {
          qSize: {
            qcx: 3,
            qcy: 7942,
          },
          qDimensionInfo: [
            {
              qFallbackTitle: 'A Product (1)',
              qApprMaxGlyphCount: 48,
              qCardinal: 7942,
              qSortIndicator: 'A',
              qGroupFallbackTitles: ['A Product (1)'],
              qGroupPos: 0,
              qStateCounts: {
                qLocked: 0,
                qSelected: 0,
                qOption: 7942,
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
                qType: 'U',
                qnDec: 0,
                qUseThou: 0,
              },
              qIsAutoFormat: true,
              qGroupFieldDefs: ['Line Desc 1'],
              qMin: 'NaN',
              qMax: 'NaN',
              qAttrExprInfo: [],
              qAttrDimInfo: [],
              qCardinalities: {
                qCardinal: 7942,
                qHypercubeCardinal: 7942,
                qAllValuesCardinal: -1,
              },
              qLibraryId: '71ee0359-1f6a-4332-9f67-521673cec677',
              title: 'A Product (1)',
              coloring: {
                colorMapRef: '71ee0359-1f6a-4332-9f67-521673cec677',
                changeHash: '0.954331662462419',
              },
              autoSort: true,
              cId: 'Tbme',
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
              qMax: 31027222.339999925,
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
              qMin: -20456.23,
              qMax: 5295622.910000008,
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
        title: 'This is the title',
        subtitle: 'This is the subtitle',
        footnote: 'This is the footnote',
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

        visualizationType: 'sn-scatter-plot',
        sourceObjectId: 'GsqMp',
        sheetId: '31153314-9e26-469c-a8c0-048d038a59c0',
        timestamp: 1643719624511,
        isClone: false,
        supportExport: true,
      },
      getHyperCubeBinnedData: [
        {
          qMatrix: [
            [
              {
                qNum: 5976,
                qElemNumber: 0,
                qState: 'L',
              },
            ],
            [
              {
                qText: [30542408.723437, 228734.979688, 31027222.34, 145671.243125],
                qNum: 1,
                qElemNumber: 8183,
                qState: 'L',
              },
            ],
            [
              {
                qText: [24239831.708125, 145671.243125, 24724645.324687, 62607.506563],
                qNum: 1,
                qElemNumber: 8108,
                qState: 'L',
              },
            ],
            [
              {
                qText: [30542408.723437, 145671.243125, 31027222.34, 62607.506563],
                qNum: 1,
                qElemNumber: 8189,
                qState: 'L',
              },
            ],
            [
              {
                qText: [30057595.106875, 62607.506563, 30542408.723437, -20456.23],
                qNum: 1,
                qElemNumber: 8190,
                qState: 'L',
              },
            ],
            [
              {
                qText: [21815763.625312, 311798.71625, 22300577.241875, 228734.979688],
                qNum: 1,
                qElemNumber: 7921,
                qState: 'L',
              },
            ],
            [
              {
                qText: [19391695.5425, 311798.71625, 19876509.159062, 228734.979688],
                qNum: 2,
                qElemNumber: 7904,
                qState: 'L',
              },
            ],
            [
              {
                qText: [20361322.775625, 145671.243125, 20846136.392187, 62607.506563],
                qNum: 1,
                qElemNumber: 7916,
                qState: 'L',
              },
            ],
            [
              {
                qText: [20846136.392187, 62607.506563, 21330950.00875, -20456.23],
                qNum: 1,
                qElemNumber: 7919,
                qState: 'L',
              },
            ],
            [
              {
                qText: [21815763.625312, 62607.506563, 22300577.241875, -20456.23],
                qNum: 1,
                qElemNumber: 7931,
                qState: 'L',
              },
            ],
            [
              {
                qText: [20361322.775625, 62607.506563, 20846136.392187, -20456.23],
                qNum: 1,
                qElemNumber: 7918,
                qState: 'L',
              },
            ],
            [
              {
                qText: [17937254.692812, 311798.71625, 18422068.309375, 228734.979688],
                qNum: 1,
                qElemNumber: 7857,
                qState: 'L',
              },
            ],
            [
              {
                qText: [17452441.07625, 311798.71625, 17937254.692812, 228734.979688],
                qNum: 1,
                qElemNumber: 7856,
                qState: 'L',
              },
            ],
            [
              {
                qText: [18906881.925937, 311798.71625, 19391695.5425, 228734.979688],
                qNum: 1,
                qElemNumber: 7861,
                qState: 'L',
              },
            ],
            [
              {
                qText: [18422068.309375, 228734.979688, 18906881.925937, 145671.243125],
                qNum: 1,
                qElemNumber: 7862,
                qState: 'L',
              },
            ],
            [
              {
                qText: [17937254.692812, 145671.243125, 18422068.309375, 62607.506563],
                qNum: 1,
                qElemNumber: 7865,
                qState: 'L',
              },
            ],
            [
              {
                qText: [18906881.925937, 62607.506563, 19391695.5425, -20456.23],
                qNum: 2,
                qElemNumber: 7871,
                qState: 'L',
              },
            ],
            [
              {
                qText: [18422068.309375, 62607.506563, 18906881.925937, -20456.23],
                qNum: 2,
                qElemNumber: 7870,
                qState: 'L',
              },
            ],
            [
              {
                qText: [17452441.07625, 62607.506563, 17937254.692812, -20456.23],
                qNum: 1,
                qElemNumber: 7866,
                qState: 'L',
              },
            ],
            [
              {
                qText: [16482813.843125, 228734.979688, 16967627.459687, 145671.243125],
                qNum: 1,
                qElemNumber: 7846,
                qState: 'L',
              },
            ],
            [
              {
                qText: [16967627.459687, 228734.979688, 17452441.07625, 145671.243125],
                qNum: 2,
                qElemNumber: 7847,
                qState: 'L',
              },
            ],
            [
              {
                qText: [16967627.459687, 145671.243125, 17452441.07625, 62607.506563],
                qNum: 1,
                qElemNumber: 7853,
                qState: 'L',
              },
            ],
            [
              {
                qText: [15998000.226562, 145671.243125, 16482813.843125, 62607.506563],
                qNum: 1,
                qElemNumber: 7849,
                qState: 'L',
              },
            ],
            [
              {
                qText: [15513186.61, 62607.506563, 15998000.226562, -20456.23],
                qNum: 4,
                qElemNumber: 7850,
                qState: 'L',
              },
            ],
            [
              {
                qText: [16967627.459687, 62607.506563, 17452441.07625, -20456.23],
                qNum: 1,
                qElemNumber: 7855,
                qState: 'L',
              },
            ],
            [
              {
                qText: [15998000.226562, 62607.506563, 16482813.843125, -20456.23],
                qNum: 3,
                qElemNumber: 7851,
                qState: 'L',
              },
            ],
            [
              {
                qText: [16482813.843125, 62607.506563, 16967627.459687, -20456.23],
                qNum: 1,
                qElemNumber: 7854,
                qState: 'L',
              },
            ],
            [
              {
                qText: [15998000.226562, 560989.925938, 16482813.843125, 477926.189375],
                qNum: 1,
                qElemNumber: 7811,
                qState: 'L',
              },
            ],
            [
              {
                qText: [17452441.07625, 1308563.555, 17937254.692812, 1225499.818438],
                qNum: 1,
                qElemNumber: 7696,
                qState: 'L',
              },
            ],
            [
              {
                qText: [15513186.61, 893244.872188, 15998000.226562, 810181.135625],
                qNum: 1,
                qElemNumber: 7714,
                qState: 'L',
              },
            ],
            [
              {
                qText: [18906881.925937, 810181.135625, 19391695.5425, 727117.399063],
                qNum: 1,
                qElemNumber: 7741,
                qState: 'L',
              },
            ],
            [
              {
                qText: [17452441.07625, 2056137.184063, 17937254.692812, 1973073.4475],
                qNum: 1,
                qElemNumber: 7226,
                qState: 'L',
              },
            ],
            [
              {
                qText: [16967627.459687, 1973073.4475, 17452441.07625, 1890009.710938],
                qNum: 1,
                qElemNumber: 7301,
                qState: 'L',
              },
            ],
            [
              {
                qText: [18906881.925937, 1973073.4475, 19391695.5425, 1890009.710938],
                qNum: 1,
                qElemNumber: 7317,
                qState: 'L',
              },
            ],
            [
              {
                qText: [15513186.61, 1723882.237813, 15998000.226562, 1640818.50125],
                qNum: 1,
                qElemNumber: 7306,
                qState: 'L',
              },
            ],
            [
              {
                qText: [18422068.309375, 1557754.764688, 18906881.925937, 1474691.028125],
                qNum: 1,
                qElemNumber: 7350,
                qState: 'L',
              },
            ],
            [
              {
                qText: [20361322.775625, 1474691.028125, 20846136.392187, 1391627.291563],
                qNum: 1,
                qElemNumber: 7404,
                qState: 'L',
              },
            ],
            [
              {
                qText: [14543559.376875, 145671.243125, 15028372.993437, 62607.506563],
                qNum: 1,
                qElemNumber: 7164,
                qState: 'L',
              },
            ],
            [
              {
                qText: [15028372.993437, 145671.243125, 15513186.61, 62607.506563],
                qNum: 1,
                qElemNumber: 7165,
                qState: 'L',
              },
            ],
            [
              {
                qText: [14543559.376875, 62607.506563, 15028372.993437, -20456.23],
                qNum: 3,
                qElemNumber: 7166,
                qState: 'L',
              },
            ],
            [
              {
                qText: [15028372.993437, 62607.506563, 15513186.61, -20456.23],
                qNum: 3,
                qElemNumber: 7167,
                qState: 'L',
              },
            ],
            [
              {
                qText: [14058745.760312, 145671.243125, 14543559.376875, 62607.506563],
                qNum: 3,
                qElemNumber: 7161,
                qState: 'L',
              },
            ],
            [
              {
                qText: [14058745.760312, 62607.506563, 14543559.376875, -20456.23],
                qNum: 4,
                qElemNumber: 7163,
                qState: 'L',
              },
            ],
            [
              {
                qText: [13573932.14375, 62607.506563, 14058745.760312, -20456.23],
                qNum: 3,
                qElemNumber: 7162,
                qState: 'L',
              },
            ],
            [
              {
                qText: [14543559.376875, 228734.979688, 15028372.993437, 145671.243125],
                qNum: 2,
                qElemNumber: 7158,
                qState: 'L',
              },
            ],
            [
              {
                qText: [13573932.14375, 311798.71625, 14058745.760312, 228734.979688],
                qNum: 2,
                qElemNumber: 7152,
                qState: 'L',
              },
            ],
            [
              {
                qText: [13573932.14375, 228734.979688, 14058745.760312, 145671.243125],
                qNum: 1,
                qElemNumber: 7154,
                qState: 'L',
              },
            ],
            [
              {
                qText: [12604304.910625, 145671.243125, 13089118.527187, 62607.506563],
                qNum: 3,
                qElemNumber: 7148,
                qState: 'L',
              },
            ],
            [
              {
                qText: [13089118.527187, 145671.243125, 13573932.14375, 62607.506563],
                qNum: 5,
                qElemNumber: 7149,
                qState: 'L',
              },
            ],
            [
              {
                qText: [12604304.910625, 62607.506563, 13089118.527187, -20456.23],
                qNum: 2,
                qElemNumber: 7150,
                qState: 'L',
              },
            ],
            [
              {
                qText: [13089118.527187, 62607.506563, 13573932.14375, -20456.23],
                qNum: 12,
                qElemNumber: 7151,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11634677.6775, 145671.243125, 12119491.294062, 62607.506563],
                qNum: 1,
                qElemNumber: 7144,
                qState: 'L',
              },
            ],
            [
              {
                qText: [12119491.294062, 145671.243125, 12604304.910625, 62607.506563],
                qNum: 3,
                qElemNumber: 7145,
                qState: 'L',
              },
            ],
            [
              {
                qText: [12119491.294062, 62607.506563, 12604304.910625, -20456.23],
                qNum: 5,
                qElemNumber: 7147,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11634677.6775, 62607.506563, 12119491.294062, -20456.23],
                qNum: 8,
                qElemNumber: 7146,
                qState: 'L',
              },
            ],
            [
              {
                qText: [13089118.527187, 311798.71625, 13573932.14375, 228734.979688],
                qNum: 2,
                qElemNumber: 7141,
                qState: 'L',
              },
            ],
            [
              {
                qText: [12604304.910625, 228734.979688, 13089118.527187, 145671.243125],
                qNum: 1,
                qElemNumber: 7142,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11634677.6775, 311798.71625, 12119491.294062, 228734.979688],
                qNum: 1,
                qElemNumber: 7136,
                qState: 'L',
              },
            ],
            [
              {
                qText: [12119491.294062, 311798.71625, 12604304.910625, 228734.979688],
                qNum: 1,
                qElemNumber: 7137,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11634677.6775, 228734.979688, 12119491.294062, 145671.243125],
                qNum: 1,
                qElemNumber: 7138,
                qState: 'L',
              },
            ],
            [
              {
                qText: [13573932.14375, 560989.925938, 14058745.760312, 477926.189375],
                qNum: 1,
                qElemNumber: 7122,
                qState: 'L',
              },
            ],
            [
              {
                qText: [14058745.760312, 477926.189375, 14543559.376875, 394862.452813],
                qNum: 1,
                qElemNumber: 7129,
                qState: 'L',
              },
            ],
            [
              {
                qText: [14543559.376875, 394862.452813, 15028372.993437, 311798.71625],
                qNum: 1,
                qElemNumber: 7134,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11634677.6775, 477926.189375, 12119491.294062, 394862.452813],
                qNum: 1,
                qElemNumber: 7112,
                qState: 'L',
              },
            ],
            [
              {
                qText: [10665050.444375, 145671.243125, 11149864.060937, 62607.506563],
                qNum: 2,
                qElemNumber: 7100,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11149864.060937, 145671.243125, 11634677.6775, 62607.506563],
                qNum: 8,
                qElemNumber: 7101,
                qState: 'L',
              },
            ],
            [
              {
                qText: [10665050.444375, 62607.506563, 11149864.060937, -20456.23],
                qNum: 11,
                qElemNumber: 7102,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11149864.060937, 62607.506563, 11634677.6775, -20456.23],
                qNum: 82,
                qElemNumber: 7103,
                qState: 'L',
              },
            ],
            [
              {
                qText: [9695423.21125, 145671.243125, 10180236.827812, 62607.506563],
                qNum: 1,
                qElemNumber: 7096,
                qState: 'L',
              },
            ],
            [
              {
                qText: [10180236.827812, 145671.243125, 10665050.444375, 62607.506563],
                qNum: 1,
                qElemNumber: 7097,
                qState: 'L',
              },
            ],
            [
              {
                qText: [9695423.21125, 62607.506563, 10180236.827812, -20456.23],
                qNum: 10,
                qElemNumber: 7098,
                qState: 'L',
              },
            ],
            [
              {
                qText: [10180236.827812, 62607.506563, 10665050.444375, -20456.23],
                qNum: 11,
                qElemNumber: 7099,
                qState: 'L',
              },
            ],
            [
              {
                qText: [10665050.444375, 228734.979688, 11149864.060937, 145671.243125],
                qNum: 2,
                qElemNumber: 7094,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11149864.060937, 228734.979688, 11634677.6775, 145671.243125],
                qNum: 3,
                qElemNumber: 7095,
                qState: 'L',
              },
            ],
            [
              {
                qText: [9695423.21125, 228734.979688, 10180236.827812, 145671.243125],
                qNum: 1,
                qElemNumber: 7090,
                qState: 'L',
              },
            ],
            [
              {
                qText: [10180236.827812, 228734.979688, 10665050.444375, 145671.243125],
                qNum: 1,
                qElemNumber: 7091,
                qState: 'L',
              },
            ],
            [
              {
                qText: [8725795.978125, 145671.243125, 9210609.594687, 62607.506563],
                qNum: 2,
                qElemNumber: 7084,
                qState: 'L',
              },
            ],
            [
              {
                qText: [9210609.594687, 145671.243125, 9695423.21125, 62607.506563],
                qNum: 3,
                qElemNumber: 7085,
                qState: 'L',
              },
            ],
            [
              {
                qText: [8725795.978125, 62607.506563, 9210609.594687, -20456.23],
                qNum: 10,
                qElemNumber: 7086,
                qState: 'L',
              },
            ],
            [
              {
                qText: [9210609.594687, 62607.506563, 9695423.21125, -20456.23],
                qNum: 20,
                qElemNumber: 7087,
                qState: 'L',
              },
            ],
            [
              {
                qText: [7756168.745, 145671.243125, 8240982.361562, 62607.506563],
                qNum: 4,
                qElemNumber: 7080,
                qState: 'L',
              },
            ],
            [
              {
                qText: [8240982.361562, 145671.243125, 8725795.978125, 62607.506563],
                qNum: 1,
                qElemNumber: 7081,
                qState: 'L',
              },
            ],
            [
              {
                qText: [7756168.745, 62607.506563, 8240982.361562, -20456.23],
                qNum: 29,
                qElemNumber: 7082,
                qState: 'L',
              },
            ],
            [
              {
                qText: [8240982.361562, 62607.506563, 8725795.978125, -20456.23],
                qNum: 22,
                qElemNumber: 7083,
                qState: 'L',
              },
            ],
            [
              {
                qText: [8725795.978125, 228734.979688, 9210609.594687, 145671.243125],
                qNum: 1,
                qElemNumber: 7078,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11149864.060937, 644053.6625, 11634677.6775, 560989.925938],
                qNum: 1,
                qElemNumber: 7061,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11149864.060937, 560989.925938, 11634677.6775, 477926.189375],
                qNum: 1,
                qElemNumber: 7063,
                qState: 'L',
              },
            ],
            [
              {
                qText: [9210609.594687, 644053.6625, 9695423.21125, 560989.925938],
                qNum: 1,
                qElemNumber: 7045,
                qState: 'L',
              },
            ],
            [
              {
                qText: [7756168.745, 560989.925938, 8240982.361562, 477926.189375],
                qNum: 1,
                qElemNumber: 7042,
                qState: 'L',
              },
            ],
            [
              {
                qText: [14058745.760312, 1308563.555, 14543559.376875, 1225499.818438],
                qNum: 1,
                qElemNumber: 6993,
                qState: 'L',
              },
            ],
            [
              {
                qText: [12604304.910625, 1059372.345313, 13089118.527187, 976308.60875],
                qNum: 1,
                qElemNumber: 6990,
                qState: 'L',
              },
            ],
            [
              {
                qText: [13573932.14375, 893244.872188, 14058745.760312, 810181.135625],
                qNum: 1,
                qElemNumber: 7026,
                qState: 'L',
              },
            ],
            [
              {
                qText: [12119491.294062, 893244.872188, 12604304.910625, 810181.135625],
                qNum: 1,
                qElemNumber: 7011,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11149864.060937, 1308563.555, 11634677.6775, 1225499.818438],
                qNum: 1,
                qElemNumber: 6933,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11149864.060937, 1225499.818438, 11634677.6775, 1142436.081875],
                qNum: 1,
                qElemNumber: 6935,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11149864.060937, 893244.872188, 11634677.6775, 810181.135625],
                qNum: 1,
                qElemNumber: 6967,
                qState: 'L',
              },
            ],
            [
              {
                qText: [7271355.128437, 145671.243125, 7756168.745, 62607.506563],
                qNum: 3,
                qElemNumber: 6909,
                qState: 'L',
              },
            ],
            [
              {
                qText: [6786541.511875, 62607.506563, 7271355.128437, -20456.23],
                qNum: 30,
                qElemNumber: 6910,
                qState: 'L',
              },
            ],
            [
              {
                qText: [7271355.128437, 62607.506563, 7756168.745, -20456.23],
                qNum: 27,
                qElemNumber: 6911,
                qState: 'L',
              },
            ],
            [
              {
                qText: [6301727.895312, 145671.243125, 6786541.511875, 62607.506563],
                qNum: 2,
                qElemNumber: 6905,
                qState: 'L',
              },
            ],
            [
              {
                qText: [5816914.27875, 62607.506563, 6301727.895312, -20456.23],
                qNum: 44,
                qElemNumber: 6906,
                qState: 'L',
              },
            ],
            [
              {
                qText: [6301727.895312, 62607.506563, 6786541.511875, -20456.23],
                qNum: 27,
                qElemNumber: 6907,
                qState: 'L',
              },
            ],
            [
              {
                qText: [4847287.045625, 145671.243125, 5332100.662187, 62607.506563],
                qNum: 1,
                qElemNumber: 6892,
                qState: 'L',
              },
            ],
            [
              {
                qText: [5332100.662187, 145671.243125, 5816914.27875, 62607.506563],
                qNum: 1,
                qElemNumber: 6893,
                qState: 'L',
              },
            ],
            [
              {
                qText: [4847287.045625, 62607.506563, 5332100.662187, -20456.23],
                qNum: 63,
                qElemNumber: 6894,
                qState: 'L',
              },
            ],
            [
              {
                qText: [5332100.662187, 62607.506563, 5816914.27875, -20456.23],
                qNum: 39,
                qElemNumber: 6895,
                qState: 'L',
              },
            ],
            [
              {
                qText: [3877659.8125, 145671.243125, 4362473.429062, 62607.506563],
                qNum: 2,
                qElemNumber: 6888,
                qState: 'L',
              },
            ],
            [
              {
                qText: [4362473.429062, 145671.243125, 4847287.045625, 62607.506563],
                qNum: 2,
                qElemNumber: 6889,
                qState: 'L',
              },
            ],
            [
              {
                qText: [3877659.8125, 62607.506563, 4362473.429062, -20456.23],
                qNum: 54,
                qElemNumber: 6890,
                qState: 'L',
              },
            ],
            [
              {
                qText: [4362473.429062, 62607.506563, 4847287.045625, -20456.23],
                qNum: 58,
                qElemNumber: 6891,
                qState: 'L',
              },
            ],
            [
              {
                qText: [4847287.045625, 228734.979688, 5332100.662187, 145671.243125],
                qNum: 1,
                qElemNumber: 6886,
                qState: 'L',
              },
            ],
            [
              {
                qText: [3877659.8125, 228734.979688, 4362473.429062, 145671.243125],
                qNum: 2,
                qElemNumber: 6882,
                qState: 'L',
              },
            ],
            [
              {
                qText: [6301727.895312, 560989.925938, 6786541.511875, 477926.189375],
                qNum: 1,
                qElemNumber: 6867,
                qState: 'L',
              },
            ],
            [
              {
                qText: [4847287.045625, 394862.452813, 5332100.662187, 311798.71625],
                qNum: 1,
                qElemNumber: 6862,
                qState: 'L',
              },
            ],
            [
              {
                qText: [2908032.579375, 145671.243125, 3392846.195937, 62607.506563],
                qNum: 2,
                qElemNumber: 6844,
                qState: 'L',
              },
            ],
            [
              {
                qText: [3392846.195937, 145671.243125, 3877659.8125, 62607.506563],
                qNum: 3,
                qElemNumber: 6845,
                qState: 'L',
              },
            ],
            [
              {
                qText: [2908032.579375, 62607.506563, 3392846.195937, -20456.23],
                qNum: 99,
                qElemNumber: 6846,
                qState: 'L',
              },
            ],
            [
              {
                qText: [3392846.195937, 62607.506563, 3877659.8125, -20456.23],
                qNum: 66,
                qElemNumber: 6847,
                qState: 'L',
              },
            ],
            [
              {
                qText: [1938405.34625, 145671.243125, 2423218.962812, 62607.506563],
                qNum: 1,
                qElemNumber: 6840,
                qState: 'L',
              },
            ],
            [
              {
                qText: [1938405.34625, 62607.506563, 2423218.962812, -20456.23],
                qNum: 394,
                qElemNumber: 6842,
                qState: 'L',
              },
            ],
            [
              {
                qText: [2423218.962812, 62607.506563, 2908032.579375, -20456.23],
                qNum: 82,
                qElemNumber: 6843,
                qState: 'L',
              },
            ],
            [
              {
                qText: [3392846.195937, 228734.979688, 3877659.8125, 145671.243125],
                qNum: 1,
                qElemNumber: 6839,
                qState: 'L',
              },
            ],
            [
              {
                qText: [2908032.579375, 228734.979688, 3392846.195937, 145671.243125],
                qNum: 1,
                qElemNumber: 6838,
                qState: 'L',
              },
            ],
            [
              {
                qText: [2423218.962812, 311798.71625, 2908032.579375, 228734.979688],
                qNum: 2,
                qElemNumber: 6833,
                qState: 'L',
              },
            ],
            [
              {
                qText: [1938405.34625, 228734.979688, 2423218.962812, 145671.243125],
                qNum: 2,
                qElemNumber: 6834,
                qState: 'L',
              },
            ],
            [
              {
                qText: [968778.113125, 145671.243125, 1453591.729687, 62607.506563],
                qNum: 3,
                qElemNumber: 6828,
                qState: 'L',
              },
            ],
            [
              {
                qText: [968778.113125, 62607.506563, 1453591.729687, -20456.23],
                qNum: 158,
                qElemNumber: 6830,
                qState: 'L',
              },
            ],
            [
              {
                qText: [1453591.729687, 62607.506563, 1938405.34625, -20456.23],
                qNum: 183,
                qElemNumber: 6831,
                qState: 'L',
              },
            ],
            [
              {
                qText: [-849.12, 145671.243125, 483964.496562, 62607.506563],
                qNum: 11,
                qElemNumber: 6824,
                qState: 'L',
              },
            ],
            [
              {
                qText: [483964.496562, 145671.243125, 968778.113125, 62607.506563],
                qNum: 1,
                qElemNumber: 6825,
                qState: 'L',
              },
            ],
            [
              {
                qText: [-849.12, 62607.506563, 483964.496562, -20456.23],
                qNum: 5976,
                qElemNumber: 6826,
                qState: 'L',
              },
            ],
            [
              {
                qText: [483964.496562, 62607.506563, 968778.113125, -20456.23],
                qNum: 213,
                qElemNumber: 6827,
                qState: 'L',
              },
            ],
            [
              {
                qText: [1453591.729687, 311798.71625, 1938405.34625, 228734.979688],
                qNum: 1,
                qElemNumber: 6821,
                qState: 'L',
              },
            ],
            [
              {
                qText: [-849.12, 311798.71625, 483964.496562, 228734.979688],
                qNum: 1,
                qElemNumber: 6816,
                qState: 'L',
              },
            ],
            [
              {
                qText: [-849.12, 228734.979688, 483964.496562, 145671.243125],
                qNum: 7,
                qElemNumber: 6818,
                qState: 'L',
              },
            ],
            [
              {
                qText: [3392846.195937, 644053.6625, 3877659.8125, 560989.925938],
                qNum: 1,
                qElemNumber: 6805,
                qState: 'L',
              },
            ],
            [
              {
                qText: [1938405.34625, 477926.189375, 2423218.962812, 394862.452813],
                qNum: 1,
                qElemNumber: 6808,
                qState: 'L',
              },
            ],
            [
              {
                qText: [1938405.34625, 394862.452813, 2423218.962812, 311798.71625],
                qNum: 1,
                qElemNumber: 6810,
                qState: 'L',
              },
            ],
            [
              {
                qText: [-849.12, 477926.189375, 483964.496562, 394862.452813],
                qNum: 2,
                qElemNumber: 6792,
                qState: 'L',
              },
            ],
            [
              {
                qText: [1453591.729687, 477926.189375, 1938405.34625, 394862.452813],
                qNum: 1,
                qElemNumber: 6797,
                qState: 'L',
              },
            ],
            [
              {
                qText: [-849.12, 394862.452813, 483964.496562, 311798.71625],
                qNum: 1,
                qElemNumber: 6794,
                qState: 'L',
              },
            ],
            [
              {
                qText: [2908032.579375, 810181.135625, 3392846.195937, 727117.399063],
                qNum: 1,
                qElemNumber: 6716,
                qState: 'L',
              },
            ],
            [
              {
                qText: [1938405.34625, 810181.135625, 2423218.962812, 727117.399063],
                qNum: 1,
                qElemNumber: 6712,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11149864.060937, 2056137.184063, 11634677.6775, 1973073.4475],
                qNum: 1,
                qElemNumber: 6463,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11149864.060937, 1890009.710938, 11634677.6775, 1806945.974375],
                qNum: 1,
                qElemNumber: 6551,
                qState: 'L',
              },
            ],
            [
              {
                qText: [12119491.294062, 1723882.237813, 12604304.910625, 1640818.50125],
                qNum: 1,
                qElemNumber: 6603,
                qState: 'L',
              },
            ],
            [
              {
                qText: [1938405.34625, 2388392.130313, 2423218.962812, 2305328.39375],
                qNum: 1,
                qElemNumber: 6170,
                qState: 'L',
              },
            ],
            [
              {
                qText: [1453591.729687, 1474691.028125, 1938405.34625, 1391627.291563],
                qNum: 1,
                qElemNumber: 6317,
                qState: 'L',
              },
            ],
            [
              {
                qText: [3392846.195937, 1391627.291563, 3877659.8125, 1308563.555],
                qNum: 1,
                qElemNumber: 6335,
                qState: 'L',
              },
            ],
            [
              {
                qText: [15513186.61, 2969838.28625, 15998000.226562, 2886774.549688],
                qNum: 1,
                qElemNumber: 5792,
                qState: 'L',
              },
            ],
            [
              {
                qText: [20846136.392187, 2803710.813125, 21330950.00875, 2720647.076563],
                qNum: 1,
                qElemNumber: 5869,
                qState: 'L',
              },
            ],
            [
              {
                qText: [17937254.692812, 2720647.076563, 18422068.309375, 2637583.34],
                qNum: 1,
                qElemNumber: 5819,
                qState: 'L',
              },
            ],
            [
              {
                qText: [2908032.579375, 5295622.91, 3392846.195937, 5212559.173438],
                qNum: 1,
                qElemNumber: 4116,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11149864.060937, 3800475.651875, 11634677.6775, 3717411.915313],
                qNum: 1,
                qElemNumber: 4893,
                qState: 'L',
              },
            ],
            [
              {
                qText: [3392846.195937, 3634348.17875, 3877659.8125, 3551284.442188],
                qNum: 1,
                qElemNumber: 4661,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11149864.060937, 3219029.495938, 11634677.6775, 3135965.759375],
                qNum: 1,
                qElemNumber: 5015,
                qState: 'L',
              },
            ],
            [
              {
                qText: [13089118.527187, 3135965.759375, 13573932.14375, 3052902.022813],
                qNum: 1,
                qElemNumber: 5069,
                qState: 'L',
              },
            ],
            [
              {
                qText: [11149864.060937, 2720647.076563, 11634677.6775, 2637583.34],
                qNum: 1,
                qElemNumber: 5055,
                qState: 'L',
              },
            ],
          ],
          qTails: [],
          qArea: {
            qLeft: 0,
            qTop: 0,
            qWidth: 3,
            qHeight: 157,
          },
          reformatted: true,
        },
      ],
      getEffectiveProperties: {},
    },
  ],
});
