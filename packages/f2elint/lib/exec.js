const spawn = require('cross-spawn');
const path = require('path');
const { PKG_NAME } = require('../utils/constants');

const cwd = process.cwd();

/**
 * 将 PKG_NAME exec <linter> [...options] 作为 linter [...options] 执行
 * @param {string} linter
 * @param {Object} cmdObj
 */
const exec = (linter, cmdObj) => {
  const { rawArgs } = cmdObj.parent;
  const linterArgs = rawArgs.slice(rawArgs.indexOf(linter) + 1);

  // stylelint 加这个防止没匹配到文件时抛错
  if (linter === 'stylelint') {
    linterArgs.push('--allow-empty-input');
  }

  const result = spawn.sync(path.resolve(cwd, `./node_modules/${PKG_NAME}/node_modules/.bin/${linter}`), linterArgs, { stdio: 'inherit' });

  if (result.status !== 0) {
    process.exit(result.status);
  }
};

module.exports = exec;
