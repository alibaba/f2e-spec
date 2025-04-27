import { init } from 'init-roll';
import { dirname, isAbsolute, join } from 'path';
import prettier from 'prettier-config-ali';
import { fileURLToPath } from 'url';

export type TemplateType = 'base' | 'web' | 'react' | 'preact';

export interface F2etestOptions {
  template?: TemplateType;
  disableLog?: boolean;
}

export async function f2etest(project: string, options: F2etestOptions = {}) {
  const { template = 'base' } = options;
  const projectFullPath = isAbsolute(project) ? project : join(process.cwd(), project);

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const initTemplate = (t: string) =>
    init(join(__dirname, '..', 'templates', t), projectFullPath, options, {
      disableLog: options.disableLog,
      prettier,
      bumpDependencies: true,
    });

  switch (template) {
    case 'preact':
      await initTemplate('preact');
      await initTemplate('web');
      await initTemplate('base');
      break;
    case 'react':
      await initTemplate('react');
      await initTemplate('web');
      await initTemplate('base');
      break;
    case 'web':
      await initTemplate('web');
      await initTemplate('base');
      break;
    default:
      await initTemplate('base');
  }
}
