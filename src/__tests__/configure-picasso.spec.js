import * as picassojs from 'picasso.js';
import * as picassoHammer from 'picasso-plugin-hammer';
import * as renderer from '../picasso-components/react-components/react-renderer';
import * as disclaimer from '../picasso-components/react-components/disclaimer';
import * as dataTitle from '../picasso-components/react-components/data-title-component';
import * as button from '../picasso-components/react-components/button';
import * as refLineLabels from '../picasso-components/ref-line-labels';
import * as pointLabel from '../picasso-components/point-label';
import * as miniChartWindow from '../picasso-components/mini-chart-window';
import * as heatMapHighlight from '../picasso-components/heat-map-highlight';
import configurePicasso from '../configure-picasso';

jest.mock('picasso.js', () => jest.fn());
jest.mock('picasso-plugin-q', () => ({ key: 'picasso-q' }));
jest.mock('picasso-plugin-hammer', () => jest.fn());
jest.mock('hammerjs', () => ({ key: 'hammer' }));

describe('configure-picasso', () => {
  let sandbox;
  let picasso;

  beforeAll(() => {
    sandbox = sinon.createSandbox();
    picasso = {
      use: sandbox.spy(),
      component: sandbox.spy(),
      renderer: sandbox.spy(),
    };
    picassojs.mockImplementation(() => picasso);

    sandbox.stub(renderer, 'default');
    sandbox.stub(disclaimer, 'default');
    sandbox.stub(dataTitle, 'default');
    sandbox.stub(button, 'default');
    sandbox.stub(refLineLabels, 'default').get(() => 'refLineLabelsComponent');
    sandbox.stub(pointLabel, 'default').get(() => 'pointLabelComponent');
    sandbox.stub(miniChartWindow, 'default').get(() => 'miniChartWindowComponent');
    sandbox.stub(heatMapHighlight, 'default').get(() => 'heatMapHighlightComponent');
  });

  beforeEach(() => {
    sandbox.reset();
    jest.clearAllMocks();

    renderer.default.returns('renderer');
    disclaimer.default.returns('disclaimer');
    dataTitle.default.returns('dataTitle');
    button.default.returns('button');

    configurePicasso();
  });

  afterAll(() => {
    sandbox.restore();
  });

  it('should create picasso instance', () => {
    expect(picassojs.mock.calls.length).to.equal(1);
  });

  it('should use correct amount of components', () => {
    expect(picasso.use.callCount).to.equal(2);
  });

  it('should use picasso-q', () => {
    expect(picasso.use.withArgs({ key: 'picasso-q' })).to.have.been.calledOnce;
  });

  it('should use picasso-hammer', () => {
    expect(picassoHammer.mock.calls.length).to.equal(1);
    expect(picassoHammer.mock.calls[0][0]).to.deep.equal({ key: 'hammer' });
  });

  it('should register all custom components', () => {
    expect(picasso.renderer.getCall(0).calledWith('react', 'renderer')).to.be.true;
    expect(picasso.component.getCall(0).calledWith('reference-line-labels', 'refLineLabelsComponent')).to.be.true;
    expect(picasso.component.getCall(1).calledWith('point-label', 'pointLabelComponent')).to.be.true;
    expect(picasso.component.getCall(2).calledWith('disclaimer', 'disclaimer')).to.be.true;
    expect(picasso.component.getCall(3).calledWith('mini-chart-window', 'miniChartWindowComponent')).to.be.true;
    expect(picasso.component.getCall(4).calledWith('button', 'button')).to.be.true;
    expect(picasso.component.getCall(5).calledWith('data-title', 'dataTitle')).to.be.true;
    expect(picasso.component.getCall(6).calledWith('heat-map-highlight', 'heatMapHighlightComponent')).to.be.true;
  });

  it('should return picasso instance', () => {
    expect(configurePicasso()).to.equal(picasso);
  });
});
