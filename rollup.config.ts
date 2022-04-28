import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import noderesolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    typescript(),
    commonjs(),
    noderesolve()
  ]
}
