// import { util, stringUtils } from '@qlik/chart-commons';
import KEYS from '../../../constants/keys';

const getGlyphCount = ({ layoutModel, axis }) => {
  const glyphCount = layoutModel.getHyperCubeValue(`${KEYS.FIELDS[axis].replace(/\//g, '.')}.qApprMaxGlyphCount`);
  // const [dataPage] = layoutModel.getDataPages();
  // const data = util.getValue(dataPage, axis === 'X' ? 'qNodes' : 'qNodes.0.qNodes');
  // const adjusted = stringUtils.getAdjustedMaxGlyphCount(glyphCount, data);

  // TODO: use an existing module for this or a proper implementation!
  return glyphCount;
};

export default getGlyphCount;
