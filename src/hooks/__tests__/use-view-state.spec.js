import * as nebula from '@nebula.js/stardust';
import { useEffect } from '@nebula.js/stardust';
import * as chartModules from 'qlik-chart-modules';
import { storage as createViewState } from 'qlik-chart-modules';
import useViewState from '../use-view-state';

describe('use-view-state', () => {
  let viewStateMock;
  let viewStateMockSetter;
  let useStateMock;
  let dataView;
  let legendScrollOffset;

  beforeEach(() => {
    dataView = {};
    legendScrollOffset = undefined;

    viewStateMockSetter = jest.fn();
    useStateMock = jest.fn(() => [viewStateMock, viewStateMockSetter]);

    jest.mock('@nebula.js/stardust', () => jest.fn());
    nebula.useEffect = jest.fn((hookFunc) => jest.fn(hookFunc()));
    nebula.useState = useStateMock;

    jest.mock('qlik-chart-modules', () => jest.fn());
    chartModules.storage = jest.fn(() => 'storage');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call useEffect', () => {
    useViewState({ dataView, legendScrollOffset });
    expect(useEffect).toHaveBeenCalled();
  });

  it('should create view state with correct parameters', () => {
    useViewState({ dataView, legendScrollOffset });
    expect(viewStateMockSetter).toHaveBeenCalled();
    expect(createViewState).toHaveBeenCalledWith({ dataView, legendScrollOffset });
  });
});
