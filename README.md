# sn-scatter-plot

scatterplot supernova for nebula.js

### Status

[![CircleCI](https://circleci.com/gh/qlik-trial/sn-scatter-plot.svg?style=shield)](https://circleci.com/gh/qlik-trial/sn-scatter-plot)
[![Maintainability](https://api.codeclimate.com/v1/badges/2bed186589e2fbfe3cdc/maintainability)](https://codeclimate.com/repos/607d3d3f2d22cb014c008787/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2bed186589e2fbfe3cdc/test_coverage)](https://codeclimate.com/repos/607d3d3f2d22cb014c008787/test_coverage)

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
