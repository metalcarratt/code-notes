
# New component

Create it:
```JavaScript
function ComponentName() {
    return (
        <span>abc</span>
    );
}

export default ComponentName;
```

Use it:
```JavaScript
import ComponentName from './ComponentName.jsx';

function App() {
    return (
        <ComponentName />
    );
}

export default App;
```
