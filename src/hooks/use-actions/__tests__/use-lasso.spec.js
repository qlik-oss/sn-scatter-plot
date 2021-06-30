import * as nebula from '@nebula.js/stardust';
import { useEffect, useAction } from '@nebula.js/stardust';
import useLasso from '../use-lasso';

describe('use-lasso action hook', () => {
  let enabledMock;
  const enabledSetterMock = jest.fn();
  let useStateMock;
  let activeMock;
  const activeSetterMock = jest.fn();
  const layout = {
    qSelectionInfo: { qInSelections: null },
    qHyperCube: { qDimensionsInfo: { qIsOneAndOnlyOne: false } },
  };

  beforeEach(() => {
    jest.mock('@nebula.js/stardust', () => jest.fn());
    useStateMock = jest
      .fn(() => [enabledMock, enabledSetterMock])
      .mockImplementationOnce(() => [activeMock, activeSetterMock]);
    nebula.useState = useStateMock;
    nebula.useEffect = jest.fn((hookFunc) => jest.fn(hookFunc()));
    nebula.useConstraints = jest.fn(() => 'useConstraints');
    nebula.useLayout = jest.fn(() => layout);
    nebula.useAction = jest.fn(() => 'action');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call useEffect and useAction', () => {
    useLasso();
    expect(useEffect).toHaveBeenCalled();
    expect(useAction).toHaveBeenCalled();
  });

  it('should return correct lasso content', () => {
    const lasso = useLasso();
    expect(lasso.toString()).toEqual(
      {
        action: jest.fn(),
        enabled: jest.fn().mockReturnValue(enabledMock),
        active: jest.fn().mockReturnValue(activeMock),
      }.toString()
    );
  });
});
