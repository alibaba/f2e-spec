import type { Config } from 'stylelint';

// scss language support
export default {
  files: ['*.scss', '**/*.scss'],
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-scss'],
  rules: {
    // conflict css rules to disable
    // turn off CSS @ rule check, to support @include, @mixin usage in scss
    'at-rule-no-unknown': null,

    // stylelint-scss rules
    // https://github.com/stylelint-scss/stylelint-scss

    'scss/double-slash-comment-whitespace-inside': 'always',
  },
} satisfies Config & { files: string[] };
