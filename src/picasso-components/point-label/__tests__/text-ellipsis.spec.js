import { ellipsText, ELLIPSIS_CHAR } from '../text-ellipsis';

describe('text-ellipsis', () => {
  let sandbox;
  let text;
  let textWidth;
  let maxWidth;
  let measureText;
  let create;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    text = 'text label 1';
    textWidth = 15;
    maxWidth = 20;
    measureText = sandbox.stub().returns({ width: 2 });
    create = () => ellipsText({ text, textWidth, maxWidth, measureText });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should have correct label text', () => {
    expect(create()).to.equal('text label 1');
    text = 1234;
    expect(create()).to.equal('1234');
  });

  it('should have correct label text when max width is undefined', () => {
    maxWidth = undefined;
    expect(create()).to.equal('text label 1');
  });

  it('should have correct reduced label text', () => {
    maxWidth = 10;
    expect(create()).to.equal(`text label ${ELLIPSIS_CHAR}`);
  });

  it('should have ellipsis', () => {
    textWidth = 7;
    maxWidth = 5;
    measureText = sandbox.stub().returns({ width: 20 });
    expect(create()).to.equal(ELLIPSIS_CHAR);
  });
});
