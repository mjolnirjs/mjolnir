const { babel, typescript } = require('@mjolnir/eslint-config/overrides');

module.exports = {
  "extends": ["@mjolnir"],
  "overrides": [
    babel,
    typescript
  ],
  "rules": {},
}
