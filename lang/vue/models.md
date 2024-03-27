# Models
To expose a model from a component, only need to do this:
```ts
import { defineModel } from 'vue';

const model = defineModel();
```

You can then reference it in the template as `model` or in the script tag as `model.value`. Any changes will be automatically reflected to using components.

In the 'using' component, just use `v-model` as usual:

```xml
<MyComponent v-model="model" />
```
