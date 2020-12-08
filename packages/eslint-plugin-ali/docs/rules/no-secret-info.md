# no-secret-info

Don't show `password` `token` and `secret` in plain text.

## Rule Details

It is very dangerous to use plain text with key contains `password` `token` and `secret`.

Examples of **incorrect** code for this rule:

```js
var accessKeySecret = 'xxxx';

var client = {
  accessKeyToken: 'xxxx',
};
```

Examples of **correct** code for this rule:

```js
var accessKeySecret = process.env.ACCESS_KEY_SECRET;

var client = {
  accessKeyToken: process.env.ACCESS_KEY_SECRET,
};
```
