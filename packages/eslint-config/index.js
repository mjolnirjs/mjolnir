'use strict';

// for es6 env
module.exports = {
  root: true, // limit ESLint to a specific project
  env: {
    browser: true,
    es6: true // also enable ecmaVersion: 6
  },
  parserOptions: {
    ecmaVersion: 2018, // same as 9
    sourceType: 'module', // ECMAScript module
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true
    }
  },
  extends: ['./rules', './plugins/import'].map(require.resolve)
};
