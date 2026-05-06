# oxfmt-config-ali

Oxfmt shareable configuration for Alibaba F2E Guidelines.

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
