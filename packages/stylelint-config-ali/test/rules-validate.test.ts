import { readFile } from 'fs/promises';
import { join } from 'path';
import stylelint from 'stylelint';
import config from '../index';

describe('test/rules-validate.test.js', () => {
  it('Validate default', async () => {
    const result = await stylelint.lint({
      config: config as any,
      code: await readFile(join(import.meta.dirname, 'fixtures/index.css'), 'utf-8'),
      fix: false,
    });

    if (result && result.errored) {
      const filesResult = JSON.parse(result.report || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(fileResult.warnings);
      });

      expect(filesResult.length).toBeGreaterThan(0);
    }
  });

  it('Validate sass', async () => {
    const result = await stylelint.lint({
      config: config as any,
      code: await readFile(join(import.meta.dirname, 'fixtures/sass-test.scss'), 'utf-8'),
      fix: false,
    });

    if (result && result.errored) {
    }
    console.log(result.results);
    expect(result.results.length).toBeGreaterThan(0);
  });

  it('Validate less', async () => {
    const result = await stylelint.lint({
      config: config as any,
      code: await readFile(join(import.meta.dirname, 'fixtures/less-test.less'), 'utf-8'),
      fix: false,
    });

    if (result && result.errored) {
      const filesResult = JSON.parse(result.report || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(fileResult.warnings);
      });

      expect(filesResult.length).toBeGreaterThan(0);
    }
  });

  it('Validate miniapp', async () => {
    const result = await stylelint.lint({
      config: config as any,
      code: await readFile(join(import.meta.dirname, 'fixtures/miniapp.acss'), 'utf-8'),
      fix: false,
    });

    if (result && result.errored) {
      const filesResult = JSON.parse(result.report || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(fileResult.warnings);
      });

      expect(filesResult.length).toBe(0);
    }
  });

  it('Validate css-module', async () => {
    const result = await stylelint.lint({
      config: config as any,
      code: await readFile(join(import.meta.dirname, 'fixtures/css-module.scss'), 'utf-8'),
      fix: false,
    });

    if (result && result.errored) {
      const filesResult = JSON.parse(result.report || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(fileResult.warnings);
      });

      expect(filesResult.length).toBe(0);
    }
  });
});
