/* eslint-disable no-magic-numbers */
const path = require('path');

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
    'plugin:flowtype/recommended',
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
  ],
  rules: {
    camelcase: 0,
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    'arrow-body-style': 0,
    'dot-notation': 0,
    'jsx-quotes': [2, 'prefer-single'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'no-unused-vars': 2,
    'no-alert': 2,
    'no-labels': 2,
    quotes: [2, 'single'],
    semi: [2, 'always'],
    'standard/computed-property-even-spacing': 0,
    'space-before-function-paren': 0,
    'global-require': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-loop-func': 0,
    'brace-style': 0,
    'space-before-blocks': 0,
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        paths: [
          {
            rootPathPrefix: '~admin-ui',
            rootPathSuffix: 'packages/admin-ui/src',
          },
          {
            rootPathPrefix: '~admin-gql',
            rootPathSuffix: 'packages/admin-gql/src',
          },
        ],
      },
    },
    react: {
      version: '16.6.0',
      flowVersion: '0.53',
    },
  },
  plugins: ['json', 'prettier', 'flowtype'],
  overrides: {
    files: ['**/*.ts', '**/*.tsx'],
    parser: '@typescript-eslint/parser',
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
    },
  },
};
