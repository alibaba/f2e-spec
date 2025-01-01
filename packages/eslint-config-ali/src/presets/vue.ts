import vuePlugin from 'eslint-plugin-vue';
import vue from '../configs/vue';
import defineConfigArray from '../utils/defineConfigArray';
import base from './base';

export default defineConfigArray([...base, ...vuePlugin.configs['flat/recommended'], vue]);
