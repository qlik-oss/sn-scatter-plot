const { execSync } = require('child_process');

const cmd = process.env.CI
  ? 'aw puppet --glob "test/**/*.spec.js"  --mocha.bail false --mocha.timeout 10000'
  : 'docker-compose up --build --remove-orphans --exit-code-from rendering-test-runner';
console.log('Env dependent cmd: ');
console.log(cmd);
execSync(cmd, { stdio: 'inherit' });