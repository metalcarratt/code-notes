# JSX

## Using map for For-each behaviour
```JavaScript
return (
  <div>
    {list.map(item => <span>{item}</span>)}
  </div>
}
```

## Conditional rendering
```JavaScript
return (
  <div>
    { show && <OtherComponent/> }
  </div>
}
```
