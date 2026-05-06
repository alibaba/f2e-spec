# oxfmt-config-ali

适用于阿里巴巴前端规约的 Oxfmt 共享配置。

## 安装

```
npm i -D oxfmt-config-ali
```

## 使用示例

```ts
// oxfmt.config.ts
import config from 'oxfmt-config-ali';

export default config;
```

如果需要自定义配置，可以这样做：

```ts
// oxfmt.config.ts
import { defineConfig } from 'oxfmt';
import config from 'oxfmt-config-ali';

export default defineConfig({
  ...config,
  printWidth: 80,
});
```

## 许可协议

MPL-2.0
