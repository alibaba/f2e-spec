'use strict';

const rule = require('../../../src/rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://test.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://test.com';",
      output: "var test = 'https://test.com';",
      errors: [
        {
          message: 'Recommended "http://test.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://test.com' />",
      output: "<img src='https://test.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://test.com" switch to HTTPS',
        },
      ],
    },
  ],
});
