const miniappTags = [
  'page',
  'swiper',
  'icon',
  'radio',
  'checkbox',
  'slider',
  'picker',
  'navigator',
  'lifestyle',
];

module.exports = {
  defaultSeverity: 'warning',
  rules: {
    'block-no-empty': null,
    'color-no-invalid-hex': true,
    'comment-no-empty': true,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': null, // @reason 使用 iconfont 字体时会报错
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'keyframe-declaration-no-important': true,
    'media-feature-name-no-unknown': true,
    'no-descending-specificity': null, // @reason 实际有很多这样用的，且多数人熟悉 css 优先级
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': null,
    'no-invalid-double-slash-comments': true,
    'property-no-unknown': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local', 'export'],
      },
    ],
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
        ignoreTypes: miniappTags,
      },
    ],
    'string-no-newline': true,
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],

    /**
     * Stylistic issues
     * @link https://stylelint.io/user-guide/rules/list#stylistic-issues
     */
    'color-hex-length': 'short',
    'comment-whitespace-inside': 'always',
    'declaration-block-single-line-max-declarations': 1,
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
      },
    ],
    'selector-max-id': 0,
  },
  overrides: [
    // scss language support
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      plugins: ['stylelint-scss'],
      rules: {
        // conflict css rules to disable
        // turn off CSS @ rule check, to support @include, @mixin usage in scss
        'at-rule-no-unknown': null,

        // stylelint-scss rules
        // https://github.com/stylelint-less/stylelint-less

        'scss/double-slash-comment-whitespace-inside': 'always',
      },
    },
    // less language support
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      plugins: ['stylelint-less'],
      rules: {
        // conflict css rules to disable
        // turn off CSS @ rule check, to support @ variable usage in less
        'at-rule-no-unknown': null,

        // stylelint-less rules
        // https://github.com/stylelint-less/stylelint-less

        // don't allow duplicate variable declarations
        'less/no-duplicate-variables': true,
      },
    },
  ],
  // don't support css-in-js because there are too many different implementations
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
};
