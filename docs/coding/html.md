---
group: Coding Style
order: 1
---

# HTML Coding Specification

## Boilerplate

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
    <title>My Site - There are a lot of fun!</title>
    <meta name="description" content="web front-end coding and engineering specification" />
    <meta name="keyword" content="code,html,css,javascript,typescript,react,node" />
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <div id="root"></div>
    <script src="./index.js"></script>
  </body>
</html>
```

## DOCTYPE

### Must have doctype at the beginning

Level: **Mandatory**

```html
<!-- ❌ missing doctype -->
<html lang="zh-CN"></html>

<!-- ❌ doctype at wrong place -->
<html lang="zh-CN">
  <!doctype html>
</html>

<!-- ✅ good -->
<!doctype html>
<html lang="zh-CN"></html>
```

### Must use HTML5 lowercase doctype

Level: **Mandatory**

```html
<!-- ❌ xhtml doctype -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="zh-CN"></html>

<!-- ❌ html4 doctype -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="zh-CN"></html>

<!-- ❌ html5 upper case (old) -->
<!-- prettier-ignore -->
<!DOCTYPE html>
<html lang="zh-CN"></html>

<!-- ✅ html5 lower case (new) -->
<!doctype html>
<html lang="zh-CN"></html>
```

## `<html>` element

### Must have and only have one `<html>` element at root

Level: **Mandatory**

```html
<!-- ❌ missing <html> -->
<script></script>
<div>...</div>

<!-- ❌ multiple <html> -->
<html lang="zh-CN"></html>
<html lang="zh-CN"></html>

<!-- ❌ <html> nested in other element -->
<div>
  <html lang="zh-CN"></html>
</div>

<!-- ❌ other elements outside of <html> -->
<html lang="zh-CN"></html>
<script></script>
<div>...</div>

<!-- ✅ good -->
<!doctype html>
<html lang="zh-CN">
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

### `<html>` element must have `lang` attribute

Level: **Mandatory**

`lang` attribute is important for search engines, screen readers and translation tools. The value is usually in `language-REGION` format, e.g. `en-US`, `zh-CN`.

```html
<!-- ❌ missing lang -->
<html></html>

<!-- ❌ wrong case -->
<html lang="zh-cn"></html>

<!-- ❌ no underscore -->
<html lang="zh_CN"></html>

<!-- ✅ good -->
<html lang="zh-CN"></html>
```

If a part of the document is written in another language, add `lang` attribute to the root element.

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    ...
  </head>
  <body>
    <header>...</header>
    <main>...</main>
    <footer lang="en-US">...</footer>
  </body>
</html>
```

### `<html>` must have and only have one `<head>` and one `<body>` as children

Level: **Mandatory**

```html
<!-- ❌ missing <head> -->
<!doctype html>
<html lang="zh-CN">
  <body>
    ...
  </body>
</html>

<!-- ❌ other elements as children -->
<!doctype html>
<html lang="zh-CN">
  <head>
    ...
  </head>
  <body>
    ...
  </body>
  <!-- scripts should be in either head or body -->
  <script></script>
</html>

<!-- ✅ good -->
<!doctype html>
<html lang="zh-CN">
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

## `<meta>` elements

### `<meta>` element must be contained in `<head>` element

Level: **Mandatory**

```html
<!-- ❌ <meta> in <body> -->
<!doctype html>
<html lang="zh-CN">
  <head>
    ...
  </head>
  <body>
    <meta charset="utf-8" />
  </body>
</html>

<!-- ✅ good -->
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    ...
  </body>
</html>
```

### Must use UTF-8 charset

Level: **Mandatory**

```html
<head>
  <meta charset="utf-8" />
</head>
```

### Responsive web page should have viewport meta

Level: **Recommended**

The following settings match the actual device size. Users can scale the content with touch gestures.

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

The following settings disable downscale, which is not useful and even troublesome.

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
</head>
```

In case you have implemented scaleable UI in the web page, you may want to totally disable browser scale support.

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
</head>
```

To fit iPhone's notch screen, you may need some extra configuration. [Learn more](https://webkit.org/blog/7929/designing-websites-for-iphone-x/) .

### 1.4 资源加载

- 1.4.1 `recommended` 引入 CSS 和 JavaScript 时无需指定 type。
  根据 HTML5 规范，引入 CSS 和 JavaScript 时通常不需要指明 type，因为 [text/css](https://html.spec.whatwg.org/multipage/obsolete.html#attr-style-type) 和 [text/javascript](https://html.spec.whatwg.org/multipage/scripting.html#attr-script-type) 分别是他们的默认值。

  ```html
  <!-- bad -->
  <link type="text/css" rel="stylesheet" href="example.css" />
  <style type="text/css">
    /* ... */
  </style>
  <script type="text/javascript" src="example.js"></script>

  <!-- good -->
  <link rel="stylesheet" href="example.css" />
  <style>
    /* ... */
  </style>
  <script src="example.js"></script>
  ```

- 1.4.2 `recommended` 在 head 标签内引入 CSS，在 body 结束标签前引入 JS。

  在 `<body></body>` 中指定外部样式表和嵌入式样式块可能会导致页面的重排和重绘，对页面的渲染造成影响。因此，一般情况下，CSS 应在 `<head></head>` 标签里引入，[了解更多](https://developer.yahoo.com/performance/rules.html#css_top)。

  > 在 HTTP2（Chrome 浏览器 69 版本之后，Firefox 和 Edge）中可以在 body 中使用 link 标签引入样式文件，但不推荐在 body 中使用 `<style>` 标签的内联样式。**`<link rel="stylesheet">` 将会阻止后续内容的渲染，而不是整个页面**。

  除了基础库等必须要在 DOM 加载之前运行的 JavaScript 脚本，其他都在靠近 `body` 结束标签前引入，以防止出现页面渲染的阻塞，[了解更多](https://developer.yahoo.com/performance/rules.html#js_bottom)。

  ```html
  <!-- bad -->
  <!doctype html>
  <html>
    <head>
      <script src="mod-a.js"></script>
      <script src="jquery.js"></script>
    </head>
    <body>
      <style>
        .mod-example {
          padding-left: 15px;
        }
      </style>
    </body>
  </html>

  <!-- good -->
  <!doctype html>
  <html>
    <head>
      <style>
        .mod-example {
          padding-left: 15px;
        }
      </style>
    </head>
    <body>
      ...
      <script src="path/to/my/script.js"></script>
    </body>
  </html>
  ```

- 1.4.3 `recommended` 外部资源的引用地址跟随页面协议，省略协议部分。

  ```html
  <link rel="stylesheet" href="//g.alicdn.com/lib/style/index-min.css" />
  ```

- 1.4.4 `recommended` 使用 preload 预加载关键资源，[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Preloading_content)。

  ```html
  <link rel="preload" href="style.css" as="style" />
  <link rel="preload" href="main.js" as="script" />
  ```

- 1.4.5 `recommended` 使用 dns-prefetch 和 preconnect 处理 DNS 解析延迟问题，提高网页加载性能，[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/Performance/dns-prefetch)。

  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
  <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
  ```

### 1.5 页面标题

- 1.5.1 `mandatory` 页面需要指定 title 标签，有且仅有 1 个。

  ```html
  <head>
    <meta charset="utf-8" />
    <title>淘宝网 - 淘！我喜欢</title>
  </head>
  ```

## 2 编码

### 2.1 缩进

- 2.1.1 `recommended` 统一使用 2 个空格缩进，不要使用 4 个空格或 tab 缩进。

  ```html
  <!doctype html>
  <html>
    <head>
      <title>Page title</title>
    </head>
    <body>
      <img src="images/company-logo.png" alt="Company" />
      <h1 class="hello-world">Hello, world!</h1>
    </body>
  </html>
  ```

### 2.2 注释

- 2.2.1 `mandatory` 在 HTML 注释代码中，不允许出现任何敏感信息。

  常见的敏感信息包括：

  - 业务相关敏感信息，例如业务规则
  - 员工个人隐私信息，例如邮箱、手机、身份证号码
  - AK（accessKey id, accesskey secret）
  - 证书、密码
  - 内网 IP、URL
  - 其他公司、员工相关的内部信息、敏感信息

- 2.2.2 `recommended` 单行注释，需在注释内容和注释符之间需留有一个空格，以增强可读性。

  ```html
  <!-- 单行注释 -->
  ```

- 2.2.3 `recommended` 多行注释，注释符单独占一行，注释内容 2 个空格缩进。

  ```html
  <!--
    多行注释
    多行注释
  -->
  ```

### 2.3 标签

- 2.3.1 `mandatory` 标签名统一使用小写。

  ```html
  <!-- bad -->
  <h1>Hello, world!</h1>

  <!-- good -->
  <h1>Hello, world!</h1>
  ```

- 2.3.2 `recommended` 不要省略自闭合标签结尾处的斜线，且斜线前需留有一个空格。

  虽然 [HTML5 规范](https://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag) 中指出结尾的斜线是可选的，但保留它们可以明确表达该标签已闭合的语义，更易于维护和理解。

  同时，在 React 被广泛使用的今天，这与 [JSX 的规范](https://react-cn.github.io/react/tips/self-closing-tag.html) 相一致，JSX 中自闭合标签必须保留结尾的斜线。

  ```html
  <!-- bad -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <img src="images/foo.png" alt="foo" />

  <!-- good -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <img src="images/foo.png" alt="foo" />
  ```

### 2.4 属性

- 2.4.1 `mandatory` 属性值使用双引号，不要使用单引号。

  ```html
  <!-- bad -->
  <link rel="stylesheet" href="example.css" />

  <!-- good -->
  <link rel="stylesheet" href="example.css" />
  ```

- 2.4.2 `recommended` 不要为 Boolean 属性添加取值。

  XHTML 需要每个属性声明取值，但是 HTML5 并不需要。一个元素中 Boolean 属性存在即表示取值 `true`，不存在则表示取值 `false`，[了解更多](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes)。

  ```html
  <!-- bad -->
  <input type="text" disabled="disabled" />
  <input type="checkbox" value="1" checked="checked" />
  <select>
    <option value="1" selected="selected">1</option>
  </select>

  <!-- good -->
  <input type="text" disabled />
  <input type="checkbox" value="1" checked />
  <select>
    <option value="1" selected>1</option>
  </select>
  ```

- 2.4.3 `recommended` 自定义属性的命名：以 data- 为前缀。

  建议自定义属性的命名都以 `data-` 为前缀，以便区分。

  ```html
  <!-- bad -->
  <a modal="toggle" href="#"> Example link </a>

  <!-- good -->
  <a data-modal="toggle" href="#"> Example link </a>
  ```

### 2.5 语义化

- 2.5.1 `referenced` 尽量根据语义使用 HTML 标签。

  HTML 标签（更严谨的叫法是 HTML 元素）都有其语义，例如 `p` 标签即“paragraphs”用于章节，`a` 标签即“anchors”用于锚点链接，[了解更多](https://www.w3.org/TR/2018/WD-html53-20181018/fullindex.html#index-elements)。

  我们应优先选取符合当下所需语义的标签，这既有助于[可访问性（Accessibility）](https://developer.mozilla.org/zh-CN/docs/learn/Accessibility)，也可以在 CSS 加载失败时获得较好的展示效果。

  ```html
  <!-- bad -->
  <div class="list">
    <div class="list-item">1</div>
    <div class="list-item">2</div>
    <div class="list-item">3</div>
  </div>

  <!-- good -->
  <ul class="list">
    <li class="list-item">1</li>
    <li class="list-item">2</li>
    <li class="list-item">3</li>
  </ul>
  ```

### 2.6 可访问性

- 2.6.1 `referenced` 注意 HTML 的可访问性（Accessibility）。

  网页可访问性使网页内容落实“无障碍”，让不同程度或需求的用户可以顺畅的获取网站上的信息。传统上我们认为这只与残疾人士有关，但提升网站的可访问性也可以让其他用户群体受益，比如使用移动设备的人群或低速网络的人群。

  例如，为 img 标签设置 alt 属性：

  ```html
  <!-- bad - 缺少 alt 属性，无法被无障碍阅读器识别 -->
  <img src="hello.jpg" />

  <!-- good -->
  <img src="hello.jpg" alt="Welcome to visit!" />

  <!-- good - 图片无需被无障碍阅读器识别时 -->
  <img src="logo.jpg" alt="" />

  <!-- good - 图片无需被无障碍阅读器识别时 -->
  <img src="logo.jpg" role="presentation" />
  ```

  了解更多 HTML 可访问性的知识，可以阅读[这篇 MDN 的文章](https://developer.mozilla.org/zh-CN/docs/learn/Accessibility)。

## Template languages

There are many template languages to generate HTML files, e.g. [Nunjucks], [EJS]. Writting template language syntax should also follow some common specification.

This part uses [Nunjucks] as an example. But it should fit other template languages, too.

### Variables, filters and keywords MUST have spaces around

Level: **Mandatory**

```jinja
{# ❌ bad, no spaces #}
{{username}} {{tags|join(',')}}

{# ✅ good #}
{{ username }} {{ tags | join(',') }}
```

### Unfiltered user input MUST be HTML escaped

Level: **Mandatory**

```jinja
{# ❌ bad #}
<p>{{ description }}</p>
<script>
  window.user = {{ user | dump }}
</script>

{# ✅ good #}
{{ description | escaped }}
<script>
  window.user = {{ user | dump | escaped }}
</script>
```

## Credits

> If you have contributed to this document but your name isn't listed, please [create an issue](https://github.com/alibaba/f2e-spec/issues/new) to let us know!

- TODO

## References

- [Code Guide by @mdo](http://codeguide.co)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)

[EJS]: https://ejs.co/
[Nunjucks]: https://mozilla.github.io/nunjucks/
