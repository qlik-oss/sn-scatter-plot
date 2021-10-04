import NUMBERS from '../constants/numbers';
/**
 * Decide if data is "big data" (should render as clusters/bins) or not.
 * @param  {Number}  qcy
 * @param  {Object}  layout
 * @param  {Object}  flags
 * @return {Boolean}
 */

const isBigData = (qcy, layout, flags) =>
  qcy > NUMBERS.MAX_NR_SCATTER && !(layout?.qIsBDILiveMode && flags.isEnabled('BDI_CLIENT_ADAPT'));

export default isBigData;
