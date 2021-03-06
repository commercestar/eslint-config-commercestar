/* eslint-disable no-magic-numbers */
const path = require('path');

let defaultRules = {
  'no-console': [
    'error',
    {
      allow: ['warn', 'error', 'info'],
    },
  ],
  'arrow-body-style': 0,
  'brace-style': 0,
  camelcase: 0,
  'dot-notation': 0,
  'global-require': 0,
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  'import/prefer-default-export': 0,
  'jsx-quotes': [2, 'prefer-single'],
  'no-alert': 2,
  'no-labels': 2,
  'no-loop-func': 0,
  'no-return-assign': 0,
  'no-unused-vars': [2, { argsIgnorePattern: '^_' }],
  'no-use-before-define': 0,
  quotes: [2, 'single'],
  semi: [2, 'always'],
  'space-before-blocks': 0,
  'space-before-function-paren': 0,
  'standard/computed-property-even-spacing': 0,
};

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: true,
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: [
    'airbnb/base',
    'eslint:recommended',
    'prettier',
    'prettier/standard',
    path.resolve(__dirname, './etc/eslint/rules/plugins/filenames.js'),
    path.resolve(__dirname, './etc/eslint/rules/plugins/import.js'),
    path.resolve(__dirname, './etc/eslint/rules/eslint/best-practices/on.js'),
    path.resolve(__dirname, './etc/eslint/rules/eslint/errors/on.js'),
    path.resolve(__dirname, './etc/eslint/rules/eslint/es6/on.js'),
    path.resolve(__dirname, './etc/eslint/rules/eslint/strict/on.js'),
    path.resolve(__dirname, './etc/eslint/rules/eslint/style/on.js'),
    path.resolve(__dirname, './etc/eslint/rules/eslint/variables/on.js'),
    path.resolve(__dirname, './etc/eslint/rules/eslint/node/on.js'),
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: defaultRules,
  plugins: ['json', 'prettier'],
  overrides: {
    files: ['**/*.ts', '**/*.tsx'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
      ...defaultRules,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
};
