'use strict';

// for jest env
module.exports = {
  extends: ['./index', './plugins/jest'].map(require.resolve),
  rules: {}
};
