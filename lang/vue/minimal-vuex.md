# Minimal Vuex Store

```
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        value: true
    }
});

export default {
    getValue: () => store.state.value,
    setValue: (value) => store.state.value = value
}
```
