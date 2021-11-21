export default {
  REF_LABELS: {
    MAX_WIDTH: { X: 100, Y: 70 },
    PADDING: { TOP: 2, BOTTOM: 2, START: 4, END: 2 },
    GAP: { X: 16, Y: 10 },
    MAX_NUM_LINES: 3,
    OOB: { SIZE: 8 },
  },

  AXIS: {
    X: { PADDING: { END: 4 } },
    Y: { PADDING: { END: 24 } },
  },

  GRID_DISTANCE: {
    NARROW: 50,
    MEDIUM: 100,
    WIDE: 200,
    FALLBACK: 100,
  },

  LEGEND_CAT: {
    SYMBOL: { SIZE: 10 },
  },

  // Modes for minimumLayoutMode property
  LAYOUT_MODES: {
    FULL: { width: 550, height: 450 },
    MEDIUM: { width: 400, height: 220 },
    SMALL: { width: 300, height: 150 },
    XSMALL: { width: 150, height: 75 },
    SPARK: { width: 0, height: 0 },
  },

  MAX_NR_SCATTER: 1000,

  // Ratio = minichart_size/chart_size, Padding: away from the bottom right corner
  MINI_CHART: { RATIO: 0.15, PADDING: 10 },
  MAX_NR_ANIMATION: 100,
};
