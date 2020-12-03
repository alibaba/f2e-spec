/**
 * 验证 JS 规则，包括：
 * eslint-config-ali
 * eslint-config-ali/es5
 * eslint-config-ali/react
 * eslint-config-ali/vue
 */

const assert = require('assert');
const eslint = require('eslint');
const path = require('path');

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

describe('Validate JS configs', () => {
  it('Validate eslint-config-ali', () => {
    const configPath = './index.js';
    const filePath = path.join(__dirname, './fixtures/index.js');

    const cli = new eslint.CLIEngine({
      configFile: configPath,
      useEslintrc: false, // 如果不关这个参数，会将目录下的 eslintrc 与 configFile merge
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = cli.getConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const reports = cli.executeOnFiles([filePath]);
    assert.ok(reports.errorCount !== 0 || reports.warnCount !== 0);
  });

  it('Validate eslint-config-ali/es5', () => {
    const configPath = './es5.js';
    const filePath = path.join(__dirname, './fixtures/es5.js');

    const cli = new eslint.CLIEngine({
      configFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = cli.getConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const reports = cli.executeOnFiles([filePath]);
    assert.ok(reports.errorCount !== 0 || reports.warnCount !== 0);

    // 验证 es5 覆盖的规则是否正常，取 comma-dangle 进行测试
    const results = reports.results[0];
    const errorReportedByReactPlugin = results.messages.filter(result => {
      return result.ruleId === 'comma-dangle';
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);
  });

  it('Validate eslint-config-ali/react', () => {
    const configPath = './react.js';
    const filePath = path.join(__dirname, './fixtures/react.jsx');

    const cli = new eslint.CLIEngine({
      configFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = cli.getConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const reports = cli.executeOnFiles([filePath]);
    assert.ok(reports.errorCount !== 0 || reports.warnCount !== 0);

    // 验证 eslint-plugin-react 工作是否正常
    const results = reports.results[0];
    const errorReportedByReactPlugin = results.messages.filter(result => {
      return result.ruleId && result.ruleId.indexOf('react/') !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);

    // 验证 eslint-plugin-react-hooks plugin 工作是否正常
    const filePath2 = path.join(__dirname, './fixtures/react-hooks.jsx');
    const reports2 = cli.executeOnFiles([filePath2]);
    assert.ok(reports2.errorCount !== 0 || reports2.warnCount !== 0);
    const results2 = reports2.results[0];
    const errorReportedByReactPlugin2 = results2.messages.filter(result => {
      return result.ruleId && result.ruleId.indexOf('react-hooks/') !== -1;
    });
    assert.equal(errorReportedByReactPlugin2.length, 2);
  });

  it('Validate eslint-config-ali/rax', () => {
    const configPath = './rax.js';
    const filePath = path.join(__dirname, './fixtures/rax.jsx');

    const cli = new eslint.CLIEngine({
      configFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = cli.getConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const reports = cli.executeOnFiles([filePath]);
    assert.ok(reports.errorCount === 0 || reports.warnCount === 0);
  });

  it('Validate eslint-config-ali/vue', () => {
    const configPath = './vue.js';
    const filePath = path.join(__dirname, './fixtures/vue.vue');

    const cli = new eslint.CLIEngine({
      configFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = cli.getConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const reports = cli.executeOnFiles([filePath]);
    assert.ok(reports.errorCount !== 0 || reports.warnCount !== 0);

    // 验证 eslint-plugin-vue 工作是否正常
    const results = reports.results[0];
    const errorReportedByReactPlugin = results.messages.filter(result => {
      return result.ruleId && result.ruleId.indexOf('vue/') !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);
  });

  it('Validate eslint-config-ali/essential', () => {
    const configPath = './essential/index.js';
    const filePath = path.join(__dirname, './fixtures/index.js');

    const cli = new eslint.CLIEngine({
      configFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = cli.getConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const reports = cli.executeOnFiles([filePath]);
    assert.ok(reports.errorCount !== 0 || reports.warnCount !== 0);

    // 验证黑名单中的规则已关闭
    const results = reports.results[0];

    // 验证 semi 被关闭
    const semiErrors = results.messages.filter(result => {
      return result.ruleId === 'semi';
    });
    assert.equal(semiErrors.length, 0);

    // 验证 comma-spacing 被降级
    const commaSpacingErrors = results.messages.filter(result => {
      return result.ruleId === 'comma-spacing';
    });
    assert.equal(commaSpacingErrors[0].severity, 1);
  });

  it('Validate eslint-config-ali/essential/es5', () => {
    const configPath = './essential/es5.js';
    const filePath = path.join(__dirname, './fixtures/es5.js');

    const cli = new eslint.CLIEngine({
      configFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = cli.getConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const reports = cli.executeOnFiles([filePath]);
    assert.ok(reports.errorCount !== 0 || reports.warnCount !== 0);

    // 验证 es5 覆盖的规则是否正常，取 comma-dangle 进行测试
    const results = reports.results[0];
    const errorReportedByReactPlugin = results.messages.filter(result => {
      return result.ruleId === 'comma-dangle';
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);

    // 验证黑名单中的规则已关闭，取 semi 进行测试
    const errorReportedByReactPluginBlackList = results.messages.filter(result => {
      return result.ruleId === 'semi';
    });
    assert.equal(errorReportedByReactPluginBlackList.length, 0);
  });

  it('Validate eslint-config-ali/essential/react', () => {
    const configPath = './essential/react.js';
    const filePath = path.join(__dirname, './fixtures/react.jsx');

    const cli = new eslint.CLIEngine({
      configFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = cli.getConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const reports = cli.executeOnFiles([filePath]);
    assert.ok(reports.errorCount !== 0 || reports.warnCount !== 0);

    // 验证 react plugin 工作是否正常
    const results = reports.results[0];
    const errorReportedByReactPlugin = results.messages.filter(result => {
      return result.ruleId && result.ruleId.indexOf('react/') !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);

    // 验证黑名单中的规则已关闭，取 react/jsx-indent 进行测试
    const errorReportedByReactPluginBlackList = results.messages.filter(result => {
      return result.ruleId === 'react/jsx-indent';
    });
    assert.equal(errorReportedByReactPluginBlackList.length, 0);
  });

  it('Validate eslint-config-ali/essential/vue', () => {
    const configPath = './essential/vue.js';
    const filePath = path.join(__dirname, './fixtures/vue.vue');

    const cli = new eslint.CLIEngine({
      configFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = cli.getConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const reports = cli.executeOnFiles([filePath]);
    assert.ok(reports.errorCount !== 0 || reports.warnCount !== 0);

    // 验证 vue plugin 工作是否正常
    const results = reports.results[0];
    const errorReportedByReactPlugin = results.messages.filter(result => {
      return result.ruleId && result.ruleId.indexOf('vue/') !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);

    // 验证黑名单中的规则已关闭
    const errorReportedByReactPluginBlackList = results.messages.filter(result => {
      return result.ruleId === 'indent';
    });
    assert.equal(errorReportedByReactPluginBlackList.length, 0);
  });

  it('Validate eslint-config-ali/node', () => {
    const configPath = './node.js';
    const filePath = path.join(__dirname, './fixtures/node.js');

    const cli = new eslint.CLIEngine({
      configFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = cli.getConfigForFile(filePath);
    assert.ok(isObject(config));
    assert.strictEqual(config.env.node, true);
    assert.strictEqual(config.plugins.includes('node'), true);

    // 验证已开启的 link 规则是否校验正常
    const reports = cli.executeOnFiles([filePath]);
    const { messages } = reports.results[0];
    const ruleIds = Array.from(messages.map(item => item.ruleId));
    assert.strictEqual(ruleIds.includes('node/prefer-promises/fs'), true);
    assert.strictEqual(ruleIds.includes('no-unused-vars'), true);
    assert.strictEqual(ruleIds.includes('node/no-new-require'), true);
    assert.strictEqual(ruleIds.includes('semi'), true);
    assert.strictEqual(ruleIds.includes('quotes'), true);
    assert.strictEqual(reports.errorCount === 7 && reports.warningCount === 4, true);

    // 验证已关闭的 link 规则是否校验正常，以 node/exports-style 为例
    assert.strictEqual(ruleIds.includes('node/exports-style'), false);
  });
});
