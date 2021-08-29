# Note

There is slight difference between fonts rendered on CircleCI and on local dev.
A temporary workaround is to separate the artifacts
for local and for CircleCI rendering tests.

## Suggesting work flow when you create a new rendering tests

- Run `yarn test:rendering` locally
- Update the newly generated baseline images into `artifacts`
- Push your commit
- Download the newly generated baseline images on CircleCI to
  the local `artifacts-CI` folder.

  See instructions at:
  https://circleci.com/docs/2.0/artifacts/#downloading-all-artifacts-for-a-build-on-circleci

  Or simply go to the Artifacts tab of the CircleCI build page and save the images

- Now your rendering tests should be green on both local dev and CircleCI.
