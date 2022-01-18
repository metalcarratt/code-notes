# Events

## Handle events
Write a function to handle an event that takes `event` object:
```JavaScript
function handleEvent(e) {
  ...
}
```

Call the function from an event handler:
```JavaScript
<div onClick={handleEvent} />
```

## Call parent from event
In the parent, pass the eventHandler to the child component:
```JavaScript
function handleOnClick(e) {
  ...
}
return (
  <ChildComponent onClick={handleOnClick} />
);
```

In the child call the eventHandler in props from the event handler:
```JavaScript
<div onClick={props.onClick} />
```

Pass an argument as follows:
```JavaScript
<div onClick={(e) => props.onClick(arg1)} />
```
