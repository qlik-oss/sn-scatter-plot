/* eslint-disable no-console */
const path = require('path');
const os = require('os');
const fs = require('fs-extra');

function copyExt() {
  const targetPath = [os.homedir(), 'Qlik', 'Sense', 'Extensions', 'sn-scatter-plot'];
  if (os.platform() === 'win32') {
    targetPath.splice(1, 0, 'Documents');
  }
  const target = path.resolve(...targetPath);
  const files = ['sn-scatter-plot.js', 'sn-scatter-plot.qext', 'dist'];

  files.forEach((f) => {
    fs.copySync(path.resolve(process.cwd(), f), path.resolve(target, f));
  });
  console.log('Copied into Extensions folder!');
}

if (require.main === module) {
  // execute if running directly from CLI
  copyExt();
}

module.exports = copyExt;
