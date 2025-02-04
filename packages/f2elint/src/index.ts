import { init } from 'init-roll';
import { dirname, isAbsolute, join } from 'path';
import prettier from 'prettier-config-ali';
import { fileURLToPath } from 'url';
import { TemplateType } from './types';

export { TemplateType };

export interface F2elintOptions {
  template?: TemplateType;
  stylelint?: boolean;
  prettier?: boolean;
  commitlint?: boolean;
  lintStaged?: boolean;
  disableLog?: boolean;
}

export async function f2elint(project: string | null = '.', options: F2elintOptions = {}) {
  const projectFullPath = isAbsolute(project) ? project : join(process.cwd(), project);

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const template = options?.template || 'base';
  const initTemplate = (t: string) =>
    init(join(__dirname, '..', 'templates', t), projectFullPath, options, {
      disableLog: options.disableLog,
      prettier,
      bumpDependencies: true,
    });

  await initTemplate('base');
  if (template !== 'base') {
    await initTemplate(template);
  }
  if (options.stylelint) {
    await initTemplate('stylelint');
  }
  if (options.prettier) {
    await initTemplate('prettier');
  }
  if (options.lintStaged) {
    await initTemplate('lint-staged');
  }
  if (options.lintStaged) {
    await initTemplate('commitlint');
  }
}
