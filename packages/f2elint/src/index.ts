import ora from 'ora';
import scan from './actions/scan';
import init from './actions/init';
import { PKG_NAME } from './utils/constants';
import printReport from './utils/printReport';
import type { InitOptions, ScanOptions } from './types';

type IInitOptions = Omit<InitOptions, 'checkVersionUpdate'>;

export default {
  async init(options: IInitOptions) {
    return await init({
      ...options,
      checkVersionUpdate: false,
    });
  },
  async scan(options: ScanOptions) {
    const checking = ora();
    checking.start(`执行 ${PKG_NAME} 代码检查`);

    const report = await scan(options);
    const { results, errorCount, warningCount } = report;
    let type = 'succeed';
    if (errorCount > 0) {
      type = 'fail';
    } else if (warningCount > 0) {
      type = 'warn';
    }

    checking[type]();
    if (results.length > 0) printReport(results, false);

    return report;
  },
};
