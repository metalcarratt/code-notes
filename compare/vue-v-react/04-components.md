# Components

## Referencing components and passing in props
Vue:

`MyHeader.vue`:
```vue
<template>
    <h1>{{ props.heading }}</h1>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['heading']);
</script>
```

`App.vue`:
```vue
<template>
    <MyHeader heading="This is Compare-Vue" />
</template>

<script setup>
import MyHeader from './components/MyHeader.vue';
</script>
```

React:

(These could be separate files like the Vue example, but in Vue they *have* to be separate files; in React they don't)
```tsx
const MyHeader = (props: {heading: string}) => {
    return (<h1>{props.heading}</h1>)
}

function App() {
    return (
        <div>
            <MyHeader heading="This is Compare-React" />
        </div>
    );
}

export default App;
```
