module.exports = {
  extends: [
    './index',
    './rules/rax',
  ].map(require.resolve),
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
};
