import { ScanOptions } from 'types';
import { PRETTIER_FILE_EXT, PRETTIER_IGNORE_PATTERN } from 'utils/constants';
import fg from 'fast-glob';
import { extname, join } from 'path';
import prettier from 'prettier';
import { writeFile, readFile } from 'fs-extra';

export interface DoPrettierOptions extends ScanOptions {
  cwd: string;
}

export async function doPrettier(options: DoPrettierOptions) {
  let files: string[] = [];
  if (options.files) {
    files = options.files.filter((name) => PRETTIER_FILE_EXT.includes(extname(name)));
  } else {
    const pattern = join(
      options.include,
      `**/*.{${PRETTIER_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`,
    );
    files = await fg(pattern, {
      cwd: options.cwd,
      ignore: PRETTIER_IGNORE_PATTERN,
    });
  }
  await Promise.all(files.map(formatFile));
}

async function formatFile(filepath: string) {
  const text = await readFile(filepath, 'utf8');
  const options = await prettier.resolveConfig(filepath);
  const formatted = prettier.format(text, { ...options, filepath });
  await writeFile(filepath, formatted, 'utf8');
}
