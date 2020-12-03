module.exports = {
  extends: [
    '../react',
    '../../rules/typescript',
    '../rules/ts-blacklist',
  ].map(require.resolve),
};
