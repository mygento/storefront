/** @type {import('stylelint').Config} */
const config = {
  extends: ['./css-modules', './scss'],
  rules: {
    // camelCase
    'scss/at-mixin-pattern': '^[a-z][a-zA-Z0-9]+$',
    'scss/dollar-variable-pattern': '^[a-z][a-zA-Z0-9]+$',
  },
};

module.exports = config;
