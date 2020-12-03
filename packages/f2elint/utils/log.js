const chalk = require('chalk');

module.exports = {
  success(logs) {
    console.log(chalk.green(logs));
  },
  info(logs) {
    console.info(chalk.blue(logs));
  },
  warn(logs) {
    console.info(chalk.yellow(logs));
  },
  error(logs) {
    console.error(chalk.red(logs));
  },
};
