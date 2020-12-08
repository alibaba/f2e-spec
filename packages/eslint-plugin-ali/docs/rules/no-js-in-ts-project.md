# no-js-in-ts-project

It is not recommended to use js and ts files at the same time

## Rule Details

Examples of **incorrect** directory for this rule:(contains xx.js in ts project)

```Bash
.
├── index.ts
├── home.js
└── tsconfig.json
```

Examples of **correct** code for this rule:

```Bash
.
├── index.ts
├── home.ts
└── tsconfig.json
```
