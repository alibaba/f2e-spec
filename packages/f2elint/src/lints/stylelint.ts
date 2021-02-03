import path from 'path';
import fs from 'fs-extra';
import glob from 'glob';
import { LinterOptions, LintResult } from 'stylelint';
import { STYLELINT_IGNORE_PATTERN } from '../utils/constants';
import type { ScanOptions, ScanResult, PKG, Config } from '../types';

/**
 * 获取 stylelint 规则文档地址
 * @param rule
 * @returns {string}
 */
const getRuleDocUrl = (rule: string): string => {
  // stylelint-scss
  const match = rule.match(/^@scss\/(\S+)$/);
  if (match) {
    return `https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/${match[1]}`;
  }

  if (rule !== 'CssSyntaxError') return `https://stylelint.io/user-guide/rules/${rule}`;

  return '';
};

/**
 * 获取 stylelint 配置
 * @param opts
 * @param pkg
 * @param config
 */
export const getLintConfig = (opts: ScanOptions, pkg: PKG, config: Config): LinterOptions => {
  const { cwd, fix } = opts;
  if (config.enableStylelint === false) return {} as any;

  const lintConfig: any = {
    fix: Boolean(fix),
    allowEmptyInput: true,
  };

  // 使用默认的 lint 配置
  const lintConfigFiles = glob.sync('.stylelintrc?(.@(js|yaml|yml|json))', { cwd });
  if (lintConfigFiles.length === 0 && !pkg.stylelint) {
    lintConfig.configBasedir = path.resolve(__dirname, '../../node_modules/');
    lintConfig.config = {
      extends: 'stylelint-config-ali',
    };
  }

  // 使用默认的 ignore 配置
  const ignoreFilePath = path.resolve(cwd, '.stylelintignore');
  if (!fs.existsSync(ignoreFilePath)) {
    lintConfig.ignorePattern = STYLELINT_IGNORE_PATTERN;
  }

  return lintConfig;
};

/**
 * 格式化 lint result
 * @param results
 * @param quiet
 */
export const formatResults = (results: LintResult[], quiet: boolean): ScanResult[] => {
  return results.map(({ source, warnings }) => {
    let errorCount = 0;
    let warningCount = 0;
    const messages = warnings
      .filter((item) => !quiet || item.severity === 'error')
      .map((item) => {
        const { line = 0, column = 0, rule, severity, text } = item;
        if (severity === 'error') {
          errorCount++;
        } else {
          warningCount++;
        }
        return {
          line,
          column,
          rule,
          url: getRuleDocUrl(rule),
          message: text.replace(/([^ ])\.$/u, '$1').replace(new RegExp(`\\(${rule}\\)`), ''),
          errored: severity === 'error',
        };
      });

    return {
      filePath: source,
      messages,
      errorCount,
      warningCount,
      fixableErrorCount: 0,
      fixableWarningCount: 0,
    };
  });
};

export * from 'stylelint';
