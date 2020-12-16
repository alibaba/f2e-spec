'use strict';

const rule = require('../../../src/rules/no-js-in-ts-project');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-js-in-ts-project', rule, {
  valid: [
    {
      filename: 'index.ts',
      code: '',
    },
    {
      filename: '.stylelintrc.js',
      code: '',
    },
    {
      filename: 'home.ts',
      code: '',
    },
  ],

  invalid: [
    {
      filename: 'home.js',
      code: '',
      errors: [
        {
          message: "The 'home.js' is not recommended in TS project",
        },
      ],
    },
  ],
});
