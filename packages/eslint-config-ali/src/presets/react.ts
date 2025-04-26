import reactPlugin from 'eslint-plugin-react';
import react from '../configs/react';
import defineConfigArray from '../utils/defineConfigArray';
import base from './base';

export default defineConfigArray([
  ...base,
  reactPlugin.configs.flat!.recommended,
  reactPlugin.configs.flat!['jsx-runtime'],
  react,
]);
