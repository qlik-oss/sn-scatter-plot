import createStyleService from '..';

describe('createStyleService', () => {
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
    };

    themeService = { getStyles: sandbox.stub() };
    themeService.getStyles.returns(themeStyles);
  });

  const create = () =>
    createStyleService({
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
    expect(create().query).to.have.all.keys(['axis', 'label', 'referenceLine']);
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
            axis: { title: { fontFamily: 'Arial, sans-serif', fontSize: '44', color: 'green' } },
          };
          layoutService.getLayoutValue.withArgs('components', []).returns([component, { key: 'lind', line: {} }]);
          const { fontSize, fontFamily, color } = create().query.axis.title.getStyle();
          expect(fontSize).to.equal('44');
          expect(fontFamily).to.equal('Arial, sans-serif');
          expect(color).to.equal('green');
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
              label: { name: { fontFamily: 'Arial, sans-serif', fontSize: '44', color: { color: 'yellow' } } },
            },
          };
          layoutService.getLayoutValue.withArgs('components', []).returns([component, { key: 'line' }]);
          const { fontSize, fontFamily, fill } = create().query.axis.label.getStyle();
          expect(fontSize).to.equal('44');
          expect(fontFamily).to.equal('Arial, sans-serif');
          expect(fill).to.equal('yellow');
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

      it('should return correct result when layout components has axis and other components', () => {
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

        it('should return correct result when layout components has axis and other components', () => {
          component = {
            key: 'referenceLine',
            referenceLine: {
              label: { name: { fontFamily: 'Arial, sans-serif', fontSize: '44', color: { color: 'yellow' } } },
            },
          };
          layoutService.getLayoutValue.withArgs('components', []).returns([component, { key: 'line' }]);
          const { fontSize, fontFamily, fill } = create().query.referenceLine.label.getStyle();
          expect(fontSize).to.equal('44');
          expect(fontFamily).to.equal('Arial, sans-serif');
          expect(fill).to.equal('yellow');
        });
      });
    });
  });
});
