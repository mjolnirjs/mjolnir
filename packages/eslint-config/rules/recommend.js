// eslint:recommended: https://eslint.org/docs/rules
module.exports = {
  extends: ['eslint:recommended'],
  rules: {
    // if we use some tool, such as babel/tsc/webpack, they will insert 'use strict' for us
    strict: ['error'],
  },
};
