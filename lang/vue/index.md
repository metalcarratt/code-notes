# Vue

## Create a project
```
vue create hello-world
```

## Change output dir to docs
In `vue.config.js`:
```
const path = require("path");
module.exports = defineConfig({
  outputDir: path.resolve(__dirname, "./docs"),
})
```
(in addition to whatever else is in that file)

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
