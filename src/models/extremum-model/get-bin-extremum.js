import KEYS from '../../constants/keys';

export default function getBinMinMax({ layoutService, scaleName }) {
  const dataPages = layoutService.getLayoutValue('dataPages');
  const idx1 = scaleName === KEYS.SCALE.X ? 0 : 1;
  const idx2 = idx1 + 2;
  const { qMatrix } = dataPages[0];
  let min = Number.MAX_VALUE;
  let max = -Number.MAX_VALUE;
  for (let i = 1; i < qMatrix.length; i++) {
    const { qText } = qMatrix[i][0];
    min = Math.min(min, qText[idx1], qText[idx2]);
    max = Math.max(max, qText[idx1], qText[idx2]);
  }
  return { min, max };
}
