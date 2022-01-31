import showCompressionResolution from '../show-compression-resolution';

export default {
  component: 'text',
  translation: 'properties.compression.willNotAffect',
  show(data, handler) {
    return showCompressionResolution(handler.layout);
  },
};
