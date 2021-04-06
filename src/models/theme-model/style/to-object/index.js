/* returns an object as {attribute: value} */

// should it be moved to utils?
export default function toObject({ path, attribute, value }) {
  const object = {};
  const keys = path.split('.').filter((key) => key.length);
  let leaf = object;

  keys.forEach((key) => {
    leaf[key] = {};
    leaf = leaf[key];
  });

  if (value !== undefined) {
    leaf[attribute] = value;
  }

  return object;
}
