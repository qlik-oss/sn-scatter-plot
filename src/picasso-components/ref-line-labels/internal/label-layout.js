const labelLayout = {
  getGap(segment1, segment2) {
    const minSegment = segment1.position < segment2.position ? segment1 : segment2;
    const maxSegment = segment1.position < segment2.position ? segment2 : segment1;
    return maxSegment.position - maxSegment.radius - (minSegment.position + minSegment.radius);
  },

  findSegmentPositionMeetMaxThenMin(segment, min, max) {
    // Push the segment back in, in case its max exceeds max
    const sMax = segment.position + segment.radius;
    const newPosition = segment.position - Math.max(0, sMax - max);

    // Push the segment back in, in case its new min is lower than min
    const sMin = newPosition - segment.radius;
    return newPosition + Math.max(0, min - sMin);
  },

  layoutPositionFromMin(segments, areaMin, areaMax, gap = 0) {
    const n = segments.length - 1;
    let segment;
    let nextSegment;
    let min = areaMin;
    let max;
    for (let i = 0; i < n; i++) {
      segment = segments[i];
      nextSegment = segments[i + 1];
      max = (segment.position + nextSegment.position) / 2 - gap / 2;
      segment.position = labelLayout.findSegmentPositionMeetMaxThenMin(segment, min, max);

      // Prepare min for the next round
      min = segment.position + segment.radius + gap;
    }
    nextSegment.position = labelLayout.findSegmentPositionMeetMaxThenMin(nextSegment, min, areaMax);
  },

  /**
   * In case the highest segement's max exceeds max, this method moves segments towards lower positions to fix the issue.
   * Starting from higher segments, it moves the segments down by shrinking the gap between them to the default gap.
   * The process continues until the highest segment's max is equal max or if the lowest segment has already been moved.
   * @param {object} segments are the 1D ranges to place the reference labels
   * @param {number} min is the min of the available space
   * @param {number} max is the max of the available space
   * @param {number} gap is the gap between two segements (default gap)
   */
  adjustPositionFromMax(segments, min, max, gap = 0) {
    const n = segments.length - 1;
    const d = Math.max(0, segments[n].position + segments[n].radius - max);
    if (d === 0) {
      return;
    }
    let i;
    let segment;
    let prevSegment;
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

  createLayout(labels, min, max, gap = 0) {
    const segments = labels.map((label) => label.segment);
    const n = segments.length - 1;
    if (n < 0) {
      return [];
    }
    if (n === 0) {
      const segment = segments[0];
      segment.position = labelLayout.findSegmentPositionMeetMaxThenMin(segment, min, max);
    } else {
      labelLayout.layoutPositionFromMin(segments, min, max, gap);
      labelLayout.adjustPositionFromMax(segments, min, max, gap);
    }

    const filteredLabels = labels.filter((label) => {
      // Rounding to prevent 'minus epsilon' bug
      const smin = Math.ceil(label.segment.position - label.segment.radius);
      const smax = label.segment.position + label.segment.radius;
      return smin >= min && smax <= max;
    });

    return filteredLabels;
  },
};

export default labelLayout;
