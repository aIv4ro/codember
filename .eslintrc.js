module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    './node_modules/ts-standard/eslintrc.json'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/no-floating-promises': 'off'
  },
  ignorePatterns: [
    'build',
    'node_modules'
  ]
}
