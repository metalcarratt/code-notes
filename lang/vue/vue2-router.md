# Vue Router (vue 2)
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
