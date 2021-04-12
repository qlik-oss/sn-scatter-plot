export default function resolve({ theme, base, path, attribute, defaultValue = undefined }) {
  if (!theme || base === false) {
    return defaultValue;
  }

  const value = theme.getStyle(base, path, attribute);
  return value === undefined ? defaultValue : value;
}
