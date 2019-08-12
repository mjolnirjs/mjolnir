'use strict';

// for react env
module.exports = {
  extends: ['./plugins/react', './plugins/react-hooks'].map(require.resolve)
};
