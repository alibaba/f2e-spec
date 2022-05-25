import fg from 'fast-glob';
import { extname } from 'path';
import stylelint from 'stylelint';
import { PKG, ScanOptions } from '../../types';
import { STYLELINT_FILE_EXT, STYLELINT_IGNORE_PATTERN } from '../../utils/constants';
import { formatStylelintResults } from './formatStylelintResults';
import { getStylelintConfig } from './getStylelintConfig';

export interface DoStylelintOptions extends ScanOptions {
  pkg: PKG;
}

export async function doStylelint(options: DoStylelintOptions) {
  let files: string[];
  if (options.files) {
    files = options.files.filter((name) => STYLELINT_FILE_EXT.includes(extname(name)));
  } else {
    const pattern = `**/*.{${STYLELINT_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`;
    files = await fg(pattern, {
      cwd: options.include,
      ignore: STYLELINT_IGNORE_PATTERN.map((p) => (p.endsWith('/') ? `${p}**/*` : p)),
    });
  }
  const data = await stylelint.lint({
    ...getStylelintConfig(options, options.pkg, options.config),
    files,
  });
  return formatStylelintResults(data.results, options.quiet);
}
