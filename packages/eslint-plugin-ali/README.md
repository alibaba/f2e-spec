# Eslint-plugin-ali

## 安装

安装 [esLint](http://eslint.org), `eslint-plugin-ali`:

```shell
$ npm install --save-dev eslint eslint-plugin-ali
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
  // 包含 js 通用规则
  extends: "plugin:ali/common"
}
```

## 支持规则

- [`no-broad-semantic-versioning`](https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/no-broad-semantic-versioning.md) 不推荐指定宽泛的版本范围
- [`no-http-url`](https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/no-http-url.md) 推荐使用 Https 链接
- [`no-js-in-ts-project`](https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/no-js-in-ts-project.md) 不推荐在 ts 项目中使用 js 
- [`no-secret-info`](https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/no-secret-info.md) 不推荐在代码中直接设置 `password` `token` and `secret` 信息
