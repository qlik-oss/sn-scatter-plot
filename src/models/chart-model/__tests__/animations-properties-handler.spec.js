import * as PATHS from '../../../constants/paths';
import { cacheProperties, propertiesHaveChanged } from '../animations-properties-handler';

describe('black-list-properties-handler', () => {
  let viewCache;
  let cachedContent;
  let layout;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    cachedContent = {};
    viewCache = {
      set: (prop, value) => {
        cachedContent[prop] = value;
      },
      get: (prop) => cachedContent[prop],
    };
    sandbox.stub(PATHS, 'default').get(() => ({
      dataRelatedPropertiesPaths: ['dog.speed', 'cat.legs[].color'],
    }));
    layout = {
      dog: { speed: 'fast', ears: [{ shape: 'bat' }, { shape: 'drop' }] },
      cat: { fur: 'black', legs: [{ color: 'red' }, { color: 'pink' }, { color: 'blue' }, { color: 'tan' }] },
    };
    cacheProperties({ viewCache, layout });
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('cacheProperties', () => {
    it('should ignore data-related properties by setting them to null', () => {
      expect(cachedContent).to.deep.equal({
        dataIndependentProperties:
          '{"dog":{"speed":null,"ears":[{"shape":"bat"},{"shape":"drop"}]},"cat":{"fur":"black","legs":[{"color":null},{"color":null},{"color":null},{"color":null}]}}',
      });
    });

    it('should take no action when path leads to unexisting property', () => {
      sandbox.stub(PATHS, 'default').get(() => ({
        dataRelatedPropertiesPaths: ['dog.speed', 'dog.tail', 'dog.eyes[].color', 'cat.legs[].color'],
      }));
      cacheProperties({ viewCache, layout });
      expect(cachedContent).to.deep.equal({
        dataIndependentProperties:
          '{"dog":{"speed":null,"ears":[{"shape":"bat"},{"shape":"drop"}]},"cat":{"fur":"black","legs":[{"color":null},{"color":null},{"color":null},{"color":null}]}}',
      });
    });
  });

  describe('propertiesHaveChanged', () => {
    it('should return false if properties have not changed', () => {
      expect(propertiesHaveChanged({ viewCache, layout })).to.equal(false);
    });

    it('should return true if properties that are not related to data, have changed', () => {
      layout = {
        dog: { speed: 'fast', ears: [{ shape: 'rose' }, { shape: 'drop' }] },
        cat: { fur: 'white', legs: [{ color: 'red' }, { color: 'pink' }, { color: 'blue' }, { color: 'tan' }] },
      };
      expect(propertiesHaveChanged({ viewCache, layout })).to.equal(true);
    });

    it('should return false if properties that are related to data, have changed', () => {
      layout = {
        dog: { speed: 'slow', ears: [{ shape: 'bat' }, { shape: 'drop' }] },
        cat: { fur: 'black', legs: [{ color: 'red' }, { color: 'gray' }, { color: 'blue' }, { color: 'tan' }] },
      };
      expect(propertiesHaveChanged({ viewCache, layout })).to.equal(false);
    });
  });
});
