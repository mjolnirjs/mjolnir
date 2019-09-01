// recommend config has parser config: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/base.json
const path = require('path');
const fs = require('fs');

const ESLINT_TSCONFIG = path.resolve('tsconfig.eslint.json');
const BASE_TSCONFIG = path.resolve('tsconfig.json');

module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
  },
  parserOptions: {
    project: fs.existsSync(ESLINT_TSCONFIG)
      ? ESLINT_TSCONFIG
      : fs.existsSync(BASE_TSCONFIG)
      ? BASE_TSCONFIG
      : require.resolve('@mjolnir/tsconfig'),
  },
  settings: {
    // shared settings for eslint-plugin-node
    node: {
      tryExtensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
  },
};
