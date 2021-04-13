import getLabelTooltip from '../tooltip';
import textHelper from '../../../../utils/text-helper';

describe('getLabelTooltip', () => {
  let sandbox;
  const optionObject = {
    title: 'some title',
    font: 'some font',
    ellipsis: 'some ellipsis',
    maxNumLines: 10,
    maxWidth: 100,
  };

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(textHelper, 'tokenize');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct tooltip text', () => {
    textHelper.tokenize.returns(['first line', 'second line', 'third line']);
    const result = getLabelTooltip(optionObject);
    expect(result).to.deep.equal('first line\nsecond line\nthird line');
  });
});
