module.exports = {
  plugins: ['ali'],
  overrides: [
    {
      files: ['package.json'],
      processor: 'ali/.json',
      rules: {
        'ali/no-broad-semantic-versioning': 'error',
        'quotes': 'off',
        'semi': 'off',
        'eol-last': 'off',
        'quote-props': 'off',
        'comma-dangle': 'off',
      }
    },
  ],
  rules: {
    'ali/no-http-url': 'warn',
    'ali/no-secret-info': 'error',
  },
}