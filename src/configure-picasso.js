import picassojs from 'picasso.js';
import picassoQ from 'picasso-plugin-q';
import picassoHammer from 'picasso-plugin-hammer';
import Hammer from 'hammerjs';
import refLineLabelsComponent from './picasso-components/ref-line-labels';
import pointLabelComponent from './picasso-components/point-label';
import renderer from './picasso-components/react-components/react-renderer';
import disclaimer from './picasso-components/react-components/disclaimer';
import navigationPanel from './picasso-components/react-components/navigation-panel';
import miniChartWindow from './picasso-components/mini-chart-window';
import dataTitle from './picasso-components/react-components/data-title-component';
import heatMapHighLight from './picasso-components/heat-map-highlight';

export default function configurePicasso() {
  const picasso = picassojs();

  picasso.use(picassoQ);
  picasso.use(picassoHammer(Hammer));

  picasso.renderer('react', renderer());
  picasso.component('reference-line-labels', refLineLabelsComponent);
  picasso.component('point-label', pointLabelComponent);
  picasso.component('disclaimer', disclaimer());
  picasso.component('mini-chart-window', miniChartWindow);
  picasso.component('navigation-panel', navigationPanel());
  picasso.component('data-title', dataTitle());
  picasso.component('heat-map-highlight', heatMapHighLight);

  return picasso;
}
