// plugin:node/recommended: https://github.com/mysticatea/eslint-plugin-node/blob/master/lib/index.js
module.exports = {
  // considers all files as ES Modules.
  extends: ['plugin:node/recommended-module'],
  rules: {
    'node/no-unpublished-require': 'off',
  },
  // some config file also use commonjs module
  globals: {
    __dirname: 'readonly',
    __filename: 'readonly',
    exports: 'readonly',
    module: 'readonly',
    require: 'readonly',
  },
};
