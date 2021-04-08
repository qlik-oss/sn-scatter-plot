export default function getFormatter(scale) {
  let formatterFn;
  if (typeof scale !== 'undefined' && scale.data) {
    const scaleData = scale.data() && scale.data().fields;
    formatterFn = scaleData && scaleData[0] ? scaleData[0].formatter() : null;
  }
  return formatterFn;
}
