import babel from "@rollup/plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import { terser } from "rollup-plugin-terser"

const output = {
  name: 'StimulusCheckAll',
  format: 'umd',
  sourcemap: true,
  globals: { stimulus: 'Stimulus' }
};

export default {
  input: 'src/index.js',
  output: [
    {
      ...output,
      file: 'dist/stimulus-check-all.umd.js',
    },
    {
      ...output,
      file: 'dist/stimulus-check-all.umd.min.js',
      plugins: [terser()]
    }
  ],
  external: ['stimulus'],
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    resolve({ resolveOnly: ['@github/check-all'] }),
    commonjs()
  ]
}
