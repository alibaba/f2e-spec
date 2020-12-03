module.exports = {
  extends: [
    '../react',
    '../rules/typescript',
  ].map(require.resolve),
};
