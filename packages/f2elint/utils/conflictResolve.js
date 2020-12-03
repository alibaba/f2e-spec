/*
 * 检查并处理项目中可能存在的依赖和配置冲突
 */

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs-extra');
const log = require('./log');
const { batchExistFiles, batchDeleteFiles } = require('./fs');
const { objToArr, arrToObj } = require('./typeHelper');
const { getRepeatPackage, getLeaveOverPackageFromConfig, uninstallPackages } = require('./package');
const { PKG_NAME } = require('./constants');

/**
 * eslint依赖项冗余检查
 * @param {*} eslintType
 */
function checkInstalledESLint(dependenciesArr, eslintType) {
  const basePackage = ['eslint', 'eslint-config-ali', 'eslint-plugin-import', 'babel-eslint'];
  const reactPackage = ['eslint-plugin-react', 'eslint-plugin-react-hooks'];
  const vuePackage = ['eslint-plugin-vue', 'vue-eslint-parser', '@vue/cli-plugin-eslint'];
  const tsPackage = ['@typescript-eslint/eslint-plugin', '@typescript-eslint/parser'];

  let willRemoveESLintPackage = [].concat(getRepeatPackage(dependenciesArr, basePackage));
  if (eslintType.includes('react')) {
    willRemoveESLintPackage = willRemoveESLintPackage.concat(
      getRepeatPackage(dependenciesArr, reactPackage),
    );
  }
  if (eslintType.includes('vue')) {
    willRemoveESLintPackage = willRemoveESLintPackage.concat(
      getRepeatPackage(dependenciesArr, vuePackage),
    );
  }
  if (eslintType.includes('typescript')) {
    willRemoveESLintPackage = willRemoveESLintPackage.concat(
      getRepeatPackage(dependenciesArr, tsPackage),
    );
  }
  return willRemoveESLintPackage;
}

/**
 * stylelint依赖项冗余检查
 */
function checkInstalledStyleLint(dependenciesArr) {
  const styleLintPackage = ['stylelint', 'stylelint-config-ali', 'stylelint-scss'];
  const willRemoveStyleLintPackage = getRepeatPackage(dependenciesArr, styleLintPackage);
  return willRemoveStyleLintPackage;
}

/**
 * markdownlint 依赖冗余检查。
 *
 * @param {string[]} dependenciesArr
 * @returns {string[]}
 */
function checkInstalledMarkdownlint(dependenciesArr) {
  const markdownlintPackage = ['markdownlint', 'markdownlint-cli'];
  const willRemoveMarkdownlintPackage = getRepeatPackage(dependenciesArr, markdownlintPackage);
  return willRemoveMarkdownlintPackage;
}

/**
 * commitlint依赖项冗余检查
 */
function checkInstalledCommitLint(dependenciesArr) {
  const commitLintPackage = ['@commitlint/cli', 'commitlint-config-ali'];
  const willRemoveCommitLintPackage = getRepeatPackage(dependenciesArr, commitLintPackage);
  return willRemoveCommitLintPackage;
}

/**
 * 待删除的无用配置，参考官方配置，移除.js后缀以外的配置文件，放置生效混乱
 * https://eslint.org/docs/user-guide/configuring#configuration-file-formats
 * https://prettier.io/docs/en/configuration.html
 * https://stylelint.io/user-guide/configure
 */
function checkUselessConfig(cwd) {
  const uselessESLintConfig = [
    '.eslintrc.cjs',
    '.eslintrc.yaml',
    '.eslintrc.yml',
    '.eslintrc',
    '.eslintrc.json',
  ];
  const uselessPrettierConfig = [
    '.prettierrc',
    '.prettierrc.json',
    '.prettierrc.yml',
    '.prettierrc.yaml',
    '.prettierrc.json5',
    '.prettierrc.cjs',
    'prettier.config.js',
    'prettier.config.cjs',
    '.prettierrc.toml',
  ];
  const uselessStyleLintConfig = [
    '.stylelintrc',
    '.stylelintrc.json',
    '.stylelintrc.yaml',
    '.stylelintrc.yml',
  ];
  const uselessMarkdownlintConfig = [
    '.markdownlintrc',
    '.markdownlint.js',
    '.markdownlint.jsonc',
    '.markdownlint.yml',
    '.markdownlint.yaml',
  ];
  const uselessConfig = uselessESLintConfig
    .concat(uselessPrettierConfig)
    .concat(uselessPrettierConfig)
    .concat(uselessStyleLintConfig)
    .concat(uselessMarkdownlintConfig);
  return batchExistFiles(uselessConfig, (file) => {
    return path.resolve(cwd, file);
  });
}

/**
 * 待重写的配置
 */
function checkReWriteConfig(cwd) {
  const reWriteConfig = [
    'commitlint.config.js',
    '.editorconfig',
    '.vscode/settings.json',
    '.eslintignore',
    '.eslintrc.js',
    '.prettierrc.js',
    '.stylelintignore',
    '.stylelintrc.js',
    '.markdownlint.json',
    `${PKG_NAME}.config.js`,
  ];
  return batchExistFiles(reWriteConfig, (file) => {
    return path.resolve(cwd, file);
  });
}

async function conflictResolve(eslintType, cwd = process.cwd()) {
  const targetPkgPath = path.resolve(cwd, 'package.json');
  const targetPkg = require(targetPkgPath);
  const targetDependencies = targetPkg.dependencies;
  const targetDevDependencies = targetPkg.devDependencies;
  const dependenciesArr = []
    .concat(objToArr(targetDependencies, { isDev: false }))
    .concat(objToArr(targetDevDependencies, { isDev: true }));

  // 根据安装类型获得需要删除的依赖、无用配置路径、覆盖文件的路径
  const willRemovePackage = []
    .concat(checkInstalledESLint(dependenciesArr, eslintType))
    .concat(checkInstalledStyleLint(dependenciesArr))
    .concat(checkInstalledMarkdownlint(dependenciesArr))
    .concat(checkInstalledCommitLint(dependenciesArr));
  const uselessConfig = checkUselessConfig(cwd);
  const reWriteConfig = checkReWriteConfig(cwd);
  const willChangeCount = willRemovePackage.length + uselessConfig.length + reWriteConfig.length;

  // 提示是否移除原配置
  if (willChangeCount > 0) {
    log.warn(`检测到项目中存在可能与 ${PKG_NAME} 冲突的依赖和配置，为保证正常运行将`);
    if (willRemovePackage.length > 0) {
      log.warn('删除以下依赖：');
      log.warn(JSON.stringify(arrToObj(willRemovePackage), null, '\t'));
    }
    if (uselessConfig.length > 0) {
      log.warn('删除以下配置：');
      log.warn(JSON.stringify(uselessConfig, null, '\t'));
    }
    if (reWriteConfig.length > 0) {
      log.warn('覆盖以下配置：');
      log.warn(JSON.stringify(reWriteConfig, null, '\t'));
    }
  }
  let answer = {
    isOverWrite: true,
  };
  if (willChangeCount > 0) {
    answer = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'isOverWrite',
        message: '请确认是否继续：',
      },
    ]);
  }
  if (!answer.isOverWrite) {
    process.exit(0);
  }

  // 卸载依赖包
  uninstallPackages(willRemovePackage);
  // 包未安装时，移除package.json配置
  const { leaveOverDep, leaveOverDevDep } = getLeaveOverPackageFromConfig(
    dependenciesArr,
    willRemovePackage,
  );
  targetPkg.dependencies = leaveOverDep;
  targetPkg.devDependencies = leaveOverDevDep;
  fs.writeFileSync(targetPkgPath, JSON.stringify(targetPkg, null, '  '));
  // 删除无用配置
  batchDeleteFiles(uselessConfig, (file) => {
    return path.resolve(cwd, file);
  });
}

module.exports = conflictResolve;
