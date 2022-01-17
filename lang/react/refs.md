# Refs
Create refs using a callback like this:
```JavaScript
function MyComponent {
  let myRef = null;
  function setMyRef(element) {
    myRef = element;
  }
  
  return (
    <div ref={setMyRef} />
  );
}
```

You can then use things like `focus()` on the ref:
```JavaScript
onClickHandler(event) {
  myRef.focus();
}
```
