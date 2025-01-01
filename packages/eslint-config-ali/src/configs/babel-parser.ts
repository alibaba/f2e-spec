import parser from '@babel/eslint-parser';
import type { Linter } from 'eslint';
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
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    },
  },
  ...gitignore,
};

export default babelParser;
