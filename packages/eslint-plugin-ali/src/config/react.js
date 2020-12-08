module.exports = {
  extends: ['./common'].map(require.resolve),
  rules: {
    'ali/no-lowercase-component-name': 'error',
  }
}