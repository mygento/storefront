/** @type {import('stylelint').Config} */
const config = {
  extends: ['stylelint-config-standard-scss', './base'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/dollar-variable-empty-line-after': [
      'always',
      { except: ['before-dollar-variable'] },
    ],
    'scss/double-slash-comment-empty-line-before': null,
  },
};

module.exports = config;
