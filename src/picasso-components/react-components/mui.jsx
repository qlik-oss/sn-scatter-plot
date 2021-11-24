import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider, StylesProvider, createGenerateClassName } from '@material-ui/styles';

const theme = createTheme({
  palette: {
    text: {
      primary: 'rgba(89, 89, 89, 0.8)',
      secondary: 'rgba(0, 0, 0, 0.55)',
      disabled: 'rgba(0, 0, 0, 0.3)',
    },
    action: {
      disabled: 'rgba(0, 0, 0, 0.3)',
    },
  },
  typography: {
    fontFamily: '"QlikView Sans", "Arial", sans-serif',
    button: {
      textTransform: 'initial',
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 2,
  },
  shadows: [
    'none',
    '0px 1px 2px 0px rgba(0,0,0,0.15)',
    '0px 1px 2px 0px rgba(0,0,0,0.15)',
    '0px 1px 2px 0px rgba(0,0,0,0.15)',
    '0px 1px 2px 0px rgba(0,0,0,0.15)',
    '0px 1px 2px 0px rgba(0,0,0,0.15)',
    '0px 1px 2px 0px rgba(0,0,0,0.15)',

    '0px 2px 4px 0px rgba(0,0,0,0.15)',
    '0px 2px 4px 0px rgba(0,0,0,0.15)',
    '0px 2px 4px 0px rgba(0,0,0,0.15)',
    '0px 2px 4px 0px rgba(0,0,0,0.15)',
    '0px 2px 4px 0px rgba(0,0,0,0.15)',
    '0px 2px 4px 0px rgba(0,0,0,0.15)',

    '0px 4px 10px 0px rgba(0,0,0,0.15)',
    '0px 4px 10px 0px rgba(0,0,0,0.15)',
    '0px 4px 10px 0px rgba(0,0,0,0.15)',
    '0px 4px 10px 0px rgba(0,0,0,0.15)',
    '0px 4px 10px 0px rgba(0,0,0,0.15)',
    '0px 4px 10px 0px rgba(0,0,0,0.15)',

    '0px 6px 20px 0px rgba(0,0,0,0.15)',
    '0px 6px 20px 0px rgba(0,0,0,0.15)',
    '0px 6px 20px 0px rgba(0,0,0,0.15)',
    '0px 6px 20px 0px rgba(0,0,0,0.15)',
    '0px 6px 20px 0px rgba(0,0,0,0.15)',
    '0px 6px 20px 0px rgba(0,0,0,0.15)',
  ],
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

export function classGenerator() {
  return createGenerateClassName({
    productionPrefix: `q${process.env.VERSION_HASH || ''}`,
    disableGlobal: true,
    seed: '',
  });
}

export function Mui(nodes, classNameGenerator) {
  return (
    <StylesProvider generateClassName={classNameGenerator}>
      <ThemeProvider theme={theme}>{nodes}</ThemeProvider>
    </StylesProvider>
  );
}
