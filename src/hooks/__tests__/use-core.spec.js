import { useEffect } from '@nebula.js/stardust';
import * as nebula from '@nebula.js/stardust';
import * as configurePicasso from '../../configure-picasso';
import useCore from '../use-core';
import * as useViewState from '../use-view-state';

describe('use-core hook', () => {
  let coreMock;
  const coreMockSetter = jest.fn();
  let useStateMock;
  let flags;
  let enabledMock;
  let active;
  const element = {
    style: {
      overflow: 'hidden',
    },
  };
  const picassoInstance = {
    chart: jest.fn(() => 'chart'),
  };
  const picasso = jest.fn(() => picassoInstance);

  let useViewStateMock;
  const setActive = jest.fn();
  let listeners;
  const actions = {
    zoom: { enabled: jest.fn() },
  };
  const enabledSetterMock = jest.fn();
  const setListeners = jest.fn();
  const layout = {
    qSelectionInfo: { qInSelections: null },
    qHyperCube: { qDimensionsInfo: { qIsOneAndOnlyOne: false } },
  };

  beforeEach(() => {
    jest.mock('../../configure-picasso', () => jest.fn());
    configurePicasso.default = jest.fn(() => picasso);
    jest.mock('@nebula.js/stardust', () => jest.fn());
    jest.mock('../use-view-state', () => jest.fn());
    useViewStateMock = jest.fn(() => 'viewState');
    useViewState.default = useViewStateMock;
    useStateMock = jest
      .fn(() => [coreMock, coreMockSetter])
      .mockImplementationOnce(() => [enabledMock, enabledSetterMock])
      .mockImplementationOnce(() => [listeners, setListeners])
      .mockImplementationOnce(() => [listeners, setListeners])
      .mockImplementationOnce(() => [active, setActive])
      .mockImplementationOnce(() => [actions]);

    nebula.useState = useStateMock;
    nebula.useEffect = jest.fn((hookFunc) => jest.fn(hookFunc()));
    nebula.useElement = jest.fn(() => element);
    nebula.useOptions = jest.fn(() => 'useOptions');
    nebula.useAction = jest.fn(() => 'useAction');
    nebula.useConstraints = jest.fn(() => 'useConstraints');
    nebula.useLayout = jest.fn(() => layout);
    flags = {
      getFlag: jest.fn(() => 'flag'),
      isEnabled: jest.fn(() => enabledMock),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call useEffect', () => {
    const core = useCore({ flags });
    expect(core).toBeUndefined();
    expect(useEffect).toHaveBeenCalled();
  });

  it('should set core with correct parameters', () => {
    useCore({ flags });
    expect(coreMockSetter).toHaveBeenCalledWith({
      viewState: 'viewState',
      chart: 'chart',
      picassoInstance,
      actions,
    });
  });
});
