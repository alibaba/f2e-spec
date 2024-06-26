const config = {
  // 详见 https://prettier.io/docs/en/options
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  // 从 Prettier 3.x 开始，插件必须配置才能生效
  plugins: [
    // VS Code 的 Prettier 插件目前有问题，不支持 import.meta.resolve
    // 排序 package.json 中的属性
    // import.meta.resolve('prettier-plugin-packagejson'),
  ],
};

export default config;
