'use strict';

const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare((api, { react, typescript }) => {
  api.assertVersion(7);

  if (typeof react !== 'boolean') {
    throw new Error('.react must be a boolean, or undefined');
  }
  if (typeof typescript !== 'boolean') {
    throw new Error('.typescript must be a boolean, or undefined');
  }
  const plugins = [
    require.resolve('@babel/plugin-transform-runtime'),
    [require.resolve('@babel/plugin-proposal-decorators'), { legacy: true }],
    [
      require.resolve('@babel/plugin-proposal-class-properties'),
      { loose: true }
    ],
    require.resolve('@babel/plugin-proposal-object-rest-spread'),
    require.resolve('@babel/plugin-syntax-dynamic-import')
  ];

  const presets = [];

  if (typescript) presets.push(require.resolve('@babel/preset-typescript'));

  presets.push([
    require.resolve('@babel/preset-env'),
    {
      modules: false
    }
  ]);

  if (react) presets.push(require.resolve('@babel/preset-react'));

  return {
    presets,
    plugins
  };
});
