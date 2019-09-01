// for babel env, base on es6 env
module.exports = {
  files: ['**/*.{js,jsx}'],
  extends: ['../plugins/babel'].map(require.resolve),
};
