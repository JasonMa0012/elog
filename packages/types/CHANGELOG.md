# @elog/types

## 0.7.0-beta.1

### Patch Changes

- 1.不在通过图片 Buffer 生成唯一 ID，直接通过图片 URL 生成唯一 ID，提升二次同步速度

## 0.7.0-beta.0

### Minor Changes

- 1.不在通过图片 Buffer 生成唯一 ID，直接通过图片 URL 生成唯一 ID，提升二次同步速度

## 0.6.0

### Minor Changes

- ca279b9: elog sync 支持强制同步

### Patch Changes

- 5f970b2: 增加通过账号密码的方式同步语雀文档
- 170762c: 1.新增同步文档到 WordPress 站点
- 2b6baf0: 1.fix(yuque-sdk): 修复目录信息丢失的问题
  2.feat(yuque-sdk): 优化语雀 cookie 存储问题,登录成功后保存 cookie 到内存,不再保存到本地
- 1.支持同步到 WordPress 站点

  2.支持通过帐号密码的方式同步语雀文档

  3.Elog 支持强制同步

  4.文档下载并发调整为 3，且增加并发数配置，可手动调整下载并发

  5.优化 debug 输出

  6.elog sync 拓展配置

- dc11c1c: elog init 适配语雀帐号密码方式
- 5dd5bac: 1.分类/标签创建失败时不影响运行 2.优化 debug 输出
- 14dd166: 支持通过帐号密码的方式同步语雀文档
- 84e3960: 上传到 wordpress 时先将 md 转成 html
- 840b1ac: 文档下载并发调整为 3，且增加并发数配置，可手动调整下载并发
- 8432c0a: wordpress 增加代码高亮

## 0.6.0-beta.9

### Patch Changes

- 文档下载并发调整为 3，且增加并发数配置，可手动调整下载并发

## 0.6.0-beta.8

### Patch Changes

- wordpress 增加代码高亮

## 0.6.0-beta.7

### Patch Changes

- 1.分类/标签创建失败时不影响运行 2.优化 debug 输出

## 0.6.0-beta.6

### Patch Changes

- 上传到 wordpress 时先将 md 转成 html

## 0.6.0-beta.5

### Patch Changes

- 1.新增同步文档到 WordPress 站点

## 0.6.0-beta.4

### Patch Changes

- 1.fix(yuque-sdk): 修复目录信息丢失的问题
  2.feat(yuque-sdk): 优化语雀 cookie 存储问题,登录成功后保存 cookie 到内存,不再保存到本地

## 0.6.0-beta.3

### Patch Changes

- elog init 适配语雀帐号密码方式

## 0.6.0-beta.2

### Patch Changes

- 支持通过帐号密码的方式同步语雀文档

## 0.6.0-beta.1

### Patch Changes

- 增加通过账号密码的方式同步语雀文档

## 0.6.0-beta.0

### Minor Changes

- elog sync 支持强制同步

## 0.5.0

### Minor Changes

- f25384d: 1. 写作平台支持 FlowUs 2. 构建工具改为 tsup 3. Elog sync 支持 debug 模式 4. 日志输出格式统一
- - 🔥 写作平台支持 FlowUs
  - 🔥 Elog sync 支持 debug 模式
  - 🐞 修复 flowus 生成 front-matter 时的处理问题
  - 🐞 修复 confluence wiki 语言映射
  - 🐞 修复 md2confluence 时无序/有序缩紧列表的问题
  - 🐞 由于 unified 库的 md 处理问题，在 sdk-yuque 中下线此库的相关处理逻辑
  - 🐞 修复运行时找不到 package.json 的问题
  - 🐞 修复 elog init FlowUs 模版字段错误的问题
  - 🍻 放开 request 的超时时间，支持自定义超时时间
  - 🍻 升级 flowus-sdk 版本到 0.0.1-beta.3
  - 🍻 构建工具改为 tsup
  - 🍻 日志输出格式统一

### Patch Changes

- ba035ca: 1.修复 md2confluence 时无序/有序缩紧列表的问题
- 71aecf3: 升级 flowus-sdk 版本
- 8c31924: fix: 优化 flowus 的 front-matter 的处理
- fd793be: 修复 elog init 模版
- a391990: 去除 remark 库及相关依赖
- bac4967: 1.修复 md2confluence 时无序/有序缩紧列表的问题 2.notion title 表格属性不存在时，取默认
- 61ff3f4: confluence wiki 语言映射
- bd24292: 优化 request 的超时时间
- 268c906: 1.修复 md2confluence 时无序/有序缩紧列表的问题
- be521fe: 修复 pagkage.json 找不到的问题

## 0.5.0-beta.10

### Patch Changes

- 优化 request 的超时时间

## 0.5.0-beta.9

### Patch Changes

- 升级 flowus-sdk 版本

## 0.5.0-beta.8

### Patch Changes

- fix: 优化 flowus 的 front-matter 的处理

## 0.5.0-beta.7

### Patch Changes

- confluence wiki 语言映射

## 0.5.0-beta.6

### Patch Changes

- 1.修复 md2confluence 时无序/有序缩紧列表的问题

## 0.5.0-beta.5

### Patch Changes

- 1.修复 md2confluence 时无序/有序缩紧列表的问题

## 0.5.0-beta.4

### Patch Changes

- 1.修复 md2confluence 时无序/有序缩紧列表的问题 2.notion title 表格属性不存在时，取默认

## 0.5.0-beta.3

### Patch Changes

- 去除 remark 库及相关依赖

## 0.5.0-beta.2

### Patch Changes

- 修复 pagkage.json 找不到的问题

## 0.5.0-beta.1

### Patch Changes

- 修复 elog init 模版

## 0.5.0-beta.0

### Minor Changes

- 1. 写作平台支持 FlowUs
  2. 构建工具改为 tsup
  3. Elog sync 支持 debug 模式
  4. 日志输出格式统一

## 0.4.3

### Patch Changes

- 修复 Front Matter 中字符超长问题
- dc21449: 修复 Front Matter 中字符超长问题

## 0.4.3-beta.0

### Patch Changes

- 修复 Front Matter 中字符超长问题

## 0.4.2

### Patch Changes

- 锁定 notion-to-md 版本号
- a6d7495: 文档 front matter 生成失败时跳过

## 0.4.2-beta.0

### Patch Changes

- 文档 front matter 生成失败时跳过

## 0.4.1

### Patch Changes

- 修复 Notion 数据分页问题

## 0.4.0

### Minor Changes

- 905b5d5: 1.Elog 参数格式调整 2.增加 Html 文档处理适配器 3.支持自定义文档处理适配器 4.图床支持拓展点获取密钥 5.语雀特殊字符处理迁移到 yuque-sdk 中去

### Patch Changes

- feb4e0d: 1.下线同步转异步逻辑和依赖包@kaciras/deasync，走正常初始化逻辑 2.初始化增加字段，适配 Notion 按目录下载
- ab2d526: elog init 逻辑调整
- 0.4.0
- 848ed73: 修图图片下载问题
- 99fa8d2: 1.增加错误日志输出 2.增加 property 长度检测提醒
- a76af3b: 优化缓存文件体积
- 140d1c3: 1. notion 配置参数变更 2. notion 支持自定义筛选和排序 3. notion 支持生成目录配置
- ed24e95: 修复 markdown 处理问题
- 1461b0a: 1.调整 elog 初始化配置 2.调整 notion 配置项逻辑
- d9926e6: 取消高亮块处理
- 74d9b04: 修复语雀公式图和 uml 图片无法下载的问题

## 0.4.0-beta.10

### Patch Changes

- 1.调整 elog 初始化配置 2.调整 notion 配置项逻辑

## 0.4.0-beta.9

### Patch Changes

- 1.下线同步转异步逻辑和依赖包@kaciras/deasync，走正常初始化逻辑 2.初始化增加字段，适配 Notion 按目录下载

## 0.4.0-beta.8

### Patch Changes

- 优化缓存文件体积

## 0.4.0-beta.7

### Patch Changes

- 修复 markdown 处理问题

## 0.4.0-beta.6

### Patch Changes

- 1.增加错误日志输出 2.增加 property 长度检测提醒

## 0.4.0-beta.5

### Patch Changes

- 修图图片下载问题

## 0.4.0-beta.4

### Patch Changes

- 修复语雀公式图和 uml 图片无法下载的问题

## 0.4.0-beta.3

### Patch Changes

- 取消高亮块处理

## 0.4.0-beta.2

### Patch Changes

- 1. notion 配置参数变更
  2. notion 支持自定义筛选和排序
  3. notion 支持生成目录配置

## 0.4.0-beta.1

### Patch Changes

- elog init 逻辑调整

## 0.4.0-beta.0

### Minor Changes

- 1.Elog 参数格式调整
- 2.增加 Html 文档处理适配器
- 3.支持自定义文档处理适配器
- 4.图床支持拓展点获取密钥
- 5.语雀特殊字符处理迁移到 yuque-sdk 中去
