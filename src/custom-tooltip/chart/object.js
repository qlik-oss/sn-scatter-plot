import CONST from '../constants/index';
import objProps from './properties';

export default async function object({ app, properties, customTooltipModel }) {
  const cttModel = customTooltipModel;
  if (cttModel.miniChartToken.sessionObj?.id) {
    await app.destroySessionObject(cttModel.miniChartToken.sessionObj.id);
  }
  const stateName = CONST.CHART.STATE;
  const parentProp = objProps.createParentProp(properties, stateName);
  const obj = await app.createSessionObject(parentProp);
  const tooltipChartProp = objProps.createChildProp(properties);
  if (obj.id !== CONST.CHART.CHART_OBJECT_ID) {
    app.destroySessionObject(obj.id);
    return undefined;
  }
  cttModel.miniChartToken.sessionObj = obj;
  const model = await obj.createChild(tooltipChartProp);
  if (!cttModel.miniChartToken.sessionObj || cttModel.miniChartToken.sessionObj.id !== obj.id) {
    app.destroySessionObject(obj.id);
    return undefined;
  }
  cttModel.miniChartToken.model = model;
  return model;
}
