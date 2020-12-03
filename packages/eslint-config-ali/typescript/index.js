module.exports = {
  extends: [
    '../index',
    '../rules/typescript',
  ].map(require.resolve),
};
