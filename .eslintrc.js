module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],

    'no-empty': 0,
    'no-unused-vars': 0,
    'no-fallthrough': 0,

    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-max-props-per-line': [1, { when: 'always' }]
  }
}
