import { init } from 'init-roll';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { TemplateType } from './types';

export { TemplateType };

export interface F2elintOptions {
  template?: TemplateType;
  stylelint?: boolean;
  prettier?: boolean;
  commitlint?: boolean;
  lintStaged?: boolean;
}

export async function f2elint(project: string | null, options: F2elintOptions = {}) {
  const projectFullPath = project?.startsWith('/') ? project : join(process.cwd(), project || '.');

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const template = options?.template || 'base-js';
  const initTemplate = (t: string) => init(join(__dirname, '..', 'templates', t), projectFullPath, options);

  await initTemplate('base');
  await initTemplate(template);
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
