import path from 'path';
import fs from 'fs';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import visualizer from 'rollup-plugin-visualizer';
import sourcemaps from 'rollup-plugin-sourcemaps';
import command from 'rollup-plugin-command';
import jsxPlugin from '@babel/plugin-transform-react-jsx';
import crypto from 'crypto';

const { name, version } = require(path.resolve(__dirname, './package.json')); // eslint-disable-line

const versionHash = crypto
  .createHash('md5')
  .update(`${name}@${version}`) // TODO - consider using the commit sha since all charts from the same commit could have the same style
  .digest('hex')
  .slice(0, 4);

try {
  const qextInputPath = path.resolve(__dirname, './assets/sn-scatter-plot.qext');
  const qextOutputPath = path.resolve(__dirname, './dist/sn-scatter-plot.qext');
  const qext = fs.readFileSync(qextInputPath, 'utf8').replace('process.env.PACKAGE_VERSION', version);
  fs.mkdirSync('./dist', { recursive: true });
  fs.writeFileSync(qextOutputPath, qext);
} catch (err) {
  throw Error(`error while updating version in qext file: ${err}`);
}

export default {
  input: './src/index.js',
  output: {
    file: path.resolve(__dirname, 'dist', 'sn-scatter-plot.js'),
    name: 'sn-scatter-plot',
    format: 'umd',
    exports: 'default',
    sourcemap: true,
    globals: {
      '@nebula.js/stardust': 'stardust',
      'picasso.js': 'picassojs',
      'picasso-plugin-q': 'picassoQ',
      'picasso-plugin-hammer': 'picassojs',
      hammerjs: 'Hammer',
    },
  },
  external: ['@nebula.js/stardust'],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    replace({
      'process.env.VERSION_HASH': JSON.stringify(versionHash),
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.PACKAGE_VERSION': JSON.stringify(version),
    }),
    babel({
      babelrc: false,
      include: ['src/**'],
      babelHelpers: 'bundled',
      presets: [
        [
          '@babel/env',
          {
            modules: false,
            targets: {
              browsers: ['last 2 Chrome versions'],
            },
          },
        ],
        ['@babel/react'],
      ],
      plugins: [[jsxPlugin]],
    }),
    json(),
    commonjs(),
    visualizer(),
    sourcemaps(),
    command(`node copy-ext.js`),
  ],
};
