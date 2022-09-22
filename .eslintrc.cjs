module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  ignorePatterns: ['**/build/*', '**/dist/*'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    "plugin:import/recommended",
    'plugin:import/typescript',
    "prettier",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import', // https://github.com/import-js/eslint-import-resolver-typescript
  ],
  root: true,
  rules: {
    'no-console': 'off',
    'dot-notation': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      0,
      {
        ts: 'always',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": false
        }
      }
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: '',
      },
    },
  },
};
