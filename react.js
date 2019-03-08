/* eslint-disable no-magic-numbers */
module.exports = {
  extends: ['./index.js', './etc/eslint/rules/plugins/react.js'],
  env: {
    mocha: true,
  },
  rules: {
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/label-has-for': 0,
    'react/display-name': 0,
    'react/jsx-handler-names': 0,
    'react/no-did-update-set-state': 0,
    'react/prefer-stateless-function': [1, { ignorePureComponents: true }],
  },
  plugins: ['json', 'prettier', 'flowtype', 'react'],
  settings: {
    react: {
      version: '16.6.0',
    },
  },
};
