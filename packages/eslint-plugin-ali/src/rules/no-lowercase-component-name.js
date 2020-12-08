const { pathToRegexp } = require('path-to-regexp');
const docsUrl = require('../docsUrl');

const RULE_NAME = 'no-lowercase-component-name';

module.exports = {
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      url: docsUrl(RULE_NAME),
    },
    fixable: null,
    messages: {
      noLowerCaseComponentName: "It is not recommended to name components in lower case '{{name}}'",
    },
  },

  create(context) {
    const COMPONENT_REG = pathToRegexp('components/:name/index.(js|jsx)', [], { start: false });
    const PAGE_REG = pathToRegexp('pages/:name/index.(js|jsx)', [], { start: false });

    const fileName = context.getFilename();

    // component or page name (jsx component)
    const name =
      (COMPONENT_REG.exec(fileName) && COMPONENT_REG.exec(fileName)[1]) ||
      (PAGE_REG.exec(fileName) && PAGE_REG.exec(fileName)[1]);

    // https://github.com/airbnb/javascript/tree/master/react#naming
    // Check filename
    if (name && name[0].toUpperCase() !== name[0]) {
      context.report({
        loc: {
          start: {
            line: 0,
            column: 0,
          },
          end: {
            line: 0,
            column: 0,
          },
        },
        messageId: 'noLowerCaseComponentName',
        data: {
          name,
        },
      });
    }

    return {
      // Check export componet name
      ExportDefaultDeclaration: function handleRequires(node) {
        if (
          name &&
          node.declaration &&
          node.declaration.name &&
          node.declaration.name[0].toUpperCase() !== node.declaration.name[0]
        ) {
          context.report({
            node,
            messageId: 'noLowerCaseComponentName',
            data: {
              name: node.declaration.name,
            },
          });
        }
      },
    };
  },
};
