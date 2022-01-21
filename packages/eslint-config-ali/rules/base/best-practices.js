module.exports = {
  rules: {
    // 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': 'off',

    // 某些数组方法的回调函数中必须包含 return 语句
    'array-callback-return': ['error', { allowImplicit: true }],

    // 把 var 语句看作是在块级作用域范围之内，不能在块外使用
    'block-scoped-var': 'error',

    // 强制类的方法使用 this
    'class-methods-use-this': [
      'off',
      {
        exceptMethods: [],
      },
    ],

    // 设置圈复杂度最大值
    // @reason IDE 插件会把大段代码标红，影响编码体验，此类问题适合做后置检查
    complexity: ['off', 10],

    // 要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': 'off',

    // 多行语句必须用大括号包裹，单行语句推荐用大括号包裹
    curly: ['error', 'multi-line'],

    // switch 语句需要始终包含 default 分支
    'default-case': ['warn', { commentPattern: '^no default$' }],

    // 统一在点号之前换行
    // @unessential
    'dot-location': ['error', 'property'],

    // 优先使用 . 访问对象的属性
    'dot-notation': ['error', { allowKeywords: true }],

    // 使用严格相等运算符
    eqeqeq: ['warn', 'always', { null: 'ignore' }],

    // for-in 循环中需要对 key 进行验证
    'guard-for-in': 'warn',

    // enforce a maximum number of classes per file
    'max-classes-per-file': 'off',

    // 禁止使用 alert
    'no-alert': 'warn',

    // 禁止使用 arguments.caller 和 arguments.callee
    'no-caller': 'error',

    // case 或 default 字句出现词法声明时，必须用块包裹
    'no-case-declarations': 'error',

    // 禁止使用看起来像除法的正则表达式
    'no-div-regex': 'off',

    // 如果一个 if 语句的结果总是返回一个 return 语句，那么最后的 else 是不必要的
    // @reason 很多人习惯写 else return
    'no-else-return': 'off',

    // 不要出现空函数
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],

    // 不要在解构中出现空模式，即 {} 或 []
    'no-empty-pattern': 'error',

    // 与 null 的比较必须使用严格等于操作符
    'no-eq-null': 'off',

    // 禁止使用 eval
    // @unessential 部分场景必须使用 eval
    'no-eval': 'error',

    // 禁止扩展原生对象
    'no-extend-native': 'error',

    // 禁止不必要的 .bind() 调用
    'no-extra-bind': 'error',

    // 禁止不必要的 label
    'no-extra-label': 'error',

    // 不要让 case 语句落空
    'no-fallthrough': 'error',

    // 不要省略小数点前或小数点后的 0
    'no-floating-decimal': 'error',

    // 禁止对原生对象或只读的全局对象进行赋值
    'no-global-assign': ['error', { exceptions: [] }],

    // 禁止使用较短的符号实现类型转换
    'no-implicit-coercion': [
      'off',
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],

    // 禁止在全局范围使用变量和函数声明
    // @reason 这条在 "parserOptions": { "sourceType": "module" } 下不起作用
    'no-implicit-globals': 'off',

    // 禁止使用类 eval 的方法，如 setTimeout 传入字符串
    // @unessential
    'no-implied-eval': 'error',

    // 禁止在 class 外使用 this
    'no-invalid-this': 'off',

    // 禁止使用 __iterator__ 属性
    'no-iterator': 'error',

    // 不要使用 label
    'no-labels': ['warn', { allowLoop: false, allowSwitch: false }],

    // 禁止使用不必要的代码块
    'no-lone-blocks': 'error',

    // 禁止在循环中的函数内出现外部作用域中定义且会发生变化的变量，以防止闭包副作用
    'no-loop-func': 'error',

    // 禁用魔术数字
    'no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],

    // 禁止出现多个连续空格
    // @unessential
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
      },
    ],

    // 禁止使用多行字符串
    'no-multi-str': 'error',

    // 禁止单独 new 一个构造函数而不用于赋值或比较
    'no-new': 'error',

    // 不要使用 Function 构造函数创建函数
    'no-new-func': 'error',

    // 不要使用 new Number/String/Boolean
    'no-new-wrappers': 'error',

    // 禁用八进制字面量
    'no-octal': 'error',

    // 禁止在字符串字面量中使用八进制转义序列，如 var foo = 'Copyright \251';
    'no-octal-escape': 'error',

    // 不要修改函数参数
    'no-param-reassign': [
      'warn',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'draft', // for immer
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
        ],
      },
    ],

    // 禁止使用 __proto__ 属性
    'no-proto': 'error',

    // 不要重复声明变量和函数
    'no-redeclare': 'error',

    // 禁止使用某些对象的某些属性
    'no-restricted-properties': 'off',

    // 禁止在 return 语句中赋值
    'no-return-assign': ['error', 'always'],

    // 禁止不必要的 return await
    'no-return-await': 'off',

    // 禁止使用 javascript:url，如 location.href = 'javascript:void(0)';
    // @unessential
    'no-script-url': 'error',

    // 禁止自我赋值
    'no-self-assign': 'error',

    // 禁止自我比较
    'no-self-compare': 'error',

    // 禁止使用逗号操作符，除非用于 for 循环条件或明确用小括号包裹
    'no-sequences': 'error',

    // 不要抛出字面量异常
    'no-throw-literal': 'warn',

    // 禁用不变的循环条件
    'no-unmodified-loop-condition': 'off',

    // 禁止出现未使用的表达式
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],

    // 禁止未使用的标签
    'no-unused-labels': 'error',

    // 禁用不必要的 .call() 和 .apply()
    'no-useless-call': 'off',

    // 禁用不必要的 catch
    'no-useless-catch': 'error',

    // 禁止不必要的字符串拼接
    'no-useless-concat': 'error',

    // 禁止不必要的转义字符
    'no-useless-escape': 'error',

    // 禁止多余的 return; 语句
    'no-useless-return': 'error',

    // 不要使用 void 运算符
    'no-void': 'error',

    // 禁止在注释中使用特定的警告术语
    'no-warning-comments': ['off', { terms: ['todo', 'fixme'], location: 'start' }],

    // 禁止使用 with
    'no-with': 'error',

    // Promise 的 reject 需要传入 Error 对象
    'prefer-promise-reject-errors': ['warn', { allowEmptyReject: true }],

    // 使用 parseInt() 方法时总是带上基数
    radix: 'warn',

    // 禁止使用不带 await 表达式的 async 函数
    'require-await': 'off',

    // 强制正则使用 u 参数
    'require-unicode-regexp': 'off',

    // 要求所有的 var 声明出现在它们所在的作用域顶部
    'vars-on-top': 'off',

    // 将立即执行函数表达式（IIFE）用小括号包裹
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: false }],

    // 使用 color === 'red' 而不是 'red' === color
    yoda: 'warn',
  },
};
