# stylelint-config-ali

A [Stylelint shareable config](https://stylelint.io/user-guide/configure) for the _Alibaba Front-end Guidelines — CSS coding standards_.

## Install

```bash
npm i -D stylelint stylelint-config-ali
```

## Usage

Extend this package in your `stylelint.config.mjs`:

```js
/** @type {import('stylelint').Config} */
export default {
  extends: 'stylelint-config-ali',
};
```
