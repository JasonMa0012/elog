import externals from 'rollup-plugin-node-externals'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import alias from '@rollup/plugin-alias'
// import esbuild from 'rollup-plugin-esbuild'
import pkg from './package.json'
import path from 'path'
import resolve from '@rollup/plugin-node-resolve'

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: path.dirname(pkg.main),
      format: 'cjs',
      name: pkg.name,
      exports: 'named', // 指定导出模式（自动、默认、命名、无）
      preserveModules: true, // 保留模块结构
      preserveModulesRoot: 'src', // 将保留的模块放在根级别的此路径下
    },
    plugins: [
      resolve({
        preferBuiltins: true,
      }),
      alias(),
      json(),
      typescript({
        outDir: 'dist/cjs',
        declaration: true,
        declarationDir: 'dist/cjs',
      }),
      externals({
        devDeps: false, // devDependencies 类型的依赖就不用加到 externals 了。
      }),
      commonjs(),
      // esbuild(),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      dir: path.dirname(pkg.module),
      format: 'es',
      name: pkg.name,
      exports: 'named', // 指定导出模式（自动、默认、命名、无）
      preserveModules: true, // 保留模块结构
      preserveModulesRoot: 'src', // 将保留的模块放在根级别的此路径下
    },
    plugins: [
      resolve({
        preferBuiltins: true,
      }),
      alias(),
      json(),
      typescript({
        outDir: 'dist/esm',
        declaration: true,
        declarationDir: 'dist/esm',
      }),
      externals({
        devDeps: false, // devDependencies 类型的依赖就不用加到 externals 了。
      }),
      commonjs(),
      // esbuild(),
    ],
  },
]
