import stylistic from '@stylistic/eslint-plugin';
import defineConfig from '../utils/defineConfig';

export default defineConfig({
  name: 'ali/stylistic',
  plugins: { stylistic },
  rules: {
    // 强制在数组开括号后和闭括号前换行
    'stylistic/array-bracket-newline': 'off',

    // 方括号内部两侧无空格-数组
    'stylistic/array-bracket-spacing': ['error', 'never'],

    // 强制数组元素间换行
    'stylistic/array-element-newline': 'off',

    // 箭头函数-函数参数始终加上小括号
    // @reason 同 prettier 默认配置值一致：https://prettier.io/docs/en/options.html#arrow-function-parentheses
    'stylistic/arrow-parens': ['warn', 'always'],

    // 箭头函数的箭头前后各留一个空格
    // @unessential
    'stylistic/arrow-spacing': ['error', { before: true, after: true }],

    // 单行代码块的大括号内部两侧有空格
    'stylistic/block-spacing': ['error', 'always'],

    // 大括号换行风格：one true brace style 风格，且单行代码块可不换行
    'stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // 使用小驼峰命名风格
    camelcase: 'off',

    // 强制或禁止对注释的第一个字母大写
    'capitalized-comments': 'off',

    // 用逗号分隔的多行结构，始终加上最后一个逗号（单行不用）
    'stylistic/comma-dangle': ['error', 'always-multiline'],

    // 逗号的前面无空格，后面有空格
    'stylistic/comma-spacing': ['error', { before: false, after: true }],

    // 用逗号分隔的多行结构，将逗号放到行尾
    'stylistic/comma-style': ['error', 'last'],

    // 方括号内部两侧无空格-计算属性
    'stylistic/computed-property-spacing': ['error', 'never'],

    // 使用一致的 this 别名
    'consistent-this': 'off',

    // 统一在点号之前换行
    // @unessential
    'stylistic/dot-location': ['error', 'property'],

    // 在文件末尾保留一行空行
    'stylistic/eol-last': ['warn', 'always'],

    // 函数名与调用它的括号间无空格
    'stylistic/func-call-spacing': ['error', 'never'],

    // 要求函数名与赋值给它们的变量名或属性名相匹配
    'func-name-matching': [
      'off',
      'always',
      {
        includeCommonJSModuleExports: false,
      },
    ],

    // 要求或禁止命名的函数表达式
    'func-names': 'off',

    // 强制只能使用函数声明或函数表达式
    'func-style': 'off',

    // 在函数的小括号内使用一致的换行风格
    'stylistic/function-paren-newline': ['error', 'consistent'],

    // generator 函数的 * 号前面无空格，后面有一个空格
    // @unessential
    'stylistic/generator-star-spacing': ['error', { before: false, after: true }],

    // 禁用指定的标识符
    'id-blacklist': 'off',

    // 强制标识符的最小和最大长度
    'id-length': 'off',

    // 要求标识符匹配一个指定的正则表达式
    'id-match': 'off',

    // 隐式返回的箭头函数体不要换行
    // @reason 同 prettier 有冲突
    'stylistic/implicit-arrow-linebreak': ['off', 'beside'],

    // 使用 2 个空格缩进
    // @unessential
    'stylistic/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      },
    ],

    // 标签的属性有多行时，结束标签需另起一行
    // @unessential
    'stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],

    // JSX 属性或子元素强制使用花括号或禁止使用不必要的花括号
    'stylistic/jsx-curly-brace-presence': 'off',

    // JSX 属性的大括号内部两侧无空格
    // @unessential
    'stylistic/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

    // 不要在 JSX 属性的等号两边加空格
    // @unessential
    'stylistic/jsx-equals-spacing': ['error', 'never'],

    // 设置第一个属性的位置。multiline-multiprop：如果JSX标签占用多行并且有多个属性，则第一个属性应始终放在新行上
    // @unessential
    'stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

    // JSX 使用 2 个空格缩进
    // @unessential
    'stylistic/jsx-indent': ['error', 2],

    // JSX 属性使用 2 个空格缩进
    // @unessential
    'stylistic/jsx-indent-props': ['error', 2],

    // 标签属性的换行，如果标签有多个属性，且存在换行，则每个属性都需要换行独占一行
    // @unessential
    'stylistic/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

    // 使用大驼峰风格命名组件
    'stylistic/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],

    // JSX 行内属性间仅有一个空格
    // @unessential
    'stylistic/jsx-props-no-multi-spaces': 'error',

    // JSX 属性使用双引号，不要使用单引号
    // @unessential
    'stylistic/jsx-quotes': ['error', 'prefer-double'],

    // 属性按首字母排序
    'stylistic/jsx-sort-props': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],

    // 自闭合标签的斜线前有且仅有一个空格
    // @unessential
    'stylistic/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],

    // 多行的 JSX 标签需用小括号包裹
    // @unessential
    'stylistic/jsx-wrap-multilines': [
      'error',
      {
        declaration: true,
        assignment: true,
        return: true,
        arrow: true,
      },
    ],

    // 定义对象字面量时，key, value 之间有且只有一个空格
    'stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // 关键字前后各一个空格
    'stylistic/keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],

    // 单行注释应单独一行写在被注释对象的上方，不要追加在某条语句的后面
    'stylistic/line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],

    // 指定 unix 或 windows 风格的换行符
    'stylistic/linebreak-style': 'off',

    // 类成员之间保留一个空行
    'stylistic/lines-between-class-members': ['off', 'always', { exceptAfterSingleLine: false }],

    // 要求在注释周围有空行
    'stylistic/lines-around-comment': 'off',

    // 控制语句的嵌套层级不要过深，不要超过 4 级
    // @reason 适合做后置检查
    'max-depth': ['off', 4],

    // 单行最大字符数：100
    'stylistic/max-len': [
      'warn',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // 文件最大行数：1000
    // @reason 适合做后置检查
    'max-lines': [
      'off',
      {
        max: 1000,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // 函数最大行数：80
    // @reason 适合做后置检查
    'max-lines-per-function': [
      'off',
      {
        max: 80,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],

    // 回调函数最大嵌套深度
    'max-nested-callbacks': 'off',

    // 函数参数数量上限
    'max-params': ['off', 3],

    // 函数块最多允许的的语句数量
    'max-statements': ['off', 10],

    // 每一行中所允许的最大语句数量
    'stylistic/max-statements-per-line': ['off', { max: 1 }],

    /**
     * 【强制】interface/type 类型中保持一致的成员分隔符分号「;」，单行类型的最后一个元素不加分号
     * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
     */
    'stylistic/member-delimiter-style': 'error',

    // 多行注释的风格
    'stylistic/multiline-comment-style': ['off', 'starred-block'],

    // 要求或禁止在三元操作数中间换行
    'stylistic/multiline-ternary': ['off', 'never'],

    // 使用大驼峰风格命名类和构造函数
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
      },
    ],

    // 禁止在调用构造函数时省略小括号
    'stylistic/new-parens': 'error',

    // 在长方法链式调用时进行换行
    'stylistic/newline-per-chained-call': ['warn', { ignoreChainWithDepth: 4 }],

    // 不要使用 new Array() 和 Array() 创建数组，除非为了构造某一长度的空数组。
    'no-array-constructor': 'error',

    // 不要使用按位操作符
    'no-bitwise': 'warn',

    // 避免箭头函数与比较操作符产生混淆
    // @unessential
    'stylistic/no-confusing-arrow': 'error',

    // 禁用 continue 语句
    'no-continue': 'off',

    // 禁止不必要的小括号
    'stylistic/no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all', // delegate to eslint-plugin-react
        enforceForArrowConditionals: false,
      },
    ],

    // 禁止不必要的分号
    'stylistic/no-extra-semi': 'error',

    // 不要省略小数点前或小数点后的 0
    'stylistic/no-floating-decimal': 'error',

    // 禁止行内注释
    'no-inline-comments': 'off',

    // 禁止 if 作为唯一语句出现在 else 中，此时应写成 else if
    'no-lonely-if': 'error',

    // 混合使用多种操作符时，用小括号包裹分组
    'stylistic/no-mixed-operators': [
      'error',
      {
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['**', '+'],
          ['**', '-'],
          ['**', '*'],
          ['**', '/'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],

    // 不要混用空格和 tab
    'stylistic/no-mixed-spaces-and-tabs': 'error',

    // 禁止连续赋值
    'no-multi-assign': ['error'],

    // 禁止出现多个连续空格
    // @unessential
    'stylistic/no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
      },
    ],

    // 禁止出现多个（大于 2 个）连续空行
    'stylistic/no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

    // 禁用否定的表达式
    'no-negated-condition': 'off',

    // 不要使用嵌套的三元表达式
    'no-nested-ternary': 'error',

    // 使用字面量创建对象
    'no-new-object': 'error',

    // 不要使用一元自增自减运算符
    'no-plusplus': ['off', { allowForLoopAfterthoughts: true }],

    // 禁用特定的语法
    'no-restricted-syntax': 'off',

    // 禁止使用 tab
    'stylistic/no-tabs': 'error',

    // 禁用三元操作符
    'no-ternary': 'off',

    // 行尾不要留有空格
    'stylistic/no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],

    // 命名不要以下划线开头或结尾
    'no-underscore-dangle': 'off',

    // 避免不必要的三元表达式
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // 禁止属性调用前有空格
    'stylistic/no-whitespace-before-property': 'error',

    // 省略大括号的单行语句前不要换行
    'stylistic/nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

    // 强制大括号内换行符的一致性
    'stylistic/object-curly-newline': 'off',

    // 大括号内部两侧有空格
    'stylistic/object-curly-spacing': ['error', 'always'],

    // 对象的属性需遵循一致的换行风格：即所有属性要么都换行，要么都写在一行
    'stylistic/object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],

    // 一条声明语句声明一个变量
    'one-var': ['error', 'never'],

    // 一行声明一个变量
    'stylistic/one-var-declaration-per-line': ['error', 'always'],

    // 尽可能使用简写形式的赋值操作符
    'operator-assignment': ['warn', 'always'],

    // 强制操作符使用一致的换行符
    'stylistic/operator-linebreak': 'off',

    // 块的开始和结束不能是空行
    'stylistic/padded-blocks': ['warn', { blocks: 'never', classes: 'never', switches: 'never' }],

    // 要求或禁止在语句间填充空行
    'stylistic/padding-line-between-statements': 'off',

    // 使用扩展运算符替代 Object.assign
    'prefer-object-spread': 'off',

    // 对象字面量的属性名不要用引号包裹，除非包含特殊字符
    'stylistic/quote-props': [
      'error',
      'as-needed',
      { keywords: false, unnecessary: true, numbers: false },
    ],

    // 字符串优先使用单引号
    'stylistic/quotes': ['error', 'single', { avoidEscape: true }],

    // 使用 JSDoc 注释
    'require-jsdoc': 'off',

    // 剩余和扩展操作符与操作对象间不应有空格
    'stylistic/rest-spread-spacing': ['error', 'never'],

    // 使用分号
    // @unessential
    'stylistic/semi': ['error', 'always'],

    // 分号的前面无空格，后面有空格
    'stylistic/semi-spacing': ['error', { before: false, after: true }],

    // 分号必须写在行尾
    // @unessential
    'stylistic/semi-style': ['error', 'last'],

    // 要求对对象属性名排序
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // 要求对变量声明排序
    'sort-vars': 'off',

    // 块的左大括号前有一个空格
    'stylistic/space-before-blocks': 'error',

    // 函数声明时，对于命名函数，参数的小括号前无空格；对于匿名函数和 async 箭头函数，参数的小括号前有空格
    'stylistic/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // 小括号内部两侧无空格
    'stylistic/space-in-parens': ['error', 'never'],

    // 中缀操作符两侧有空格
    'stylistic/space-infix-ops': 'error',

    // 一元操作符两侧无空格，包括 -、+、--、++、!、!!
    'stylistic/space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],

    // 注释内容和注释符之间需留有一个空格
    'stylistic/spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!'],
          balanced: true,
        },
      },
    ],

    // switch 的 case 和 default 子句冒号前面无空格，后面有空格
    'stylistic/switch-colon-spacing': ['error', { after: true, before: false }],

    // 模板字符串中的大括号内部两侧无空格
    // @unessential
    'stylistic/template-curly-spacing': 'warn',

    // 模板字符串的 tag 后面无空格
    'stylistic/template-tag-spacing': ['error', 'never'],

    /**
     * 【强制】定义类型时应正确添加空格
     */
    'stylistic/type-annotation-spacing': 'error',

    // 要求或禁止 Unicode 字节顺序标记 (BOM)
    'unicode-bom': ['off', 'never'],

    // 将立即执行函数表达式（IIFE）用小括号包裹
    'stylistic/wrap-iife': ['error', 'any', { functionPrototypeMethods: false }],

    // 要求正则表达式被括号括起来
    'stylistic/wrap-regex': 'off',

    // yield* 表达式的 * 号前面无空格，后面有一个空格
    // @unessential
    'stylistic/yield-star-spacing': ['error', 'after'],
  },
});
