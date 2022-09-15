// eslint-disable-next-line no-unused-vars
import createDisclaimer from '..';

describe('createDisclaimer', () => {
  let sandbox;
  let create;
  let disclaimerModel;
  let layoutService;
  let themeService;
  let context;
  let picasso;
  let formatter;
  let formatterFactory;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    disclaimerModel = {
      query: { getDisclaimer: sandbox.stub().returns({ key: 'OverviewData', alignment: 'bottom' }) },
    };
    layoutService = { getHyperCubeValue: sandbox.stub() };
    themeService = { getStyles: sandbox.stub().returns({ fontFamily: 'font-family' }) };
    context = { rtl: 'ltr', translator: { get: sandbox.stub() } };
    context.translator.get
      .withArgs('properties.compression.providingOverviewOf', 'overview-data-disclaimer-text')
      .returns('translated-overview-data-disclaimer-text');
    context.translator.get.withArgs('Object.Disclaimer.Others').returns('translated-other-disclaimer-text');
    formatter = sandbox.stub().returns('overview-data-disclaimer-text');
    formatterFactory = sandbox.stub().returns(formatter);
    picasso = { formatter: sandbox.stub().returns(formatterFactory) };
    create = () => createDisclaimer({ disclaimerModel, context, layoutService, themeService, picasso });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct disclaimer component, when it is OverviewData', () => {
    expect(create()).to.deep.equal({
      key: 'disclaimer',
      type: 'disclaimer',
      dock: 'bottom',
      show: true,
      settings: {
        label: 'translated-overview-data-disclaimer-text',
        rtl: 'ltr',
      },
      style: {
        fontFamily: 'font-family',
      },
    });
  });

  it('should return correct disclaimer component, when it is other than OverviewData', () => {
    disclaimerModel.query.getDisclaimer.returns({ key: 'Others', alignment: 'top' });
    expect(create()).to.deep.equal({
      key: 'disclaimer',
      type: 'disclaimer',
      dock: 'top',
      show: true,
      settings: {
        label: 'translated-other-disclaimer-text',
        rtl: 'ltr',
      },
      style: {
        fontFamily: 'font-family',
      },
    });
  });

  it('should return false, when there is no disclaimer', () => {
    disclaimerModel.query.getDisclaimer.returns(null);
    expect(create()).to.equal(false);
  });
});
