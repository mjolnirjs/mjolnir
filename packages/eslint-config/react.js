module.exports = {
  extends: [
    '@leohxj/eslint-config-dawn-base',
    './plugins/react',
    './plugins/react-hooks'
  ].map(require.resolve)
};
