// eslint-disable-next-line no-unused-vars
import * as chartModules from 'qlik-chart-modules';
import createColorService from '..';
import * as createLegend from '../legend';

describe('color-service', () => {
  let sandbox;
  let create;
  let actions;
  let localeInfo;
  let app;
  let chart;
  let theme;
  let translator;
  let options;
  let model;
  let layoutService;
  let picasso;
  let viewState;
  let dataHandler;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(chartModules, 'colorService').returns('color-service');
    layoutService = {
      getHyperCube: sandbox.stub().returns({ qDimensionInfo: [{ baseColor: 'red' }] }),
      getLayoutValue: sandbox.stub(),
    };
    sandbox.stub(createLegend, 'default').returns({ components: '', interactions: '', scales: '' });
    create = () =>
      createColorService({
        actions,
        localeInfo,
        app,
        chart,
        theme,
        translator,
        options,
        model,
        layoutService,
        picasso,
        viewState,
        dataHandler,
      });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct colorService', () => {
    expect(create()).to.equal('color-service');
  });
});
