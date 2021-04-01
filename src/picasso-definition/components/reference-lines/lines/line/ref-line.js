const refLine = ({ refLineLayout, scale }) => {
  const settings = {
    line: {
      stroke: refLineLayout.paletteColor.color,
      strokeWidth: 2,
    },
    label: {
      text: refLineLayout.label,
      align: 'right',
    },
  };
  settings.scale = scale;
  settings.value = refLineLayout.refLineExpr.value;
  return settings;
};

export default refLine;
