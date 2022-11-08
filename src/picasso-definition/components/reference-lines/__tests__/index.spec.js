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
  const colorService = 'colorService';
  const layoutService = 'layoutService';
  const animationsEnabled = 'animations enabled function';

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    context = { rtl: 'some rtl', localeInfo: 'valid localeInfo' };
    dockService = { meta: { x: { opposite: 'top' }, y: { opposite: 'right' } } };
    sandbox.stub(KEYS, 'default').value({
      SCALE: { X: 'X', Y: 'Y' },
      COMPONENT: {
        REFERENCE_LINES_X: 'ref-lines-x',
        REFERENCE_LINES_Y: 'ref-lines-y',
        REFERENCE_LINE_LABELS_X: 'ref-line-labels-x',
        REFERENCE_LINE_LABELS_Y: 'ref-line-labels-y',
      },
    });
    sandbox.stub(MODES, 'REFERENCE_LINES').value('XSMALL');
    sandbox.stub(createLines, 'default');
    sandbox.stub(createLabels, 'default');

    models = { colorService, layoutService, dockService };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should call createLines twice, each with correct arguments', () => {
    createReferenceLines({ models, context, animationsEnabled });
    expect(
      createLines.default.withArgs({
        colorService: 'colorService',
        layoutService: 'layoutService',
        animationsEnabled: 'animations enabled function',
        scale: 'Y',
        key: 'ref-lines-y',
        minimumLayoutMode: 'XSMALL',
      })
    ).to.have.been.calledOnce;
    expect(
      createLines.default.withArgs({
        colorService: 'colorService',
        layoutService: 'layoutService',
        animationsEnabled: 'animations enabled function',
        scale: 'X',
        key: 'ref-lines-x',
        minimumLayoutMode: 'XSMALL',
      })
    ).to.have.been.calledOnce;
  });

  it('should call createLabels twice, each with correct arguments', () => {
    createReferenceLines({ models, context, animationsEnabled });
    expect(
      createLabels.default.withArgs({
        models,
        context,
        scale: 'X',
        key: 'ref-line-labels-x',
        dock: 'top',
        minimumLayoutMode: 'XSMALL',
        animationsEnabled: 'animations enabled function',
      })
    ).to.have.been.calledOnce;
    expect(
      createLabels.default.withArgs({
        models,
        context,
        scale: 'Y',
        key: 'ref-line-labels-y',
        dock: 'right',
        minimumLayoutMode: 'XSMALL',
        animationsEnabled: 'animations enabled function',
      })
    ).to.have.been.calledOnce;
  });
});
