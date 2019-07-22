// for nodejs env, support es6+ syntax
module.exports = {
  extends: ['./rules', './plugins/node'].map(require.resolve)
};
