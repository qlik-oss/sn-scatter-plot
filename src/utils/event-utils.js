export function eventToChartPoint(event, chart) {
  const bounds = chart.element.getBoundingClientRect();
  if (event.center) {
    return {
      x: event.center.x - bounds.left,
      y: event.center.y - bounds.top,
    };
  }
  return {
    x: event.clientX - bounds.left,
    y: event.clientY - bounds.top,
  };
}

export function eventToComponentPoint(event, chart, component) {
  const p = eventToChartPoint(event, chart);
  const { x, y } = component.rect.computedPhysical;
  return { x: p.x - x, y: p.y - y };
}
