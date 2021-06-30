import * as nebula from '@nebula.js/stardust';
import { useEffect } from '@nebula.js/stardust';
import useRender from '../use-render';

describe('use-render hook', () => {
  let settings;
  let models;

  beforeEach(() => {
    settings = { interactions: 'interactions' };
    models = {
      chartModel: {
        command: {
          update: jest.fn(),
        },
      },
    };
    jest.mock('@nebula.js/stardust', () => jest.fn());
    nebula.useEffect = jest.fn((hookFunc) => jest.fn(hookFunc()));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update chartModel', () => {
    useRender({ settings, models });
    expect(useEffect).toHaveBeenCalled();
    expect(models.chartModel.command.update).toHaveBeenCalled();
  });

  it('should not update chartModel when settings undefined', () => {
    settings = undefined;
    useRender({ settings, models });
    expect(useEffect).toHaveBeenCalled();
    expect(models.chartModel.command.update).not.toHaveBeenCalled();
  });
});
