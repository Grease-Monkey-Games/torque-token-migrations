module.exports = {
  extends: ['plugin:prettier/recommended', 'prettier'],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 9,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    'no-unused-vars': 'off',
    'no-multi-spaces': ['error', {exceptions: {VariableDeclarator: true}}],
    'no-else-return': ['error', {allowElseIf: true}],
    'no-await-in-loop': 'off',
    'max-len': ['error', {code: 150}],
  },
};
