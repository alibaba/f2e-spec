const { execSync } = require('child_process');
const ora = require('ora');
const log = require('../utils/log');
const npmType = require('../utils/npmType');
const { PKG_NAME, PKG_VERSION } = require('../utils/constants');

/**
 * 检查最新版本号
 * @returns {Promise<string|null>}
 */
const checkLatestVersion = async () => {
  const npm = await npmType;
  const version = execSync(`${npm} view ${PKG_NAME} version`).toString('utf-8').trim();

  if (PKG_VERSION === version) return null;

  return version;
};

module.exports = async (install = true) => {
  const checking = ora(`[${PKG_NAME}] 正在检查最新版本...`);
  checking.start();

  const npm = await npmType;
  const version = await checkLatestVersion();
  checking.stop();

  if (version && install) {
    const update = ora(`[${PKG_NAME}] 存在新版本，将升级至 ${version} \n`);

    update.start();

    execSync(`${npm} i -g ${PKG_NAME}`);

    update.stop();
  } else if (version && !install) {
    log.warn(`[${PKG_NAME}] 最新版本为 ${version}，本地版本为 ${PKG_VERSION}，请尽快升级到最新版本。\n你可以执行 ${npm} install -g ${PKG_NAME}@latest 来安装此版本\n`);
  } else if (!version && install) {
    log.info(`[${PKG_NAME}] 当前没有可用的更新`);
  }
};
