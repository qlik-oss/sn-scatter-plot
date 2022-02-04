# Howto

- Step 1: Take a snapshot and grab the large engine call underneath getBookmark starting with qProp
- Step 2: Create a new .fix.js file under _fixtures_. The file should include the following:
  getLayout: {},
  getHyperCubeBinnedData: [],  
   getEffectiveProperties: {},

- Step 3: Now some copy P copy S is needed since the different parts of the engine call needs to be inserted into the different API calls above.

The Layout qInfo should go into getLayout without the dataPages. The Data (qMatrix) from dataPages should be inserted into getHyperCubeBinnedData. If it is binned data then the call should be getHyperCubeBinnedData otherwise it should be getHyperCubeData. getEffectiveProperties can be left empty.

- Step 4: qType might need to be change to 'sn-scatter-plot' instead of 'scatterplot' in getLayout

# Tests

-scatter_render_1:
Two measures,
Dimension limit,
Number formatting

-scatter_render_2:
Two measures,
Null value removed,
No Labels & Titles on axis

-scatter_render_3:
Three measures,
Reference lines on X and Y axis,
Grid line spacing narrow

-scatter_render_4:
Three measures,
X-Axis on left,
Y-axis at top,
Reference lines on X and Y axis,
Grid line spacing none

-scatter_render_5:
Three measures,
X-Axis scale wide,
Y-axis scale wide,
Include zero value to off,
Bubble size increased,
Single color,
All labels

-scatter_render_6:
Three measures,
X-Axis scale narrow,
Y-axis scale narrow,
Bubble size increased,
Color by "dimension 1",
All labels to none,
Legend title removed

-scatter_render_7:
Three measures,
X-Axis scale narrow,
Y-axis scale narrow,
Bubble size increased,
Color by measure,
Legend to left

-scatter_render_8:
Three measures,
Color by Expression

-scatter_render_binned_1:
binned data

-scatter_render_binned_2:
Navigation on,
X-Axis on left,
Y-axis at top,
Reference lines,
Compressed resolution

-scatter_render_binned_snapshot_1:
Navigation on,
X-Axis on left,
Y-axis at top,
Reference lines,
Zoomed in to binned data

-scatter_render_snapshot_1:
Color by dimenision,
Zoomed in,
OoB balls at edges