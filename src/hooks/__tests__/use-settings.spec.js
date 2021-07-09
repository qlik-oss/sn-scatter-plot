import { useEffect, usePromise } from '@nebula.js/stardust';
import * as nebula from '@nebula.js/stardust';
import useSettings from '../use-settings';

describe('use setting hook', () => {
  const bubbleSizes = [2, 8];
  const refLines = [
    { show: true, cId: 'id1', paletteColor: { color: '#ffffff' }, refLineExpr: 'expr', label: 'label1' },
    { show: true, cId: 'id2', paletteColor: { color: '#ffffff' }, refLineExpr: 'expr', label: 'label2' },
  ];
  const legendComponents = [
    {
      brush: 'brush',
      key: 'legend-color-cat',
      layout: 'layout',
      mounted: jest.fn(),
      renderer: 'svg',
      scale: 'colorLegend',
      settings: 'settings',
      show: true,
      style: { type: 'legend-cat' },
    },
  ];
  const legendInteractions = [
    {
      events: { legendtap: jest.fn() },
      key: 'event:tap-legend-color',
      options: 'options',
      type: 'Tap',
    },
    {
      events: {},
      key: 'event:pan-legend-color',
      options: 'options',
      type: 'Pan',
    },
  ];
  const viewHandler = {
    getMeta: jest.fn(() => ({ isHomeState: true })),
    setMeta: jest.fn(),
  };
  let useStateMock;
  let settingsMock;
  const settingsSetterMock = jest.fn();
  const layout = {
    snapshotData: {
      content: {
        size: {
          w: 100,
          h: 120,
        },
      },
      qSelectionInfo: { qInSelections: null },
      qHyperCube: { qDimensionsInfo: { qIsOneAndOnlyOne: false } },
    },
  };
  const models = {
    chartModel: {
      query: {
        getViewHandler: jest.fn(() => viewHandler),
        getViewState: jest.fn(),
        getLocaleInfo: jest.fn(),
        getFormatter: jest.fn(),
      },
      command: {
        layoutComponents: jest.fn(),
      },
    },
    tickModel: {
      query: {
        getXMinMax: jest.fn(() => [2, 14]),
        getYMinMax: jest.fn(() => [2, 14]),
      },
      command: {
        updateFormatters: jest.fn(),
      },
    },
    colorService: {
      getColor: jest.fn(),
      custom: {
        updateLegend: jest.fn(),
        legendComponents: jest.fn(() => legendComponents),
        legendInteractions: jest.fn(() => legendInteractions),
      },
      getScales: jest.fn(),
      getDatumProps: jest.fn(),
      getSettings: jest.fn(),
      getPalettes: jest.fn(),
    },
    disclaimerModel: {
      query: {
        getHasSuppressingDisclaimer: jest.fn(),
        getDisclaimer: jest.fn(),
      },
    },
    dockService: {
      update: jest.fn(),
      meta: { x: { opposite: 'top' }, y: { opposite: 'right' } },
    },
    extremumModel: {
      command: {
        resetExtrema: jest.fn(),
      },
    },
    layoutService: {
      getLayout: jest.fn(() => layout),
      meta: {
        hasSizeMeasure: false,
      },
      getHyperCubeValue: jest.fn(() => ({ qMin: 1, qMax: 10 })),
      getLayoutValue: jest
        .fn(() => bubbleSizes)
        .mockImplementationOnce(() => ({ auto: true, spacing: 1 }))
        .mockImplementationOnce(() => refLines)
        .mockImplementationOnce(() => refLines)
        .mockImplementationOnce(() => refLines)
        .mockImplementationOnce(() => refLines)
        .mockImplementationOnce(() => refLines)
        .mockImplementationOnce(() => refLines)
        .mockImplementationOnce(() => refLines)
        .mockImplementationOnce(() => refLines)
        .mockImplementationOnce(() => bubbleSizes)
        .mockImplementationOnce(() => ({ mode: 'none' }))
        .mockImplementationOnce(() => bubbleSizes),
    },
    pluginService: {
      extendComponents: jest.fn(),
    },
    selectionService: {
      getIsDimensionLocked: jest.fn(),
    },
    themeService: {
      getStyles: jest.fn(() => ({ grid: { line: { minor: { color: 'lineColor ' } } } })),
      getTheme: jest.fn(() => ({ getStyle: jest.fn() })),
    },
  };
  const flags = {
    getFlag: jest.fn(),
    isEnabled: jest.fn(),
  };
  const core = {
    viewState: {
      preventSet: jest.fn(),
      get: jest.fn(),
    },
  };
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

  it('should set expected settings', () => {
    const settings = useSettings({ core, models, flags });
    expect(settings).toBeUndefined();
    expect(useEffect).toHaveBeenCalled();
    expect(usePromise).toHaveBeenCalled();
    expect(settingsSetterMock).toHaveBeenCalledWith(
      expect.objectContaining({
        interactions: expect.any(Array),
        scales: expect.any(Object),
        strategy: expect.any(Object),
        formatters: expect.any(Object),
      })
    );
  });
});
