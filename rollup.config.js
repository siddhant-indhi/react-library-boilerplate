import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Automatically marks peer dependencies as external
    babel({
      exclude: 'node_modules/**', // Exclude transpiling from node_modules
      babelHelpers: 'bundled', // To avoid errors related to Babel helpers
      presets: ['@babel/preset-react', '@babel/preset-env'], // Transpile JSX and modern JS
    }),
    resolve(),
    commonjs(), // Now commonjs will correctly process the transpiled JSX
    postcss(),
    terser(),
  ],
  external: ['react', 'react-dom'], // Peer dependencies
};
