const { execSync } = require('child_process');

const cmd = process.env.CI
  ? 'aw puppet --glob "test/**/*.spec.js"  --mocha.bail false --mocha.timeout 10000  --chrome.browserWSEndpoint "ws://localhost:3000" --no-launch'
  : 'docker-compose up --build --remove-orphans --abort-on-container-exit';
console.log('Env dependent cmd: ');
console.log(cmd);
execSync(cmd, { stdio: 'inherit' });
