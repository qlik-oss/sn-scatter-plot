import KEYS from '../../constants/keys';

export default function createCollections() {
  const collectionDef = {
    key: KEYS.COLLECTION.MAIN,
    data: {
      extract: {
        field: KEYS.FIELDS.DIM,
        props: {
          x: { field: KEYS.FIELDS.X },
          y: { field: KEYS.FIELDS.Y },
          size: { field: KEYS.FIELDS.SIZE },
        },
      },
    },
  };

  return [collectionDef];
}
