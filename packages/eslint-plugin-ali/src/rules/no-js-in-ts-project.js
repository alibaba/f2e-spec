const path = require('path');
const docsUrl = require('../docsUrl');

const RULE_NAME = 'no-js-in-ts-project';

const TS_REG = /\.tsx?$/;
const JS_REG = /\.jsx?$/;

const WHITE_LIST = ['commitlint.config.js', 'eslintrc.js', 'prettierrc.js', 'stylelintrc.js'];

const WHITE_LIST_REG = new RegExp(`(${WHITE_LIST.join('|')})$`);

let isTSProject = false;

module.exports = {
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      url: docsUrl(RULE_NAME),
    },
    fixable: null,
    messages: {
      noJSInTSProject: "The '{{fileName}}' is not recommended in TS project",
    },
  },

  create(context) {
    const fileName = context.getFilename();
    const extName = path.extname(fileName);
    if (TS_REG.test(extName)) {
      isTSProject = true;
    }

    if (isTSProject && !WHITE_LIST_REG.test(fileName) && JS_REG.test(extName)) {
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
        messageId: 'noJSInTSProject',
        data: {
          fileName,
        },
      });
    }

    // Necessary
    return {};
  },
};
