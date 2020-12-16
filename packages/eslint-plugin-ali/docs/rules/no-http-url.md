# no-http-url

推荐将 HTTP 链接换为 HTTPS 链接。

## 规则内容

**错误代码**示例:

```js
var test = 'http://test.com';
var jsx = <img src="http://test.com">;
```

## 何时不适用

如果你的网站只支持 HTTP 时。
