# 更新日志

## 6.1.0 - 2025-05-13

- feat(lint-staged): 升级 `lint-staged` 15.x 到 16.x

## 6.0.0 - 2025-04-27

- feat(export)!: 改为默认导出

## 5.1.2 - 2025-04-26

- fix(install): 更改了 `npm update` 命令为 `npm install`，使集成更平滑

## 5.1.1 - 2025-04-26

- fix(editorconfig): 排序配置选项
- fix(ignore): 移除 .ci 文件夹
- fix(vscode): 移除其他标尺

## 5.1.0 - 2025-04-26

- feat(template/commitlint): 改用 `@commitlint/config-conventional`

## 5.0.6 - 2025-04-26

- fix(template/base): 新增 `@ali/eslint-config-att` 删除规则

## 5.0.1 - 2025-04-12

- fix(types): 将 `TemplateType` 从 enum 改为 union

## 5.0.0 - 2025-02-22

- **BREAKING CHANGE** feat(eslint): 升级 ESLint 9 改用最新配置文件 eslint.config.mjs

## 4.9.1 - 2024-12-09

- fix(husky): 去除 husky 的 Git 钩子脚本中应该废弃的 `. "$(dirname -- "$0")/_/husky.sh"`

## 4.9.0 - 2024-10-23

- 添加 .ci 到 ignore 文件，支持 O2 系统 CI 配置
- 添加 ci:eslint 运行脚本，支持 O2 系统 CI 配置

## 4.8.0 - 2024-07-27

- 升级 Husky 9

## 4.7.0 - 2024-04-18

- 自动更新依赖版本

## 4.6.0 - 2024-04-07

- Prettier 格式化创建/更新的文件

## 4.5.0 - 2024-04-04

- Monorepo 子应用/子包初始化时跳过 lint-staged 和 commitlint

## 4.4.0 - 2024-04-04

- 支持手动选择 npm/pnpm/yarn/tnpm/cnpm update

## 4.3.1 - 2024-04-04

- 修复 Windows 下项目路径解析失败的问题

## 4.3.0 - 2024-04-03

- 升级 `@commitlint/cli` 18.x 到 19.x
- `lint-staged` 配置增加 `prettier --write` 并为 `eslint` 和 `stylelint` 增加 `--fix` 参数

## 4.2.2 - 2024-04-03

- 修复依赖安装步骤报错

## 4.2.1 - 2024-03-11

- 优化输出

## 4.2.0 - 2024-03-01

- 兼容老的 `f2elint init` 用法

## 4.1.0 - 2024-02-07

- 导出 `TemplateType`

## 4.0.0 - 2024-02-07

升级方法：

```bash
npx f2elint
```

**破坏性变更:**

- 移除了内置的的 lint 命令，直接采用 eslint，style 和 prettier 命令行工具
- Node.js API 仅保留了 init 接口，scan 和 fix 接口被移除

**一般变更:**

- 配置统一放在 package.json，减少配置文件数量
- 升级 `stylelint` 14 到 16
- 升级 `@commitlint/cli` 16 到 18
- 移除 `package.json` 中的 `engines` 字段，不再人为限制 Node.js 版本

## 3.0.0 (2022-03-16)

依赖升级：

- 增加依赖 `eslint-import-resolver-typescript`
- 升级依赖 `eslint` 7 -> 8，参见 [ESLint 变更日志](https://github.com/eslint/eslint/blob/main/CHANGELOG.md)
- 升级依赖 `eslint-config-ali` 13 -> 14
- 升级依赖 `eslint-config-prettier` 7 -> 8
- 升级依赖 `eslint-plugin-prettier` 3 -> 4
- 升级依赖 `stylelint` 13 到 14
- 升级依赖 `stylelint-scss` 3 到 4
- 升级依赖 `@commitlint/cli` 11 -> 16

其他：

- Node.js API 变更：
  - scan 支持 config 参数，优先级高于 f2elint.config.js
  - config 增加 enableESLint 参数，以支持开关 eslint 扫描
  - config 增加 eslintOptions、stylelintOptions 和 markdownlintOptions
- 去掉 `.eslintrc` 中已废弃的 `prettier/react`, `prettier/typescript` 和 `prettier/vue`
- 增加初始化时移除的冲突依赖
  - `@ali/kyle`
  - `@ali/eslint-config-ot-browser`
  - `@iceworks/spec`
  - `husky`
  - `prettier`
  - `tslint`
- 增加初始化时移除的无用配置
  - `.kylerc`
  - `tslint.json`, `tslint.yaml`
- docs: 文档中增加 TS 项目性能问题的解决方法

## 2.2.1 (2022-02-28)

- 修复 prettier 和 eslint 顺序执行问题，避免互相覆盖

## 2.2.0 (2022-01-06)

- 运行 `f2elint-fix` 时提前执行 Prettier 格式化，避免 Prettier 已修复的问题出现在 ESLint/Stylelint 结果中
- 修复 Prettier 命令运行失败的问题（Command failed with ENOENT 被 catch 了没有输出）改用 Node API 模式

## 2.1.0 (2021-12-17)

- 增加 `build-scripts` 产物路径到 `.eslintignore` (`coverage/`, `es/`, `lib/`)

## 2.0.2 (2021-12-15)

- 升级 `eslint-config-egg` 到 10.x

## 2.0.1 (2021-12-07)

- 修复 `commitlint` 硬编码路径的问题

## 2.0.0 (2021-12-01)

- `babel-eslint` 替换为 `@babel/eslint-parser`
- `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser` 升级到 5.x，支持 ESlint 8
- VSCode 的 formatter 配置改为根据语言设置，防止被用户设置覆盖

## 1.2.3 (2021-11-16)

- 修复 scan 不显示 fatal error, close #48

## 1.2.2 (2021-11-10)

- 修复 markdownlint-config-ali 导入错误

## 1.2.1 (2021-09-15)

- 统一项目文件命名规范

## 1.2.0 (2021-03-13)

- feat: init 增加 disableNpmInstall 参数，以支持禁用自动在初始化完成后安装依赖

## 1.1.2 (2021-03-13)

- fix: 修复 init 生成 stylelintignore 和 markdownlintignore 文件的空格问题

## 1.1.1 (2021-02-24)

- 升级 eslint-config-ali 版本至 v12

## 1.1.0 (2021-02-18)

- default exports 改为 named exports，方便在 commonjs 环境下引用
- fix test case

## 1.0.3 (2021-02-04)

### 修复

- `f2elint init` 不再向 package.json 写入 devDependencies.eslint-config-prettier

## 1.0.2 (2021-02-04)

### 修复

- 修复 husky 依赖缺失

## 1.0.0 (2021-02-03)

### 新增

- 增加对 Prettier 的集成，`f2elint init` 时用户可选择使用 Prettier 格式化代码
- 新增 `f2elint commit-file-scan` 和 `f2elint commit-msg-scan` 两个命令供 husky 调用，移除了 lint-staged 依赖

### 优化

- 使用 TypeScript 重构了代码
- 所有依赖升级到最新

## 0.4.4 (2020-12-09)

### 修复

- f2elint：修复找不到 `markdownlint` 的拓展文件（[#3](https://github.com/alibaba/f2e-spec/issues/3)）

## 0.4.3 (2020-12-03)

### 优化

- 修改 `package.json` 和 README

## 0.4.2 (2020-11-24)

### 变更

- init 写入的 prettier 配置增加 `arrowParens: 'always'`

### 文档

- 修改 Readme 中对 commit 卡口的说明

## 0.4.1 (2020-11-19)

### 文档

- Readme 中增加文档规约

## 0.4.0 (2020-11-19)

### 新增

- 增加对文档规约的 lint 支持：
  - init 新增 markdownlint 选项
  - scan 和 fix 增加对 `.md` 文件的扫描
- init 新增「Node.js 项目」的选项

## 0.3.0 (2020-11-05)

### 新增

- init 增加 rax 选项
- init 增加对 `.vscode/extensions.json` 的写入
- scan 和 fix command 支持 --no-ignore 选项，忽略 .eslintignore 配置
- apiInit 支持 cwd 选项

### 变更

- init 写入的 `.vscode/settings.json` 中增加保存自动格式化的配置，并增加 prettier 作为 defaultFormatter
- scan 根据项目内有无 eslint 和 stylelint 配置文件判断使用项目的配置文件还是 f2elint 默认配置进行扫描。若使用项目的，在未安装依赖时会帮其安装（执行 npm i）。若使用项目配置扫描失败，则使用默认配置扫描

## 0.1.5 (2020-10-23)

### 修复

- 0.1.x 版本的 @typescript-eslint 依赖回退到 3.x

## 0.2.0 (2020-10-22)

### 变更

- 升级依赖：eslint-config-ali 版本 v10 升到 v11

## 0.1.4 (2020-10-13)

### 修复

- fix 命令去掉 quiet 参数

## 0.1.3 (2020-10-13)

### 新增

- 支持在任意项目运行 fix 命令
- scan 命令输出可 auto fix 的条数

### 修复

- 兼容在 `package.json` 配置 eslintConfig 和 stylelint 的非 f2elint 项目运行 scan 和 fix 命令

## 0.1.2 (2020-10-10)

### 修复

- scan 和 fix 命令增加对 .vue 文件处理

## 0.1.1 (2020-09-25)

### 修复

- 修复 devDependencies 中的 f2elint 版本

## 0.1.0 (2020-09-25)

### 新增

- 从 [xima](https://www.npmjs.com/package/xima) v0.3.0 版本迁移
