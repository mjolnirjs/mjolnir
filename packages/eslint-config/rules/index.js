// rules 里面是符合 eslint 的一些推荐规则，基于 airbnb
module.exports = {
  extends: [
    './best-practices',
    './errors',
    './es6',
    './style',
    './variables'
  ].map(require.resolve)
};
