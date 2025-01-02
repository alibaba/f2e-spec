import { ESLint } from 'eslint';
import path from 'path';
import { base } from '../src';

// Lint the package source code
it('should pass self lint', async () => {
  const cli = new ESLint({
    baseConfig: base,
    overrideConfigFile: true,
    ignore: true,
  });

  const reports = await cli.lintFiles([path.join(import.meta.dirname, '../src')]);
  expect(reports.reduce((count, { errorCount }) => errorCount + count, 0)).toBe(0);
});
