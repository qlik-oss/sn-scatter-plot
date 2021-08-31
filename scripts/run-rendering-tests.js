const { execSync } = require('child_process');

const cmd = process.env.CI
  ? 'aw puppet --glob "test/**/*.spec.js"  --mocha.bail false --mocha.timeout 10000'
  : 'docker-compose up --build';
execSync(cmd, { stdio: 'inherit' });
