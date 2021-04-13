export default function getTable() {
  return [
    /**
     * Base properties
     */
    ['', '', 'color'],
    /**
     * fontFamily
     */
    ['object.scatterplot', '', 'fontFamily'],
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
  ];
}
