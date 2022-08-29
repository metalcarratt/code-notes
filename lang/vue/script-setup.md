# Script setup
Looks like:
```xml
<script setup>
...
</script>
```

## Refs
```vue
<template>
  {{ var1 }}
</template>
<script setup>
import { ref } from 'vue';
const var1 = ref(0);
var1.value = 2;
</setup>
```

## Props
```
<template>
  {{ props.title }}
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title: String
});
</script>
```

## Emits
```
<template>
  <button @click="emit('touched')"/>
<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['touched']);
</script>
```

## Method
```
<template>
  <button @click="doSomething"/>
</template>
<script setup>
const doSomething = () => {
  // ...
}
</script>
```

## Components
```
<template>
  <MyComponent />
</template>
<script setup>
import MyComponent from './MyComponent';
</script>
```

## V-model
```
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    modelValue: Boolean
});

const emit = defineEmits(['update:modelValue']);

emit('update:modelValue', "new value");
```
