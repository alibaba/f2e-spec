import js from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import babelParser from '../configs/babel-parser';
import bestPractices from '../configs/best-practices';
import es6 from '../configs/es6';
import gitignore from '../configs/gitignore';
import possibleErrors from '../configs/possible-errors';
import stylistic from '../configs/stylistic';
import typescript from '../configs/typescript';
import variables from '../configs/variables';
import defineConfigArray from '../utils/defineConfigArray';

export default defineConfigArray([
  gitignore,
  js.configs.recommended,
  bestPractices,
  possibleErrors,
  stylisticPlugin.configs['disable-legacy'],
  stylistic,
  es6,
  variables,
  babelParser,
  ...typescript,
]);
