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
