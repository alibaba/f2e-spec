/*
 * 写入 .vscode/settings.json 和 .vscode/extensions.json 到项目目录
 */
const path = require('path');
const fs = require('fs-extra');
const safeEval = require('safe-eval');
const mergeWith = require('lodash.mergewith');
const inquirer = require('inquirer');
const log = require('./log');

/**
 * 将模板源文件写入到项目的.vscode目录，若已存在则merge
 * @param {string} sourceName 模板源文件名称
 * @param {string} targetName 要写入的目标文件名称
 * @param {string} [cwd=process.cwd()] 要写入的目标文件名称
 */
function writeTargetFromSource(sourceName, targetName, cwd = process.cwd()) {
  const sourcePath = path.resolve(
    __dirname,
    `../lib/config/editorconfig/${sourceName}`,
  );
  const vscodeFolderPath = path.resolve(cwd, '.vscode');
  if (!fs.existsSync(vscodeFolderPath)) {
    fs.mkdirSync(vscodeFolderPath);
  }
  const targetPath = path.resolve(cwd, `.vscode/${targetName}`);
  if (!fs.existsSync(targetPath)) {
    fs.writeFileSync(targetPath, fs.readFileSync(sourcePath, 'utf8'));
  } else {
    const targetObj = safeEval(fs.readFileSync(targetPath, 'utf8'));
    const sourceObj = safeEval(fs.readFileSync(sourcePath, 'utf8'));
    mergeWith(targetObj, sourceObj, (target, source) => {
      if (Array.isArray(target) && Array.isArray(source)) {
        return [...new Set(source.concat(target))];
      }
    });
    fs.writeFileSync(targetPath, JSON.stringify(targetObj, null, '\t'));
  }

  log.success(`.vscode/${targetName} 写入成功`);
}

/**
 * 获取 eslint 默认配置
 * @param {Object} [options]
 * @param {boolean} [options.needFixOnSave=false] - 传 true 时不触发 inquirer.prompt
 * @param {string} [options.cwd=process.cwd()]
 * @returns {{}}
 */
async function writeVscodeFolder({ needFixOnSave = false, cwd = process.cwd() } = {}) {
  let answer = {
    needFixOnSave,
  };
  if (!needFixOnSave) {
    answer = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'needFixOnSave',
        message: '是否设置 VSCode 在代码保存时自动修复问题？（通过写入 .vscode/settings.json）',
      },
    ]);
  }
  if (answer.needFixOnSave) {
    writeTargetFromSource('__vscode_settings_template_need_fix_onsave', 'settings.json', cwd);
  } else {
    writeTargetFromSource('__vscode_settings_template', 'settings.json', cwd);
  }

  writeTargetFromSource('__vscode_extensions_template', 'extensions.json', cwd);
}

module.exports = writeVscodeFolder;
