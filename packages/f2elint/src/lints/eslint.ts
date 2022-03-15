import path from 'path';
import fs from 'fs-extra';
import glob from 'glob';
import { ESLint } from 'eslint';
import { ESLINT_FILE_EXT } from '../utils/constants';
import type { ScanOptions, ScanResult, PKG, Config } from '../types';

/**
 * 获取 eslint config type
 * @param cwd
 * @param pkg
 * @returns eslint-config-ali/index
 * @returns eslint-config-ali/react
 * @returns eslint-config-ali/typescript/index
 * @returns eslint-config-ali/typescript/react
 */
const getConfigType = (cwd: string, pkg: PKG): string => {
  const tsFiles = glob.sync('./!(node_modules)/**/*.@(ts|tsx)', { cwd });
  const reactFiles = glob.sync('./!(node_modules)/**/*.@(jsx|tsx)', { cwd });
  const vueFiles = glob.sync('./!(node_modules)/**/*.vue', { cwd });
  const dependencies = Object.keys(pkg.dependencies || {});
  const language = tsFiles.length > 0 ? 'typescript' : '';
  let dsl = '';

  // dsl判断
  if (reactFiles.length > 0 || dependencies.some((name) => /^react(-|$)/.test(name))) {
    dsl = 'react';
  } else if (vueFiles.length > 0 || dependencies.some((name) => /^vue(-|$)/.test(name))) {
    dsl = 'vue';
  } else if (dependencies.some((name) => /^rax(-|$)/.test(name))) {
    dsl = 'rax';
  }

  return 'eslint-config-ali/' + `${language}/${dsl}`.replace(/\/$/, '/index').replace(/^\//, '');
};

/**
 * 获取规则文档地址
 * @param rule
 */
const getRuleDocUrl = (rule: string): string => {
  if (!rule) return '';

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
 * 获取 lint 配置
 * @param opts
 * @param pkg
 * @param config
 */
export const getLintConfig = (opts: ScanOptions, pkg: PKG, config: Config): ESLint.Options => {
  const { cwd, fix, ignore } = opts;
  const lintConfig: ESLint.Options = {
    cwd,
    fix,
    ignore,
    extensions: ESLINT_FILE_EXT,
    errorOnUnmatchedPattern: false,
  };

  if (config.eslintOptions) {
    // 若用户传入了 eslintOptions，则用用户的
    Object.assign(lintConfig, config.eslintOptions);
  } else {
    // 根据扫描目录下有无lintrc文件，若无则使用默认的 lint 配置
    const lintConfigFiles = glob.sync('.eslintrc?(.@(js|yaml|yml|json))', { cwd });
    if (lintConfigFiles.length === 0 && !pkg.eslintConfig) {
      lintConfig.resolvePluginsRelativeTo = path.resolve(__dirname, '../../');
      lintConfig.useEslintrc = false;
      lintConfig.baseConfig = {
        extends: [
          path.resolve(__dirname, `../../node_modules/${getConfigType(cwd, pkg)}`),
          //  ESLint 不再管格式问题，直接使用 Prettier 进行格式化
          ...(config.enablePrettier ? ['prettier/@typescript-eslint'] : []),
        ],
      };
    }
  
    // 根据扫描目录下有无lintignore文件，若无则使用默认的 ignore 配置
    const lintIgnoreFile = path.resolve(cwd, '.eslintignore');
    if (!fs.existsSync(lintIgnoreFile) && !pkg.eslintIgnore) {
      lintConfig.ignorePath = path.resolve(__dirname, '../config/_eslintignore.ejs');
    }
  }

  return lintConfig;
};

/**
 * 格式化 lint result
 * @param results
 * @param quiet
 */
export const formatResults = (results: ESLint.LintResult[], quiet: boolean): ScanResult[] => {
  return results
    .filter(({ warningCount, errorCount }) => errorCount || warningCount)
    .map(
      ({
        filePath,
        messages,
        errorCount,
        warningCount,
        fixableErrorCount,
        fixableWarningCount,
      }) => ({
        filePath,
        errorCount,
        warningCount: quiet ? 0 : warningCount,
        fixableErrorCount,
        fixableWarningCount: quiet ? 0 : fixableWarningCount,
        messages: messages
          .map(({ line = 0, column = 0, ruleId, message, fatal, severity }) => {
            return {
              line,
              column,
              rule: ruleId,
              url: getRuleDocUrl(ruleId),
              message: message.replace(/([^ ])\.$/u, '$1'),
              errored: fatal || severity === 2,
            };
          }) // dont check ruleId, which can be null
             // https://eslint.org/docs/developer-guide/nodejs-api.html#-lintmessage-type
          .filter(({ errored }) => (quiet ? errored : true)),
      }),
    );
};

export * from 'eslint';
