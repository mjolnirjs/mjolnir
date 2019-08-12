'use strict';

module.exports = {
  extends: [
    './index', // 基于 es6 的配置
    './plugins/babel'
  ].map(require.resolve)
};
