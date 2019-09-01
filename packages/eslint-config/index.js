// for es6 and node env
module.exports = {
  root: true, // limit ESLint to a specific project
  env: {
    node: true,
    browser: true,
    es6: true, // also enable ecmaVersion: 6
  },
  parserOptions: {
    ecmaVersion: 2018, // same as 9
    sourceType: 'module', // ECMAScript module
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  extends: [
    './rules',
    './plugins/import',
    './plugins/node-mjs',
    './plugins/prettier',
  ].map(require.resolve),
};
