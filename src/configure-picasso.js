import picassojs from 'picasso.js';
import picassoQ from 'picasso-plugin-q';
import picassoHammer from 'picasso-plugin-hammer';
import Hammer from 'hammerjs';
import refLineLabelsComponent from './picasso-components/ref-line-labels';

export default function configurePicasso() {
  const picasso = picassojs();

  picasso.use(picassoQ);
  picasso.use(picassoHammer(Hammer));

  picasso.component('reference-line-labels', refLineLabelsComponent);

  return picasso;
}
