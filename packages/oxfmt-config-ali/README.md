# oxfmt-config-ali

[![npm version](https://img.shields.io/npm/v/oxfmt-config-ali)](https://www.npmjs.com/package/oxfmt-config-ali)
[![npm downloads](https://img.shields.io/npm/dm/oxfmt-config-ali)](https://www.npmjs.com/package/oxfmt-config-ali)

[Oxfmt](https://github.com/oxc-project/oxc) shareable configuration for Alibaba F2E Guidelines.

## Install

```
npm i -D oxfmt-config-ali
```

## Example

```ts
// oxfmt.config.ts
import config from 'oxfmt-config-ali';

export default config;
```

If you want to customize the configuration, you can do it like this:

```ts
// oxfmt.config.ts
import { defineConfig } from 'oxfmt';
import config from 'oxfmt-config-ali';

export default defineConfig({
  ...config,
  printWidth: 80,
});
```

## License

MPL-2.0
