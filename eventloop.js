//javascript is synchronoush single threaded language

//Eventloop --> event loop is continous watches callstack and callback queue/event queue.
//why we need callback queue :-->There are multiple thing happen in browser callback,timer ,event . However everything execute at the callstack. So execute the callback function
//squencially .callback queue give chance to callmethods and other event one after other.
//settimeout function register callback function in web apis and also start the metioned time.

console.log("start");

setTimeout(() => {}, 5000);

//fetch :
//mircortask queue --> whatever come through promise callback and mutation observer can go in to microtask queue. Micro task queue having highpriority.
//other callback fn comefrom domapi and settimeout goes to callback queue/taskqueue.
//starvation of task inside the callback queue : while executing microtask queue if callback fun call nested function internally. And that call happen in loop than callback function of callback queue
//will not get chance of execution. that scenario call starvation of callback.

fetch("https://api.netflix.com").then(function cbf() {});
console.log("End");
