# Working on Github
## Change output dir to docs
In `vue.config.js`:
```ts
const path = require("path");
module.exports = defineConfig({
  outputDir: path.resolve(__dirname, "./docs"),
})
```
(in addition to whatever else is in that file)

## Change root of application
In `vue.config.js`:
```ts
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/masterlist/'
    : '/'
})
```
Where `/masterlist/` is your deployed context root

## Put it altogether:
```ts
const { defineConfig } = require('@vue/cli-service')
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, "./docs"),
  publicPath: process.env.NODE_ENV === 'production'
    ? '/masterlist/'
    : '/'
})
```
