# Alibaba Front-end Specification

**Alibaba Front-end Specification** is a practical coding and engineering standard that is widely
used in Alibaba Group. It aims to improve collaboration efficiency, project maintainability and
stability, by adopting unified coding style, best practices and defect checking.

The specification consists of two parts: **documents** and **tools**.

Documents help you to understand the specification and write high quality code. Documents include
the following:

- Coding style
  - [HTML Coding Specification](coding/html.md)
  - [CSS Coding Specification](coding/css.md)
  - [JavaScript Coding Specification](coding/javascript.md)
  - [React Coding Specification](coding/react.md)
  - [Node.js 开发规约](coding/node.md)
  - [TypeScript Coding Specification](coding/typescript.md)
  - [Rax Coding Specification](coding/rax.md)
- Engineering
  - [Git Specification](engineering/git.md)
  - [Writing Specification](engineering/writing.md)
  - [Changelog Specification](engineering/changelog.md)

Tools help you to quickly integrate code checking into your projects. Tools include the following:

- [f2elint](https://www.npmjs.com/package/f2elint)
- [eslint-config-ali](https://www.npmjs.com/package/eslint-config-ali)
- [eslint-plugin-ali](https://www.npmjs.com/package/eslint-plugin-ali)
- [stylelint-config-ali](https://www.npmjs.com/package/stylelint-config-ali)
- [prettier-config-ali](https://www.npmjs.com/package/prettier-config-ali)
- [commitlint-config-ali](https://www.npmjs.com/package/commitlint-config-ali)
- [markdownlint-config-ali](https://www.npmjs.com/package/markdownlint-config-ali)

## 单条规约格式说明

### 规约级别和对应的 Lint 规则

根据约束力强弱，一条规约依次分为强制、推荐、参考三个级别：

- 【强制】必须遵守。是不得不遵守的约定，违反本约定或将会引起严重的后果。如有对应 Lint 规则，配套规则包中级别为 `error`。
- 【推荐】尽量遵守。长期遵守这样的规定，有助于系统稳定性和合作效率的提升。如有对应 Lint 规则，配套规则包中级别为 `warn`。
- 【参考】充分理解。技术意识的引导，是个人学习、团队沟通、项目合作的方向。如有对应 Lint 规则，配套规则包中默认不开启，开发者可根据需要自行开启。

一条规约的级别会在规约描述的开头标注，如有对应的 Lint 规则会在结尾标注，例如：

- 1.1.1【强制】使用 2 个空格缩进。eslint: [indent](https://eslint.org/docs/rules/indent)

### 代码示例

为了更加直观，规约描述之后通常会配上代码示例，例如：

```js
// bad
function foo() {
∙∙∙∙let name;
}

// good
function foo() {
∙∙let name;
}
```

我们约定用 `bad` 注释表示反例，用 `good` 注释表示正例。

除了 `bad` 和 `good`，有时你还会看到 `disallowed`、`allowed`、`best` 这几种注释，它们的含义如下：

```js
// disallowed - 禁止（用于部分明令禁止的用法）
// bad - 反例
// allowed - 中例（用于允许但不推荐的用法）
// good - 正例
// best - 最佳正例（多个正例中最好的实现）
```

## 如何参与

非常欢迎大家通过 [Issues](https://github.com/alibaba/f2e-spec/issues) 反馈问题和需求，或者通过 [PRs](https://github.com/alibaba/f2e-spec/pulls) 参与贡献，请参考 [CONTRIBUTING.md](/CONTRIBUTING.md)。

## Contribution Credits

Document writing & review (in no particular order):

- 邦彦
- 尘弦, [@lakerswgq](https://github.com/lakerswgq)
- 迟帆
- 大果
- 氐宿
- 法海
- 姬无
- 倞羽
- 连木
- 林熠
- 零弌
- 墨止
- 牧曈
- 霂之
- 年翼
- 清锐
- 萨波, [@bowei-jbw](https://github.com/bowei-jbw)
- 释然
- 湘粤（双龙）
- 苏青
- 阎罗
- 扬炀
- Guo Yunhe, [@guoyunhe](https://github.com/guoyunhe)
- 洋风
- 云谦
- 载天
- 梓骞
- 大貘
- 九十
- 狼叔
- 龙归
- 秦粤
- 上坡
- 死月
- 苏千
- 吞吞
- 潕量
- 艺璇
- 游鹿
- 裕波
- 张挺
- 知忧

Tool development & review (in no particular order):

- 尘弦, [@lakerswgq](https://github.com/lakerswgq)
- Guo Yunhe, [@guoyunhe](https://github.com/guoyunhe)
- 连木
- 牧曈
- 年翼
- 秦粤
- 萨波, [@bowei-jbw](https://github.com/bowei-jbw)
- 湘粤（双龙）
- 扬炀
- 洋风

Thanks for everyone who contributed to this project! If we missed someone, please let us know via [issues](https://github.com/alibaba/f2e-spec/issues) or
[pull requests](https://github.com/alibaba/f2e-spec/pulls)!
