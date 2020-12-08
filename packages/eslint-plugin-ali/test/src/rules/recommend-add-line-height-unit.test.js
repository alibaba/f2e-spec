'use strict';

const rule = require('../../../src/rules/recommend-add-line-height-unit');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('recommend-add-line-height-unit', rule, {
  valid: [
    {
      filename: 'index.js',
      code: 'var style = { position: "relative", lineHeight: "30px" };',
    },
  ],

  invalid: [
    {
      filename: 'index.js',
      code: 'var style = { position: "relative", lineHeight: 30 };',
      errors: [
        {
          message: 'Please add unit (like px, rpx ...) for "lineHeight: 30 " in "index.js".',
        },
      ],
    },
    {
      filename: 'index.jsx',
      code: '<p style={{ lineHeight: 10 }}>hello world</p>',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Please add unit (like px, rpx ...) for "lineHeight: 10 " in "index.jsx".',
        },
      ],
    },
  ],
});
