/** @type {import('stylelint').Config} */
const config = {
  extends: ['./base', 'stylelint-config-standard-scss'],
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
