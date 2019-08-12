'use strict';

// plugin:node/recommended: https://github.com/mysticatea/eslint-plugin-node/blob/master/lib/index.js
module.exports = {
  extends: ['plugin:node/recommended'],
  rules: {
    // commonjs or node env, should use global strict model
    strict: ['error', 'global']
  }
};
