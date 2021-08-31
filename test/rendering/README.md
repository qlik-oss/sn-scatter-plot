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
  and copy the newly generated artifacts images from Docker to the host
  artifacts folder.)
