export default function getTable() {
  return [
    /**
     * Base properties
     */
    ['', '', 'color'],
    /**
     * fontFamily
     */
    ['object.scatterPlot', '', 'fontFamily'],
    /**
     * Axis
     */
    ['object', 'axis.title', 'fontFamily', 'QlikView Sans, sans-serif'],
    ['object', 'axis.title', 'fontSize', '13px'],
    ['object', 'axis.title', 'color'],
    ['object', 'axis.label.name', 'fontFamily', 'QlikView Sans, sans-serif'],
    ['object', 'axis.label.name', 'fontSize', '12px'],
    ['object', 'axis.label.name', 'color', '#595959'],
    ['object', 'axis.line.major', 'color', '#cccccc'],
    ['object', 'axis.line.minor', 'color', '#e6e6e6'],
    /**
     * Grid
     */
    ['object', 'grid.line.major', 'color', '#cccccc'],
    ['object', 'grid.line.minor', 'color', '#e6e6e6'],
    ['object', 'grid.line.highContrast', 'color', '#e6e6e6'],
    /**
     * Reference line
     */
    ['object', 'referenceLine.label.name', 'fontFamily', 'QlikView Sans, sans-serif'],
    ['object', 'referenceLine.label.name', 'fontSize', '12px'],
    ['object', 'referenceLine.outOfBounds', 'fontFamily', 'QlikView Sans, sans-serif'],
    ['object', 'referenceLine.outOfBounds', 'fontSize', '12px'],
    ['object', 'referenceLine.outOfBounds', 'color', '#e6e6e6'],
    ['object', 'referenceLine.outOfBounds', 'backgroundColor', '#737373'],
    /**
     * Value label
     */
    ['object.scatterPlot', 'label.value', 'fontFamily', 'QlikView Sans, sans-serif'],
    ['object.scatterPlot', 'label.value', 'fontSize', '12px'],
    ['object.scatterPlot', 'label.value', 'color', '#595959'],
  ];
}
