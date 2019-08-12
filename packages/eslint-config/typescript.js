'use strict';

// for typescript env, base on es6 env
module.exports = {
  extends: ['./index', './plugins/typescript'].map(require.resolve)
};
