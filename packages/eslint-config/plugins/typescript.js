'use strict';

// recommend config has parser config: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/base.json
module.exports = {
  // TODO: 是否需要通过 override 设置检测 .ts,.tsx 文件？
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript'
  ],
  rules: {}
};
