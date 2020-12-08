# Eslint-plugin-ali

Common eslint rules for Alibaba.

## Installation

Install [esLint](http://eslint.org), `eslint-plugin-ali`:

```shell
$ npm install --save-dev eslint eslint-plugin-ali
```

## Usage

## Supported Rules

- [`no-broad-semantic-versioning`](https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/no-broad-semantic-versioning.md) Recommended the semantic versioning include everything greater than a particular version in the same major range.
- [`no-http-url`](https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/no-http-url.md) Recommended the http url switch to HTTPS.
- [`no-js-in-ts-project`](https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/no-js-in-ts-project.md) It is not recommended to use js and ts files at the same time.
- [`no-lowercase-component-name`](https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/no-lowercase-component-name.md) It is not recommended to name components in lower case.
- [`no-secret-info`](https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/no-secret-info.md) Don't show `password` `token` and `secret` in plain text.
- [`recommend-add-line-height-unit`](https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/recommend-add-line-height-unit.md) Recommended to add unit for line-height which is more than 5.