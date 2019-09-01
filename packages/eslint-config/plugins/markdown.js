// eslint-plugin-babel has no recommend config
module.exports = {
  extends: ['plugin:mdx/recommended'],
  overrides: [
    {
      files: ['*.md'],
      rules: {
        'prettier/prettier': [
          2,
          {
            parser: 'markdown',
          },
        ],
      },
    },
  ],
};