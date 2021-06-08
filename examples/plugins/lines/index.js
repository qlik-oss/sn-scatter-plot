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

    // create a session object
    nuked.render({
      element: document.querySelector('.object'),
      type: 'scatter',
      plugins: [linePlugin], // eslint-disable-line no-undef
      properties: chartProperties, // eslint-disable-line no-undef
    });
  });
})();
