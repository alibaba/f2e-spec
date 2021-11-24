module.exports = {
  extends: [
    './index',
    './rules/react',
  ].map(require.resolve),
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
};
