#! /usr/bin/env node
/* eslint-disable no-console */

const cp = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const copyExt = require('./copy-ext');

const args = process.argv.slice(2);
const buildExt = args.indexOf('--ext') !== -1;
const buildCore = args.indexOf('--core') !== -1;
const mode = args[args.indexOf('--mode')] || 'production';
const watch = args[args.indexOf('-w')];

// cleanup old build
fs.removeSync(path.resolve(process.cwd(), 'dist'));
fs.removeSync(path.resolve(process.cwd(), 'core/esm'));

function exec(cmd, stdio = 'inherit') {
  try {
    cp.execSync(cmd, {
      stdio,
    });
  } catch (e) {
    console.log(e);
  }
}

let BUILD_SN_CMD = 'npx nebula build';
if (buildCore) {
  BUILD_SN_CMD += ' --core core';
}

if (mode === 'production') {
  BUILD_SN_CMD += ' --mode production --sourcemap false';
}

if (watch) {
  // NOTE: building as extension and copy into extensions while watching is not supported with current build setup!
  BUILD_SN_CMD += ' -w';
}

console.log('---> BUILDING SUPERNOVA');
exec(BUILD_SN_CMD);

if (buildExt) {
  const BUILD_EXT_CMD = 'nebula sense --partial';
  console.log('---> BUILDING EXTENSION');
  exec(BUILD_EXT_CMD);
  console.log('---> COPYING EXTENSION');
  copyExt();
}
