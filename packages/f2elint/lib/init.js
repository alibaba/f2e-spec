const inquirer = require('inquirer');
const spawn = require('cross-spawn');
const path = require('path');
const fs = require('fs-extra');
const { Linter } = require('eslint');
const log = require('../utils/log');
const writeVscodeFolder = require('../utils/writeVscodeFolder');
const conflictResolve = require('../utils/conflictResolve');
const npmType = require('../utils/npmType');
const update = require('./update');
const {
  PKG_NAME,
  PKG_VERSION,
  PROJECT_TYPES,
  ESLINT_FILE_MATCH,
  ESLINT_IGNORE_PATTERN,
  STYLELINT_FILE_MATCH,
  STYLELINT_IGNORE_PATTERN,
  MARKDOWNLINT_IGNORE_PATTERN,
} = require('../utils/constants');

/**
 * 选择项目语言和框架。
 *
 * @returns {Promise<string>} 选择的语言和框架类型。
 */
const chooseEslintType = async () => {
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
 * 选择是否启用 `stylelint`。
 *
 * @returns {Promise<boolean>} 是否启用。
 */
const chooseEnableStylelint = async () => {
  const { enable } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'enable',
      message: 'Step 2. 是否需要使用 stylelint（若没有样式文件则不需要）：',
      default: true,
    },
  ]);

  return enable;
};

/**
 * 选择是否启用 `markdownlint`。
 *
 * @returns {Promise<boolean>} 是否启用。
 */
const chooseEnableMarkdownlint = async () => {
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
 * 判断传入的 `eslintType` 是否合法。
 *
 * @param {string} type
 */
const isEslintTypeValid = (type) => {
  return PROJECT_TYPES.filter((choice) => choice.value === type).length > 0;
};

const initByType = {
  eslint: (type, cwd) => {
    const eslintrcSourcePath = path.resolve(__dirname, 'config/eslint/index.js');
    const eslintrcTargetPath = path.resolve(cwd, '.eslintrc.js');
    const configName = type === 'index' ? 'eslint-config-ali' : `eslint-config-ali/${type}`;
    fs.writeFileSync(
      eslintrcTargetPath,
      fs.readFileSync(eslintrcSourcePath, 'utf8').replace('${configName}', configName),
    );

    const eslintIgnoreTargetPath = path.resolve(cwd, '.eslintignore');
    fs.writeFileSync(eslintIgnoreTargetPath, ESLINT_IGNORE_PATTERN.join('\n'));

    log.success('ESLint 配置写入成功');
  },
  stylelint: (cwd) => {
    const stylelintrcSourcePath = path.resolve(__dirname, 'config/stylelint/index.js');
    const stylelintrcTargetPath = path.resolve(cwd, '.stylelintrc.js');
    fs.writeFileSync(stylelintrcTargetPath, fs.readFileSync(stylelintrcSourcePath, 'utf8'));

    const stylelintIgnoreTargetPath = path.resolve(cwd, '.stylelintignore');
    fs.writeFileSync(stylelintIgnoreTargetPath, STYLELINT_IGNORE_PATTERN.join('\n'));

    log.success('stylelint 配置写入成功');
  },
  markdownlint: (cwd) => {
    const markdownlintSourcePath = path.resolve(__dirname, 'config/markdownlint/index.json');
    const markdownlintTargetPath = path.resolve(cwd, '.markdownlint.json');
    fs.writeFileSync(
      markdownlintTargetPath,
      fs.readFileSync(markdownlintSourcePath, 'utf8').replace('${extends}', `./node_modules/${PKG_NAME}/node_modules/markdownlint-config-ali/index.json`),
    );

    const markdownlintIgnoreTargetPath = path.resolve(cwd, '.markdownlintignore');
    fs.writeFileSync(markdownlintIgnoreTargetPath, MARKDOWNLINT_IGNORE_PATTERN.join('\n'));

    log.success('markdownlint 配置写入成功');
  },
  commitlint: (cwd) => {
    const commitlintConfigSourcePath = path.resolve(__dirname, 'config/commitlint/index.js');
    const commitlintConfigTargetPath = path.resolve(cwd, 'commitlint.config.js');
    fs.writeFileSync(
      commitlintConfigTargetPath,
      fs.readFileSync(commitlintConfigSourcePath, 'utf8'),
    );

    log.success('commitlint 配置写入成功');
  },
  prettier: (cwd) => {
    const prettierConfigSourcePath = path.resolve(__dirname, 'config/prettier/index.js');
    const prettierConfigTargetPath = path.resolve(cwd, '.prettierrc.js');
    fs.writeFileSync(prettierConfigTargetPath, fs.readFileSync(prettierConfigSourcePath, 'utf8'));

    log.success('Prettier 配置写入成功');
  },
  editorconfig: (cwd) => {
    const editorconfigSourcePath = path.resolve(
      __dirname,
      'config/editorconfig/__editorconfig_template',
    );
    const editorconfigTargetPath = path.resolve(cwd, '.editorconfig');
    fs.writeFileSync(editorconfigTargetPath, fs.readFileSync(editorconfigSourcePath, 'utf8'));

    log.success('.editorconfig 写入成功');
  },
};

const apiInit = async (options = {}) => {
  const cwd = options.cwd || process.cwd();
  const checkVersionUpdate = options.checkVersionUpdate || false;
  const targetPkgPath = path.resolve(cwd, 'package.json');

  const targetPkg = require(targetPkgPath);
  const configPath = path.resolve(cwd, `${PKG_NAME}.config.js`);
  const config = {};

  if (checkVersionUpdate) {
    // 版本检查
    await update(false);
  }

  // 初始化 `eslintType`。
  if (isEslintTypeValid(options.eslintType)) {
    config.eslintType = options.eslintType;
  } else {
    config.eslintType = await chooseEslintType();
  }

  // 初始化 `enableStylelint`。
  if (typeof options.enableStylelint === 'boolean') {
    config.enableStylelint = options.enableStylelint;
  } else {
    config.enableStylelint = await chooseEnableStylelint();
  }

  // 初始化 `enableMarkdownlint`。
  if (typeof options.enableMarkdownlint === 'boolean') {
    config.enableMarkdownlint = options.enableMarkdownlint;
  } else {
    config.enableMarkdownlint = await chooseEnableMarkdownlint();
  }

  log.info('Step 4. 检查并处理项目中可能存在的依赖和配置冲突');
  await conflictResolve(config.eslintType, cwd);
  log.success('Step 4. 已完成项目依赖和配置冲突检查处理 :D');

  // 在 `package.json` 中写入 `scripts`。
  if (!targetPkg.scripts) {
    targetPkg.scripts = {};
  }
  if (!targetPkg.scripts[`${PKG_NAME}-scan`]) {
    targetPkg.scripts[`${PKG_NAME}-scan`] = `${PKG_NAME} scan`;
  }
  if (!targetPkg.scripts[`${PKG_NAME}-fix`]) {
    targetPkg.scripts[`${PKG_NAME}-fix`] = `${PKG_NAME} fix`;
  }

  log.info('Step 5. 安装依赖');
  const npm = await npmType;
  spawn.sync(npm, ['i', PKG_NAME, '--save-dev'], {
    stdio: 'inherit',
    cwd,
  });

  // FIXME: 有时 `devDependencies` 加不上。
  if (!targetPkg.devDependencies) {
    targetPkg.devDependencies = {
      [PKG_NAME]: `^${PKG_VERSION}`,
    };
  } else if (!targetPkg.devDependencies[PKG_NAME]) {
    targetPkg.devDependencies[PKG_NAME] = `^${PKG_VERSION}`;
  }
  log.success('Step 5. 安装依赖成功 :D');

  log.info('Step 6. 写入配置文件');
  // 写入 f2elintConfig 文件
  const { eslintType, ...others } = config;
  const f2elintConfig = `module.exports = ${JSON.stringify(others, null, 2)}`;
  const linter = new Linter();
  // FIXME: 直接引config
  const messages = linter.verifyAndFix(f2elintConfig, {
    rules: {
      semi: 2,
      quotes: ['error', 'single', { avoidEscape: true }],
      'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
      'comma-dangle': ['error', 'always-multiline'],
      'eol-last': ['warn', 'always'],
    },
  });
  fs.writeFileSync(configPath, messages.output);

  const plugins = [
    'eslint',
    'commitlint',
    'prettier',
    'editorconfig',
    ...(config.enableStylelint ? ['stylelint'] : []),
    ...(config.enableMarkdownlint ? ['markdownlint'] : []),
  ];
  for (const type of plugins) {
    if (initByType[type]) {
      if (type === 'eslint') {
        initByType[type](config.eslintType, cwd);
      } else {
        initByType[type](cwd);
      }
    }
  }

  // 写入 `.vscode` 配置文件。
  await writeVscodeFolder({ cwd });
  log.success('Step 6. 写入配置文件成功 :D');

  log.info('Step 7. 配置 git commit 卡点');
  if (!targetPkg.husky) {
    targetPkg.husky = {
      hooks: {},
    };
  }
  targetPkg.husky.hooks['commit-msg'] = `${PKG_NAME} exec commitlint -E HUSKY_GIT_PARAMS`;
  targetPkg.husky.hooks['pre-commit'] = `${PKG_NAME} exec lint-staged`;
  targetPkg['lint-staged'] = {};
  targetPkg['lint-staged'][`**/${ESLINT_FILE_MATCH}`] = `${PKG_NAME} exec eslint`;
  if (config.enableStylelint) {
    targetPkg['lint-staged'][`**/${STYLELINT_FILE_MATCH}`] = `${PKG_NAME} exec stylelint`;
  }
  fs.writeFileSync(targetPkgPath, JSON.stringify(targetPkg, null, 2));
  log.success('Step 7. 配置 git commit 卡点成功 :D');

  // 完成信息。
  const logs = [`${PKG_NAME} 初始化完成 :D`].join('\r\n');
  log.success(logs);
};

const cliInit = async () => {
  await apiInit({});
};

module.exports = {
  cliInit,
  init: apiInit,
};
