import resolveStyle from './style';

export default function createThemeModel({ theme }) {
  return {
    query: {
      getStyle: () => resolveStyle({ theme }),
    },
  };
}
