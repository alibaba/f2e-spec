/**
 * 本文件的规则由 eslint-plugin-import 提供
 * 与 eslint-plugin-import 推荐配置对齐
 * @see https://github.com/import-js/eslint-plugin-import
 * @see https://github.com/import-js/eslint-plugin-import/blob/main/config/recommended.js
 */

module.exports = {
  plugins: [
    'import',
  ],
  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
  rules: {
    /**
     * Static analysis
     */

    // ensure imports point to files/modules that can be resolved
    'import/no-unresolved': 'error',

    // ensure named imports coupled with named exports
    'import/named': 'error',

    // ensure default import coupled with default export
    'import/default': 'error',

    // ensure imported namespaces contain dereferenced properties as they are dereferenced
    'import/namespace': 'error',

    /**
     * Helpful warnings
     */

    // disallow invalid exports, e.g. multiple defaults
    'import/export': 'error',

    // import 一个文件时，禁止 default import 的名字跟文件内的命名 export 相同
    'import/no-named-as-default': 'error',

    // 访问 default export 的属性时，如果该文件有与属性同名的命名 export，则给出警告
    'import/no-named-as-default-member': 'warn',

    // disallow use of jsdoc-marked-deprecated imports
    'import/no-deprecated': 'off',

    // Forbid the use of extraneous packages
    'import/no-extraneous-dependencies': 'off',

    // Forbid mutable exports
    'import/no-mutable-exports': 'off',

    /**
     * Module systems
     */

    // Report potentially ambiguous parse goal (script vs. module)
    'import/unambiguous': 'off',

    // disallow require()
    'import/no-commonjs': 'off',

    // disallow AMD require/define
    'import/no-amd': 'warn',

    // No Node.js builtin modules
    'import/no-nodejs-modules': 'off',

    /**
     * Style guide
     */

    // import 语句需要放到模块的最上方
    // @unessential
    'import/first': 'error',

    // 不要用多个 import 引入同一模块
    'import/no-duplicates': 'error',

    // disallow namespace imports
    'import/no-namespace': 'off',

    // Ensure consistent use of file extension within the import path
    'import/extensions': 'off',

    // import 语句的排序
    'import/order': ['off', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'never',
    }],

    // 在最后一个 import / require 语句后保留一个空行
    'import/newline-after-import': 'warn',

    // 当模块内只有一个 export 时，使用 default export
    'import/prefer-default-export': 'off',

    // Restrict which files can be imported in a given folder
    'import/no-restricted-paths': 'off',

    // Forbid modules to have too many dependencies
    'import/max-dependencies': ['off', { max: 10 }],

    // Forbid import of modules using absolute paths
    'import/no-absolute-path': 'off',

    // Forbid require() calls with expressions
    'import/no-dynamic-require': 'off',

    // prevent importing the submodules of other modules
    'import/no-internal-modules': ['off', {
      allow: [],
    }],

    // Forbid Webpack loader syntax in imports
    'import/no-webpack-loader-syntax': 'off',

    // Prevent unassigned imports
    // importing for side effects is perfectly acceptable, if you need side effects.
    'import/no-unassigned-import': 'off',

    // 禁止 import { default as foo } from './foo.js'
    // 应写成 import foo from './foo.js'
    'import/no-named-default': 'off',

    // Reports if a module's default export is unnamed
    'import/no-anonymous-default-export': ['off', {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    }],

    // This rule enforces that all exports are declared at the bottom of the file.
    'import/exports-last': 'off',

    // Prefer named exports to be grouped together in a single export declaration
    'import/group-exports': 'off',

    // forbid default exports. this is a terrible rule, do not use it.
    'import/no-default-export': 'off',

    // 不要产生自引用
    'import/no-self-import': 'error',

    // 不要产生循环引用
    'import/no-cycle': ['error', { maxDepth: Infinity }],

    // Ensures that there are no useless path segments
    'import/no-useless-path-segments': 'off',

    // dynamic imports require a leading comment with a webpackChunkName
    'import/dynamic-import-chunkname': ['off', {
      importFunctions: [],
      webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
    }],

    // Use this rule to prevent imports to folders in relative parent paths.
    'import/no-relative-parent-imports': 'off',
  },
};
