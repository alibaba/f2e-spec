import chalk from 'chalk';
import table from 'text-table';
import terminalLink from 'terminal-link';
import isDocker from 'is-docker';
import stripAnsi from 'strip-ansi';
import { PKG_NAME, UNICODE } from './constants';
import type { ScanResult } from '../types';

/**
 * 在控制台打印扫描报告
 * @param results
 * @param fix
 */
export default (results: ScanResult[], fix: boolean): void => {
  let output = '\n';
  let errorCount = 0;
  let warningCount = 0;
  let fixableErrorCount = 0;
  let fixableWarningCount = 0;
  let summaryColor = 'yellow';

  const transformMessage = ({ line, column, rule, url, message, errored }) => {
    if (errored) summaryColor = 'red';
    let text = '';
    if (rule && url) {
      text = terminalLink(chalk.blue(rule), chalk.dim(` ${url} `), { fallback: !isDocker() });
    } else if (rule) {
      text = chalk.blue(rule);
    }

    return [
      '',
      chalk.dim(`${line}:${column}`),
      errored ? chalk.red('error') : chalk.yellow('warning'),
      message,
      text,
    ];
  };

  for (const result of results) {
    if (result.messages.length === 0) continue;
    const { messages } = result;

    errorCount += result.errorCount;
    warningCount += result.warningCount;
    fixableErrorCount += result.fixableErrorCount;
    fixableWarningCount += result.fixableWarningCount;

    output += `${chalk.underline(result.filePath)}\n`;
    output += `${table(messages.map(transformMessage), {
      align: ['.', 'r', 'l'],
      stringLength: (str) => stripAnsi(str).length,
    })}\n\n`;
  }

  const total = errorCount + warningCount;
  const pluralize = (word, count) => (count === 1 ? word : `${word}s`);

  // 修复日志
  if (fix) output += chalk.green('代码规约问题自动修复完成，请通过 git diff 确认修复效果 :D\n');
  if (fix && total > 0) {
    output += chalk.green('ps. 以上显示的是无法被自动修复的问题，需要手动进行修复\n');
  }

  // 扫描日志，预期:
  // ✖ x problems (y errors, z warnings)
  // y error and z warnings potentially fixable with the `f2elint fix`
  //
  // ✔ no problems
  if (!fix && total > 0) {
    output += chalk[summaryColor].bold(
      [
        `${UNICODE.failure} `,
        total,
        pluralize(' problem', total),
        ' (',
        errorCount,
        pluralize(' error', errorCount),
        ', ',
        warningCount,
        pluralize(' warning', warningCount),
        ')\n',
      ].join(''),
    );
    if (fixableErrorCount > 0 || fixableWarningCount > 0) {
      output += chalk[summaryColor].bold(
        [
          '  ',
          fixableErrorCount,
          pluralize(' error', fixableErrorCount),
          ' and ',
          fixableWarningCount,
          pluralize(' warning', fixableWarningCount),
          ` potentially fixable with the \`${PKG_NAME} fix\``,
        ].join(''),
      );
    }
  }
  if (!fix && total === 0) output = chalk.green.bold(`${UNICODE.success} no problems`);

  console.log(chalk.reset(output));
};
