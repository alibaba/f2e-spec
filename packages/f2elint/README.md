# f2elint

f2elint 是《阿里巴巴前端规约》的配套初始化工具，可以为各种前端和 Node.js 项目一键接入规约，保障项目的编码规范和代码质量。

## CLI

```bash
npx f2elint
```

![screenshot](https://github.com/alibaba/f2e-spec/assets/5836790/80b5c4fd-6ab1-4423-8ae5-0572777db0a7)

## Monorepo

多包项目和前后端分离项目经常采用 monorepo 的项目代码管理模式，即一个 git 仓库中包含多个不同类型的应用，无法使用同一套规约。这种情况下，我们建议：

1. 在仓库根目录运行 `npx f2elint` 并选择 `Base` 模板
2. 切换到子应用/子包目录并运行 `npx f2elint` 并选择适合的模板，f2elint 会自动检测子应用/子包，并跳过 lint-staged 和 commitlint

示例 1：前后端分离应用

```bash
npx f2elint # 选择 Base 模板

cd client
npx f2elint # 选择 React 模板

cd ../server
npx f2elint # 选择 Base 模板
```

示例 2：多包项目

```bash
npx f2elint # 选择 Base 模板

cd packages/cli
npx f2elint # 选择 Base 模板

cd ../react
npx f2elint # 选择 React 模板
```

## API

```bash
npm install --save f2elint
```

```js
import { f2elint, TemplateType } from 'f2elint';

await f2elint('path/to/project', {
  template: TemplateType.ReactTS,
  stylelint: true,
  prettier: true,
  lintStaged: true,
  commitlint: false,
});
```
