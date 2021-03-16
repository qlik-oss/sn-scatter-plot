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

## Contributing

Follow the instructions in our [contributing guide](./.github/CONTRIBUTING.md).
