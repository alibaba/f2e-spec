const assert = require('assert');
const { ESLint } = require('eslint');

describe('test/self-lint.test.js', () => {
  it('Repo self should pass lint', async () => {
    const cli = new ESLint({
      baseConfig: {
        extends: require.resolve('../index'),
      },
      ignore: true,
      ignorePath: './.eslintignore',
    });

    const reports = await cli.lintFiles(['.']);
    assert.equal(
      reports.reduce((count, { errorCount }) => errorCount + count, 0),
      0,
    );
  });
});
