import KEYS from '../../constants/keys';

export default function createCollections({ layoutModel }) {
  const collectionDef = {
    key: KEYS.COLLECTION.MAIN,
    data: {
      extract: {
        field: KEYS.FIELDS.DIM,
        props: {
          x: { field: KEYS.FIELDS.X },
          y: { field: KEYS.FIELDS.Y },
          size: layoutModel.getHyperCubeValue('qMeasureInfo.2') ? { field: KEYS.FIELDS.SIZE } : undefined,
        },
      },
    },
  };

  return [collectionDef];
}
