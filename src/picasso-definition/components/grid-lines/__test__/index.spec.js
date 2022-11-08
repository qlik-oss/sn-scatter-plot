import * as KEYS from '../../../../constants/keys';
import createGridLines from '..';

describe('grid-line', () => {
  let sandbox;
  let layoutService;
  let themeService;
  let gridLine;
  let create;
  let animationsEnabled;

  before(() => {
    sandbox = sinon.createSandbox();
    layoutService = {
      getLayoutValue: sandbox.stub(),
    };
    themeService = { getStyles: sandbox.stub() };
    create = () =>
      createGridLines(
        {
          layoutService,
          themeService,
        },
        animationsEnabled
      );
  });

  beforeEach(() => {
    sandbox.reset();
    gridLine = {
      auto: true,
      spacing: 1,
    };
    layoutService.getLayoutValue.withArgs('gridLine', {}).returns(gridLine);
    themeService.getStyles.returns({
      grid: {
        line: {
          major: { color: 'major-style' },
          minor: { color: 'minor-style' },
          highContrast: { color: '#e6e6e6' },
        },
      },
    });

    sandbox.stub(KEYS, 'default').returns({
      SCALE: { X: 'x', Y: 'y' },
      COMPONENT: {
        GRID_LINES: 'grid-lines',
      },
    });

    animationsEnabled = () => true;
  });

  after(() => {
    sandbox.restore();
  });
  // No lines
  it('should return false if is not auto and is spacing 0', () => {
    gridLine.auto = false;
    gridLine.spacing = 0;
    expect(create()).to.be.false;
  });
  // Wide
  it('should return a definition if is not auto and spacing is 1', () => {
    gridLine.auto = false;
    gridLine.spacing = 1;
    expect(create()).to.be.an('object');
  });
  // Medium
  it('should return a definition if is not auto and spacing is 2', () => {
    gridLine.auto = false;
    gridLine.spacing = 2;
    expect(create()).to.be.an('object');
  });
  // Narrow
  it('should return a definition if is not auto and spacing is 3', () => {
    gridLine.auto = false;
    gridLine.spacing = 3;
    expect(create()).to.be.an('object');
  });

  it('should return a definition if is auto and spacing is 0', () => {
    gridLine.auto = true;
    gridLine.spacing = 0;
    expect(create()).to.be.an('object');
  });

  it('should return a definition if is auto and spacing is 1', () => {
    gridLine.auto = true;
    gridLine.spacing = 1;
    expect(create()).to.be.an('object');
  });

  it('should return a definition if is auto and spacing is 2', () => {
    gridLine.auto = true;
    gridLine.spacing = 2;
    expect(create()).to.be.an('object');
  });

  it('should return a definition if is auto and spacing is 3', () => {
    gridLine.auto = true;
    gridLine.spacing = 3;
    expect(create()).to.be.an('object');
  });

  describe('definition', () => {
    it('should have correct key', () => {
      expect(create().key).to.equal('grid-lines');
    });

    it('should have correct type', () => {
      expect(create().type).to.equal('grid-line');
    });

    it('should have correct X scale', () => {
      expect(create().x.scale).to.equal('x');
    });
    it('should have correct Y scale', () => {
      expect(create().y.scale).to.equal('y');
    });

    describe('preferredSize', () => {
      it('should return correct edgeBleed', () => {
        const result = create();
        expect(result.preferredSize()).to.deep.equal({ edgeBleed: { left: 1, right: 1, top: 1, bottom: 1 } });
      });
    });

    describe('ticks', () => {
      it('should have correct properties', () => {
        expect(create().ticks).to.have.all.keys(['show', 'stroke', 'strokeWidth']);
      });

      describe('show', () => {
        it('should be a function if is not auto and spacing is 1', () => {
          gridLine.auto = false;
          gridLine.spacing = 1;
          expect(create().ticks.show).to.be.a('function');
        });

        describe('show function', () => {
          it('should return true if even index', () => {
            gridLine.auto = false;
            gridLine.spacing = 1;
            const { show } = create().ticks;
            expect(show(undefined, 0)).to.be.true;
            expect(show(undefined, 2)).to.be.true;
            expect(show(undefined, 4)).to.be.true;
            expect(show(undefined, 6)).to.be.true;
          });

          it('should return false if odd index', () => {
            gridLine.auto = false;
            gridLine.spacing = 1;
            const { show } = create().ticks;
            expect(show(undefined, 1)).to.be.false;
            expect(show(undefined, 3)).to.be.false;
            expect(show(undefined, 5)).to.be.false;
            expect(show(undefined, 7)).to.be.false;
          });
        });

        it('should be true if is not auto and spacing is 2', () => {
          gridLine.auto = false;
          gridLine.spacing = 2;
          expect(create().ticks.show).to.be.true;
        });

        it('should be true if is not auto and spacing is 3', () => {
          gridLine.auto = false;
          gridLine.spacing = 3;
          expect(create().ticks.show).to.be.true;
        });

        it('should be true if is auto and spacing is 0', () => {
          gridLine.auto = true;
          gridLine.spacing = 0;
          expect(create().ticks.show).to.be.true;
        });

        it('should be true if is auto and spacing is 1', () => {
          gridLine.auto = true;
          gridLine.spacing = 1;
          expect(create().ticks.show).to.be.true;
        });

        it('should be true if is auto and spacing is 2', () => {
          gridLine.auto = true;
          gridLine.spacing = 2;
          expect(create().ticks.show).to.be.true;
        });

        it('should be true if is auto and spacing is 3', () => {
          gridLine.auto = true;
          gridLine.spacing = 3;
          expect(create().ticks.show).to.be.true;
        });
      });

      it('should have correct stroke', () => {
        const d = {
          datum: {
            value: 5,
          },
        };
        expect(create().ticks.stroke(d)).to.equal('major-style' || '#cccccc');
        d.datum.value = 0;
        expect(create().ticks.stroke(d)).to.equal('#e6e6e6');
      });
    });

    describe('minorTicks', () => {
      it('should have correct properties', () => {
        expect(create().minorTicks).to.have.all.keys(['show', 'stroke', 'strokeWidth']);
      });

      describe('show', () => {
        // Wide
        it('should be false if is not auto and spacing is 1', () => {
          gridLine.auto = false;
          gridLine.spacing = 1;
          expect(create().minorTicks.show).to.be.false;
        });
        // Medium
        it('should be false if is not auto and spacing is 2', () => {
          gridLine.auto = false;
          gridLine.spacing = 2;
          expect(create().minorTicks.show).to.be.false;
        });
        // Narrow
        it('should be true if is not auto and spacing is 3', () => {
          gridLine.auto = false;
          gridLine.spacing = 3;
          expect(create().minorTicks.show).to.be.true;
        });

        it('should be false if is auto and spacing is 0', () => {
          gridLine.auto = true;
          gridLine.spacing = 0;
          expect(create().minorTicks.show).to.be.false;
        });

        it('should be false if is auto and spacing is 1', () => {
          gridLine.auto = true;
          gridLine.spacing = 1;
          expect(create().minorTicks.show).to.be.false;
        });

        it('should be false if is auto and spacing is 2', () => {
          gridLine.auto = true;
          gridLine.spacing = 2;
          expect(create().minorTicks.show).to.be.false;
        });

        it('should be false if is auto and spacing is 3', () => {
          gridLine.auto = true;
          gridLine.spacing = 3;
          expect(create().minorTicks.show).to.be.false;
        });
      });

      it('should have correct stroke', () => {
        expect(create().minorTicks.stroke).to.equal('minor-style' || '#d1d1d1');
      });
    });

    describe('animation', () => {
      describe('enabled', () => {
        it('should be true if animation is enabled', () => {
          expect(create().animations.enabled()).to.equal(true);
        });

        it('should be false if animation is not enabled', () => {
          animationsEnabled = () => false;
          expect(create().animations.enabled()).to.equal(false);
        });
      });

      describe('trackBy', () => {
        it('should be return correct IDs', () => {
          const node = { dir: 'x', value: 1000 };
          expect(create().animations.trackBy(node)).to.equal('x: 1000');
        });
      });

      describe('compensateForLayoutChanges', () => {
        let currentNodes = [{ x1: 10, x2: 10, y1: 10, y2: 100 }];
        let currentRect = { width: 200, x: 10 };
        let previousRect = { width: 200, x: 10 };
        it('should not adjust grid lines if the rect does not change', () => {
          create().animations.compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
          expect(currentNodes).to.deep.equal([{ x1: 10, x2: 10, y1: 10, y2: 100 }]);
        });

        it('should adjust grid lines correctly if the rect shifts 5px to left and increases 10px in width', () => {
          currentRect = { width: 210, x: 5 };
          previousRect = { width: 200, x: 10 };
          currentNodes = [
            { dir: 'x', x1: 50, x2: 50, y1: 10, y2: 100 },
            { dir: 'y', x1: 0, x2: 200, y1: 50, y2: 50 },
          ];
          create().animations.compensateForLayoutChanges({ currentNodes, currentRect, previousRect });
          expect(currentNodes).to.deep.equal([
            { dir: 'x', x1: 55, x2: 55, y1: 10, y2: 100 },
            { dir: 'y', x1: 0, x2: 210, y1: 50, y2: 50 },
          ]);
        });
      });
    });
  });
});
