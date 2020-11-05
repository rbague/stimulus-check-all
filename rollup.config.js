import babel from '@rollup/plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/stimulus-check-all.js',
    format: 'cjs',
    sourcemap: true,
    globals: {
      stimulus: 'Stimulus',
      '@github/check-all': 'checkAll'
    }
  },
  external: ['stimulus', '@github/check-all'],
  plugins: [babel({ babelHelpers: 'bundled' })]
}
