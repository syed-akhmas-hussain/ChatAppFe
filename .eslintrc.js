const restrictedImports = require('./scripts/generated/restricted-imports');
module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['unused-imports'],
  rules: {
    'unused-imports/no-unused-imports': 'error',

    '@typescript-eslint/no-unused-vars': 'off',

    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [...restrictedImports],
      },
    ],
  },
};
