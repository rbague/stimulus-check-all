import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const common = {
  input: 'src/index.js',
  context: 'window',
  external: ['stimulus'],
  plugins: [
    resolve({ resolveOnly: ['@github/check-all'] })
  ]
}
const umd = {
  name: 'StimulusCheckAll',
  format: 'umd',
  globals: { stimulus: 'Stimulus' }
}

export default [
  {
    ...common,
    output: [
      {
        ...umd,
        file: 'dist/stimulus-check-all.umd.js'
      },
      {
        ...umd,
        file: 'dist/stimulus-check-all.umd.min.js',
        sourcemap: true,
        plugins: [terser()]
      }
    ]
  },
  {
    ...common,
    external: common.external.concat(['@github/check-all']),
    output: {
      file: 'dist/stimulus-check-all.js',
      format: 'esm',
      globals: {
        stimulus: 'Stimulus',
        '@github/check-all': 'checkAll'
      }
    }
  }
]
