/** @type {import('stylelint').Config} */
const config = {
  extends: ['./base', 'stylelint-config-css-modules'],
  rules: {
    /* 
      camelCase class selectors for convenience in js files;
      same pattern for other things for consistency
     */
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    'selector-id-pattern': '^[a-z][a-zA-Z0-9]+$',
    'keyframes-name-pattern': '^[a-z][a-zA-Z0-9]+$',
  },
};

module.exports = config;
