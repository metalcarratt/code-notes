# Vue

## Vue 3
[Script setup](script-setup.md)

[Vuex](vue3-vuex.md)

## Create a project
```
vue create hello-world
```

## Useful stuff
[Working on Github](github.md)
[Testing](testing.md)

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

Use:
```
<font-awesome-icon icon="fa-solid fa-user-secret" />
```
