# 更新日志

## 16.1.0 - 2025-03-03

- 将 `@typescript-eslint/no-empty-interface` 更改为 `@typescript-eslint/no-empty-object-type` 并增加
  `{ allowInterfaces: 'with-single-extends' }` 选项

## 16.0.3 - 2025-02-26

- 修复 `typescript` 不存在时报错

## 16.0.2 - 2025-02-26

- 修复 `.gitignore` 不存在时报错

## 16.0.1 - 2025-02-26

- 修复 `@babel/eslint-parser` 找不到依赖的问题

## 16.0.0 - 2025-02-22

- **破坏性变更**: 移除了 `eslint` 8.x 支持，仅支持 `eslint` 9.x
- **破坏性变更**: 产物改为 ESM，移除了原有文件导出，只导出单一默认对象
- **破坏性变更**: 移除 `rax`, `jsx-a11y`, `es5`, `node`, `egg`, `vue` 配置
- 支持 `.gitignore` (仅限项目根目录)，不再需要 `.eslintignore` 文件
- 引入 `@stylistic/eslint-plugin` 统一 JS/TS/JSX 代码风格类规则

## 15.1.0 - 2024-07-27

- 升级 `@typescript-eslint/eslint-plugin` 6.x 到 7.x
- 升级 `@typescript-eslint/parser` 6.x 到 7.x

## 15.0.1 - 2024-04-03

- 修复 `typescript/egg` 导入规则路径错误

## 15.0.0 - 2024-02-06

- **BREAKING CHANGE** `node` 和 `typescript/node` 不再提供 egg 相关的配置，请使用 `egg` 和 `typescript/egg` 替代
- **BREAKING CHANGE** 升级 `vue-eslint-parser` 7.x 到 9.x
- **BREAKING CHANGE** 升级 `eslint-plugin-vue` 7.x 到 9.x

## 14.2.1 (2023-12-18)

- 修复 TypeScript 中 `no-undef` 误报的问题

## 14.2.0 (2023-12-18)

- 将插件和配置添加到依赖
  - @babel/core
  - @babel/eslint-parser
  - @babel/preset-react
  - eslint-config-egg

## 14.1.0 (2023-12-18)

- 将插件和配置添加到依赖
  - eslint-import-resolver-typescript
  - eslint-plugin-import
  - eslint-plugin-react
  - eslint-plugin-react-hooks
  - @typescript-eslint/eslint-plugin
  - @typescript-eslint/parser

## 14.0.2 (2022-09-06)

- react 规约 `react/display-name` 调整为 `warn`

## 14.0.1 (2022-06-16)

- ts 规约 `no-redeclare` 规则调整，增加对函数重载的支持

## 14.0.0 (2022-03-16)

- 与 `eslint-plugin-import` 的推荐配置对齐，升级后若有由 alias 和 external 引起的报错，[解决方法见此](https://github.com/alibaba/f2e-spec/pull/72)：
  - `import/no-unresolved` 从 `off` 改为 `error`
  - `import/named` 从 `off` 改为 `error`
  - `import/default` 从 `off` 改为 `error`
  - `import/namespace` 从 `off` 改为 `error`
  - `import/export` 从 `off` 改为 `error`
- 使用 `eslint-import-resolver-typescript` 解析路径以支持 `tsconfig.json` 的 `paths`

## 13.1.0 (2022-01-21)

- `no-param-reassign` 增加对 `immer` 的支持

## 13.0.0 (2021-11-15)

- 将 `babel-eslint` 替换为 `@babel/eslint-parser`
- 更新 `@typescript-eslint/eslint-plugin` 及 `@typescript-eslint/parser` 版本（[说明](https://github.com/typescript-eslint/typescript-eslint/issues/3738)），支持 ESLint 8.x
- 升级 `eslint-config-egg` 到 10.x
- 启用 `template-curly-spacing` 为 warn

## 12.2.2 (2021-09-14)

### 删除

- `react/no-did-mount-set-state`
- `react/no-did-update-set-state`

## 12.2.1 (2021-08-12)

### 变更

- TS 规范 parserOptions 加回 createDefaultProgram 配置，兼容所有 tsconfig 配置。已知多包仓库 ESLint 检测速度会变慢。若检测速度非常慢，可考虑增量扫描或者使用下面配置加速：

```js
{
  parserOptions: {
    project: [],
    createDefaultProgram: false,
  },
  rules: {
    '@typescript-eslint/dot-notation': 'off'
  }
}
```

## 12.2.0 (2021-08-05)

### 变更

- TS 规范 parserOptions 去除 createDefaultProgram ，提升性能。

## 12.1.0 (2021-04-27)

### 新增

- Rax 规则支持通过 `eslint-plugin-jsx-plus` 校验 JSX+ 语法

## 12.0.2 (2021-04-23)

### 变更

- 更新依赖
  - peerDependencies eslint `>=7.0.0` -> `>=6.8.0` 兼容更多原有项目。

## 12.0.1 (2021-02-24)

### 文档

- 修复 v12 readme 中依赖版本未修改改的问题

## 12.0.0 (2021-02-03)

### 变更

- 升级依赖
  - eslint [v6 -> v7](https://eslint.org/docs/user-guide/migrating-to-7.0.0)
  - eslint-plugin-vue v6 -> v7
  - typescript v3 -> v4

## 11.4.1 (2020-12-03)

### 文档

- 修复 readme 表格展示问题

## 11.4.0 (2020-12-03)

### 变更

- 关闭规则 `lines-between-class-members`
- 调整部分 /essential 规则

### 优化

- 优化 Readme 和部分规则注释
- 调整代码结构
- package.json 中增删一些字段

## 11.3.1 (2020-11-24)

### 修复

- `no-shadow` 在 typescript 规则下禁用，改为使用 `@typescript-eslint/no-shadow`，错误等级遵循 JS 规约

## 11.3.0 (2020-11-19)

主要涉及 node 和 typescript/node 的规则变动，具体如下：

### 新增

- 新增 eslint-config-ali/node。删除原有 base/node 规则内容，删除原因见 [nodejscommonjs-rules-have-been-deprecated](https://eslint.org/docs/user-guide/migrating-to-7.0.0#nodejscommonjs-rules-have-been-deprecated)。修改后继承 [eslint-config-egg/lib/rules/node](https://github.com/eggjs/eslint-config-egg/blob/master/lib/rules/node.js) 规则。具体规则如下：
  - `mandatory` node/no-new-require
  - `mandatory` node/prefer-global/buffer
  - `mandatory` node/prefer-global/console
  - `mandatory` node/prefer-global/process
  - `mandatory` node/prefer-promises/dns
  - `mandatory` node/prefer-promises/fs
- 新增 eslint-config-ali/typescript/node，继承 Node 规则和 Typescript 规则。

## 11.2.0 (2020-11-10)

### 变更

- 新增规则：`arrow-parens'': ['warn', 'always']`
- 关闭规则：no-plusplus、no-return-await、implicit-arrow-linebreak
- 增加 [root: ture](https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy)

### 修复

- 修复 /essential 规则的报错

### 文档

- Readme 增加配合 prettier 使用的方法

## 11.1.1 (2020-10-26)

### 修复

- TS 规则增加 parserOptions.createDefaultProgram，修复未在 tsconfig.json 中 included 的文件报错

## 11.1.0 (2020-10-20)

### 新增

- 新增 Rax 规约配套规则：增加 eslint-config-ali/rax 和 eslint-config-ali/typescript/rax

## 11.0.0 (2020-10-13)

主要涉及 TS 规约的 lint config 和 guide 重构，具体如下：

### 新增

- `recommended` 使用 @ts-expect-error/@ts-ignore/@ts-nocheck/@ts-check 等指令时需跟随注释描述
- `mandatory` 禁止使用 tslint:<rule-flag> 等相关注释
- `recommended` 类的属性如果是字面量，则必须是只读属性而不能用 getter
- `mandatory` 类型断言必须使用 as Type 而非 <T>，对象字面量禁止类型断言（断言成 any 除外）
- `recommended` 优先使用 interface 而不是 type 定义对象类型
- `mandatory` 优先使用 . 访问对象的属性
- `recommended` 设置类的成员的可访问性，public 可省略
- `mandatory` interface/type 类型中保持一致的成员分隔符分号「;」，单行类型的最后一个元素不加分号
- `recommended` 类成员的遵循一定的排序规则

1. 类的静态方法/属性(static)优先于实例的方法/属性(instance)
2. 属性(field)优先于构造函数(constructor)，优先于方法(method)
3. 公开的项(public)优先于受保护的(protected)，优先于私有的(private)

- `recommended` interface 中的方法用属性的方式定义
- `recommended` 禁止使用容易混淆的非空断言
- `recommended` 禁止出现空的 interface
- 【关闭】禁止多余的 non-null 断言
- `recommended` 禁止给一个初始化时直接赋值为 number, string 的变量显式的声明类型
- `mandatory` 禁止使用无意义的 void 类型，void 只能用在函数的返回值中
- `mandatory` 禁止使用 namespace 来定义命名空间，但允许使用 declare namespace 定义外部命名空间
- `mandatory` 禁止在 optional chaining 之后使用 non-null 断言
- `recommended` 不建议将 this 赋值给其他变量，解构赋值除外
- `recommended` 当设定当前值为当前类型时，推荐使用 as const 替代 as 'bar'
- `mandatory` 禁止使用 module 来定义命名空间，declare module 是允许的
- `recommended` 使用加号时，两者必须同为数字或同为字符串
- `mandatory` 三斜杠导入语法已废弃，在非 dts 文件中禁止使用
- `mandatory` 定义类型时应正确添加空格
- `mandatory` interface 和 type 定义时必须声明成员的类型
- `recommended` 定义函数时，优先使用参数的联合类型而不是函数的类型重载

### 变更

- 禁止使用指定的类型：强制 -> 关闭
- 【关闭】限制各种变量或类型的命名规则：`@typescript-eslint/camelcase` -> `@typescript-eslint/naming-convention`

### 修复

- TS 规则 extraFileExtensions: ['.vue']

### 文档

- 重写前端规约 TypeScript 部分
- 增加 parserOptions.project 链接

## 10.2.2 (2020-09-27)

- fix: spaced-comment markers 增加 /，以支持 ts 三斜线指令

## 10.2.1 (2020-09-25)

- docs: xima 链接替换为 f2elint

## 10.2.0 (2020-09-10)

- feat: 新增 jsx-a11y 规则集

## 10.1.1 (2020-08-03)

- fix: 修改规则
  - `'import/prefer-default-export': 'off'`
  - `'require-yield': 'error'`

## 10.1.0 (2020-07-29)

- 新启用规则
  - `'react/no-access-state-in-setstate': 'error'`
  - `'react/jsx-props-no-multi-spaces': 'error'`，essential 中为 `'warn'`

## 10.0.0 (2020-07-06)

- feat: 引入 babel-eslint 作为 JS 项目默认 parser
- feat: [settings.react.version](https://www.npmjs.com/package/eslint-plugin-react#configuration) 改为 detect（如果本地没有装 react，CLI 会报一个 Warning）
- feat: ecmaVersion 升到 2020

## 9.1.2 (2020-07-01)

- fix: 增加 peerDependencies 声明 "eslint": ">=6.8.0"

## 9.1.1 (2020-06-28)

- fix: 删除 @typescript-eslint/ban-ts-ignore 规则

## 9.1.0 (2020-06-28)

- chore: @typescript-eslint 和 eslint-plugin-react-hooks 依赖版本升至最新
- docs: 增加 xima 链接

## 9.0.2 (2019-12-23)

### 文档

- 修改 Changelog，补充对 v9 版本 comma-dangle 规则带来的 Breaking changes

## 9.0.1 (2019-12-23)

### 修复

- 移除规则：@typescript-eslint/no-angle-bracket-type-assertion

## 9.0.0 (2019-12-23)

### Breaking Changes

- 依赖升级：eslint v6 及其他依赖升级
- comma-dangle 规则对函数参数也生效，即多行的函数参数末尾需要使用逗号

### 新增

- 新启用规则：no-useless-catch

## 8.0.2 (2019-07-23)

### 修复

- @typescript-eslint/no-use-before-define 规则调整为跟 no-use-before-define 一致

## 8.0.1 (2019-07-17)

### 变更

- ecmaVersion 升级到 2019

## 8.0.0 (2019-07-17)

### Breaking Changes

- 依赖的 plugin 和 parser 不再以 peerDependencies 声明，而是让用户完全根据文档手动安装：因为本包支持的项目类型变多，比如用户是 JS + React 的项目，那提示他装 ts、vue 的 plugin 和 parser 就不太合理，后面可能提供一个 cli 工具

### 新增

- 增加 TypeScript 支持

## 7.1.0 (2019-07-10)

### 新增

- env（全局变量环境）增加几个测试框架：mocha、jasmine、jest

### 变更

- react/default-props-match-prop-types 级别由 error 降为 warn
- 以下规则在 essential 中进行降级为 warn：
  - no-prototype-builtins
  - object-shorthand
  - no-var

## 7.0.0 (2019-07-04)

### 新增

- 增加 Vue 支持，通过 eslint-config-ali/vue 使用

### Breaking Changes

- 新增依赖 eslint-plugin-vue 和 vue-eslint-parser 两个依赖

## 6.1.1 (2019-07-03)

### 修复

- essential 中降级一些未降级的规则

## 6.1.0 (2019-06-25)

### 新增

- 增加 essential 级别出口：该级别更加宽松，仅将「必要」的规则设置为 error 级别，默认出口中大部分不会引起 bug 的规则（如风格问题）级别从 error 被降级为 warn

## 6.0.0 (2019-04-03)

### Breaking Changes

- 新增依赖 [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)，以支持 [react hooks 规则](https://reactjs.org/docs/hooks-rules.html)。升级 v6 后，需手动安装 eslint-plugin-react-hooks 依赖

### 新增

- 新启用 2 条 react-hooks 规则：`react-hooks/rules-of-hooks`、`react-hooks/exhaustive-deps`

## 5.0.1 (2019-01-10)

### 变更

- docs: README 修改

## 5.0.0 (2019-01-10)

### Breaking Changes

- v5 版本相比 v4 对大量规则的错误级别进行了调整，以与 JS 规约中的规则级别对齐。升级后代码的 lint 结果可能有些变化，需进行人工 check

### 新增

- 新增 /essential 级别出口文件，关闭部分有争议的或因业务无法规避的问题。以供某些卡点场景使用
- test: 增加测试

### 变更

- docs: 大部分规则增加中文注释说明

## 4.1.0 (2018-12-17)

### 新增

- 新启用规则：
  - 'react/no-this-in-sfc': 'error'

### 变更

- 调整规则：
  - `react/jsx-closing-tag-location` 由 off 改为 error
  - `react/no-did-mount-set-state` 由 off 改为 warn
  - `react/no-did-update-set-state` 由 error 改为 warn
  - `react/sort-comp` 由 warn 改为 off
  - `no-empty` 由 error 改为 warning
  - `newline-per-chained-call` 由 error 改为 warning

## 4.0.0 (2018-09-14)

### Breaking Changes

- ESLint 依赖升级到 [v5](https://eslint.org/docs/user-guide/migrating-to-5.0.0)

### 新增

- 新启用规则：
  - 'no-async-promise-executor': 'error'
  - 'no-misleading-character-class': 'error'
  - 'require-atomic-updates': 'error'
  - 'import/no-self-import': 'error'
  - 'import/no-cycle': ['error', { maxDepth: Infinity }]
  - 'import/no-useless-path-segments': 'error'

### 变更

- `parserOptions.ecmaVersion` 参数由 `2017` 升级到 `2018`，去除废弃的 experimentalObjectRestSpread 参数（对非 es5 规则包）
- 调整规则：
  - `function-paren-newline` 由 off 改为 ['error', 'consistent']
  - `no-return-assign` 由 error 改为 ['error', 'always']
  - `implicit-arrow-linebreak` 由 off 改为 ['warn', 'beside']

## 3.2.0 (2018-09-14)

### 变更

- 调整规则：
  - 关闭了 2 个阈值限定的规则，包括 `complexity` 和 `max-depth`。此类问题在编码过程中会引起大片段报错，让人想关掉它们。这类问题比较适合做后置检查
  - `import/first` 由 ['error', 'absolute-first'] 调整为 error
  - `react/react-in-jsx-scope` 由 error 改为 off：如 rax 这类包装过的框架此规则不适用
  - `react/sort-comp` 由 error 改为 warn，并细化 lifecycle、增加 instance-variables 和 instance-methods
  - `react/jsx-no-target-blank` 由 error 改为 warn

## 3.1.0 (2018-03-13)

### 新增

- 新启用规则：
  - complexity 开启为 `['warn', 20]`
  - max-depth 开启为 `['warn', 4]`

### 变更

- 调整规则：
  - react/jsx-filename-extension 增加`.js`类型
  - default-case 降为 warn 警告级别 `['warn', { commentPattern: '^no default$' }]`
  - arrow-parens 降为 warn 级别

## 3.0.1 (2018-01-19)

### 变更

- 调整规则：
  - class-methods-use-this 由 warn 改为 off
  - vars-on-top 由 warn 改为 off

## 3.0.0 (2018-01-18)

### Breaking Changes

- v3 版本开启了一批 ESLint 官方和 react 插件新增的规则，同时对原有规则做了一些调整。另外，调整了包的代码结构。

### 新增

- 新启用规则：
  - lines-between-class-members error
  - no-useless-return error
  - no-restricted-globals error
  - prefer-destructuring warn
  - react/no-unused-state error
  - react/default-props-match-prop-types error
  - react/no-redundant-should-component-update error
  - react/no-typos error

### 变更

- 调整规则：
  - no-param-reassign off 改为 warn
  - guard-for-in off 改为 warn
  - no-floating-decimal warn 改为 error
  - no-else-return 由 warn 改为 off
  - newline-per-chained-call: 由 off 改为 ['error', { ignoreChainWithDepth: 4 }],
  - max-len 由 120 行调整为 100 行，增加对包含字符串、模板字符串、正则的行的忽略
  - new-cap 由 warn 改为 error
  - import/no-amd 由 off 改为 error
  - react/prefer-stateless-function 由 warn 改为 off
  - react/require-default-props 由 warn 改为 off

## 2.0.3 (2017-09-05)

### 变更

- 调整规则：
  - linebreak-style: 报错级别由['error', 'unix']改为 off

## 2.0.2 (2017-09-05)

### 变更

- 调整规则：
  - react/forbid-prop-types: 报错级别由"error"调整为"warn"
  - new-cap: 报错级别由"error"调整为"warn"

## 2.0.1 (2017-08-01)

### 变更

- 调整规则：
  - no-plusplus: 由"error"调整为["error", { allowForLoopAfterthoughts: true }]

## 2.0.0 (2017-06-28)

### Breaking Changes

- 升级如下依赖：
  - ESLint 版本从 v3 升级到 v4
  - eslint-plugin-react 从^6.3.0 升级到^7.1.0
  - eslint-plugin-import 从^1.16.0 升级到^2.6.0

## 1.0.3 (2017-06-28)

### 修复

- v1 版本继续支持 ESLint v3

## 1.0.2 (2017-06-28)

### 变更

- 依赖升级到 ESLint v4
- 调整规则：
  - max-len: 由 200 调整为 120
  - comma-dangle: es6 使用"always-multiline", es5 使用"never"
- style: 错误等级由数字改为字符串
- fix: 去掉 top-level 的 ecmaFeatures 属性，以修复 [ESLint v4 报错](https://github.com/eslint/eslint/issues/8726)

## 1.0.1 (2017-05-16)

### 变更

- docs: README 中安装方式更新
- 调整规则：consistent-return, radix

## 1.0.0 (2016-12-06)

### 新增

- 基于 [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) v.12.0.0 封装一层规则
