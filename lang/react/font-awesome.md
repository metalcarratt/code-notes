# Font awesome

Install:

```sh
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/react-fontawesome@latest
```
(https://docs.fontawesome.com/web/use-with/react/add-icons)

In App.tsx:
```ts
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

library.add(faFolder);
```
(where 'faFolder' is icon 'folder')

To use:
```ts
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

<FontAwesomeIcon icon={faFolder} />
```

