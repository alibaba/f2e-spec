module.exports = {
  extends: ['./index', './rules/react'].map(require.resolve),
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }]],
    },
  },
};
