module.exports = {
  extends: [
    '../index',
    '../../rules/typescript',
    '../rules/ts-blacklist',
  ].map(require.resolve),
};
