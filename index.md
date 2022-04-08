# 阿里巴巴前端规约及配套工具

[![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)

## 简介

「阿里巴巴前端规约」是在阿里经济体内广泛使用的一套前端编码和工程规范，致力于通过统一编码风格、普及最佳实践和代码缺陷检查帮助团队降低协作成本、提升前端项目的可维护性和稳定性。

本项目主要包括「规约文档」和「配套工具」两部分。你可以通过阅读规约文档了解各前端语言、框架及工程规范，并使用 [F2ELint](https://www.npmjs.com/package/f2elint) 等配套工具来为项目接入规约检查。

### 规约文档

规约文档分为编码规约和工程规约两大类，包括：

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

### 配套工具

我们引入了多个业界流行的 Linter 作为规约文档的配套工具，并根据规约内容定制了对应的规则包，它们包括：

| 规约 | Lint 工具 | 规则包 |
| -------- | -------- | -------- |
| 《JavaScript 编码规约》 <br/> 《TypeScript 编码规约》 <br/> 《React 编码规约》 <br/> 《Rax 编码规约》 <br/> 《Node.js 开发规约》     |  [ESLint](https://eslint.org/)   | [eslint-config-ali](https://www.npmjs.com/package/eslint-config-ali) |
| 《CSS 编码规约》     |  [stylelint](https://stylelint.io/)  | [stylelint-config-ali](https://www.npmjs.com/package/stylelint-config-ali) |
| 《Git 规约》     |  [commitlint](https://commitlint.js.org/#/)  | [commitlint-config-ali](https://www.npmjs.com/package/commitlint-config-ali) |
| 《文档通用规约》     |  [markdownlint](https://github.com/DavidAnson/markdownlint)  | [markdownlint-config-ali](https://www.npmjs.com/package/markdownlint-config-ali) |

可以看到这些 Linter 和规则包众多且零散，全部安装它们会给项目增加十几个依赖，接入及后续升级成本都比较高。

因此我们封装了 [F2ELint](https://www.npmjs.com/package/f2elint) 这个 npm 包，它收敛屏蔽了这些依赖和配置细节，提供简单的 CLI 和 Node.js API，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规约的成本。

你可以使用 [F2ELint](https://www.npmjs.com/package/f2elint) 方便地为项目接入全套规约 Lint，也可以根据需求单独安装 xx-config-ali 和相关 Linter。

## 如何参与

非常欢迎大家通过 [Issues](https://github.com/alibaba/f2e-spec/issues) 反馈问题和需求，或者通过 [PRs](https://github.com/alibaba/f2e-spec/pulls) 参与贡献，请参考 [CONTRIBUTING.md](/CONTRIBUTING.md)。

## 贡献者信息

文档撰写人员（排名不分先后）：邦彦、尘弦、迟帆、大果、氐宿、法海、姬无、倞羽、连木、林熠、零弌、墨止、牧曈、霂之、年翼、清锐、萨波、释然、双龙、苏青、阎罗、扬炀、洋风、云谦、载天、梓骞

文档审阅人员（排名不分先后）：大貘、九十、狼叔、龙归、秦粤、上坡、死月、苏千、吞吞、潕量、艺璇、游鹿、裕波、张挺、知忧

工具编写人员（排名不分先后）：尘弦、鹤仙、连木、牧曈、年翼、秦粤、萨波、双龙、扬炀、洋风

## 引用信息及鸣谢

本项目的文档部分参考或引用了许多优秀的业界开源规范、标准化文档和技术官网，它们主要包括：

- [Airbnb Style Guide](https://github.com/airbnb/javascript)
- [Google Style Guide](https://google.github.io/styleguide)
- [Code Guide by @mdo](http://codeguide.co)
- [ecomfe/spec](https://github.com/ecomfe/spec)
- [Conventional Commits](https://www.conventionalcommits.org)
- [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog/CHANGELOG.md)
- [MDN Web 开发者文档](https://developer.mozilla.org/zh-CN/docs/Web)
- [React 官方文档](https://reactjs.org/docs/)
- [谷歌 Web 开发者文档](https://developers.google.com/web)

更详细的引用说明请参见各规约文档的「参考资料」章节。

本项目的配套工具使用了多个优秀的 Linter、Formatter 及社区生态，主要包括：

- [ESLint](https://eslint.org) 及[多个 plugin 和 parser](https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-config-ali#eslint-config-ali)
- [stylelint](https://stylelint.io/) 及 [stylelint-scss](https://github.com/kristerkari/stylelint-scss)
- [commitlint](https://commitlint.js.org/#/) 及 [conventional-changelog-conventionalcommits](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-conventionalcommits)
- [markdownlint](https://github.com/DavidAnson/markdownlint)

在此表示感谢，如有侵权行为，敬请联系我们 :-)
