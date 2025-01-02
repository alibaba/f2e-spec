import { ESLint } from 'eslint';
import path from 'node:path';
import { react } from '../src';

it('should lint jsx files', async () => {
  const filePath = path.join(import.meta.dirname, './bad/use-babel-eslint.jsx');

  const cli = new ESLint({
    baseConfig: react,
    overrideConfigFile: true,
    ignore: true,
  });

  const results = await cli.lintFiles([filePath]);
  const { messages, errorCount, fatalErrorCount, warningCount } = results[0];

  expect(fatalErrorCount).toBe(0);
  expect(errorCount).toBe(20);
  expect(warningCount).toBe(7);

  const errorReportedByReactPlugin = messages.filter((result) => {
    return (
      (result.ruleId && result.ruleId.startsWith('react/')) ||
      result.ruleId.startsWith('react-hooks/')
    );
  });

  expect(errorReportedByReactPlugin.length).toBe(3);
});

describe('good', () => {
  ['react-hooks.jsx', 'react-hooks.tsx'].forEach((file) => {
    it(`should pass lint for ${file}`, async () => {
      const cli = new ESLint({
        baseConfig: react,
        overrideConfigFile: true,
        ignore: true,
      });

      const results = await cli.lintFiles(path.join(import.meta.dirname, 'good', file));

      expect(results[0].fatalErrorCount).toBe(0);
      expect(results[0].errorCount).toBe(0);
      expect(results[0].warningCount).toBe(0);
    });
  });
});
