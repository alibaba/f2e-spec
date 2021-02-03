import https from 'https';
import { sync as commandExistsSync } from 'command-exists';

/**
 * npm 类型
 */
const promise: Promise<'npm' | 'tnpm'> = new Promise((resolve) => {
  if (!commandExistsSync('tnpm')) return resolve('npm');

  https
    .get('https://registry.npm.alibaba-inc.com/pedding', { timeout: 2000 }, () => resolve('tnpm'))
    .on('error', () => resolve('npm'));
});

export default promise;
