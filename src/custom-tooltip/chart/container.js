import CONST from '../constants/index';

export default function container(ctx, layout) {
  const sizeType = layout.tooltip?.chart?.style?.size ?? 'medium';
  const sizeValue = CONST.CHART.STYLE[sizeType];

  const content = [
    ctx.h('div', {
      style: {
        display: 'flex',
        width: sizeValue,
        height: sizeValue,
        backgroundColor: '#FFFFFF',
        borderRadius: '5px',
        padding: '2px',
        color: '#595959',
      },
      colspan: 2,
      id: CONST.CHART.CONTAINER_ID,
    }),
  ];

  return [
    {
      content,
      colspan: 2,
      style: {
        'text-align': ctx.rtl ? 'right' : 'left',
        'max-width': sizeValue,
        width: '100%',
      },
    },
    {},
  ];
}
