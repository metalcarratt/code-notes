# JSX

## Iterate over a list
Using a map:
```JavaScript
return (
  <div>
    {list.map(item => <span>{item}</span>)}
  </div>
}
```

## Conditional rendering
Using logical && operator:
```JavaScript
return (
  <div>
    { show && <OtherComponent/> }
  </div>
}
```
Reference: https://reactjs.org/docs/conditional-rendering.html
