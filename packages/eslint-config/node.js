// for nodejs env, support es6+ syntax
'use strict';

module.exports = {
  env: {
    node: true
  },
  extends: ['./rules', './plugins/node'].map(require.resolve),
  rules: {
    strict: 'error'
  }
};
