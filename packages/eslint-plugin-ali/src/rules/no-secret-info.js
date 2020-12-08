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
      // eslint-disable-next-line
      noSecretInfo: 'Detect that the "{{secret}}" might be a secret token, Please check!',
    },
  },

  create(context) {
    const dangerousKeys = context.options[0] || defaultStatus;
    const reg = new RegExp(dangerousKeys.join('|'));

    return {
      Literal: function handleRequires(node) {
        if (
          node.value && node.parent && (
            // var secret = 'test';
            (node.parent.type === 'VariableDeclarator' &&
              node.parent.id &&
              node.parent.id.name &&
              reg.test(node.parent.id.name.toLocaleLowerCase())
            ) ||
            // { secret: 'test' };
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
