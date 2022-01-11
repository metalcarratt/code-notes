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

## Async and Await
Await result of a function that returns a promise. Must be in an function defined as async.
```JavaScript
const doAsync = () => {
    return new Promise(resolve => {
        setTimeout() => resolve('did something'), 3000);
    });
}

const doSomething = async () => {
    await doAsync();
};
```

Using async makes a function return a promise:
```JavaScript
const doAsync = async () => {
    return 'test';
}

doAsync().then(alert); // will alert 'test'
```


Reference: https://nodejs.dev/learn/understanding-javascript-promises
