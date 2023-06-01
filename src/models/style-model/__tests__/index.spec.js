import createStyleModel from '..';

describe('createStyleModel', () => {
  let sandbox;
  let layoutService;
  let themeService;
  let flags;
  let themeStyles;
  let component;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    layoutService = { getLayoutValue: sandbox.stub() };
    layoutService.getLayoutValue.withArgs('components', []).returns([]);
    flags = {
      isEnabled: () => true,
    };

    themeStyles = {
      axis: {
        title: {
          fontFamily: 'Arial, sans-serif',
          fontSize: '12',
          color: 'green',
        },
        label: {
          name: {
            color: 'blue',
            fontSize: '13',
            fontFamily: 'Comic Sans MS, cursive',
          },
        },
      },
      label: {
        value: {
          color: 'red',
          fontSize: '15',
          fontFamily: 'Times New Roman',
        },
      },
      referenceLine: {
        label: {
          name: {
            color: 'blue',
            fontSize: '13',
            fontFamily: 'Comic Sans MS, cursive',
          },
        },
      },
      legend: {
        title: {
          fontFamily: 'Arial, sans-serif',
          fontSize: '12',
          color: 'green',
        },
        label: {
          fontFamily: 'Comic Sans MS, cursive',
          fontSize: '13',
          color: 'blue',
        },
      },
    };

    themeService = { getStyles: sandbox.stub() };
    themeService.getStyles.returns(themeStyles);
  });

  const create = () =>
    createStyleModel({
      layoutService,
      themeService,
      flags,
    });

  afterEach(() => {
    sandbox.restore();
  });
  it('should return a definition', () => {
    expect(create()).to.be.an('object');
  });

  it('should have correct properties', () => {
    expect(create()).to.have.all.keys(['query']);
  });

  it('query should have correct properties', () => {
    expect(create().query).to.have.all.keys(['axis', 'label', 'referenceLine', 'legend']);
  });

  describe('legend', () => {
    it('should expose correct properties', () => {
      expect(create().query.legend).to.have.all.keys(['title', 'label']);
    });

    describe('title', () => {
      it('should expose correct properties', () => {
        expect(create().query.legend.title).to.have.all.keys(['getStyle']);
      });

      describe('getStyle', () => {
        it('should return theme style when no matching component', () => {
          layoutService.getLayoutValue.withArgs('components', []).returns([]);
          expect(create().query.legend.title.getStyle()).to.deep.equal(themeStyles.legend.title);
        });

        it('should return legend title component', () => {
          component = {
            key: 'legend',
            legend: { title: { fontFamily: 'TheFont', fontSize: '1234', color: { color: 'tranquil-teal', index: 3 } } },
          };
          layoutService.getLayoutValue.withArgs('components', []).returns([component, { key: 'line', line: {} }]);
          const { fontSize, fontFamily, color } = create().query.legend.title.getStyle();
          expect(fontSize).to.equal('1234');
          expect(fontFamily).to.equal('TheFont');
          expect(color).to.equal('tranquil-teal');
        });
      });
    });

    describe('label', () => {
      it('should expose correct properties', () => {
        expect(create().query.legend.label).to.have.all.keys(['getStyle']);
      });

      describe('getStyle', () => {
        it('should return theme style when no matching component', () => {
          layoutService.getLayoutValue.withArgs('components', []).returns([]);
          expect(create().query.legend.label.getStyle()).to.deep.equal(themeStyles.legend.label);
        });

        it('should return legend title component', () => {
          component = {
            key: 'legend',
            legend: { label: { fontFamily: 'DuFont', fontSize: '14234', color: { color: 'tranquil-blue', index: 3 } } },
          };
          layoutService.getLayoutValue.withArgs('components', []).returns([component, { key: 'line', line: {} }]);
          const { fontSize, fontFamily, color } = create().query.legend.label.getStyle();
          expect(fontSize).to.equal('14234');
          expect(fontFamily).to.equal('DuFont');
          expect(color).to.equal('tranquil-blue');
        });
      });
    });
  });

  describe('axis', () => {
    it('should expose correct properties', () => {
      expect(create().query.axis).to.have.all.keys(['title', 'label']);
    });

    describe('title', () => {
      it('should expose correct properties', () => {
        expect(create().query.axis.title).to.have.all.keys(['getStyle']);
      });

      describe('getStyle', () => {
        it('should return theme style when no matching component', () => {
          layoutService.getLayoutValue.withArgs('components', []).returns([]);
          expect(create().query.axis.title.getStyle()).to.deep.equal(themeStyles.axis.title);
        });

        it('should return axis title component', () => {
          component = {
            key: 'axis',
            axis: { title: { fontFamily: 'Arial, sans-serif', fontSize: '44', color: { color: 'greens', index: 3 } } },
          };
          layoutService.getLayoutValue.withArgs('components', []).returns([component, { key: 'line', line: {} }]);
          const { fontSize, fontFamily, color } = create().query.axis.title.getStyle();
          expect(fontSize).to.equal('44');
          expect(fontFamily).to.equal('Arial, sans-serif');
          expect(color).to.equal('greens');
        });
      });
    });

    describe('label', () => {
      it('should expose correct properties', () => {
        expect(create().query.axis.label).to.have.all.keys(['getStyle']);
      });

      describe('getStyle', () => {
        it('should return theme style when no matching component', () => {
          layoutService.getLayoutValue.withArgs('components', []).returns([]);
          const { fontSize, fontFamily, fill } = create().query.axis.label.getStyle();
          expect(fontSize).to.equal(themeStyles.axis.label.name.fontSize);
          expect(fontFamily).to.equal(themeStyles.axis.label.name.fontFamily);
          expect(fill).to.equal(themeStyles.axis.label.name.color);
        });

        it('should return axis label component', () => {
          component = {
            key: 'axis',
            axis: {
              label: { name: { fontFamily: 'Arials, sans-serif', fontSize: '444', color: { color: 'black' } } },
            },
          };
          layoutService.getLayoutValue.withArgs('components', []).returns([component, { key: 'line' }]);
          const { fontSize, fontFamily, fill } = create().query.axis.label.getStyle();
          expect(fontSize).to.equal('444');
          expect(fontFamily).to.equal('Arials, sans-serif');
          expect(fill).to.equal('black');
        });
      });
    });
  });

  describe('label', () => {
    it('should expose correct properties', () => {
      expect(create().query.label).to.have.all.keys(['getStyle']);
    });
    describe('getStyle', () => {
      it('should return theme style when no matching component', () => {
        layoutService.getLayoutValue.withArgs('components', []).returns([]);
        const { fontSize, fontFamily, fill } = create().query.label.getStyle();
        expect(fontSize).to.equal(themeStyles.label.value.fontSize);
        expect(fontFamily).to.equal(themeStyles.label.value.fontFamily);
        expect(fill).to.equal(themeStyles.label.value.color);
      });

      it('should return label component', () => {
        component = {
          key: 'label',
          label: { value: { fontFamily: 'Arial, sans-serif', fontSize: '44', color: { color: 'yellow' } } },
        };
        layoutService.getLayoutValue.withArgs('components', []).returns([component, { key: 'line' }]);
        const { fontSize, fontFamily, fill } = create().query.label.getStyle();
        expect(fontSize).to.equal('44');
        expect(fontFamily).to.equal('Arial, sans-serif');
        expect(fill).to.equal('yellow');
      });
    });
  });

  describe('reference line', () => {
    it('should expose correct properties', () => {
      expect(create().query.referenceLine).to.have.all.keys(['label']);
    });
    describe('label', () => {
      it('should expose correct properties', () => {
        expect(create().query.referenceLine.label).to.have.all.keys(['getStyle']);
      });
      describe('getStyle', () => {
        it('should return theme style when no matching component', () => {
          layoutService.getLayoutValue.withArgs('components', []).returns([]);
          const { fontSize, fontFamily, fill } = create().query.referenceLine.label.getStyle();
          expect(fontSize).to.equal(themeStyles.referenceLine.label.name.fontSize);
          expect(fontFamily).to.equal(themeStyles.referenceLine.label.name.fontFamily);
          expect(fill).to.equal(themeStyles.referenceLine.label.name.color);
        });
      });
    });
  });
});
