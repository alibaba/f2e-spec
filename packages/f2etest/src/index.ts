import { init } from 'init-roll';
import { dirname, isAbsolute, join } from 'path';
import prettier from 'prettier-config-ali';
import { fileURLToPath } from 'url';

export interface F2etestOptions {
  template?: 'react' | 'base';
  unitTest?: 'vitest' | 'none';
  e2eTest?: 'playwright' | 'none';
  disableLog?: boolean;
}

export async function f2etest(project: string | null = '.', options: F2etestOptions = {}) {
  const { template = 'base', unitTest = 'vitest', e2eTest = 'playwright' } = options;
  const projectFullPath = isAbsolute(project) ? project : join(process.cwd(), project);

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const initTemplate = (t: string) =>
    init(join(__dirname, '..', 'templates', t), projectFullPath, options, {
      disableLog: options.disableLog,
      prettier,
      bumpDependencies: true,
    });

  await initTemplate(template);
  if (unitTest !== 'none') {
    await initTemplate(unitTest);
  }
  if (e2eTest !== 'none') {
    await initTemplate(e2eTest);
  }
}
