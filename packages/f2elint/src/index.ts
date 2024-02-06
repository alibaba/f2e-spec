import { init } from 'init-roll';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { TemplateType } from './types';

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
  const template = options?.template || 'react';
  const templateFullPath = join(__dirname, '..', 'templates', template);

  await init(templateFullPath, projectFullPath, options);
}
