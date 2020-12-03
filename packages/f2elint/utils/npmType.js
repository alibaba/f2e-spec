const https = require('https');
const commandExistsSync = require('command-exists').sync;

/**
 * 获取 npm 类型
 * @type {Promise<unknown>}
 */
module.exports = new Promise((resolve) => {
  const npm = commandExistsSync('tnpm') ? 'tnpm' : 'npm';
  if (npm === 'tnpm') {
    https.get('https://registry.npm.alibaba-inc.com/pedding', { timeout: 2000 }, () => {
      resolve('tnpm');
    }).on('error', () => {
      resolve('npm');
    });
  } else {
    resolve(npm);
  }
});
