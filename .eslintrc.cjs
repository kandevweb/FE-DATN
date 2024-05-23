const path = require('path')

module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'eslint-config-prettier',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', 'react-refresh', 'prettier'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, '')],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    // reactjs
    'react/no-unknown-property': 0,
    'react-refresh/only-export-components': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 0,
    'react/display-name': 0,

    // eslint
    'import/no-unresolved': 0,
    'prefer-const': 'off',
    'space-before-blocks': ['error', 'always'],
    'object-curly-spacing': [1, 'always'],
    'linebreak-style': 0,
    'array-bracket-spacing': 1,
    'arrow-spacing': 1,
    'block-spacing': 'error',
    'comma-dangle': 1,
    'comma-spacing': 1,
    'keyword-spacing': 1,
    'no-lonely-if': 1,
    'no-trailing-spaces': 1,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': 1,
    'no-unexpected-multiline': 'warn',
    'jsx-quotes': ['warn', 'prefer-single'],

    semi: [1, 'never'],
    quotes: ['error', 'single'],
    eqeqeq: 'error',

    // default
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 'warn',

    // prittier
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        printWidth: 120,
        singleQuote: true,
        jsxSingleQuote: true
      }
    ],

    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
  }
}
