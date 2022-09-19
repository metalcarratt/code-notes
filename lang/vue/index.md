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

[Font Awesome[(fontawesome.md)

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


