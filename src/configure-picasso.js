import picassojs from 'picasso.js';
import picassoQ from 'picasso-plugin-q';
import picassoHammer from 'picasso-plugin-hammer';
import Hammer from 'hammerjs';
import refLineLabelsComponent from './picasso-components/ref-line-labels';
import renderer from './picasso-components/react-components/react-renderer';
import disclaimer from './picasso-components/react-components/disclaimer';

export default function configurePicasso() {
  const picasso = picassojs();

  picasso.use(picassoQ);
  picasso.use(picassoHammer(Hammer));

  picasso.renderer('react', renderer());
  picasso.component('reference-line-labels', refLineLabelsComponent);
  picasso.component('disclaimer', disclaimer());

  return picasso;
}
