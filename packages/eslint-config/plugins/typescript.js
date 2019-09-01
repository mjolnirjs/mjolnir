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
  rules: {},
  parserOptions: {
    project: fs.existsSync(ESLINT_TSCONFIG)
      ? ESLINT_TSCONFIG
      : fs.existsSync(BASE_TSCONFIG)
      ? BASE_TSCONFIG
      : require.resolve('@mjolnir/tsconfig'),
  },
};
