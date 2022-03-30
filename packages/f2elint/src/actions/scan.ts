import path from 'path';
import fs from 'fs-extra';
import glob from 'glob';
import { ESLint } from 'eslint';
import markdownlint from 'markdownlint';
import markdownlintRuleHelpers from 'markdownlint-rule-helpers';
import stylelint from 'stylelint';
import {
  PKG_NAME,
  ESLINT_FILE_EXT,
  STYLELINT_FILE_EXT,
  MARKDOWN_LINT_FILE_EXT,
} from '../utils/constants';
import {
  getESLintConfig,
  formatESLintResults,
  getMarkdownlintConfig,
  formatMarkdownlintResults,
  getStylelintConfig,
  formatStylelintResults,
} from '../lints';
import type { ScanOptions, ScanResult, PKG, Config, ScanReport } from '../types';
import { doPrettier } from 'lints/prettier';

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
    doPrettier(options);
  }

  // eslint
  if (config.enableESLint !== false) {
    try {
      const files = getLintFiles(ESLINT_FILE_EXT);
      const cli = new ESLint(getESLintConfig(options, pkg, config));
      const reports = await cli.lintFiles(files);
      fix && (await ESLint.outputFixes(reports));
      results = results.concat(formatESLintResults(reports, quiet));
    } catch (e) {
      runErrors.push(e);
    }
  }

  // stylelint
  if (config.enableStylelint !== false) {
    try {
      const files = getLintFiles(STYLELINT_FILE_EXT);
      const data = await stylelint.lint({
        ...getStylelintConfig(options, pkg, config),
        files,
      });
      results = results.concat(formatStylelintResults(data.results, quiet));
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
