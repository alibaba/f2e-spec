# f2elint

f2elint 是《阿里巴巴前端规约》的配套初始化工具，可以为各种前端和 Node.js 项目一键接入规约，保障项目的编码规范和代码质量。

## CLI

```bash
npx f2elint
```

![screenshot](https://github.com/alibaba/f2e-spec/assets/5836790/80b5c4fd-6ab1-4423-8ae5-0572777db0a7)

## API

```bash
npm install --save f2elint
```

```js
import { f2elint, TemplateType } from 'f2elint';

await f2elint('path/to/project/root', {
  template: TemplateType.ReactTS,
  stylelint: true,
  prettier: true,
  lintStaged: true,
  commitlint: false,
})
```
