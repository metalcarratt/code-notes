# Vue3 Vuex

## Simplest store
```
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
```
import stores from './store';
const app = create(App);
app.use(store);
app.mount('#app');
```

## Modules
Store:
```
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
```
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
```
interface StoreType {
  list: string[]
}
```
