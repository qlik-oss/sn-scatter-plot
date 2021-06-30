import * as nebula from '@nebula.js/stardust';
import useActions from '..';

describe('use-actions', () => {
  let enabledMock;
  const enabledMockSetter = jest.fn();
  let useStateMock;
  const actionsMock = {
    zoom: { enabled: jest.fn() },
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
    nebula.useEffect = jest.fn((hookFunc) => jest.fn(hookFunc()));
    nebula.useConstraints = jest.fn(() => 'useConstraints');
    useStateMock = jest
      .fn(() => [actionsMock])
      .mockImplementationOnce(() => [enabledMock, enabledMockSetter])
      .mockImplementationOnce(() => [enabledMock, enabledMockSetter])
      .mockImplementationOnce(() => [enabledMock, enabledMockSetter]);
    nebula.useState = useStateMock;
    nebula.useLayout = jest.fn(() => layout);
    nebula.useAction = jest.fn(() => 'useAction');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have correct actions', () => {
    const actions = useActions({ flags });
    expect(actions).not.toBeUndefined();
    expect(Object.keys(actions)).toEqual(
      expect.arrayContaining(['zoom', 'scroll', 'interact', 'tooltip', 'lasso', 'select'])
    );
  });

  it('should have correct zoom', () => {
    const actions = useActions({ flags });
    expect(actions.zoom).toEqual(actionsMock.zoom);
  });
});
