const { off } = require("process");

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'prettier'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx'] }],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/camelcase': {'properties': 'always'},
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prettier/prettier': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'never',
        'tsx': 'never'
      }
    ]
  },
  'settings': {
    'import/resolver': {
      'typescript': {}
    }
  }
}
