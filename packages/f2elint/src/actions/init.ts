import path from 'path';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import spawn from 'cross-spawn';
import update from './update';
import npmType from '../utils/npmType';
import log from '../utils/log';
import conflictResolve from '../utils/conflictResolve';
import generateTemplate from '../utils/generateTemplate';
import { PROJECT_TYPES, PKG_NAME } from '../utils/constants';
import type { InitOptions, PKG } from '../types';

/**
 * 选择项目语言和框架
 */
const chooseEslintType = async (): Promise<string> => {
  const { type } = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'Step 1. 请选择项目的语言（JS/TS）和框架（React/Vue）类型：',
      choices: PROJECT_TYPES,
    },
  ]);

  return type;
};

/**
 * 选择是否启用 stylelint
 * @param defaultValue
 */
const chooseEnableStylelint = async (defaultValue: boolean): Promise<boolean> => {
  const { enable } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'enable',
      message: 'Step 2. 是否需要使用 stylelint（若没有样式文件则不需要）：',
      default: defaultValue,
    },
  ]);

  return enable;
};

/**
 * 选择是否启用 markdownlint
 */
const chooseEnableMarkdownLint = async (): Promise<boolean> => {
  const { enable } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'enable',
      message: 'Step 3. 是否需要使用 markdownlint（若没有 Markdown 文件则不需要）：',
      default: true,
    },
  ]);

  return enable;
};

/**
 * 选择是否启用 prettier
 */
const chooseEnablePrettier = async (): Promise<boolean> => {
  const { enable } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'enable',
      message: 'Step 4. 是否需要使用 prettier 格式化代码：',
      default: true,
    },
  ]);

  return enable;
};

export default async (options: InitOptions) => {
  const cwd = options.cwd || process.cwd();
  const checkVersionUpdate = options.checkVersionUpdate || false;
  const config: Record<string, any> = {};
  const pkgPath = path.resolve(cwd, 'package.json');
  let pkg: PKG = fs.readJSONSync(pkgPath);

  // 版本检查
  if (checkVersionUpdate) {
    await update(false);
  }

  // 初始化 `eslintType`。
  if (options.eslintType && PROJECT_TYPES.find((choice) => choice.value === options.eslintType)) {
    config.eslintType = options.eslintType;
  } else {
    config.eslintType = await chooseEslintType();
  }

  // 初始化 `enableStylelint`。
  if (typeof options.enableStylelint === 'boolean') {
    config.enableStylelint = options.enableStylelint;
  } else {
    config.enableStylelint = await chooseEnableStylelint(!/node/.test(config.eslintType));
  }

  // 初始化 `enableMarkdownlint`。
  if (typeof options.enableMarkdownlint === 'boolean') {
    config.enableMarkdownlint = options.enableMarkdownlint;
  } else {
    config.enableMarkdownlint = await chooseEnableMarkdownLint();
  }

  // 初始化 `enablePrettier`。
  if (typeof options.enablePrettier === 'boolean') {
    config.enablePrettier = options.enablePrettier;
  } else {
    config.enablePrettier = await chooseEnablePrettier();
  }

  // 在 `package.json` 中写入 `scripts`。
  if (!pkg.scripts) {
    pkg.scripts = {};
  }
  if (!pkg.scripts[`${PKG_NAME}-scan`]) {
    pkg.scripts[`${PKG_NAME}-scan`] = `${PKG_NAME} scan`;
  }
  if (!pkg.scripts[`${PKG_NAME}-fix`]) {
    pkg.scripts[`${PKG_NAME}-fix`] = `${PKG_NAME} fix`;
  }

  log.info('Step 5. 检查并处理项目中可能存在的依赖和配置冲突');
  pkg = await conflictResolve(cwd);
  log.success('Step 5. 已完成项目依赖和配置冲突检查处理 :D');

  log.info('Step 6. 安装依赖');
  const npm = await npmType;
  spawn.sync(
    npm,
    ['i', '-D', PKG_NAME, ...(config.enablePrettier ? ['eslint-config-prettier'] : [])],
    { stdio: 'inherit', cwd },
  );
  // 更新 dependencies
  pkg = fs.readJSONSync(pkgPath);
  log.success('Step 6. 安装依赖成功 :D');

  // 配置 commit 卡点
  log.info('Step 7. 配置 git commit 卡点');
  if (!pkg.husky) pkg.husky = {};
  if (!pkg.husky.hooks) pkg.husky.hooks = {};
  pkg.husky.hooks['commit-msg'] = `${PKG_NAME} exec commitlint -E HUSKY_GIT_PARAMS`;
  pkg.husky.hooks['pre-commit'] = `${PKG_NAME} commit-scan`;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  log.success('Step 7. 配置 git commit 卡点成功 :D');

  log.info('Step 8. 写入配置文件');
  generateTemplate(cwd, config);
  log.success('Step 8. 写入配置文件成功 :D');

  // 完成信息。
  const logs = [`${PKG_NAME} 初始化完成 :D`].join('\r\n');
  log.success(logs);
};
