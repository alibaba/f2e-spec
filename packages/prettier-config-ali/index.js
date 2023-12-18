module.exports = {
  // Prettier 兼容 EditorConfig，凡是能够在 EditorConfig 中配置的，这里就不再定义，避免冲突
  // 详见 https://prettier.io/docs/en/options
  arrowParens: 'always',
  bracketSpacing: true, // https://prettier.io/docs/en/options#bracket-spacing
  semi: true, // https://prettier.io/docs/en/options#semicolons
  trailingComma: 'all', // https://prettier.io/docs/en/options#trailing-commas

  // Prettier 2.x 可以自动加载 prettier-plugin- 开头的插件
  // 但是从 Prettier 3.x 开始，插件必须配置才能生效
  plugins: [
    'prettier-plugin-packagejson', // 排序 package.json 中的属性
  ],
};
