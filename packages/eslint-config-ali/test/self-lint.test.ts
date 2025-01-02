import { ESLint } from 'eslint';
import path from 'path';
import { base } from '../src';

describe('test/self-lint.test.js', () => {
  it('Repo self should pass lint', async () => {
    const cli = new ESLint({
      baseConfig: base,
      overrideConfigFile: true,
      ignore: true,
    });

    const reports = await cli.lintFiles([path.join(import.meta.dirname, '../src')]);
    expect(reports.reduce((count, { errorCount }) => errorCount + count, 0)).toBe(0);
  });
});
