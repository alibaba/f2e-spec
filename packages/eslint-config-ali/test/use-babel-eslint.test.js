const assert = require('assert');
const eslint = require('eslint');
const path = require('path');

describe('test/use-babel-eslint.test.js', () => {
  it('babel-eslint parser run well for react', async () => {
    const configPath = './react.js';
    const filePath = path.join(__dirname, './fixtures/use-babel-eslint.jsx');

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    const results = await cli.lintFiles([filePath]);
    const { messages, errorCount, fatalErrorCount, warningCount } = results[0];

    assert.equal(fatalErrorCount, 0);
    assert.equal(errorCount, 27);
    assert.equal(warningCount, 7);

    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf('react/') !== -1;
    });

    assert.notEqual(errorReportedByReactPlugin.length, 0);
  });

  it('babel-eslint parser run well for vue', async () => {
    const configPath = './vue.js';
    const filePath = path.join(__dirname, './fixtures/vue.vue');

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    const results = await cli.lintFiles([filePath]);
    const { errorCount, fatalErrorCount, warningCount } = results[0];

    assert.equal(fatalErrorCount, 0);
    assert.equal(errorCount, 4);
    assert.equal(warningCount, 0);
  });
});
