'use strict';

module.exports = {
  extends: ['./plugins/react', './plugins/react-hooks'].map(require.resolve)
};
