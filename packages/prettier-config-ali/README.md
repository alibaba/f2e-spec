# prettier-config-ali

本包提供了《阿里巴巴前端规约》配套的 [Prettier 可共享配置](https://prettier.io/docs/en/configuration.html#sharing-configurations)，对代码进行自动格式化。Prettier 是可选的。

## 使用 f2elint 安装

建议您使用 f2elint 工具对项目进行初始化，并选择启用 Prettier，这是最简单的方法。

## 手动安装和配置

```bash
npm install --save-dev prettier prettier-config-ali
```

然后在 `package.json` 中增加：

```json
{
  "prettier": "prettier-config-ali"
}
```

更多信息可参考 [Prettier 文档](https://prettier.io/docs/en/options)。
