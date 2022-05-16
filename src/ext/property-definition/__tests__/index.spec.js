import * as chartModules from 'qlik-chart-modules';
import propertyPanelDef from '..';

describe('property panel definition', () => {
  const env = {
    translator: {
      get: (text) => `translated-${text}`,
    },
  };
  let def;
  beforeEach(() => {
    def = propertyPanelDef(env);
  });

  it('should have all keys', () => {
    expect(def).to.have.all.keys(['type', 'component', 'items']);
  });

  describe('items', () => {
    it('should have all keys', () => {
      expect(Object.keys(def.items)).to.eql(['data', 'addons', 'settings']);
    });

    describe('settings', () => {
      it('should have all keys', () => {
        expect(def.items.settings).to.have.all.keys(['uses', 'items']);
      });

      describe('items', () => {
        it('should have all keys', () => {
          expect(def.items.settings.items).to.have.all.keys([
            'general',
            'presentation',
            'colorsAndLegend',
            'xAxis',
            'yAxis',
            'tooltips',
          ]);
        });

        describe('presentation', () => {
          it('should have all keys', () => {
            expect(def.items.settings.items.presentation).to.have.all.keys(['type', 'translation', 'grouped', 'items']);
          });

          describe('items', () => {
            describe('bubbleSizeItems', () => {
              describe('items', () => {
                describe('bubbleSizes', () => {
                  describe('show', () => {
                    it('should only show bubble sizes when appropriate', () => {
                      const showFn = def.items.settings.items.presentation.items.bubbleSizeItems.items.bubbleSizes.show;
                      expect(
                        showFn({ qHyperCubeDef: { qMeasures: ['m1', 'm2', 'm3'] } }),
                        'not when there are more than 2 measures'
                      ).to.be.false;
                    });
                  });
                });

                describe('rangeBubbleSizes', () => {
                  describe('show', () => {
                    it('should only show range bubble sizes when appropriate', () => {
                      const showFn =
                        def.items.settings.items.presentation.items.bubbleSizeItems.items.rangeBubbleSizes.show;
                      expect(
                        showFn({ qHyperCubeDef: { qMeasures: ['m1', 'm2', 'm3'] } }),
                        'when there are more than 2 measures'
                      ).to.be.true;
                    });
                  });
                });

                describe('queryLevel', () => {
                  describe('show', () => {
                    it('should only show queryLevel when appropriate', () => {
                      const showFn = def.items.settings.items.presentation.items.queryLevel.show;
                      expect(
                        showFn({}, { layout: { qHyperCube: { qDimensionInfo: [{ qCardinal: 1001 }] } } }),
                        'when qCardinal is larger than 1000'
                      ).to.be.true;
                    });
                  });
                });

                describe('gridLines', () => {
                  describe('items', () => {
                    describe('gridSpacing', () => {
                      describe('show', () => {
                        it('should only show grid lines when appropriate', () => {
                          const showFn = def.items.settings.items.presentation.items.gridLines.items.gridSpacing.show;
                          expect(showFn({ gridLine: { auto: true } }), 'not when gridLine is set to auto').to.be.false;
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });

        describe('colorsAndLegend', () => {
          describe('items', () => {
            describe('colors', () => {
              describe('items', () => {
                describe('persistenColors', () => {
                  describe('show', () => {
                    it('should return correct value when useDimValColShowFunc return true', () => {
                      const showFn = def.items.settings.items.colorsAndLegend.items.colors.items.persistentColors.show;
                      const sandbox = sinon.createSandbox();
                      sandbox.stub(chartModules, 'setValue');
                      sandbox.stub(chartModules, 'getValue');
                      chartModules.getValue.withArgs('data', 'color.auto').returns(false);
                      chartModules.getValue.withArgs('data', 'color.mode').returns('byDimension');
                      chartModules.getValue.withArgs('data', 'color.byDimDef.type').returns('libraryItem');
                      chartModules.getValue.withArgs('data', 'color.useDimColVal').returns(false);
                      expect(showFn('data')).to.equal(true);
                      sandbox.restore();
                    });

                    it('should return correct value when useDimValColShowFunc return false', () => {
                      const showFn = def.items.settings.items.colorsAndLegend.items.colors.items.persistentColors.show;
                      const sandbox = sinon.createSandbox();
                      sandbox.stub(chartModules, 'setValue');
                      sandbox.stub(chartModules, 'getValue');
                      chartModules.getValue.withArgs('data', 'color.auto').returns(false);
                      chartModules.getValue.withArgs('data', 'color.mode').returns('byDimension');
                      chartModules.getValue.withArgs('data', 'color.byDimDef.type').returns(false);
                      chartModules.getValue.withArgs('data', 'color.useDimColVal').returns(undefined);
                      expect(showFn('data')).to.equal(true);
                      sandbox.restore();
                    });
                  });
                });
              });
            });
          });
        });
      });
    });

    it('should return correct color options', () => {
      const optionFn = def.items.settings.items.colorsAndLegend.items.colors.items.colorMode.options;
      expect(
        optionFn({ qHyperCubeDef: { qMeasures: ['m1', 'm2', 'm3'] } }),
        'when there is at least one measure'
      ).to.deep.equal([
        {
          value: 'primary',
          translation: 'properties.colorMode.primary',
        },
        {
          value: 'byDimension',
          translation: 'properties.colorMode.byDimension',
        },
        {
          value: 'byMeasure',
          translation: 'properties.colorMode.byMeasure',
        },
        {
          value: 'byExpression',
          translation: 'properties.colorMode.byExpression',
        },
      ]);
    });

    it('should return correct color options', () => {
      const optionFn = def.items.settings.items.colorsAndLegend.items.colors.items.colorMode.options;
      expect(optionFn({ qHyperCubeDef: {} }), 'when qHyperCubeDef is empty').to.deep.equal([
        {
          value: 'primary',
          translation: 'properties.colorMode.primary',
        },
        {
          value: 'byDimension',
          translation: 'properties.colorMode.byDimension',
        },
        {
          value: 'byMeasure',
          translation: 'properties.colorMode.byMeasure',
        },
      ]);
    });

    it('should only show legend settings when appropriate', () => {
      const showFn = def.items.settings.items.colorsAndLegend.items.legend.show;
      expect(showFn({ color: { auto: true } }), 'not when coloring is set to auto').to.be.false;
      expect(showFn({ color: { auto: false, mode: 'primary' } }), 'not when coloring by single color').to.be.false;
      expect(showFn({ color: { auto: false, mode: 'byDimension' } }), 'when coloring by dimension').to.be.true;
      expect(showFn({ color: { auto: false, mode: 'byMeasure' } }), 'when coloring by measure').to.be.true;
      expect(
        showFn({ color: { auto: false, mode: 'byExpression' } }),
        'when coloring by expression that is not a color code'
      ).to.be.true;
      expect(
        showFn({ color: { auto: false, mode: 'byExpression', expressionIsColor: true } }),
        'not when coloring by expression that is a color code'
      ).to.be.false;
    });

    describe('xAxis', () => {
      it('should show correct translated xAxis', () => {
        const labelFn = def.items.settings.items.xAxis.label;
        const properties = 'some properties';
        const sandbox = sinon.createSandbox();
        let handler = {
          getMeasureLayouts: sandbox.stub().returns([{ qError: false, qFallbackTitle: 'fb title' }]),
        };
        expect(labelFn(properties, handler), 'with info when there is no error').to.deep.equal(
          'translated-properties.xAxisWithInfo'
        );
        handler = { getMeasureLayouts: sandbox.stub().returns([{ qError: true, qFallbackTitle: 'fb title' }]) };
        expect(labelFn(properties, handler), 'with no info when there is an error').to.deep.equal(
          'translated-properties.xAxis'
        );
        sandbox.restore();
      });

      it('should only show xAxis when appropriate', () => {
        const showFn = def.items.settings.items.xAxis.items.axis.items.dock.show;
        expect(showFn({ xAxis: { show: 'none' } }), 'not when show property is set to none').to.be.false;
      });

      it('should only show xAxis grid when appropriate', () => {
        const showFn = def.items.settings.items.xAxis.items.axis.items.spacing.show;
        expect(showFn({ xAxis: { show: 'none' } }), 'not when show property is set to none').to.be.false;
      });

      it('should only show xAxis min max when appropriate', () => {
        const showFn = def.items.settings.items.xAxis.items.minMax.items.minMax.show;
        expect(showFn({ xAxis: { autoMinMax: true } }), 'not when autoMinMax is true').to.be.false;
      });

      it('should only show xAxis min when appropriate', () => {
        const showFn = def.items.settings.items.xAxis.items.minMax.items.min.show;
        expect(
          showFn({ xAxis: { autoMinMax: false, minMax: 'min' } }),
          'when autoMinMax is false and minMax is set to min'
        ).to.be.true;
      });

      it('should detect invalidity of xAxis min value correctly', () => {
        const validFn = def.items.settings.items.xAxis.items.minMax.items.min.invalid;
        expect(validFn({ xAxis: { min: 1, max: -1, minMax: 'minMax' } }), 'when min is larger than max').to.be.true;
        expect(validFn({ xAxis: { min: 1, max: -1, minMax: 'min' } }), 'when the minMax property is set to min').to.be
          .false;
      });

      it('should only show xAxis max when appropriate', () => {
        const showFn = def.items.settings.items.xAxis.items.minMax.items.max.show;
        expect(
          showFn({ xAxis: { autoMinMax: false, minMax: 'max' } }),
          'when autoMinMax is false and minMax is set to max'
        ).to.be.true;
      });

      it('should detect invalidity of xAxis max value correctly', () => {
        const validFn = def.items.settings.items.xAxis.items.minMax.items.max.invalid;
        expect(validFn({ xAxis: { min: 1, max: -1, minMax: 'minMax' } }), 'when min is larger than max').to.be.true;
        expect(validFn({ xAxis: { min: 1, max: -1, minMax: 'max' } }), 'when the minMax property is set to max').to.be
          .false;
      });

      describe('measureAxisTitle', () => {
        it('should have correct properties', () => {
          expect(def.items.settings.items.xAxis.items.axis.items.measureAxisTitle).to.have.all.keys([
            'component',
            'type',
            'label',
            'classification',
          ]);
        });

        it('should have correct component', () => {
          expect(def.items.settings.items.xAxis.items.axis.items.measureAxisTitle.component).to.equal('header');
        });

        it('should have correct type', () => {
          expect(def.items.settings.items.xAxis.items.axis.items.measureAxisTitle.type).to.equal('string');
        });

        it('should show correct translated xAxis label', () => {
          const labelFn = def.items.settings.items.xAxis.items.axis.items.measureAxisTitle.label;
          const properties = 'some properties';
          const sandbox = sinon.createSandbox();
          let handler = {
            getMeasureLayouts: sandbox.stub().returns([{ qError: false, qFallbackTitle: 'fb title' }]),
          };
          expect(labelFn(properties, handler), 'with info when there is no error').to.deep.equal(
            'translated-properties.xAxisWithInfo'
          );
          handler = { getMeasureLayouts: sandbox.stub().returns([{ qError: true, qFallbackTitle: 'fb title' }]) };
          expect(labelFn(properties, handler), 'with no info when there is an error').to.deep.equal(
            'translated-properties.xAxis'
          );
          sandbox.restore();
        });

        it('should have correct classification', () => {
          expect(def.items.settings.items.xAxis.items.axis.items.measureAxisTitle.classification).to.deep.equal({
            section: 'axis',
            tags: ['simple'],
            exclusive: true,
          });
        });
      });

      describe('startAt', () => {
        it('should have correct properties', () => {
          expect(def.items.settings.items.xAxis.items.startAt).to.have.all.keys([
            'type',
            'component',
            'translation',
            'readOnly',
            'options',
            'defaultValue',
            'convertFunctions',
            'classification',
          ]);
        });

        it('should have correct type', () => {
          expect(def.items.settings.items.xAxis.items.startAt.type).to.equal('string');
        });

        it('should have correct component', () => {
          expect(def.items.settings.items.xAxis.items.startAt.component).to.equal('dropdown');
        });

        it('should have correct translation', () => {
          expect(def.items.settings.items.xAxis.items.startAt.translation).to.equal('properties.axis.startAt');
        });

        describe('readOnly', () => {
          let readOnly;

          beforeEach(() => {
            ({ readOnly } = def.items.settings.items.xAxis.items.startAt);
          });

          it('should have return true when has autoMinMax is false and not min type', () => {
            expect(readOnly({ xAxis: { autoMinMax: false, minMax: 'max' } })).to.be.true;
          });

          it('should have return true when has autoMinMax is false and is min type, but min is not 0', () => {
            expect(readOnly({ xAxis: { autoMinMax: false, minMax: 'min', min: 10 } })).to.be.true;
          });

          it('should have return false when has autoMinMax is false and is min type, but min is 0', () => {
            expect(readOnly({ xAxis: { autoMinMax: false, minMax: 'min', min: 0 } })).to.be.false;
          });

          it('should have return false when has autoMinMax is true', () => {
            expect(readOnly({ xAxis: { autoMinMax: true } })).to.be.false;
          });

          it('should have correct defaultValue', () => {
            expect(def.items.settings.items.xAxis.items.startAt.defaultValue).to.equal('lowest');
          });

          describe('convertFunctions', () => {
            let get;
            let set;
            let args;
            const sandbox = sinon.createSandbox();
            const definition = { type: 'string' };
            const getter = (type) => type;

            beforeEach(() => {
              sandbox.stub(chartModules, 'setValue');
              args = { properties: { xAxis: { autoMinMax: true, min: '10' } } };
              ({ get, set } = def.items.settings.items.xAxis.items.startAt.convertFunctions);
            });

            afterEach(() => {
              sandbox.restore();
            });

            describe('get', () => {
              it('should convert value to lowest when is autoMinMax', () => {
                expect(get(getter, definition, args)).to.equal('lowest');
              });

              it('should convert value to zero when is not autoMinMax, type is min and min is 0', () => {
                args = {
                  properties: {
                    xAxis: { autoMinMax: false, minMax: 'min', min: 0 },
                  },
                };
                expect(get(getter, definition, args)).to.equal('zero');
              });

              it('should return value from getter when is not autoMinMax and type is max', () => {
                args = {
                  properties: {
                    xAxis: { autoMinMax: false, minMax: 'max', min: 0 },
                  },
                };
                expect(get(getter, definition, args)).to.equal('string');
              });
            });

            describe('set', () => {
              it('should call setValue three times with correct values when select start at as zero', () => {
                set('zero', undefined, definition, args, '');
                expect(chartModules.setValue).to.have.been.calledWith('', 'xAxis.autoMinMax', false);
                expect(chartModules.setValue).to.have.been.calledWith('', 'xAxis.minMax', 'min');
                expect(chartModules.setValue).to.have.been.calledWith('', 'xAxis.min', 0);
              });

              it('should call setValue one time with correct values when select start at as lowest', () => {
                set('lowest', undefined, definition, args, '');
                expect(chartModules.setValue).to.have.been.calledWith('', 'xAxis.autoMinMax', true);
              });
            });
          });

          it('should have correct classification', () => {
            expect(def.items.settings.items.xAxis.items.startAt.classification).to.deep.equal({
              section: 'axis',
              tags: ['simple'],
              exclusive: true,
            });
          });
        });
      });
    });

    describe('yAxis', () => {
      it('should show correct translated yAxis', () => {
        const labelFn = def.items.settings.items.yAxis.label;
        const properties = 'some properties';
        const sandbox = sinon.createSandbox();
        let handler = {
          getMeasureLayouts: sandbox.stub().returns([{}, { qError: false, qFallbackTitle: 'fb title' }]),
        };
        expect(labelFn(properties, handler), 'with info when there is no error').to.deep.equal(
          'translated-properties.yAxisWithInfo'
        );
        handler = { getMeasureLayouts: sandbox.stub().returns([{ qError: true, qFallbackTitle: 'fb title' }]) };
        expect(labelFn(properties, handler), 'with no info when there is an error').to.deep.equal(
          'translated-properties.yAxis'
        );
        sandbox.restore();
      });

      it('should only show yAxis when appropriate', () => {
        const showFn = def.items.settings.items.yAxis.items.axis.items.dock.show;
        expect(showFn({ yAxis: { show: 'none' } }), 'not when show property is set to none').to.be.false;
      });

      it('should return correct yMirrorMode options', () => {
        const optionFn = def.items.settings.items.yAxis.items.axis.items.dock.options;
        expect(optionFn('data', 'handler', { yMirrorMode: true }), 'when yMirrorMode is set to true').to.deep.equal([
          { value: 'near', translation: 'properties.dock.right' },
          { value: 'far', translation: 'properties.dock.left' },
        ]);
        expect(optionFn('data', 'handler', { yMirrorMode: false }), 'when yMirrorMode is set to false').to.deep.equal([
          { value: 'near', translation: 'properties.dock.left' },
          { value: 'far', translation: 'properties.dock.right' },
        ]);
      });

      it('should only show yAxis grid when appropriate', () => {
        const showFn = def.items.settings.items.yAxis.items.axis.items.spacing.show;
        expect(showFn({ yAxis: { show: 'none' } }), 'not when show property is set to none').to.be.false;
      });

      it('should only show yAxis min max when appropriate', () => {
        const showFn = def.items.settings.items.yAxis.items.minMax.items.minMax.show;
        expect(showFn({ yAxis: { autoMinMax: true } }), 'not when autoMinMax is true').to.be.false;
      });

      it('should only show yAxis min when appropriate', () => {
        const showFn = def.items.settings.items.yAxis.items.minMax.items.min.show;
        expect(
          showFn({ yAxis: { autoMinMax: false, minMax: 'min' } }),
          'when autoMinMax is false and minMax is set to min'
        ).to.be.true;
      });

      it('should detect invalidity of yAxis min value correctly', () => {
        const validFn = def.items.settings.items.yAxis.items.minMax.items.min.invalid;
        expect(validFn({ yAxis: { min: 1, max: -1, minMax: 'minMax' } }), 'when min is larger than max').to.be.true;
        expect(validFn({ yAxis: { min: 1, max: -1, minMax: 'min' } }), 'when the minMax property is set to min').to.be
          .false;
      });

      it('should only show yAxis max when appropriate', () => {
        const showFn = def.items.settings.items.yAxis.items.minMax.items.max.show;
        expect(
          showFn({ yAxis: { autoMinMax: false, minMax: 'max' } }),
          'when autoMinMax is false and minMax is set to max'
        ).to.be.true;
      });

      it('should detect invalidity of yAxis max value correctly', () => {
        const validFn = def.items.settings.items.yAxis.items.minMax.items.max.invalid;
        expect(validFn({ yAxis: { min: 1, max: -1, minMax: 'minMax' } }), 'when min is larger than max').to.be.true;
        expect(validFn({ yAxis: { min: 1, max: -1, minMax: 'max' } }), 'when the minMax property is set to max').to.be
          .false;
      });

      describe('measureAxisTitle', () => {
        it('should have correct properties', () => {
          expect(def.items.settings.items.yAxis.items.axis.items.measureAxisTitle).to.have.all.keys([
            'component',
            'type',
            'label',
            'classification',
          ]);
        });

        it('should have correct component', () => {
          expect(def.items.settings.items.yAxis.items.axis.items.measureAxisTitle.component).to.equal('header');
        });

        it('should have correct type', () => {
          expect(def.items.settings.items.yAxis.items.axis.items.measureAxisTitle.type).to.equal('string');
        });

        it('should show correct translated yAxis label', () => {
          const labelFn = def.items.settings.items.yAxis.items.axis.items.measureAxisTitle.label;
          const properties = 'some properties';
          const sandbox = sinon.createSandbox();
          let handler = {
            getMeasureLayouts: sandbox.stub().returns([{}, { qError: false, qFallbackTitle: 'fb title' }]),
          };
          expect(labelFn(properties, handler), 'with info when there is no error').to.deep.equal(
            'translated-properties.yAxisWithInfo'
          );
          handler = { getMeasureLayouts: sandbox.stub().returns([{ qError: true, qFallbackTitle: 'fb title' }]) };
          expect(labelFn(properties, handler), 'with no info when there is an error').to.deep.equal(
            'translated-properties.yAxis'
          );
          sandbox.restore();
        });

        it('should have correct classification', () => {
          expect(def.items.settings.items.yAxis.items.axis.items.measureAxisTitle.classification).to.deep.equal({
            section: 'axis',
            tags: ['simple'],
            exclusive: true,
          });
        });
      });

      describe('startAt', () => {
        it('should have correct properties', () => {
          expect(def.items.settings.items.yAxis.items.startAt).to.have.all.keys([
            'type',
            'component',
            'translation',
            'readOnly',
            'options',
            'defaultValue',
            'convertFunctions',
            'classification',
          ]);
        });

        it('should have correct type', () => {
          expect(def.items.settings.items.yAxis.items.startAt.type).to.equal('string');
        });

        it('should have correct component', () => {
          expect(def.items.settings.items.yAxis.items.startAt.component).to.equal('dropdown');
        });

        it('should have correct translation', () => {
          expect(def.items.settings.items.yAxis.items.startAt.translation).to.equal('properties.axis.startAt');
        });

        describe('readOnly', () => {
          let readOnly;

          beforeEach(() => {
            ({ readOnly } = def.items.settings.items.yAxis.items.startAt);
          });

          it('should have return true when has autoMinMax is false and not min type', () => {
            expect(readOnly({ yAxis: { autoMinMax: false, minMax: 'max' } })).to.be.true;
          });

          it('should have return true when has autoMinMax is false and is min type, but min is not 0', () => {
            expect(readOnly({ yAxis: { autoMinMax: false, minMax: 'min', min: 10 } })).to.be.true;
          });

          it('should have return false when has autoMinMax is false and is min type, but min is 0', () => {
            expect(readOnly({ yAxis: { autoMinMax: false, minMax: 'min', min: 0 } })).to.be.false;
          });

          it('should have return false when has autoMinMax is true', () => {
            expect(readOnly({ yAxis: { autoMinMax: true } })).to.be.false;
          });

          it('should have correct defaultValue', () => {
            expect(def.items.settings.items.yAxis.items.startAt.defaultValue).to.equal('lowest');
          });

          describe('convertFunctions', () => {
            let get;
            let set;
            let args;

            const sandbox = sinon.createSandbox();
            const definition = { type: 'string' };
            const getter = (type) => type;

            beforeEach(() => {
              sandbox.stub(chartModules, 'setValue');
              args = { properties: { yAxis: { autoMinMax: true, min: '10' } } };
              ({ get, set } = def.items.settings.items.yAxis.items.startAt.convertFunctions);
            });

            afterEach(() => {
              sandbox.restore();
            });

            describe('get', () => {
              it('should convert value to lowest when is autoMinMax', () => {
                expect(get(getter, definition, args)).to.equal('lowest');
              });

              it('should convert value to zero when is not autoMinMax, type is min and min is 0', () => {
                args = {
                  properties: {
                    yAxis: { autoMinMax: false, minMax: 'min', min: 0 },
                  },
                };
                expect(get(getter, definition, args)).to.equal('zero');
              });

              it('should return value from getter when is not autoMinMax and type is max', () => {
                args = {
                  properties: {
                    yAxis: { autoMinMax: false, minMax: 'max', min: 0 },
                  },
                };
                expect(get(getter, definition, args)).to.equal('string');
              });
            });

            describe('set', () => {
              it('should call setValue three times with correct values when select start at as zero', () => {
                set('zero', undefined, definition, args, '');
                expect(chartModules.setValue).to.have.been.calledWith('', 'yAxis.autoMinMax', false);
                expect(chartModules.setValue).to.have.been.calledWith('', 'yAxis.minMax', 'min');
                expect(chartModules.setValue).to.have.been.calledWith('', 'yAxis.min', 0);
              });

              it('should call setValue one time with correct values when select start at as lowest', () => {
                set('lowest', undefined, definition, args, '');
                expect(chartModules.setValue).to.have.been.calledWith('', 'yAxis.autoMinMax', true);
              });
            });
          });

          it('should have correct classification', () => {
            expect(def.items.settings.items.xAxis.items.startAt.classification).to.deep.equal({
              section: 'axis',
              tags: ['simple'],
              exclusive: true,
            });
          });
        });
      });
    });
  });
});
