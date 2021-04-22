import rtlUtils from '../../../../../../utils/rtl-utils';
import getValue from './value';
import getLabel from './label';
import getFill from './fill';

const createColorContent = ({ models, rtl }) => {
  const { detectTextDirection: getDirection } = rtlUtils;
  const colorSettings = models.colorService.getSettings();

  return function create({ context, node }) {
    const value = getValue({ colorSettings, context, node });

    if (value === undefined) {
      return false;
    }

    const label = getLabel({ colorSettings, context, node });

    const fill = getFill({ node });

    const symbol = context.h('div', {
      style: {
        display: 'inline-block',
        width: 10,
        height: 10,
        'background-color': fill,
        margin: '0 8px',
      },
    });

    return {
      label: rtl ? [':', label] : [label, ':'],
      value: rtl ? [value, symbol] : [symbol, value],
      labelDirection: getDirection(label),
      valueDirection: getDirection(value),
    };
  };
};

export default createColorContent;
