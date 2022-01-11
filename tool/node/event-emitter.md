# The Event Emitter
Mimics browser events.

Create the emitter:
```JavaScript
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
```

Create an Event:
```JavaScript
eventEmitter.emit('eventName');
```

Handle the event:
```JavaScript
eventEmitter.on('eventName', () => {});
```

## Arguments
On emission:
```JavaScript
eventEmitter.emit('event', 23);
```

On handle:
```JavaScript
eventEmitter.on('event', number => {
    console.log(number); // 23
});

References: https://nodejs.dev/learn/the-nodejs-event-emitter
