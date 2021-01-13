import execa from 'execa';

/**
 * 获取此次 commit 修改的文件列表
 * @param options
 */
export const getCommitFiles = async (options: execa.Options = {}): Promise<string[]> => {
  try {
    const { stdout } = await execa(
      'git',
      [
        '-c',
        'submodule.recurse=false',
        'diff',
        '--staged',
        '--diff-filter=ACMR',
        '--name-only',
        '-z',
      ],
      {
        ...options,
        all: true,
        cwd: options.cwd || process.cwd(),
      },
    );

    return stdout ? stdout.replace(/\u0000$/, '').split('\u0000') : [];
  } catch (e) {
    return [];
  }
};

/**
 * 获取未 add 的修改文件数量
 * @param options
 */
export const getAmendFiles = async (options: execa.Options = {}): Promise<string> => {
  try {
    const { stdout } = await execa('git', ['diff', '--name-only'], {
      ...options,
      all: true,
      cwd: options.cwd || process.cwd(),
    });

    return stdout;
  } catch (e) {
    return '';
  }
};
