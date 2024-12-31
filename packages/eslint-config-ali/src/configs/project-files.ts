import type { Linter } from 'eslint';

export default {
  name: 'ali/project-files',
  files: ['**/*.{cjs,cts,js,jsx,mjs,mts,ts,tsx}'],
} satisfies Linter.Config;
