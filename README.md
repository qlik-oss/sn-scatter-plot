# sn-scatter-plot

scatterplot supernova for nebula.js

### Status

[![CircleCI](https://circleci.com/gh/qlik-oss/sn-scatter-plot.svg?style=shield)](https://circleci.com/gh/qlik-oss/sn-scatter-plot)
[![Maintainability](https://api.codeclimate.com/v1/badges/da3b3287eeb33acd72c9/maintainability)](https://codeclimate.com/github/qlik-oss/sn-scatter-plot/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/da3b3287eeb33acd72c9/test_coverage)](https://codeclimate.com/github/qlik-oss/sn-scatter-plot/test_coverage)

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

## Contributing

Follow the instructions in our [contributing guide](./.github/CONTRIBUTING.md).
