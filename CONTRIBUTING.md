# 如何参与

## 仓库介绍

仓库的主要目录如下：

```markdown
.
├── docs 规约文档
│   ├── coding 编码规约目录
│   └── engineering 工程规约目录
├── packages 配套工具
│   ├── commitlint-config-ali commitlint配置包
│   ├── eslint-config-ali ESLint配置包
│   ├── eslint-plugin-ali ESLint plugin，目前未在ESLint配置包中默认引入
│   ├── f2elint 一键工具
│   ├── markdownlint-config-ali markdownlint配置包
│   └── stylelint-config-ali stylelint配置包
├── CHANGELOG.md
├── CONTRIBUTING.md
└── README.md
```

`docs/` 目录还未开放。`packages/` 目录，其中有 6 个 npm 包的源码，分别是 `f2elint`、4 个 `xx-config-ali` 以及 `eslint-plugin-ali`。

4 个 `xx-config-ali` 是不同规约对应的 Linter 的规则配置包，它们和规约文档及 Lint 工具对应关系如下：

| 规约 | Lint 工具 | 规则包 |
| -------- | -------- | -------- |
| 《JavaScript 编码规约》 <br/> 《TypeScript 编码规约》 <br/> 《React 编码规约》 <br/> 《Rax 编码规约》 <br/> 《Node.js 开发规约》     |  [ESLint](https://eslint.org/)   | [eslint-config-ali](https://www.npmjs.com/package/eslint-config-ali) |
| 《CSS 编码规约》     |  [stylelint](https://stylelint.io/)  | [stylelint-config-ali](https://www.npmjs.com/package/stylelint-config-ali) |
| 《Git 规约》     |  [commitlint](https://commitlint.js.org/#/)  | [commitlint-config-ali](https://www.npmjs.com/package/commitlint-config-ali) |
| 《文档通用规约》     |  [markdownlint](https://github.com/DavidAnson/markdownlint)  | [markdownlint-config-ali](https://www.npmjs.com/package/markdownlint-config-ali) |

[f2elint](https://www.npmjs.com/package/f2elint) 是封装了 4 个 xx-config-ali 及相关依赖的一键工具。

你可以到相应的 `xx-config-ali` 目录修改和查看具体规则，或者到 `f2elint` 目录查看和修改 f2elint 的代码。

## 提交 PR

欢迎[提交 PR](https://github.com/alibaba/f2e-spec/pulls)，通过后会由仓库 Maintainers 发布 npm 版本。

PR 的标题和 git commit message header 请遵循以下约定：

```bash
<type>[optional scope]: <subject>
```

type 用来描述本次改动的类型，可选值及对应含义如下：

- feat: 新增功能
- fix: 修复 bug
- docs: 文档相关的改动
- style: 对代码的格式化改动，代码逻辑并未产生任何变化(例如代码缩进，分号的移除和添加)
- test: 新增或修改测试用例
- refactor: 重构代码或其他优化举措
- chore: 项目工程方面的改动，代码逻辑并未产生任何变化
- revert: 恢复之前的提交

scope 用来描述本次提交所涉及到的改动范围（例如模块、功能或其他任何限定的范围），subject 用来概括和描述本次提交的改动内容。

以下示例都是符合规范的：

```markdown
fix(f2elint): 修复 xxx 问题
feat(eslint-config-ali): 新增 xxx 规则
docs(stylelint-config-ali): 优化 README
```
