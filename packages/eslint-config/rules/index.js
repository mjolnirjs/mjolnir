/**
 * @file 导出覆盖的规则
 * @description 默认基于 eslint:recommend, 自定义的规则按类别维护
 */
'use strict';

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
