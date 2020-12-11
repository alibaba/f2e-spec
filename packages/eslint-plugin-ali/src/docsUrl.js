const repoUrl = 'https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali';

module.exports = function docsUrl(ruleName) {
  return `${repoUrl}/docs/rules/${ruleName}.md`;
};
