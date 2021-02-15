[![CircleCI](https://circleci.com/gh/qlik-trial/sn-scatter-plot.svg?style=shield)](https://circleci.com/gh/qlik-trial/sn-scatter-plot)
[![Maintainability](https://api.codeclimate.com/v1/badges/cffe9ecd336c16de6dc2/maintainability)](https://codeclimate.com/github/qlik-trial/sn-scatter-plot/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/cffe9ecd336c16de6dc2/test_coverage)](https://codeclimate.com/github/qlik-trial/sn-scatter-plot/test_coverage)

# sn-scatter-plot

scatterplot supernova for nebula.js

## Usage

```js
import { embed } from '@nebula.js/stardust';
import scatterplot from '@scatterplot/sn-scatter-plot';

// 'app' is an enigma app model
const nuked = embed(app, {
  types: [{ // register the scatterplot
    name: 'scatterplot',
    load: () => Promise.resolve(scatterplot);
  }]
});

nuked.render({
  element,
  type: 'scatterplot',
});
```
