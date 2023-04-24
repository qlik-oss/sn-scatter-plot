import CONST from '../constants/index';

export async function destroySessionAlternateState({ app, customTooltipModel }) {
  const cttModel = customTooltipModel;
  const stateName = CONST.CHART.STATE;
  cttModel.miniChartToken.alternateState = undefined;
  await app.removeSessionAlternateState(stateName);
}

export async function createSessionAlternateState({ app, properties, customTooltipModel }) {
  const cttModel = customTooltipModel;
  const stateName = CONST.CHART.STATE;
  const state = properties.qStateName;
  if (!cttModel.miniChartToken.alternateState) {
    cttModel.miniChartToken.alternateState = stateName;
    await app.addSessionAlternateState(stateName, state);
    cttModel.miniChartToken.alternateState = stateName;
  }
}
