import softProperties from '..';
import * as showBubbleSizes from '../show-bubble-sizes';
import * as showRangeBubbleSizes from '../show-range-bubble-sizes';
import * as showCompressionResolution from '../../show-compression-resolution';
import * as colorModeOptions from '../color-mode-options';
import * as showColorScheme from '../show-color-scheme';
import * as showPersistentColors from '../show-persistent-colors';

describe('softProperties', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(showCompressionResolution, 'default');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should have correct properties', () => {
    expect(softProperties).to.have.all.keys(['type', 'component', 'items']);
  });

  describe('type', () => {
    it('should be correct', () => {
      expect(softProperties.type).to.equal('items');
    });
  });

  describe('component', () => {
    it('should be correct', () => {
      expect(softProperties.component).to.equal('accordion');
    });
  });

  describe('items', () => {
    it('should have correct properties', () => {
      expect(softProperties.items).to.have.all.keys(['data', 'presentation', 'color']);
    });

    describe('data', () => {
      it('should have correct properties', () => {
        expect(softProperties.items.data).to.have.all.keys(['uses']);
      });

      describe('uses', () => {
        it('should be correct', () => {
          expect(softProperties.items.data.uses).to.equal('data');
        });
      });
    });

    describe('presentation', () => {
      it('should have correct properties', () => {
        expect(softProperties.items.presentation).to.have.all.keys(['uses', 'items']);
      });

      describe('uses', () => {
        it('should be correct', () => {
          expect(softProperties.items.presentation.uses).to.equal('presentation');
        });
      });

      describe('items', () => {
        it('should have correct properties', () => {
          expect(softProperties.items.presentation.items).to.have.all.keys([
            'showNavigation',
            'showLabels',
            'bubbleSizes',
            'rangeBubbleSizes',
            'queryLevel',
          ]);
        });

        describe('showNavigation', () => {
          it('should have correct properties', () => {
            expect(softProperties.items.presentation.items.showNavigation).to.have.all.keys([
              'type',
              'translation',
              'component',
              'ref',
              'options',
            ]);
          });

          describe('type', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.showNavigation.type).to.equal('boolean');
            });
          });

          describe('translation', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.showNavigation.translation).to.equal('Common.Navigation');
            });
          });

          describe('component', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.showNavigation.component).to.equal('switch');
            });
          });

          describe('ref', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.showNavigation.ref).to.equal('navigation');
            });
          });

          describe('options', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.showNavigation.options).to.deep.equal([
                {
                  value: true,
                  translation: 'Common.Auto',
                },
                {
                  value: false,
                  translation: 'properties.off',
                },
              ]);
            });
          });
        });

        describe('showLabels', () => {
          it('should have correct properties', () => {
            expect(softProperties.items.presentation.items.showLabels).to.have.all.keys([
              'type',
              'translation',
              'component',
              'ref',
              'options',
            ]);
          });

          describe('type', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.showLabels.type).to.equal('number');
            });
          });

          describe('translation', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.showLabels.translation).to.equal('properties.labels');
            });
          });

          describe('component', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.showLabels.component).to.equal('radio-list');
            });
          });

          describe('ref', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.showLabels.ref).to.equal('labels.mode');
            });
          });

          describe('options', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.showLabels.options()).to.deep.equal([
                {
                  value: 1,
                  translation: 'Common.Auto',
                },
                {
                  value: 2,
                  translation: 'Common.All',
                },
                {
                  value: 0,
                  translation: 'Common.None',
                },
              ]);
            });
          });
        });

        describe('bubbleSizes', () => {
          it('should have correct properties', () => {
            expect(softProperties.items.presentation.items.bubbleSizes).to.have.all.keys([
              'type',
              'translation',
              'component',
              'ref',
              'min',
              'max',
              'step',
              'show',
            ]);
          });

          describe('type', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.bubbleSizes.type).to.equal('integer');
            });
          });

          describe('translation', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.bubbleSizes.translation).to.equal(
                'properties.dataPoints.bubbleSizes'
              );
            });
          });

          describe('component', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.bubbleSizes.component).to.equal('slider');
            });
          });

          describe('ref', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.bubbleSizes.ref).to.equal('dataPoint.bubbleSizes');
            });
          });

          describe('min', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.bubbleSizes.min).to.equal(1);
            });
          });

          describe('max', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.bubbleSizes.max).to.equal(20);
            });
          });

          describe('step', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.bubbleSizes.step).to.equal(1);
            });
          });

          describe('show', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.bubbleSizes.show).to.equal(showBubbleSizes.default);
            });
          });
        });

        describe('rangeBubbleSizes', () => {
          it('should have correct properties', () => {
            expect(softProperties.items.presentation.items.rangeBubbleSizes).to.have.all.keys([
              'type',
              'translation',
              'component',
              'ref',
              'min',
              'max',
              'step',
              'show',
            ]);
          });

          describe('type', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.rangeBubbleSizes.type).to.equal('array');
            });
          });

          describe('translation', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.rangeBubbleSizes.translation).to.equal(
                'properties.dataPoints.bubbleSizes'
              );
            });
          });

          describe('component', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.rangeBubbleSizes.component).to.equal('slider');
            });
          });

          describe('ref', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.rangeBubbleSizes.ref).to.equal(
                'dataPoint.rangeBubbleSizes'
              );
            });
          });

          describe('min', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.rangeBubbleSizes.min).to.equal(1);
            });
          });

          describe('max', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.rangeBubbleSizes.max).to.equal(20);
            });
          });

          describe('step', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.rangeBubbleSizes.step).to.equal(1);
            });
          });

          describe('show', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.rangeBubbleSizes.show).to.equal(
                showRangeBubbleSizes.default
              );
            });
          });
        });

        describe('queryLevel', () => {
          it('should have correct properties', () => {
            expect(softProperties.items.presentation.items.queryLevel).to.have.all.keys([
              'type',
              'translation',
              'component',
              'ref',
              'min',
              'max',
              'step',
              'show',
            ]);
          });

          describe('type', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.queryLevel.type).to.equal('integer');
            });
          });

          describe('translation', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.queryLevel.translation).to.equal(
                'properties.compression.resolution'
              );
            });
          });

          describe('component', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.queryLevel.component).to.equal('slider');
            });
          });

          describe('ref', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.queryLevel.ref).to.equal('compressionResolution');
            });
          });

          describe('min', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.queryLevel.min).to.equal(4);
            });
          });

          describe('max', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.queryLevel.max).to.equal(8);
            });
          });

          describe('step', () => {
            it('should be correct', () => {
              expect(softProperties.items.presentation.items.queryLevel.step).to.equal(1);
            });
          });

          describe('show', () => {
            let data;
            let layout;
            beforeEach(() => {
              data = {};
              layout = {};
            });

            it('should run correct function', () => {
              softProperties.items.presentation.items.queryLevel.show(data, layout);
              expect(showCompressionResolution.default.callCount).to.equal(1);
              expect(showCompressionResolution.default).to.have.been.calledWith(layout);
            });

            it('should run true if showCompressionResolution return true', () => {
              showCompressionResolution.default.returns(true);
              const res = softProperties.items.presentation.items.queryLevel.show(data, layout);
              expect(res).to.equal(true);
            });

            it('should run false if showCompressionResolution return false', () => {
              showCompressionResolution.default.returns(false);
              const res = softProperties.items.presentation.items.queryLevel.show(data, layout);
              expect(res).to.equal(false);
            });
          });
        });
      });
    });

    describe('color', () => {
      it('should have correct properties', () => {
        expect(softProperties.items.color).to.have.all.keys(['uses', 'items']);
      });

      describe('uses', () => {
        it('should be correct', () => {
          expect(softProperties.items.color.uses).to.equal('color');
        });
      });

      describe('items', () => {
        it('should have correct properties', () => {
          expect(softProperties.items.color.items).to.have.all.keys(['mode', 'dimension']);
        });

        describe('mode', () => {
          it('should have correct properties', () => {
            expect(softProperties.items.color.items.mode).to.have.all.keys(['options']);
          });

          describe('options', () => {
            it('should be correct', () => {
              expect(softProperties.items.color.items.mode.options).to.equal(colorModeOptions.default);
            });
          });
        });

        describe('dimension', () => {
          it('should have correct properties', () => {
            expect(softProperties.items.color.items.dimension).to.have.all.keys(['items']);
          });

          describe('items', () => {
            it('should have correct properties', () => {
              expect(softProperties.items.color.items.dimension.items).to.have.all.keys([
                'colorScheme',
                'persistentColors',
              ]);
            });

            describe('colorScheme', () => {
              it('should have correct properties', () => {
                expect(softProperties.items.color.items.dimension.items.colorScheme).to.have.all.keys(['show']);
              });

              describe('show', () => {
                it('should be correct', () => {
                  expect(softProperties.items.color.items.dimension.items.colorScheme.show).to.equal(
                    showColorScheme.default
                  );
                });
              });
            });

            describe('persistentColors', () => {
              it('should have correct properties', () => {
                expect(softProperties.items.color.items.dimension.items.persistentColors).to.have.all.keys(['show']);
              });

              describe('show', () => {
                it('should be correct', () => {
                  expect(softProperties.items.color.items.dimension.items.persistentColors.show).to.equal(
                    showPersistentColors.default
                  );
                });
              });
            });
          });
        });
      });
    });
  });
});
