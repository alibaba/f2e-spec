import execa from 'execa';

/**
 * 获取此次 commit 修改的文件列表
 * @param options
 */
export default async (options: execa.Options = {}): Promise<string[]> => {
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
