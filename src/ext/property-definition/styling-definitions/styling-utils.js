const scatterPlotLabelsDefinition = (path, fontResolver, theme) => {
  const pathFontFamily = `${path}.fontFamily`;
  const pathFontSize = `${path}.fontSize`;

  return {
    fontFamilyItem: {
      component: 'dropdown',
      ref: pathFontFamily,
      options: () => fontResolver.getOptions(pathFontFamily),
      defaultValue: () => fontResolver.getDefaultValue(pathFontFamily),
    },
    fontWrapperItem: {
      component: 'inline-wrapper',
      items: {
        fontSizeItem: {
          component: 'dropdown',
          ref: pathFontSize,
          options: () => fontResolver.getOptions(pathFontSize),
          defaultValue: () => fontResolver.getDefaultValue(pathFontSize),
        },
        fontColorItem: {
          component: 'color-picker',
          width: false,
          ref: `${path}.color`,
          defaultValue: () => ({
            color: theme.getStyle('object.scatterPlot', path, 'color'),
          }),
        },
      },
    },
  };
};

export default scatterPlotLabelsDefinition;
