// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import { Mui, classGenerator } from './mui';

const classNameGenerator = classGenerator();

export default function r() {
  const isNotNumber = (x) => typeof x !== 'number' || Number.isNaN(x);
  function createRendererBox({ x, y, width, height, scaleRatio, margin } = {}) {
    const box = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      scaleRatio: {
        x: 1,
        y: 1,
      },
      margin: {
        left: 0,
        top: 0,
      },
    };

    box.x = isNotNumber(x) ? box.x : x;
    box.y = isNotNumber(y) ? box.y : y;
    box.width = isNotNumber(width) ? box.width : width;
    box.height = isNotNumber(height) ? box.height : height;
    if (typeof scaleRatio !== 'undefined') {
      box.scaleRatio.x = isNotNumber(scaleRatio.x) ? box.scaleRatio.x : scaleRatio.x;
      box.scaleRatio.y = isNotNumber(scaleRatio.y) ? box.scaleRatio.y : scaleRatio.y;
    }
    if (typeof margin !== 'undefined') {
      box.margin.left = isNotNumber(margin.left) ? 0 : margin.left;
      box.margin.top = isNotNumber(margin.top) ? 0 : margin.top;
    }

    return box;
  }

  return function renderer(opts = {}) {
    const { createElement = document.createElement.bind(document) } = opts;

    let el;
    let rect = createRendererBox();
    let root;

    const dom = {
      element: () => el,
      root: () => el,
      appendTo(element) {
        if (!el) {
          el = createElement('div');
          el.style.position = 'absolute';
          el.style['-webkit-font-smoothing'] = 'antialiased';
          el.style['-moz-osx-font-smoothing'] = 'antialiased';
          el.style.pointerEvents = 'none';
        }

        element.appendChild(el);

        return el;
      },
      render(nodes) {
        if (!el) {
          return false;
        }

        const scaleX = rect.scaleRatio.x;
        const scaleY = rect.scaleRatio.y;

        el.style.left = `${Math.round(rect.margin.left + rect.x * scaleX)}px`;
        el.style.top = `${Math.round(rect.margin.top + rect.y * scaleY)}px`;
        el.style.width = `${Math.round(rect.width)}px`;
        el.style.height = `${Math.round(rect.height)}px`;
        el.style.transform = `scale(${scaleX}, ${scaleY})`;
        el.style.transformOrigin = 'top left';
        if (!root) {
          root = createRoot(el);
        }
        root.render(Mui(nodes, classNameGenerator));

        return true;
      },

      /**
       * Get nodes renderer at area
       * @param {point|circle|rect|line|polygon} geometry - Get nodes that intersects with geometry
       * @returns {SceneNode[]}
       */
      itemsAt: () => [],

      /**
       * Get all nodes matching the provided selector
       * @param {string} selector CSS selector [type, attribute, universal, class]
       * @returns {SceneNode[]} Array of objects containing matching nodes
       */
      findShapes: () => [],

      clear() {
        if (root) {
          root.unmount();
        }

        return dom;
      },

      destroy() {
        if (root) {
          root.unmount();
        }
        if (el && el.parentElement) {
          el.parentElement.removeChild(el);
        }
        el = null;
      },

      size(inner) {
        if (inner) {
          rect = createRendererBox(inner);
        }
        return rect;
      },

      // measureText,
      // textBounds
    };

    return dom;
  };
}
