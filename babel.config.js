'use strict';

module.exports = api => {
  api.cache(false);

  return {
    babelrcRoots: ['.', 'packages/*'],
    presets: [
      [
        '@mjolnir/babel-preset',
        {
          react: false,
          typescript: false,
        },
      ],
    ],
  };
};
