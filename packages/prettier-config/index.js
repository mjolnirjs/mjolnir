module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: ['.*rc', '*.json'],
      options: {
        parser: 'json-stringify',
      },
    },
    {
      // special file use jsonc format
      files: [
        '.vscode/*.json',
        'jsconfig.json',
        'tsconfig.json',
        'tsconfig.*.json',
        'tsconfig-*.json',
        'tsconfig.json',
        '.babelrc',
        '.eslintrc',
        '.eslintrc.json',
        'tslint.json',
        'tslint.*.json',
      ],
      options: {
        parser: 'json',
      },
    },
  ],
};
