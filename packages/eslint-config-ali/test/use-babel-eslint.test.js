const assert = require('assert');
const eslint = require('eslint');
const path = require('path');

describe('test/use-babel-eslint.test.js', () => {
  it('babel-eslint parser run well for react', () => {
    const configPath = './react.js';
    const filePath = path.join(__dirname, './fixtures/use-babel-eslint.jsx');

    const cli = new eslint.CLIEngine({
      configFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    const reports = cli.executeOnFiles([filePath]);
    const results = reports.results[0];
    const errorReportedByReactPlugin = results.messages.filter(result => {
      return result.ruleId && result.ruleId.indexOf('react/') !== -1;
    });

    assert.notEqual(errorReportedByReactPlugin.length, 0);
  });

  it('babel-eslint parser run well for vue', () => {
    const configPath = './vue.js';
    const filePath = path.join(__dirname, './fixtures/vue.vue');

    const cli = new eslint.CLIEngine({
      configFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    const reports = cli.executeOnFiles([filePath]);
    const results = reports.results[0];

    assert.ok(results.messages.length > 1);
  });
});
