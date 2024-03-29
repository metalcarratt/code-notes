# Vue3 Vuex

## Install
```
npm install vuex
```

## Simplest store
```ts
import { createStore } from 'vuex';

const store = createStore({
    state: {
        count: 0
    }
});

export default {
    store,
    getCount() {
      return store.state.count;
    }
}
```

Main:
```ts
import { createApp } from 'vue';
import App from './App.vue';
import stores from './store';

createApp(App);
    .use(store);
    .mount('#app');
```

## Modules
Store:
```ts
import { createStore } from 'vuex';
import module1 from './module1';

const store = createStore({
    modules: {
        module1: module1.store
    }
});
export default store;
```

## Typescript
```ts
interface StoreType {
  count: number,
  name: string
}

const store = createStore<StoreType>({
    state: {
        count: 0,
        name: 'hi'
    }
});
```

### Typed array
```ts
interface StoreType {
  list: string[]
}
```
