# stylelint-config-ali

本包提供了《阿里巴巴前端规约 - CSS 编码规约》配套的 [stylelint 可共享配置](https://stylelint.io/user-guide/configure)。

本包为 **纯 ESM**（`"type": "module"`），需 Node.js **>=20.19.0**，并与 Stylelint **17+** 配合使用。在配置文件里使用 `"extends": "stylelint-config-ali"` 即可，无需在本仓库代码中 `require` 本包。

## 安装

除了本包，你需要同时安装 [stylelint](https://www.npmjs.com/package/stylelint) 和 [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)：

```bash
npm install stylelint-config-ali stylelint stylelint-scss --save-dev
```

## 使用

在你的 `stylelint.config.mjs` 中继承本包:

```js
/** @type {import('stylelint').Config} */
export default {
  extends: 'stylelint-config-ali',
};
```
