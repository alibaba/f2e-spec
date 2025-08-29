# 阿里巴巴前端规约

**《阿里巴巴前端规约》** 是在阿里巴巴集团内广泛使用的一套前端编码和工程规范，致力于通过统一编码风格、普及最佳实践和代码缺陷检查帮助团队降低协作成本、提升前端项目的可维护性和稳定性。

本规约主要包括**规约文档**和**规约工具**两部分。您可以通过阅读规约文档了解各前端语言、框架及工程规范，并使用 等配套工具来为项目接入规约检查。

规约文档帮助您理解规约细节并编写高质量的代码。规约文档包括：

- 编码规约
  - [HTML 编码规约](coding/html.md)
  - [CSS 编码规约](coding/css.md)
  - [JavaScript 编码规约](coding/javascript.md)
  - [React 编码规约](coding/react.md)
  - [Node.js 开发规约](coding/node.md)
  - [TypeScript 编码规约](coding/typescript.md)
- 工程规约
  - [Git 规约](engineering/git.md)
  - [文档通用规约](engineering/writing.md)
  - [更新日志规约](engineering/changelog.md)

规约工具帮助您将代码检查能力快速集成到项目中。规约工具包括：

| 包名                      | 版本                                                             | 周下载量                                                            |
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

## 快速开始

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

未来更新只需要运行相同的命令即可。

## 单条规约格式说明

### 规约级别和对应的 Lint 规则

根据约束力强弱，一条规约依次分为强制、推荐、参考三个级别：

- `强制`: 必须遵守。是不得不遵守的约定，违反本约定或将会引起严重的后果。如有对应 Lint 规则，配套规则包中级别为 `error`。
- `推荐`: 尽量遵守。长期遵守这样的规定，有助于系统稳定性和合作效率的提升。如有对应 Lint 规则，配套规则包中级别为 `warn`。
- `参考`: 充分理解。技术意识的引导，是个人学习、团队沟通、项目合作的方向。如有对应 Lint 规则，配套规则包中默认为 `off` 或不支持。

一条规约的级别会在规约描述的开头标注，如有对应的 Lint 规则会在结尾标注，例如：

> 1.1.1 `强制` 使用 2 个空格缩进。eslint: [indent](https://eslint.org/docs/rules/indent)

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

1. `bad` 表示**不推荐**的用法
2. `good` 表示**推荐**的用法
3. 空格有时候会被 `∙` 替代以方便计数

## 如何参与

非常欢迎大家通过 [Issues](https://github.com/alibaba/f2e-spec/issues) 反馈问题和需求，或者通过
[PRs](https://github.com/alibaba/f2e-spec/pulls) 参与贡献，请参考
[CONTRIBUTING.md](https://github.com/alibaba/f2e-spec/blob/main/CONTRIBUTING.md)。

## 贡献署名

文档撰写与审阅（排名不分先后）：

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

- 尘弦, [@lakerswgq](https://github.com/lakerswgq)
- [鹤仙（郭云鹤）](https://github.com/guoyunhe)
- 连木
- 牧曈
- 年翼
- 秦粤
- 萨波, [@bowei-jbw](https://github.com/bowei-jbw)
- 湘粤（双龙）
- 扬炀
- 洋风

诚挚感谢每一位大佬对本项目的贡献！如有遗漏，请通过 [Issues](https://github.com/alibaba/f2e-spec/issues) 或
[Pull Requests](https://github.com/alibaba/f2e-spec/pulls) 告诉我们！
