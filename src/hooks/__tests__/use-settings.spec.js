import { useEffect, usePromise } from '@nebula.js/stardust';
import * as nebula from '@nebula.js/stardust';
import useSettings from '../use-settings';

describe('use setting hook', () => {
  let useStateMock;
  let settingsMock;
  let settingsSetterMock;
  let models;
  let flags;
  let core;
  const theme = {
    name: () => 'themeName',
  };
  const translator = {
    language: () => 'en',
  };

  beforeEach(() => {
    jest.mock('@nebula.js/stardust', () => jest.fn());
    useStateMock = jest.fn(() => [settingsMock, settingsSetterMock]);
    nebula.useEffect = jest.fn((hookFunc) => jest.fn(hookFunc()));
    nebula.useModel = jest.fn(() => 'model');
    nebula.useTheme = jest.fn(() => theme);
    nebula.useOptions = jest.fn(() => 'options');
    nebula.useTranslator = jest.fn(() => translator);
    nebula.useSelections = jest.fn(() => 'selections');
    nebula.useRect = jest.fn(() => 'rect');
    nebula.usePromise = jest.fn(() => 'promise');
    nebula.useConstraints = jest.fn(() => 'useConstraints');
    nebula.useState = useStateMock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  // More tests can be added
  it('should call useEffect and usePromise', () => {
    useSettings({ core, models, flags });
    expect(useEffect).toHaveBeenCalled();
    expect(usePromise).toHaveBeenCalled();
  });
});
