module.exports = {
  plugins: ['ali'],
  overrides: [
    {
      files: ['package.json'],
      processor: 'ali/.json',
    },
  ],
  rules: {
    'ali/no-http-url': 'warn',
    'ali/no-secret-info': 'error',
    'ali/recommend-add-line-height-unit': 'error',
    'ali/no-broad-semantic-versioning': 'error',
  },
}