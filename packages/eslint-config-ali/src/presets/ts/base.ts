import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import ts from 'typescript-eslint';

const base = ts.config(js.configs.recommended, ...ts.configs.recommended, prettier, {
  name: 'rive',
  files: ['src/**/*.{js,jsx,ts,tsx}'],
  ignores: ['*.min.js'],
  languageOptions: {
    parserOptions: {
      projectService: true,
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
  },
});

export default base;
