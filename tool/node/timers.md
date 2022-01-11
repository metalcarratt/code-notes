# Timers
## Set Timeout
Run something in the future

Run after two seconds:
```JavaScript
setTimeout(() => {
    // code
}, 2000);
```

Pass parameters:
```JavaScript
setTimeout((a, b) => {
    // code
), 2000, a, b);
```

Clear timeout:
```JavaScript
const id = setTimeout(() => {}, 2000);
clearTimeout(id);
```

Zero delay:
```JavaScript
setTimeout(() => {}, 0);
```

## Set Interval
Run something forever at set intervals.

Run every two seconds:
```JavaScript
setInterval(() => {}, 2000);
```

Clear interval:
```JavaScript
const id = setInterval(() => {}, 2000);
clearInterval(id);
```

Or from inside the function:
```JavaScript
const id = setInterval(() => {
    if (<cond>) {
        clearInterval(id);
    }
}, 2000);
```

## Recursive timeout
Runs another timeout when the first one finishes

```JavaScript
const myFunc = () => {
    setTimeout(myFunc, 1000);
}
setTimeout(myFunc, 1000);
```

References: https://nodejs.dev/learn/discover-javascript-timers
