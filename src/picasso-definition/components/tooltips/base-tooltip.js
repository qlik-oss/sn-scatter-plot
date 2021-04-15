const TOOLTIP_CONTAINER_SELECTOR = '#la-vie-tooltip';

function appendTooltipContainer() {
  if (!document.querySelector(TOOLTIP_CONTAINER_SELECTOR)) {
    const container = document.createElement('div');
    container.id = 'la-vie-tooltip';
    container.style.overflow = 'hidden';
    container.style.position = 'fixed';
    container.style.pointerEvents = 'none';
    container.style.left = '0px';
    container.style.top = '0px';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.zIndex = 1020;
    document.body.appendChild(container);
  }
}

function destroyTooltipContainer() {
  const elm = document.querySelector(TOOLTIP_CONTAINER_SELECTOR);
  if (elm && elm.parentElement && elm.childElementCount < 1) {
    elm.parentElement.removeChild(elm);
  }
}

function rowContent(inputRow, { h, style }) {
  return inputRow.map((cell) => {
    const attributes = {
      style: { ...(style.cell || {}), ...(cell.style || {}) },
      class: cell.class,
    };
    if (cell.colspan) {
      attributes.colspan = cell.colspan;
    }
    return h('td', attributes, cell.content);
  });
}

/**
 * Base tooltip definition
 */
export default function createBaseTooltip({ key = 'tooltip', rtl }) {
  return {
    show: true,
    key,
    type: 'tooltip',
    layout: {
      displayOrder: 3,
    },
    beforeMount() {
      appendTooltipContainer();
    },
    beforeUpdate() {
      appendTooltipContainer();
    },
    destroyed() {
      destroyTooltipContainer();
    },
    settings: {
      appendTo: () => document.querySelector(TOOLTIP_CONTAINER_SELECTOR),
      content: ({ h, data, style }) => [].concat(...data).map((row) => h('tr', {}, rowContent(row, { h, style }))),
      direction: rtl ? 'rtl' : 'ltr',
    },
    style: {
      arrow: {
        color: '#404040',
      },
      content: {
        display: 'table',
        'border-spacing': '4px',
        background: 'rgba(64, 64, 64, 0.9)',
        opacity: '1',
        fontSize: '13px',
        fontFamily: 'QlikView Sans, sans-serif',
        'empty-cells': 'show',
      },
      cell: {
        'max-width': '180px',
        'word-break': 'break-word',
        'word-wrap': 'break-word',
        'overflow-wrap': 'break-word',
        hyphens: 'auto',
      },
    },
  };
}
