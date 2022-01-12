# Props
Props:
```JavaScript
function ComponentName(props) {
    return (
        <span>{props.title}</span>
    );
}

export default ComponentName;
```

Pass in props:
```JavaScript
import ComponentName from './ComponentName.jsx';

function App() {
    return (
        <ComponentName title="abc" list={ ['abc'] }/>
    );
}

export default App;
```
