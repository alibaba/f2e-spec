const fs = require('fs-extra');
const path = require('path');
const docsUrl = require('../docsUrl');

const RULE_NAME = 'no-broad-semantic-versioning';

module.exports = {
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      url: docsUrl(RULE_NAME),
    },
    fixable: 'code',
    messages: {
      noBroadSemanticVersioning:
        'The "{{dependencyName}}" is not recommended to use "{{versioning}}", and it is recommend using "{{newVersioning}}"',
    },
  },

  create(context) {
    if (path.basename(context.getFilename()) !== 'package.json') {
      return {};
    }

    const cwd = context.getCwd();

    return {
      Property: function handleRequires(node) {
        if (
          node.key &&
          node.key.value &&
          (node.key.value === 'dependencies' || node.key.value === 'devDependencies') &&
          node.value &&
          node.value.properties
        ) {
          node.value.properties.forEach((property) => {
            if (property.key && property.key.value) {
              const dependencyName = property.key.value;
              const dependencyVersion = property.value.value;
              if (
                // *
                dependencyVersion.indexOf('*') > -1 ||
                // x.x
                dependencyVersion.indexOf('x') > -1 ||
                // > x
                dependencyVersion.indexOf('>') > -1
              ) {
                let newVersioning = '^1.0.0';
                const dependencyPackageFile = path.join(
                  cwd,
                  'node_modules',
                  dependencyName,
                  'package.json',
                );
                if (fs.existsSync(dependencyPackageFile)) {
                  const dependencyPackage = fs.readJSONSync(dependencyPackageFile);
                  newVersioning = `^${dependencyPackage.version}`;
                }

                context.report({
                  loc: property.loc,
                  messageId: 'noBroadSemanticVersioning',
                  data: {
                    dependencyName,
                    versioning: dependencyVersion,
                    newVersioning,
                  },
                });
              }
            }
          });
        }
      },
    };
  },
};
