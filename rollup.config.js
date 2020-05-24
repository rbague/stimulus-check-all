import babel from "@rollup/plugin-babel"

export default {
  input: 'src/index.js',
  output: {
    name: 'StimulusCheckAll',
    file: 'dist/stimulus-check-all.umd.js',
    format: 'umd',
    sourcemap: true,
    globals: {
      stimulus: 'Stimulus',
      '@github/check-all': 'checkAll'
    }
  },
  external: ['stimulus', '@github/check-all'],
  plugins: [babel({ babelHelpers: 'bundled' })]
}
