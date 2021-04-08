const labelLayout = {
  isInside(segment, min, max) {
    const smin = segment.position - segment.radius;
    const smax = segment.position + segment.radius;
    return smin >= min && smax <= max;
  },

  getGap(segment1, segment2) {
    const minSegment = segment1.position < segment2.position ? segment1 : segment2;
    const maxSegment = segment1.position < segment2.position ? segment2 : segment1;
    return maxSegment.position - maxSegment.radius - (minSegment.position + minSegment.radius);
  },

  findSegmentPositionMeetMax(segment, max) {
    const d = Math.max(0, segment.max - max);
    return segment.center - d;
  },

  findSegmentPositionMeetMin(segment, min) {
    const d = Math.max(0, min - segment.min);
    return segment.center + d;
  },

  findSegmentPositionMeetMaxThenMin(segment, min, max) {
    const position = labelLayout.findSegmentPositionMeetMax(segment, max);
    return labelLayout.findSegmentPositionMeetMin({ center: position, min: position - segment.radius }, min);
  },

  layoutPositionFromMin(segments, min, max, gap = 0) {
    const n = segments.length - 1;
    let segment;
    let nextSegment;
    let min1 = min;
    for (let i = 0; i < n; i++) {
      segment = segments[i];
      nextSegment = segments[i + 1];
      segment.position = labelLayout.findSegmentPositionMeetMaxThenMin(
        segment,
        min1,
        (segment.center + nextSegment.center - gap) / 2
      );
      min1 = segment.position + segment.radius + gap / 2;
    }
    nextSegment.position = labelLayout.findSegmentPositionMeetMaxThenMin(nextSegment, min1, max);
  },

  adjustPositionFromMax(segments, min, max, gap = 0) {
    const n = segments.length - 1;
    let i;
    let segment;
    let prevSegment;
    const d = Math.max(0, segments[n].position + segments[n].radius - max);
    if (d === 0) {
      return;
    }
    let move;
    let totalMove = 0;
    for (i = n; i > 0; i--) {
      segment = segments[i];
      prevSegment = segments[i - 1];
      move = Math.max(0, labelLayout.getGap(prevSegment, segment) - gap);
      move -= Math.max(0, totalMove + move - d);
      totalMove += move;
      segment.move = move;
      if (totalMove >= d) {
        break;
      }
    }
    if (totalMove < d) {
      move = Math.max(0, prevSegment.position - prevSegment.radius - min);
      move -= Math.max(0, totalMove + move - d);
      totalMove += move;
      prevSegment.move = move;
    }
    totalMove = 0;
    for (i = 0; i <= n; i++) {
      segment = segments[i];
      totalMove += segment.move || 0;
      segment.move = totalMove;
      segment.position -= totalMove;
    }
  },

  layout({ segments, min, max, gap = 0 }) {
    const n = segments.length - 1;
    if (n < 0) {
      return;
    }
    if (n === 0) {
      const segment = segments[0];
      segment.position = labelLayout.findSegmentPositionMeetMaxThenMin(segment, min, max);
      return;
    }
    labelLayout.layoutPositionFromMin(segments, min, max, gap);
    labelLayout.adjustPositionFromMax(segments, min, max, gap);
  },
};

export default labelLayout;
