# no-http-url

推荐将 Http 链接换为 Https 链接。

## 规则内容

**错误代码**示例:

```js
var test = 'http://test.com';
var jsx = <img src="http://test.com">;
```

## 什么时候不适用

如果你的网站只支持 Http 时
