const path = require('path');
const fs = require('fs-extra');
const lint = require('../lib/index').default;

describe('init', () => {
  const templatePath = path.resolve(__dirname, './fixtures/template/init');
  const outputPath = path.resolve(__dirname, './fixtures/template/temp');

  beforeEach(() => {
    fs.copySync(templatePath, outputPath);
  });

  test('node api init should work as expected', async () => {
    await lint.init({
      cwd: outputPath,
      checkVersionUpdate: false,
      eslintType: 'index',
      enableStylelint: true,
      enableMarkdownlint: true,
      enablePrettier: true,
    });
  });

  afterEach(() => {
    fs.removeSync(outputPath);
  });
});
