'use strict';

const rule = require('../../../src/rules/no-lowercase-component-name');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-lowercase-component-name', rule, {
  valid: [
    {
      filename: 'pages/App/index.jsx',
      code: `
      const App = () => {
        return (<p>hello world</p>);
      };

      export default App;
    `,
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],

  invalid: [
    {
      filename: 'src/components/app/index.jsx',
      code: '',
      errors: [
        {
          message: "It is not recommended to name components in lower case 'app'",
        },
      ],
    },
    {
      filename: 'src/pages/App/index.jsx',
      code: `
      const app = () => {
        return (<p>hello world</p>);
      };

      export default app;
    `,
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: "It is not recommended to name components in lower case 'app'",
        },
      ],
    },
  ],
});
