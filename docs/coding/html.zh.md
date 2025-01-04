---
group: 代码风格
order: 1
---

# HTML 编码规约

## 1. `强制` 必须使用 HTML5 doctype

在 HTML 文档的开头必须使用 `<!doctype html>` 来声明文档的 HTML 版本。

```html
<!-- ❌ xhtml doctype -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html></html>

<!-- ❌ html4 doctype -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!-- ✅ html5 大写 (旧) -->
<!-- prettier-ignore -->
<!DOCTYPE html>
<html></html>

<!-- ✅ html5 小写 (新) -->
<!doctype html>
<html></html>
```

### 1.2 语言

- 1.2.1 `推荐` 指定 `html` 标签上的 `lang` 属性。

  [HTML5 规范](http://w3c.github.io/html/semantics.html#the-html-element)中提到：

  > 推荐开发者在 `html` 元素上指定 `lang` 属性，以指出文档的语言。这有助于读屏、翻译等工具的工作。

  `lang` 属性的值由 `language-subtags` 组成，在 [BCP47](http://www.ietf.org/rfc/bcp/bcp47.txt#) 中定义，[了解更多](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)。

  ```html
  <html lang="zh-CN">
    <!-- ... -->
  </html>
  ```

### 1.3 元数据

- 1.3.1 `推荐` 使用 UTF-8 字符编码。

  声明一个明确的字符编码，可以让浏览器更快速高效地确定适合网页内容的渲染方式。

  由于历史原因，不同浏览器采用了不同的字符编码。但对于新业务，如无特殊要求，统一使用 UTF-8 字符编码，以便统一。

  在 HTML 中使用 `<meta charset="utf-8" />` 声明文档的编码方式：

  ```html
  <head>
    <meta charset="utf-8" />
  </head>
  ```

- 1.3.2 `推荐` 页面提供给移动设备使用时，需要设置 [viewport](https://drafts.csswg.org/css-device-adapt/#viewport-meta)。

  设置 viewport-fit 设置为“cover”来兼容 iPhone X 的刘海屏，[了解更多](https://webkit.org/blog/7929/designing-websites-for-iphone-x/) 。

  ```html
  <meta name="viewport" content="width=device-width, minimum-scale=1.0, viewport-fit=cover" />
  ```

### 1.4 资源加载

- 1.4.1 `推荐` 引入 CSS 和 JavaScript 时无需指定 type。
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

- 1.4.2 `推荐` 在 head 标签内引入 CSS，在 body 结束标签前引入 JS。

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

- 1.4.3 `推荐` 外部资源的引用地址跟随页面协议，省略协议部分。

  ```html
  <link rel="stylesheet" href="//g.alicdn.com/lib/style/index-min.css" />
  ```

- 1.4.4 `推荐` 使用 preload 预加载关键资源，[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Preloading_content)。

  ```html
  <link rel="preload" href="style.css" as="style" />
  <link rel="preload" href="main.js" as="script" />
  ```

- 1.4.5 `推荐` 使用 dns-prefetch 和 preconnect 处理 DNS 解析延迟问题，提高网页加载性能，[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/Performance/dns-prefetch)。

  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
  <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
  ```

### 1.5 页面标题

- 1.5.1 `强制` 页面需要指定 title 标签，有且仅有 1 个。

  ```html
  <head>
    <meta charset="utf-8" />
    <title>淘宝网 - 淘！我喜欢</title>
  </head>
  ```

## 2 编码

### 2.1 缩进

- 2.1.1 `推荐` 统一使用 2 个空格缩进，不要使用 4 个空格或 tab 缩进。

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

- 2.2.1 `强制` 在 HTML 注释代码中，不允许出现任何敏感信息。

  常见的敏感信息包括：

  - 业务相关敏感信息，例如业务规则
  - 员工个人隐私信息，例如邮箱、手机、身份证号码
  - AK（accessKey id, accesskey secret）
  - 证书、密码
  - 内网 IP、URL
  - 其他公司、员工相关的内部信息、敏感信息

- 2.2.2 `推荐` 单行注释，需在注释内容和注释符之间需留有一个空格，以增强可读性。

  ```html
  <!-- 单行注释 -->
  ```

- 2.2.3 `推荐` 多行注释，注释符单独占一行，注释内容 2 个空格缩进。

  ```html
  <!--
    多行注释
    多行注释
  -->
  ```

### 2.3 标签

- 2.3.1 `强制` 标签名统一使用小写。

  ```html
  <!-- bad -->
  <h1>Hello, world!</h1>

  <!-- good -->
  <h1>Hello, world!</h1>
  ```

- 2.3.2 `推荐` 不要省略自闭合标签结尾处的斜线，且斜线前需留有一个空格。

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

- 2.4.1 `强制` 属性值使用双引号，不要使用单引号。

  ```html
  <!-- bad -->
  <link rel="stylesheet" href="example.css" />

  <!-- good -->
  <link rel="stylesheet" href="example.css" />
  ```

- 2.4.2 `推荐` 不要为 Boolean 属性添加取值。

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

- 2.4.3 `推荐` 自定义属性的命名：以 data- 为前缀。

  建议自定义属性的命名都以 `data-` 为前缀，以便区分。

  ```html
  <!-- bad -->
  <a modal="toggle" href="#"> Example link </a>

  <!-- good -->
  <a data-modal="toggle" href="#"> Example link </a>
  ```

### 2.5 语义化

- 2.5.1 `参考` 尽量根据语义使用 HTML 标签。

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

- 2.6.1 `参考` 注意 HTML 的可访问性（Accessibility）。

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

## 3. 脚手架模板

根据以上规约，建议的 HTML 脚手架模板如下：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="description" content="淘宝网 - 亚洲较大的网上交易平台" />
    <meta name="keyword" content="淘宝,掏宝,网上购物,C2C" />
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, viewport-fit=cover" />
    <title>淘宝网</title>
    <link rel="stylesheet" href="example.css" />
  </head>
  <body>
    <div id="container"></div>
    <script src="example.js"></script>
  </body>
</html>
```

## 参考资料

- [Code Guide by @mdo](http://codeguide.co)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
