const docsUrl = require('../docsUrl');

const RULE_NAME = 'no-secret-info';

const DEFAULT_DANGEROUS_KEYS = ['secret', 'token', 'password'];

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      url: docsUrl(RULE_NAME),
    },
    fixable: null,
    messages: {
      noSecretInfo: 'Detect that the "{{secret}}" might be a secret token, Please check!',
    },
  },

  create(context) {
    const dangerousKeys = context.options[0] || DEFAULT_DANGEROUS_KEYS;
    const reg = new RegExp(dangerousKeys.join('|'));

    return {
      Literal: function handleRequires(node) {
        if (
          node.value && node.parent && (
            (node.parent.type === 'VariableDeclarator' &&
              node.parent.id &&
              node.parent.id.name &&
              reg.test(node.parent.id.name.toLocaleLowerCase())
            ) ||
            (node.parent.type === 'Property' &&
              node.parent.key &&
              node.parent.key.name &&
              reg.test(node.parent.key.name.toLocaleLowerCase())
            )
          )
        ) {
          context.report({
            node,
            messageId: 'noSecretInfo',
            data: {
              secret: node.value,
            },
          });
        }
      },
    };
  },
};
