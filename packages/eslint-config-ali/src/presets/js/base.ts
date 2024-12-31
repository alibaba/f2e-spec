import { Linter } from 'eslint';
import bestPractices from '../../configs/best-practices';
import es6 from '../../configs/es6';
import gitignore from '../../configs/gitignore';
import possibleErrors from '../../configs/possible-errors';
import projectFiles from '../../configs/project-files';
import style from '../../configs/style';
import variables from '../../configs/variables';

const old = {
  extends: ['./rules/base/variables', './rules/base/strict', './rules/imports'].map(
    require.resolve,
  ),
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
  },
  root: true,
};

const jsBase: Linter.Config[] = [
  bestPractices,
  possibleErrors,
  style,
  es6,
  variables,
  projectFiles,
  gitignore,
];

export default jsBase;
