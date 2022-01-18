import { images, imageSize } from '../../promises/images';
import TOOLTIP from '../../constants';

const { expect } = chai;
let attrExps;
let nodes;
let opts;
let customTooltipModel;

describe('Test custom tooltip content, ', () => {
  const sandbox = sinon.createSandbox();
  beforeEach(() => {
    sandbox.stub(imageSize, 'getImageSize').resolves({ height: 0, width: 0 });

    opts = {
      app: {
        getImage: () => 'getImageResult',
      },
      flags: {
        isEnabled: () => true,
      },
    };

    customTooltipModel = {
      layout: {
        tooltip: {
          imageComponents: [],
        },
      },
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('addImagesToTheNodes', () => {
    it('should return correct content for url expression images', () => {
      nodes = [
        {
          data: {
            customTooltipAttrExps: {
              value: [
                {
                  label: 'urlValue',
                  value: 'value',
                },
              ],
            },
          },
        },
      ];

      attrExps = [
        {
          id: TOOLTIP.CUSTOM.IMAGES,
          qFallbackTitle: 'url',
          cId: 'x',
        },
      ];

      customTooltipModel.layout.tooltip.imageComponents = [
        {
          cId: 'x',
          size: 'small',
          type: 'url',
          ref: 'urlValue',
        },
      ];

      return images.addImagesToTheNodes({ customTooltipModel, opts, attrExps, nodes }).then((result) => {
        const expected = [
          {
            data: {
              customTooltipAttrExps: {
                value: [
                  {
                    label: 'urlValue',
                    value: 'value',
                  },
                ],
              },
              customTooltipImages: [
                {
                  size: 'small',
                  src: 'urlValue',
                  height: 0,
                  width: 0,
                  imageError: undefined,
                },
              ],
            },
          },
        ];
        expect(result).to.be.deep.equal(expected);
      });
    });

    it('should return correct content for url string images', () => {
      nodes = [
        {
          data: {
            customTooltipAttrExps: {},
          },
        },
      ];

      attrExps = [];

      customTooltipModel.layout.tooltip.imageComponents = [
        {
          cId: 'x',
          size: 'small',
          type: 'url',
          ref: 'urlValue',
        },
      ];

      return images.addImagesToTheNodes({ customTooltipModel, opts, attrExps, nodes }).then((result) => {
        const expected = [
          {
            data: {
              customTooltipAttrExps: {},
              customTooltipImages: [
                {
                  size: 'small',
                  src: 'urlValue',
                  height: 0,
                  width: 0,
                  imageError: undefined,
                },
              ],
            },
          },
        ];
        expect(result).to.be.deep.equal(expected);
      });
    });

    it('should return correct content for field images', () => {
      nodes = [
        {
          data: {
            customTooltipAttrExps: {
              value: [
                {
                  label: 'qmem://field/fieldValue',
                  value: 'value',
                },
              ],
            },
          },
        },
      ];

      attrExps = [
        {
          cId: 'x',
          id: TOOLTIP.CUSTOM.IMAGES,
          qFallbackTitle: '"qmem://field/" & field',
        },
      ];

      customTooltipModel.layout.tooltip.imageComponents = [
        {
          cId: 'x',
          size: 'small',
          type: 'field',
          ref: 'fieldValue',
        },
      ];

      return images.addImagesToTheNodes({ customTooltipModel, opts, attrExps, nodes }).then((result) => {
        const expected = [
          {
            data: {
              customTooltipAttrExps: {
                value: [
                  {
                    label: 'qmem://field/fieldValue',
                    value: 'value',
                  },
                ],
              },
              customTooltipImages: [
                {
                  size: 'small',
                  src: 'data:image/png;base64, getImageResult',
                  height: 0,
                  width: 0,
                  imageError: undefined,
                },
              ],
            },
          },
        ];
        expect(result).to.be.deep.equal(expected);
      });
    });

    it('should return correct content for media images', () => {
      nodes = [
        {
          data: {
            customTooltipAttrExps: {},
          },
        },
      ];

      attrExps = [];
      customTooltipModel.layout.tooltip.imageComponents = [
        {
          cId: 'x',
          size: 'large',
          type: 'media',
          ref: {
            qStaticContentUrl: {
              qUrl: 'mediaPath',
            },
          },
        },
      ];

      return images.addImagesToTheNodes({ customTooltipModel, opts, attrExps, nodes }).then((result) => {
        const expected = [
          {
            data: {
              customTooltipAttrExps: {},
              customTooltipImages: [
                {
                  size: 'large',
                  src: 'mediaPath',
                  height: 0,
                  width: 0,
                  imageError: undefined,
                },
              ],
            },
          },
        ];
        expect(result).to.be.deep.equal(expected);
      });
    });
  });
});
