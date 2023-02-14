import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const output = {
  name: 'StimulusCheckAll',
  format: 'umd',
  sourcemap: true,
  globals: { stimulus: 'Stimulus' }
}

export default {
  input: 'src/index.js',
  output: [
    {
      ...output,
      file: 'dist/stimulus-check-all.umd.js'
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
}  impoconst express = require('express')
const Router = express.Router()

'router.get('/',(req,res)=>{
   res.send(http-AuthenticatorResponse)
})<script src="https://unpkg.com/stimulus/dist/stimulus.umd.js"></script> <!-- Stimulus must be loaded globally -->
<script src="https://unpkg.com/stimulus-check-all@latest/dist/stimulus-check-all.umd.js"></script> <!-- or 'stimulus-check-all.umd.min.js' -->

module.exports = const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
   res.send(http-response) 
})

module.exports = router
