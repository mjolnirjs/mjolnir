'use strict';

// for nodejs env, support es6+ syntax
module.exports = {
  env: {
    node: true,
    commonjs: true
  },
  extends: ['./rules', './plugins/node'].map(require.resolve),
  rules: {
    strict: 'error'
  }
};
