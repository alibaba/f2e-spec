/* eslint-disable @iceworks/best-practices/no-http-url */
const docsUrl = require('../docsUrl');

const RULE_NAME = 'no-http-url';

module.exports = {
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      url: docsUrl(RULE_NAME),
    },
    fixable: 'code',
    messages: {
      noHttpUrl: 'Recommended "{{url}}" switch to HTTPS',
    },
  },
  create(context) {
    return {
      Literal: function handleRequires(node) {
        if (node.value && typeof node.value === 'string' && node.value.indexOf('http:') === 0) {
          context.report({
            node,
            messageId: 'noHttpUrl',
            data: {
              url: node.value,
            },
            fix: (fixer) => {
              return fixer.replaceText(node, `'${node.value.replace('http:', 'https:')}'`);
            },
          });
        }
      },
    };
  },
};
