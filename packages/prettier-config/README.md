# @mjolnir/prettier-config

## install
`yarn add @mjolnir/prettier-config -D`

## useage

add it in your `package.json`:
```
{
  "prettier": "@mjolnir/prettier-config"
}
```

if you want to extends the configuration and overwrite some properties, import the file in a `.prettierrc.js` file and export the modifications:

```js
module.exports = {
  ...require("@mjolnir/prettier-config");
}
```
