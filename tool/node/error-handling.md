# Error Handling

Throw an error:
```JavaScript
throw new Error('Error');
```

Catch an error:
```JavaScript
try {
   //
} catch (e) {
   //
}

Catching uncaught exceptions:
```JavaScript
process.on('uncaughtException', err => {
   // do stuff
   process.exit(1); // mandatory
});
```

Errors can also be used with promises (using `.catch`) and Async/Await.
