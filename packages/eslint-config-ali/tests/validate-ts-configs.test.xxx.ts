/**
 * 验证 TS 规则，包括：
 * eslint-config-ali/typescript
 * eslint-config-ali/typescript/react
 * eslint-config-ali/typescript/vue
 */

const assert = require('assert');
const eslint = require('eslint');
const path = require('path');
const sumBy = require('lodash/sumBy');

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

describe('Validate TS configs', () => {
  it('Validate eslint-config-ali/typescript', async () => {
    const configPath = './typescript/index.js';
    const filePath = path.join(__dirname, './fixtures/ts.ts');

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,

      ignore: false,
      overrideConfig: {
        parserOptions: {
          project: path.join(__dirname, './fixtures/tsconfig.json'),
        },
      },
    });

    // 验证导出的 config 是否正常
    const config = cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, 'fatalErrorCount'), 0);
    assert.notEqual(sumBy(results, 'errorCount'), 0);
    assert.equal(sumBy(results, 'warningCount'), 0);

    // 验证 eslint-plugin-typescript 工作是否正常
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf('@typescript-eslint/') !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);

    const errorReportedByNoRedeclare = messages.filter((result) => {
      return result.ruleId === 'no-redeclare';
    });
    assert.equal(errorReportedByNoRedeclare.length, 0);

    // 验证 eslint-import-resolver-typescript 工作是否正常
    const filePath2 = path.join(__dirname, './fixtures/ts-import-a.ts');
    const filePath3 = path.join(__dirname, './fixtures/ts-import-b.ts');
    const reports2 = cli.lintFiles([filePath2, filePath3]);
    assert.ok(reports2.errorCount !== 0 || reports2.warnCount !== 0);
  });

  it('Validate eslint-config-ali/typescript/react', async () => {
    const configPath = './typescript/react.js';
    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,

      ignore: false,
      overrideConfig: {
        parserOptions: {
          project: path.join(__dirname, './fixtures/tsconfig.json'),
        },
      },
    });

    // 验证导出的 config 是否正常
    const filePath = path.join(__dirname, './fixtures/ts-react.tsx');
    const config = cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证对 tsx 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, 'fatalErrorCount'), 0);
    assert.notEqual(sumBy(results, 'errorCount'), 0);
    assert.notEqual(sumBy(results, 'warningCount'), 0);

    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf('react/') !== -1;
    });
    const errorReportedByTSPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf('@typescript-eslint/') !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);
    assert.notEqual(errorReportedByTSPlugin.length, 0);

    // 验证 eslint-plugin-react-hooks plugin 工作是否正常
    const filePath2 = path.join(__dirname, './fixtures/react-hooks.jsx');
    const results2 = await cli.lintFiles([filePath2]);
    assert.equal(sumBy(results2, 'fatalErrorCount'), 0);
    assert.notEqual(sumBy(results2, 'errorCount'), 0);
    assert.notEqual(sumBy(results2, 'warningCount'), 0);

    const { messages: messages2 } = results2[0];
    const errorReportedByReactPlugin2 = messages2.filter((result) => {
      return result.ruleId && result.ruleId.indexOf('react-hooks/') !== -1;
    });
    assert.equal(errorReportedByReactPlugin2.length, 2);
  });

  it('Validate eslint-config-ali/typescript/rax', async () => {
    const configPath = './typescript/rax.js';
    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,

      ignore: false,
      overrideConfig: {
        parserOptions: {
          project: path.join(__dirname, './fixtures/tsconfig.json'),
        },
      },
    });

    // 验证导出的 config 是否正常
    const filePath = path.join(__dirname, './fixtures/ts-rax.tsx');
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证对 tsx 工作是否正常
    const results = await cli.lintFiles([filePath]);

    assert.equal(sumBy(results, 'fatalErrorCount'), 0);
    assert.equal(sumBy(results, 'errorCount'), 0);
    assert.equal(sumBy(results, 'warningCount'), 0);
  });

  it('Validate eslint-config-ali/typescript/vue', async () => {
    const configPath = './typescript/vue.js';
    const filePath = path.join(__dirname, './fixtures/ts-vue.vue');

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,

      ignore: false,
      overrideConfig: {
        parserOptions: {
          project: path.join(__dirname, './fixtures/tsconfig.json'),
        },
      },
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, 'fatalErrorCount'), 0);
    assert.notEqual(sumBy(results, 'errorCount'), 0);
    assert.notEqual(sumBy(results, 'warningCount'), 0);

    // 验证 eslint-plugin-vue 及 @typescript-eslint 工作是否正常
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf('vue/') !== -1;
    });
    const errorReportedByTSPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf('@typescript-eslint/') !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);
    assert.notEqual(errorReportedByTSPlugin.length, 0);
  });

  it('Validate eslint-config-ali/essential/typescript', async () => {
    const configPath = './essential/typescript/index.js';
    const filePath = path.join(__dirname, './fixtures/ts.ts');

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,

      ignore: false,
      overrideConfig: {
        parserOptions: {
          project: path.join(__dirname, './fixtures/tsconfig.json'),
        },
      },
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, 'fatalErrorCount'), 0);
    assert.notEqual(sumBy(results, 'errorCount'), 0);
    assert.notEqual(sumBy(results, 'warningCount'), 0);

    // 验证黑名单中的规则已关闭
    const { messages } = results[0];

    // 验证 @typescript-eslint/semi 被关闭
    const semiErrors = messages.filter((result) => {
      return result.ruleId === '@typescript-eslint/semi';
    });
    assert.equal(semiErrors.length, 0);

    // 验证一个风格问题被降级
    const styleErrors = messages.filter((result) => {
      return result.ruleId === 'object-curly-spacing';
    });
    assert.equal(styleErrors[0].severity, 1);
  });

  it('Validate eslint-config-ali/essential/typescript/react', async () => {
    const configPath = './essential/typescript/react.js';
    const filePath = path.join(__dirname, './fixtures/ts-react.tsx');

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,

      ignore: false,
      overrideConfig: {
        parserOptions: {
          project: path.join(__dirname, './fixtures/tsconfig.json'),
        },
      },
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, 'fatalErrorCount'), 0);
    assert.notEqual(sumBy(results, 'errorCount'), 0);
    assert.notEqual(sumBy(results, 'warningCount'), 0);

    // 验证对 tsx 工作是否正常
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf('react/') !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);
    const errorReportedByTSPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf('@typescript-eslint/') !== -1;
    });
    assert.notEqual(errorReportedByTSPlugin.length, 0);

    // 验证 @typescript-eslint/semi 被关闭
    const semiErrors = messages.filter((result) => {
      return result.ruleId === '@typescript-eslint/semi';
    });
    assert.equal(semiErrors.length, 0);

    // 验证黑名单中的规则已关闭，取 react/jsx-indent 进行测试
    const errorReportedByReactPluginBlackList = messages.filter((result) => {
      return result.ruleId === 'react/jsx-indent';
    });
    assert.equal(errorReportedByReactPluginBlackList.length, 0);
  });

  it('Validate eslint-config-ali/essential/typescript/vue', async () => {
    const configPath = './essential/typescript/vue.js';
    const filePath = path.join(__dirname, './fixtures/ts-vue.vue');

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,

      ignore: false,
      overrideConfig: {
        parserOptions: {
          project: path.join(__dirname, './fixtures/tsconfig.json'),
        },
      },
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, 'fatalErrorCount'), 0);
    assert.notEqual(sumBy(results, 'errorCount'), 0);
    assert.notEqual(sumBy(results, 'warningCount'), 0);

    // 验证 vue plugin 工作是否正常
    const result = results[0];
    const errorReportedByReactPlugin = result.messages.filter((message) => {
      return message.ruleId && message.ruleId.indexOf('vue/') !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);

    // 验证黑名单中的规则已关闭
    const errorReportedByReactPluginBlackList = result.messages.filter((message) => {
      return message.ruleId === '@typescript-eslint/indent';
    });
    assert.equal(errorReportedByReactPluginBlackList.length, 0);
  });

  it('Validate eslint-config-ali/typescript/node', async () => {
    const configPath = './typescript/node.js';
    const filePath = path.join(__dirname, './fixtures/ts-node.ts');

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,

      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
    assert.strictEqual(config.env.node, true);
    assert.strictEqual(config.plugins.includes('node'), true);

    // 验证已开启的 link 规则是否校验正常
    const results = await cli.lintFiles([filePath]);
    const { messages, errorCount, warningCount } = results[0];
    const ruleIds = Array.from(messages.map((item) => item.ruleId));

    assert.strictEqual(ruleIds.includes('node/prefer-promises/fs'), false);
    assert.strictEqual(ruleIds.includes('@typescript-eslint/no-unused-vars'), false);
    assert.strictEqual(ruleIds.includes('no-console'), false);
    assert.strictEqual(ruleIds.includes('no-var'), false);
    assert.strictEqual(ruleIds.includes('eol-last'), false);
    assert.equal(errorCount, 1);
    assert.equal(warningCount, 0);

    // 验证已关闭的 link 规则是否校验正常，以 @typescript-eslint/explicit-function-return-type 为例
    assert.strictEqual(ruleIds.includes('@typescript-eslint/explicit-function-return-type'), false);
  });
});
