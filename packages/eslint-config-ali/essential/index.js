/**
 * essential 级别出口文件仅将会必要的规则设置为 error 级别
 */

module.exports = {
  extends: [
    '../index',
    './rules/set-style-to-warn',
    './rules/blacklist',
    './rules/es6-blacklist',
  ].map(require.resolve),
};
