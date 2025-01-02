# eslint-config-ali

![Version](https://img.shields.io/npm/v/eslint-config-ali)
![Downloads](https://img.shields.io/npm/dw/eslint-config-ali)

本包是[《阿里巴巴前端规约》](https://github.com/alibaba/f2e-spec)配套的 [ESLint 可共享配置](http://eslint.org/docs/developer-guide/shareable-configs.html)，提供了多套配置文件以支持 JavaScript、TypeScript、React、Vue、Node.js 等多种项目类型。

## f2elint 接入（推荐）

```bash
npx f2elint
```

## 手动接入

```bash
npm install --save-dev eslint@^9 eslint-config-ali
```

### 基础 JavaScript/TypeScript 项目

```js
// eslint.config.mjs
import { base } from 'eslint-config-ali';

export default [...base];
```

### React JavaScript/TypeScript 项目

针对 JS React 项目，继承了默认配置，并启用了 [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) 和 [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) 的规则。

ESLint 配置：

```js
// eslint.config.mjs
import { react } from 'eslint-config-ali';

export default [...react];
```

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
