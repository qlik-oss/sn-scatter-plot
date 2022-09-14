import * as createXAxisTitle from '../xAxis';
import * as createYAxisTitle from '../yAxis';
import createAxisTitles from '../index';

describe('axis-titles', () => {
  let sandbox;
  let context;
  let models;
  let axisTitles;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(createXAxisTitle, 'default').returns({ key: 'x-axis-title' });
    sandbox.stub(createYAxisTitle, 'default').returns({ key: 'y-axis-title' });
    context = {
      translator: { key: 'translator' },
      constraints: { key: 'constraints' },
      rtl: true,
      model: {},
    };
    models = {
      layoutService: { key: 'layout-service' },
      dockService: { key: 'dock-service' },
      themeService: { key: 'theme-service' },
      propertiesModel: { key: 'properties-model' },
      app: { key: 'app' },
    };

    axisTitles = createAxisTitles({ models, context });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create x axis title', () => {
    expect(createXAxisTitle.default).to.have.been.calledOnceWith({
      model: {},
      app: { key: 'app' },
      translator: { key: 'translator' },
      constraints: { key: 'constraints' },
      rtl: true,
      layoutService: { key: 'layout-service' },
      dockService: { key: 'dock-service' },
      themeService: { key: 'theme-service' },
      propertiesModel: { key: 'properties-model' },
    });
  });

  it('should create y axis title', () => {
    expect(createYAxisTitle.default).to.have.been.calledOnceWith({
      model: {},
      app: { key: 'app' },
      translator: { key: 'translator' },
      constraints: { key: 'constraints' },
      rtl: true,
      layoutService: { key: 'layout-service' },
      dockService: { key: 'dock-service' },
      themeService: { key: 'theme-service' },
      propertiesModel: { key: 'properties-model' },
    });
  });

  it('should return axes titles', () => {
    expect(axisTitles).to.deep.equal([{ key: 'x-axis-title' }, { key: 'y-axis-title' }]);
  });
});
