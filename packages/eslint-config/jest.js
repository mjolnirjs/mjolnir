'use strict';

// for jest env
module.exports = {
  env: {},
  extends: ['./rules', './plugins/jest'].map(require.resolve),
  rules: {}
};
