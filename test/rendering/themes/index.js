import themeGlobal from './theme-global.json';
import themeScoped from './theme-scoped.json';

export default [
  {
    id: 'light',
    theme: { fontFamily: 'Helvetica' },
  },
  {
    id: 'theme-global',
    theme: themeGlobal,
  },
  {
    id: 'theme-scoped',
    theme: themeScoped,
  },
];
