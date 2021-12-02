module.exports = {
  rules: {
    // 箭头函数的箭头前后各留一个空格
    // @unessential
    'arrow-spacing': ['warn', { before: true, after: true }],

    // generator 函数的 * 号前面无空格，后面有一个空格
    // @unessential
    'generator-star-spacing': ['warn', { before: false, after: true }],

    // 避免箭头函数与比较操作符产生混淆
    // @unessential
    'no-confusing-arrow': 'warn',

    // 回调函数使用箭头函数而不是匿名函数
    // @unessential
    'prefer-arrow-callback': [
      'warn',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],

    // 优先使用 const，只有当变量会被重新赋值时才使用 let
    // @unessential
    'prefer-const': [
      'warn',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],

    // 模板字符串中的大括号内部两侧无空格
    // @unessential
    'template-curly-spacing': 'warn',

    // yield* 表达式的 * 号前面无空格，后面有一个空格
    // @unessential
    'yield-star-spacing': ['warn', 'after'],

    // import 语句需要放到模块的最上方
    // @unessential
    'import/first': 'warn',

    // 使用对象属性和方法的简写语法
    // @unessential
    'object-shorthand': [
      'warn',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],

    // 使用 const 或 let 声明变量，不要使用 var
    // @unessential
    'no-var': 'warn',
  },
};
