import path from 'path';
import fs from 'fs-extra';
import glob from 'glob';
import markdownlint from 'markdownlint';
import markdownlintRuleHelpers from 'markdownlint-rule-helpers';
import stylelint from 'stylelint';
import { PKG_NAME, STYLELINT_FILE_EXT, MARKDOWN_LINT_FILE_EXT } from 'utils/constants';
import {
  getMarkdownlintConfig,
  formatMarkdownlintResults,
  getStylelintConfig,
  formatStylelintResults,
  doStylelint,
} from 'lints';
import type { ScanOptions, ScanResult, PKG, Config, ScanReport } from 'types';
import { doPrettier, doESLint } from 'lints';

export default async (options: ScanOptions): Promise<ScanReport> => {
  const { cwd, include, quiet, fix, outputReport, config: scanConfig } = options;
  const getLintFiles = (ext: string[]): string | string[] => {
    const { files } = options;
    if (files) return files.filter((name) => ext.includes(path.extname(name)));
    const pattern = `**/*.{${ext.map((t) => t.replace(/^\./, '')).join(',')}}`;
    return path.resolve(cwd, include, pattern);
  };
  const readConfigFile = (pth: string): any => {
    const localPath = path.resolve(cwd, pth);
    return fs.existsSync(localPath) ? require(localPath) : {};
  };
  const pkg: PKG = readConfigFile('package.json');
  const config: Config = scanConfig || readConfigFile(`${PKG_NAME}.config.js`);
  const runErrors: Error[] = [];
  let results: ScanResult[] = [];

  // prettier
  if (fix && config.enablePrettier !== false) {
    await doPrettier(options);
  }

  // eslint
  if (config.enableESLint !== false) {
    try {
      const eslintResults = await doESLint({ ...options, pkg, config });
      results = results.concat(eslintResults);
    } catch (e) {
      runErrors.push(e);
    }
  }

  // stylelint
  if (config.enableStylelint !== false) {
    try {
      const stylelintResult = await doStylelint({ ...options, pkg, config });
      results = results.concat(stylelintResult);
    } catch (e) {
      runErrors.push(e);
    }
  }

  // markdown
  if (config.enableMarkdownlint !== false) {
    try {
      const files = options.files
        ? getLintFiles(MARKDOWN_LINT_FILE_EXT)
        : glob.sync('**/*.md', { cwd, ignore: 'node_modules/**' });
      const result = await markdownlint.promises.markdownlint({
        ...getMarkdownlintConfig(options, pkg, config),
        files,
      });
      // 修复
      if (options.fix) {
        for (const file in result) {
          if (!Object.prototype.hasOwnProperty.call(result, file)) continue;

          const fixes = result[file].filter((error) => error.fixInfo);

          if (fixes.length > 0) {
            const originalText = fs.readFileSync(file, 'utf8');
            const fixedText = markdownlintRuleHelpers.applyFixes(originalText, fixes);
            if (originalText !== fixedText) {
              fs.writeFileSync(file, fixedText, 'utf8');
              result[file] = result[file].filter((error) => !error.fixInfo);
            }
          }
        }
      }
      results = results.concat(formatMarkdownlintResults(result, quiet));
    } catch (e) {
      runErrors.push(e);
    }
  }

  // 生成报告报告文件
  if (outputReport) {
    const reportPath = path.resolve(process.cwd(), `./${PKG_NAME}-report.json`);
    fs.outputFile(reportPath, JSON.stringify(results, null, 2), () => {});
  }

  return {
    results,
    errorCount: results.reduce((count, { errorCount }) => count + errorCount, 0),
    warningCount: results.reduce((count, { warningCount }) => count + warningCount, 0),
    runErrors,
  };
};
