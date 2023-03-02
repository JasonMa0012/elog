import externals from 'rollup-plugin-node-externals'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import alias from '@rollup/plugin-alias'
import * as path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

// const pkg = require('./package.json')
import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: path.dirname(pkg.main),
      format: 'cjs',
      name: pkg.name,
    },
    plugins: [
      typescript(),
      json(),
      commonjs(),
      resolve({
        preferBuiltins: true,
      }),
      alias(),
      externals({
        devDeps: false, // devDependencies 类型的依赖就不用加到 externals 了。
      }),
    ],
  },
  // {
  //   input: 'src/index.ts',
  //   output: {
  //     dir: path.dirname(pkg.module),
  //     format: 'es',
  //     name: pkg.name,
  //     exports: 'named', // 指定导出模式（自动、默认、命名、无）
  //     preserveModules: true, // 保留模块结构
  //     preserveModulesRoot: 'src', // 将保留的模块放在根级别的此路径下
  //   },
  //   plugins: [
  //     json(),
  //     esbuild({
  //       loaders: {
  //         '.json': 'json',
  //       },
  //     }),
  //     resolve({
  //       preferBuiltins: true,
  //     }),
  //     alias(),
  //     commonjs(),
  //     externals({
  //       devDeps: false, // devDependencies 类型的依赖就不用加到 externals 了。
  //     }),
  //   ],
  // },
]
