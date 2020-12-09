# no-js-in-ts-project

不推荐在项目中同时存在 `js` 和 `ts` 文件。
## 规则内容

**错误示例**，ts 项目中包含 js 文件:

```Bash
.
├── index.ts
├── home.js
└── tsconfig.json
```

 **正确示例**:

```Bash
.
├── index.ts
├── home.ts
└── tsconfig.json
```

## 规则选项

默认当存在 `commitlint.config.js`, `eslintrc.js`, `prettierrc.js`, `stylelintrc.js` 文件时不会报错，支持自定义设置文件白名单：

```json
"ali/no-secret-info": [<enabled>, ['customFileName']]
```
