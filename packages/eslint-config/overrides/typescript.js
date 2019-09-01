// for typescript env, base on es6 env
module.exports = {
  files: ['**/*.ts?(x)'],
  extends: ['../plugins/typescript'].map(require.resolve),
};
