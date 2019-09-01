// mdx lint jsx in markdown
module.exports = {
  files: ['*.mdx'],
  extends: [
    ...['../plugins/react', '../plugins/react-hooks'].map(require.resolve),
    'plugin:mdx/recommended',
    'plugin:mdx/overrides',
  ],
};
