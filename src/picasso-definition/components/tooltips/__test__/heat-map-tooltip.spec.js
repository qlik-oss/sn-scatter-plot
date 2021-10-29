import * as KEYS from '../../../../constants/keys';
import createHeatMapTooltip from '../heat-map-tooltip';

describe('heat-map-tooltip', () => {
  let sandbox;
  let context;
  let heatMapTooltip;
  let create;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    context = {
      rtl: false,
      theme: {
        getStyle: (basePath, path, attribute) => {
          if (attribute === 'fontFamily') {
            return 'Sans serif';
          }
          if (attribute === 'fontSize') {
            return '13px';
          }
          return undefined;
        },
      },
      translator: {
        get: (x) => x,
      },
    };
    sandbox.stub(KEYS, 'default').value({
      COMPONENT: {
        HEAT_MAP: 'heat-map-component',
        HEAT_MAP_TOOLTIP: 'heat-map-tooltip',
      },
    });
    create = () => createHeatMapTooltip({ context });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return an object', () => {
    expect(create()).to.be.a('object');
  });

  describe('definition', () => {
    beforeEach(() => {
      heatMapTooltip = create();
    });

    it('should have correct properties', () => {
      expect(heatMapTooltip).to.have.all.keys(['show', 'key', 'type', 'layout', 'settings', 'style']);
    });

    it('should have correct show', () => {
      expect(heatMapTooltip.show).to.equal(true);
    });

    it('should have correct key', () => {
      expect(heatMapTooltip.key).to.equal('heat-map-tooltip');
    });

    it('should have correct type', () => {
      expect(heatMapTooltip.type).to.equal('tooltip');
    });

    it('should have correct layout displayOrder', () => {
      expect(heatMapTooltip.layout.displayOrder).to.equal(3);
    });

    describe('settings', () => {
      it('should have correct properties', () => {
        expect(heatMapTooltip.settings).to.have.all.keys(['filter', 'extract', 'content', 'placement']);
      });

      describe('filter', () => {
        it('should filter nodes', () => {
          const nodes = [
            { key: 'heat-map-component', data: { value: 1 } },
            { key: 'heat-map-component', data: { value: 2 } },
            { key: 'component', data: { value: 3 } },
          ];
          heatMapTooltip.settings.filter(nodes);
          expect(heatMapTooltip.settings.filter(nodes)[0]).to.eql({ key: 'heat-map-component', data: { value: 1 } });
          expect(heatMapTooltip.settings.filter(nodes)[1]).to.eql({ key: 'heat-map-component', data: { value: 2 } });
        });
      });

      describe('extract', () => {
        it('should extract node context', () => {
          expect(heatMapTooltip.settings.extract({ context: 'context' })).to.eql({ context: 'context' });
        });
      });

      describe('content', () => {
        it('should have correct content', () => {
          const data = { data: [{ node: { data: { binDensity: { label: 1000 } } } }] };
          expect(heatMapTooltip.settings.content(data)).to.equal('properties.compression.density: 1000');
        });

        it('should have correct content when is rtl', () => {
          context.rtl = true;
          const data = { data: [{ node: { data: { binDensity: { label: 1000 } } } }] };
          expect(create().settings.content(data)).to.equal('1000 :properties.compression.density');
        });
      });

      describe('placement', () => {
        it('should have correct placement', () => {
          expect(heatMapTooltip.settings.placement).to.equal('bounds');
        });
      });
    });

    describe('style', () => {
      it('should have correct properties', () => {
        expect(heatMapTooltip.style).to.have.all.keys(['content']);
      });

      describe('content', () => {
        it('should have correct properties', () => {
          expect(heatMapTooltip.style.content).to.have.all.keys(['fontFamily', 'fontSize']);
        });

        it('should have correct fontFamily', () => {
          expect(heatMapTooltip.style.content.fontFamily).to.equal('Sans serif');
        });

        it('should have correct fontSize', () => {
          expect(heatMapTooltip.style.content.fontSize).to.equal('13px');
        });
      });
    });
  });
});
