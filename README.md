[![CircleCI](https://circleci.com/gh/qlik-oss/sn-scatter-plot.svg?style=shield)](https://circleci.com/gh/qlik-oss/sn-scatter-plot)
[![Maintainability](https://api.codeclimate.com/v1/badges/da3b3287eeb33acd72c9/maintainability)](https://codeclimate.com/github/qlik-oss/sn-scatter-plot/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/da3b3287eeb33acd72c9/test_coverage)](https://codeclimate.com/github/qlik-oss/sn-scatter-plot/test_coverage)

# sn-scatter-plot

## A scatter plot for nebula.js.

The scatter plot uses bubbles or dots to represent values of two or three measures over a dimension. The first measure is for bubble's position on the horizontal axis, the second measure is for the bubble's position on the vertical axis, and the third measure (if any) is for the bubble's size. The scatter plot is normally used to observe relationships among measures.

![Scatter plot example](./assets/example1.png)

## Requirements

Requires `@nebula.js/stardust` version `2.3.0` or later.

## Installing

If you use npm: npm install @nebula.js/sn-scatter-plot. You can also load through the script tag directly from [https://unpkg.com](https://unpkg.com/@nebula.js/sn-scatter-plot).

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

// Rendering a scatter plot on the fly
nuked.render({
  type: 'scatterplot',
  element,
  fields: ['Alpha', '=Sum(Expression1)', '=Sum(Expression2)', '=Sum(Expression3)'],
  options: {
    direction: 'ltr',
    freeResize: true,
  },
  properties: {
    color: { mode: 'byDimension' }, // overrides default properties
  },
});
```

## Options

- direction - ltr/rtl
- freeResize - in conjunction with snapshotData on layout, lets the chart ignore size set on snapshotData

## More examples

### Color bubbles by an expression

![scatter plot color by expression](assets/sn-scatter-plot-color-by-expression.png)

```js
nuked.render({
  element: document.getElementById('object'),
  type: 'scatterplot',
  fields: ['Alpha', '=Sum(Expression2)'],
  properties: {
    qHyperCubeDef: {
      qMeasures: [
        // Register measure 1 in properties to insert color expression
        {
          qDef: {
            qDef: 'Sum(Expression1)',
          },
          qAttributeExpressions: [
            {
              qExpression: "if(sum(Expression2) > 0.0096*sum(Expression1), 'red', 'green')",
              id: 'colorByExpression',
            },
          ],
        },
      ],
    },
    color: {
      auto: false,
      mode: 'byExpression',
      expressionIsColor: true,
    },
  },
});
```

### Navigation panel can be turned on to make browsing chart easier

![scatter plot navigation](assets/sn-scatter-plot-navigation.png)

```js
nuked.render({
  element: document.getElementById('object'),
  type: 'scatterplot',
  fields: ['Alpha', '=Sum(Expression1)', '=Sum(Expression2)'],
  properties: {
    navigation: true,
  },
});
```

### Binned data is turned on automatically if there are more than 1000 data points

When zoomed in or panned outside of the home view, the chart shows an interactive
mini map and home button to help with navigating and resetting the view.

![scatter plot binned data](assets/sn-scatter-plot-binned-data.png)

```js
nuked.render({
  element: document.getElementById('object'),
  type: 'scatterplot',
  fields: ['TransID', '=Sum(Expression1)', '=Sum(Expression2)'],
  properties: {
    compressionResolution: 2, // queryLevel of bins, smaller number <-> more points per bin
  },
});
```

### Best fit line can be turned on

Supported types:

- Linear
- Average
- Second degree polynomial
- Third degree polynomial
- Forth degree polynomial
- Exponential
- Logarithmic
- Power

![scatter plot best fit line](assets/sn-scatter-plot-best-fit-line.png)

```js
const nuked = window.stardust.embed(app, {
  context: { theme: 'light' },
  types: [
    {
      name: 'scatterplot',
      load: () => Promise.resolve(window['sn-scatter-plot']),
    },
  ],
  flags: { BEST_FIT_LINE: true }, // Still experimental
});

nuked.render({
  element: document.getElementById('object'),
  type: 'scatterplot',
  properties: {
    qHyperCubeDef: {
      qDimensions: [
        {
          qDef: {
            qFieldDefs: ['Alpha'],
          },
        },
      ],
      qMeasures: [
        {
          qDef: {
            qDef: 'Sum(Expression1)',
          },
        },
        {
          qDef: {
            qDef: 'Sum(Expression2)',
          },
          qTrendLines: [
            {
              qType: 'LINEAR',
              qXColIx: 1, // The column in the hypercube to be used as x axis.
              style: {
                autoColor: true,
                dashed: true,
                lineDash: '8, 4',
              },
            },
          ],
        },
      ],
    },
  },
});
```

## Scatter plot plugins

A plugin can be passed into a scatter plot to add or modify its capability
or visual appearance.
A plugin needs to be defined before it can be rendered together with the chart.

```js
// Step 1: define the plugin
const pointPlugin = {
  info: {
    name: 'point-plugin',
    type: 'component-definition',
  },
  fn: ({ layout, keys }) => {
    const componentDefinition = {
      key: keys.COMPONENT.POINT,
      type: 'point',
      settings: {
        strokeWidth: '2px',
        stroke: 'black',
        size: (d) => getSizeInLogarithmScale(d, layout),
        fill: (d) => getColorBasedOnMedian(d),
      },
    };
    return componentDefinition;
  },
};

// Step 2: passing the plugin definition into the render function
nuked.render({
  type: 'scatterplot',
  element: document.querySelector('.scatterplot'),
  properties: chartProperties,
  plugins: [pointPlugin],
});
```

The plugin definition is an object, with two properties `info` and `fn`.
The `fn` returns a `picasso.js` component. To build this component,
some important chart internals are passed into the argument object of `fn`.

```js
// Structure of the argument object of fn
const pluginArgs = {
    layout,
    keys: {
      SCALE:
        X,
        Y,
      },
      COMPONENT: {
        X_AXIS,
        Y_AXIS,
        POINT,
      },
    },
  };
```

With plugins, you can either add new components or modify existing components
of the scatter plot.

### Add new components

For example, a line component can be added on top of a scatter plot
to highlight the slopes between data points.

![scatter plot plugin (adding)](assets/sn-scatter-plot-plugin-add.png)

```js
// Definition of the line plugin
const linePlugin = {
  info: {
    name: 'line-plugin',
    type: 'component-definition',
  },
  fn: ({ keys }) => {
    const componentDefinition = {
      key: 'new-linecomp',
      type: 'line',
      data: {
        extract: {
          field: 'qDimensionInfo/0',
          props: {
            x: { field: 'qMeasureInfo/0' },
            y: { field: 'qMeasureInfo/1' },
          },
        },
        sort: (a, b) => (a.x.value > b.x.value ? 1 : -1), // sort ascending
      },
      settings: {
        coordinates: {
          minor: {
            scale: keys.SCALE.Y,
            ref: 'y',
          },
          major: {
            scale: keys.SCALE.X,
            ref: 'x',
          },
        },
        layers: {
          line: {
            stroke: 'red',
            strokeWidth: 3,
          },
        },
      },
    };
    return componentDefinition;
  },
};
```

### Modify existing components

As an example, the positions and the appearance of the axes can be
modified completely by plugins.

![scatter plot plugin (modifying)](assets/sn-scatter-plot-plugin-modify.png)

To overide an existing component, `fn` should returns a `picasso.js` component
that has the same `key` as the existing component (`key: 'x-axis'` in
this example)

```js
// Definition of the x-axis plugin
const xAxisPlugin = {
  info: {
    name: 'x-axis-plugin',
    type: 'component-definition',
  },
  fn: ({ keys }) => {
    const componentDefinition = {
      type: 'axis',
      key: keys.COMPONENT.X_AXIS,
      layout: {
        dock: 'top',
      },
      settings: {
        labels: {
          fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
          fontSize: '15px',
          fill: 'red',
        },
        line: { stroke: 'green', strokeWidth: 2 },
        ticks: { stroke: 'blue', strokeWidth: 2 },
      },
    };
    return componentDefinition;
  },
};

// y-axis plugin can be defined with similar code
// ...
```

More details can be found in the `examples` folder.

### Plugins disclaimer

- The plugins API is still experimental.
- We can not guarantee our charts to be compatible with all different settings, especially when modifying existing components.
