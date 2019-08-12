'use strict';

// for es6 env
module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  extends: ['./rules', './plugins/import'].map(require.resolve)
};
