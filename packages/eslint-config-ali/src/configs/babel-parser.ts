import parser from '@babel/eslint-parser';
import type { Linter } from 'eslint';
import globals from 'globals';
import { fileURLToPath } from 'url';
import gitignore from './gitignore';

/** Use babel as eslint parser to support more styntax and features */
const babelParser: Linter.Config = {
  name: 'ali/babel-parser',
  files: ['**/*.{cjs,js,jsx,mjs}'],
  languageOptions: {
    parser,
    parserOptions: {
      requireConfigFile: false,
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        globalReturn: false,
        impliedStrict: true,
        jsx: true,
      },
      babelOptions: {
        babelrc: false,
        configFile: false,
        presets: [
          fileURLToPath(import.meta.resolve('@babel/preset-env')),
          fileURLToPath(import.meta.resolve('@babel/preset-react')),
        ],
      },
    },
    globals: {
      ...globals.node,
      ...globals.browser,
    },
  },
  ...gitignore,
};

export default babelParser;
