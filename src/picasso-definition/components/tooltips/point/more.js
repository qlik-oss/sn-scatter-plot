import rtlUtils from '../../../../utils/rtl-utils';

export default function getMore({ count, translator, rtl }) {
  const { detectTextDirection: getDirection } = rtlUtils;
  const content = translator ? translator.get('Object.ChartTooltip.NMore', count) : `+${count} more`;
  const direction = getDirection(content);

  return [
    {
      content,
      style: { 'font-weight': 'bold', 'text-align': rtl ? 'right' : 'left', direction },
      colspan: 2,
    },
  ];
}
