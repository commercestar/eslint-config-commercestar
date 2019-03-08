/*
$ TIMING=1 eslint --ext .js,.jsx ./src --quiet
Rule                              | Time (ms) | Relative
:---------------------------------|----------:|--------:
import/namespace                  | 10407.064 |    30.4%
import/no-deprecated              |  3843.861 |    11.2%
import/no-duplicates              |  3283.799 |     9.6%
import/order                      |  3253.836 |     9.5%
import/no-extraneous-dependencies |  2466.129 |     7.2%
import/default                    |  1614.514 |     4.7%
import/no-named-as-default-member |  1609.137 |     4.7%
import/no-named-as-default        |  1578.499 |     4.6%
import/named                      |  1154.614 |     3.4%
react/no-deprecated               |   579.085 |     1.7%
*/
module.exports = {
  plugins: ['import'],
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  settings: {
    'eslint-import-resolver-typescript': true,
    'import/extensions': ['.js', '.jsx'],
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      'eslint-import-resolver-typescript': true,
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  rules: {
    'import/default': 2,
    'import/first': 0,
    'import/extensions': [0, 'never', { ts: 'never' }],
    'import/imports-first': [1, 'absolute-first'],
    'import/no-duplicates': 2,
    'import/order': [
      1,
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
      },
    ],
    'import/named': 2,
    'import/namespace': 0 /* VERY SLOW was: 2 */,
    'import/no-deprecated': 2,
    'import/no-named-as-default': 2,
    'import/no-unresolved': 0, // Doesn't correctly resolve valid paths
  },
};
