module.exports = {
  extends: [
    './index',
    '../rules/node',
  ].map(require.resolve),
};
