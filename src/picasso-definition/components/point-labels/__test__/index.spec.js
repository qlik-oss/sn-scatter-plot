import * as KEYS from '../../../../constants/keys';
import createPointLabels from '..';

describe('point-labels', () => {
  let sandbox;
  let layoutModel;
  let labels;
  let create;

  before(() => {
    sandbox = sinon.createSandbox();
    layoutModel = {
      getLayoutValue: sandbox.stub(),
    };
    create = () =>
      createPointLabels({
        layoutModel,
      });
  });

  beforeEach(() => {
    sandbox.reset();
    labels = {
      mode: 1,
    };
    layoutModel.getLayoutValue.withArgs('labels').returns(labels);
    sandbox.stub(KEYS, 'default').returns({
      COMPONENT: {
        POINT: 'point-component',
        POINT_LABELS: 'point-labels',
      },
    });
  });

  after(() => {
    sandbox.restore();
  });
  // No labels
  it('should return false if is label mode is 0', () => {
    labels.mode = 0;
    expect(create()).to.be.false;
  });
  // Auto
  it('should return a component if label mode is 1', () => {
    labels.mode = 1;
    expect(create()).to.be.an('object');
  });
  // All
  it('should return a component if label mode is 2', () => {
    labels.mode = 2;
    expect(create()).to.be.an('object');
  });

  describe('component', () => {
    it('should have correct key', () => {
      expect(create().key).to.equal('point-labels');
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
        it('should have correct component', () => {
          expect(create().settings.sources[0].component).to.equal('point-component');
        });
        it('should have correct selector', () => {
          expect(create().settings.sources[0].selector).to.equal('circle');
        });

        describe('strategy', () => {
          it('should have correct properties', () => {
            expect(create().settings.sources[0].strategy).to.have.all.keys(['type', 'settings']);
          });
          it('should have correct type', () => {
            expect(create().settings.sources[0].strategy.type).to.equal('bar');
          });

          describe('settings', () => {
            it('should have correct properties', () => {
              expect(create().settings.sources[0].strategy.settings).to.have.all.keys(['direction', 'labels']);
            });
            it('should have correct direction', () => {
              expect(create().settings.sources[0].strategy.settings.direction).to.equal('up');
            });
            describe('labels', () => {
              it('should have correct properties', () => {
                expect(create().settings.sources[0].strategy.settings.labels[0]).to.have.all.keys([
                  'placements',
                  'label',
                ]);
              });
              describe('placements', () => {
                it('should have correct properties', () => {
                  expect(create().settings.sources[0].strategy.settings.labels[0].placements[0]).to.have.all.keys([
                    'position',
                    'justify',
                    'align',
                    'fill',
                    'overflow',
                  ]);
                });
                it('should have correct position', () => {
                  expect(create().settings.sources[0].strategy.settings.labels[0].placements[0].position).to.equal(
                    'outside'
                  );
                });
                it('should have correct justify', () => {
                  expect(create().settings.sources[0].strategy.settings.labels[0].placements[0].justify).to.equal(0);
                });
                it('should have correct align', () => {
                  expect(create().settings.sources[0].strategy.settings.labels[0].placements[0].align).to.equal(0.5);
                });
                it('should have correct fill', () => {
                  expect(create().settings.sources[0].strategy.settings.labels[0].placements[0].fill).to.equal('black');
                });
                it('should have correct overflow', () => {
                  expect(create().settings.sources[0].strategy.settings.labels[0].placements[0].overflow).to.equal(
                    true
                  );
                });
              });

              describe('label', () => {
                it('should be a function if label mode is 1', () => {
                  labels.mode = 1;
                  expect(create().settings.sources[0].strategy.settings.labels[0].label).to.be.a('function');
                });
                it('should be a function if label mode is 2', () => {
                  labels.mode = 2;
                  expect(create().settings.sources[0].strategy.settings.labels[0].label).to.be.a('function');
                });
              });
            });
          });
        });
      });
    });
  });
});
