module.exports = {
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    '@typescript-eslint/no-shadow': 'error',
    'import/newline-after-import': 'error',
    'import/no-unresolved': 'error',
    'import/extensions': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules', 'dist', 'coverage', '**/*.d.ts', '**/*.js'],
};
