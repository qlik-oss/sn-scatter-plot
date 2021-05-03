import KEYS from '../../constants/keys';

export default function createCollections({ layoutService, colorService }) {
  const collectionDef = {
    key: KEYS.COLLECTION.MAIN,
    data: {
      extract: {
        field: KEYS.FIELDS.DIM,
        props: {
          x: { field: KEYS.FIELDS.X },
          y: { field: KEYS.FIELDS.Y },
          size: layoutService.meta.hasSizeMeasure ? { field: KEYS.FIELDS.SIZE } : undefined,
          selectionDimension: {
            field: KEYS.FIELDS.DIM,
          },
          ...colorService.getDatumProps(0),
        },
      },
    },
  };

  return [collectionDef];
}
