# State

To add state:
```JavaScript
import { useState } from 'react';

function MyComponent {
  const [myState, setMyState] = useState(0);
  
  function changeState() {
    setMyState(1);
  }
  
  return (
    <div>{ myState }</div>
  );
}
```


Reference: https://stackoverflow.com/questions/45404546/react-stateful-components-without-classes
