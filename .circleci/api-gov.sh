docker cp $1 specs:/specs
docker run --volumes-from specs \
-e target=Colony \
-e runMode=failBuild \
-e apiId=$3 \
-e specPath=$2 \
-e commit="$CIRCLE_SHA1" ghcr.io/qlik-trial/asmquery:latest