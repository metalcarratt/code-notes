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

