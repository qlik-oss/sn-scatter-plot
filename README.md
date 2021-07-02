[![CircleCI](https://circleci.com/gh/qlik-oss/sn-scatter-plot.svg?style=shield)](https://circleci.com/gh/qlik-oss/sn-scatter-plot)
[![Maintainability](https://api.codeclimate.com/v1/badges/da3b3287eeb33acd72c9/maintainability)](https://codeclimate.com/github/qlik-oss/sn-scatter-plot/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/da3b3287eeb33acd72c9/test_coverage)](https://codeclimate.com/github/qlik-oss/sn-scatter-plot/test_coverage)

# sn-scatter-plot

## A scatter plot for nebula.js.

The scatter plot uses bubbles or dots to represent values of two or three measures over a dimension. The first measure is for bubble's position on the horizontal axis, the second measure is for the bubble's position on the vertical axis, and the third measure (if any) is for the bubble's size. The scatter plot is normally used to observe relationships among measures.

![Scatter plot example](./assets/example1.png)

## Installing

If you use npm: npm install @nebula.js/sn-scatter-plot

## Usage

```js
import { embed } from '@nebula.js/stardust';
import scatterplot from '@nebula.js/sn-scatter-plot';

// 'app' is an enigma app model
const nuked = embed(app, {
  types: [
    {
      // register the scatterplot
      name: 'scatterplot',
      load: () => Promise.resolve(scatterplot),
    },
  ],
});

nuked.render({
  element,
  type: 'scatterplot',
});
```
