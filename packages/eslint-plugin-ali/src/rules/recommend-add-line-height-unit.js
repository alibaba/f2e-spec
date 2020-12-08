const fs = require('fs');
const path = require('path');
const lineColumn = require('line-column');
const docsUrl = require('../docsUrl');
const { glob } = require('glob');

const RULE_NAME = 'recommend-add-line-height-unit';

const CSS_REG = /line-height:([\s\d]+);/g;
const JSX_REG = /lineHeight:([\s\d]+)/g;

const FILE_CACHE = {};

const getCheckAndReportFn = (context) => {
  return (sourceCodeText, fileType, basename) => {
    let matched;
    const reg = fileType === 'jsx' ? JSX_REG : CSS_REG;
    // eslint-disable-next-line
    while ((matched = reg.exec(sourceCodeText)) !== null) {
      const target = matched[0];
      const value = matched[1];

      // line height > 5 need add unit
      if (Number(value) > 5) {
        const startPosition = lineColumn(sourceCodeText).fromIndex(matched.index);

        context.report({
          loc: {
            start: { line: startPosition.line, column: startPosition.col },
            end: { line: startPosition.line, column: startPosition.col + target.length },
          },
          messageId: 'recommendAddLineHeightUnit',
          data: { target, basename },
        });
      }
    }
  };
};

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      url: docsUrl(RULE_NAME),
    },
    fixable: null,
    messages: {
      // eslint-disable-next-line
      recommendAddLineHeightUnit: 'Please add unit (like px, rpx ...) for "{{target}}" in "{{basename}}".',
    },
  },

  create(context) {
    const checkAndReport = getCheckAndReportFn(context);

    const fileName = context.getFilename();
    const dirname = path.dirname(fileName);

    const sourceCode = context.getSourceCode();
    const sourceCodeText = sourceCode.getText();

    checkAndReport(sourceCodeText, 'jsx', path.basename(fileName));

    glob.sync(`${dirname}/*.{css,scss,less}`).forEach((cssFileName) => {
      if (!FILE_CACHE[cssFileName]) {
        FILE_CACHE[cssFileName] = true;
        checkAndReport(fs.readFileSync(cssFileName, 'utf-8'), 'css', path.basename(cssFileName));
      }
    });

    // Necessary
    return {};
  },
};
