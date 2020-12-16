# eslint-plugin-ali

## 安装

除了本包，你需要同时安装 [ESlint](https://eslint.org/)

```shell
$ npm install eslint-plugin-ali eslint --save-dev
```

## 使用

### 引入插件

```js
// .eslintrc.js
module.exports = {
  plugin: ["ali"],
  rules: {
    "ali/no-secret-info": "error"
  }
}
```

### 使用 presets

```js
// .eslintrc.js
module.exports = {
  // 包含通用规则
  // https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/src/configs/recommended.js
  extends: "plugin:ali/recommended"
}
```

## 支持的规则

- [`no-broad-semantic-versioning`](https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/no-broad-semantic-versioning.md) 不要指定宽泛的版本范围
- [`no-http-url`](https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/no-http-url.md) 使用 HTTPS 协议头的 URL，而不是 HTTP
- [`no-js-in-ts-project`](https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/no-js-in-ts-project.md) 不要在 TS 项目中使用 JS
- [`no-secret-info`](https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/no-secret-info.md) 不要在代码中直接设置 `password` `token` and `secret` 信息
