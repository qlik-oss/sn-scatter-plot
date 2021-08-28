/* eslint-disable no-unused-vars */
let nuked;
function run() {
  function connect() {
    const loadSchema = () =>
      fetch('https://unpkg.com/enigma.js/schemas/12.34.11.json').then((response) => response.json());
    const createConnection = () =>
      loadSchema().then((schema) =>
        window.enigma
          .create({
            schema,
            url: `ws://${window.location.hostname || 'localhost'}:9076/app/${Date.now()}`,
          })
          .open()
          .then((qix) => qix.createSessionApp())
      );
    return createConnection().then((app) =>
      app
        .setScript(
          `Set dataManagerTables = '','Table';
          //This block renames script tables from non generated section which conflict with the names of managed tables
          For each name in $(dataManagerTables) 
              Let index = 0;
              Let currentName = name; 
              Let tableNumber = TableNumber(name); 
              Let matches = 0; 
              Do while not IsNull(tableNumber) or (index > 0 and matches > 0)
                  index = index + 1; 
                  currentName = name & '-' & index; 
                  tableNumber = TableNumber(currentName) 
                  matches = Match('$(currentName)', $(dataManagerTables));
              Loop 
              If index > 0 then 
                      Rename Table '$(name)' to '$(currentName)'; 
              EndIf; 
          Next; 
          Set dataManagerTables = ;
          Unqualify *;
          [Table]:
          LOAD * INLINE 
          [
            Region,# of Customers,# of Products
            Americas,79,822
            Europe,29,714
            Pacific,7,581
            Asia,6,419
            Africa,8,399
            Middle East,1,30
          ](delimiter is ',');`
        )
        .then(() => app.doReload().then(() => app))
    );
  }

  connect().then((app) => {
    // configure nucleus
    nuked = window.stardust.embed(app, {
      context: { theme: 'light' },
      types: [
        {
          name: 'scatter',
          load: () => Promise.resolve(window['sn-scatter-plot']),
        },
      ],
    });
    nuked.selections().then((s) => s.mount(document.querySelector('.toolbar')));

    nuked.render({
      element: document.getElementById('object'),
      type: 'scatter',
      plugins: pluginSet, // eslint-disable-line no-undef
      fields: ['Region', '=Sum([# of Customers])', '=Sum([# of Products])', '=Sum([# of Customers])'],
    });
  });
}

run();
