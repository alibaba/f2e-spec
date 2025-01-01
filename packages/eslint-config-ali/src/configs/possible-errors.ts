import type { Linter } from 'eslint';

const possibleErrors: Linter.Config = {
  name: 'ali/possible-errors',
  rules: {
    // for 循环中的计数器应朝着正确方向移动
    'for-direction': 'error',

    // getter 需要有返回值
    'getter-return': ['error', { allowImplicit: true }],

    // 不要使用 async 函数作为 Promise 的 executor
    'no-async-promise-executor': 'error',

    // 不要在循环中使用 await，应使用 Promise.all()
    'no-await-in-loop': 'warn',

    // 不要与负零进行比较
    'no-compare-neg-zero': 'error',

    // 不要在条件表达式中使用赋值语句
    'no-cond-assign': ['error', 'always'],

    // 生产环境禁止使用 console
    'no-console': 'warn',

    // 不要在条件表达式中使用常量
    'no-constant-condition': 'warn',

    // 禁止在正则中使用 ctrl 键的 ASCII 码
    'no-control-regex': 'off',

    // 禁止使用 debugger
    'no-debugger': 'error',

    // 函数的参数列表中禁止出现重复命名的参数
    'no-dupe-args': 'error',

    // 对象中禁止出现重复命名的 key
    'no-dupe-keys': 'error',

    // switch 语句中禁止出现重复的 case
    'no-duplicate-case': 'error',

    // 不要出现空代码块
    'no-empty': 'error',

    // 禁止在正则中使用空字符集 []，这不能匹配任何字符，可能是 typo
    'no-empty-character-class': 'error',

    // 禁止对 catch 的入参重新赋值
    'no-ex-assign': 'error',

    // 避免不必要的布尔类型转换
    'no-extra-boolean-cast': 'error',

    // 不要对函数声明重新赋值
    'no-func-assign': 'error',

    // 不要在块中使用函数声明
    'no-inner-declarations': 'error',

    // 禁止在 RegExp 构造函数中使用无效的正则表达式
    'no-invalid-regexp': 'error',

    // 禁止不规则的空白符
    'no-irregular-whitespace': 'error',

    // 禁止在正则的字符集语法 [] 中使用由多个字符点构成的字符
    'no-misleading-character-class': 'error',

    // 禁止将全局对象 Math、JSON、Reflect 当作函数进行调用
    'no-obj-calls': 'error',

    // 不要直接在对象上调用 Object.prototypes 上的方法
    // @unessential
    'no-prototype-builtins': 'error',

    // 禁止在正则表达式中出现多个连续空格
    'no-regex-spaces': 'error',

    // 禁用稀疏数组，如 var items = [,,];
    'no-sparse-arrays': 'error',

    // 不要在普通字符串中出现模板字符串占位语法，如 "Hello ${name}!"，旨在防错写。
    // 但不排除有时普通字符串内容就是这样，因此这条开为 warn 级别
    'no-template-curly-in-string': 'warn',

    // 避免令人困惑的多行表达式，多是由不加分号导致
    'no-unexpected-multiline': 'error',

    // 不要在 return 等语句之后出现不可达的代码
    'no-unreachable': 'error',

    // 禁止在 finally 中出现控制流语句，如 return, throw, break 或 continue
    'no-unsafe-finally': 'error',

    // 禁止对关系运算符左边的运算元使用否定操作符，包括 in 和 instanceof
    'no-unsafe-negation': 'error',

    // 避免因使用 await 或 yield 导致的竞争性赋值
    'require-atomic-updates': 'warn',

    // 使用 Number.isNaN()，而不是直接与 NaN 进行比较
    'use-isnan': 'error',

    // 使用有效的 JSDoc 注释
    'valid-jsdoc': 'off',

    // 同 typeof 表达式结果进行比较的值必须是有效的字符串，即 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
    'valid-typeof': ['error', { requireStringLiterals: true }],
  },
};

export default possibleErrors;
