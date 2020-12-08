# no-secret-info

不在代码中直接通过纯文本值设置 `password` `token` 和 `secret` 信息。

## 规则细节

在包含 `password` `token` and `secret` 名称的 key 中禁止使用纯文本值.

**错误**代码示例:

```js
var accessKeySecret = 'xxxx';

var client = {
  accessKeyToken: 'xxxx',
};
```

**正确**代码示例:

```js
var accessKeySecret = process.env.ACCESS_KEY_SECRET;

var client = {
  accessKeyToken: process.env.ACCESS_KEY_SECRET,
};
```

## 规则选项

默认会检查名称包含 `password`，`token`，`secret` 字段 key 的值，支持自定义设置字段名称：

```json
"ali/no-secret-info": [<enabled>, ['customKey']]
```
