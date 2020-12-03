module.exports = {
  rules: {
    // 统一在点号之前换行
    // @unessential
    'dot-location': ['warn', 'property'],

    // 禁止使用 eval
    // @unessential 部分场景必须使用 eval
    'no-eval': 'warn',

    // 禁止使用类 eval 的方法，如 setTimeout 传入字符串
    // @unessential
    'no-implied-eval': 'warn',

    // 禁止使用 javascript:url，如 location.href = 'javascript:void(0)';
    // @unessential
    'no-script-url': 'warn',

    // 禁止变量与外层作用域已存在的变量同名
    // @unessential
    'no-shadow': 'warn',

    // 禁止出现多个连续空格
    // @unessential
    'no-multi-spaces': [
      'warn',
      {
        ignoreEOLComments: false,
      },
    ],

    // 使用 2 个空格缩进
    // @unessential
    indent: 'off',

    // 使用分号
    // @unessential
    semi: 'off',

    // 分号必须写在行尾
    // @unessential
    'semi-style': 'off',

    // 不要直接在对象上调用 Object.prototypes 上的方法
    // @unessential
    'no-prototype-builtins': 'warn',
  },
};
