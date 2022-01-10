import calculateDataRects from './extract-range';

const BIN_RX = /\/?binData/;

export function extractFieldFromId(id) {
  let path = id;
  let measureIdx = -1;
  let measureCount = -1;

  if (BIN_RX.test(id)) {
    const props = path.substring(path.lastIndexOf('/') + 1);
    if (props === 'binX') {
      measureIdx = 0;
    } else if (props === 'binY') {
      measureIdx = 1;
    } else {
      measureCount = 2;
    }
    path = '/qHyperCubeDef';
  }

  return {
    measureIdx,
    measureCount,
    path,
  };
}

/**
 * Helper method to generate suitable QIX selection methods and parameters based on a brush instance.
 * @alias brush
 * @param {Brush} brush A brush instance
 * @param {object} [opts]
 * @param {boolean} [opts.orMode=true] If false, combine measure range selections.
 * @param {object} [layout] QIX data layout. Needed only when brushing on attribute expressions, to be able to calculate the measure index.
 * @return {object[]} An array of relevant selections
 */
export default function qBrush(brush, opts = {}, layout, actions) {
  const selections = [];
  const methods = {};
  const isActive = brush.isActive();
  let hasValues = false;
  brush.brushes().forEach((b) => {
    const info = extractFieldFromId(b.id);
    if (b.type === 'range' && info.measureIdx > -1) {
      const ranges = b.brush.ranges();
      if (ranges.length) {
        hasValues = true;
        if (!methods.rangeSelectHyperCubeValues) {
          methods.rangeSelectHyperCubeValues = {
            path: info.path,
            ranges: [],
          };
        }
        ranges.forEach((range) =>
          methods.rangeSelectHyperCubeValues.ranges.push({
            qMeasureIx: info.measureIdx,
            qRange: {
              qMin: range.min,
              qMax: range.max,
              qMinInclEq: true,
              qMaxInclEq: true,
            },
          })
        );
      }
      actions.select.emit('binsRangeSelection', methods.rangeSelectHyperCubeValues.ranges);
    }

    if (b.type === 'value' && info.measureCount === 2) {
      const values = b.brush.values();
      if (values.length) {
        hasValues = true;
        const rects = calculateDataRects({ layout, values });
        if (!methods.multiRangeSelectHyperCubeValues) {
          methods.multiRangeSelectHyperCubeValues = {
            path: info.path,
            ranges: [],
          };
        }

        rects.forEach((rect) => {
          const xRange = rect[0];
          const yRange = rect[1];
          methods.multiRangeSelectHyperCubeValues.ranges.push({
            qRanges: [
              {
                qMeasureIx: xRange.idx,
                qRange: {
                  qMin: xRange.range.min,
                  qMax: xRange.range.max,
                  qMinInclEq: xRange.range.minInclEq !== false,
                  qMaxInclEq: xRange.range.maxInclEq !== false,
                },
              },
              {
                qMeasureIx: yRange.idx,
                qRange: {
                  qMin: yRange.range.min,
                  qMax: yRange.range.max,
                  qMinInclEq: yRange.range.minInclEq !== false,
                  qMaxInclEq: yRange.range.maxInclEq !== false,
                },
              },
            ],
          });
        });
      }
    }
  });

  if (!hasValues && isActive) {
    return [
      {
        method: 'resetMadeSelections',
        params: [],
      },
    ];
  }

  if (methods.rangeSelectHyperCubeValues) {
    selections.push({
      method: 'rangeSelectHyperCubeValues',
      params: [
        methods.rangeSelectHyperCubeValues.path,
        methods.rangeSelectHyperCubeValues.ranges,
        [],
        opts.orMode ?? true,
      ],
    });
  }

  if (methods.multiRangeSelectHyperCubeValues) {
    selections.push({
      method: 'multiRangeSelectHyperCubeValues',
      params: [methods.multiRangeSelectHyperCubeValues.path, methods.multiRangeSelectHyperCubeValues.ranges],
    });
  }

  return selections;
}
