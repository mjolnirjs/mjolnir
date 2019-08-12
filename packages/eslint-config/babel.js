'use strict';

// for babel env, base on es6 env
module.exports = {
  extends: ['./index', './plugins/babel'].map(require.resolve)
};
