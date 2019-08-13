// .babelrc can merge with babel.config.js
module.exports = {
  presets: [
    [
      '@mjolnir/babel-preset',
      {
        react: false,
        typescript: true,
        modules: "commonjs"
      }
    ]
  ]
};
