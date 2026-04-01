# stylelint-config-ali

本包提供了《阿里巴巴前端规约 - CSS 编码规约》配套的 [stylelint 可共享配置](https://stylelint.io/user-guide/configure)。

## 安装

```bash
npm i -D stylelint stylelint-config-ali
```

## 使用

在你的 `stylelint.config.mjs` 中继承本包:

```js
/** @type {import('stylelint').Config} */
export default {
  extends: 'stylelint-config-ali',
};
```
