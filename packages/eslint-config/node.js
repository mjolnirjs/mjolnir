'use strict';

// for nodejs env, support es6+ syntax
module.exports = {
  root: true, // limit ESLint to a specific project
  extends: ['./rules', './plugins/node'].map(require.resolve),
  rules: {}
};
