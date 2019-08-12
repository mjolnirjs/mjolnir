'use strict';

// 基于 eslint:recommend, 自定义的规则按类别维护
module.exports = {
  extends: [
    './recommend',
    './best-practices',
    './errors',
    './es6',
    './style',
    './variables'
  ].map(require.resolve),
  rules: {}
};
