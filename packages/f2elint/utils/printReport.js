const chalk = require('chalk');
const stripAnsi = require('strip-ansi');
const table = require('text-table');
const terminalLink = require('terminal-link');
const isDocker = require('is-docker');
const { PKG_NAME } = require('../utils/constants');

module.exports = function (results, fix) {
  let output = '\n';
  let errorCount = 0;
  let warningCount = 0;
  let fixableErrorCount = 0;
  let fixableWarningCount = 0;
  let summaryColor = 'yellow';

  results.forEach((result) => {
    const { messages } = result;

    if (messages.length === 0) return;

    errorCount += result.errorCount;
    warningCount += result.warningCount;
    fixableErrorCount += result.fixableErrorCount;
    fixableWarningCount += result.fixableWarningCount;

    output += `${chalk.underline(result.filePath)}\n`;
    output += `${table(
      messages.map(({ line, column, rule, ruleUrl, message, errored }) => {
        if (errored) summaryColor = 'red';

        return [
          '',
          chalk.dim(`${line}:${column}`),
          errored ? chalk.red('error') : chalk.yellow('warning'),
          message,
          rule
            ? terminalLink(chalk.blue(rule), chalk.dim(` ${ruleUrl} `), { fallback: !isDocker() })
            : '', // 云构建不降级
        ];
      }),
      {
        align: ['', 'r', 'l'],
        stringLength: (str) => stripAnsi(str).length,
      },
    )}\n\n`;
  });

  const total = errorCount + warningCount;
  const pluralize = (word, count) => (count === 1 ? word : `${word}s`);

  // 修复日志
  if (fix) output += chalk.green('代码规约问题自动修复完成，请通过 git diff 确认修复效果 :D\n');
  if (fix && total > 0) output += chalk.green('ps. 以上显示的是无法被自动修复的问题，需要手动进行修复\n');

  // 扫描日志，预期:
  // ✖ x problems (y errors, z warnings)
  // y error and z warnings potentially fixable with the `f2elint fix`
  //
  // ✔ no problems
  if (!fix && total > 0) {
    output += chalk[summaryColor].bold(
      [
        '\u2716 ',
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
  if (!fix && total === 0) output = chalk.green.bold('\u2714 no problems');

  return chalk.reset(output);
};
