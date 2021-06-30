#! /usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs-extra');
const path = require('path');
const build = require('@nebula.js/cli-build');
const sense = require('@nebula.js/cli-sense');
const copyExt = require('./copy-ext');

const args = process.argv.slice(2);
const buildExt = args.indexOf('--ext') !== -1;
const buildCore = args.indexOf('--core') !== -1;
const mode = args[args.indexOf('--mode')] || 'production';
const watch = args[args.indexOf('-w')];

// cleanup old build
fs.removeSync(path.resolve(process.cwd(), 'dist'));
fs.removeSync(path.resolve(process.cwd(), 'core/esm'));

const buildArgs = {};
if (buildCore) {
  buildArgs.core = 'core';
}

if (mode === 'production') {
  buildArgs.mode = 'production';
  buildArgs.sourcemap = false;
}

if (watch) {
  // NOTE: building as extension and copy into extensions while watching is not supported with current build setup!
  buildArgs.watch = true;
}

console.log('---> BUILDING SUPERNOVA');
build(buildArgs).then(() => {
  if (buildExt) {
    console.log('---> BUILDING EXTENSION');
    sense({ partial: true }).then(() => {
      console.log('---> COPYING EXTENSION');
      copyExt();
    });
  }
});
