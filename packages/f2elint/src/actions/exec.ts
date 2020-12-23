import path from 'path';
import spawn from 'cross-spawn';
import { PKG_NAME } from '../utils/constants';

/**
 * 将 PKG_NAME exec <linter> [...options] 作为 linter [...options] 执行
 * @param linter
 * @param opts
 */
export default (linter: string, opts: Record<string, any>) => {
  const { rawArgs } = opts.parent;
  const linterArgs = rawArgs.slice(rawArgs.indexOf(linter) + 1);

  // stylelint 加这个防止没匹配到文件时抛错
  if (linter === 'stylelint') {
    linterArgs.push('--allow-empty-input');
  }

  const result = spawn.sync(
    path.resolve(process.cwd(), `./node_modules/${PKG_NAME}/node_modules/.bin/${linter}`),
    linterArgs,
    { stdio: 'inherit' },
  );

  if (result.status !== 0) {
    process.exit(result.status);
  }
};
