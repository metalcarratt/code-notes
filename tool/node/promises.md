# Promises

Create a promise:
```JavaScript
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve(result);
    } else {
        reject(error);
    }
});
```

Use it:
```JavaScript
promise.then(result => {
    // use result
})
.catch(error => {
    // process error
});
```

Chaining:
```JavaScript
fetch('/todos.json')
  .then(response => {
    if (response.status >= 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText))
    })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

Reference: https://nodejs.dev/learn/understanding-javascript-promises
