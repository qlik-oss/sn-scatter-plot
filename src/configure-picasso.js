import picassojs from 'picasso.js';
import picassoQ from 'picasso-plugin-q';
import picassoHammer from 'picasso-plugin-hammer';
import Hammer from 'hammerjs';

export default function configurePicasso() {
  const picasso = picassojs();

  picasso.use(picassoQ);
  picasso.use(picassoHammer(Hammer));

  return picasso;
}
