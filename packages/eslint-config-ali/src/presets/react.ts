import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import react from '../configs/react';
import defineConfigArray from '../utils/defineConfigArray';
import base from './base';

export default defineConfigArray([
  ...base,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactHooksPlugin.configs.recommended,
  react,
]);
