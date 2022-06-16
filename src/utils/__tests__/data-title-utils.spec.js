import { getMeasurePopoverData, getMeasureTitleData } from '../data-title-utils';

describe('Data title utils', () => {
  const translator = {
    get(s) {
      return s;
    },
  };

  describe('getMeasureTitleData', () => {
    it('nornal measure', () => {
      const model = {};
      const meaInfo = {
        qFallbackTitle: 'MeasureTitle',
      };
      const { drillUp, ...titleData } = getMeasureTitleData(meaInfo, 0, model);
      expect(titleData).eql({
        breadcrumbs: [],
        drilldown: false,
        index: 0,
        locked: false,
        text: 'MeasureTitle',
        popoverText: 'MeasureTitle',
      });
    });
  });

  describe('getMeasurePopoverData', () => {
    it('no popover for empty alternatives list', () => {
      const model = {};
      const popover = getMeasurePopoverData({
        dir: 'ltr',
        dock: 'top',
        altList: [],
        model,
        translator,
      });
      expect(popover).eql(null);
    });

    it('a not empty popover', () => {
      const model = {};
      const popover = getMeasurePopoverData({
        dir: 'ltr',
        dock: 'top',
        altList: [{}],
        model,
        translator,
      });
      expect(popover).not.eql(null);
      expect(popover.dir).eql('ltr');
      expect(popover.dock).eql('top');
      expect(popover.getAlternatives).to.be.an('function');
      expect(popover.changeTo).to.be.an('function');
    });

    it('is popover top', () => {
      const model = {};
      const instruction = '';
      const meaInfo = {
        qFallbackTitle: 'MeasureTitle',
      };
      const titleData = getMeasureTitleData(meaInfo, 0, model);
      const popover = getMeasurePopoverData({
        dir: 'ltr',
        dock: 'top',
        altList: [{}],
        model,
        translator,
      });
      expect(popover).not.eql(null);
      expect(popover.dir).eql('ltr');
      expect(popover.dock).eql('top');
      expect(titleData.text).eql('MeasureTitle');
      expect(instruction).to.be.a(`string`);
    });

    it('is popover right', () => {
      const model = {};
      const instruction = '';
      const meaInfo = {
        qFallbackTitle: 'MeasureTitle',
      };
      const titleData = getMeasureTitleData(meaInfo, 0, model);
      const popover = getMeasurePopoverData({
        dir: 'ltr',
        dock: 'right',
        altList: [{}],
        model,
        translator,
      });
      expect(popover).not.eql(null);
      expect(popover.dir).eql('ltr');
      expect(popover.dock).eql('right');
      expect(titleData.text).eql('MeasureTitle');
      expect(instruction).to.be.a(`string`);
    });
  });
});
