// for nodejs with commonJS
module.exports = {
  root: true, // limit ESLint to a specific project
  env: {
    node: true,
    es6: true, // also enable ecmaVersion: 6
  },
  parserOptions: {
    ecmaVersion: 2018, // same as 9
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
    },
  },
  extends: ['./rules', './plugins/node-cjs', './plugins/prettier'].map(
    require.resolve,
  ),
};
