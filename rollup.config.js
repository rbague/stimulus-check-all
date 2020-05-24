export default {
  input: 'src/index.js',
  output: {
    name: 'StimulusCheckAll',
    file: 'dist/stimulus-check-all.umd.js',
    format: 'umd',
    globals: {
      stimulus: 'Stimulus'
    }
  }
}
