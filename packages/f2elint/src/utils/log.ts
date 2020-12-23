import chalk from 'chalk';
import { PKG_NAME } from './constants';

const { green, blue, yellow, red } = chalk;

export default {
  success(text: string) {
    console.log(green(`${text}`));
  },
  info(text: string) {
    console.info(blue(`${text}`));
  },
  warn(text: string) {
    console.info(yellow(`${text}`));
  },
  error(text: string) {
    console.error(red(`${text}`));
  },
  result(text: string, pass: boolean) {
    console.info(blue(`[${PKG_NAME}] ${text}`), pass ? chalk.green('\u2714') : chalk.red('\u2716'));
  },
};
