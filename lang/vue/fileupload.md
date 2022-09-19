# File Upload
```vue
<template>
  <input type="file" @change="uploadFile" />
</template>

<script setup>
import { ref } from 'vue';

const textfile = ref();

const uploadFile = async (event) => {
    const file = event.target?.files[0];
    const text = await file.text();
    
    textfile.value = text;
}
</script>
```
