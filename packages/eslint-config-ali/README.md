# eslint-config-ali

## 简介

本包是《阿里巴巴前端规约》配套的 [ESLint 可共享配置](http://eslint.org/docs/developer-guide/shareable-configs.html)，我们提供了多套配置文件以支持 JavaScript、TypeScript、React、Vue、Node.js 等多种项目类型：

### JavaScript 项目

| 项目类型 | 配置文件 | 依赖 |
| ----------- | ----------- | ----------- |
| 一般项目 | eslint-config-ali | [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.16.0 <br/> [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.16.3 <br/> [@babel/plugin-proposal-decorators](https://www.npmjs.com/package/@babel/plugin-proposal-decorators)@^7.16.0 <br/> [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)@^7.16.0 <br/> [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1 |
| React 项目 | eslint-config-ali/react <br /> eslint-config-ali/jsx-a11y（可选） | [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.16.0 <br/> [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.16.3 <br/> [@babel/plugin-proposal-decorators](https://www.npmjs.com/package/@babel/plugin-proposal-decorators)@^7.16.0 <br/> [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)@^7.16.0 <br/> [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react)@^7.16.0 <br/>  [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1 <br /> [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)@^7.17.0 <br /> [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)@^4.0.4   <br /> [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)@^6.3.1（可选） |
| [Rax 项目](https://rax.js.org/) | eslint-config-ali/rax | [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.16.0 <br/> [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.16.3 <br/> [@babel/plugin-proposal-decorators](https://www.npmjs.com/package/@babel/plugin-proposal-decorators)@^7.16.0 <br/> [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)@^7.16.0 <br/> [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react)@^7.16.0 <br/>  [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1 <br /> [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)@^7.17.0 <br /> [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)@^4.0.4 <br /> [eslint-plugin-jsx-plus](https://www.npmjs.com/package/eslint-plugin-jsx-plus)@^0.1.0 |
| Vue 项目 | eslint-config-ali/vue | [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.16.0 <br/> [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.16.3 <br/> [@babel/plugin-proposal-decorators](https://www.npmjs.com/package/@babel/plugin-proposal-decorators)@^7.16.0 <br/> [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)@^7.16.0 <br/> [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react)@^7.16.0 <br/>  [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1 <br /> [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser)@^7.0.0 <br/> [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)@^7.3.0 |
| Node.js 项目 | eslint-config-ali/node | [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.16.0 <br/> [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.16.3 <br/> [@babel/plugin-proposal-decorators](https://www.npmjs.com/package/@babel/plugin-proposal-decorators)@^7.16.0 <br/> [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)@^7.16.0 <br/> [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1 <br /> [eslint-config-egg](https://www.npmjs.com/package/eslint-config-egg)@^9.0.0 |
| ES5 项目 | eslint-config-ali/es5 | 无 |

### TypeScript 项目

| 项目类型 | 配置文件 | 依赖 |
| ----------- | ----------- | ----------- |
| 一般项目 | eslint-config-ali/typescript | [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)@^4.4.0 <br/> [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)@^4.4.0 <br /> [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1 |
| React 项目 | eslint-config-ali/typescript/react <br /> eslint-config-ali/jsx-a11y（可选） | [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)@^4.4.0 <br/> [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)@^4.4.0 <br /> [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1 <br /> [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)@^7.17.0 <br /> [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)@^4.0.4   <br /> [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)@^6.3.1（可选） |
| [Rax 项目](https://rax.js.org/) | eslint-config-ali/typescript/rax | [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)@^4.4.0 <br/> [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)@^4.4.0 <br /> [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1 <br /> [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)@^7.17.0 <br /> [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)@^4.0.4 <br /> [eslint-plugin-jsx-plus](https://www.npmjs.com/package/eslint-plugin-jsx-plus)@^0.1.0  |
| Vue 项目 | eslint-config-ali/typescript/vue | [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)@^4.4.0 <br/> [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)@^4.4.0 <br /> [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1 <br /> [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser)@^7.0.0 <br /> [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)@^7.3.0 |
| Node.js 项目 | eslint-config-ali/typescript/node | [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)@^4.4.0 <br/> [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)@^4.4.0 <br /> [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.19.1 <br/> [eslint-config-egg](https://www.npmjs.com/package/eslint-config-egg)@^9.0.0 |

## 安装与使用

推荐使用《阿里巴巴前端规约》配套的 CLI 工具 [f2elint](https://www.npmjs.com/package/f2elint) 接入本包。如果想自己手动接入，可以在上面表格中找到自己项目类型对应的配置文件，在 [ESLint 配置](https://eslint.org/docs/user-guide/configuring) 中 [extends](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)，并安装所需依赖。下面对各项目类型的安装和使用进行详细介绍：

### 一般项目（JavaScript）

针对未使用 React 或 Vue 的一般 JavaScript 项目，使用 ESLint 原生规则和 [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) 规则，使用 [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) 作为 [parser](https://eslint.org/docs/user-guide/configuring#specifying-parser)，是本包的默认配置。

#### 安装

```sh
npm install --save-dev eslint-config-ali eslint@^7.15.0 @babel/eslint-parser@^7.16.3 eslint-plugin-import@^2.19.1
```

#### 使用

```json
{
  "extends": "eslint-config-ali"
}
```

### React 项目（JavaScript）

针对 JS React 项目，继承了默认配置，并启用了 [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) 和 [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) 的规则。

#### 安装

```sh
npm install --save-dev eslint-config-ali eslint@^7.15.0 @babel/eslint-parser@^7.16.3 eslint-plugin-import@^2.19.1 eslint-plugin-react@^7.17.0 eslint-plugin-react-hooks@^4.0.4
```

#### 使用

```json
{
  "extends": "eslint-config-ali/react"
}
```

#### a11y 支持

本包也提供了 JSX a11y 的检查规则，但没有在 React 规则包中默认引入，你可以按如下步骤手动启用：

安装 `eslint-plugin-jsx-a11y` 插件：
```bash
npm install --save-dev eslint-plugin-jsx-a11y
```
在配置中引入 `eslint-config-ali/jsx-a11y`：
```json
{
  "extends": ["eslint-config-ali/react", "eslint-config-ali/jsx-a11y"]
}
```

### Rax 项目（JavaScript）

针对 JS [Rax](https://rax.js.org/) 项目，Rax 工程和 React 工程语法相近，继承了默认配置，并启用了 [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) 和 [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) 的规则。

#### 安装

```sh
npm install --save-dev eslint-config-ali eslint@^7.15.0 @babel/eslint-parser@^7.16.3 eslint-plugin-import@^2.19.1 eslint-plugin-react@^7.17.0 eslint-plugin-react-hooks@^4.0.4 eslint-plugin-jsx-plus@^0.1.0
```

#### 使用

```json
{
  "extends": "eslint-config-ali/rax"
}
```

### Vue 项目（JavaScript）

针对 JS Vue 的项目，继承了默认配置，并启用了 [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue) 插件的规则，使用 [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser) 作为 parser。

#### 安装

```sh
npm install --save-dev eslint-config-ali eslint@^7.15.0 vue-eslint-parser@^7.0.0 @babel/eslint-parser@^7.16.3 eslint-plugin-import@^2.19.1 eslint-plugin-vue@^7.3.0
```

#### 使用

```json
{
  "extends": "eslint-config-ali/vue"
}
```

### Node.js 项目（JavaScript）

针对 Node.js 项目，继承了默认配置和 [egg-config-egg 的 node 规则](https://github.com/eggjs/eslint-config-egg/blob/master/lib/rules/node.js)，规则由 ESLint 原生规则和 [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) 提供。

#### 安装

```sh
npm install --save-dev eslint-config-ali eslint@^7.15.0 @babel/eslint-parser@^7.16.3 eslint-plugin-import@^2.19.1 eslint-config-egg@^9.0.0
```

#### 使用

```json
{
  "extends": "eslint-config-ali/node"
}
```

### ES5 项目（JavaScript）

针对仍在使用 ES5 及之前版本 JS 的老项目，使用 ESLint 原生规则。

#### 安装

```sh
npm install --save-dev eslint-config-ali eslint@^7.15.0
```

#### 使用

```json
{
  "extends": "eslint-config-ali/es5"
}
```

### 一般项目（TypeScript）

针对未使用 React 或 Vue 的一般 TypeScript 项目，继承了默认配置，并启用了 [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) 插件的规则，使用 [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) 作为 parser。

#### 安装

```sh
npm install --save-dev eslint-config-ali eslint@^7.15.0 eslint-plugin-import@^2.19.1 @typescript-eslint/eslint-plugin@^4.4.0 @typescript-eslint/parser@^4.4.0
```

#### 使用

```json
{
  "extends": "eslint-config-ali/typescript"
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

### React 项目（TypeScript）

针对 TS React 项目，继承了 JS React 的配置，并启用了 [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) 插件的规则，使用 [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) 作为 parser。

#### 安装

```sh
npm install --save-dev eslint-config-ali eslint@^7.15.0 eslint-plugin-import@^2.19.1 eslint-plugin-react@^7.17.0 eslint-plugin-react-hooks@^4.0.4 @typescript-eslint/eslint-plugin@^4.4.0 @typescript-eslint/parser@^4.4.0
```

#### 使用

```json
{
  "extends": "eslint-config-ali/typescript/react"
}
```

#### a11y 支持

本包也提供了 JSX a11y 的检查规则，但没有在 TS React 规则包中默认引入，你可以按如下步骤手动启用：

安装 `eslint-plugin-jsx-a11y` 插件：
```bash
npm install --save-dev eslint-plugin-jsx-a11y
```
在配置中引入 `eslint-config-ali/jsx-a11y`：
```json
{
  "extends": ["eslint-config-ali/typescript/react", "eslint-config-ali/jsx-a11y"]
}
```

### Rax 项目（TypeScript）

针对 TS [Rax](https://rax.js.org/) 项目，继承了 JS Rax 的配置，语法与 React 相近，并启用了 [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) 插件的规则，使用 [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) 作为 parser。

#### 安装

```sh
npm install --save-dev eslint-config-ali eslint@^7.15.0 eslint-plugin-import@^2.19.1 eslint-plugin-react@^7.17.0 eslint-plugin-react-hooks@^4.0.4 eslint-plugin-jsx-plus@^0.1.0 @typescript-eslint/eslint-plugin@^4.4.0 @typescript-eslint/parser@^4.4.0
```


#### 使用

```json
{
  "extends": "eslint-config-ali/typescript/rax"
}
```

### Vue 项目（TypeScript）

针对 TS Vue 项目，继承了 JS Vue 的配置，并启用了 [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) 插件的规则，使用 [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) 作为 parser。

#### 安装

```sh
npm install --save-dev eslint-config-ali eslint@^7.15.0 eslint-plugin-import@^2.19.1 eslint-plugin-vue@^7.3.0 vue-eslint-parser@^7.0.0 @typescript-eslint/eslint-plugin@^4.4.0 @typescript-eslint/parser@^4.4.0
```

#### 使用

```json
{
  "extends": "eslint-config-ali/typescript/vue"
}
```

### Node.js 项目（TypeScript）

针对未使用 React 和 Vue 的 TypeScript(Node) 项目，继承了 JS Node.js 配置，并启用了 [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) 插件的规则，使用 [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) 作为 parser。

#### 安装

```sh
npm install --save-dev eslint-config-ali eslint@^7.15.0 eslint-plugin-import@^2.19.1 @typescript-eslint/eslint-plugin@^4.4.0 @typescript-eslint/parser@^4.4.0 eslint-config-egg@^9.0.0
```


#### 使用

```json
{
  "extends": "eslint-config-ali/typescript/node"
}
```

## 配合 Prettier 使用

如果你的项目使用 [Prettier](https://prettier.io/) 进行代码格式化，本包的一些规则可能会跟 Prettier 格式化结果有冲突，[例如这条规则](https://github.com/typescript-eslint/typescript-eslint/issues/372)。为了避免冲突，你需要手动安装 [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) 和 [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)：

```sh
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

并修改 eslintrc 的 `extends` 如下（以 TS React 项目为例）：

```json
{
  "extends": [
    "eslint-config-ali/typescript/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ]
}
```

或者如果你不希望 ESLint 再管格式问题，直接调用 Prettier 进行格式化的话，可修改 eslintrc 的 `extends` 如下：

```json
{
  "extends": [
    "eslint-config-ali/typescript/react",
    "prettier/@typescript-eslint"
  ]
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
