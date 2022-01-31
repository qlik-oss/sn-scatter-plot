function validateQmem(qmemUrl) {
  const substrings = qmemUrl.split('/');
  return substrings[0] === 'qmem:' && substrings[1] === '';
}

function getSenseServerUrl(app) {
  let config;
  let protocol;
  let host;
  let port;
  let prefix;
  let isSecure;

  if (
    (app && app.session && app.session.options) ||
    (app && app.enigmaModel && app.enigmaModel.session && app.enigmaModel.session.sessionConfig)
  ) {
    config = app.session.options || app.enigmaModel.session.sessionConfig;

    if (config.secure !== undefined) {
      isSecure = config.secure;
    } else {
      // eslint-disable-next-line prefer-destructuring
      isSecure = config.isSecure;
    }

    protocol = isSecure ? 'https://' : 'http://';
    host = config.host || 'localhost';
    port = config.port ? `:${config.port}` : '';
    prefix = config.prefix ? config.prefix : '/';

    if (prefix[prefix.length - 1] !== '/') {
      prefix = `${prefix}/`;
    }

    return protocol + host + port + prefix;
  }
  return '';
}

function stripBasePath(path, rootPath) {
  const result = path.replace(rootPath, '').replace(/^\.\.\//i, '/'); // Remove url:s like http://localhost:4848/
  if (result[0] !== '/') {
    return `/${result}`;
  }
  return result;
}

function addBasePath(path, rootPath) {
  return rootPath + (path[0] === '/' ? path.substr(1) : path);
}

export const imageSize = {
  getImageSize(src, size) {
    let timer;

    function clearTimer() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }

    function handleFail(img) {
      const image = img;
      // kill previous error handlers
      image.onload = null;
      image.onerror = null;
      // stop existing timer
      clearTimer();
    }

    const maxSize = {
      small: 50,
      medium: 200,
      large: 340,
      original: 340,
    };

    return new Promise((resolve) => {
      const img = new Image();
      img.referrerPolicy = 'no-referrer';
      img.onload = () => {
        let result;
        const { height, width } = img;
        const heightRatio = height > width ? 1 : height / width;
        const widthRation = width > height ? 1 : width / height;
        const maxHeight = maxSize[size] * heightRatio;
        const maxWidth = maxSize[size] * widthRation;

        if (!height || !width || (height === 0 && width === 0)) {
          result = { height: 20, width: 20, imageError: true };
          handleFail(img);
        } else if (size === 'original') {
          result = { height: Math.min(maxHeight, height), width: Math.min(maxWidth, width) };
          clearTimer();
        } else {
          result = { height: maxHeight, width: maxWidth };
          clearTimer();
        }

        resolve(result);
      };
      img.onerror = () => {
        handleFail(img);
        resolve({ height: 20, width: 20, imageError: true });
      };
      img.src = src;

      timer = setTimeout(() => {
        handleFail(img);
        resolve({ height: 20, width: 20, imageError: true });
      }, 3000);
    });
  },
};

async function handleMediaImage(image, size, app) {
  let src = image.ref.qStaticContentUrl.qUrl;

  // for QB-2492 bug
  const rootPath = getSenseServerUrl(app);
  if (rootPath) {
    stripBasePath(src, rootPath);
    src = src.replace(/"/g, '\\"');
    src = src.replace(/'/g, "\\'");
    src = addBasePath(src, rootPath);
  }

  const { height, width, imageError } = await imageSize.getImageSize(src, size);
  return {
    src,
    size,
    height,
    width,
    imageError,
  };
}

async function handleUrlImage(app, flags, imageComponent, size, nodeValue) {
  let result;
  let value = imageComponent.ref;
  if (nodeValue && nodeValue.label) {
    value = nodeValue.label;
  }

  if (flags.isEnabled('IMAGE_BUNDLE_LOAD') && app?.getImage && validateQmem(value)) {
    try {
      const image = await app.getImage(value);
      const imageSrc = `data:image/png;base64, ${image}`;
      const { height, width, imageError } = await imageSize.getImageSize(imageSrc, size);
      result = {
        src: imageSrc,
        size,
        height,
        width,
        imageError,
      };
    } catch (e) {
      // Ignore if error occur
    }
  } else {
    const { height, width, imageError } = await imageSize.getImageSize(value, size);
    result = {
      src: value,
      size,
      height,
      width,
      imageError,
    };
  }

  return result;
}

async function handleFieldImage(app, attrExpr, size, nodeValue) {
  let result;
  const value = nodeValue.label;
  const fieldName = attrExpr.qFallbackTitle;
  const qmemUrl = `qmem://${fieldName}/${value}`;
  // }
  if (validateQmem(qmemUrl)) {
    try {
      const image = await app.getImage(qmemUrl);
      if (image) {
        const imageSrc = `data:image/png;base64, ${image}`;
        const { height, width, imageError } = await imageSize.getImageSize(imageSrc, size);
        result = {
          src: imageSrc,
          size,
          height,
          width,
          imageError,
        };
      }
    } catch (e) {
      // Ignore if error occur
    }
  }
  return result;
}

async function retrieveImagesFromNode(customTooltipModel, opts, attrExps, node) {
  const { app, flags } = opts;

  // get imageComponents from layout
  const imageComponents = customTooltipModel.layout?.tooltip?.imageComponents;
  if (!imageComponents) {
    return [];
  }
  const [imageComponent] = imageComponents;
  const size = imageComponent.size || 'small';
  const imageType = imageComponent.type || 'media';

  let attrIndex = -1;
  for (let i = 0; i < attrExps.length; i++) {
    if (attrExps[i].cId === imageComponent.cId) {
      attrIndex = i;
      break;
    }
  }

  const nodeValues = node.data?.customTooltipAttrExps?.value || [];
  let nodeValue;
  if (attrIndex !== -1 && nodeValues[attrIndex]) {
    nodeValue = nodeValues[attrIndex];
  }

  if (imageType === 'media' && imageComponent.ref?.qStaticContentUrl?.qUrl) {
    return handleMediaImage(imageComponent, size, app);
  }
  if (imageType === 'url') {
    return handleUrlImage(app, flags, imageComponent, size, nodeValue);
  }
  if (flags.isEnabled('IMAGE_BUNDLE_LOAD') && imageType === 'field' && nodeValue && nodeValue.label) {
    const attrExpr = attrExps[attrIndex];
    return handleFieldImage(app, attrExpr, size, nodeValue);
  }
  return [];
}

export const images = {
  async addImagesToTheNodes({ customTooltipModel, nodes, attrExps, opts }) {
    const modifiedNodes = nodes;
    const promises = [];
    for (let i = 0; i < modifiedNodes.length; i++) {
      promises.push(retrieveImagesFromNode(customTooltipModel, opts, attrExps, modifiedNodes[i]));
    }

    const nodeImagesArray = await Promise.all(promises);

    for (let i = 0; i < modifiedNodes.length; i++) {
      modifiedNodes[i].data.customTooltipImages = [nodeImagesArray[i]];
    }
    return modifiedNodes;
  },

  checkIfPromisesExist({ customTooltipModel }) {
    // get imageComponents from layout
    const imageComponents = customTooltipModel.layout?.tooltip?.imageComponents;
    if (!imageComponents) return false;
    return imageComponents.length > 0;
  },
};
