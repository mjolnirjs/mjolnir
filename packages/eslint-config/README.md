# @mjolnir/eslint-config

适用于 node/es/ts/react 环境下的 eslint 配置集合。

## 使用说明
按环境区分使用

### es6 (默认)
`npm i -D @mjolnir/eslint-config eslint eslint-plugin-import`

#### 配置
```json
{
  "extends": [
    "@mjolnir/eslint-config"
  ]
}
```


### Node.js
`npm i -D @mjolnir/eslint-config eslint eslint-plugin-node`

#### 配置
```json
{
  "extends": [
    "@mjolnir/eslint-config/node"
  ]
}
```

### Babel (ES)
`npm i -D @mjolnir/eslint-config eslint eslint-plugin-import babel-eslint eslint-plugin-babel`

#### 配置
```json
{
  "extends": [
    "@mjolnir/eslint-config/babel"
  ]
}
```

### TypeScript
`npm i -D @mjolnir/eslint-config eslint eslint-plugin-import @typescript-eslint/parser @typescript-eslint/eslint-plugin`

#### 配置
```json
{
  "extends": [
    "@mjolnir/eslint-config/typescript"
  ]
}
```

### React
`npm i -D @mjolnir/eslint-config eslint eslint-plugin-import babel-eslint eslint-plugin-babel eslint-plugin-react eslint-plugin-react-hook`

#### 配置
```json
{
  "extends": [
    "@mjolnir/eslint-config/babel",
    "@mjolnir/eslint-config/react"
  ]
}
```



### React with TypeScript
`npm i -D @mjolnir/eslint-config eslint eslint-plugin-import @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hook`

#### 配置
```json
{
  "extends": [
    "@mjolnir/eslint-config/typescript",
    "@mjolnir/eslint-config/react"
  ]
}
```

