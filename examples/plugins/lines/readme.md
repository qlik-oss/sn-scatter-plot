# Use the default `Executive_Dashboard.qvf` app

Copy the `Executive_Dashboard.qvf` app from the repo's `data/apps` to your local apps folder (`Qlik/Sense/Apps`).
You can also:

# Modify the code for your own app

1. Change the name of the app in `index.js` from `Executive_Dashboard.qvf` to your app name
2. Replace the `propertiesObject` in `index.js` with your chart's properties (right click on your chart in Sense client --> properties)
3. Commenting out the `visualization: sn-scatter-plot` or `visualization: scatterplot` line in the `propertiesObject`. It is near the end of the `propertiesObject`.

# Run

Simple copy path of the `index.html` file and paste it to your browser.
