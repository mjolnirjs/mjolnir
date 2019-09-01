# @mjolnir/eslint-config

适用于 node/es/ts/react 环境下的 eslint 配置集合。 包含与 prettier 的结合。

## requirement

- eslint
- prettier

## 说明

### requirement

- eslint@6

### 包含的插件

```
@typescript-eslint/eslint-plugin
@typescript-eslint/parser
babel-eslint
eslint-plugin-babel
eslint-plugin-import
eslint-plugin-jest
eslint-plugin-node
eslint-plugin-react
eslint-plugin-react-hooks
eslint-config-prettier
eslint-plugin-prettier
```

## 安装

`yarn add eslint @mjolnir/eslint-config -D`

or

`npm i eslint @mjolnir/eslint-config -D`

## 配置

### es6/node (默认)

适用于 web 开发, 基于 ES6 Module 模块化方式。

```json
{
  "extends": ["@mjolnir"] // same as @mjolnir/eslint-config
}
```

### Node.js with commonJS

纯 node 项目, 使用 commonJS 模块化方式。

```json
{
  "extends": ["@mjolnir/eslint-config/node"]
}
```

## overrides 配置

通过提供 `overrides` 的方式，增强对 `babel`, `typescript`, react`,`jest`项目的支持。 配置文件需要使用`.eslintrc.js` 格式。

### recommended

推荐的 override 配置项，包含：

- babel
- typescript
- react
- jest
- mdx

适用于 Jest 项目，处理的文件类型: `**/*.{spec,test}.{js,jsx,ts,tsx}`.

```js
const { recommended } = require('@mjolnir/eslint-config/overrides');
{
  ...,
  "overrides": [
    ...recommended
  ]
}
```

### Babel (ES)

适用 babel 的项目, 处理的文件为: `**/*.{js, jsx}`.

```js
const { babel } = require('@mjolnir/eslint-config/overrides');
{
  ...,
  "overrides": [
    babel
  ]
}
```

### TypeScript

适用 typescript 的项目, 处理的文件为: `**/*.ts?(x)`.

```js
const { typescript } = require('@mjolnir/eslint-config/overrides');
{
  ...,
  "overrides": [
    typescript
  ]
}
```

### React

适用于 react 项目, 处理的文件为: `**/*.{js,jsx,ts,tsx}`.

```js
const { react } = require('@mjolnir/eslint-config/overrides');
{
  ...,
  "overrides": [
    react
  ]
}
```

### Jest

适用于 Jest 项目，处理的文件类型: `**/*.{spec,test}.{js,jsx,ts,tsx}`.

```js
const { jest } = require('@mjolnir/eslint-config/overrides');
{
  ...,
  "overrides": [
    jest
  ]
}
```

### mdx

适用于 mdx 文件，处理的文件类型: `*.mdx`.

```js
const { mdx } = require('@mjolnir/eslint-config/overrides');
{
  ...,
  "overrides": [
    mdx
  ]
}
```
