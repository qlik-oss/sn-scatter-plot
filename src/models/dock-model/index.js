// TODO: replace with proper module/implementation
export function getLayoutMode(width, height) {
  if (width < 150 || height < 75) {
    return 'spark';
  }
  if (width < 550 || height < 450) {
    return 'medium';
  }
  return 'large';
}

// TODO: replace with proper module/implementation
export function getDock(orientation, setting, rtl) {
  if (orientation === 'vertical') {
    return setting === 'near' ? 'bottom' : 'top';
  }
  if (setting === 'far') {
    return rtl ? 'left' : 'right';
  }
  return rtl ? 'right' : 'left';
}

// TODO: replace with proper module/implementation
export function getOppositeDock(dock) {
  switch (dock) {
    case 'left':
      return 'right';
    case 'right':
      return 'left';
    case 'top':
      return 'bottom';
    default:
    case 'bottom':
      return 'top';
  }
}

export default function createDockModel({ layoutService, size: { width = 0, height = 0 } = {}, rtl }) {
  const getX = (chartSize) => {
    const xDock = getDock('vertical', layoutService.getLayoutValue('xAxis.dock'), rtl);
    return {
      dock: xDock,
      opposite: getOppositeDock(xDock),
      containerSize: chartSize.width,
    };
  };

  const getY = (chartSize) => {
    const yDock = getDock('horizontal', layoutService.getLayoutValue('yAxis.dock'), rtl);
    return {
      dock: yDock,
      opposite: getOppositeDock(yDock),
      containerSize: chartSize.height,
    };
  };

  const model = {
    update: (updatedSize) => {
      model.chartSize = updatedSize;
      model.x = getX(updatedSize);
      model.y = getY(updatedSize);
      model.mode = getLayoutMode(updatedSize.width, updatedSize.height);
    },
  };

  model.update({ width, height });

  return model;
}
