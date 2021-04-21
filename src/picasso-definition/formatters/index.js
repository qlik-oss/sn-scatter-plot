import KEYS from '../../constants/keys';

export default function createFormatters() {
  const formatters = {
    [KEYS.FORMATTER.X]: {
      data: {
        fields: [KEYS.FIELDS.X],
      },
    },
    [KEYS.FORMATTER.Y]: {
      data: {
        fields: [KEYS.FIELDS.Y],
      },
    },
  };

  return formatters;
}
