/* eslint-disable no-magic-numbers */
module.exports = {
  extends: ['./index.js', './etc/eslint/rules/plugins/react.js'],
  env: {
    mocha: true,
  },
  rules: {
    'react/display-name': 0,
    'react/prefer-stateless-function': [1, { ignorePureComponents: true }],
    'react/no-did-update-set-state': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/label-has-for': 0,
    'react/jsx-handler-names': 0,
    'import/prefer-default-export': 0,
    'no-return-assign': 0,
    'flowtype/no-types-missing-file-annotation': 0,
  }
};
