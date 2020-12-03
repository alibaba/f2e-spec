module.exports = {
  extends: require.resolve('./react.js'),
  settings: {
    react: {
      // For Rax
      version: '999.999.999',
      pragma: 'createElement',
      pragmaFrag: 'Fragment',
    },
  },
  rules: {
    'react/prop-types': 'off',
  },
};
