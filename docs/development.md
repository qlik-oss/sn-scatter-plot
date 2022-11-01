## Releasing

1. Delete dependencies

   `find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +`

2. `yarn`
3. `yarn version --minor`

   Note that we should use --minor for bug fixes, --patch is only for patches.

4. `git push origin && git push origin --tags`

## Patching

1. Create a release branch if it does not exist yet. For example, if you want to
   patch v3.20.0, you will create a release branch named `release/3.20.x`
2. Cherry picking the changes from your fix and merge into the release branch
3. Release a patch version, as described in the Releasing section above.
