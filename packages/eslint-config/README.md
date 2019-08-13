# @mjolnir/eslint-config

适用于 node/es/ts/react 环境下的 eslint 配置集合。

## 说明
### requirement
- eslint@6

### 包含的插件
- "@typescript-eslint/eslint-plugin": "^1.13.0"
- "@typescript-eslint/parser": "^1.13.0"
- "eslint-plugin-babel": "^5.3.0"
- "eslint-plugin-import": "^2.18.2"
- "eslint-plugin-node": "^9.1.0"
- "eslint-plugin-react": "^7.14.3"
- "eslint-plugin-react-hooks": "^1.7.0"

## 安装
`yarn add eslint @mjolnir/eslint-config -D`

or

`npm i eslint @mjolnir/eslint-config -D`

## 配置
### es6 (默认)
```json
{
  "extends": [
    "@mjolnir/eslint-config"
  ]
}
```


### Node.js
```json
{
  "extends": [
    "@mjolnir/eslint-config/node"
  ]
}
```

### Babel (ES)
```json
{
  "extends": [
    "@mjolnir/eslint-config/babel"
  ]
}
```

### TypeScript
```json
{
  "extends": [
    "@mjolnir/eslint-config/typescript"
  ]
}
```

### React
```json
{
  "extends": [
    "@mjolnir/eslint-config/babel",
    "@mjolnir/eslint-config/react"
  ]
}
```

### React with TypeScript
```json
{
  "extends": [
    "@mjolnir/eslint-config/typescript",
    "@mjolnir/eslint-config/react"
  ]
}
```

### jest 环境
```json
{
  "extends": [
    "@mjolnir/eslint-config/jest"
  ]
}
```
