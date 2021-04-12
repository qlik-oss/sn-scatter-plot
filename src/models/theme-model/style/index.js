import extend from 'extend';
import getTable from './table';
import resolve from './resolve';
import toObject from './to-object';

export default function resolveStyle({ theme }) {
  const style = {};

  const table = getTable();
  table.forEach((row) => {
    const [base, path, attribute, defaultValue, transform = (val) => val] = row;

    const value = transform(
      resolve({
        theme,
        base,
        path,
        attribute,
        defaultValue,
      })
    );

    extend(
      true,
      style,
      toObject({
        path,
        attribute,
        value,
      })
    );
  });

  return style;
}
