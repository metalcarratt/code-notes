## Font awesome
Install:
```sh
npm i --save @fortawesome/fontawesome-svg-core

npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

npm i --save @fortawesome/vue-fontawesome@latest-3
```

In `main.ts`:
```ts
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');
```

Use:
```vue
<font-awesome-icon icon="fa-solid fa-user-secret" />
```
