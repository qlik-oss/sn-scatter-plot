import MODES from '../../../../constants/modes';
import * as KEYS from '../../../../constants/keys';
import * as createLines from '../lines';
import * as createLabels from '../labels';
import createReferenceLines from '..';

describe('createReferenceLines', () => {
  let sandbox;
  let context;
  let dockService;
  let models;
  const layoutService = 'layoutService';
  let themeService;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    context = { rtl: 'some rtl', localeInfo: 'valid localeInfo' };
    dockService = { meta: { x: { opposite: 'top' }, y: { opposite: 'right' } } };
    themeService = { getStyles: sandbox.stub().returns('themeStyle') };
    sandbox.stub(KEYS, 'default').value({
      SCALE: { X: 'X', Y: 'Y' },
      COMPONENT: {
        REFERENCE_LINES_X: 'ref-lines-x',
        REFERENCE_LINES_Y: 'ref-lines-y',
        REFERENCE_LINE_LABELS_X: 'ref-line-labels-x',
        REFERENCE_LINE_LABELS_Y: 'ref-line-labels-y',
      },
    });
    sandbox.stub(MODES, 'REFERENCE_LINE').value('XSMALL');
    sandbox.stub(createLines, 'default');
    sandbox.stub(createLabels, 'default');
    models = { layoutService, dockService, themeService };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should call createLines twice, each with correct arguments', () => {
    createReferenceLines({ models, context });
    expect(
      createLines.default.withArgs({
        layoutService: 'layoutService',
        scale: 'Y',
        key: 'ref-lines-y',
        minimumLayoutMode: 'XSMALL',
      })
    ).to.have.been.calledOnce;
    expect(
      createLines.default.withArgs({
        layoutService: 'layoutService',
        scale: 'X',
        key: 'ref-lines-x',
        minimumLayoutMode: 'XSMALL',
      })
    ).to.have.been.calledOnce;
  });

  it('should call createLabels twice, each with correct arguments', () => {
    createReferenceLines({ models, context });
    expect(
      createLabels.default.withArgs({
        models,
        context,
        scale: 'X',
        key: 'ref-line-labels-x',
        dock: 'top',
      })
    ).to.have.been.calledOnce;
    expect(
      createLabels.default.withArgs({
        models,
        context,
        scale: 'Y',
        key: 'ref-line-labels-y',
        dock: 'right',
      })
    ).to.have.been.calledOnce;
  });
});
