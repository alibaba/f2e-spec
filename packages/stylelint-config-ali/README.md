# stylelint-config-ali

本包提供了《阿里巴巴前端规约 - CSS 编码规约》配套的 [stylelint 可共享配置](https://stylelint.io/user-guide/configure)。

## 安装

除了本包，你需要同时安装 [stylelint](https://www.npmjs.com/package/stylelint) 和 [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)：

```bash
npm install stylelint-config-ali stylelint stylelint-scss --save-dev
```

## 使用

在你的 `.stylelintrc` 中继承本包:

```json
{
  "extends": "stylelint-config-ali"
}
```
