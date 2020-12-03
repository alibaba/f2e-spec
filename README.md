# 阿里巴巴前端规约及配套工具

[![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)

## 简介

「阿里巴巴前端规约」是在阿里经济体内广泛使用的一套前端编码和工程规范，致力于通过统一编码风格、普及最佳实践和代码缺陷检查帮助降低团队协作成本、提升前端项目的可维护性和稳定性。

本项目主要包括「规约文档」和「配套工具」两部分，目前只开放了「配套工具」部分，你可以使用 [F2ELint](https://www.npmjs.com/package/f2elint) 等配套工具来为项目接入规约。

### 1. 规约文档

规约文档主要分为编码规约和工程规约两大类，包括：

- 编码规约
  - HTML 编码规约
  - CSS 编码规约
  - JavaScript 编码规约
  - TypeScript 编码规约
  - React 编码规约
  - Rax 编码规约
  - Node.js 开发规约
- 工程规约
  - Git 规约
  - 文档通用规约
  - 更新日志规约
  - 前后端协作规约

规约文档目前暂未对外开放，敬请期待……

### 2. 配套工具

我们引入了多个业界流行的 Linter 作为规约文档的配套工具，并根据规约内容定制了对应的规则包，它们包括：

| 规约 | Lint 工具 | 规则包 |
| -------- | -------- | -------- |
| 《JavaScript 编码规约》 <br/> 《TypeScript 编码规约》 <br/> 《React 编码规约》 <br/> 《Rax 编码规约》 <br/> 《Vue 编码规约》 <br/> 《Node.js 开发规约》     |  [ESLint](https://eslint.org/)   | [eslint-config-ali](https://www.npmjs.com/package/eslint-config-ali) |
| 《CSS 编码规约》     |  [stylelint](https://stylelint.io/)  | [stylelint-config-ali](https://www.npmjs.com/package/stylelint-config-ali) |
| 《Git 规约》     |  [commitlint](https://commitlint.js.org/#/)  | [commitlint-config-ali](https://www.npmjs.com/package/commitlint-config-ali) |
| 《文档通用规约》     |  [markdownlint](https://github.com/DavidAnson/markdownlint)  | [markdownlint-config-ali](https://www.npmjs.com/package/markdownlint-config-ali) |

可以看到这些 Linter 和规则包众多且零散，全部安装它们会给项目增加十几个依赖，接入和升级成本都比较高。

因此我们封装了 [F2ELint](https://www.npmjs.com/package/f2elint) 这个 npm 包，它收敛屏蔽了这些依赖和配置细节，提供简单的 CLI 和 Node.js API，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规约的成本。

你可以使用 [F2ELint](https://www.npmjs.com/package/f2elint) 方便地为项目接入全套规约 Lint，也可以根据需求单独安装 xx-config-ali 和相关 Linter。

## 如何参与

非常欢迎大家通过 [Issues](https://github.com/alibaba/f2e-spec/issues) 反馈问题和需求，或者通过 [PRs](https://github.com/alibaba/f2e-spec/pulls) 参与贡献，请参考 [CONTRIBUTING.md](/CONTRIBUTING.md)。
