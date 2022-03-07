# eslint-config-ali

本包是[《阿里巴巴前端规约》](https://github.com/alibaba/f2e-spec)配套的 [ESLint 可共享配置](http://eslint.org/docs/developer-guide/shareable-configs.html)，提供了多套配置文件以支持 JavaScript、TypeScript、React、Vue、Node.js 等多种项目类型。

## 使用

推荐使用《阿里巴巴前端规约》配套的 CLI 工具 [f2elint](https://www.npmjs.com/package/f2elint) 接入本包。如果想自己手动接入，可以在下方查找自己项目类型所需的安装的依赖和 [ESLint 配置](https://eslint.org/docs/user-guide/configuring)：

### JavaScript 项目 - eslint-config-ali

针对未使用 React 或 Vue 的原生 JavaScript 项目，使用 ESLint 原生规则和 [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) 规则，使用 [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) 作为 parser，是本包的默认配置。

#### 依赖

- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.16.0
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.16.3
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1

#### 安装

```
npm i -D eslint-config-ali @babel/core @babel/eslint-parser eslint-plugin-import
```

#### 配置

```json
{
  "extends": ["eslint-config-ali"]
}
```

### JavaScript + React 项目 - eslint-config-ali/react

针对 JS React 项目，继承了默认配置，并启用了 [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) 和 [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) 的规则。

#### 依赖

- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.16.0
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.16.3
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)@^7.17.0
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)@^4.0.4
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)@^6.3.1（可选）

#### 安装

```
npm i -D eslint-config-ali @babel/core @babel/eslint-parser eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
```

#### 配置

```json
{
  "extends": ["eslint-config-ali/react"]
}
```

如果需要无障碍能力：

```
npm i -D eslint-plugin-jsx-a11y
```

```json
{
  "extends": ["eslint-config-ali/react", "eslint-config-ali/jsx-a11y"]
}
```

### JavaScript + Rax 项目 - eslint-config-ali/rax

针对 JS [Rax](https://rax.js.org/) 项目，Rax 和 React 语法相近，因此同样继承了默认配置，启用了 [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) 和 [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) 的规则，并通过 [eslint-plugin-jsx-plus](https://www.npmjs.com/package/eslint-plugin-jsx-plus) 校验 JSX+ 语法。

#### 依赖

- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.16.0
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.16.3
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)@^7.17.0
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)@^4.0.4
- [eslint-plugin-jsx-plus](https://www.npmjs.com/package/eslint-plugin-jsx-plus)@^0.1.0

#### 安装

```
npm i -D eslint-config-ali @babel/core @babel/eslint-parser eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-plus
```

#### 配置

```json
{
  "extends": ["eslint-config-ali/rax"]
}
```

### JavaScript + Vue 项目 - eslint-config-ali/vue

针对 JS Vue 的项目，继承了默认配置，并启用了 [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue) 插件的规则，使用 [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser) 作为 parser。

#### 依赖

- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.16.0
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.16.3
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1
- [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser)@^7.0.0
- [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)@^7.3.0

#### 安装

```
npm i -D eslint-config-ali @babel/core @babel/eslint-parser eslint-plugin-import vue-eslint-parser eslint-plugin-vue
```

#### 配置

```json
{
  "extends": ["eslint-config-ali/vue"]
}
```

### JavaScript (Node.js) + Egg 项目 - eslint-config-ali/node

针对 Node.js 项目，继承了默认配置和 [egg-config-egg 的 node 规则](https://github.com/eggjs/eslint-config-egg/blob/master/lib/rules/node.js)，规则由 ESLint 原生规则和 [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) 提供。

#### 依赖

- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.16.0
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.16.3
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1
- [eslint-config-egg](https://www.npmjs.com/package/eslint-config-egg)@^10.0.0

#### 安装

```
npm i -D eslint-config-ali @babel/core @babel/eslint-parser eslint-plugin-import eslint-config-egg
```

#### 配置

```json
{
  "extends": ["eslint-config-ali/node"]
}
```

### TypeScript 项目 - eslint-config-ali/typescript

针对未使用 React 或 Vue 的 TypeScript 项目，继承了默认配置，并启用了 [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) 插件的规则，使用 [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) 作为 parser。

#### 依赖

- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)@^5.0.0
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)@^5.0.0
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)@2

#### 安装

```
npm i -D eslint-config-ali @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript
```

#### 配置

```json
{
  "extends": ["eslint-config-ali/typescript"]
}
```

需保证项目已安装 `typescript` 依赖，另外如果项目的 TS 配置文件不是 `./tsconfig.json`，则需要设置 `.eslintrc` 中的 [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) 字段 ，例如：

```json
{
  "extends": "eslint-config-ali/typescript",
  "parserOptions": {
    "project": "./tsconfig.eslint.json"
  }
}
```

### TypeScript + React 项目 - eslint-config-ali/typescript/react

针对 TS React 项目，继承了 JS React 的配置，并启用了 [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) 插件的规则，使用 [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) 作为 parser。

#### 依赖

- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)@^5.0.0
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)@^5.0.0
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)@2
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)@^7.17.0
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)@^4.0.4
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)@^6.3.1（可选）

#### 安装

```
npm i -D eslint-config-ali @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-react eslint-plugin-react-hooks
```

#### 配置

```json
{
  "extends": ["eslint-config-ali/typescript/react"]
}
```

如果需要无障碍能力：

```
npm i -D  eslint-plugin-jsx-a11y
```

```json
{
  "extends": [
    "eslint-config-ali/typescript/react",
    "eslint-config-ali/jsx-a11y"
  ]
}
```

### TypeScript + Rax 项目 - eslint-config-ali/typescript/rax

针对 TS [Rax](https://rax.js.org/) 项目，继承了 JS Rax 的配置，并启用了 [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) 插件的规则，使用 [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) 作为 parser。

#### 依赖

- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)@^5.0.0
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)@^5.0.0
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)@2
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)@^7.17.0
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)@^4.0.4
- [eslint-plugin-jsx-plus](https://www.npmjs.com/package/eslint-plugin-jsx-plus)@^0.1.0

#### 安装

```
npm i -D eslint-config-ali @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-plus
```

#### 配置

```json
{
  "extends": ["eslint-config-ali/typescript/rax"]
}
```

### TypeScript + Vue 项目 - eslint-config-ali/typescript/vue

针对 TS Vue 项目，继承了 JS Vue 的配置，并启用了 [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) 插件的规则，使用 [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) 作为 parser。

#### 依赖

- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)@^5.0.0
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)@^5.0.0
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)@2
- [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser)@^7.0.0
- [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)@^7.3.0

#### 安装

```
npm i -D eslint-config-ali @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript vue-eslint-parser eslint-plugin-vue
```

#### 配置

```json
{
  "extends": ["eslint-config-ali/typescript/vue"]
}
```

### TypeScript (Node.js) + Egg 项目 - eslint-config-ali/typescript/node

针对未使用 React 和 Vue 的 TypeScript(Node) 项目，继承了 JS Node.js 配置，并启用了 [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) 插件的规则，使用 [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) 作为 parser。

#### 依赖

- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)@^5.0.0
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)@^5.0.0
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)@2
- [eslint-config-egg](https://www.npmjs.com/package/eslint-config-egg)@^10.0.0

#### 安装

```
npm i -D eslint-config-ali @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-config-egg
```

#### 配置

```json
{
  "extends": ["eslint-config-ali/typescript/node"]
}
```

### 配合 Prettier 使用

如果你的项目使用 [Prettier](https://prettier.io/) 进行代码格式化，本包的一些规则可能会跟 Prettier 格式化结果有冲突，[例如这条规则](https://github.com/typescript-eslint/typescript-eslint/issues/372)。为了避免冲突，你需要手动安装 [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) 和 [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)：

#### 安装

```sh
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

#### 配置

并修改 `.eslintrc` 的 `extends` 配置，增加 `prettier`，如下（以 TS React 项目为例）：

```json
{
  "extends": ["eslint-config-ali/typescript/react", "prettier"]
}
```

了解更多请阅读 [Prettier - Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)。

## 将风格问题降级

为了保证一致的编码风格，本包中大量风格相关的规则被设为了 error 级别，以引起开发者的足够重视。如果你觉得风格问题不足以是 error 级别（有些用户根据 ESLint error 进行流程卡点），本包还提供了一套名为 'essential' 的配置文件，这套配置将所有风格问题降级为 warn 级别，仅将必要问题报告为 error，引用方式为在相应配置的 `eslint-config-ali` 后面加上 `/essential`，如对 JS React 项目为 `eslint-config-ali/essential/react`、对 TS Vue 项目为 `eslint-config-ali/essential/typescript/vue`

## 了解更多

- 如果你对 ESLint 还不熟悉，可以阅读官网的 [Getting Started](https://eslint.org/docs/user-guide/getting-started) 快速入门。
- 了解如何为 IDE 配置 ESLint，可以参考官网的 [Integrations](http://eslint.org/docs/user-guide/integrations)。
- 了解如何在继承本包的基础上对项目 ESLint 进行个性化配置，可参考官网的 [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)。下面简介下 ESLint 配置中的几个常用字段：
  - `extends`: 继承一组规则集。`"extends": "eslint-config-ali",` 表示继承本包定义的规则配置。
  - `rules`: 配置规则，这里定义的规则会覆盖 `extends` 的规则。如果觉得本包开启的某条规则过于严格，你可以暂时在这里将其关闭。
  - `parser`: 设置 ESLint 的解析器。ESLint 使用 espree 作为默认的解析器，可以通过这个参数指定其他的解析器。比如指定为 [@babel/eslint-parser](https://npmjs.com/package/@babel/eslint-parser)，以解析 Babel 支持但 ESLint 默认解析器不支持的语法（本包不同配置文件使用的解析器可在简介表格中的「依赖 parser」一列查看）。
  - `globals`: 指定代码中可能用到的全局变量，以免全局变量被 [no-undef](http://eslint.org/docs/rules/no-undef) 规则报错。
  - `env`: 指定代码的运行环境，每个环境预定义了一组对应的全局变量，本包已开启的环境有 browser、node、jquery、es6 及几个测试框架的环境。
- 了解常用的 ESLint 命令，如 `--fix`、`--ext`，可参考官网的 [Command Line Interface](http://eslint.org/docs/user-guide/command-line-interface)。
