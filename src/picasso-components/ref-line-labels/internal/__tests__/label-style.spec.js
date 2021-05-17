import getLabelStyle from '../label-style';
import textHelper from '../../../../utils/text-helper';

describe('getLabelStyle', () => {
  let sandbox;
  let labelStyle;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(textHelper, 'getFontHeight');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return correct label style when all style inputs are available', () => {
    labelStyle = {
      fontFamily: "'font 1', 'font 2', 'font type'",
      fontSize: '100px',
      gap: 10,
      maxWidth: 100,
      maxNumLines: 7,
      padding: {
        top: 2,
        bottom: 4,
        left: 6,
        right: 7,
      },
    };

    textHelper.getFontHeight.returns(150);
    const result = getLabelStyle(labelStyle);
    expect(result).to.deep.equal({
      fontFamily: "'font 1', 'font 2', 'font type'",
      fontSize: '100px',
      font: "normal 100px 'font 1', 'font 2', 'font type'",
      lineHeight: 150,
      gap: 10,
      maxLabelWidth: 100,
      maxNumLines: 7,
      padding: {
        top: 2,
        bottom: 4,
        left: 6,
        right: 7,
      },
    });
  });

  it('should return correct label style when some style inputs are missing', () => {
    labelStyle = {
      fontFamily: "'font 1', 'font 2', 'font type'",
      fontSize: '100px',
      padding: {},
    };

    textHelper.getFontHeight.returns(150);
    const result = getLabelStyle(labelStyle);
    expect(result).to.deep.equal({
      fontFamily: "'font 1', 'font 2', 'font type'",
      fontSize: '100px',
      font: "normal 100px 'font 1', 'font 2', 'font type'",
      lineHeight: 150,
      gap: 12,
      maxLabelWidth: 75,
      maxNumLines: 1,
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    });
  });
});
