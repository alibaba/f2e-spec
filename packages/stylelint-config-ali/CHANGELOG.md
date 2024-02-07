# 更新日志

## 2.1.1 - 2024-02-07

- 更新依赖，解决版本冲突

## 2.1.0 (2023-12-18)

- 将 postcss 从 peerDependencies 改为 dependencies

## 2.0.0 (2023-12-15)

**破坏性变更：**

- 更新 stylelint 15.x 到 16.x
- 更新 stylelint-scss 5.x 到 6.x
- 更新 stylelint-less 2.x 到 3.x

## 1.1.0 (2023-10-11)

- 移除废弃的 stylelint 规则

## 1.0.0 (2023-09-13)

- 更新 stylelint 14.x 到 15.x
- 更新 stylelint-scss 2.x 到 5.x
- 增加 stylelint-less 初步支持

## 0.4.2 (2021-09-22)

### 变更

- color-hex-length 改为 warning 级别

## 0.4.1 (2020-12-03)

### 优化

- 修改 package.json 和 README

## 0.4.0 (2020-11-10)

### 变更

- 关闭规则：no-empty-source、block-no-empty

## 0.3.4 (2020-09-29)

### 修复

- 修复在开启 length-zero-no-unit 规则的情况下，使用自定义变量无法赋值 `0px` 等带单位 0 值的问题（添加了 `ignore: ["custom-properties"]`）

## 0.3.3 (2020-09-10)

### 修复

- 修复在开启 font-family-no-missing-generic-family-keyword 规则的情况下使用 iconfont 的时候会报错的问题，暂时将该规则移除

## 0.3.2 (2020-05-18)

### 修复

- 修复 vscode 插件打开 jsx 报错的问题（通过设置 ignoreFiles）
- 增加对小程序的支持：
  - unit-no-unknown 忽略 rpx
  - selector-type-no-unknown 忽略[小程序的选择器](https://opendocs.alipay.com/mini/component/overview-info)

## 0.3.1 (2020-02-03)

### 变更

- value-list-comma-space-after 规则由 always 调整为 always-single-line

## 0.3.0 (2020-01-09)

### 修复

- 更新 peerDependencies 依赖版本

## 0.2.6 (2019-10-17)

### 修复

- selector-pseudo-class-no-unknown ignorePseudoClasses 增加 export

## 0.2.5 (2019-08-30)

### 修复

- selector-pseudo-class-no-unknown ignorePseudoClasses 增加 local

## 0.2.4 (2019-07-16)

### 修复

- 修复 scss/operator-no-unspaced 规则导致 less 变量报错的问题，暂时将其注释

## 0.2.3 (2019-07-03)

### 修复

- 修复 selector-pseudo-class-no-unknown 规则的参数错误

## 0.2.2 (2019-06-28)

### 修复

- 修复 selector-pseudo-class-no-unknown 规则 less :global 报错的问题

## 0.2.1 (2019-06-28)

### 变更

- block-no-empty、keyframe-declaration-no-important 2 条规则不作为必修问题(essential)

## 0.2.0 (2019-04-25)

### 新增

- peerDependencies 新增 stylelint-scss 依赖
  - 用 scss/at-rule-no-unknown 规则代替 at-rule-no-unknown
  - 开启 scss/operator-no-unspaced、scss/double-slash-comment-whitespace-inside 2 条规则
- 新增 15 条 CSS 规约「推荐」级别的规则
- 新增 `stylelint-config-ali/essential` 出口，此出口未开启 CSS 规约「推荐」级别的规则，仅开启「强制」级别及 stylelint possible-errors 类名下的规则
- 增加测试

### 变更

- peerDependencies 的 stylelint 依赖增加 stylelint@10
- 关闭 no-descending-specificity 规则

# 0.1.1 - 2018-12-16

### 修复

- 修复 `color-hex-length`、`declaration-block-trailing-semicolon` 两条规则配置错误

# 0.1.0 - 2018-12-16

### 新增

- 开启 stylelint possible-errors 类目下的规则及 CSS 规约中「强制」级别的规则
