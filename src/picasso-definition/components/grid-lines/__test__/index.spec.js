import * as KEYS from '../../../../constants/keys';
import createGridLines from '..';

describe('grid-line', () => {
  let sandbox;
  let layoutService;
  let themeService;
  let gridLine;
  let create;

  before(() => {
    sandbox = sinon.createSandbox();
    layoutService = {
      getLayoutValue: sandbox.stub(),
    };
    themeService = { getStyles: sandbox.stub() };
    create = () =>
      createGridLines({
        layoutService,
        themeService,
      });
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
        },
      },
    });

    sandbox.stub(KEYS, 'default').returns({
      SCALE: { X: 'x', Y: 'y' },
      COMPONENT: {
        GRID_LINES: 'grid-lines',
      },
    });
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
        expect(create().ticks.stroke).to.equal('major-style' || '#cccccc');
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
  });
});
