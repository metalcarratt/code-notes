# The Event Loop

## Call Stack
The call stack is a FILO (first in last out) stack.

## Message Queue
The message queue is where timer events and user events like clicks, etc go. When the call stack is finished the message queue is referenced next.

Using `setTimeout(() => {}, 0)` will push the code in `{}` to to the message queue immediately. It will run when the call stack is finished.

Using `setImmediate(() => {})` pushes something to the front of the message queue (not the end, like `setTimeout` does).

## Job Queue
Promises put the result of an async function in a job queue, which executes straight after the current method (cuts to the top of the call stack).

## Next Tick
`nextTick()` makes something run, I think, before the next item in the message queue, but after the call stack is exhausted.


References:
- https://nodejs.dev/learn/the-nodejs-event-loop
- https://nodejs.dev/learn/understanding-process-nexttick
- https://nodejs.dev/learn/understanding-setimmediate
