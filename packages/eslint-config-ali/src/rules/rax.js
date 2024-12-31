module.exports = {
  extends: [require.resolve('./react.js'), 'plugin:jsx-plus/recommended'],
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
