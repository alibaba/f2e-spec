module.exports = {
  extends: [
    '../react',
    './rules/set-style-to-warn',
    './rules/blacklist',
    './rules/es6-blacklist',
  ].map(require.resolve),
  rules: {
    // 标签的属性有多行时，结束标签需另起一行
    // @unessential
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],

    // JSX 语法闭合标签的缩进和换行
    // @unessential
    'react/jsx-closing-tag-location': 'warn',

    // JSX 行内属性间仅有一个空格
    // @unessential
    'react/jsx-props-no-multi-spaces': 'warn',

    // JSX 属性的大括号内部两侧无空格
    // @unessential
    'react/jsx-curly-spacing': ['warn', 'never', { allowMultiline: true }],

    // JSX 属性使用 2 个空格缩进
    // @unessential
    'react/jsx-indent-props': ['off', 2],

    // 标签属性的换行，如果标签有多个属性，且存在换行，则每个属性都需要换行独占一行
    // @unessential
    'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],

    // 禁止使用已经废弃的方法
    // @unessential
    'react/no-deprecated': 'warn',

    // 多行的 JSX 标签需用小括号包裹
    // @unessential
    'react/jsx-wrap-multilines': [
      'warn',
      {
        declaration: true,
        assignment: true,
        return: true,
        arrow: true,
      },
    ],

    // 设置第一个属性的位置。multiline-multiprop：如果JSX标签占用多行并且有多个属性，则第一个属性应始终放在新行上
    // @unessential
    'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],

    // 不要在 JSX 属性的等号两边加空格
    // @unessential
    'react/jsx-equals-spacing': ['warn', 'never'],

    // JSX 使用 2 个空格缩进
    // @unessential
    'react/jsx-indent': ['off', 2],

    // 不要使用 findDOMNode，严格模式下已经弃用
    // @unessential
    'react/no-find-dom-node': 'warn',

    // 自闭合标签的斜线前有且仅有一个空格
    // @unessential
    'react/jsx-tag-spacing': [
      'warn',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],
  },
};
