// https://github.com/rx-ts/eslint-mdx/tree/master/packages/eslint-plugin-mdx
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
