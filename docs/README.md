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
  - [Node.js Coding Specification](coding/node.md)
  - [TypeScript Coding Specification](coding/typescript.md)
- Engineering
  - [Git Specification](engineering/git.md)
  - [Writing Specification](engineering/writing.md)
  - [Changelog Specification](engineering/changelog.md)

Tools help you to quickly integrate code checking into your projects. Tools include the following:

| Package name              | Package version                                                  | Weekly downloads                                                    |
| ------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------- |
| [f2elint]                 | ![version](https://img.shields.io/npm/v/f2elint)                 | ![downloads](https://img.shields.io/npm/dw/f2elint)                 |
| [eslint-config-ali]       | ![version](https://img.shields.io/npm/v/eslint-config-ali)       | ![downloads](https://img.shields.io/npm/dw/eslint-config-ali)       |
| [stylelint-config-ali]    | ![version](https://img.shields.io/npm/v/stylelint-config-ali)    | ![downloads](https://img.shields.io/npm/dw/stylelint-config-ali)    |
| [prettier-config-ali]     | ![version](https://img.shields.io/npm/v/prettier-config-ali)     | ![downloads](https://img.shields.io/npm/dw/prettier-config-ali)     |
| [commitlint-config-ali]   | ![version](https://img.shields.io/npm/v/commitlint-config-ali)   | ![downloads](https://img.shields.io/npm/dw/commitlint-config-ali)   |
| [markdownlint-config-ali] | ![version](https://img.shields.io/npm/v/markdownlint-config-ali) | ![downloads](https://img.shields.io/npm/dw/markdownlint-config-ali) |

[f2elint]: https://www.npmjs.com/package/f2elint
[eslint-config-ali]: https://www.npmjs.com/package/eslint-config-ali
[stylelint-config-ali]: https://www.npmjs.com/package/stylelint-config-ali
[prettier-config-ali]: https://www.npmjs.com/package/prettier-config-ali
[commitlint-config-ali]: https://www.npmjs.com/package/commitlint-config-ali
[markdownlint-config-ali]: https://www.npmjs.com/package/markdownlint-config-ali

## Getting started

```
$ npx f2elint@latest

┌  🚀 阿里巴巴前端规约 6.3.1
│
◇  📁 选择项目位置
│  /Users/guo/git/logistics-tariffs
│
◇  🧰 选择预设模版
│  React
│
◇  💅 启用 Stylelint 样式检查
│  Yes
│
◇  💅 启用 Prettier 代码格式化
│  Yes
│
◇  👮‍ 启用 Lint Staged 检查
│  Yes
│
◇  👮‍ 启用 Commitlint 检查
│  Yes
│
◇  ✅ 初始化项目完成
│
◇  📦 安装或更新依赖
│  tnpm
│
◇  ✅ 安装依赖成功
│
└  🎉 规约初始化完成，建议安装推荐的 VS Code 插件并重启 VS Code
```

To upgrade in future, simply run the same command again.

## Specification format

### Specification level and lint rules

According to the strength of the strictness, specification rules are classified into three levels:

- `mandatory`: must follow. Breaking the rule can cause serious defects. And the rule itself doesn't
  cause any defects (false positive, etc.). Lint tool severity is `error`.
- `recommended`: follow whenever possible. Breaking the rule can affect code quality but not serious.
  Or the rule itself may cause defects (false positive, etc.). Lint tool severity is `warn`.
- `referenced`: understand and keep in mind. Breaking the rule is not always bad. Lint tools is not
  smart enough to evaludate your code. Developers need to make decision on their own. Lint tool
  severity is `off` or not supportted.

Rule strictness level is marked at the beginning, while lint tool rule, if exists, is marked at the end.

> 1.1.1 `mandatory` Use 2 space indent eslint: [indent](https://eslint.org/docs/rules/indent)

### Code example

To make it more intuitive, the specification description is usually followed by code examples. For example:

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

1. `bad` for NOT recommended practice
2. `good` for recommended practice
3. spaces may be replaced with `∙` to make it easier to count

## How to participate

[Issues](https://github.com/alibaba/f2e-spec/issues) and [pull requests](https://github.com/alibaba/f2e-spec/pulls)
are welcome. You can read more information at [CONTRIBUTING.md](https://github.com/alibaba/f2e-spec/blob/main/CONTRIBUTING.md).

## Contribution credits

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
