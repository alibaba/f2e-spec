const assert = require('assert');
const eslint = require('eslint');

describe('test/self-lint.test.js', () => {
  it('Repo self should pass lint', () => {
    const cli = new eslint.CLIEngine({
      configFile: './.eslintrc.js',
      ignore: true,
      ignorePath: './.eslintignore',
    });

    const reports = cli.executeOnFiles(['.']);
    assert.equal(reports.errorCount, 0);
  });
});
