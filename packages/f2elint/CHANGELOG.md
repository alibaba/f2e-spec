# 更新日志

## 2.3.0 (2022-01-06)

- 新增 `@babel/preset-env` 和 `@babel/plugin-proposal-decorators` 依赖
- 升级 `eslint-config-ali` 14.0.0

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
