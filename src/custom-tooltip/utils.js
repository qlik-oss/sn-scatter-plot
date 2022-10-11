import rtlUtils from '../utils/rtl-utils';
import TOOLTIP from './constants';
import customTooltipPromises from './promises';
import tooltipChart from './chart/index';

// used by the deprecated custom tooltip
function toPoint(event, chart) {
  const x = event.clientX === undefined ? Math.floor(event.srcEvent.clientX) : event.clientX;
  const y = event.clientY === undefined ? Math.floor(event.srcEvent.clientY) : event.clientY;

  const chartBounds = chart.element.getBoundingClientRect();
  const cx = x - chartBounds.left;
  const cy = y - chartBounds.top;
  return { cx, cy };
}

function quarantineAttributeExpressions(expressions, data) {
  const properties = data;
  let propExcluded = properties.qLayoutExclude;
  if (!propExcluded) {
    properties.qLayoutExclude = {
      quarantine: {},
    };
    propExcluded = properties.qLayoutExclude;
  }
  if (!propExcluded.quarantine) {
    propExcluded.quarantine = {};
  }
  propExcluded.quarantine[TOOLTIP.CUSTOM.QUARANTINE] = [];
  expressions.forEach((expr) => {
    propExcluded.quarantine[TOOLTIP.CUSTOM.QUARANTINE].push(expr);
  });
  properties.qLayoutExclude = propExcluded;
}

function getDimensions(data) {
  const dimensions = data.qHyperCubeDef ? data.qHyperCubeDef.qDimensions : data.qHyperCube.qDimensionInfo;
  if (dimensions && dimensions.length > 0) {
    return dimensions;
  }
  return undefined;
}

function getTooltipAttrList() {
  const { EXPRESSION, TITLE, DESCRIPTION, IMAGES } = TOOLTIP.CUSTOM;
  const idList = {};
  idList[EXPRESSION] = true;
  idList[TITLE] = true;
  idList[DESCRIPTION] = true;
  idList[IMAGES] = true;
  return idList;
}

function extractTooltipAttrs(attrs) {
  const idList = getTooltipAttrList();
  return attrs.filter((obj) => idList[obj.id]);
}

const customTooltipUtils = {
  getNodes(event, chart) {
    const pointer = toPoint(event, chart);
    const nodes = chart.shapesAt({
      x: pointer.cx,
      y: pointer.cy,
    });

    return nodes;
  },

  // getDataNodes retrieves the nodes that will be displayed and need to load an image
  // get the first data node when hovering over to label e.t.c
  // filter nodes that still needs to load the image when hovering over to data nodes
  // exclude nodes that are not linked to data nodes
  getDataNodes(chart, nodes) {
    let result = [];
    let allDataNodes;
    // data node key per each chart type.
    const keysPerType = {
      container: {
        bar: true,
        'bullet-axis': true,
      },
      circle: {
        'point-component': true,
      },
    };

    nodes.forEach((node) => {
      // initialDataSrc is where the selection information about the hovering nodes is stored
      const initialDataSrc = node.data?.selectionDimension ?? node.data;

      // search for data nodes only when needed (e.g: hovering over to axis nodes)
      if (initialDataSrc && !node.data?.customTooltipAttrExps && !keysPerType[node.type]) {
        // populate allDataNodes variable here, chart.findShapes can affect the performance
        if (!allDataNodes) {
          allDataNodes = [];
          Object.keys(keysPerType).forEach((type) => {
            allDataNodes = allDataNodes.concat(
              chart
                .findShapes(type)
                .filter(
                  (n) =>
                    n.data && n.data.customTooltipAttrExps && !n.data.customTooltipImages && keysPerType[type][n.key]
                )
            );
          });
        }

        const dataNodes = allDataNodes.filter((n) => {
          const currentDataSrc = n.data.stack ?? n.data.selectionOuterDimension ?? n.data.selectionDimension;
          return (
            currentDataSrc &&
            currentDataSrc.value === initialDataSrc.value &&
            currentDataSrc.label === initialDataSrc.label
          );
        });
        if (dataNodes.length > 0) {
          // if we are hovering over to a label, pick only the first node
          result = result.concat(dataNodes[0]);
        }
      } else if (node.data?.customTooltipAttrExps && !node.data.customTooltipImages) {
        const modifiedNodes = node;
        modifiedNodes.data.customTooltipImages = [];
        result.push(modifiedNodes);
      }
    });

    return result;
  },
  displayTooltip(e, tooltip, { nodes, opts = {}, customTooltipModel, extractedNodes = [], hide }) {
    if (customTooltipModel && !hide) {
      const { layout, chart } = customTooltipModel;
      const { attrExps } = customTooltipUtils.getAttrExprData(layout);

      if (!extractedNodes.length && !nodes.length) {
        // if there are no nodes given, do not try to add images or other data from promises
        tooltip.emit('show', e, nodes.length ? { nodes } : undefined);
      } else {
        customTooltipPromises
          .handlePromises({
            customTooltipModel,
            nodes: customTooltipUtils.getDataNodes(chart, extractedNodes.length > 0 ? extractedNodes : nodes),
            attrExps,
            opts,
          })
          .then(() => {
            tooltip.emit('show', e, nodes.length ? { nodes } : undefined);
          });
      }
    } else {
      // destroy mini chart's sessionAlternateState, necessary for the onHide functionality
      if (customTooltipModel?.miniChartToken?.alternateState) {
        tooltipChart.hide({ app: opts.app, customTooltipModel });
      }
      tooltip.emit('hide');
    }
  },
  checkIfPromisesExist({ customTooltipModel }) {
    return customTooltipPromises.checkIfPromisesExist({ customTooltipModel });
  },
  getAttrExps(data, dimension) {
    const result = dimension;
    const pathToAttrExpr = data.qHyperCubeDef?.qDimensions ? 'qAttributeExpressions' : 'qAttrExprInfo';
    if (!result[pathToAttrExpr]) result[pathToAttrExpr] = [];

    return result[pathToAttrExpr];
  },
  getAttrExprData(layout) {
    let attrExps = [];
    let fieldPath = '';

    const dimensions = layout.qHyperCube?.qDimensionInfo || [];
    if (dimensions.length > 0) {
      const lastIndex = dimensions.length - 1;
      attrExps = layout.qHyperCube?.qDimensionInfo?.[lastIndex]?.qAttrExprInfo || [];
      fieldPath = `qDimensionInfo/${lastIndex}/qAttrExprInfo`;
    }
    return { attrExps, fieldPath };
  },
  quarantineCustomTooltipAttrs(data, dimension = {}) {
    const alreadyStored = data.qLayoutExclude?.quarantine?.[TOOLTIP.CUSTOM.QUARANTINE];
    if (!alreadyStored) {
      const attrs = dimension.qAttributeExpressions || [];
      const tooltipAttrs = extractTooltipAttrs(attrs);
      quarantineAttributeExpressions(tooltipAttrs, data);
    }
  },
  unquarantineCustomTooltipAttrs(data) {
    const properties = data;
    const storedAttrs = data.qLayoutExclude?.quarantine?.[TOOLTIP.CUSTOM.QUARANTINE];
    if (storedAttrs) {
      delete properties.qLayoutExclude.quarantine[TOOLTIP.CUSTOM.QUARANTINE];
    }
  },
  setAttrsFromQuarantine(data, index) {
    const dimensions = getDimensions(data);
    if (!dimensions) return;
    const targetIndex = index !== undefined ? index : dimensions.length - 1;
    if (!dimensions[targetIndex]) return;
    const attrs = this.getAttrExps(data, dimensions[targetIndex]);
    const tooltipAttrs = extractTooltipAttrs(attrs);
    const noTooltipExpressions = tooltipAttrs.length === 0;
    if (noTooltipExpressions) {
      const quarantineAttrs = data.qLayoutExclude?.quarantine?.customTooltip || [];
      const result = [...attrs, ...quarantineAttrs];
      const newData = data;
      if (newData.qHyperCubeDef) {
        newData.qHyperCubeDef.qDimensions[targetIndex].qAttributeExpressions = result;
      } else {
        newData.qHyperCube.qDimensionInfo[targetIndex].qAttrExprInfo = result;
      }
    }
  },
  moveCustomTooltipAttrs(data, oldDimension = {}, index) {
    let attributesToMove = [];
    const newDimensionList = getDimensions(data) || [];
    const oldDimensionList = [...newDimensionList, ...[oldDimension]];
    oldDimensionList.forEach((dim) => {
      const attrs = dim.qAttributeExpressions || [];
      const tooltipAttrs = extractTooltipAttrs(attrs);
      if (tooltipAttrs.length > 0) {
        attributesToMove = tooltipAttrs;
      }
    });
    // Remove tooltip attributes from dimensions
    const idList = getTooltipAttrList();
    const cleanedAttributes = newDimensionList.map((dim) => {
      const result = dim;
      const attrs = dim.qAttributeExpressions || [];
      result.qAttributeExpressions = attrs.filter((obj) => !idList[obj.id]);
      return result;
    });

    const targetIndex = index !== undefined ? index : cleanedAttributes.length - 1;
    // move tooltip attributes to target dim
    if (cleanedAttributes.length > 0) {
      cleanedAttributes[targetIndex].qAttributeExpressions =
        cleanedAttributes[targetIndex].qAttributeExpressions.concat(attributesToMove);
    }

    const newData = data;
    if (data.qHyperCubeDef) {
      newData.qHyperCubeDef.qDimensions = cleanedAttributes;
    } else {
      newData.qHyperCube.qDimensionInfo = cleanedAttributes;
    }
  },
  addCallbackCustomTooltip(data) {
    if (data.qHyperCubeDef.qDimensions.length > 1) {
      this.moveCustomTooltipAttrs(data);
    } else {
      this.setAttrsFromQuarantine(data);
      this.unquarantineCustomTooltipAttrs(data);
    }
  },
  moveCallbackCustomTooltip(data, dimension) {
    if (data.qHyperCubeDef.qDimensions.length === 1) {
      this.setAttrsFromQuarantine(data);
      this.unquarantineCustomTooltipAttrs(data);
    }
    if (data.qHyperCubeDef.qDimensions.length > 1) {
      this.moveCustomTooltipAttrs(data, dimension);
    }
  },
  removeCallbackCustomTooltip(data, dimension) {
    if (data.qHyperCubeDef.qDimensions.length > 0) {
      this.moveCustomTooltipAttrs(data, dimension);
    } else {
      this.quarantineCustomTooltipAttrs(data, dimension);
    }
  },
  replaceCallbackCustomTooltip(data, oldDimension) {
    if (data.qHyperCubeDef.qDimensions.length > 1) {
      this.moveCustomTooltipAttrs(data, oldDimension);
    } else {
      this.quarantineCustomTooltipAttrs(data, oldDimension);
      this.setAttrsFromQuarantine(data);
      this.unquarantineCustomTooltipAttrs(data);
    }
  },
  shouldIgnoreDefaultRows(layout) {
    return layout.tooltip?.hideBasic || 0;
  },
  DEBOUNCE_THRESHOLD: 50,
  getFooterRow(value, rtl) {
    const contentDir = rtlUtils.detectTextDirection(value);
    return [
      {
        content: value,
        style: {
          'font-style': 'italic',
          'font-size': '12px',
          'line-height': '16px',
          color: 'rgba(255, 255, 255, 0.6)',
          'text-align': rtl ? 'right' : 'left',
          direction: contentDir,
        },
        colspan: 2,
      },
      {},
    ];
  },

  getImageRow(data, ctx) {
    const contentDir = rtlUtils.detectTextDirection(data.src);
    const imageElement = [];
    const containerProps = {
      style: {
        display: 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
        overflow: 'hidden',
        width: data.width,
        height: data.height,
      },
    };

    // The original image is set as an image inside a container instead of a background image
    // This is because we want it to scale down when neccessary but without the ability to scale up.
    // For the small, medium and large images we want them to scale up and down as much as needed for them to fit the container
    if (data.size === 'original' || data.imageError) {
      imageElement.push(
        ctx.h('span', {
          style: {
            display: 'inline-block',
            height: '100%',
            'vertical-align': 'middle',
          },
        })
      );

      const src = data.imageError ? `${data.src}?${Math.random()}` : data.src;

      imageElement.push(
        ctx.h('img', {
          style: {
            'max-width': data.width,
            'max-height': data.height,
            'vertical-align': 'middle',
          },
          src,
          referrerpolicy: 'no-referrer',
        })
      );

      containerProps.style['text-align'] = 'center';
      containerProps.style['white-space'] = 'nowrap';
    } else {
      containerProps.style['background-size'] = 'contain';
      containerProps.style['background-repeat'] = 'no-repeat';
      containerProps.style['background-position'] = 'center';
      containerProps.style['background-image'] = `url('${data.src}')`;
    }

    const imageContainer = [ctx.h('div', containerProps, imageElement), ''];

    return [
      {
        content: imageContainer,
        style: {
          'text-align': ctx.rtl ? 'right' : 'left',
          direction: contentDir,
          'max-width': data.width,
        },
        colspan: 2,
      },
      {},
    ];
  },
};

export default customTooltipUtils;
