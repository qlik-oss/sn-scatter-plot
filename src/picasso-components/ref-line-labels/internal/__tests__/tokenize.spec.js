import textHelper from '../../../../utils/text-helper';
import * as tokenize from '../tokenize';

describe('tokenizeLabels', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(textHelper, 'tokenize');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should add correct lines and maxNumLines to labels', () => {
    textHelper.tokenize.onCall(0).returns(['first label, line 1', 'first label, line 2']);
    textHelper.tokenize.onCall(1).returns(['second label, line 1', 'second label, line 2']);
    textHelper.tokenize
      .onCall(2)
      .returns(['third label, line 1', 'third label, line 2', 'third label, line 3', 'third label, line 4']);
    textHelper.tokenize.onCall(3).returns(['fourth label, line 1']);
    const labels = [
      { lines: null, maxNumLines: 0 },
      { lines: null, maxNumLines: 0 },
      { lines: null, maxNumLines: 0 },
      { lines: null, maxNumLines: 0 },
    ];

    tokenize.tokenizeLabels(labels, 'font', 100, 5);

    expect(labels).to.deep.equal([
      { lines: ['first label, line 1', 'first label, line 2'], maxNumLines: 2 },
      { lines: ['second label, line 1', 'second label, line 2'], maxNumLines: 2 },
      {
        lines: ['third label, line 1', 'third label, line 2', 'third label, line 3', 'third label, line 4'],
        maxNumLines: 4,
      },
      { lines: ['fourth label, line 1'], maxNumLines: 1 },
    ]);
  });
});

describe('retokenizeLabels', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(textHelper, 'tokenize');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should retokenize the 3rd labels, because its line count is larger than maxNumLines', () => {
    textHelper.tokenize.onCall(0).returns(['3rd label, line 1', '3rd label, new line 2']);
    const labels = [
      { lines: ['1st label, line 1', '1st label, line 2'], maxNumLines: 2 },
      { lines: ['2nd label, line 1', '2nd label, line 2'], maxNumLines: 2 },
      {
        lines: ['3rd label, line 1', '3rd label, line 2', '3rd label, line 3', '3rd label, line 4'],
        maxNumLines: 2,
      },
      { lines: ['4th label, line 1'], maxNumLines: 1 },
    ];

    tokenize.retokenizeLabels(labels, 'font', 100);

    expect(labels).to.deep.equal([
      { lines: ['1st label, line 1', '1st label, line 2'], maxNumLines: 2 },
      { lines: ['2nd label, line 1', '2nd label, line 2'], maxNumLines: 2 },
      { lines: ['3rd label, line 1', '3rd label, new line 2'], maxNumLines: 2 },
      { lines: ['4th label, line 1'], maxNumLines: 1 },
    ]);
  });

  it('should not retokenize any label, because all (line count/maxNumLines) pairs are equal', () => {
    textHelper.tokenize.returns(['this should never be called']);
    const labels = [
      { lines: ['1st label, line 1', '1st label, line 2'], maxNumLines: 2 },
      { lines: ['2nd label, line 1', '2nd label, line 2'], maxNumLines: 2 },
      { lines: ['3rd label, line 1', '3rd label, line 2', '3rd label, line 3'], maxNumLines: 3 },
      { lines: ['4th label, line 1'], maxNumLines: 1 },
    ];

    tokenize.retokenizeLabels(labels, 'font', 100);

    expect(textHelper.tokenize).not.to.be.called;

    expect(labels).to.deep.equal([
      { lines: ['1st label, line 1', '1st label, line 2'], maxNumLines: 2 },
      { lines: ['2nd label, line 1', '2nd label, line 2'], maxNumLines: 2 },
      { lines: ['3rd label, line 1', '3rd label, line 2', '3rd label, line 3'], maxNumLines: 3 },
      { lines: ['4th label, line 1'], maxNumLines: 1 },
    ]);
  });
});
