export default function createStyleModel({ layoutService, themeService, flags }) {
  const styles = themeService.getStyles();

  const overrides = (key) => {
    const isEnabled = flags.isEnabled('CLIENT_IM_3050');
    return isEnabled ? layoutService.getLayoutValue('components', []).find((c) => c.key === key) : undefined;
  };

  const query = {
    referenceLine: {
      label: {
        getStyle: () => ({
          fill: overrides('referenceLine')?.referenceLine?.label?.color?.color ?? styles.referenceLine.label.name.color,
          fontSize:
            overrides('referenceLine')?.referenceLine?.label?.fontSize ?? styles.referenceLine.label.name.fontSize,
          fontFamily:
            overrides('referenceLine')?.referenceLine?.label?.fontFamily ?? styles.referenceLine.label.name.fontFamily,
        }),
      },
    },
    axis: {
      title: {
        getStyle: () => ({
          fontFamily: overrides('axis')?.axis?.title?.fontFamily ?? styles.axis.title.fontFamily,
          fontSize: overrides('axis')?.axis?.title?.fontSize ?? styles.axis.title.fontSize,
          color: overrides('axis')?.axis?.title?.color?.color ?? styles.axis.title.color,
        }),
      },
      label: {
        getStyle: () => ({
          fill: overrides('axis')?.axis?.label?.name?.color?.color ?? styles.axis.label.name.color,
          fontSize: overrides('axis')?.axis?.label?.name?.fontSize ?? styles.axis.label.name.fontSize,
          fontFamily: overrides('axis')?.axis?.label?.name?.fontFamily ?? styles.axis.label.name.fontFamily,
        }),
      },
    },
    label: {
      getStyle: () => ({
        fill: overrides('label')?.label?.color?.color ?? styles.label.value.color,
        fontSize: overrides('label')?.label?.fontSize ?? styles.label.value.fontSize,
        fontFamily: overrides('label')?.label?.fontFamily ?? styles.label.value.fontFamily,
      }),
    },
  };

  return { query };
}
