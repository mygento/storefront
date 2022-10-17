/** @type {import('stylelint').Config} */
const config = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    // alphabetic order
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
    // mobile first
    'media-feature-name-disallowed-list': [
      'max-width',
      {
        message: 'Use min-width for a mobile-first approach',
      },
    ],
    // works with a systemic design - disable if impractical in a specific project
    'color-named': 'always-where-possible',
    'declaration-block-no-redundant-longhand-properties': null,
    'prettier/prettier': true,
  },
};

module.exports = config;
