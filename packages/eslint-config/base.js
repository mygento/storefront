// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['standard', 'prettier'],
  rules: {
    'no-console': 'warn',
    'import/newline-after-import': 'warn',
  },
};

module.exports = config;
