# 阿里巴巴前端规约

## 前言

「阿里巴巴前端规约」是在阿里经济体内广泛使用的一套前端编码和工程规范，致力于通过统一编码风格、普及最佳实践和代码缺陷检查帮助团队降低协作成本、提升前端项目的可维护性和稳定性。

「阿里巴巴前端规约」主要包括「规约文档」和「配套工具」两部分。你可以通过阅读规约文档了解各前端语言、框架及工程规范，并使用 [F2ELint](https://www.npmjs.com/package/f2elint) 等配套工具来为项目接入规约检查。

「规约文档」分为编码规约和工程规约两大类，包括：

- 编码规约
  - [HTML 编码规约](docs/coding/1.html-style-guide.md)
  - [CSS 编码规约](docs/coding/2.css-style-guide.md)
  - [JavaScript 编码规约](docs/coding/3.javascript-style-guide.md)
  - [React 编码规约](docs/coding/4.react-style-guide.md)
  - [Node.js 开发规约](docs/coding/5.node-style-guide.md)
  - [TypeScript 编码规约](docs/coding/6.typescript-style-guide.md)
  - [Rax 编码规约](docs/coding/7.rax-style-guide.md)
- 工程规约
  - [Git 规约](docs/engineering/1.git.md)
  - [文档通用规约](docs/engineering/2.doc-writing-practice.md)
  - [更新日志规约](docs/engineering/3.doc-changelog.md)

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

## 贡献署名

文档撰写与审阅（排名不分先后）：

- 邦彦
- [尘弦（王光奇）](https://github.com/lakerswgq)
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
- [萨波](https://github.com/bowei-jbw)
- 释然
- 湘粤（双龙）
- 苏青
- 阎罗
- 扬炀
- [鹤仙（郭云鹤）](https://github.com/guoyunhe)
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

工具开发与审阅（排名不分先后）：

- [尘弦（王光奇）](https://github.com/lakerswgq)
- [鹤仙（郭云鹤）](https://github.com/guoyunhe)
- 连木
- 牧曈
- 年翼
- 秦粤
- [萨波](https://github.com/bowei-jbw)
- 湘粤（双龙）
- 扬炀
- 洋风

诚挚感谢每一位大佬对本项目的贡献！如有遗漏，请通过 [Issues](https://github.com/alibaba/f2e-spec/issues) 或
[Pull Requests](https://github.com/alibaba/f2e-spec/pulls) 告诉我们！
