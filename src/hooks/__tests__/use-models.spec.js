import { useEffect } from '@nebula.js/stardust';
import * as nebula from '@nebula.js/stardust';
import * as createSelectionService from '../../services/selection-service';
import useModels from '../use-models';

describe('use models hook', () => {
  let core;
  const picassoInstance = {
    chart: jest.fn(() => 'chart'),
  };
  let enabledMock;
  const enabledSetterMock = jest.fn();
  let useStateMock;
  let createSelectionServiceMock;
  let selectionServiceMock;
  const selectionServiceSetterMock = jest.fn();
  let modelsMock;
  const modelsSetterMock = jest.fn();
  const actions = {
    zoom: { enabled: jest.fn() },
  };
  const theme = {
    name: () => 'themeName',
  };
  const translator = {
    language: () => 'en',
  };
  const flags = {
    getFlag: jest.fn(() => 'flag'),
    isEnabled: jest.fn(() => enabledMock),
  };
  const layout = {
    qSelectionInfo: { qInSelections: null },
    qHyperCube: { qDimensionsInfo: { qIsOneAndOnlyOne: false } },
  };

  beforeEach(() => {
    jest.mock('@nebula.js/stardust', () => jest.fn());
    jest.mock('../../services/selection-service', () => jest.fn());
    jest.mock('../use-actions', () => jest.fn());
    useStateMock = jest
      .fn(() => [enabledMock, enabledSetterMock])
      .mockImplementationOnce(() => [selectionServiceMock, selectionServiceSetterMock])
      .mockImplementationOnce(() => [modelsMock, modelsSetterMock])
      .mockImplementationOnce(() => [actions]);

    createSelectionServiceMock = jest.fn(() => 'selectionService');
    createSelectionService.default = createSelectionServiceMock;
    nebula.useEffect = jest.fn((hookFunc) => jest.fn(hookFunc()));
    nebula.useElement = jest.fn(() => 'useElement');
    nebula.useStaleLayout = jest.fn(() => 'staleLayout');
    nebula.useState = useStateMock;
    nebula.useTheme = jest.fn(() => theme);
    nebula.useTranslator = jest.fn(() => translator);
    nebula.useApp = jest.fn(() => 'app');
    nebula.useAppLayout = jest.fn(() => 'appLayout');
    nebula.useModel = jest.fn(() => 'model');
    nebula.useOptions = jest.fn(() => 'options');
    nebula.useRect = jest.fn(() => 'rect');
    nebula.useSelections = jest.fn(() => 'selections');
    nebula.usePlugins = jest.fn(() => 'plugins');
    nebula.useConstraints = jest.fn(() => 'constraints');
    nebula.useLayout = jest.fn(() => layout);
    nebula.useAction = jest.fn(() => 'useAction');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create selection service with correct parameters', () => {
    core = {
      chart: 'chart',
      picassoInstance,
      actions,
      viewState: 'viewState',
    };
    const models = useModels({ core, flags });
    expect(models).toBeUndefined();
    expect(useEffect).toHaveBeenCalled();
    expect(selectionServiceSetterMock).toHaveBeenCalledWith(createSelectionServiceMock());
  });
});
