FROM circleci/node:16.7-browsers

# Install chrome and its dependencies
RUN sudo apt-get update \
    && sudo apt-get install -y wget gnupg \
    && sudo wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add - \
    && sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && sudo apt-get update \
    && sudo apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
      --no-install-recommends \
    && sudo rm -rf /var/lib/apt/lists/*

COPY package.json yarn.lock ./

RUN sudo yarn install --frozen-lockfile

COPY . .

RUN sudo yarn build

CMD ["sh","-c","DocId=$(curl -s --data-binary @data/apps/Executive_Dashboard.qvf http://localhost:9076/v1/apps/import | jq -r '.attributes.id') && APP_ID=$DocId && sudo npx aw puppet --glob 'test/**/*.spec.js'  --mocha.bail false --mocha.timeout 10000"]



