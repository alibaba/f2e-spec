import path from 'path';
import fs from 'fs-extra';
import glob from 'glob';
import markdownLint from 'markdownlint';
import markdownLintRuleHelpers from 'markdownlint-rule-helpers';
import type { ScanOptions, ScanResult } from '../types';

type LintOptions = markdownLint.Options & { fix?: boolean };

/**
 * 获取 lint 配置
 * @param opts
 */
export const getLintConfig = (opts: ScanOptions): LintOptions => {
  const { cwd } = opts;
  const lintConfig: LintOptions = {
    fix: Boolean(opts.fix),
    resultVersion: 3,
  };

  // 使用默认的 lint 配置
  const lintConfigFiles = glob.sync('.markdownlint(.@(yaml|yml|json))', { cwd });
  if (lintConfigFiles.length === 0) {
    lintConfig.config = require('markdownlint-config-ali');
  } else {
    lintConfig.config = markdownLint.readConfigSync(path.resolve(cwd, lintConfigFiles[0]));
  }

  return lintConfig;
};

/**
 * 格式化 lint result
 * @param results
 * @param quiet
 */
export const formatResults = (results: markdownLint.LintResults, quiet: boolean): ScanResult[] => {
  const parsedResults = [];

  for (const file in results) {
    if (!Object.prototype.hasOwnProperty.call(results, file) || quiet) continue;

    let warningCount = 0;
    let fixableWarningCount = 0;
    const messages = results[file].map(
      ({ lineNumber, ruleNames, ruleDescription, ruleInformation, errorRange, fixInfo }) => {
        if (fixInfo) fixableWarningCount++;
        warningCount++;

        return {
          line: lineNumber,
          column: Array.isArray(errorRange) ? errorRange[0] : 1,
          rule: ruleNames[0],
          url: ruleInformation,
          message: ruleDescription,
          errored: false,
        };
      },
    );

    parsedResults.push({
      filePath: file,
      messages,
      errorCount: 0,
      warningCount,
      fixableErrorCount: 0,
      fixableWarningCount,
    });
  }

  return parsedResults;
};

/**
 * lint
 * @param options
 */
export const lint = async (options: LintOptions): Promise<markdownLint.LintResults> => {
  return new Promise((resolve, reject) => {
    markdownLint(options, (err, result) => {
      // 修复
      if (options.fix) {
        for (const file in result) {
          if (!Object.prototype.hasOwnProperty.call(result, file)) continue;

          const fixes = result[file].filter((error) => error.fixInfo);

          if (fixes.length > 0) {
            const originalText = fs.readFileSync(file, 'utf8');
            const fixedText = markdownLintRuleHelpers.applyFixes(originalText, fixes);
            if (originalText !== fixedText) {
              fs.writeFileSync(file, fixedText, 'utf8');
              result[file] = result[file].filter((error) => !error.fixInfo);
            }
          }
        }
      }
      err ? reject(err) : resolve(result);
    });
  });
};
