# Vue

## Create a project
```
vue create hello-world
```

## Working on Github
### Change output dir to docs
In `vue.config.js`:
```
const path = require("path");
module.exports = defineConfig({
  outputDir: path.resolve(__dirname, "./docs"),
})
```
(in addition to whatever else is in that file)

### Change root of application
In `vue.config.js`:
```
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/masterlist/'
    : '/'
})
```
Where `/masterlist/` is your deployed context root

### Put it altogether:
```
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

## Vue 3
[Script setup](script-setup.md)

[Vuex](vue3-vuex.md)

## Vue 2
[Minimal vuex store](minimal-vuex.md)


### Vue Router (vue 2)
In `package.json`:
```
"dependencies": {
    "vue-router": "^3.4.9"
  }
```

In `main.js`:
```
import VueRouter from 'vue-router';

const routes = [
  { path: '/', redirect: '/0' },
  { path: '/:id', component: Verse }
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
```

## Font awesome
Install:
```
npm i --save @fortawesome/fontawesome-svg-core

npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

npm i --save @fortawesome/vue-fontawesome@latest-3
```

In `main.ts`:
```
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');
```
