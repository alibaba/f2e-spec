import { ESLint } from 'eslint';
import type { ScanResult } from '../../types';
import { getESLintRuleDocUrl } from './getESLintRuleDocUrl';

/**
 * 格式化 ESLint 输出结果
 */
export function formatESLintResults(results: ESLint.LintResult[], quiet: boolean): ScanResult[] {
  return results
    .filter(({ warningCount, errorCount }) => errorCount || warningCount)
    .map(
      ({
        filePath,
        messages,
        errorCount,
        warningCount,
        fixableErrorCount,
        fixableWarningCount,
      }) => ({
        filePath,
        errorCount,
        warningCount: quiet ? 0 : warningCount,
        fixableErrorCount,
        fixableWarningCount: quiet ? 0 : fixableWarningCount,
        messages: messages
          .map(({ line = 0, column = 0, ruleId, message, fatal, severity }) => {
            return {
              line,
              column,
              rule: ruleId,
              url: getESLintRuleDocUrl(ruleId),
              message: message.replace(/([^ ])\.$/u, '$1'),
              errored: fatal || severity === 2,
            };
          }) // dont check ruleId, which can be null
          // https://eslint.org/docs/developer-guide/nodejs-api.html#-lintmessage-type
          .filter(({ errored }) => (quiet ? errored : true)),
      }),
    );
}
