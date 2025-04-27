import packagejson from 'prettier-plugin-packagejson';

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
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
    // 排序 package.json 中的属性
    packagejson,
  ],
};

export default config;
