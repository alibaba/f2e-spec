# commitlint-config-ali

本包提供了《阿里巴巴前端规约 - Git 规约》配套的 [commitlint 可共享配置](https://commitlint.js.org/#/concepts-shareable-config)，用于对 git commit message 进行校验。

## 安装

除了本包，你需要同时安装 [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)：

```bash
npm install commitlint-config-ali @commitlint/cli --save-dev
```

## 使用

在你的 `commitlint.config.js` 中继承本包:

```js
module.exports = {
  extends: ['ali'],
};
```

## 设置 git hook

可通过 [husky](https://www.npmjs.com/package/husky) 设置在 git commit 时触发 commitlint。

首先安装 husky：

```bash
npm install husky --save-dev
```

然后在 `package.json` 中增加：

```json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

更多信息可参考 [commitlint 文档](https://commitlint.js.org/#/guides-local-setup?id=install-husky)。
