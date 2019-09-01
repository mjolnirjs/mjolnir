// TODO: shareable config 里面暂时无法使用 extends ， 所以交给项目配置
module.exports = {
  typescript: require('./typescript'),
  babel: require('./babel'),
  jest: require('./jest'),
  react: require('./react'),
  mdx: require('./mdx'),
  recommended: [
    require('./babel'),
    require('./typescript'),
    require('./react'),
    require('./jest'),
    require('./mdx'),
  ],
};
