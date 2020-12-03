module.exports = {
  extends: [
    './index',
    './rules/rax',
  ].map(require.resolve),
};
