docker cp $1 specs:/specs

apiId=$3; specPath=$2; versionPath=$4

# Get the latest version
VER=v$(cat ${versionPath} | jq -r '.version')

docker run --volumes-from specs \
-e SPEC_PATHS="$3@/$2" \
-e COMMIT_SHA="$CIRCLE_SHA1" \
-e RELEASE_TAG="$VER" \
-e CREDENTIALS_S3_SECRETKEY="$APICULTURIST_S3" \
-e CREDENTIALS_GITHUB="$APICULTURIST_GITHUB" \
-e CREDENTIALS_COLONY="$APICULTURIST_TOKEN" \
ghcr.io/qlik-download/api-compliance