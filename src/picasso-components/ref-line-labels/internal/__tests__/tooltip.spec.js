import tooltip from '../tooltip';
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
    const result = tooltip.getLabelTooltip(optionObject);
    expect(result).to.deep.equal('first line\nsecond line\nthird line');
  });

  it('should return empty tooltip text when the title is empty', () => {
    textHelper.tokenize.returns([]);
    const result = tooltip.getLabelTooltip(optionObject);
    expect(result).to.deep.equal('');
  });
});

describe('getOobsTooltip', () => {
  let sandbox;
  const font = 'some font';
  let oobs;
  let optionObject;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(tooltip, 'getLabelTooltip');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct tooltip text', () => {
    oobs = ['1st oob', '2nd oob'];
    optionObject = {
      oobs,
      font,
      ellipsis: 'some ellipsis',
      maxNumLines: 'some number',
      maxWidth: 'some number',
    };
    tooltip.getLabelTooltip.onFirstCall().returns('first oob (1M)');
    tooltip.getLabelTooltip.onSecondCall().returns('second oob (2M)');
    const result = tooltip.getOobsTooltip(optionObject);
    expect(result).to.deep.equal('first oob (1M)\n\nsecond oob (2M)');
  });

  it('should return empty tooltip text when oob is empty', () => {
    oobs = [];
    optionObject = {
      oobs,
      font,
      ellipsis: 'some ellipsis',
      maxNumLines: 'some number',
      maxWidth: 'some number',
    };
    tooltip.getLabelTooltip.returns('some tooltip text');
    const result = tooltip.getOobsTooltip(optionObject);
    expect(result).to.deep.equal('');
  });
});
