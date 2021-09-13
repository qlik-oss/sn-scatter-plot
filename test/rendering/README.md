# Note

There is slight difference between fonts rendered on CircleCI
and on local dev (MacOS).
To avoid this discrepancy, the local rendering tests are run inside Docker
with the same images used in CircleCI.

Here is how you do it:

- Step 1: turn off Sense Client containers in Docker, if they are on

  (Since the qlikcore/engine container we use for rendering tests also uses
  port 9076 like Sense Client engine container.)

- Step 2: run `yarn test:rendering` as usual

  (This will spin up the Docker containers for rendering tests, run the test,
  and mount the artifact folder of the host to the test runner container)

When you run the Docker rendering tests for the first time, it can take time
to download and install all the neccessary images. But from the second time,
thanks to Docker caching, only the build and the tests are run, which take
between 1-2 minutes.

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
