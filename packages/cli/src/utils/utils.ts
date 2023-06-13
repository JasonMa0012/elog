import fs from 'fs'
import path from 'path'
import { cacheFileNames, configFileNames } from '../const'
import { out } from '@elog/shared'
import { ElogConfig } from '@elog/core'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

/**
 * 获取配置文件
 * @param customConfigPath
 * @param customCachePath
 */
export const getConfig = (customConfigPath?: string, customCachePath?: string) => {
  const rootPath = process.cwd()
  const configFile =
    customConfigPath || configFileNames.find((name) => fs.existsSync(path.join(rootPath, name)))
  if (!configFile) {
    out.err('错误', '找不到Elog配置文件')
    process.exit(1)
  }
  const cacheFilePath =
    customCachePath ||
    cacheFileNames.find((name) => fs.existsSync(path.join(rootPath, name))) ||
    'elog.cache.json'

  const configFilePath = path.join(rootPath, configFile)

  const config: Partial<ElogConfig> = require(configFilePath)

  return {
    config,
    cacheFilePath,
  }
}
