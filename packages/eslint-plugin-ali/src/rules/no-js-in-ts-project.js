const path = require('path');
const docsUrl = require('../docsUrl');

const RULE_NAME = 'no-js-in-ts-project';

// const TS_REG = /\.tsx?$/;
const JS_REG = /\.jsx?$/;

const DEFAULT_WHITE_LIST = ['commitlint.config.js', 'eslintrc.js', 'prettierrc.js', 'stylelintrc.js'];

// let isTSProject = true;

module.exports = {
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      url: docsUrl(RULE_NAME),
    },
    fixable: null,
    messages: {
      noJSInTSProject: 'The "{{fileName}}" is not recommended in TS project',
    },
  },

  create(context) {
    const fileName = context.getFilename();
    const extName = path.extname(fileName);
    const ruleOptions = context.options[0] || {};
    let { whiteList = [], autoMerge = true } = ruleOptions;
    if (whiteList.length === 0) {
      whiteList = DEFAULT_WHITE_LIST;
    } else if (autoMerge) {
      whiteList = [...new Set([...DEFAULT_WHITE_LIST, ...whiteList])]
    }
    const whiteListReg = new RegExp(`(${whiteList.join('|')})$`);

    // if (TS_REG.test(extName)) {
    //   isTSProject = true;
    // }

    if (!whiteListReg.test(fileName) && JS_REG.test(extName)) {
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
