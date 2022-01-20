# Forms

Bind a text input to component state like so:

```JavaScript
import { useState } from 'react';

function MyComponent() {
  const [myValue, setMyValue] = useState('');
  
  updateMyValue = (event) => setMyValue(event.target.value);
  
  return (
    <input type="text" value={myValue} onChange={updateValue} />
  );
}
```
