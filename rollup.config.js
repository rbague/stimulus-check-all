import babel from "@rollup/plugin-babel"
import { terser } from "rollup-plugin-terser"

const output = {
  name: 'StimulusCheckAll',
  format: 'umd',
  sourcemap: true,
  globals: {
    stimulus: 'Stimulus',
    '@github/check-all': 'checkAll'
  }
};

export default {
  input: 'src/index.js',
  output: [
    {
      ...output,
      file: 'dist/stimulus-check-all.js',
    },
    {
      ...output,
      file: 'dist/stimulus-check-all.min.js',
      plugins: [terser()]
    }
  ],
  external: ['stimulus', '@github/check-all'],
  plugins: [babel({ babelHelpers: 'bundled' })]
}
