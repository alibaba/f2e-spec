module.exports = {
  extends: [
    '../rax',
    '../../rules/typescript',
    '../rules/ts-blacklist',
  ].map(require.resolve),
};
