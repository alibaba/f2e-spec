/* eslint-disable no-undef */
const { name, version } = require('../package.json');

exports.PKG_NAME = String(name);

exports.PKG_VERSION = String(version);

/**
 * 项目类型
 * @type {({name: string, value: string})[]}
 */
exports.PROJECT_TYPES = [
  {
    name: '未使用 React、Vue、Node.js 的项目（JavaScript）',
    value: 'index',
  },
  {
    name: '未使用 React、Vue、Node.js 的项目（TypeScript）',
    value: 'typescript',
  },
  {
    name: 'React 项目（JavaScript）',
    value: 'react',
  },
  {
    name: 'React 项目（TypeScript）',
    value: 'typescript/react',
  },
  {
    name: 'Rax 项目（JavaScript）',
    value: 'rax',
  },
  {
    name: 'Rax 项目（TypeScript）',
    value: 'typescript/rax',
  },
  {
    name: 'Vue 项目（JavaScript）',
    value: 'vue',
  },
  {
    name: 'Vue 项目（TypeScript）',
    value: 'typescript/vue',
  },
  {
    name: 'Node.js 项目（JavaScript）',
    value: 'node',
  },
  {
    name: 'Node.js 项目（TypeScript）',
    value: 'typescript/node',
  },
  {
    name: '使用 ES5 及之前版本 JavaScript 的老项目',
    value: 'es5',
  },
];

/**
 * eslint
 */
exports.ESLINT_FILE_EXT = ['.js', '.jsx', '.ts', '.tsx', '.vue'];

exports.ESLINT_FILE_MATCH = `*.{${exports.ESLINT_FILE_EXT.map((ext) => ext.replace(/^\./, '')).join(',')}}`;

exports.ESLINT_IGNORE_PATTERN = ['node_modules/', 'build/', 'dist/', '**/*.min.js', '**/*-min.js', '**/*.bundle.js'];

/**
 * stylelint
 */
exports.STYLELINT_FILE_EXT = ['.css', '.scss', '.less', '.acss'];

exports.STYLELINT_FILE_MATCH = `*.{${exports.STYLELINT_FILE_EXT.map((ext) => ext.replace(/^\./, '')).join(',')}}`;

exports.STYLELINT_IGNORE_PATTERN = ['node_modules/', 'build/', 'dist/', '**/*.min.css', '**/*-min.css', '**/*.bundle.css'];

/**
 * markdownlint
 */
exports.MARKDOWNLINT_FILE_EXT = ['.md'];

exports.MARKDOWNLINT_FILE_MATCH = `*.{${exports.MARKDOWNLINT_FILE_EXT.map((ext) => ext.replace(/^\./, '')).join(',')}}`;

exports.MARKDOWNLINT_IGNORE_PATTERN = ['node_modules/', 'build/', 'dist/'];
