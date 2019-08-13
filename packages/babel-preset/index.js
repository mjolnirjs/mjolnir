'use strict';

const { declare } = require('@babel/helper-plugin-utils');
const env = process.env.NODE_ENV;

module.exports = declare((api, opts) => {
  api.assertVersion(7);

  const { react, typescript, modules = false } = opts;

  if (!env) {
    throw new Error(`require specify 'NODE_ENV' environment variables.`);
  }
  if (typeof react !== 'boolean') {
    throw new Error("options 'react' must be a boolean, or undefined");
  }
  if (typeof typescript !== 'boolean') {
    throw new Error("option 'typescript' must be a boolean, or undefined");
  }

  // @babel/plugin-proposal-decorators should comes before @babel/plugin-proposal-class-properties.
  // When using the legacy: true option of @babel/plugin-proposal-decorators, @babel/plugin-proposal-class-properties must be used in loose: true mode.
  const plugins = [
    // Stage 2
    [require('@babel/plugin-proposal-decorators'), { legacy: true }],
    require('@babel/plugin-proposal-function-sent'),
    require('@babel/plugin-proposal-export-namespace-from'),
    require('@babel/plugin-proposal-numeric-separator'),
    require('@babel/plugin-proposal-throw-expressions'),
    // Stage 3
    require('@babel/plugin-syntax-dynamic-import'),
    require('@babel/plugin-syntax-import-meta'),
    [require('@babel/plugin-proposal-class-properties'), { loose: true }],
    require('@babel/plugin-proposal-json-strings')
  ];

  const presets = [
    // default preset is @babel/preset-env
    [
      require('@babel/preset-env'),
      {
        //TODO: how about other opts
        modules // default to false, webpack takes care of modules
      }
    ]
  ];

  if (typescript) presets.push(require('@babel/preset-typescript'));

  if (react) {
    presets.push([
      require('@babel/preset-react'),
      {
        development: env
      }
    ]);
    if (env === 'production') {
      // Remove PropTypes from production build
      plugins.push([
        require('babel-plugin-transform-react-remove-prop-types'),
        {
          removeImport: true
        }
      ]);
    }
  }

  return {
    presets,
    plugins
  };
});
