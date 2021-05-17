const path = require('path');
const os = require('os');
const fs = require('fs-extra');

const sourcePath = [__dirname, 'dist'];
const source = path.resolve(...sourcePath);
const targetPath = [os.homedir(), 'Qlik', 'Sense', 'Extensions', 'sn-scatter-plot'];
if (os.platform() === 'win32') {
  targetPath.splice(1, 0, 'Documents');
}
const target = path.resolve(...targetPath);
const files = ['sn-scatter-plot.js', 'sn-scatter-plot.js.map', 'sn-scatter-plot.qext'];

files.forEach((f) => {
  fs.copySync(path.resolve(source, f), path.resolve(target, f));
});
