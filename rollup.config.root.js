import externals from 'rollup-plugin-node-externals'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import alias from '@rollup/plugin-alias'
import * as path from 'path'
import typescript from 'rollup-plugin-typescript2'
const pkg = require('./package.json')
import babel from '@rollup/plugin-babel'

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: path.dirname(pkg.main),
      format: 'cjs',
      exports: 'named', // 指定导出模式（自动、默认、命名、无）
      preserveModules: true, // 保留模块结构
      preserveModulesRoot: 'src', // 将保留的模块放在根级别的此路径下
    },
  ],
  plugins: [
    babel({
      babelrc: false,
      babelHelpers: 'bundled',
      presets: [['@babel/preset-env', { modules: false }]],
    }),
    commonjs(),
    typescript(),
    json(),
    alias(),
    externals({
      devDeps: false,
    }),
  ],
}
