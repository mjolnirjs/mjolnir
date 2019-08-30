'use strict';

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
      files: ['tsconfig.json', 'tsconfig.*.json', '.vscode/*.json'],
      options: {
        parser: 'json',
      },
    },
  ],
};
