import * as nebula from '@nebula.js/stardust';
import { useEffect } from '@nebula.js/stardust';
import useSelect from '../use-select';

describe('useSelect action hook', () => {
  let useStateMock;
  let enabledMock;
  const enabledSetterMock = jest.fn();

  beforeEach(() => {
    jest.mock('@nebula.js/stardust', () => jest.fn());
    nebula.useEffect = jest.fn((hookFunc) => jest.fn(hookFunc()));
    nebula.useConstraints = jest.fn(() => 'useConstraints');
    useStateMock = jest.fn(() => [enabledMock, enabledSetterMock]);
    nebula.useState = useStateMock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call useEffect', () => {
    useSelect();
    expect(useEffect).toHaveBeenCalled();
  });

  it('should have correct action hook content', () => {
    const select = useSelect();
    expect(select.toString()).toEqual(
      {
        enabled: () => enabledMock,
        emit: () => 'emit',
        getBrushOptions: () => 'brushOptions',
        on: () => jest.fn(),
        removeListener: () => jest.fn(),
      }.toString()
    );
  });
});
