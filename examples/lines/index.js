/* eslint-disable no-unused-vars */
(function run() {
  function connect() {
    const schemaPromise = fetch('https://unpkg.com/enigma.js/schemas/3.2.json').then((response) => response.json());

    const openDoc = (appId) =>
      schemaPromise.then((schema) =>
        window.enigma
          .create({
            schema,
            url: `ws://${window.location.hostname || 'localhost'}:9076/app/${encodeURIComponent(appId)}`,
          })
          .open()
          .then((qix) => qix.openDoc(appId))
      );

    return openDoc;
  }

  connect()('/apps/Executive_Dashboard.qvf').then((app) => {
    // configure nucleus
    const nuked = window.stardust.embed(app, {
      context: { theme: 'light' },
      types: [
        {
          name: 'scatter',
          load: () => Promise.resolve(window['sn-scatter-plot']),
        },
      ],
    });

    nuked.selections().then((s) => s.mount(document.querySelector('.toolbar')));

    const linePlugin = {
      info: {
        name: 'line-plugin',
        type: 'component-definition',
      },
      fn: (layout) => {
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
                scale: 'y',
                ref: 'y',
              },
              major: {
                scale: 'x',
                ref: 'x',
              },
            },
            layers: {
              // curve: 'monotone',
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

    // create a session object
    nuked.render({
      element: document.querySelector('.object'),
      type: 'scatter',
      plugins: [linePlugin],
      // eslint-disable-next-line no-undef
      properties: propertiesObject,
      // fields: ['State or territory', '=Sum(Population)', '=Avg(Income)'],
    });
  });
})();
