module.exports = {
  rules: {
    // 箭头函数-函数体风格
    // @reason 允许灵活使用
    'arrow-body-style': [
      'off',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    // 箭头函数-函数参数始终加上小括号
    // @reason 同 prettier 默认配置值一致：https://prettier.io/docs/en/options.html#arrow-function-parentheses
    'arrow-parens': ['warn', 'always'],

    // 箭头函数的箭头前后各留一个空格
    // @unessential
    'arrow-spacing': ['error', { before: true, after: true }],

    // 子类的 constructor 中必须使用 super，非子类的 constructor 中不能使用 super
    'constructor-super': 'error',

    // generator 函数的 * 号前面无空格，后面有一个空格
    // @unessential
    'generator-star-spacing': ['error', { before: false, after: true }],

    // 禁止对类声明变量重新赋值
    'no-class-assign': 'error',

    // 避免箭头函数与比较操作符产生混淆
    // @unessential
    'no-confusing-arrow': 'error',

    // 禁止修改 const 声明的变量
    'no-const-assign': 'error',

    // 避免重复的类成员命名
    'no-dupe-class-members': 'error',

    // 不要用多个 import 引入同一模块
    // @reason replacedBy import/no-duplicates
    'no-duplicate-imports': 'off',

    // 禁止使用 new Symbol
    'no-new-symbol': 'error',

    // 禁止特定的 import
    'no-restricted-imports': [
      'off',
      {
        paths: [],
        patterns: [],
      },
    ],

    // 在 constructor 中，禁止在调用 super() 前使用 this 或 super 关键字
    'no-this-before-super': 'error',

    // 对象的属性名不要使用无必要的计算属性
    'no-useless-computed-key': 'error',

    // 避免不必要的 constructor
    'no-useless-constructor': 'error',

    // 禁止在解构/import/export时进行无用的重命名
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],

    // 使用 const 或 let 声明变量，不要使用 var
    // @unessential
    'no-var': 'error',

    // 使用对象属性和方法的简写语法
    // @unessential
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],

    // 回调函数使用箭头函数而不是匿名函数
    // @unessential
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],

    // 优先使用 const，只有当变量会被重新赋值时才使用 let
    // @unessential
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],

    // 使用对象和数组的解构
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // 禁止使用 parseInt() 进行二、八、十六禁止转换
    'prefer-numeric-literals': 'off',

    // 使用 rest 操作符替代 arguments 对象
    'prefer-rest-params': 'warn',

    // 使用扩展运算符 ... 替代 apply()
    'prefer-spread': 'warn',

    // 使用模板字符串替代字符串拼接
    'prefer-template': 'warn',

    // generator 函数内必须有 yield 语句
    'require-yield': 'error',

    // 剩余和扩展操作符与操作对象间不应有空格
    'rest-spread-spacing': ['error', 'never'],

    // 为 import 排序
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],

    // 创建 Symbol 时必须传入参数
    'symbol-description': 'warn',

    // 模板字符串中的大括号内部两侧无空格
    // @unessential
    'template-curly-spacing': 'warn',

    // yield* 表达式的 * 号前面无空格，后面有一个空格
    // @unessential
    'yield-star-spacing': ['error', 'after'],
  },
};
