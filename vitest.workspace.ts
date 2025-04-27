import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  './vitest.config.ts',
  './packages/f2etest/vitest.config.ts',
  './packages/f2elint/vitest.config.ts',
  './packages/eslint-config-ali/vitest.config.ts',
]);
