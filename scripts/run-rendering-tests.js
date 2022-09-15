const { execSync } = require('child_process');

const cmd = process.env.CI
  ? 'playwright test --config=./test/rendering/playwright.config.rendering.js'
  : 'docker-compose up --build --remove-orphans --abort-on-container-exit';
console.log('Env dependent cmd: ');
console.log(cmd);
execSync(cmd, { stdio: 'inherit' });
