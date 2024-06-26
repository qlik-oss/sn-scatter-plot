import * as keys from '../../../../constants/keys';
import * as modes from '../../../../constants/modes';
import createMajorAxisTitle from '../yAxis';

describe('y-axis-title', () => {
  let sandbox;
  let model;
  let app;
  let translator;
  let constraints;
  let rtl;
  let layoutService;
  let dockService;
  let styleModel;
  let propertiesModel;
  let yAxis;
  let create;

  beforeAll(() => {
    sandbox = sinon.createSandbox();
    model = { key: 'model' };
    app = { key: 'app' };
    translator = { key: 'translator' };
    rtl = true;
    layoutService = {
      getLayout: sandbox.stub(),
      getHyperCube: sandbox.stub(),
      getHyperCubeValue: sandbox.stub(),
    };
    styleModel = {
      query: {
        axis: {
          title: {
            getStyle: sandbox.stub(),
          },
        },
      },
    };
    sandbox.stub(keys, 'default').get(() => ({ COMPONENT: { Y_AXIS_TITLE: 'y-axis-title' } }));
    sandbox.stub(modes, 'default').get(() => ({ AXIS_TITLE: { Y: 'small-layout-mode' } }));
    create = () =>
      createMajorAxisTitle({
        model,
        app,
        translator,
        constraints,
        rtl,
        layoutService,
        dockService,
        styleModel,
        propertiesModel,
      });
  });

  beforeEach(() => {
    sandbox.reset();
    constraints = { active: false };
    yAxis = {
      show: 'all',
    };
    layoutService.getLayout.returns({ yAxis });
    layoutService.getHyperCube.returns({ key: 'q-hyper-cube' });
    layoutService.getHyperCubeValue.withArgs('qMeasureInfo.1').returns({ key: 'measure-1' });
    dockService = {
      meta: {
        y: {
          dock: 'y-dock',
        },
      },
    };
    styleModel.query.axis.title.getStyle.returns({
      fontFamily: 'title-font-family',
      fontSize: 'title-font-size',
      color: 'title-color',
    });
    propertiesModel = {
      query: {
        getProperties: sandbox.stub().returns({ qHyperCubeDef: { key: 'q-hyper-cube-def' } }),
      },
    };
  });

  afterAll(() => {
    sandbox.restore();
  });

  it('should return false if no measure axis', () => {
    layoutService.getLayout.returns({ xAxis: undefined });
    expect(create()).to.be.false;
  });

  it('should return false if show is none', () => {
    yAxis.show = 'none';
    expect(create()).to.be.false;
  });

  it('should return false if show is labels', () => {
    yAxis.show = 'labels';
    expect(create()).to.be.false;
  });

  it('should return definition if show is all', () => {
    yAxis.show = 'all';
    expect(create()).to.be.a('object');
  });

  it('should return definition if show is title', () => {
    yAxis.show = 'title';
    expect(create()).to.be.a('object');
  });

  describe('definition', () => {
    it('should have correct properties', () => {
      expect(create()).to.have.all.keys(['type', 'key', 'layout', 'settings', 'style']);
    });

    it('should have correct type', () => {
      expect(create().type).to.equal('data-title');
    });

    it('should have correct key', () => {
      expect(create().key).to.equal('y-axis-title');
    });

    describe('layout', () => {
      it('should have correct properties', () => {
        expect(create().layout).to.have.all.keys(['minimumLayoutMode', 'dock']);
      });

      it('should have correct minimumLayoutMode', () => {
        expect(create().layout.minimumLayoutMode).to.equal('small-layout-mode');
      });

      it('should have correct dock', () => {
        expect(create().layout.dock).to.equal('y-dock');
      });
    });

    describe('settings', () => {
      it('should have correct properties', () => {
        expect(create().settings).to.have.all.keys([
          'hyperCube',
          'hyperCubeDef',
          'isDimension',
          'explicitItemInfos',
          'disabled',
          'model',
          'app',
          'translator',
          'rtl',
          'selections',
        ]);
      });

      it('should have correct hyperCube', () => {
        expect(create().settings.hyperCube).to.deep.equal({ key: 'q-hyper-cube' });
      });

      it('should have correct hyperCubeDef', () => {
        expect(create().settings.hyperCubeDef).to.deep.equal({ key: 'q-hyper-cube-def' });
      });

      it('should have correct isDimension', () => {
        expect(create().settings.isDimension).to.be.false;
      });

      it('should have correct explicitItemInfos', () => {
        expect(create().settings.explicitItemInfos).to.deep.equal([{ key: 'measure-1', explicitColumn: 1 }]);
      });

      describe('disabled', () => {
        it('should return false if active is false and has model', () => {
          constraints.active = false;
          expect(create().settings.disabled()).to.be.false;
        });

        it('should return true if active is false and has no model', () => {
          constraints.active = false;
          expect(
            createMajorAxisTitle({
              model: undefined,
              app,
              translator,
              constraints,
              rtl,
              layoutService,
              dockService,
              styleModel,
              propertiesModel,
            }).settings.disabled()
          ).to.be.true;
        });

        it('should return true if active is true and has model', () => {
          constraints.active = true;
          expect(create().settings.disabled()).to.be.true;
        });

        it('should return true if active is true and has no model', () => {
          constraints.active = true;
          expect(
            createMajorAxisTitle({
              model: undefined,
              app,
              translator,
              constraints,
              rtl,
              layoutService,
              dockService,
              styleModel,
              propertiesModel,
            }).settings.disabled()
          ).to.be.true;
        });
      });

      it('should have correct model', () => {
        expect(create().settings.model).to.deep.equal({ key: 'model' });
      });

      it('should have correct app', () => {
        expect(create().settings.app).to.deep.equal({ key: 'app' });
      });

      it('should have correct translator', () => {
        expect(create().settings.translator).to.deep.equal({ key: 'translator' });
      });

      it('should have correct rtl', () => {
        expect(create().settings.rtl).to.be.true;
      });

      it('should have correct selections', () => {
        expect(create().settings.selections).to.be.undefined;
      });
    });

    describe('style', () => {
      it('should have correct properties', () => {
        expect(create().style).to.have.all.keys(['fontFamily', 'fontSize', 'color']);
      });

      it('should have correct fontFamily', () => {
        expect(create().style.fontFamily).to.equal('title-font-family');
      });

      it('should have correct fontSize', () => {
        expect(create().style.fontSize).to.equal('title-font-size');
      });

      it('should have correct color', () => {
        expect(create().style.color).to.equal('title-color');
      });
    });
  });
});
