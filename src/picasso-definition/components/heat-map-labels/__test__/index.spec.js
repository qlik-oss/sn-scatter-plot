import * as KEYS from '../../../../constants/keys';
import createHeatMapLabels from '..';

describe('heat-map-labels', () => {
  let sandbox;
  let themeService;
  let picasso;
  let context;
  let create;
  let chartModel;
  let viewHandler;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    themeService = { getStyles: sandbox.stub() };
    themeService.getStyles.returns({
      label: { value: { fontFamily: 'Sans serif', numFontSize: '1px' } },
    });
    picasso = {
      formatter: () => () => (value) => `formatted ${value}`,
    };
    context = {
      theme: {
        getContrastingColorTo: (value) => value,
      },
    };
    sandbox.stub(KEYS, 'default').value({
      COMPONENT: {
        HEAT_MAP: 'heat-map-component',
        HEAT_MAP_LABELS: 'heat-map-labels',
      },
    });
    viewHandler = { transform: 'transform-function', animationEnabled: undefined };
    chartModel = { query: { getViewHandler: sandbox.stub().returns(viewHandler) } };
    create = () => createHeatMapLabels({ themeService, chartModel, picasso, context });
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('component', () => {
    it('should have correct key', () => {
      expect(create().key).to.equal('heat-map-labels');
    });

    it('should have correct type', () => {
      expect(create().type).to.equal('labels');
    });

    describe('settings', () => {
      it('should have correct properties', () => {
        expect(create().settings).to.have.all.keys(['sources']);
      });

      describe('sources', () => {
        it('should have correct properties', () => {
          expect(create().settings.sources[0]).to.have.all.keys(['component', 'selector', 'strategy']);
        });

        describe('component', () => {
          it('should have correct type', () => {
            expect(create().settings.sources[0].component).to.equal('heat-map-component');
          });
        });

        describe('selector', () => {
          it('should have correct selector', () => {
            expect(create().settings.sources[0].selector).to.equal('rect');
          });
        });

        describe('strategy', () => {
          it('should have correct properties', () => {
            expect(create().settings.sources[0].strategy).to.have.all.keys(['type', 'settings']);
          });

          describe('type', () => {
            it('should have correct type', () => {
              expect(create().settings.sources[0].strategy.type).to.equal('bar');
            });
          });

          describe('settings', () => {
            it('should have correct properties', () => {
              expect(create().settings.sources[0].strategy.settings).to.have.all.keys(
                'direction',
                'orientation',
                'fontSize',
                'fontFamily',
                'labels'
              );
            });

            it('should have correct direction', () => {
              expect(create().settings.sources[0].strategy.settings.direction).to.equal('up');
            });

            it('should have correct orientation', () => {
              expect(create().settings.sources[0].strategy.settings.orientation).to.equal('horizontal');
            });

            it('should have correct fontSize', () => {
              expect(create().settings.sources[0].strategy.settings.fontSize).to.equal('1px');
            });

            it('should have correct fontFamily', () => {
              expect(create().settings.sources[0].strategy.settings.fontFamily).to.equal('Sans serif');
            });

            describe('labels', () => {
              it('should return correct label', () => {
                expect(
                  create().settings.sources[0].strategy.settings.labels[0].label({
                    node: { data: { binDensity: { value: 10 } } },
                  })
                ).to.equal('formatted 10');
              });

              describe('placements', () => {
                it('should have correct properties', () => {
                  expect(create().settings.sources[0].strategy.settings.labels[0].placements[0]).to.have.all.keys(
                    'position',
                    'fill',
                    'onBackground',
                    'justify'
                  );
                });

                it('should have correct position', () => {
                  expect(create().settings.sources[0].strategy.settings.labels[0].placements[0].position).to.equal(
                    'inside'
                  );
                });

                it('should have correct fill', () => {
                  expect(
                    create().settings.sources[0].strategy.settings.labels[0].placements[0].fill({
                      node: { attrs: { fill: 'pink' } },
                    })
                  ).to.equal('pink');
                });

                it('should have correct onBackground', () => {
                  expect(create().settings.sources[0].strategy.settings.labels[0].placements[0].onBackground).to.equal(
                    false
                  );
                });

                it('should have correct justify', () => {
                  expect(create().settings.sources[0].strategy.settings.labels[0].placements[0].justify).to.equal(0.5);
                });
              });
            });
          });

          describe('animations', () => {
            describe('enabled', () => {
              it('should be true if animation is enabled in viewHandler', () => {
                viewHandler.animationEnabled = true;
                expect(create().animations.enabled()).to.equal(true);
              });

              it('should be false if animation is not enabled in viewHandler', () => {
                viewHandler.animationEnabled = false;
                expect(create().animations.enabled()).to.equal(false);
              });
            });

            describe('trackBy', () => {
              it('should return correct numbers as node IDs', () => {
                let id1;
                let id2;
                const { trackBy } = create().animations;
                let result = true;
                for (let i = 0; i < 10000; i++) {
                  id1 = trackBy();
                  id2 = trackBy();
                  if (id1 === id2) result = false;
                }
                expect(result).to.equal(true);
              });
            });
          });

          describe('rendererSettings', () => {
            it('should have correct transform function', () => {
              expect(create().rendererSettings.transform).to.equal('transform-function');
            });
            it('should have correct buffer size', () => {
              const rect = { computedPhysical: { width: 200, height: 150 } };
              expect(create().rendererSettings.canvasBufferSize(rect)).to.deep.equal({ width: 300, height: 250 });
            });
          });
        });
      });
    });
  });
});
