module.exports = {
  extends: [
    '../vue',
    './rules/set-style-to-warn',
    './rules/blacklist',
    './rules/es6-blacklist',
  ].map(require.resolve),
};
