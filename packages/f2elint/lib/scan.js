const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const { CLIEngine } = require('eslint');
const stylelint = require('stylelint');
const markdownlint = require('markdownlint');
const { execSync, spawnSync } = require('child_process');

const log = require('../utils/log');
const npmType = require('../utils/npmType');
const printReport = require('../utils/printReport');
const {
  PKG_NAME,
  ESLINT_FILE_EXT,
  STYLELINT_FILE_MATCH,
  ESLINT_IGNORE_PATTERN,
  STYLELINT_IGNORE_PATTERN,
} = require('../utils/constants');

/**
 * 获取 eslint 规则文档地址
 * @param rule
 * @returns {string}
 */
const getESLintRuleDocUrl = (rule) => {
  // typescript-eslint
  let match = rule.match(/^@typescript-eslint\/(\S+)$/);
  if (match) {
    return `https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/${match[1]}.md`;
  }

  // eslint-plugin-import
  match = rule.match(/^import\/(\S+)$/);
  if (match) {
    return `https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/${match[1]}.md`;
  }

  // eslint-plugin-jsx-a11y
  match = rule.match(/^jsx-a11y\/(\S+)$/);
  if (match) {
    return `https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/master/docs/rules/${match[1]}.md`;
  }

  // eslint-plugin-react-ssr
  if (/^react\/(no-constructor-dom|no-will-mount-dom)$/.test(rule)) {
    return 'https://github.com/ytanruengsri/eslint-plugin-react-ssr';
  }

  // eslint-plugin-react-hooks
  if (/^react-hooks-ssr\//.test(rule)) {
    return 'https://github.com/correttojs/eslint-plugin-react-hooks-ssr#documentation';
  }

  // eslint-plugin-react-hooks
  if (/^react-hooks\/(\S+)$/.test(rule)) {
    return 'https://reactjs.org/docs/hooks-rules.html#eslint-plugin';
  }

  // eslint-plugin-react
  match = rule.match(/^react\/(\S+)$/);
  if (match) {
    return `https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/${match[1]}.md`;
  }

  // eslint-plugin-vue
  match = rule.match(/^vue\/(\S+)$/);
  if (match) {
    return `https://eslint.vuejs.org/rules/${match[1]}.html`;
  }

  return `https://eslint.org/docs/rules/${rule}`;
};

/**
 * 获取 stylelint 规则文档地址
 * @param rule
 * @returns {string}
 */
const getStyleLintRuleDocUrl = (rule) => {
  // stylelint-scss
  const match = rule.match(/^@scss\/(\S+)$/);
  if (match) {
    return `https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/${match[1]}`;
  }

  return `https://stylelint.io/user-guide/rules/${rule}`;
};

/**
 * 格式化 eslint 数据
 * @param results
 * @returns {*|Uint8Array|BigInt64Array|{filePath: *, messages: *, warningCount: *, errorCount: *}[]|Float64Array|Int8Array|Float32Array|Int32Array|Uint32Array|Uint8ClampedArray|BigUint64Array|Int16Array|Uint16Array}
 */
const formatESLintResults = (results) => {
  return results.map((result) => {
    const {
      filePath,
      messages,
      errorCount,
      warningCount,
      fixableErrorCount,
      fixableWarningCount,
    } = result;
    return {
      filePath,
      messages: messages.map((item) => {
        const { line = 0, column = 0, ruleId, message, fatal, severity } = item;
        return {
          line,
          column,
          rule: ruleId,
          ruleUrl: ruleId ? getESLintRuleDocUrl(ruleId) : '',
          message: message.replace(/([^ ])\.$/u, '$1'),
          errored: fatal || severity === 2,
        };
      }),
      errorCount,
      warningCount,
      fixableErrorCount,
      fixableWarningCount,
    };
  });
};

/**
 * 格式化 stylelint 数据
 * @param results
 * @returns {*|Uint8Array|BigInt64Array|{filePath: *, messages: *, warningCount: number, errorCount: number}[]|Float64Array|Int8Array|Float32Array|Int32Array|Uint32Array|Uint8ClampedArray|BigUint64Array|Int16Array|Uint16Array}
 */
const formatStyleLintResults = (results) => {
  return results.map((result) => {
    let errorCount = 0;
    let warningCount = 0;
    const messages = result.warnings.map((item) => {
      const { line = 0, column = 0, rule, severity, text } = item;
      if (severity === 'error') {
        errorCount++;
      } else {
        warningCount++;
      }
      return {
        line,
        column,
        rule,
        ruleUrl: getStyleLintRuleDocUrl(rule),
        message: text.replace(/([^ ])\.$/u, '$1').replace(new RegExp(`\\(${rule}\\)`), ''),
        errored: severity === 'error',
      };
    });

    return {
      filePath: result.source,
      messages,
      errorCount,
      warningCount,
      fixableErrorCount: 0,
      fixableWarningCount: 0,
    };
  });
};

/**
 * 格式化 markdownlint 数据
 * @param results
 */
const formatMarkdownlintResults = (results) => {
  const parsedResults = [];

  for (const file in results) {
    let warningCount = 0;
    if (Object.prototype.hasOwnProperty.call(results, file)) {
      const element = results[file];
      const messages = element.map((item) => {
        const { lineNumber, ruleDescription, ruleInformation, errorDetail, errorRange } = item;
        warningCount++;
        return {
          line: lineNumber,
          column: Array.isArray(errorRange) ? errorRange[0] : 1,
          rule: ruleDescription || '',
          ruleUrl: ruleInformation || '',
          message: errorDetail || '',
          errored: false,
        };
      });

      parsedResults.push({
        filePath: file,
        messages,
        errorCount: 0,
        warningCount,
        fixableErrorCount: 0,
        fixableWarningCount: warningCount,
      });
    }
  }

  return parsedResults;
};

/**
 * 获取 f2elint 的默认 eslint 配置
 * @param {string} cwd
 * @returns {{}}
 */
const getESLintDefaultConfig = (cwd) => {
  const config = {};

  // 默认 eslintignore 配置
  const ignoreFilePath = path.resolve(cwd, '.eslintignore');
  if (!fs.existsSync(ignoreFilePath)) {
    config.ignorePattern = ESLINT_IGNORE_PATTERN;
  }

  // 默认 eslint 规则配置
  const tsFiles = glob.sync('./!(node_modules)/**/*.@(ts|tsx)', { cwd });
  const reactFiles = glob.sync('./!(node_modules)/**/*.@(jsx|tsx)', { cwd });
  const vueFiles = glob.sync('./!(node_modules)/**/*.vue', { cwd });
  const language = tsFiles.length > 0 ? 'typescript' : '';
  let dsl = '';

  // dsl判断
  if (reactFiles.length > 0) {
    dsl = 'react';
  } else if (vueFiles.length > 0) {
    dsl = 'vue';
  }

  // 嗅探 package.json 猜测DSL
  if (!dsl) {
    try {
      const packageData = JSON.parse(fs.readFileSync(path.resolve(cwd, 'package.json'), 'utf8'));
      const dependencies = Object.keys(packageData.dependencies);
      if (dependencies.find((name) => /^react/.test(name))) {
        dsl = 'react';
      } else if (dependencies.find((name) => /^vue/.test(name))) {
        dsl = 'vue';
      }
    } catch (err) {
      // 读不到文件会抛错，无需打印
    }
  }

  // 嗅探 rax 工程
  try {
    const packageData = JSON.parse(fs.readFileSync(path.resolve(cwd, 'package.json'), 'utf8'));
    const dependencies = Object.keys(packageData.dependencies);
    if (dependencies.find((name) => /^rax/.test(name))) {
      dsl = 'rax';
    } else {
      const abcData = JSON.parse(fs.readFileSync(path.resolve(cwd, 'abc.json'), 'utf8'));
      if (abcData.type === 'rax' || (abcData.info && abcData.info.extraLib === 'rax')) {
        dsl = 'rax';
      }
    }
  } catch (err) {
    // 读不到文件会抛错，无需打印
  }

  config.useEslintrc = false;
  config.resolvePluginsRelativeTo = path.resolve(__dirname, '../');

  const eslintConfigType = language + (dsl ? (language ? '/' : '') + dsl : '') || 'index';
  config.baseConfig = {
    extends: path.resolve(__dirname, `../node_modules/eslint-config-ali/${eslintConfigType}`),
  };
  log.info(`使用 f2elint 默认 ESLint 配置，配置为 ${eslintConfigType}`);

  return config;
};

/**
 * 获取 f2elint 的默认 stylelint 配置
 * @param cwd
 * @returns {{}}
 */
const getStyleLintDefaultConfig = (cwd) => {
  const config = {};

  // 默认 stylelint 配置
  const ignoreFilePath = path.resolve(cwd, '.stylelintignore');
  if (!fs.existsSync(ignoreFilePath)) {
    config.ignorePattern = STYLELINT_IGNORE_PATTERN;
  }

  config.config = {
    extends: path.resolve(__dirname, '../node_modules/stylelint-config-ali'),
  };

  return config;
};

/**
 * 若无 node_modules，则帮用户 install（否则会找不到 config）
 * @param cwd
 * @returns {{}}
 */
const installDepsIfThereNo = async (cwd) => {
  const node_modulesPath = path.resolve(cwd, 'node_modules');
  if (!fs.existsSync(node_modulesPath)) {
    log.info('使用项目 Lint 配置，检测到项目未安装依赖，将进行安装（执行 npm install）');
    const npm = await npmType;
    execSync(`cd ${cwd}`);
    execSync(`${npm} i`);
  }
};

module.exports = async (options) => {
  const { cwd, include = cwd, fix = false, quiet = false, outputReport = false, ignore } = options;
  let results = [];

  let pkg = {};
  const pkgPath = path.resolve(cwd, './package.json');
  if (fs.existsSync(pkgPath)) {
    pkg = require(pkgPath);
  }

  // 获取配置
  let config = {};
  const configPath = path.resolve(cwd, `${PKG_NAME}.config.js`);
  if (fs.existsSync(configPath)) {
    config = require(configPath);
  }

  log.info(`执行 ${PKG_NAME} 检查: `);

  // eslint
  try {
    // 判断使用默认配置还是项目的配置文件。若使用项目的，在未安装依赖时帮其安装
    const lintFiles = glob.sync('.eslintrc?(.@(js|yaml|yml|json))', { cwd });
    const useDefaultConfig = lintFiles.length === 0 && !pkg.eslintConfig;
    let lintConfig = {};
    if (useDefaultConfig) {
      lintConfig = getESLintDefaultConfig(cwd);
    } else {
      await installDepsIfThereNo(cwd);
    }

    const cli = new CLIEngine({
      ...lintConfig,
      cwd,
      fix,
      ignore,
      extensions: ESLINT_FILE_EXT,
    });
    const report = cli.executeOnFiles([include]);
    if (fix) CLIEngine.outputFixes(report);
    results = results.concat(formatESLintResults(report.results));
  } catch (e) {
    if (e.messageTemplate !== 'file-not-found') {
      if (
        e.message.startsWith('Failed to load') ||
        e.message.startsWith('Cannot read config file')
      ) {
        log.info(e.message);
        log.info('使用项目 eslintrc 执行失败，尝试使用 f2elint 默认配置执行');
        const cli = new CLIEngine({
          ...getESLintDefaultConfig(cwd),
          cwd,
          fix,
          extensions: ESLINT_FILE_EXT,
        });
        const report = cli.executeOnFiles([include]);
        if (fix) CLIEngine.outputFixes(report);
        results = results.concat(formatESLintResults(report.results));
      } else {
        log.error('执行 ESLint 失败：');
        log.error(e.stack);
      }
    }
  }

  // stylelint
  if (config.enableStylelint !== false) {
    // 判断使用默认配置还是项目的配置文件。若使用项目的，在未安装依赖时帮其安装
    const lintFiles = glob.sync('.stylelint?(.@(js|yaml|yml|json))', { cwd });
    let lintConfig = {};
    const useDefaultConfig = lintFiles.length === 0 && !pkg.stylelint;
    if (useDefaultConfig) {
      lintConfig = getStyleLintDefaultConfig(cwd);
    } else {
      await installDepsIfThereNo(cwd);
    }

    try {
      const data = await stylelint.lint({
        ...lintConfig,
        files: path.resolve(cwd, include, `**/${STYLELINT_FILE_MATCH}`),
        allowEmptyInput: true,
        fix,
      });
      results = results.concat(formatStyleLintResults(data.results));
    } catch (e) {
      log.error('执行 stylelint 失败：');
      log.error(e.stack);
    }
  }

  // markdownlint
  if (config.enableMarkdownlint !== false) {
    const lintFiles = glob.sync('.markdownlint?(.@(js|yaml|yml|json))', { cwd });
    let lintConfigFile = '';
    const useDefaultConfig = lintFiles.length === 0 && !pkg.markdownlint;

    if (useDefaultConfig) {
      lintConfigFile = require.resolve('markdownlint-config-ali/index.json');
    } else {
      lintConfigFile = path.resolve(cwd, '.markdownlint.json');
      await installDepsIfThereNo(cwd);
    }

    try {
      const files = glob.sync('**/*.md', { cwd, ignore: 'node_modules/**/*.md' });
      const data = markdownlint.sync({
        files,
        config: markdownlint.readConfigSync(lintConfigFile),
      });

      if (fix) {
        spawnSync(path.resolve(__dirname, '../node_modules/.bin/markdownlint'), [
          '-c',
          lintConfigFile,
          '-f',
          ...files,
        ]);
      }

      results = results.concat(formatMarkdownlintResults(data));
    } catch (e) {
      log.error('执行 markdownlint 失败：');
      log.error(e.stack);
    }
  }

  // 过滤掉警告信息
  if (quiet) {
    results = results.map((item) => {
      item.messages = item.messages.filter(({ errored }) => errored);
      return item;
    });
  }

  // 生成报告报告文件
  if (outputReport) {
    const reportPath = path.resolve(process.cwd(), `./${PKG_NAME}-report.json`);
    fs.outputFile(reportPath, JSON.stringify(results, null, 2), (err) => {
      if (err) log.error(err);
    });
  }

  // 打印报告
  console.log(printReport(results, fix));

  return results;
};
