import fg from 'fast-glob';
import { readFile, writeFile } from 'fs-extra';
import { extname } from 'path';
import prettier from 'prettier';
import { ScanOptions } from '../../types';
import { PRETTIER_FILE_EXT, PRETTIER_IGNORE_PATTERN } from '../../utils/constants';

export type DoPrettierOptions = ScanOptions;

export async function doPrettier(options: DoPrettierOptions) {
  let files: string[] = [];
  if (options.files) {
    files = options.files.filter((name) => PRETTIER_FILE_EXT.includes(extname(name)));
  } else {
    const pattern = `**/*.{${PRETTIER_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`;
    files = await fg(pattern, {
      cwd: options.include,
      ignore: PRETTIER_IGNORE_PATTERN.map((p) => (p.endsWith('/') ? `${p}**/*` : p)),
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
