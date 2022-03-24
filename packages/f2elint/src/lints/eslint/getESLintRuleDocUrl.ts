/**
 * 获取规则文档地址
 */
export function getESLintRuleDocUrl(rule: string): string {
  if (!rule) return '';

  // typescript-eslint
  let match = rule.match(/^@typescript-eslint\/(\S+)$/);
  if (match) {
    return `https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/${match[1]}.md`;
  }

  // eslint-plugin-import
  match = rule.match(/^import\/(\S+)$/);
  if (match) {
    return `https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/${match[1]}.md`;
  }

  // eslint-plugin-jsx-a11y
  match = rule.match(/^jsx-a11y\/(\S+)$/);
  if (match) {
    return `https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/master/docs/rules/${match[1]}.md`;
  }

  // eslint-plugin-react-ssr
  if (/^react\/(no-constructor-dom|no-will-mount-dom)$/.test(rule)) {
    return 'https://github.com/ytanruengsri/eslint-plugin-react-ssr';
  }

  // eslint-plugin-react-hooks
  if (/^react-hooks-ssr\//.test(rule)) {
    return 'https://github.com/correttojs/eslint-plugin-react-hooks-ssr#documentation';
  }

  // eslint-plugin-react-hooks
  if (/^react-hooks\/(\S+)$/.test(rule)) {
    return 'https://reactjs.org/docs/hooks-rules.html#eslint-plugin';
  }

  // eslint-plugin-react
  match = rule.match(/^react\/(\S+)$/);
  if (match) {
    return `https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/${match[1]}.md`;
  }

  // eslint-plugin-vue
  match = rule.match(/^vue\/(\S+)$/);
  if (match) {
    return `https://eslint.vuejs.org/rules/${match[1]}.html`;
  }

  return `https://eslint.org/docs/rules/${rule}`;
}
