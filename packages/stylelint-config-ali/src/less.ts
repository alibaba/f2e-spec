import type { Config } from 'stylelint';

// less language support
export default {
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
} satisfies Config & { files: string[] };
