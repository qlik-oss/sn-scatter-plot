export default function logicalSize({ layout, options }) {
  return layout.snapshotData && !options.freeResize
    ? { width: layout.snapshotData.content.size.w, height: layout.snapshotData.content.size.h }
    : undefined;
}
