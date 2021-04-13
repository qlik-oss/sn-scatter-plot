import resolveStyle from './style';

export default function createThemeModel({ theme }) {
  const state = {
    resolved: resolveStyle({ theme }),
  };

  return {
    query: {
      getStyle: () => state.resolved,
    },
    command: {
      setTheme(newTheme) {
        state.resolved = resolveStyle({ theme: newTheme });
      },
    },
  };
}
